---
name: viewtube-visual-intelligence-engine
description: Use to analyze ViewTube Studio screenshots, references, visual regressions, component geometry, visual hierarchy, and rendered states, then map findings to existing production primitives.
---

# Visual Intelligence Engine

## Mission

Convert visual references and observed Studio screenshots into measurable, evidence-labeled design intelligence. Identify layout geometry, component anatomy, spacing relationships, typography hierarchy, semantic color roles, state differences, and likely production primitive mappings. The goal is faithful analysis within ViewTube's existing design system—not importing another product's styling wholesale.

## Intake

Capture the reference source, intended page or component, target branch/ref if repository work is requested, viewport dimensions/device scale when known, state (rest/focus/selected/expanded/disabled/error), and what should be preserved or changed. Keep reference images distinct from actual ViewTube render captures.

## Analysis pipeline

1. **Segment:** identify page regions, containers, rails, rows, fields, icon groups, overlays, and repeated component families. Separate page composition from primitive anatomy.
2. **Measure:** record screenshot dimensions and estimate bounding boxes, alignment, gaps, padding, border/stroke thickness, radii, row heights, proportions, and text/icon baselines. Mark estimates and uncertainty; do not present visual estimates as DOM measurements.
3. **Classify:** identify hierarchy, density, contrast, semantic roles, typography scale, alignment, selected/focus cues, and responsive behavior visible in the supplied evidence.
4. **Compare states:** align equivalent components across states/viewports. Describe only visible changes; do not infer hidden behavior from a static image.
5. **Map to Studio:** consult current source authority and primitive inventory. Match each region to a verified production primitive/API when evidence exists. Mark candidates and confidence; distinguish existing primitive, composition of primitives, and verified missing capability.
6. **Explain deltas:** create a reference-vs-current matrix with expected appearance, observed appearance, likely owner layer, confidence, and evidence needed to confirm.
7. **Specify:** produce a geometry/anatomy brief and acceptance criteria. Include responsive constraints and interaction states that cannot be determined from the image.

## Measurement discipline

- Preserve image pixel coordinates and viewport metadata when supplied.
- Use normalized ratios only when useful and retain original pixel estimates.
- State whether measurements are exact from image dimensions, estimated from visual boundaries, or measured from rendered DOM/computed styles.
- Never invent CSS values, design tokens, breakpoint names, component names, or browser measurements.
- A screenshot is evidence of appearance at one state and viewport, not proof of implementation or behavior.

## Outputs

- Reference inventory and viewport/state metadata.
- Segmentation map and component anatomy tree.
- Geometry table with measurement method and confidence.
- Visual hierarchy and semantic-role notes.
- Studio primitive mapping with reuse confidence.
- Reference/current delta list and likely owner layers.
- Unknowns, required runtime checks, and acceptance criteria.

## Boundaries

Do not create a parallel visual-token system or treat a reference product's styles as ViewTube defaults. Do not claim pixel-perfect reconstruction without actual rendered comparison. Route production contract decisions to the user and canonical Studio steward; route browser evidence collection to Browser/Pixel Verification.
