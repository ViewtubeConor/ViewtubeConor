# AI Brain Consolidation — Test and Verification Report

**Audit date:** 2026-11-14  
**Repository:** `viewtube-dev/viewtube`  
**Target under review:** `master/consolidated-feature-integration`  
**Target SHA:** `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`  
**Audit branch:** `audit/ai-brain-consolidation-2026-11-14`  
**Status:** Static source/metadata verification only. No executable test run is claimed.

## 1. Verification performed

| Check | Result | Evidence / limitation |
|---|---|---|
| Current target HEAD | Verified | Self-compare resolved to `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d` |
| October 31 reference HEAD | Verified | `d95eff55dde5939cdde8d51805c2ebeb55f9c372` |
| Candidate branch search | Partial | Search found 343 names matching “brain”; 29 “gemini”, 71 “evidence”, 39 “context”, 37 “creator”; complete candidate HEAD/diff census remains open |
| PR discovery | Partial | All-state PR pages 1–5 inspected; relevant PRs identified; full pagination and every PR diff not complete |
| Evidence Explorer donor | Source inspected | Component and test exist on donor; component fetch on target returned 404 |
| Composer and draft store | Source inspected | Composer source/CSS differ; draft-store source SHA identical; tests differ |
| Gemini caller surface | Static import/call inspection | Eight requested files fetched; full transitive provider call census not proven |
| Learning evidence validation | Source + ancestry verified | PR #1254 head is ancestor of target and target source has evidence completeness gate |
| Learning evidence resolution | Source + ancestry verified | PR #1256 head is ancestor of target and target promotion service resolves canonical trace evidence |
| Target workflow runs | No runs returned | Workflow lookup for target SHA returned an empty list; this is not a test pass |
| PR #1241 workflow | Failure observed | Commit workflow lookup for `b339f5e8d2253c6109e1a431ce1edbf0bcb6b986` returned a completed release-gates run with conclusion `failure`; failed job details not inspected |
| Vitest / focused tests | Not run | No executable repository checkout or test runner in this pass |
| TypeScript / lint / source governance | Not run | No executable repository checkout |
| Production build | Not run | No executable repository checkout |
| Browser / mobile / accessibility | Not run | No browser session or authenticated test turn performed |
| Live Gemini | Not run | No permitted authenticated test key/session supplied |

## 2. Source-level regression contracts to preserve

### Evidence and context
- Evidence shown to a turn must be the exact canonical record set actually supplied to that turn.
- Stable evidence IDs, channel scope, source snapshots, freshness, missingness and limitations must survive generation, retries, traces and saved turns.
- Required context sections, selected sections and omitted sections must remain distinct.
- Legacy retries without original context manifests must remain explicitly unknown rather than fabricating provenance.
- Scope mismatch must fail closed.
- Current target BrainTrace default sink is browser-local and capped; durable server-side persistence is not certified.

### Learning governance
- Decisive outcomes without evidence refs keep a learning cohort insufficient.
- Promotion resolves evidence IDs against canonical EvidenceRecord instances from candidate traces.
- Evidence must match channel scope and be in the trace's returned evidence set.
- Conflicting or missing evidence IDs must not be silently promoted.
- Candidate approval for review is not automatic durable knowledge promotion.

### Gemini
- Provider/model selection remains behind the shared gateway/resolver.
- Credential presence is distinct from provider health.
- Current key validation uses model-list discovery; transient provider/catalog errors are distinct from credential rejection.
- Raw provider exception text and key material must not be persisted.
- Generation retry must not replay external side effects.

### Composer
- Preserve Context, Tools/capabilities, Journal, prompt, and draft workflows where actually wired.
- Draft persistence remains channel-scoped and browser-local; the identical draft store must not be duplicated.
- Empty draft removal, malformed-storage handling, size limits, keyboard behavior and focus restoration need tests.
- Donor auto-resize behavior is a candidate gap; do not transplant without checking StudioTextArea ownership and mobile viewport behavior.

## 3. Known CI evidence and limitations

PR #1241's description reports previous successful Brain quality-loop/build/smoke jobs on older commits, but its current-head release gates were queued at the time of that description. The workflow lookup for its current head returned a completed failure. The job-level cause has not been retrieved here. PR #1241 itself states that full-suite/typecheck are affected by broad integration-baseline failures and that live authenticated Gemini browser verification was not performed.

No current-target workflow runs were returned for SHA `52c6e90f...`. Therefore there is no basis to claim current-target CI is green or red.

## 4. Required executable verification before PR readiness

Run on a checkout pinned to the exact candidate commit:

1. Focused Brain context resolver, context broker, orchestrator, retry continuity, trace, runtime snapshot and evidence-ribbon tests.
2. Evidence Explorer component tests and route/tab integration tests.
3. Learning candidate evidence-completeness and promotion-lineage tests.
4. Gemini key validation, provider architecture guard, model resolver, caller inventory and generation caller tests.
5. Composer component, draft-store, handoff, keyboard, resize, mobile viewport and restore tests.
6. Conversation restore, tool routing, operation identity, receipt and learning governance tests.
7. TypeScript, lint, source governance, full repository suite and production build.
8. Browser test for channel switching, evidence explorer, composer restoration and an approved redacted Gemini turn.
9. Verify exact evidence IDs and context manifest in persisted trace/turn; verify retry does not replay side effects.

Record command, exact SHA, result, failing test names and whether each failure is new or pre-existing.

## 5. Exit decision

**Not ready for a production integration PR.** Discovery is incomplete, no code recovery has been implemented, and no executable verification has run. The two audit documents and this report are reviewable checkpoints only.


## 6. Retrieved PR #1241 exact-head release-gate results

Workflow run: https://github.com/viewtube-dev/viewtube/actions/runs/43004496051 for head b339f5e8d2253c6109e1a431ce1edbf0bcb6b986.

| Job | Result | Evidence |
|---|---|---|
| brain-quality-loop | PASS | Job completed successfully |
| gemini-governance | PASS | Job completed successfully |
| production-build | PASS | Job completed successfully |
| local-smoke | PASS | Job completed successfully |
| source-governance | FAIL | audit:confirmed-catalog reports missing split-text-input stylesheet and P0 catalog specimens; multiple field/toggle/split-input assertions fail |
| focused-contracts | FAIL | Three Studio counter/dropdown CSS contract assertions fail |
| conversation-handoff-contract | FAIL | Job exits nonzero; full assertion detail not yet isolated |
| full-suite | FAIL | npm test exits nonzero; complete failing-file inventory not yet triaged |
| static-quality | FAIL | npm run typecheck fails on missing Studio exports/files, size-variant type mismatches and missing @testing-library/react |

The source-governance log shows Studio catalog failures stop later governance steps in that job (those steps are skipped). The focused-contracts job likewise stops before later test commands. Static-quality typecheck errors are cross-cutting and include multiple Studio symbols and fixtures; they must not be attributed to Brain provenance code without an exact failing-file comparison.

This is not a clean release gate. Passing Brain/Gemini/build/smoke jobs are evidence for those job scopes only. No live authenticated Gemini browser turn was performed, and no current-target workflow result was returned for SHA 52c6e90f.

## 7. PR #1241 exact-base status

The PR head is 1 commit ahead and 48 commits behind current target SHA 52c6e90f, with merge base a279e52e. The PR body’s older claim of “1 ahead, 0 behind” reflects its earlier base, not the current target. The provenance implementation requires selective forward-porting and exact-target verification.
