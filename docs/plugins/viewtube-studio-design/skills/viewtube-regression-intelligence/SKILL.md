---
name: viewtube-regression-intelligence
description: Use to convert confirmed ViewTube Studio defects and corrections into focused regression tests, visual/state coverage, and durable updates in existing repository systems.
---

# Regression Intelligence

## Mission

Close the loop between defect discovery, root-cause correction, and prevention. Translate each confirmed defect into the smallest reliable regression test at the owning layer, then identify neighboring variants, consumers, and states that need coverage. Reuse the repository's existing test, visual regression, issue, and documentation systems.

## Inputs

Require a confirmed or clearly labeled defect, affected component/consumer, expected and actual behavior, source/runtime/visual evidence, target branch/ref, and suspected owner layer. If root cause is unknown, first route to Architecture Steward, Contract Enforcement, Primitive Engine, or Unified Audit as appropriate.

## Workflow

1. **Normalize defect:** assign a task-local stable key if the repository has no existing issue ID; preserve existing issue/PR references. State expected vs actual outcome and reproduction steps.
2. **Classify:** behavior, API, layout, token, state, accessibility, responsive, export/import, generator, or documentation regression.
3. **Locate owner:** identify the lowest shared layer that explains the defect without widening scope unnecessarily.
4. **Choose test level:** unit/component test for logic and state; integration test for composition/exports/consumer wiring; browser test for real interactions; visual snapshot/comparison for geometry and appearance. Add multiple levels only when each catches a distinct failure mode.
5. **Build coverage matrix:** affected primitive × supported tier/variant × state × viewport × consumer. Prioritize the triggering case and nearest regression neighbors; do not blindly multiply all combinations.
6. **Write failing regression first:** use the repository's test conventions and test-driven workflow. Ensure the test fails for the original defect before applying the fix when practical.
7. **Verify correction:** run the focused test, relevant suite, typecheck/lint/build as appropriate. Capture exact commands, environment, and results.
8. **Persist appropriately:** update the existing issue/PR, test, visual checklist, correction record, or canonical doc. Do not create a new database or claim cross-session memory unless an actual persistence mechanism is present.
9. **Watch recurrence:** when history is available, search for equivalent symptoms, prior fixes, reverts, and unmerged branches; distinguish same root cause from similar appearance.

## Regression quality rules

- Assert user-visible behavior or stable contract, not incidental implementation details.
- Avoid snapshots as the only protection for interactive behavior.
- Keep visual comparisons deterministic and document viewport, browser, font, device scale, and state where available.
- Cover keyboard and focus behavior when relevant.
- Test supported variants and explicit exceptions from current docs; do not assume remembered tiers or values.
- Ensure tests fail for the defect and pass after the fix; record flaky or environment-limited results honestly.

## Outputs

- Defect-to-owner summary.
- Test-level rationale and regression test specification.
- Variant/state/viewport/consumer coverage matrix.
- Exact test commands and observed outcomes.
- Existing repository records updated and references.
- Remaining gaps, flaky tests, and recurrence risks.

## Boundaries

Do not claim a regression is prevented until a test exists and has been run successfully. Do not introduce a parallel test harness or correction store. Do not change normative design rules through a test alone; obtain approval and update the canonical docs.
