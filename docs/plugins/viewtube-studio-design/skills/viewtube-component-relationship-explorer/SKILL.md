---
name: viewtube-component-relationship-explorer
description: Use to map ViewTube Studio component relationships, exports, consumers, stylesheets, tokens, generators, tests, catalog specimens, and change impact without creating a duplicate registry.
---

# Component Relationship Explorer

## Mission

Build a repository-grounded dependency and ownership picture for a Studio primitive or family. Trace how consumers reach production exports, how components compose, where styles and semantic tokens originate, which generators emit artifacts, and which tests/documentation protect behavior. Use the existing repository source tree and inventories; this is an analysis workflow, not a new registry.

## Authority and scope

1. Confirm repository, exact target ref, working-tree state, and requested component/family/change.
2. Read `docs/registry.json` and follow its current source-of-truth and supersession links.
3. Resolve paths and symbols on the selected ref. Treat old branch knowledge as a lead, not current evidence.
4. Establish whether the task concerns one primitive, a family, a page composition, a token, or a cross-cutting system change.

## Relationship tracing

Trace the relevant edges, where present:

- consumer/page → import path → public barrel/export → primitive implementation;
- primitive → composed child primitives, slots, rails, shared controls, and family variants;
- component/style module → CSS entry/barrel → shared family/core rules;
- CSS variable/use site → semantic token → token definition → generator/emitter → generated output;
- component/API → tests, stories/catalog specimens, visual checklist, import inventory, and normative docs;
- branch/commit/PR → changed files → downstream consumers and unmerged follow-up work, when Git history is available.

Record actual symbols and paths, not just conceptual boxes. Distinguish direct dependency, transitive dependency, runtime relationship, and suspected relationship.

## Change-impact analysis

For a proposed change, identify:

1. The first owning layer likely responsible.
2. All known direct consumers and representative transitive consumers.
3. Shared primitives/families that may regress.
4. Tokens, generators, generated files, exports, and stylesheets affected.
5. Tests and visual states that should cover the change.
6. Catalog/documentation updates that are required versus merely illustrative.
7. Compatibility risks, migration order, rollback boundary, and unknown consumers.

Search for duplicates/orphans only after checking aliases, dynamic imports, barrel exports, CSS imports, tests, and runtime registration. A file with few textual references is not automatically dead code.

## Relationship record

For each node capture kind, canonical path, symbol/name, branch/ref, owner, evidence, confidence, and status. For each edge capture from/to, relationship type, evidence location, and whether direct/transitive/inferred. Include an explicit `unknown` state rather than assuming completeness.

## Outputs

- Authority and scope statement.
- Component relationship map (text/Mermaid when useful).
- Ownership trace with concrete paths/symbols.
- Consumer and dependency inventory with coverage caveats.
- Change-impact matrix: affected node, impact, reason, confidence, required action/test.
- Duplicate/orphan candidates with evidence required before removal.
- Smallest safe correction path and regression matrix.

## Boundaries

Do not create a shadow component registry, dependency database, or architecture graph service. Extend an existing approved repository inventory/report if one exists. Never delete suspected duplicate code without consumer/cascade analysis. Do not edit generated artifacts directly. Do not infer that a branch is safe to merge wholesale from dependency overlap alone.
