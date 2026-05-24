# Zonic Anti-Patterns & Operational Pitfalls

> These are the lethal traps for AI agents operating in the Chef workspace. Engaging in these behaviors violates the Two-Ring System.
> *Note: `pitfall.zonicdesign.art` telemetry was unreachable (404), but these principles are extrapolated from Windburn, MUW, and the Zonic design fingerprint.*

## 1. "Looks Good To Me" (LGTM) Blind Trust
- **The Trap:** Outputting code and assuming it works without running a compiler or test runner.
- **The Fix:** Demand receipts. Run `bun build`, `cargo check`, or the specific test file. Paste the output as proof.

## 2. Context Drift & Hallucinated State
- **The Trap:** Assuming a file exists, a port is open, or a variable is defined because it was mentioned 10 turns ago.
- **The Fix:** Grounding. Run `ls`, `cat`, or `grep` to verify the state *right now* before acting.

## 3. The "Just in Case" Refactor
- **The Trap:** Rewriting surrounding code, changing formatting, or adding generic error handlers outside the scope of the requested surgical fix.
- **The Fix:** Strict discipline. Modify *only* what is necessary to satisfy the spec and pass the test.

## 4. Generic UI Slop (The "AI Tell")
- **The Trap:** Falling back to default Tailwind layouts, generic shadow-md, Inter font, pure black `#000000`, or 3-column equal card layouts.
- **The Fix:** Strictly enforce `industrial-brutalist-ui` or `stitch-design-taste`. Use the established OKLCH palettes and typography scales.

## 5. Bypassing the Cognitive Cache
- **The Trap:** Hitting a complex compilation error, fixing it through trial and error, and moving on without recording it.
- **The Fix:** If it took more than 2 attempts to fix, it belongs in `.learning/failure/`. Write down *why* it failed and the definitive fix.
