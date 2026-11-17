---
name: viewtube-correction-intelligence
description: Use when recording ViewTube Studio defects and corrections, detecting recurring regressions, comparing prior fixes, creating regression-prevention checks, or preserving evidence-backed correction knowledge.
---

# ViewTube Studio Persistent Correction Intelligence

## Mission

Make corrections reproducible and prevent known defects from recurring. Build a structured correction record from observed evidence, link recurrence to prior records when accessible, and translate each confirmed correction into regression coverage.

## Persistence honesty

Use the repository's existing issue/decision/test/documentation system when one is available and approved. Otherwise keep a task-local correction ledger and clearly label it task-local. Do not claim cross-session memory, a database, automatic monitoring, or durable persistence unless a real connected system stored and returned the record. Never create a parallel correction database by default.

## Correction record

Capture: stable repository issue/record link if one exists; symptom; route/component; target branch/ref; first known bad and last known good refs if verified; reproduction steps; screenshots/computed styles/logs; expected contract and source; actual result; root-cause owner; fix and files; tests; visual verification; risk; status; recurrence links.

## Recurrence workflow

1. Search available correction records, issues, PRs, branch history, tests, and relevant docs.
2. Match by component/family, symptom, owning layer, and trigger—not wording alone.
3. Separate exact recurrence, related symptom, and coincidental similarity.
4. Compare previous fix and current source to find why the guard failed or drift returned.
5. Add the smallest useful regression test at the owning layer; include size/state/viewport variants implicated by evidence.
6. Update canonical docs or exception records when the contract itself changes.
7. Record verification level and residual uncertainty.

## Learning loop

For each completed correction, derive: defect signature, root-cause pattern, prevention rule, required test, affected consumers, and evidence standard. Prefer updating an existing test, issue, architecture decision, or canonical document over duplicating knowledge into a new store.

## Boundaries

Do not infer a cause from a similar past issue. Do not remove code or rewrite history based on a correction record alone. Do not claim a fix is durable until regression coverage exists and has been run. Keep private/user data out of repository docs unless explicitly approved.
