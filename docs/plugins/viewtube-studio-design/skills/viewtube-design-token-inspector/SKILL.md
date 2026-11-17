---
name: viewtube-design-token-inspector
description: Use to trace ViewTube Studio semantic design tokens from canonical definitions through generators and generated variables to component use sites, and identify drift or migration risks.
---

# Design Token Inspector

## Mission

Establish the real lineage of a design value—semantic color, spacing, typography, dimensions, radii, stroke, focus, or other token—from its authoritative definition to production use. Detect divergence without creating a second token catalog or treating generated CSS as the source of truth.

## Authority-first workflow

1. Confirm repository, exact target ref, working-tree state, and token family/value under investigation.
2. Read `docs/registry.json` and follow current source-of-truth and supersession links for token/design-system docs.
3. Inspect the canonical token definitions, semantic mappings, generator/emitter scripts, generated artifacts, CSS variables, component styles, and tests.
4. Confirm which files are source, generated, consumer, documentation, and test artifacts. Do not infer ownership from filenames alone.

## Token lineage trace

For each token or semantic role, record:

- canonical token name and definition path;
- semantic role and allowed variants/contexts, as documented;
- source value and theme/mode behavior;
- generator/emitter and exact command or invocation where available;
- generated variable/file and whether output matches source;
- real component/style use sites and consuming primitives;
- fallback, alias, override, exception, or deprecated mapping;
- tests/docs that enforce or describe it.

Search for hard-coded values, near-duplicate values, stale aliases, unused definitions, and generated-output drift. Treat search hits as candidates until dynamic construction, CSS imports, theme switching, and runtime use are checked.

## Analysis rules

- Preserve the canonical semantic distinction between token name and raw value.
- Do not assume a color/spacing value from prior conversations is still normative; verify current docs and source.
- Do not modify generated output directly when a generator owns it.
- Do not collapse distinct semantic tokens merely because current values match.
- Distinguish true drift from intentional, documented exceptions.
- Quantify usage only when the repository search scope is stated; report incomplete indexing and dynamic usage risks.

## Outputs

- Authority and token-family scope.
- Token lineage table: definition → semantic alias → generator → emitted variable → use sites.
- Drift/duplicate/deprecated/unused candidates with evidence and confidence.
- Affected components and consumers.
- Smallest owner-layer correction and required regeneration/test steps.
- Unverified dynamic/theme/runtime paths.

## Boundaries

No shadow token registry, copied token database, or parallel generator. No direct edits to generated files. No contract change without explicit approval and canonical documentation update.
