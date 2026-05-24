# CLAUDE.md (strudel-local)

> **Location**: `apps/strudel-local/CLAUDE.md` in the Chef Frontier monorepo.
> **Upstream**: `strudel/` submodule (codeberg.org/uzu/strudel).
> **Last reviewed**: 2026-05-23.

## Project Overview
Local **Strudel** live coding music playground. Strudel is a JavaScript port of TidalCycles.

## Architecture
Strudel is a monorepo. Key directories in the submodule:
- `packages/core`: Pattern engine.
- `packages/mini`: Mini-notation parser.
- `packages/webaudio`: WebAudio output.

## Commands (Frontier Style)
Prefer using `bun` for scripts when possible, but Strudel relies on `pnpm` for workspace management.

```bash
bun install         # at root of Chef to link packages
pnpm i              # inside apps/strudel-local/strudel if needed
bun run dev         # defined in root package.json for this app
```

## Conventions
1. **Submodule Source**: Do not edit files in `strudel/` submodule directly unless contributing upstream.
2. **Local Overrides**: Put local configurations or snippets in `apps/strudel-local/` outside the submodule.
3. **Reference**: See root `CLAUDE.md` for workspace-wide mandates.
