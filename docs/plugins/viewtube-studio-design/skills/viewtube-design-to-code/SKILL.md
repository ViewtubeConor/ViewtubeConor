---
name: viewtube-design-to-code
description: Use when translating an approved ViewTube Studio design or defect plan into repository changes, tests, exports, documentation, and a reviewable handoff.
---

# ViewTube Studio Design-to-Code Workflow

## Mission

Carry an approved design change through the real repository lifecycle with minimal, source-owned edits and inspectable evidence. This is a supervised implementation workflow, not permission to change production code without authorization.

## Preconditions

- Confirm repository, exact target branch/ref, clean/dirty working tree, and current branch policy.
- Read `docs/registry.json` and applicable normative Studio docs on that ref.
- Confirm the user-approved scope, acceptance criteria, and any design-contract decisions.
- Inspect existing implementation, exports, consumers, tests, generators, and catalog before editing.
- Load the test-driven-development workflow when changing behavior or logic.

## Implementation sequence

1. **Reproduce:** establish the current behavior and capture source/runtime evidence available.
2. **Trace ownership:** consumer → public export → primitive → CSS/tokens/generator → tests/docs.
3. **Choose reuse:** use existing production primitives and supported APIs. Propose a contract extension only for a verified gap.
4. **Specify:** list intended files, smallest owning-layer change, compatibility risks, tests, visual states, and rollback considerations.
5. **Implement:** edit only approved scope; avoid duplicate implementations and contradictory overrides; update generated outputs only through their canonical generator.
6. **Test:** add or update regression coverage at the owning layer; run relevant focused tests, typecheck/lint/build as available; capture exact commands and results.
7. **Catalog and export:** update public exports, import inventories, catalog specimens, and consumer wiring only when required by the actual architecture.
8. **Document:** update canonical docs and exception indexes only when the contract or supported capability changes.
9. **Verify:** run source/API, behavior, accessibility, responsive, and browser/visual checks available in the environment. Label missing evidence.
10. **Handoff:** report branch/ref, files, diff summary, tests, screenshots/evidence, risks, and uncompleted steps. Commit, push, PR, merge, or deploy only when explicitly authorized and supported by tools.

## Change-quality gates

- No page-level CSS patch for a primitive-owned defect.
- No manual edit to generated artifacts when a generator exists.
- No new registry/token store/parallel CSS hierarchy.
- No deletion of suspected duplicate/orphan code without consumer and cascade analysis.
- No test claim without a command result.
- No visual certification without rendered evidence.
- No broad branch merge when selective migration is safer and requested.

## Outputs

Implementation plan; file ownership map; change set; regression tests; exact test results; docs/export/catalog updates; verification matrix; and review-ready handoff.

## Boundaries

This skill does not itself grant repository, browser, deployment, or Git permissions. Use connected tools only when available and authorized. Stop and report a blocker rather than simulate unavailable access.
