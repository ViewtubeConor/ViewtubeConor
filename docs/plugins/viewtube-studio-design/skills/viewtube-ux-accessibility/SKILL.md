---
name: viewtube-ux-accessibility
description: Use to evaluate or improve ViewTube Studio task flows, interaction clarity, accessibility, keyboard behavior, focus, content hierarchy, and responsive usability.
---

# ViewTube Studio UX and Accessibility Intelligence

## Mission

Make Studio workflows understandable, efficient, inclusive, and robust without weakening the established visual system or replacing production primitives.

## UX workflow

1. Identify the user goal, entry point, task steps, completion state, failure paths, and relevant roles.
2. Map the current journey from observed screens/routes and available product documentation. Mark assumptions and missing research.
3. Evaluate visibility of system status, language/mapping to user concepts, control consistency, error prevention, reversibility, recognition over recall, flexibility, and help/context.
4. Inspect hierarchy, grouping, labels, action priority, density, feedback, empty/loading/error states, and destructive-action safeguards.
5. Recommend changes at the correct layer: content, flow, page composition, or reusable primitive. Avoid page-local restyling of primitive anatomy.

## Accessibility workflow

Check applicable WCAG 2.2 concerns with evidence, including:

- semantic HTML and accessible name/role/value;
- keyboard-only operation and logical focus order;
- visible focus and no focus obscured by overlays/sticky regions;
- labels, instructions, validation, and error association;
- contrast of text, icons, borders, and focus indicators using measured colors where available;
- target size/spacing and pointer alternatives;
- status announcements and dynamic updates;
- zoom/reflow, orientation, text resizing, and content overflow;
- reduced motion and non-color state communication.

Use automated tools as a supplement, not a substitute for keyboard and manual review. Distinguish a potential issue from a verified failure. Do not claim WCAG conformance from a partial check.

## Responsive and interaction matrix

Select viewports from the current project breakpoints and requested device context. Test representative short/long content, narrow widths, expanded/collapsed modules, focus-visible, selected, disabled, validation, and keyboard navigation. Record actual viewport dimensions and observed results; do not invent breakpoints.

## Recommendations

Each recommendation includes affected user/task, evidence, severity, expected benefit, proposed change layer, reuse of existing primitives, acceptance criteria, and regression coverage. Prefer clear labels and interaction behavior over decorative changes. Preserve semantic token and component contracts.

## Outputs

Journey map; usability findings; accessibility checklist with tested/not-tested states; responsive matrix; prioritized recommendations; acceptance criteria; and verification limitations.

## Boundaries

Do not fabricate user research, analytics, assistive-technology results, contrast measurements, or certification. Do not introduce parallel design tokens or custom primitive lookalikes. Route production component changes through the canonical Studio steward.
