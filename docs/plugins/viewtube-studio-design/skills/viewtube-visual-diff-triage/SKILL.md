---
name: viewtube-visual-diff-triage
description: Use to compare ViewTube Studio visual captures, classify screenshot differences, separate rendering noise from real regressions, and trace likely owning layers.
---

# Visual Diff Triage

## Mission

Turn screenshot differences into reproducible, prioritized visual findings. Identify whether a change concerns geometry, spacing, typography, semantic color, borders/strokes, iconography, clipping, or state. Route the finding to the most likely source owner without treating every pixel difference as a product defect.

## Capture comparability

Before comparison, record both captures' route/component, branch/build, viewport, device scale, browser/OS, fonts loaded, color scheme, data/content fixture, interaction state, scroll position, and capture method. If key conditions differ, mark the comparison `non-comparable` or lower confidence.

## Triage workflow

1. Align equivalent regions and confirm the same state and content.
2. Separate global shifts from local component differences.
3. Classify differences: position/size, spacing, wrapping, typography, color, border/stroke, radius, icon, clipping/overflow, stacking, or antialiasing/render noise.
4. Determine whether the difference is visible and meaningful to the user; do not prioritize raw pixel count alone.
5. Map likely ownership: page composition, primitive anatomy, family CSS, semantic token, generator output, font/assets, or runtime state.
6. Compare with the active contract and known exceptions.
7. Reproduce at the same viewport/state and inspect computed styles or DOM measurements when browser access permits.
8. Link to an existing defect/correction record or create a task-local finding for review.

## Confidence and severity

Use `high`, `medium`, or `low` confidence and explain why. Distinguish confirmed visual regression, likely regression, benign rendering variation, and unresolved difference. Severity reflects user impact, clipping/interaction loss, recurrence, and blast radius—not the number of changed pixels.

## Outputs

- Capture comparability metadata.
- Difference inventory with region, category, severity, confidence, and evidence.
- Reference/current overlays or aligned crops when tooling permits.
- Likely owner-layer trace and evidence needed to confirm.
- Reproduction recipe and acceptance criteria.
- Regression-test recommendation.

## Boundaries

Do not claim pixel accuracy from unaligned or incomparable captures. Do not infer interaction behavior from screenshots. Do not edit production code during triage unless the user separately approves implementation. Do not create a separate screenshot archive or visual-baseline service.
