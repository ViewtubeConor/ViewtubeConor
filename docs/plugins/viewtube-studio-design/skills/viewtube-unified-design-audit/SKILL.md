---
name: viewtube-unified-design-audit
description: Use for an end-to-end ViewTube Studio audit combining design-system compliance, primitive quality, UX, accessibility, responsive behavior, architecture, and visual evidence.
---

# ViewTube Studio Unified Design and UX Audit

## Mission

Produce one coherent, deduplicated audit instead of separate overlapping reports. Combine contract, component, UX, accessibility, responsive, architecture, and visual findings while preserving the evidence and owner for each issue.

## Intake and scope

Capture goal, route/page, repository/ref, target device/viewports, user journeys, supplied references, and requested depth. Distinguish a page-level review from a primitive-family or system-wide audit. If scope is broad, establish an inventory and staged coverage plan rather than claiming exhaustive coverage from a sample.

## Audit lanes

1. **Authority and architecture:** current source precedence, ownership, dependency path, duplicate/orphan candidates, and drift.
2. **Design contracts:** tokens, semantic colors, supported tiers, field/state anatomy, rails, dimensions, exceptions, and CSS ownership.
3. **Component intelligence:** public API, primitive reuse, composition, consumer consistency, exports, catalog parity, and missing capabilities.
4. **UX:** task completion, information hierarchy, affordances, consistency, error prevention/recovery, feedback, cognitive load, and empty/loading/error states.
5. **Accessibility:** semantic names/roles, keyboard reachability, focus order/visibility, contrast evidence, labels/instructions, touch target concerns, reduced-motion behavior, and assistive-technology risks.
6. **Responsive behavior:** narrow/mobile and desktop layouts, wrapping, overflow, clipping, density, hit areas, rail integrity, and orientation/content stress cases.
7. **Visual/runtime QA:** actual screenshots, computed styles, interaction states, console/network failures relevant to the task, and reference comparison when tools permit.

Use specialist skills only where relevant: Architecture Steward, Contract Enforcement, Primitive Engine, Visual Reverse Engineering, Browser/Pixel Verification, Correction Intelligence, and the canonical Studio steward for implementation.

## Evidence and deduplication

A finding is one underlying defect even if it affects multiple audit lanes. Link affected dimensions and consumers instead of repeating it. Keep observation, interpretation, cause, and recommendation separate. Label each claim `source-confirmed`, `runtime-observed`, `visual-observed`, `test-confirmed`, `hypothesis`, or `not-verified`.

For every finding record: stable ID; severity; affected journey/component/viewport; expected outcome; actual outcome; evidence; source/contract; owner layer; confidence; user impact; recommendation; dependencies; and acceptance test.

## Severity and prioritization

- `blocker`: prevents a core task or causes severe data/security/accessibility risk.
- `high`: major interaction, layout, contract, or accessibility failure.
- `medium`: meaningful friction, inconsistency, or limited-scope defect.
- `low`: minor polish or edge-case issue.
- `informational`: observation or improvement opportunity without a confirmed defect.

Prioritize by user impact, recurrence, scope, risk, and repair leverage—not by visual prominence alone.

## Deliverables

- Scope and coverage statement.
- Executive summary with confirmed blockers and highest-value improvements.
- Deduplicated findings grouped by owner layer and severity.
- Journey and viewport/state coverage matrix.
- Reuse opportunities and verified primitive gaps.
- Ordered correction plan with dependencies and acceptance criteria.
- Explicit not-tested/not-verified items.

## Boundaries

Do not claim a full WCAG audit, complete product coverage, pixel accuracy, or runtime behavior without corresponding evidence. Do not invent user research or analytics. Do not create a second issue database or dashboard; publish findings to the existing approved repository system when authorized.
