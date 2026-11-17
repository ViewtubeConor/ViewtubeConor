/**
 * Confirmed-library specimen for StudioMultiSectionModule.
 * Copy/paste into StudioHubConfirmedPrimitiveCatalog additional sections,
 * or import as a child of a Family titled "Multi Section Module".
 */
import React from "react"
import { Home, Clock, List } from "lucide-react"
import { StudioMultiSectionModule } from "../../studio-ui/primitives/StudioMultiSectionModule"

export const StudioMultiSectionModuleCatalogSpecimen: React.FC = () => (
  <div
    className="vt-confirmed-variant is-full-row"
    data-vt-library-component="StudioMultiSectionModule"
    data-vt-confirmed-primitive="StudioMultiSectionModule"
  >
    <span>MULTI SECTION MODULE · STANDARD</span>
    <StudioMultiSectionModule
      sizeVariant="standard"
      accessibleLabel="Multi section module specimen"
      items={[
        {
          id: "overview",
          label: "Overview",
          icon: <Home aria-hidden="true" />,
          defaultOpen: true,
          content: (
            <p style={{ margin: 0 }}>
              Canonical panel content. Inactive panels use native hidden semantics in production.
            </p>
          ),
        },
        {
          id: "schedule",
          label: "Schedule",
          icon: <Clock aria-hidden="true" />,
          content: <p style={{ margin: 0 }}>Schedule and publish timing controls live here.</p>,
        },
        {
          id: "metadata",
          label: "Metadata",
          icon: <List aria-hidden="true" />,
          content: <p style={{ margin: 0 }}>Tags, category, education notes.</p>,
        },
      ]}
    />
  </div>
)

export default StudioMultiSectionModuleCatalogSpecimen
