---
name: pattern
description: Strudel mini-notation and pattern quick reference. Use when writing or explaining music patterns.
---

# Strudel Pattern Reference

## Mini-Notation Basics

Mini-notation is the string DSL inside double quotes. One cycle = one musical loop.

| Syntax | Meaning | Example |
|--------|---------|---------|
| `"a b c"` | Sequence (evenly spaced in cycle) | `"c3 e3 g3"` = 3 notes per cycle |
| `"[a b]"` | Group (subdivide) | `"c3 [e3 g3]"` = c3 half, e3+g3 quarter each |
| `"a*N"` | Repeat N times | `"hh*8"` = 8 hi-hats per cycle |
| `"a/N"` | Slow down by N | `"bd/2"` = bass drum every 2 cycles |
| `"a?"` | Random removal (50%) | `"hh?"` = sometimes plays, sometimes silent |
| `"a b , c d"` | Stack (overlay/polyrhythm) | `"bd sd , hh*4"` = drums + hi-hat layer |
| `"<a b c>"` | Alternate per cycle | `"<c3 e3 g3>"` = different note each cycle |
| `"a!N"` | Replicate (same timing) | `"c3!3"` = c3 three times at same speed |
| `"~"` | Rest (silence) | `"bd ~ sd ~"` = kick, rest, snare, rest |

## Common Functions

```javascript
// Basic sounds
sound("bd sd hh sd")           // drum pattern
note("c3 e3 g3 b3")           // melodic pattern

// Modifiers
.fast(2)                       // double speed
.slow(2)                       // half speed
.rev()                         // reverse pattern
.jux(rev)                      // stereo: original left, reversed right
.every(4, fast(2))             // every 4th cycle, double speed

// Effects
.cutoff(1000)                  // low-pass filter at 1000Hz
.resonance(10)                 // filter resonance
.delay(0.5)                    // delay effect
.room(0.8)                     // reverb
.gain(0.7)                     // volume

// Scales & chords
.scale("C:minor")              // map to C minor scale
n("0 2 4 6").scale("C:minor")  // scale degree pattern

// Stacking
stack(
  sound("bd sd"),
  note("c3 e3 g3").sound("sawtooth")
)
```

## Starter Patterns (copy-paste ready)

**Simple beat:**
```javascript
sound("bd sd:1 hh sd:2").bank("RolandTR808")
```

**Ambient pad:**
```javascript
note("<c3 eb3 g3 bb3>")
  .sound("sawtooth")
  .cutoff(800)
  .room(0.9)
  .slow(2)
```

**Layered groove:**
```javascript
stack(
  sound("bd*2 [~ bd] ~ bd").bank("RolandTR808"),
  sound("~ sd ~ sd:1").bank("RolandTR808"),
  sound("hh*8").gain(0.4),
  note("c2 [~ c2] eb2 [~ g1]").sound("sawtooth").cutoff(400)
)
```

When explaining patterns to the user, always describe the **audible effect** — e.g., "this creates a syncopated kick pattern with a filter sweep."
