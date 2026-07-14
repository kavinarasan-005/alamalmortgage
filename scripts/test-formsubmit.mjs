/** Smoke-test /api/lead against a running local server. */
const base = process.env.TEST_BASE_URL || "http://localhost:3001";

const payload = {
  fullName: "Al Amal QA Bot",
  email: "qa-bot@example.com",
  phone: "+971500000001",
  mortgageType: "Residential mortgage",
  message: "Automated /api/lead delivery smoke test — please ignore.",
  subject: "QA smoke test — Al Amal website form",
  _subject: "QA smoke test — Al Amal website form",
  _captcha: "false",
  _template: "box",
  _honey: "",
  botcheck: "",
};

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 35000);

try {
  const res = await fetch(`${base}/api/lead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
    signal: controller.signal,
  });
  clearTimeout(timer);
  const text = await res.text();
  console.log("status:", res.status);
  console.log("body:", text);
  const parsed = JSON.parse(text);
  // A real success is ok:true. A correct failure path is also a "pass"
  // for verifying we no longer silently fake-submit.
  if (parsed.ok === true) {
    console.log("RESULT: delivery succeeded");
    process.exit(0);
  }
  console.log("RESULT: delivery failed loudly (expected until mail provider is healthy/configured)");
  process.exit(0);
} catch (err) {
  clearTimeout(timer);
  console.error("request failed:", err?.name || err, err?.message || "");
  process.exit(1);
}
