/** Canonical public origin. Override with NEXT_PUBLIC_SITE_URL on Vercel. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alamalmortgage.com"
).replace(/\/$/, "");
