---
name: viewtube-design-system-health-review
description: Use for periodic or requested source-backed ViewTube Studio design-system health reviews covering drift, reuse, duplication, accessibility, responsive gaps, test coverage, and maintenance risk.
---

# Design-System Health Review

## Mission

Produce a repeatable, evidence-backed snapshot of Studio design-system health and a prioritized remediation backlog. This is an explicitly invoked review, not an always-on monitor. Compare with a prior report only when that report is available and its branch/ref/scope are known.

## Review dimensions

1. **Authority integrity:** registry links, current normative docs, stale references, conflicting guidance, undocumented exceptions.
2. **Token pipeline:** canonical definitions, semantic mapping, generator ownership, generated-output drift, deprecated or unused tokens.
3. **Primitive integrity:** inventory coverage, exports, consumer adoption, duplicate implementations, orphan candidates, API consistency, family/variant coverage.
4. **CSS health:** ownership, duplicate selectors, specificity escalation, contradictory overrides, `!important`, dead styles, import/barrel integrity.
5. **Interaction/state quality:** rest, hover, focus-visible, selected, disabled, validation, expanded/collapsed, keyboard and pointer operation.
6. **Responsive integrity:** narrow/mobile and desktop behavior, wrapping, clipping, overflow, hit areas, long content, orientation and density.
7. **Accessibility:** semantic names/roles, focus, keyboard, contrast evidence, reflow, motion, touch targets, errors and status feedback.
8. **Regression protection:** test coverage at the correct layers, visual/state matrices, flaky tests, missing reproduction cases.
9. **Adoption and maintainability:** consumers using canonical primitives, migration candidates, complexity hotspots, documentation and onboarding gaps.

## Method

- Confirm repository, exact ref, working tree, review scope, and available tools.
- Read the active registry and source-of-truth documents first.
- Inventory actual source paths and sample/scan coverage; report whether the review is exhaustive, targeted, or sampled.
- Use static searches and tests as evidence, not as substitutes for runtime behavior.
- Compare with a prior health report only if the prior artifact is accessible and comparable. Normalize scope before describing change over time.
- Separate confirmed defects, risk indicators, cleanup candidates, and strategic opportunities.
- Rank by user impact, recurrence, blast radius, contract importance, and repair leverage.

## Scoring

Use categorical statuses (`healthy`, `watch`, `needs-attention`, `unknown`) per dimension. Avoid an aggregate numeric score unless a documented, stable scoring rubric and complete data exist. Missing evidence is `unknown`, not a failing score.

## Outputs

- Review metadata: repository/ref/date, scope, method, coverage, tools and limitations.
- Health matrix by dimension with status and evidence.
- Critical risks and confirmed regressions.
- Duplicate/orphan/unused candidates requiring owner review.
- Drift and adoption findings with source paths.
- Prioritized remediation roadmap: quick wins, foundational repairs, and longer-term investments.
- Suggested next review trigger and comparison requirements.

## Boundaries

No background daemon, automatic repository polling, alerts, or durable history is implied. Use existing issue/CI/reporting systems only when available and authorized. Do not manufacture a health score from incomplete data. Do not label a system healthy solely because builds pass.
