/**
 * Client helper for website lead forms.
 *
 * Submissions go through our `/api/lead` route so we:
 * 1. Never show a fake success when delivery failed
 * 2. Prefer Web3Forms when WEB3FORMS_ACCESS_KEY is set (recommended)
 * 3. Fall back to FormSubmit's AJAX endpoint (requires activation)
 */

export const FORMSUBMIT_EMAIL = "ayush@alamalmortgage.com";
export const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export type FormSubmitResult =
  | { ok: true }
  | { ok: false; message: string; needsActivation?: boolean };

function toPlainObject(data: FormData | Record<string, string>): Record<string, string> {
  if (!(data instanceof FormData)) return data;
  const out: Record<string, string> = {};
  data.forEach((value, key) => {
    if (typeof value === "string") out[key] = value;
  });
  return out;
}

export async function submitToFormSubmit(
  data: FormData | Record<string, string>,
  options?: { subject?: string }
): Promise<FormSubmitResult> {
  const payload = toPlainObject(data);

  if (options?.subject) {
    payload._subject = options.subject;
    payload.subject = options.subject;
  }
  if (!payload._captcha) payload._captcha = "false";
  if (!payload._template) payload._template = "box";
  if (payload._honey === undefined) payload._honey = "";
  // Web3Forms honeypot (must stay empty)
  if (payload.botcheck === undefined) payload.botcheck = "";

  let response: Response;
  try {
    response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      message:
        "Could not reach the mail service. Please try again or call us on 800-2060.",
    };
  }

  let body: {
    ok?: boolean;
    message?: string;
    needsActivation?: boolean;
  } = {};
  try {
    body = await response.json();
  } catch {
    // non-JSON
  }

  if (!response.ok || body.ok === false) {
    return {
      ok: false,
      message:
        body.message ||
        "We could not send your request. Please try again or call 800-2060.",
      needsActivation: Boolean(body.needsActivation),
    };
  }

  return { ok: true };
}
