# CLAUDE.md

> **This file is read by Claude Code at session start.** It tells future Claude sessions (and human contributors) what `Chef` is, what's installed, and what conventions to follow. Edit it when conventions change. Subdir CLAUDE.md files override the root for that subdir.
>
> Last reviewed: 2026-05-21. If today is more than 90 days past that date, re-run `/init` to refresh.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`Chef` is a personal multi-project container for music/DSP work, per `README.md`:

- Local strudel.cc setup (live coding / algorithmic patterns)
- DJ tooling built on open-source projects
- VST plugin development, primarily for Ableton Live, also FL Studio and other DAWs

Treat this repo as a **monorepo of unrelated music tools**, not a single application. Subprojects will arrive one at a time.

## Current state

The repo is brand-new and empty apart from `README.md`, `LICENSE`, and a `.gitignore` extended for JS/Python/macOS/audio in addition to its Rust-template base. There is no source code yet. Do not invent structure that isn't there — when asked to do something, first verify whether the relevant subproject exists.

## Commands

There are no project-level build/test/run commands yet (no source code). Once the first subproject lands:

- Build/test/run commands belong in `<subproject>/CLAUDE.md`, not here.
- For Rust subprojects (likely VST via `nih-plug`): `cargo build --release`, `cargo test`, `cargo nextest run` (if installed).
- For JS subprojects (likely strudel.cc local): check `<subproject>/package.json`; typically `npm install && npm run dev`.
- For C++ subprojects (likely VST via JUCE/DPF): check `<subproject>/CMakeLists.txt`; typically `cmake -S . -B build && cmake --build build`.

**When unsure which command to run, read `<subproject>/CLAUDE.md` first. If it doesn't exist, ask the user.**

## Language & framework — no single default

The `.gitignore` includes Rust because the repo was initialized with GitHub's Rust template, and `cargo`/`rustc` are installed at `~/.cargo/bin/`. **This is not a project mandate.** Confirm language per subproject.

Common stacks per domain:

| Domain | Common languages / frameworks |
|---|---|
| strudel.cc local | JS/TS (strudel is JS-native) |
| DJ tooling | C++ (Mixxx forks), Python (librosa, madmom), JS (web-based) |
| VST plugins | C++/JUCE (mainstream), C++/DPF (lightweight), Rust/nih-plug (newer), Faust (DSP DSL → compiles to multiple formats) |

When the user's request is ambiguous about language or framework, **ASK before scaffolding**. Never auto-create a subdirectory or write source files without confirmation.

## Toolchain landscape — open questions

These are choices the user has not committed to. When relevant, ask before assuming:

- **Plugin format**: VST3 (Steinberg, licensed), CLAP (open standard, supported by Bitwig + Reaper + FL Studio), AU (macOS native). CLAP-first is increasingly viable.
- **DSP authoring**: hand-coded in C++/Rust, or use Faust (functional DSP DSL that compiles to VST/AU/CLAP)?
- **VST validation**: `pluginval` (Tracktion, mature) and `clap-validator` are standard pre-release checks.
- **Test runner (Rust)**: `cargo test` (default) or `cargo nextest` (faster, parallel).
- **DAW for end-to-end testing**: which DAW(s) does the user actually use? Verify with `ls /Applications | grep -iE 'ableton|fl studio|logic|reaper|bitwig'` before assuming.

## When adding a new subproject

1. Put it in a **top-level subdirectory** (e.g., `vst-compressor/`, `strudel-local/`, `dj-deck/`) — not nested (no `vst-plugins/compressor/`). Flat structure only.
2. After creating the subdir, **run `/init` from inside it** — this scaffolds the subproject's own CLAUDE.md with real build/test commands.
3. Until `<subproject>/CLAUDE.md` exists, start from `.claude/templates/subproject-CLAUDE.md` as a skeleton.
4. Extend the repo-root `.gitignore` only if the new tooling needs additions beyond what's already covered (Rust + JS + Python + macOS + audio assets).
5. **Audit step (read this before doing other work):** if cwd is a top-level subdir and `./CLAUDE.md` does not exist, stop and create one from the template before scaffolding source files.

## VST / DAW notes

- VST3 / CLAP / AU build targets matter. When working on a plugin subproject, `<subproject>/CLAUDE.md` must say which format(s) it produces and where the DAW expects them installed:
  - VST3: `~/Library/Audio/Plug-Ins/VST3/`
  - CLAP: `~/Library/Audio/Plug-Ins/CLAP/`
  - AU (Components): `~/Library/Audio/Plug-Ins/Components/`
- Before assuming a DAW is available for end-to-end testing, verify the install: `ls /Applications | grep -iE 'ableton|fl studio|logic|reaper|bitwig'`. Do not assume any specific DAW is present.

## Audio & binary assets — do NOT commit

Audio files (`.wav`, `.aif`, `.flac`, sample packs) and DAW project files (`.als`, `.flp`, `.adg`) are excluded by `.gitignore`. If you need to version-control them, set up git-lfs first; do not commit raw audio to plain git (history bloat is unrecoverable).

## Editing CLAUDE.md (meta)

- CLAUDE.md changes should be reviewed the same way as code — they shape every Claude session's behavior.
- The user's explicit instructions always override anything in this file. If the user says "use JUCE for this VST", do that — do not argue with this file.

## If you're unsure

When in doubt about language, framework, scope, or whether to write code at all — **ask the user**. This file is intentionally minimal because the repo is empty; do not invent decisions that the user hasn't made.
