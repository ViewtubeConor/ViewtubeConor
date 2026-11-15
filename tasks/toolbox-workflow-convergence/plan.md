# Toolbox Promotion + Workflow Chain Convergence — Implementation Plan

**Production Date:** 2026-09-27  
**Status:** PROPOSAL / TASK WORKSPACE  
**Canonical task mutation:** NOT PERFORMED  
**Audited main baseline:** 3ed2bc91f324338fd110a160d65ddbed93806142  
**Primary specification:** docs/specifications/TOOLBOX_PROMOTION_AND_WORKFLOW_CHAINS.md

## Goal

Convert the current collection of oversized/overlapping Dashboard widgets and disconnected Send To ideas into a smaller set of canonical Toolbox workstations connected by typed, resumable, evidence-preserving workflow handoffs.

This workspace intentionally does not create forty tasks for forty workflow recipes. Recipes are reusable orchestration prior art. Implementation is grouped into shared contracts and a small number of promotion/consolidation slices.

## Existing work checked

- docs/architecture/PRODUCT_ARCHITECTURE.md
- docs/programs/INTEGRATED_APPLICATION.md
- docs/architecture/VIEWTUBE_WIDGET_DASHBOARD_MASTER_RESOURCE.md
- docs/architecture/VIEWTUBE_WIDGET_POST_CURRENT_CONSOLIDATION_PLAN_2026-09-24.md
- docs/architecture/VIEWTUBE_TOOLBOX_UI_MASTER_RESOURCE.md
- docs/brain/UNIVERSAL_TOOL_HANDOFFS_AND_SUGGESTED_CHAINS.md
- docs/architecture/VIEWTUBE_PROJECTS_CONTENTBUILD_WORKFLOW_MASTER_RESOURCE.md
- docs/architecture/VIEWTUBE_ASSET_ENGINE_MASTER_RESOURCE.md
- docs/domains/BRAIN.md
- docs/analytics/VIEWTUBE_ANALYTICS_VT_SYNC_MASTER_RESOURCE.md
- docs/editor/VIEWTUBE_YOUTUBE_EDITOR_SYSTEM_MASTER_RESOURCE.md
- tasks/system-convergence/todo.md
- tasks/documentation-backlog-integration/CURRENT-MAIN-RECONCILIATION.md
- current Dashboard registry/widget modules and major tool/page owners on main

## Architectural constraints

1. Dashboard widgets remain instruments; Toolbox surfaces own multi-stage work.
2. Promotion does not create a second persistence owner.
3. Existing ViewTubeActionPacket remains the handoff protocol until operation-identity convergence deliberately extends it.
4. Project, ContentBuild, Asset Engine/Vault, analytics-canon, BrainRuntime, Publisher and Outcomes remain canonical owners.
5. A chain may suggest the next destination but may not silently execute external writes.
6. Existing widget IDs require explicit persisted-layout migration before rename/removal.
7. UI parity means capability parity, not mounting one surface inside another.
8. Recipes are not automatic Task Index allocations.

## Candidate work packages

### C1 — Compact Widget → Toolbox Promotion Contract
Define a reusable contract for:
- open/resume full Toolbox;
- carry current selected Project/video/asset/package context;
- show bounded status in the widget;
- return from Toolbox without losing selection;
- preserve loading/empty/error/disconnected states.

**Acceptance:** at least two promoted surfaces use the same contract without sharing inappropriate top-level layout code.

### C2 — Tool + Widget Handoff Metadata — PARTIAL FOUNDATION
`VIEWTUBE_TOOL_CAPABILITIES` already defines `accepts` and `produces`, and SendToMenu already resolves compatibility from it. Extend rather than recreate:
- requiredContext;
- mutationClass / external-write semantics;
- resumable destination information;
- explicit suggestedHandoffs where static intent is useful;
- WidgetRegistry ↔ universal tool-capability bridge.

**Acceptance:** compatibility and required context can be determined from governed registry metadata rather than bespoke menu conditionals for pilot flows.

### C3 — Universal Operation Identity — PARTIAL FOUNDATION
Persisted ViewTubeActionPackets already create GenerationRecords, Vault artifacts, optional ContentBuild asset links/events and Brain inbox items. Reconcile those existing receipts with ToolReceipt, BrainTrace and render/generation operation identity under the system-convergence OperationRecord direction.

**Acceptance:** one pilot chain can be traced end-to-end through one stable operation/workflow identity without replacing current stores or duplicating existing ActionPacket receipts.

