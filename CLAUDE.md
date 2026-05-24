# CLAUDE.md (Chef Frontier)

This is the `Chef` repository — an all-in-one music and DSP toolkit built for speed using Bun, Rust, and C++. It follows the **Frontier** repository pattern, optimized for AI-agentic development.

## Project Structure (Monorepo)

- `apps/`: Top-level applications.
  - `apps/strudel-local/`: Local Strudel environment.
- `packages/`: Internal shared libraries (UI, DSP, Utils).
- `.cursor/`: Cursor AI configurations.
- `.claude/`: Claude Code agentic memory and skills.

## Building and Running

### Commands

- **Build all packages**: `bun run build`
- **Run dev environment**: `bun dev`
- **Test everything**: `bun test`
- **Lint with Biome**: `bun lint`

### Subproject Commands

Each subproject in `apps/` or `packages/` should have its own `CLAUDE.md` with specific build/test instructions.

- **Strudel Local**: `cd apps/strudel-local && bun install && bun run dev`

## Coding Standards & Conventions

1. **The Zonic Way of Work**: You must read and adhere to `.learning/procedural/WAY_OF_WORK.md`.
2. **Operational Pitfalls**: Avoid the traps listed in `.learning/failure/ANTI_PATTERNS.md`. No "LGTM" culture. Demand receipts.
3. **Bun First**: Use `bun` for all JS/TS tasks. Avoid `npm` or `yarn`.
4. **TypeScript-First**: All new JS code must be TypeScript with strict types.
5. **Rust for DSP**: Use Rust (`nih-plug`) for new VST development unless C++ is explicitly required by legacy libraries.
6. **Agentic Metadata**: Always update `CLAUDE.md` when adding new subprojects or changing build workflows.
7. **Testing**: Add tests in the `test/` directory of each package, ending in `.test.ts`.

## Test Organization

- `apps/*/test/`: Application-level integration tests.
- `packages/*/test/`: Unit tests for libraries and DSP modules.

## VST Development Notes

- **Plugin Formats**: CLAP (Primary), VST3, AU.
- **Paths**:
  - VST3: `~/Library/Audio/Plug-Ins/VST3/`
  - CLAP: `~/Library/Audio/Plug-Ins/CLAP/`
  - AU: `~/Library/Audio/Plug-Ins/Components/`

## Code Review Self-Check

- Verify that `bun test` passes before committing.
- Ensure `bun lint` has been run.
- Check that new subprojects follow the `apps/` or `packages/` layout.

---
*This file is the source of truth for AI agents (Claude Code, Cursor). Maintain it with care.*
