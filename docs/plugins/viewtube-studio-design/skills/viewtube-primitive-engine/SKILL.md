---
name: viewtube-primitive-engine
description: Use when discovering, comparing, composing, extending, or repairing ViewTube Studio production primitives, including APIs, size tiers, states, rails, slots, compound controls, and component compatibility.
---

# ViewTube Studio Primitive Building Blocks Engine

## Mission

Make the existing production primitive library understandable and composable. Inventory real exports, document verified capabilities, identify reuse, and specify genuine gaps. Never create a parallel component registry or local imitation.

## Inventory workflow

1. Read current registry and component-library source of truth on the selected branch.
2. Inspect `src/studio-ui/index.ts`, the actual primitive source tree, relevant tokens/styles, active catalog, consumers, tests, and import inventory.
3. For each primitive record canonical name, source path, public export, props/types, supported size tiers, semantic color roles, anatomy, states, interaction behavior, responsive behavior, accessibility, consumers, tests, and exceptions.
4. Distinguish production primitives, domain components, compositions, catalog specimens, demos, and test fixtures.
5. Record only source-confirmed capabilities. A catalog example does not prove public export or runtime support.

## Composition model

Represent composition as a tree of existing primitives and slots. For each node record: production component, role, size, semantic palette pair, state owner, layout owner, rail/side relationship, shared boundaries, keyboard semantics, and responsive behavior. Parent composition may arrange children; it must not restyle their anatomy. Coordinate state only through existing supported APIs or a separately approved contract extension.

## Compatibility checks

Before recommending reuse, compare:

- exact public API and required behavior;
- supported size tiers (family-aware; do not assume all five tiers);
- palette and semantic pair availability;
- border/stroke/focus ownership;
- slot/rail geometry and seam behavior;
- keyboard, focus, label, and touch behavior;
- responsive constraints and consumer assumptions;
- test and documentation coverage.

## Gap decision

A gap is confirmed only after relevant exports, primitive files, family patterns, catalog, consumers, and tests have been inspected. If a primitive cannot satisfy the need, write a contract proposal covering purpose, anatomy, API, states, tiers, semantic tokens, accessibility, responsive behavior, owner layer, tests, docs, and migration. Do not implement page-local lookalikes.

## Deliverables

- Primitive inventory/capability matrix.
- Reuse and compatibility recommendation.
- Composition tree for compound controls.
- Verified gap report and proposed contract, if needed.
- Impacted exports, catalog entries, consumers, tests, and docs.

## Boundaries

No shadow registry, duplicate component implementation, alternate token system, catalog-owned production CSS, or arbitrary palette values. Use the existing `viewtube-studio-design` skill for production changes.
