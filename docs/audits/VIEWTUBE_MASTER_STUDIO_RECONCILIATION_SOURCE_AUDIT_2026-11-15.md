# ViewTube Master–Studio Reconciliation: Source Audit 01

**Date:** 2026-11-15  
**Branch:** `integration/reconciled-master-studio-2026-11-15`  
**Audited source snapshots:** master `52c6e90f416aaac7d3690581e1faab9e4cfb0b1d`; 10-31 `7e32cd69ccce26e4fa90e4d96627b0b22aa3ba49`  
**Scope:** canonical Studio token, stylesheet-entry, field, and accordion contracts; master Brain evidence promotion.

## 1. Findings at a glance

| ID | Finding | Disposition | Severity |
|---|---|---|---|
| AUD-01 | Master token object and 10-31 token object agree on the core five-tier geometry, including Micro 12/1/2/10 | Preserve token contract; compare full files before accepting other token changes | High confidence |
| AUD-02 | The master canonical Studio defaults document contradicts itself on Micro geometry in its size table | Reconcile documentation to tokens and the stated global contract | High |
| AUD-03 | Master `StudioTextInput.tsx` comments still describe Mini typography as 16px | Correct stale documentation when implementation work is authorized | Medium |
| AUD-04 | The root-level `studio-control-system.css` contains stale/contradictory field-fill and Supreme fallback values; it is not the stylesheet imported by the inspected primitive entrypoint | Determine whether root file has any other consumers; do not treat it as canonical without import proof | High |
| AUD-05 | The active `src/styles/studio-control-entry.css` imports generated variables and the canonical `src/styles` system/core/split/fields files, but also imports two override layers | Audit actual ownership and remove duplicate rules only after full import/cascade analysis | High |
| AUD-06 | Master field stylesheet contains the intended white/primary blend and black outer field border, with a persistent primary inline-stroke contract in tokens; rendered inset behavior remains unverified | Preserve semantic contract; verify computed styles and interaction | High |
| AUD-07 | 10-31 accordion has `aria-controls` for every rail but renders only the selected panel | Reconcile panel semantics and add accessibility tests | High |
| AUD-08 | Master Brain promotion validates canonical evidence records, trace membership, channel scope, lineage, and conflicting duplicates | Preserve master implementation and its tests | High |

## 2. Token source comparison

The inspected `src/studio-ui/tokens.ts` files from both frozen source snapshots have matching core size definitions in the audited section:

| Tier | Height | Stroke | Radius | Type/icon |
|---|---:|---:|---:|---:|
| Supreme | 60px | 3px | 6px | 52px |
| Standard | 44px | 3px | 6px | 38px |
| Compact | 28px | 2px | 4px | 24px |
| Mini | 20px | 1.5px | 3px | 17.5px |
| Micro | 12px | 1px | 2px | 10px |

The audited token definitions also specify:

- Editable field rest: primary text and glyph stroke, 50% white / 50% primary fill, black outer border, persistent primary inline stroke, primary caret.
- Editable field focus: black text and glyph stroke, primary 15% fill, black outer border, persistent primary inline stroke, secondary outline at 65% of border width and zero offset.
- Full-row width by default.
- Primary and secondary split rails.
- No shell lift or geometry movement in the shared flat interaction defaults.

**Important:** The token files have different blob SHAs even though the inspected core size lines match. Do not declare the files identical. Diff their complete contents before porting any 10-31 token additions or removals.

## 3. Canonical documentation contradiction

The master version of `docs/ui/STUDIO_CONTROLS_GLOBAL_DEFAULTS_AND_EXCEPTION_INDEX.md` states in its opening canonical description that Micro is:

- 12px height
- 1px stroke
- 2px radius
- 10px type/icon

That agrees with the master and 10-31 `STUDIO_CONTROL_SIZE_BASE.micro` token.

However, a later size-based table in the same document lists Micro stroke as 1.5px and radius as 3px. This contradicts both the opening statement and the machine-readable token.

**Decision:** The 12 / 1 / 2 / 10 token contract is the current baseline. Reconcile the documentation table to it. Do not modify the token to match the contradictory table.

The 10-31 version of this same document must also be compared before finalizing the merged normative document.

## 4. Stale single-line input typography comments

Master `src/studio-ui/primitives/StudioTextInput.tsx` has comments that describe Mini typography as 16px:

- The prop documentation says Mini = 20 / 16.
- The family comment says Mini = 16px.

The canonical token defines Mini font/icon size as 17.5px.

**Decision:** Treat these as stale comments, not an intentional token exception. Correct the comments alongside any approved input-family work. Check catalog labels and other primitive comments for the same drift.

## 5. Stylesheet ownership and root-level file ambiguity

### 5.1 Actual entrypoint imports

Master `src/styles/studio-control-entry.css` imports:

1. `studio-control-vars.generated.css`
2. `studio-control-system.css`
3. `studio-control-core.css`
4. `studio-control-split.css`
5. `studio-control-fields.css`
6. `studio-control-motion.css`
7. `studio-field-parity.css`
8. `studio-control-distill-overrides.css`
9. `studio-control-recovery-overrides.css`
10. `studio-side-rail-unify.css`
11. `studio-component-grid.css`
12. `studio-control-word-counter.css`
13. `studio-text-input.css`

