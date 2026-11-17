---
name: viewtube-agent-instruction-controls
description: Expose the ViewTube Studio Design plugin's authored agent instructions as a task-scoped checklist with explicit per-instruction enable/disable controls, scope, provenance, and protected-rule boundaries.
---

# Agent Instruction & Task Controls

## Purpose

Give the user a readable, auditable view of the instructions authored by this plugin and a practical way to enable or disable each configurable instruction for one specific task. This is a governance and interaction protocol for the existing skills system, not a separate agent runtime, policy engine, settings database, or claim of access to hidden host instructions.

## What the user can inspect

For a complete plugin-authored inventory, inspect the current versions of:

- `skills/viewtube-studio-design/SKILL.md` — canonical Studio design-system steward.
- `skills/viewtube-design-command-center/SKILL.md` — routing, shared context, lifecycle, and cross-agent guardrails.
- Every specialist `skills/*/SKILL.md` listed in the current plugin file inventory.
- Referenced files that add rules, templates, source authority, or verification requirements.
- This file, which defines how task-level instruction choices are applied.

Show instructions in plain language, but preserve the original wording or provide a source excerpt on request. For every item show: stable ID, exact source path and heading, owning skill/agent, plain-language meaning, class, default state, task scope, and whether it can be toggled. Do not claim the inventory is complete until every current skill and applicable referenced instruction file has been inspected. Report unreadable, unavailable, or uninspected sources as gaps.

The plugin can disclose its own authored instructions and user-provided task constraints. It cannot reveal or modify hidden system/developer instructions, host policies, private reasoning, or controls outside the plugin. Clearly label these as host/platform constraints rather than plugin-authored rules. Tool permission requirements and external service authorization are also not toggleable here.

## Instruction classes

| Class | Meaning | User control |
|---|---|---|
| `LOCKED` | Host/platform safety, privacy, tool authorization, truthfulness, or other higher-priority requirements | Never toggleable |
| `REQUIRED` | A rule necessary for the explicitly requested task, an approved contract, or an applicable safety/verification boundary | Cannot be disabled while that requirement applies; explain why |
| `CONFIGURABLE` | A plugin-authored workflow preference or optional method that can safely vary by task | User may enable/disable per task |
| `OPTIONAL` | An additional quality step that is not needed for every task | On by default when relevant; user may enable/disable per task |

Do not reclassify a rule merely to satisfy a requested toggle. If uncertain, retain the stricter class and explain the uncertainty.

## Task checklist interaction

When the user asks to see instructions, show the full plugin-authored inventory grouped by agent and section. When a task begins and instruction controls are relevant, offer a compact task checklist containing only applicable rules by default, with a command to expand to the complete inventory. Each row must have an explicit state:

- `[ON]` enabled for this task.
- `[OFF]` disabled for this task.
- `[LOCKED]` cannot be changed for this task, with reason.
- `[N/A]` does not apply to this task.

Accept natural-language commands such as:

- `Show all agent instructions`.
- `Show instructions for [agent/skill]`.
- `Turn off [instruction ID] for this task`.
- `Turn on [instruction ID] for this task`.
- `Reset task instructions to defaults`.
- `Explain why [instruction ID] is locked`.

Resolve the target instruction unambiguously. If an instruction name matches multiple entries, ask one concise disambiguation question. Confirm each accepted change by ID, new state, and task scope. Never imply a control changed when it did not.

## Scope and precedence

1. Task overrides apply only to the explicitly identified current task.
2. They expire when that task ends unless the user explicitly asks to carry a preference forward and an available, authorized persistence mechanism exists.
3. A task override does not change another task, another agent's defaults, the plugin package, repository policy, or host settings.
4. `OFF` means skip that optional workflow instruction for this task; it does not mean ignore relevant facts, falsify results, bypass authorization, suppress material risks, or claim unperformed work.
5. If disabling a configurable instruction makes the task unsafe, impossible, misleading, or inconsistent with a higher-priority rule, do not apply the toggle; explain the conflict and offer a safe alternative.
6. When two applicable instructions conflict, follow the higher-priority instruction and disclose the conflict. User toggles cannot override host/platform rules or required safeguards.
7. Preserve the user's explicit task requirements even if a generic workflow preference is turned off.

## Default checklist for each task

Build IDs deterministically from source path plus heading/anchor, for example `CMD-ROUTING-01` or `TOKEN-TRACE-02`. Verify IDs against the current source before presenting them; do not invent stable IDs for rules not yet inventoried.

| ID | Instruction | Class | Default |
|---|---|---|---|
| TASK-SCOPE | Preserve the requested outcome and task constraints | REQUIRED | ON |
| SOURCE-AUTHORITY | Inspect current source-of-truth and exact target ref where repository work is involved | REQUIRED when repo work applies | ON |
| MINIMUM-AGENTS | Invoke only relevant specialists; avoid mechanical all-agent routing | CONFIGURABLE | ON |
| EVIDENCE-LABELS | Separate observed facts, hypotheses, and not-verified items | REQUIRED | ON |
| APPROVAL-GATE | Obtain approval for consequential contract/API/behavior changes | REQUIRED when applicable | ON |
| OWNER-LAYER | Prefer correcting the owning layer over adding overrides or duplicate systems | CONFIGURABLE, unless required by an approved contract | ON |
| TEST-PLAN | Plan proportionate regression and state coverage | OPTIONAL | ON when implementation applies |
| BROWSER-VERIFY | Perform browser/pixel verification when available and relevant | OPTIONAL | ON when visual work applies |
| HONEST-STATUS | Report only actions, tests, permissions, and results actually observed | LOCKED / REQUIRED | LOCKED ON |

This table is a starter checklist, not a substitute for the full source-derived inventory. Add, remove, or revise entries only after tracing them to current plugin-authored source.

## Task instruction record

For each controlled task, maintain an in-conversation record:

- Task identifier/short description.
- Applicable agents/skills.
- Inventory coverage: inspected files, missing files, and date/revision if available.
- Instruction ID, source, class, default state, task state, and user change.
- Locked-rule explanations and unresolved conflicts.
- Scope expiration: task end or explicitly authorized persistence.

Do not create a shadow policy database. Keep the task record in the current task context or in an existing user-approved project artifact. Do not claim cross-session persistence unless an actual persistence feature is available and used.

## Required output shape

Start with the task scope and instruction inventory coverage. Then show a compact checklist with columns `ID`, `Agent/source`, `Rule`, `Class`, `Task state`. Include a short explanation for each locked item. After the user changes a setting, restate only changed rows plus the effective scope and any blocked toggle. Continue the task under the resulting valid instruction set.

## Acceptance checks

- User can request the complete plugin-authored instruction inventory.
- Every listed instruction has a traceable source and owning skill.
- Applicable items expose explicit ON/OFF/LOCKED/N/A states.
- A configurable item can be switched for one task without affecting another task.
- Locked and required rules cannot be disabled by user toggle.
- Defaults can be reset for the current task.
- The agent reports inventory gaps, toggle conflicts, and persistence limitations honestly.
