import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react"
import { BookOpen, Eraser, LayoutGrid, PanelRight, Send, Wrench, X, Zap } from "lucide-react"
import {
  StudioChatComposerDock,
  StudioLedBadgeTab,
  StudioSplitTwoLineButton,
  StudioSquareIconButton,
  StudioTextArea,
} from "../../studio-ui"
import { TOOLBOX_PALETTE } from "../../styles/toolboxPalette"
import { BrainChatStatusBadge } from "./BrainChatPrimitives"
import type { BrainChatStatus } from "./BrainChatPrimitives"
import "./BrainComposerDock.css"
import "./BrainComposerExperience.css"

export type BrainComposerDockProps = {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  busy?: boolean
  status?: BrainChatStatus
  statusLabel?: string
  activePromptTitle?: string | null
  onClearActivePrompt?: () => void
  onOpenPrompts?: () => void
  onOpenCapabilities?: () => void
  onOpenContext?: () => void
  onOpenJournal?: () => void
  promptLauncherRef?: React.Ref<HTMLButtonElement>
  contextLauncherRef?: React.Ref<HTMLButtonElement>
  composerRef?: React.Ref<HTMLTextAreaElement>
  maxFieldPx?: number
  placeholder?: string
  className?: string
}

/** Tallest the message field grows before it scrolls internally. */
export const BRAIN_COMPOSER_MAX_FIELD_PX = 144

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const focusComposer = (node: HTMLTextAreaElement | null) => {
  if (!node) return
  try {
    node.focus({ preventScroll: true })
  } catch {
    node.focus()
  }
}

/** Face colours come from the shared 12-stop spectrum so these controls never carry Brain-only hex. */
const accent = (face: number) => ({ "--vt-studio-control-accent": TOOLBOX_PALETTE[face] }) as React.CSSProperties

/**
 * Canonical Brain composer composition.
 *
 * Reading order is the writing order: status, optional draft source, the message
 * field with its Send action beside it, then a quiet row of labelled entry points
 * (Prompts, Tools, Context) and the AI Journal. The page keeps ownership of
 * submission, prompt selection and Brain state; Studio Controls own every control's
 * geometry, colour and interaction, and this layer only places them.
 */
