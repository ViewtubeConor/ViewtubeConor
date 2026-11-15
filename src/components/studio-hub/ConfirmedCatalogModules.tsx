import React from "react"
import "../../styles/studio-confirmed-catalog-modules.css"

export interface ConfirmedModuleProps extends React.HTMLAttributes<HTMLDetailsElement> {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export const ConfirmedFamilyModule: React.FC<ConfirmedModuleProps> = ({
  title, children, defaultOpen = false, className = "", ...rest
}) => (
  <details className={`vt-confirmed-family-module ${className}`.trim()} data-vt-confirmed-family="true" data-size="standard" open={defaultOpen || undefined} {...rest}>
    <summary className="vt-confirmed-family-module__top">{title}</summary>
    <div className="vt-confirmed-family-module__body">{children}</div>
  </details>
)

export const ConfirmedPrimitiveModule: React.FC<ConfirmedModuleProps> = ({
  title, children, defaultOpen = false, className = "", ...rest
}) => (
  <details className={`vt-confirmed-primitive-module ${className}`.trim()} data-vt-confirmed-primitive="true" data-size="compact" open={defaultOpen || undefined} {...rest}>
    <summary>{title}</summary>
    <div className="vt-confirmed-primitive-module__body">{children}</div>
  </details>
)

export const ConfirmedDefaultsModule: React.FC<ConfirmedModuleProps> = ({
  title = "Global Defaults + Exceptions", children, defaultOpen = false, className = "", ...rest
}) => (
  <details className={`vt-confirmed-family-module vt-confirmed-defaults-module ${className}`.trim()} data-vt-confirmed-family="defaults" data-size="standard" open={defaultOpen || undefined} {...rest}>
    <summary className="vt-confirmed-family-module__top">{title}</summary>
    <div className="vt-confirmed-family-module__body">{children}</div>
  </details>
)

export default ConfirmedFamilyModule
