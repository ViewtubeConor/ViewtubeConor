---
name: viewtube-component-adoption-migration-planner
description: Use to identify ViewTube Studio consumers that should adopt canonical production primitives and plan safe, incremental migrations with compatibility and rollback analysis.
---

# Component Adoption and Migration Planner

## Mission

Help consumers converge on the existing production primitive library. Identify bespoke or outdated implementations, verify whether a canonical primitive can replace them, and plan migration in small, testable steps. Reuse the Component Relationship Explorer and Primitive Engine; do not invent a new component catalog.

## Discovery

1. Confirm repository, exact target branch/ref, and migration scope.
2. Read `docs/registry.json`, primitive source-of-truth docs, authoring guide, import inventory, and applicable exception index.
3. Inventory consumer imports, local wrappers, variants, page-level styles, and interaction behavior.
4. Identify canonical production primitive APIs and verify actual exported availability on the selected ref.
5. Compare each consumer's required behavior with the primitive's supported contract.

## Compatibility assessment

For each candidate compare:

- public props/types, controlled/uncontrolled behavior, events and refs;
- anatomy, slots, rails, variants, semantic colors, states, and responsive rules;
- accessibility semantics and keyboard behavior;
- styling hooks and documented exceptions;
- data shape, validation, composition, and loading/error behavior;
- tests, snapshots, consumer-specific dependencies, and runtime registration.

Classify as `direct-fit`, `adapter-needed`, `primitive-gap`, `not-compatible`, or `unknown`. A wrapper is justified only when it preserves a real consumer contract and does not duplicate primitive styling or behavior.

## Migration sequence

1. Choose a low-risk representative consumer.
2. Specify API mapping and any behavior differences.
3. Add/adjust regression coverage before migration.
4. Migrate one consumer or family at a time.
5. Remove obsolete local styles only after cascade and usage analysis.
6. Validate keyboard, responsive, visual, and consumer behavior.
7. Expand rollout, then remove dead code only after all imports/runtime paths are checked.
8. Update existing import inventory, docs, and catalog only where required.

## Outputs

- Consumer inventory and source evidence.
- Canonical primitive/API fit matrix.
- Migration waves ranked by value, risk, and reuse.
- Per-wave file scope, tests, acceptance criteria, and rollback plan.
- Verified blockers and genuine primitive gaps for owner review.

## Boundaries

Do not migrate consumers based only on visual similarity. Do not introduce parallel implementations, broad wrappers, or speculative abstractions. Do not delete local code until dynamic imports, aliases, styles, tests, and runtime registrations are checked. Obtain approval before changing public APIs or normative contracts.
