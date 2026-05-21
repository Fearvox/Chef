# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`Chef` is a personal multi-project container for music/DSP work, per `README.md`:

- Local strudel.cc setup (live coding / algorithmic patterns)
- DJ tooling built on open-source projects
- VST plugin development, primarily for Ableton Live, also FL Studio and other DAWs

Treat this repo as a **monorepo of unrelated music tools**, not a single application. Subprojects will arrive one at a time.

## Current state

The repo is brand-new and empty apart from `README.md`, `LICENSE`, and a Rust-flavored `.gitignore`. There is no source code yet. Do not invent structure that isn't there — when asked to do something, first verify whether the relevant subproject exists.

## Default language

- The `.gitignore` is the Rust/Cargo template (ignores `target/`, `**/*.rs.bk`, `**/mutants.out*/`, `*.pdb`). Treat Rust as the **default language assumption** for new subprojects (e.g., VST plugins via `nih-plug`, audio DSP crates) unless the user says otherwise.
- `cargo` and `rustc` are installed at `~/.cargo/bin/`.
- The DJ / strudel.cc subprojects may end up in JS/TS — confirm before scaffolding.

## When adding a new subproject

1. Put it in a top-level subdirectory named for what it is (e.g., `vst-compressor/`, `strudel-local/`, `dj-deck/`), not in the repo root.
2. Create a `<subproject>/CLAUDE.md` with the build/test/run commands and any DAW-specific gotchas — Claude loads subdirectory CLAUDE.md files automatically when working there.
3. Extend the repo-root `.gitignore` only if the new tooling needs it; the current ignores are Rust-only.

## VST / DAW notes

- VST3 / CLAP / AU build targets matter. When working on a plugin subproject, the `<subproject>/CLAUDE.md` must say which format(s) it produces and where the DAW expects them installed (`~/Library/Audio/Plug-Ins/VST3/`, `~/Library/Audio/Plug-Ins/Components/`, etc.).
- Neither Ableton Live nor FL Studio is installed in `/Applications` on this machine right now — do not assume a DAW is available for end-to-end testing unless the user confirms.
