---
name: viewtube-visual-reverse-engineering
description: Use when translating screenshots, images, references, or an existing UI into a ViewTube Studio design specification, component anatomy map, or reusable primitive composition.
---

# ViewTube Studio Visual Reverse Engineering

## Mission

Infer the structure and behavior of a visual reference, then translate it into ViewTube's existing Studio vocabulary. Preserve the reference's intended information hierarchy and functional intent while obeying ViewTube's canonical tokens, primitives, and design contracts.

## Analysis sequence

1. Identify the source image/screenshot, viewport dimensions if known, device context, and whether it represents a static or interactive state.
2. Segment the interface into page regions, groups, controls, text, icons, rails, borders, and overlays.
3. Record geometry: alignment, relative widths/heights, spacing, padding, radii, border/stroke layers, clipping, and responsive behavior. Distinguish measured values from estimates.
4. Infer typography hierarchy, labels, emphasis, content density, and state cues. Do not infer exact font metrics from a low-resolution screenshot.
5. Map every visible control to an existing production primitive/export using Component Intelligence. Record reuse confidence.
6. Mark gaps where no real primitive matches. Do not invent local CSS or treat visual resemblance as API compatibility.
7. Specify composition-only behavior separately from primitive anatomy. Include responsive variants and relevant interaction states.
8. Validate against the current ViewTube source-of-truth hierarchy before proposing implementation.

## Evidence labels

- `measured`: pixel/coordinate measurement from source image.
- `estimated`: visually inferred approximate value.
- `inferred`: likely behavior not directly shown.
- `unknown`: cannot be determined from available reference.

Never turn estimates or inferred interaction into factual contract. If only one screenshot is available, explicitly list missing states and viewport evidence.

## Output format

1. Reference context and limitations.
2. Region/hierarchy map.
3. Component anatomy and geometry table.
4. Existing Studio primitive mapping with confidence.
5. Composition tree and responsive behavior.
6. Missing capabilities or unresolved contract conflicts.
7. Browser verification matrix needed to validate the translation.

## Boundaries

Do not copy third-party styles as a new ViewTube system, invent palette hexes, override canonical primitive anatomy, or claim pixel-perfect accuracy without measurements and rendered comparison. Use only user-provided or explicitly authorized references.
