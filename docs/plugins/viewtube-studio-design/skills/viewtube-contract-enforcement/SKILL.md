---
name: viewtube-contract-enforcement
description: Use to audit ViewTube Studio code against current design-system contracts, canonical tokens, size tiers, semantic colors, field states, CSS ownership, exports, and documented exceptions.
---

# ViewTube Studio Contract Enforcement

## Mission

Turn the current repository's design contracts into a traceable audit. Find where implementation diverges, identify the owning layer, and produce a prioritized correction plan. This skill audits and explains; it does not invent a new contract or silently rewrite production code.

## Required source discovery

1. Confirm repository, exact target branch/ref, and working-tree state.
2. Read `docs/registry.json`; follow current authority and supersession links.
3. Read the active Studio source-of-truth, authoring guide, global defaults/exception index, values/tokens/styles hierarchy, visual checklist, import inventory, and governance verification docs when present.
4. Resolve every cited path on the selected ref. Treat old branch notes and pinned commits as historical until revalidated.
5. Inspect actual token definitions, emitters/generators, generated outputs, primitive source, public exports, consumers, catalog, and tests.

## Contract dimensions

Audit only rules confirmed by current sources. Relevant dimensions include:

- semantic palette and primary/secondary pairings;
- canonical token ownership and generated-variable flow;
- supported size tiers and family-specific variants;
- field anatomy, borders, inset strokes, fills, caret, focus, and fade behavior;
- rail/slot geometry, shared seams, dividers, and nested borders;
- default width, content-width exceptions, alignment, and responsive composition;
- selected, rest, focus-visible, disabled, hover, expanded, and collapsed states;
- accessibility names, keyboard operation, focus visibility, and touch targets;
- CSS ownership, specificity, `!important`, duplicate selectors, and obsolete overrides;
- exports, import paths, catalog representation, consumers, and regression tests.

Do not assume a remembered numeric value or historic exception is still current. Re-read the active contract first.

## Finding format

Each finding must include: ID; severity; contract rule; authoritative source path/revision; implementation path/line; affected primitive/family/consumer; observed mismatch; evidence class; likely owner layer; confidence; recommended smallest correction; required tests; and unresolved questions.

Severity: `blocker`, `high`, `medium`, `low`, or `informational`. Evidence class: `source-confirmed`, `test-confirmed`, `runtime-observed`, `visual-observed`, or `hypothesis`.

## Root-cause rules

Trace consumer → public export → primitive → family/shared CSS → token/theme → generator/generated output → tests/docs. Identify the first divergence. Prefer correcting that owner and removing obsolete contradictory code after impact analysis. Never edit generated output directly when a generator owns it. Never treat a catalog specimen as production authority.

## Outputs

1. Authority/source map.
2. Contract coverage matrix (`pass`, `fail`, `unknown`, `not applicable`).
3. Deduplicated findings with severity and evidence.
4. Owner-layer repair plan and dependency impact.
5. Regression-test matrix across affected tiers, states, consumers, and viewports.
6. Explicit unknowns and verification limits.

## Boundaries

No parallel tokens, contract registry, primitive inventory, CSS layer, or audit database. Extend existing repository-owned reports where available. Do not change a normative contract without explicit user approval and a documented decision.
