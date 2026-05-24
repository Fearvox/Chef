# Zonic Design: Cognitive Cache Layer
> Inherited from Project Windburn.

This directory serves as the durable operating memory for AI agents working within the `Chef` monorepo. It ensures that context, failures, and learned procedures survive across isolated CLI sessions.

## The Seven Slots

1. **`source/`**: External research, scraped docs, and verified ground-truth files.
2. **`episodic/`**: Sequential history of significant development events or architectural shifts.
3. **`perception/`**: Grounded observations from tools (e.g., benchmark results, visual regression diffs).
4. **`failure/`**: Documented dead-ends. When a compilation fails or a DSP algorithm artifacts, record the stack trace and the *reason* why the attempted fix was flawed.
5. **`procedural/`**: Reusable scripts, code generation templates, or specific prompts (e.g., "How to scaffold a new nih-plug VST").
6. **`belief/`**: Hypotheses about the codebase or architecture that need verification.
7. **`working/`**: The current active context or scratchpad for the ongoing session.
