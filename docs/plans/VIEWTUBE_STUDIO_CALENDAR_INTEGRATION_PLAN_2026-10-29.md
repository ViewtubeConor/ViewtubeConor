# ViewTube Studio Calendar — Primitive Integration & Copy Contract

**Date:** 2026-10-29  
**PR target branch:** `fix/studio-controls-regression-recovery-2026-10-31`  
**Implementation branch:** `feat/projects-calendar-phase-0-1-source-integration-2026-11-15`  
**Canonical data owner:** Projects / Project records; no second calendar store  
**Status:** Phases 0–1 source/branch reconciliation and read-only Projects event projection are implemented on the recovery-based feature branch; runtime verification remains open. Phases 2–5 remain pending.

## Product contract

The Studio Calendar is the publishing-calendar view inside the existing Projects page. Preserve the current Board/Calendar toggle, selected-day detail panel, month navigation, quick scheduling/moving, unscheduling, project opening, and task visibility.

The calendar must continue to read Projects and their tasks from the existing Brain/Projects owner. A date change must continue to call `updateProject` for `publishDate`; no calendar-specific localStorage, independent project list, or parallel schedule database is introduced.

The visual language stays neo-brutalist and uses the canonical Studio controls for controls and tags. Layout-specific calendar geometry belongs to the calendar stylesheet; primitive geometry and state remain owned by the Studio primitives.

## Phase tracker

| Phase | Scope | Status | Completion evidence / remaining gate |
|---|---|---|---|
| 0. Branch/source reconciliation | Audit all identified calendar branches and PRs against the October 31 recovery branch; disposition stale, merged and unique work | **Complete — source audit** | Branch ledger below; #1244 is superseded, #1245–#1249 are merged, and no identified branch contains additional unmerged calendar commits beyond the merged recovery history |
| 1. Source-owned event contract | Define canonical owners, stable record identity, date semantics and read-only projections for existing Project and task records | **Implemented; runtime verification pending** | `calendarEventContract.ts` plus `projectCalendarEvents.ts` and focused tests for Projects/tasks and verified Publisher schedules; existing owner write paths remain unchanged |
| 2. Studio primitives | Mini event chips, multi-day bars, thumbnail event chips and media rails | **Implemented on recovery branch; integration/visual verification pending** | `StudioCalendarEventChip`, `StudioCalendarMultiDayBar`, `StudioCalendarThumbnailEventChip`, `StudioCalendarMediaRail`, exports and confirmed catalog |
| 3. Confirmed primitive catalog | Actual production representatives and regression coverage | **Implemented on recovery branch; verification pending** | PRs #1245, #1248 and #1249 |
| 4. Production calendar integration | Consume the event projection and render new Mini/bar/thumbnail primitives in `ProjectPlannerCalendar` | **Pending** | Current production calendar still projects project/task arrays inline and renders individual chips |
| 5. Interaction and owner writes | Drag/drop, range movement, task/publish interactions and owner-correct persistence | **Pending** | Preserve existing `updateProject` paths; add only owner-supported workflows |
| 6. Verification and release | Focused tests, Studio gate, typecheck, build, full suite and desktop/mobile accessibility checks | **Pending** | Must run in repository-capable CI/runtime; do not claim visual certification before browser inspection |


## Branch and PR disposition ledger — audited 2026-11-15

Comparison target: `fix/studio-controls-regression-recovery-2026-10-31`. The audit compared each named branch against that exact target; it did not compare or merge the 534-commit-diverged master history.

| Identified branch | Comparison result | PR / disposition |
|---|---|---|
| `feat/calendar-phases-0-3-studio-recovery-2026-11-11` | 11 commits ahead in its stale pre-sync snapshot | PR #1244 closed unmerged as superseded by #1245. Its code snapshot is not to be cherry-picked over the recovery branch; #1245 carries the refreshed implementation |
| `feat/calendar-phases-0-3-studio-recovery-sync-2026-11-11` | No unique commits ahead | PR #1245 merged into recovery; authoritative Phase 0–3 calendar delivery |
| `feat/calendar-resource-analytics-consolidation-2026-11-11` | No unique commits ahead in branch comparison | PRs #1246 and #1247 merged; calendar consolidation is present, while Resource Index/Analytics changes are outside this calendar scope |
| `feat/confirmed-calendar-primitives-coverage-2026-11-11` | No unique commits ahead | PR #1248 merged; catalog regression coverage recovered |
| `fix/calendar-catalog-event-kind-typing-2026-11-11` | No unique commits ahead | PR #1249 merged; invalid catalog event kinds corrected |
| `feat/studio-calendar-controls-integration-2026-10-29` | No unique commits ahead | Historical source; PR #1160 records the merged Studio primitive integration |
| `feat/studio-calendar-catalog-representatives-2026-10-29` | No unique commits ahead | Historical source; PR #1166 records the merged catalog representatives |
| `master/calendar-toolbox-status-badges-2026-10-11` | No unique commits ahead | Historical master-lineage source; PRs #23 and #24 record the merged early calendar foundation |

