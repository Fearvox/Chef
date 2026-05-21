# CLAUDE.md (subproject template — copy to `<subproject>/CLAUDE.md` and fill in)

> Replace each `<...>` placeholder. Delete sections that don't apply. Loaded automatically by Claude when working in this subdir.
>
> Last reviewed: YYYY-MM-DD

## What this subproject is

<1-2 sentence description. What it does, who/what it's for.>

## Language & framework

- Language: <Rust / C++ / JS/TS / Python / Faust / ...>
- Framework: <nih-plug / JUCE / DPF / strudel / Mixxx fork / Pedalboard / custom>
- Plugin format(s): <VST3 / CLAP / AU / standalone / N/A>

## Commands

- Build: `<command>`
- Test: `<command>`
- Run / dev: `<command>`
- Lint / format: `<command>`
- Install plugin to system: `<command, or copy path>` (e.g., `cp -r target/release/<name>.vst3 ~/Library/Audio/Plug-Ins/VST3/`)

## Install paths (if a plugin)

- VST3: `~/Library/Audio/Plug-Ins/VST3/`
- CLAP: `~/Library/Audio/Plug-Ins/CLAP/`
- AU (Components): `~/Library/Audio/Plug-Ins/Components/`

After install, DAW typically rescans on next launch.

## DAW notes / gotchas

- Tested in: <list DAWs and versions>
- Known issues: <list>
- Required DAW settings: <list, e.g., "Ableton: Preferences > Plug-Ins > Use VST3 Custom Folder">

## Dependencies / system requirements

- <Plugin SDKs (VST3 SDK, CLAP headers, JUCE)>
- <System libraries (e.g., libsndfile, portaudio)>
- <Toolchain version pins (Rust msrv, C++ standard, Node version)>

## Validation

- `pluginval` (VST3): `pluginval --validate <path-to-plugin>.vst3`
- `clap-validator` (CLAP): `clap-validator validate <path-to-plugin>.clap`
- Audio rendering tests: <how to verify the plugin actually processes audio correctly>

## Useful references

- <Link to upstream framework docs>
- <Link to relevant DAW developer docs>
