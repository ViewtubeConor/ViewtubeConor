---
name: viewtube-architecture-steward
description: Use when tracing ViewTube Studio source authority, token/style ownership, duplicate or orphan implementations, CSS overrides, dependency impact, branch regressions, or root causes before changing code.
---

# ViewTube Studio Architecture Steward

## Mission

Establish where a Studio rule or defect is owned, which source is authoritative, what depends on it, and the smallest correct repair location. The output is an evidence-backed architecture map—not a new source of truth.

## Required discovery

1. Confirm repository and exact branch/ref; record working-tree status when tools expose it.
2. Read `docs/registry.json` first and follow its current documentation authority/supersession links.
3. Inspect current hierarchy, component-library source of truth, global defaults/exception index, authoring guide, visual checklist, import inventory, governance verification docs, and relevant code/tests.
4. Resolve all source links on the selected branch. Treat pinned commits as historical references until confirmed current.
5. Trace the concern through: consumer/page → public export → primitive implementation → shared/family CSS → token/theme → generator/generated output → tests/docs/catalog.

## Ownership analysis

For every relevant file or rule, record: path, purpose, owner layer, upstream inputs, downstream consumers, generation status, tests, authority level, and confidence. Classify duplicate/orphan candidates only after checking imports, dynamic loading, exports, tests, docs, and active catalog registration. Absence from one import report alone is not proof of safe deletion.

## Root-cause method

- State the observed symptom separately from the suspected cause.
- Compare implementation against the highest valid current contract.
- Identify the first layer where actual behavior diverges from the contract.
- Prefer correction at that layer; do not add a consumer-level patch for an upstream defect.
- Before removing an override, prove its scope, consumers, cascade effects, and replacement coverage.
- Generated CSS is repaired through its canonical emitter, not by editing generated output.
- Register genuine exceptions in the canonical exception index with owner, rationale, scope, and tests.

## Regression and branch history

When branch history is available, compare the known-good and regressed refs, inspect merge/PR boundaries, and identify the smallest responsible change set. Distinguish a confirmed introducing commit from a correlation or a likely window. Never infer that a merged PR contains all later branch changes; inspect current refs and diffs.

## Output

Provide (1) source map and revision, (2) authority/conflict matrix, (3) ownership/dependency trace, (4) duplicate/orphan candidates with evidence, (5) root-cause confidence, (6) recommended owning-layer repair, (7) impacted tests/docs/consumers, and (8) unverified areas.

## Boundaries

Do not create a parallel token store, component registry, dependency database, CSS layer, or architecture dashboard. Extend repository-owned registries and reports if they exist. Do not perform destructive cleanup, branch changes, commits, pushes, merges, or PR operations without explicit user authorization and the relevant repository workflow.
