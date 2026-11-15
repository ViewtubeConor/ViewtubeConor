import React from "react"
import { STUDIO_CATALOG_SIZES, STUDIO_CATALOG_SIZE_LABELS, type StudioCatalogSize } from "./confirmedCatalogTaxonomy"

export type ConfirmedCatalogSizeContextValue = {
  size: StudioCatalogSize
  setSize: (size: StudioCatalogSize) => void
  showSizeMatrix: boolean
  setShowSizeMatrix: (value: boolean) => void
}

export const ConfirmedCatalogSizeContext = React.createContext<ConfirmedCatalogSizeContextValue>({
  size: "standard", setSize: () => undefined, showSizeMatrix: false, setShowSizeMatrix: () => undefined,
})

export const useConfirmedCatalogSize = (): ConfirmedCatalogSizeContextValue => React.useContext(ConfirmedCatalogSizeContext)

export const ConfirmedCatalogSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [size, setSize] = React.useState<StudioCatalogSize>("standard")
  const [showSizeMatrix, setShowSizeMatrix] = React.useState(false)
  const value = React.useMemo(() => ({ size, setSize, showSizeMatrix, setShowSizeMatrix }), [size, showSizeMatrix])
  return (
    <ConfirmedCatalogSizeContext.Provider value={value}>
      <div className="vt-confirmed-catalog-root" data-vt-catalog-size={size} data-vt-catalog-size-matrix={showSizeMatrix ? "true" : "false"}>
        {children}
      </div>
    </ConfirmedCatalogSizeContext.Provider>
  )
}

export const ConfirmedCatalogChrome: React.FC = () => {
  const { size, setSize, showSizeMatrix, setShowSizeMatrix } = useConfirmedCatalogSize()
  const setAllFamilyOpen = (open: boolean) => {
    document.querySelectorAll<HTMLDetailsElement>(
      ".vt-confirmed-family-group, .vt-confirmed-family.vt-confirmed-primitive-module, .vt-confirmed-defaults-combined",
    ).forEach((el) => { if (el.closest("[data-vt-representatives='true']")) return; el.open = open })
  }
  return (
    <div className="vt-confirmed-catalog-chrome" role="toolbar" aria-label="Confirmed catalog controls">
      <div className="vt-confirmed-catalog-chrome__sizes" role="group" aria-label="Size bracket">
        <span className="vt-confirmed-catalog-chrome__label">Size</span>
        {STUDIO_CATALOG_SIZES.map((s) => (
          <button key={s} type="button" className={`vt-confirmed-catalog-chrome__size${size === s ? " is-active" : ""}`} aria-pressed={size === s} onClick={() => setSize(s)} data-size={s}>
            {STUDIO_CATALOG_SIZE_LABELS[s]}
          </button>
        ))}
      </div>
      <div className="vt-confirmed-catalog-chrome__actions" role="group" aria-label="Catalog view">
        <button type="button" className={`vt-confirmed-catalog-chrome__action${showSizeMatrix ? " is-active" : ""}`} aria-pressed={showSizeMatrix} onClick={() => setShowSizeMatrix(!showSizeMatrix)}>
          {showSizeMatrix ? "Size matrix on" : "Size matrix off"}
        </button>
        <button type="button" className="vt-confirmed-catalog-chrome__action" onClick={() => setAllFamilyOpen(true)}>Expand modules</button>
        <button type="button" className="vt-confirmed-catalog-chrome__action" onClick={() => setAllFamilyOpen(false)}>Collapse modules</button>
      </div>
      <p className="vt-confirmed-catalog-chrome__hint">Representatives stay standard-size and expanded. Family modules start collapsed.</p>
    </div>
  )
}
