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

### 3. Use npm, not bun, to install in CI

`@cloudflare/vite-plugin` pulls in `workerd` and `esbuild`, whose binaries are
installed as **platform-specific optional dependencies** (e.g.
`@cloudflare/workerd-linux-64`, `@esbuild/linux-x64`). The `@lovable.dev` Vite
config adds the Cloudflare plugin inside a `try { await import(...) } catch {}`
block, so if those binaries are missing the plugin is **silently skipped** and
`vite build` produces a build with **no worker and no
`dist/server/wrangler.json`** — no error, just a broken artifact.

Two lockfile problems compounded this:

1. **`bun.lockb` was Windows-specific** — a bun lockfile generated on Windows does
   not carry the Linux binaries, so a Linux CI `bun install` from it omits them.
2. **`package-lock.json` was stale** — it pinned an *older*
   `@lovable.dev/vite-tanstack-config` (1.4.0) and was missing `nitro`, so the npm
   install path produced a different/broken build.

Fix: `bun.lockb` is removed, and `package-lock.json` is regenerated in sync with
`package.json`. npm's lockfile (lockfileVersion 3) records every platform's
optional deps, so a lockfile generated on any OS still installs the correct Linux
binaries in CI. **Install with npm** (the `package-lock.json` is the source of
truth) and use the `npm run …` commands below.

## npm/bun scripts

| Script | Command |
|--------|---------|
| `build` | `vite build` |
| `deploy` | `npm ci && node scripts/verify-cf-plugin.mjs && vite build && wrangler deploy -c dist/server/wrangler.json` |
| `upload` | `npm ci && node scripts/verify-cf-plugin.mjs && vite build && wrangler versions upload -c dist/server/wrangler.json` |
| `cf-typegen` | `wrangler types` |

`deploy` and `upload` are fully self-contained — they run their own clean **npm**
install, verify the Cloudflare plugin actually loaded, build, then deploy:

- **`npm ci`** — guarantees a clean **npm** install (correct platform binaries +
  install scripts) regardless of what Cloudflare's install step did. This is the
  fix for problem 3 — bun does not reliably install the workerd/esbuild binaries
  the Cloudflare plugin needs.
- **`scripts/verify-cf-plugin.mjs`** — fails loudly if `@cloudflare/vite-plugin`
  can't load, instead of letting `vite build` silently fall back to a Node SSR
  build with no worker (see problem 3).

## Cloudflare Workers Builds configuration

Set these in **Cloudflare dashboard → Worker → Settings → Builds → Build
configuration**:

| Field | Value |
|-------|-------|
| Build command | `npm ci` *(installs Linux binaries; the deploy command builds)* |
| Deploy command | `npm run deploy` |
| Version command | `npm run upload` |
| Root directory | `/` |

> Use **npm**, not bun, for install — see problem 3 above. The deploy/version
> commands build the app themselves, so the Build command only needs to install
> dependencies. You can also set the Build command to `npm run build`; it just
> means the app is built twice (harmless).

## Local deploy

```sh
npm run deploy   # build + deploy to production
npm run upload   # build + upload a new version (gradual/preview)
```