### PR state and recovery rules

- **Merged to the October 31 recovery branch:** #1245, #1246, #1247, #1248 and #1249. Their unique changes are already part of the recovery lineage; do not replay them.
- **Superseded, not independently merged:** #1244. It contains an older snapshot; its replacement is #1245, which was refreshed against the latest recovery head.
- **Historical merged foundations:** #23 and #24 are on the master integration lineage; #1160 and #1166 are represented in the recovery branch's calendar source. Preserve their functionality; do not replay historical branches.
- **No additional unmerged calendar-only code was identified** on the eight named branches after accounting for the superseding/merged PR lineage.
- The #1246/#1247 PRs include Resource Index and Analytics changes. Those are not to be copied into a future calendar-only PR.
- Branch deletion is intentionally deferred until the final calendar migration is verified and no open PR or other work depends on those refs.

### Phase 0 completion boundary

This completes the source/branch inventory and disposition. It does not certify tests, runtime rendering, or the later calendar redesign phases. The recovery branch remains the safe base for calendar continuation; master remains a separate integration destination for a later selective port.

## Phase 1 — source-owned event projection

The shared event vocabulary remains in `src/services/calendar/calendarEventContract.ts`. The pure adapters in `src/services/calendar/projectCalendarEvents.ts` map existing Project/task records and explicitly verified Publisher schedule metadata into that read model:

- Project `publishDate` → `projects / project / publish`, one-day event.
- Project `tasks[].dueDate` → `projects / project_task / task`, one-day event.
- Stable IDs are derived from owner, source record ID and event role.
- Completed tasks project as `completed`; open tasks project as `planned`.
- Invalid/impossible dates and unscheduled records are omitted.
- Project/task inputs are read-only and never mutated.
- Project/task scheduling writes remain in the existing Projects owner path; this adapter does not write records.

The contract still reserves Publisher/ContentBuild, Asset Engine/Vault and Analytics owners. Their projections must be added only from verified owner records and stable IDs. The current Project Planner's saved ContentBuild badge is a read-only publication-state display; it is not evidence of a live YouTube refresh or a complete Publisher event feed. Explicit owner-managed date ranges remain mandatory for multi-day events.

## Recovery-branch execution record — historical implementation

### Phase 0 — source and branch reconciliation

- The recovery branch is the PR base: `fix/studio-controls-regression-recovery-2026-10-31`.
- The implementation branch is based directly on that recovery branch, preserving its 28 commits that are not present on `master/consolidated-feature-integration`.
- The target branch has two commits not present on the recovery branch. They are not merged wholesale; calendar work is being selectively applied to the recovery branch to avoid replacing Studio Controls recovery work.
- The October 29 calendar integration and catalog branches are historical references, not merge candidates. The standalone calendar HTML is a visual/interaction specimen only; its localStorage demo data is not production persistence.
- Canonical source references reconciled: this plan, the 13B Planner Calendar guides, the Projects / Asset Engine / Publishing architecture plan, the integrated content lifecycle plan, the Brain master resource, and the Studio Hub component-library source of truth.
- Repository hygiene: do not overwrite the unrelated Settings task files. This calendar plan remains the single calendar roadmap; older 13B guides are behavioral references, not competing checklists.

### Phase 1 — event contract and source ownership

The shared projection contract is `src/services/calendar/calendarEventContract.ts`. It defines a source-owned event projection, stable owner/record identity, inclusive date ranges, status, optional timezone, Asset Engine/Vault thumbnail identity, and externally verified schedule metadata.

| Calendar projection | Canonical owner | Existing field / rule |
| --- | --- | --- |
| Project publication | Projects | `Project.publishDate`; one-day event |
| Project task | Projects | `Project.tasks[].dueDate`; one-day event |
| YouTube scheduled/published state | Publisher / ContentBuild | `ContentBuild.youtube`; show only verified external state |
| Thumbnail/media | Asset Engine / Vault | Asset ID and provenance; UI resolves preview URL |
| Multi-day project/campaign bar | Owning project/workflow | Requires an explicit owner-managed start/end range |

No calendar table, browser-local calendar store, duplicate task store, or new Project date-range fields are introduced in this phase. `publishDate` remains the publication date and must not be overloaded as a project start/end date. A future range field must be approved and persisted by the owning Projects workflow before the calendar projects it.

### Phase 2 — Mini Studio calendar primitives