The entrypoint is imported by `StudioTextInput.tsx` and other canonical primitive modules.

### 5.2 Root-level stylesheet

The root-level `studio-control-system.css` is not the same file as `src/styles/studio-control-system.css`.

The inspected root-level file includes different fallback values, including older Supreme stroke/radius fallbacks and field-fill expressions that mix primary with transparent. Those do not match the canonical white/primary blend.

The inspected `src/styles/studio-control-system.css` uses white/primary blending and the 60/3/6 Supreme geometry.

**Decision:** The imported `src/styles` system is the initial active stylesheet source for primitive-entrypoint analysis. The root-level file must be searched for independent consumers before being classified as dead, stale, or removable. Do not delete either file based on filename similarity alone.

### 5.3 Override layers

The canonical entrypoint currently imports both `studio-control-distill-overrides.css` and `studio-control-recovery-overrides.css`.

This is a real ownership-convergence concern because the target architecture calls for token-driven core/fields/system ownership and minimal overrides.

**Decision:** Do not simply delete the override files. Inventory their selectors and consumers, map each rule to its canonical owner, identify which rules are redundant, and remove duplicates only with regression coverage.

## 6. Field contract inspection

Master `src/styles/studio-control-fields.css` contains:

- Black outer border for canonical text fields.
- Resting fill using white 50% / primary 50%.
- Resting primary text, text stroke, and caret.
- Focused black text and text stroke.
- Secondary focus outline at 65% of selected stroke width and zero offset.
- Dedicated textarea typography rules.

The shared token contract specifies a persistent primary inline stroke in both rest and focus states.

Source inspection does not prove that every input wrapper, textarea, text box, and split-input presentation receives the correct inset stroke at runtime. The field CSS also contains multiple selectors and later rules that require computed-style inspection.

**Required verification:**

- Standard, Compact, Mini, Micro, and Supreme where supported.
- Resting, keyboard focus, pointer focus, and populated states.
- Native input typing and caret color.
- Textarea typing and resize.
- Text-box display styling.
- Split-left and double-split wrappers.
- No nested/doubled borders.
- No layout shift on focus.

## 7. StudioPanelAccordion accessibility finding

10-31 `src/studio-ui/primitives/StudioPanelAccordion.tsx`:

- Generates a unique ID.
- Renders a button for each item.
- Assigns each button `aria-controls=`${id}-panel-${index}``.
- Renders only the currently active panel, whose ID corresponds to the selected index.

Therefore, inactive rail buttons reference panel IDs that are not present in the DOM.

This is a source-level accessibility defect in the inspected implementation.

**Required resolution:** Choose and implement a stable semantics model. Either keep all associated panels in the DOM with inactive panels hidden appropriately, or revise the controls/relationship model so every ARIA reference is valid. Add tests for keyboard operation, selected state, disabled items, controlled/uncontrolled operation, empty items, and panel relationships. Confirm the design still meets the one-visible-panel behavior.

## 8. Master Brain evidence promotion: preservation decision

Master `src/services/brain/AlgorithmLearningProfilePromotion.ts` imports the canonical `EvidenceRecord` type/validator and resolves candidate evidence only from records actually returned on candidate traces.

The inspected implementation checks:

- Creator approval.
- Brain learning controls.
- Prior governance approval.
- Candidate/request channel agreement.
- Source event lineage and sample requirements.
- Candidate evidence IDs.
- Trace membership.
- Canonical EvidenceRecord validity.
- Evidence record channel scope.
- Evidence return membership.
- Conflicting duplicate evidence IDs.
- Durable promotion idempotency.
- Resolved evidence IDs for teaching and event recording.
- Evidence owners, snapshot IDs, and trace IDs in provenance metadata.

The corresponding master test file covers several negative cases, including missing evidence, evidence not returned by a candidate trace, foreign-channel records, conflicting snapshots, and channel-scope mismatch.

**Decision:** Preserve this master implementation and its tests. Do not port a weaker 10-31 implementation over it. The test suite still needs to be executed on the reconciled candidate; source inspection is not a test pass.

## 9. Next audit targets

Before implementation changes, continue with:

1. Complete token-file diff between the two frozen source snapshots.
2. Complete canonical-doc comparison for all three Studio source-of-truth documents.
3. Full CSS selector ownership map for the entrypoint and its imported layers.
4. Search for all imports/consumers of root-level `studio-control-system.css`.
5. Complete public export and primitive registry comparison.
6. Catalog specimen-to-public-export coverage audit.
7. Resource Library, Vault, Calendar, Analytics Visual Context, and Brain Composer capability-home audit against master.
8. Full review of the eight shared paths, including both sides' exact diffs.
9. Convert preliminary dispositions into a file-by-file preservation ledger.

## 10. Verification boundary

This audit used read-only GitHub source retrieval at the frozen commit SHAs. It did not run TypeScript, lint, build, unit tests, browser tests, computed-style inspection, or assistive-technology testing.

No implementation files were changed by this audit. The only changes on the reconciliation branch so far are documentation commits.
