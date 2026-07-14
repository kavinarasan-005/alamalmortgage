/**
 * Client-side lead form submission.
 *
 * Web3Forms is designed to be called directly from the browser with a
 * public access key (their docs: "it's safe to use it in client-side
 * code"). Calling it through our own server was actively harmful here —
 * Web3Forms' Cloudflare bot-protection blocks server-to-server requests,
 * so a proxy route made delivery *less* reliable, not more.
 *
 * FormSubmit is kept as an automatic fallback in case Web3Forms is ever
 * unreachable, but it also requires no build-time configuration.
 */

const WEB3FORMS_ACCESS_KEY = "11a0ab24-eb00-4061-873e-8e5232997712";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const FORMSUBMIT_EMAIL = "ayush@alamalmortgage.com";
const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

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

async function trySubmit(
  url: string,
  body: Record<string, unknown>
): Promise<{ ok: boolean; message?: string }> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, message: "network error" };
  }

  let json: { success?: boolean | string; message?: string } = {};
  try {
    json = await response.json();
  } catch {
    return { ok: false, message: "invalid response" };
  }

  const success = json.success === true || json.success === "true";
  return { ok: response.ok && success, message: json.message };
}

export async function submitToFormSubmit(
  data: FormData | Record<string, string>,
  options?: { subject?: string }
): Promise<FormSubmitResult> {
  const payload = toPlainObject(data);
  const subject = options?.subject || "New lead from website";

  // Primary: Web3Forms (reliable, purpose-built for client-side use).
  const web3 = await trySubmit(WEB3FORMS_ENDPOINT, {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: "Al Amal Mortgage Website",
    subject,
    ...payload,
  });
  if (web3.ok) return { ok: true };

  // Fallback: FormSubmit AJAX endpoint.
  const formSubmitPayload = {
    ...payload,
    _subject: subject,
    _captcha: payload._captcha || "false",
    _template: payload._template || "box",
    _honey: payload._honey || "",
  };
  const formSubmit = await trySubmit(FORMSUBMIT_AJAX_ENDPOINT, formSubmitPayload);
  if (formSubmit.ok) return { ok: true };

  const message = formSubmit.message || web3.message || "";
  const needsActivation = /activat/i.test(message);

  return {
    ok: false,
    needsActivation,
    message: needsActivation
      ? `Form email is not activated yet. Please check the inbox for ${FORMSUBMIT_EMAIL} and click the FormSubmit activation link.`
      : "We could not send your request. Please try again or call 800-2060.",
  };
}