export const BrainComposerDock: React.FC<BrainComposerDockProps> = ({
  value,
  onChange,
  onSend,
  busy = false,
  status,
  statusLabel,
  activePromptTitle,
  onClearActivePrompt,
  onOpenPrompts,
  onOpenCapabilities,
  onOpenContext,
  onOpenJournal,
  promptLauncherRef,
  contextLauncherRef,
  composerRef,
  maxFieldPx,
  placeholder = "What would you like to work on?",
  className = "",
}) => {
  const areaRef = useRef<HTMLTextAreaElement | null>(null)
  const setRefs = useCallback(
    (node: HTMLTextAreaElement | null) => {
      areaRef.current = node
      if (typeof composerRef === "function") composerRef(node)
      else if (composerRef && "current" in composerRef) {
        ;(composerRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = node
      }
    },
    [composerRef],
  )

  // Grow with the draft up to the cap, then scroll inside the field. The field's own
  // 92px writing-surface minimum is the floor, so an empty composer never collapses.
  const cap = maxFieldPx ?? BRAIN_COMPOSER_MAX_FIELD_PX
  useIsomorphicLayoutEffect(() => {
    const node = areaRef.current
    if (!node) return
    node.style.height = "auto"
    const chrome = node.offsetHeight - node.clientHeight
    node.style.height = `${Math.min(node.scrollHeight + chrome, cap)}px`
  }, [value, cap])

  const resolvedStatus = status ?? (busy ? "loading" : undefined)
  const hasDraft = value.trim().length > 0
  const canSend = hasDraft && !busy

  return (
    <StudioChatComposerDock
      layout="toolbar-actions"
      className={`vt-brain-composer-dock ${className}`.trim()}
      aria-label="Brain message composer"
      status={
        resolvedStatus ? (
          <BrainChatStatusBadge status={resolvedStatus} label={statusLabel} />
        ) : (
          <span className="vt-brain-composer-hint">
            Enter to send <span aria-hidden="true">·</span> Shift+Enter for a new line
          </span>
        )
      }
      chips={
        activePromptTitle ? (
          <div className="vt-brain-composer-source" data-vt-brain-part="composer-attachments">
            <StudioLedBadgeTab
              mode="badge"
              label={activePromptTitle}
              tone="pink"
              led="solid"
              animation="steady"
              sizeVariant="compact"
              className="vt-brain-composer-attachment"
              aria-label={`Draft source: ${activePromptTitle}`}
            />
            <StudioSquareIconButton
              type="button"
              sizeVariant="compact"
              iconSizeVariant="large"
              variant="v2"
              icon={<X aria-hidden="true" />}
              label="Clear draft source label"
              title="Clear draft source label"
              data-vt-brain-part="clear-composer-source"
              onClick={() => onClearActivePrompt?.()}
            />
          </div>
        ) : null
      }
      field={
        <div className="vt-brain-composer-field" data-vt-brain-part="composer-field">
          <label className="sr-only" htmlFor="brain-composer">
            Message to ViewTube Brain
          </label>
          <span id="brain-composer-help" className="sr-only">
            Press Enter to send. Shift+Enter for a new line. Use Prompts to browse saved prompts, Tools to explore Brain
            capabilities, Context to inspect channel context, and Journal to open your AI journal.
          </span>
          <StudioTextArea
            ref={setRefs}
            id="brain-composer"
            sizeVariant="compact"
            rows={2}
            value={value}
            onChange={(event) => {
              onChange(event.currentTarget.value)
            }}
            placeholder={placeholder}
            className="vt-brain-composer-input w-full min-w-0 resize-none"
            style={{ maxHeight: cap }}
            aria-label="Message to ViewTube Brain"
            aria-describedby="brain-composer-help"
            onFocus={(event) => {
              focusComposer(event.currentTarget)
            }}
            onKeyDown={(event) => {
              if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) return
              event.preventDefault()
              if (canSend) onSend()
            }}
          />
          <div className="vt-brain-composer-send-column" role="group" aria-label="Message actions">
            <StudioSquareIconButton
              type="button"
              sizeVariant="standard"
              iconSizeVariant="large"
              variant="v2"
              icon={<Eraser aria-hidden="true" />}
              label="Clear message draft"
              title="Clear the current draft"
              data-vt-brain-part="clear-composer-draft"
              disabled={busy || !hasDraft}
              onClick={() => {
                onChange("")
                onClearActivePrompt?.()
              }}
            />
            <StudioSquareIconButton
              type="button"
              sizeVariant="standard"
              iconSizeVariant="large"
              variant="v4"
              icon={busy ? <Zap aria-hidden="true" /> : <Send aria-hidden="true" />}
              label={busy ? "Sending message" : "Send message"}
              title={busy ? "Brain is working" : "Send message"}
              data-vt-brain-component="BrainComposerSendAction"
              disabled={!canSend}
              onClick={onSend}
            />
          </div>
        </div>
      }
      tray={
        <>
          <StudioSplitTwoLineButton
            ref={promptLauncherRef}
            data-vt-brain-component="BrainComposerPromptLibraryAction"
            type="button"
            sizeVariant="compact"
            icon={<LayoutGrid aria-hidden="true" />}
            iconSizeVariant="large"
            aria-label="Open prompt library"
            title="Open prompt library"
            onClick={onOpenPrompts}
            className="vt-brain-composer-tool"
            firstLine="PROMPT"
            secondLine="LIBRARY"
            style={accent(11)}
          />
          {onOpenCapabilities ? (
            <div className="vt-brain-composer-wide-only">
              <StudioSplitTwoLineButton
                data-vt-brain-component="BrainComposerCapabilitiesAction"
                type="button"
                sizeVariant="compact"
                icon={<Wrench aria-hidden="true" />}
                iconSizeVariant="large"
                aria-label="Open Brain tools"
                title="Open Brain tools"
                onClick={onOpenCapabilities}
                className="vt-brain-composer-tool"
                firstLine="BRAIN"
                secondLine="TOOLS"
                style={accent(7)}
              />
            </div>
          ) : null}
          <StudioSplitTwoLineButton
            ref={contextLauncherRef}
            data-vt-brain-component="BrainComposerContextAction"
            type="button"
            sizeVariant="compact"
            icon={<PanelRight aria-hidden="true" />}
            iconSizeVariant="large"
            aria-label="Open channel context"
            title="Open channel context"
            onClick={onOpenContext}
            className="vt-brain-composer-tool"
            firstLine="CHANNEL"
            secondLine="CONTEXT"
            style={accent(5)}
          />
          {onOpenJournal ? (
            <>
              {/* Wide docks show the labelled button; narrow docks cannot fit a third two-line label, so they show the icon square. */}
              <div className="vt-brain-composer-journal-labelled">
                <StudioSplitTwoLineButton
                  data-vt-brain-component="BrainComposerJournalAction"
                  type="button"
                  sizeVariant="compact"
                  icon={<BookOpen aria-hidden="true" />}
                  iconSizeVariant="large"
                  aria-label="Open AI Journal"
                  title="Open AI Journal"
                  onClick={onOpenJournal}
                  className="vt-brain-composer-tool"
                  firstLine="AI"
                  secondLine="JOURNAL"
                  style={accent(9)}
                />
              </div>
              <div className="vt-brain-composer-journal-icon">
                <StudioSquareIconButton
                  data-vt-brain-component="BrainComposerJournalCompactAction"
                  type="button"
                  sizeVariant="compact"
                  iconSizeVariant="large"
                  variant="v2"
                  icon={<BookOpen aria-hidden="true" />}
                  label="Open AI Journal"
                  title="Open AI Journal"
                  onClick={onOpenJournal}
                />
              </div>
            </>
          ) : null}
        </>
      }
    />
  )
}

export default BrainComposerDock

/** Safe focus helper for parent pages (drawers → field). */
export const focusBrainComposer = (ref: React.RefObject<HTMLTextAreaElement | null> | null) => {
  focusComposer(ref?.current ?? null)
}