- `StudioCalendarEventChip` now has a Mini size variant while retaining its existing Standard default and removal/status behavior.
- `StudioCalendarMultiDayBar` represents one-day and week-segmented bars with explicit start/middle/end/single segments, status, selected state, optional progress, and channel-wide dashed treatment.
- `StudioCalendarThumbnailEventChip` adds an inline left 16:9 thumbnail section sized from the Mini chip height; it accepts a resolved thumbnail URL and has an accessible empty-image fallback.
- `StudioCalendarMediaRail` remains the larger 16:9 / 9:16 media composition and is not repurposed as a thumbnail chip.
- Mini geometry follows the shared Studio size ladder: 20px overall height, 1.5px border, 3px horizontal padding. Calendar fills use 50% white mixed with the semantic color, never 50% transparency.
- The new primitives use the existing global Studio control tokens and are publicly exported from `src/studio-ui/index.ts`.

### Phase 3 — confirmed primitive catalog

- The confirmed catalog imports the production calendar primitives directly from `StudioCalendarPrimitives.tsx`.
- The calendar family presents Mini event chips, the segmented multi-day bar, and the thumbnail event chip as actual components, alongside the existing larger media-rail specimens.
- Catalog regression coverage asserts the new production component markers, Mini size, segment variants, 16:9 thumbnail split, and public exports.

### Verification status

The source changes and regression assertions have been authored on the implementation branch. The repository runtime is not available in this execution environment, so the focused Vitest test, Studio Controls test gate, typecheck, build, and browser rendering have **not** been run here. Do not treat phases 2–3 as certified until those checks run in CI or a repository-capable environment.

## Creator-facing copy contract

Use short, action-led language. Avoid implementation terms such as “calendar state,” “record mutation,” “projection,” or “ContentBuild” in creator-facing controls.

| Surface | Approved copy |
|---|---|
| Project Builder subtitle | “Plan channel priorities and take each project from idea to publication” |
| Project Board subtitle | “Track production stages and schedule publication dates” |
| Storyboard Studio subtitle | “Shape scenes, sequences, and the visual story before editing” |
| Selected-day heading | “Schedule for” |
| Selected-day summary | “N scheduled projects · N tasks” (singularize each count in the UI) |
| Empty day | “Nothing planned for this day yet. Choose a project below to schedule it.” |
| Schedule selector group | “Schedule a project” |
| Selector accessible name | “Choose project to schedule or move” |
| Selector placeholder | “CHOOSE A PROJECT” |
| Schedule action | “Schedule project here” |
| Move action | “Move project here” |
| No-project state | “NO PROJECTS AVAILABLE” with helper “CREATE A PROJECT FIRST” |
| Schedule feedback | “Choose a project to schedule it for this date.” |
| Successful schedule feedback | “{project title} scheduled for {full date}.” |
| Unschedule feedback | “{project title} removed from the publishing calendar.” |
| Calendar footer | “Schedule changes save to the project” |
| Day navigation labels | “Previous month”, “Next month”, “Today” |
| Event types | “Publish”, “Task”, “Milestone”, “Reminder”, “Deadline” |
| Project row action | “View project” |
| Task state | “Completed” / “Not completed” |

The design uses uppercase Studio faces for compact control labels; explanatory helper text remains plain language. Every icon-only action needs a meaningful accessible label.

## Primitive responsibilities

- **StudioCalendarEventChip**: compact event identity built on the shared spectrum tag; carries event kind/status and supports removable events through the canonical closeable badge.
- **StudioCalendarMediaRail**: ratio-aware thumbnail/event composition supporting `16:9` landscape and `9:16` portrait plus left/right/double rails. Rails use the semantic secondary color and a single divider.
- **Studio controls**: own button, dropdown, tag, close interaction, focus and size behavior.
- **ProjectPlannerCalendar**: owns calendar view state only (cursor and selected date), and reads/writes the existing Project owner.
- **Project**: remains the source for `publishDate`, `thumbnailUrl`, and project task due dates.
- **Standalone prototype**: a visual/interaction reference only; its demo data is not production persistence.

## Release checklist

- [ ] Focused Studio Calendar primitive tests pass.
- [ ] Confirmed catalog coverage audit passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] `npm test` passes, or all failures are traced and classified without suppressing tests.
- [ ] Browser verification at desktop, narrow mobile portrait, and landscape is complete.
- [ ] Keyboard navigation and screen-reader labels are verified.
- [ ] Reduced-motion behavior is verified.
- [ ] Project schedule changes are verified to persist through the existing Project owner.
- [ ] External YouTube publish/scheduled state is reconciled only through its canonical integration; no fake status or inferred sync.
- [ ] PR is opened against `fix/studio-controls-regression-recovery-2026-10-31` with honest verification results.
