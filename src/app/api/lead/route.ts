import { NextResponse } from "next/server";

import {
  FORMSUBMIT_AJAX_ENDPOINT,
  FORMSUBMIT_EMAIL,
} from "@/lib/formSubmit";

export const runtime = "nodejs";

type LeadPayload = Record<string, string>;

function sanitizePayload(input: unknown): LeadPayload | null {
  if (!input || typeof input !== "object") return null;
  const out: LeadPayload = {};
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (typeof value === "string") out[key] = value;
    else if (typeof value === "number" || typeof value === "boolean") {
      out[key] = String(value);
    }
  }
  return out;
}

async function sendViaWeb3Forms(payload: LeadPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      from_name: "Al Amal Mortgage Website",
      ...payload,
    }),
  });

  const body = await response.json().catch(() => ({}));
  return {
    provider: "web3forms" as const,
    ok: response.ok && body?.success === true,
    status: response.status,
    message:
      typeof body?.message === "string"
        ? body.message
        : "Web3Forms submission failed.",
  };
}

async function sendViaFormSubmit(payload: LeadPayload) {
  const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      _captcha: payload._captcha || "false",
      _template: payload._template || "box",
      _honey: payload._honey || "",
    }),
  });

  const body = await response.json().catch(() => ({}));
  const successFlag = body.success === true || body.success === "true";
  const message =
    typeof body.message === "string" ? body.message : "";
  const needsActivation = /activat/i.test(message);
  const ok = response.ok && successFlag && !needsActivation;

  return {
    provider: "formsubmit" as const,
    ok,
    status: response.status,
    message:
      message ||
      (ok
        ? "Sent"
        : `FormSubmit rejected the submission (${response.status}).`),
    needsActivation,
  };
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const payload = sanitizePayload(json);
  if (!payload) {
    return NextResponse.json(
      { ok: false, message: "Invalid form payload." },
      { status: 400 }
    );
  }

  // Prefer Web3Forms when configured (more reliable than FormSubmit).
  try {
    const web3 = await sendViaWeb3Forms(payload);
    if (web3?.ok) {
      return NextResponse.json({ ok: true, provider: web3.provider });
    }
    if (web3 && !web3.ok && process.env.WEB3FORMS_ACCESS_KEY) {
      // Web3Forms configured but failed — still try FormSubmit as backup.
      console.error("[api/lead] Web3Forms failed:", web3);
    }
  } catch (error) {
    console.error("[api/lead] Web3Forms error:", error);
  }

  try {
    const formSubmit = await sendViaFormSubmit(payload);
    if (formSubmit.ok) {
      return NextResponse.json({ ok: true, provider: formSubmit.provider });
    }

    return NextResponse.json(
      {
        ok: false,
        provider: formSubmit.provider,
        message: formSubmit.needsActivation
          ? `FormSubmit needs email activation for ${FORMSUBMIT_EMAIL}. Open that inbox, click the activation link, then submit again.`
          : "We could not deliver your request right now. Please call 800-2060 or WhatsApp +971 55 470 1475.",
        needsActivation: formSubmit.needsActivation || false,
        detail: formSubmit.message,
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("[api/lead] FormSubmit error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Mail service is unreachable right now. Please call Call: 800-2060 or +971 55 470 1475.",
      },
      { status: 503 }
    );
  }
}
