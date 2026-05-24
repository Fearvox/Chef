---
name: setup
description: Clone Strudel repo, install dependencies, and start the dev server. Use when setting up the project for the first time.
---

# Strudel Setup

Execute these steps in order:

1. **Check prerequisites**:
   ```bash
   node --version   # must be >= 18
   pnpm --version   # must be installed
   ```
   If pnpm is missing, run `npm install -g pnpm`.

2. **Clone from Codeberg** (NOT GitHub — the GitHub mirror is archived):
   ```bash
   git clone https://codeberg.org/uzu/strudel.git
   ```

3. **Install dependencies**:
   ```bash
   cd strudel && pnpm i
   ```

4. **Start dev server**:
   ```bash
   pnpm dev
   ```
   This runs jsdoc-json generation first, then starts the Astro dev server for the REPL.

5. **Verify**: Open the URL shown in terminal (usually `http://localhost:4321`). The Strudel REPL should load.

6. **Tell the user** to open the browser and try typing `sound("bd sd hh sd")` in the REPL, then press Ctrl+Enter to hear a basic drum pattern.

If any step fails, diagnose before proceeding. Common issues:
- Node version too old → `nvm use 18` or install Node 20+
- Port conflict → check `lsof -i :4321`
- pnpm lockfile issues → `rm -rf node_modules && pnpm i`
