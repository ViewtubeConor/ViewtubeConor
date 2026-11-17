# ViewTube Studio Design Plugin — design specification

**Release:** v0.6.0  
**Plugin identity:** existing private personal `viewtube-studio-design` plugin.

## v0.6.0 expansion — Agent Instruction & Task Controls

- Inspect the current plugin-authored instructions across the canonical steward, Command Center, specialist skills, and applicable references.
- Present a source-traceable checklist showing owning agent, instruction ID, plain-language rule, class, default, and task state.
- Allow explicit ON/OFF changes to configurable and optional instructions for one named task.
- Distinguish LOCKED, REQUIRED, CONFIGURABLE, OPTIONAL, and N/A states; explain blocked changes.
- Reset task overrides and expire them at task end unless an authorized persistence mechanism is actually available and used.
- Preserve host/platform policies, safety, permissions, truthfulness, explicit user requirements, and approved repository contracts.

## Architecture

The six established sections remain: Design Intelligence, Component Intelligence, Creative Design, UX Intelligence, Quality Assurance, and Implementation. Instruction governance is a cross-cutting skill, not a seventh design section or separate runtime. The canonical Studio steward remains the production contract authority.

## Guardrails

- Read `docs/registry.json` and current normative docs on the exact target ref.
- No parallel token/primitive registry, CSS layer, test harness, issue database, or background monitor.
- Generated artifacts change only through their canonical generator.
- Migrations require API/behavior compatibility and regression coverage; visual similarity is insufficient.
- Test matrices are plans until executed; visual comparison requires comparable captures.
- Contract/API changes require approval and canonical documentation.
- Source/build success is not runtime or visual certification.
- Only plugin-authored instructions and user-provided task constraints are inventoried; hidden host instructions/private reasoning are not exposed or toggleable.
- Task overrides are conversational and task-scoped unless a real authorized persistence mechanism is available.

## Evidence vocabulary

`source-confirmed`, `runtime-observed`, `visual-observed`, `test-confirmed`, `hypothesis`, `not-verified`.
