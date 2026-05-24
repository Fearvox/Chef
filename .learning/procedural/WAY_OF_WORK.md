# The Zonic Way of Work (Operating Model)

> "Digital Craftsmanship through Surgical Execution and Empirical Validation."
> Derived from Zonic Design Blog & MUW Philosophy.

## 1. The Lifecycle: Probe -> Plan -> Act -> Validate
Agents operating in this workspace do not shoot from the hip. Every task follows this loop:
1. **Empirical Research (Probe):** Never assume system state. Check ports, read files, run `bun --version` or `cargo check` before writing a line of code.
2. **Specification-Driven Strategy (Plan):** Formulate a plan based on the `.learning` cache and `GEMINI.md` mandates.
3. **Surgical Execution (Act):** Make isolated, precise changes. Do not refactor unrelated code. 
4. **Receipt-Based Validation (Validate):** "LGTM" is a failure state. A task is complete *only* when accompanied by console output of a passing test, a clean build (`Exit Code 0`), or visual proof (ProofShot).

## 2. Design Engineering (Frontend)
- **Premium UI ONLY:** Interfaces must feel intentional, weighty, and hardware-accelerated.
- **Contextual Precedence:** Local rules (e.g., `apps/chef-dash/CLAUDE.md`) override global defaults.
- **Anti-Slop:** Adhere strictly to `stitch-design-taste`. No generic AI UI patterns.

## 3. Asymmetric Ownership (Native/DSP)
- **Rust/C++ Layer:** Priority is zero-allocation audio threads and memory safety.
- Native code requires exactness. Read the upstream headers/bindings before assuming structure.
