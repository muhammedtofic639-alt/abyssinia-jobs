"use client";

import React from "react";

export interface AccordionProps {
  title: string;
  count?: number;
  open?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Single expandable accordion section — the Main Category row in the filter overlay. Header toggles;
 * body slides + fades open. Compose a list of these to build the nested category filter.
 */
export function Accordion({ title, count, open = false, onToggle, children, style = {} }: AccordionProps) {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [h, setH] = React.useState(0);

  React.useEffect(() => {
    if (bodyRef.current) setH(bodyRef.current.scrollHeight);
  }, [children, open]);

  return (
    <div style={{ borderBottom: "1px solid var(--border-subtle)", ...style }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "18px 4px",
          textAlign: "left",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span
          style={{
            flex: 1,
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-body-lg)",
            fontWeight: "var(--fw-semibold)" as unknown as number,
            color: open ? "var(--accent)" : "var(--text-primary)",
            transition: "color var(--dur-fast)",
          }}
        >
          {title}
        </span>
        {count != null && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-tertiary)",
            }}
          >
            {count}
          </span>
        )}
        <span
          style={{
            fontSize: 16,
            color: open ? "var(--accent)" : "var(--text-secondary)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform var(--dur-base) var(--ease-standard), color var(--dur-fast)",
            display: "inline-block",
          }}
        >
          ⌄
        </span>
      </button>
      <div
        style={{
          height: open ? h : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-standard)",
        }}
      >
        <div ref={bodyRef} style={{ paddingBottom: 12 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
