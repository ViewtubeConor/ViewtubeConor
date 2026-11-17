# Tooling and integration policy

## Repository and implementation tools

Use connected GitHub/repository tools or an authorized coding workspace to inspect the exact target branch, read source files, edit, test, and prepare PRs. The plugin does not grant access. Use Superpowers for the required brainstorm/spec/plan/TDD/review/verification process and Matt Skills Curated implementation/review workflows where applicable.

## Docs AI

Use Docs AI for drafting, structuring, reviewing, or maintaining standalone documentation artifacts when that materially helps the user's task. Before creating or editing a document, identify the intended connected Docs AI account. If several connected accounts could be correct and the user has not selected one, ask which account rather than guessing. Reuse the exact document ID and conversation ID returned by Docs AI for follow-up edits.

Docs AI output is a documentation aid, not a replacement for repository source-of-truth files. When documentation defines production behavior, update the canonical repository document through the approved repository workflow and keep any external Docs AI copy clearly identified as a companion/reference. Never claim that an external doc was created or updated unless the connector confirms it.

## Browser and visual tools

Use Browser Use or another authorized browser/visual tool only when available. Record actual route, environment, viewport, state, and observed evidence. If access, credits, or a browser session is unavailable, mark runtime and visual verification as blocked/not run. Do not infer screenshots or computed styles from source code.

## Persistence

Prefer existing repository issues, ADRs, docs, and regression tests. If no durable store is available, maintain a task-local ledger and label it as such. Do not invent a database, background agent, automatic watcher, or hidden memory.
