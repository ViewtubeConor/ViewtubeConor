---
name: viewtube-interaction-state-matrix-builder
description: Use to design risk-based interaction, responsive, accessibility, and regression coverage matrices for ViewTube Studio components and workflows.
---

# Interaction-State Matrix Builder

## Mission

Turn a component or user journey into a practical test matrix across supported variants, interaction states, viewports, and input modes. Maximize meaningful coverage without generating an unmanageable Cartesian product.

## Inputs and authority

Capture the target primitive/family or workflow, expected behavior, target branch/ref, supported variants/tiers from current docs, relevant consumers, available browser/test environments, and known defect history. Read `docs/registry.json` and the current primitive contracts before listing supported states or tiers.

## Matrix dimensions

Select applicable dimensions rather than assuming all apply:

- component / primitive / composition;
- supported tier, orientation, variant, and documented exception;
- state: rest, hover, focus-visible, selected, disabled, loading, validation/error, expanded/collapsed, pressed, drag, or other documented states;
- viewport and responsive breakpoint class from the current project;
- input mode: pointer, keyboard, touch, assistive technology where testable;
- content stress: short/long labels, localization, empty data, dense data, overflow;
- consumer/page and relevant task journey.

## Risk-based selection

1. Include every state/variant directly involved in the reported defect.
2. Cover shared anatomy and high-reuse consumers.
3. Include narrow/mobile and desktop extremes when layout can change.
4. Cover keyboard/focus and touch where interaction is relevant.
5. Add pairwise or representative combinations for lower-risk dimensions.
6. Expand to full combinations only where contract, safety, or defect history warrants it.
7. Mark unsupported/not-applicable combinations explicitly rather than silently omitting them.

## Test mapping

For each matrix row choose the appropriate evidence method: source/API assertion, unit/component test, integration test, keyboard/manual check, browser interaction, accessibility tool, computed-style inspection, or screenshot comparison. State what that method can and cannot prove. Define expected outcome and reproducible setup.

## Outputs

- Contract-derived dimensions and supported values.
- Prioritized matrix with unique case IDs, risk, method, expected result, and evidence status.
- Coverage summary by dimension and known exclusions.
- Suggested automation candidates and manual checks.
- Regression additions for confirmed defects.

## Boundaries

Do not invent breakpoints, tiers, states, or browser support. Do not claim tests passed merely because cases were planned. Avoid exhaustive Cartesian products unless justified. Do not create a second test framework or persistent coverage database.
