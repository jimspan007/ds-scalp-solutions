# Deployment (Cloudflare Workers)

This app is a TanStack Start project built with the `@cloudflare/vite-plugin`
and deployed to Cloudflare Workers via **Workers Builds**.

## Two problems this setup solves

### 1. The virtual entry point

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
wrangler command must point at that built file with `-c dist/server/wrangler.json`.

### 2. Build output is not shared between CI steps

Cloudflare Workers Builds runs the **Build command** and the **Deploy/Version
command** as separate steps and does **not** carry the gitignored build output
(`dist/`) between them. A deploy command that only runs
`wrangler deploy -c dist/server/wrangler.json` therefore fails with:

```
✘ ENOENT: no such file or directory, open '/opt/buildhome/repo/dist/server/wrangler.json'
```

The fix: the deploy/version commands **build and deploy in a single invocation**
(`vite build && wrangler ...`), so the artifact is guaranteed to exist when
wrangler reads it.

## npm/bun scripts

| Script | Command |
|--------|---------|
| `build` | `vite build` |
| `deploy` | `vite build && wrangler deploy -c dist/server/wrangler.json` |
| `upload` | `vite build && wrangler versions upload -c dist/server/wrangler.json` |
| `cf-typegen` | `wrangler types` |

`deploy` and `upload` are self-contained (build + deploy) on purpose — see
problem 2 above. They use the locally-pinned wrangler (in `node_modules`),
avoiding `npx` pulling a newer/untested wrangler on each run.

## Cloudflare Workers Builds configuration

Set these in **Cloudflare dashboard → Worker → Settings → Builds → Build
configuration**:

| Field | Value |
|-------|-------|
| Build command | `bun install` *(deps only — the deploy command builds)* |
| Deploy command | `bun run deploy` |
| Version command | `bun run upload` |
| Root directory | `/` |

> You can also leave the Build command as `bun run build`; it just means the app
> is built twice (once in the build step, once inside the deploy command). Both
> work — the self-contained deploy command is what guarantees correctness.

## Local deploy

```sh
bun run deploy   # build + deploy to production
bun run upload   # build + upload a new version (gradual/preview)
```
