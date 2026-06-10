# Deployment (Cloudflare Workers)

This app is a TanStack Start project built with the `@cloudflare/vite-plugin`
and deployed to Cloudflare Workers via **Workers Builds**.

## Why deploys need an explicit config

The root [`wrangler.jsonc`](./wrangler.jsonc) sets:

```jsonc
"main": "@tanstack/react-start/server-entry"
```

That entry point is **virtual** — it only exists while Vite is building (the
Cloudflare plugin resolves it on the fly). It is not a real file on disk, so any
wrangler command run against the root config fails with:

```
✘ [ERROR] The entry-point file at "@tanstack/react-start/server-entry" was not found.
```

The build emits the real, deployable worker and a generated config at
**`dist/server/wrangler.json`** (`main: index.js`, assets → `../client`). Every
wrangler command that touches config must therefore point at that built file
with `-c dist/server/wrangler.json`.

> The plugin also writes `.wrangler/deploy/config.json` (a "redirected config"
> meant to make a bare `wrangler deploy` follow the built output), but that file
> is gitignored and machine-specific, and is not honored reliably in CI. The
> explicit `-c` flag is the deterministic fix.

## npm/bun scripts

| Script | Command |
|--------|---------|
| `build` | `vite build` |
| `deploy` | `wrangler deploy -c dist/server/wrangler.json` |
| `upload` | `wrangler versions upload -c dist/server/wrangler.json` |
| `deploy:build` | `vite build && wrangler deploy -c dist/server/wrangler.json` (local one-shot) |
| `cf-typegen` | `wrangler types` |

The scripts use the locally-pinned wrangler (in `node_modules`), avoiding `npx`
pulling a newer/untested wrangler on each run.

## Cloudflare Workers Builds configuration

Set these in **Cloudflare dashboard → Worker → Settings → Builds → Build
configuration**:

| Field | Value |
|-------|-------|
| Build command | `bun run build` |
| Deploy command | `bun run deploy` |
| Version command | `bun run upload` |
| Root directory | `/` |

> If you prefer not to use the scripts, the equivalent direct commands are:
> - Deploy: `npx wrangler deploy -c dist/server/wrangler.json`
> - Version: `npx wrangler versions upload -c dist/server/wrangler.json`

## Local deploy

```sh
bun run deploy:build   # build, then deploy
```