### C4 — Workflow Recipe Registry — PARTIAL FOUNDATION
`VIEWTUBE_SUGGESTED_TOOL_CHAINS` already contains eight hard-coded chain templates. Generalize this existing concept and encode the forty specification recipes as structured, non-authoritative orchestration templates.

**Acceptance:** recipe validation rejects unknown tools, impossible payload transitions and missing external-write approval declarations while preserving compatibility with the existing suggested-chain API.

### C5 — Workflow Chain Viewer Convergence — PARTIAL FOUNDATION
`WorkflowChainBuilder.tsx` and `workflowEngine.ts` already provide local chain creation, steps, statuses, artifact links and provenance. Converge that system with universal ActionPacket receipts instead of building another viewer. Target view:
source → transformations → destination → produced artifacts → evidence → approval state → outcomes.

**Acceptance:** a creator can inspect a pilot chain and identify which exact packet, asset/variant/evidence and canonical identity moved at each step.

### C6 — Brain-Compatible Destination Ranking — PARTIAL FOUNDATION
`rankWorkflowTargets` already adapts ordering from creator-learning preference signals. Extend ranking with bounded current Project, packet payload type, evidence/required-context compatibility and User Controls.

**Acceptance:** ranking never invents incompatible destinations, respects required context, and can always be bypassed by direct creator selection.

### C7 — Handoff Preference Feedback — IMPLEMENTED FOUNDATION / CONNECT
`buildWorkflowSelectionSignals` and `recordWorkflowPreferenceSignal` already record accepted choices and skipped-higher-ranked negative signals, gated by the creator-learning User Control. Do not rebuild this store. Connect it to governed outcome/evaluation semantics where appropriate and certify retention/decay/privacy behavior.

**Acceptance:** disabled learning creates no durable preference update; enabled learning remains governed rather than direct model memory, and any promotion into broader learning has explicit evidence/outcome provenance.

### C8 — Core Existing-Tool Promotion Wave
Audit and converge:
- Video Director;
- Video Publisher;
- Video Manager;
- Video Autopsy;
- Daily Oracle;
- Brain Hub;
- Comment Operations;

#### Comment Management / Comment Operations foundation
**Conversation documentation package:** `tasks/conversation-intake/VT-CONV-COMMENT-MANAGEMENT-STUDIO-2026-11-15/` records the complete request, work log, reconciliation and next action. The subordinate product/UX/API/security specification is `docs/product/studio-hub/COMMENT_MANAGEMENT_WORKSPACE.md` (registry ID `DOC-SPEC-COMMENT-MANAGEMENT`).

**Current verification receipt (2026-11-15):** PR #1274 workflow run [43677671858](https://github.com/viewtube-dev/viewtube/actions/runs/43677671858) overall FAILURE. Production build, local smoke, Brain quality-loop and Gemini governance passed. Focused-contracts stopped at the Studio counter/dropdown gate after the Comment Management test step; static-quality failed typecheck; conversation-handoff job passed handoff/document-system tests but failed document audit; source-governance failed confirmed-catalog audit; full suite failed. Exact failure logs still require retrieval. Do not describe the PR as merge-ready or these failures as baseline/unrelated until diagnosed.


