// Fail loudly if @cloudflare/vite-plugin cannot load.
//
// The @lovable.dev/vite-tanstack-config wraps the Cloudflare plugin in a
// `try { await import("@cloudflare/vite-plugin") } catch {}` block. If the
// import throws (e.g. its native deps — workerd/esbuild platform binaries —
// were not installed, which happens when CI installs with bun instead of npm),
// the plugin is silently skipped and `vite build` produces a plain Node SSR
// build (dist/server/server.js) with NO Cloudflare worker and NO
// dist/server/wrangler.json — and the deploy then fails with a confusing ENOENT.
//
// This script makes that failure explicit and actionable.
try {
  await import("@cloudflare/vite-plugin");
  console.log("✓ @cloudflare/vite-plugin loaded — build will emit the Cloudflare worker");
} catch (error) {
  console.error("\n✘ @cloudflare/vite-plugin failed to load.");
  console.error("  vite build would silently produce a Node server (dist/server/server.js)");
  console.error("  instead of a Cloudflare worker (dist/server/index.js + wrangler.json).");
  console.error("  Most likely its native deps were not installed — install with npm (npm ci), not bun.\n");
  console.error("  Underlying error:");
  console.error(error);
  process.exit(1);
}
