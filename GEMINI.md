# Chef Frontier Workspace

## Project Mandate
`Chef` is a high-performance music and DSP monorepo. It serves as a container for algorithmic music (Strudel), DJ tooling, and VST plugin development.

## Tech Stack
- **Runtime:** [Bun](https://bun.sh)
- **Package Manager:** Bun Workspaces
- **Language:** TypeScript (Primary), Rust (VST/DSP), C++ (Native Bindings)
- **Linter/Formatter:** Biome
- **Music Engine:** Strudel (algorithmic composition)
- **Plugin Framework:** nihil-plug (Rust), JUCE/DPF (C++)

## Repository Structure
- `apps/`: Executable applications and live-coding environments.
  - `apps/strudel-local/`: Local strudel.cc environment.
- `packages/`: Shared libraries, UI components, and DSP modules.
- `.cursor/rules/`: Custom AI instructions for Cursor.
- `.claude/`: Memory and skill definitions for Claude Code.

## Conventions
- **Zero-Config:** Prefer Bun's native tools (bundler, test runner).
- **Agent-First:** Maintain `CLAUDE.md` and `.cursorrules` with high-fidelity project context.
- **DSP Quality:** Prioritize SIMD optimization and low-latency safety in native code.
- **Testing:** All new features must include `bun test` or `cargo test` suites.

## Commands
- `bun dev`: Start all dev servers in parallel.
- `bun test`: Run all tests in the workspace.
- `bun lint`: Run Biome linting/formatting.
