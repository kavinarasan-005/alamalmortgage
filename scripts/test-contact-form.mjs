import { chromium } from "playwright-core";
import path from "node:path";

const executablePath = path.join(
  process.env.LOCALAPPDATA || "",
  "ms-playwright",
  "chromium-1228",
  "chrome-win64",
  "chrome.exe"
);

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage();

page.on("console", (msg) => console.log("[page]", msg.text()));
page.on("requestfinished", async (req) => {
  if (req.url().includes("web3forms") || req.url().includes("formsubmit")) {
    const res = await req.response();
    console.log("NETWORK", req.url(), "=>", res?.status());
  }
});

await page.goto("http://localhost:3003/contact", { waitUntil: "networkidle" });

await page.fill('input[name="fullName"]', "Al Amal Real Browser QA Test");
await page.fill('input[name="email"]', "qa-real-browser@example.com");
await page.fill('input[name="phone"]', "+971500000002");
await page.selectOption('select[name="serviceNeeded"]', "Residential mortgage");
await page.fill(
  'textarea[name="message"]',
  "REAL BROWSER END-TO-END TEST via Playwright Chromium — confirms Web3Forms delivery from an actual browser context."
);

await page.click('button[type="submit"]');
await page.waitForTimeout(6000);

const successVisible = await page
  .locator("text=Request received!")
  .isVisible()
  .catch(() => false);
const errorText = await page
  .locator('[role="alert"]')
  .textContent()
  .catch(() => null);

console.log("SUCCESS_MESSAGE_VISIBLE:", successVisible);
console.log("ERROR_TEXT:", errorText);

await browser.close();
process.exit(successVisible ? 0 : 1);