The first implementation slice is tracked in [PR #1274](https://github.com/viewtube-dev/viewtube/pull/1274). This work extends the existing Comment Responder capability; it does not establish a new persistence or orchestration owner.

**Current ownership contract**
- Studio Hub's existing `ToolboxScaffold` owns the outer toolbox shell.
- `CommentResponder.tsx` owns the Comment Management workspace presentation.
- `useCommentResponderController.ts` remains the single UI/controller orchestration path for comment queues, selection, drafting, suggestions, and reply posting.
- Existing YouTube services remain the transport/API boundary.
- Existing `defaultBrainModelGateway` remains the model gateway for comment drafting and video recommendations.
- Audience Pulse remains a read-only projection over loaded source records; review proposals use the existing ViewTubeActionPacket handoff.
- The product direction may consolidate Comment Operations and Community Posts under Audience Studio, but that is a product-navigation/ownership decision requiring registry reconciliation—not permission to create parallel implementations.

**First-slice UI contract**
- One outer toolbox shell; no nested duplicate Comment Responder shell.
- Selectable New / Replied inbox and an inspectable selected conversation.
- Reply generation and refinement create drafts only.
- Video recommendations expose the model match score, reason, and preview separately; the creator explicitly chooses whether to insert the link.
- Posting a reply is an explicit creator action.
- Audience Pulse inference remains labeled as heuristic/inferred and source-limited.

**Next foundation work**
1. Replace weak `any` presentation contracts with typed canonical YouTube comment/thread shapes.
2. Pass only approved, source-attributed thread/video context into Brain drafting; preserve provenance and distinguish observed facts from inference.
3. Add recommendation evaluation fixtures, including no-fit and invalid-ID cases.
4. Extend audience intelligence through the existing evidence projection and proposal packet.
5. Wire the already-existing `comments.setModerationStatus` and `comments.markAsSpam` routes into explicit-confirmation UI actions, gated by the existing `youtubeWrite` capability and covered by permission/error/refresh tests. The current `data.comments.manage` registry entry requires `youtube.force-ssl`; do not infer support for delete, pin, heart, or bulk actions from this.
6. Complete responsive, accessibility, and state-matrix certification.

**Hard boundaries**
- No second comment store, controller, evidence store, or Brain runtime.
- No autonomous replies or moderation mutations.
- No fabricated sentiment, audience counts, or recommendation certainty.
- No API scope expansion until capability and permission requirements are verified.
- Longform Optimization;
- Video Asset Engine;
- Thumbnail Studio family.

**Acceptance:** each gets a capability matrix deciding widget-only, Toolbox-only, or compact-widget + Toolbox; no duplicate backend owner.

### C9 — Consolidated Domain Workbenches
Consolidate existing overlapping widget families into:
- Metadata / SEO Workbench;
- Retention Lab;
- Keyword Intelligence;
- Publishing Calendar;
- Audience Intelligence;
- Discovery & Distribution;
- Monetization Intelligence.

**Acceptance:** every retired/absorbed widget capability has an explicit new owner, persisted-layout migration where required, and parity evidence.

### C10 — Identity Continuity Certification
Create chain fixtures that prove:
Project → ContentBuild → video → package → asset/version → evidence
survives supported handoffs.

**Acceptance:** pilot chains retain exact canonical identities through every hop and no destination reconstructs them from labels/URLs.

### C11 — Outcome / Evaluation Closure
Require consequential recipes to define:
- action identity;
- expected outcome;
- metric/evidence context;
- evaluation checkpoint;
- used variant / approved snapshot where relevant.

**Acceptance:** at least one publishing/packaging pilot closes action → measured outcome → evaluation without metric-semantic mismatch.

### C12 — Responsive / Accessibility / State Certification
Certify widget + Toolbox pairs for:
- desktop;
- narrow desktop/tablet;
- mobile portrait;
- mobile landscape;
- loading;
- empty;
- disconnected;
- stale;
- error;
- focus/keyboard/touch states.

**Acceptance:** screenshot/runtime evidence is analyzed under docs/governance/VERIFICATION.md.

## Pilot execution order

0. Preserve and test the existing SendToMenu / ActionPacket / preference-learning / WorkflowChainBuilder foundations; do not reopen them as greenfield work.
1. C1 promotion contract.
2. C2 registry handoff metadata extension + WidgetRegistry bridge.
3. C10 identity continuity test harness.
4. Thumbnail Refresh Experiment pilot.
5. Comment → New Video pilot.
6. Editor Missing-Shot Recovery pilot.
7. 72-Hour Launch Review pilot.
8. Missing Asset Finder pilot.
9. C5 chain viewer.
10. C6/C7 ranking and creator feedback.
11. C8 core promotion wave.
12. C9 domain-workbench consolidation.
13. C11/C12 closure and certification.

## Why these five pilots

The five pilots cover different packet and ownership shapes:

- thumbnail image/variant → metadata mutation → analytics;
- audience evidence → Brain → Project;
- timeline selection → generated media → Asset lineage → Editor;
- ApprovedPublishSnapshot → analytics → decision;
- package slot → Vault reuse → conditional generation.

If these work under one handoff contract, the remaining recipe catalog becomes materially easier to add without bespoke architecture.

## Explicit non-goals

- no autonomous publishing/posting/replies;
- no second Project/ContentBuild store;
- no second Asset/Vault store;
- no second analytics truth layer;
- no second Brain runtime;
- no new workflow database until existing operation/task/event stores are reconciled;
- no forty-recipe bulk task creation;
- no wholesale widget deletion based on component/file size.

## Verification strategy

Each implementation slice must include:
- current-main overlap audit;
- capability/owner reconciliation;
- contract tests;
- production build comparison to baseline;
- runtime interaction;
- responsive screenshot analysis for visible UI;
- identity/provenance assertions;
- external-mutation approval checks where relevant;
- completion receipt before DONE.

## Task Authority note

Permanent VT IDs are intentionally absent here. Task Authority requires duplicate/current-main reconciliation and an actual Task Index VNext mutation path before permanent identities are allocated. Candidate work packages C1–C12 are proposal identities only.
