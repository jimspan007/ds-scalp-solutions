import { createServerFn } from "@tanstack/react-start";

// Returns the public GA4 measurement ID stored as a project secret.
export const getAnalyticsConfig = createServerFn({ method: "GET" }).handler(() => {
  const raw = (process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID ?? "").trim();
  const gaId = /^G-[A-Z0-9]+$/i.test(raw) ? raw : null;
  return { gaId };
});
