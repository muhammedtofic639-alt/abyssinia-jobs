"use client";

import React from "react";

export interface SlideSheetProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Full-screen slide-up sheet — the "Filter & Show" overlay and any modal panel. Scrim fades in; the
 * sheet glides up from the bottom with rounded top corners, a grab handle, sticky title, and a sticky
 * footer action slot.
 */
export function SlideSheet({ open = false, title, onClose, footer = null, children, style = {} }: SlideSheetProps) {
  return (
    <div
      aria-hidden={!open}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        pointerEvents: open ? "auto" : "none",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--scrim)",
          backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          transition: "opacity var(--dur-base) var(--ease-standard)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight: "92%",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg-raised)",
          borderTopLeftRadius: "var(--radius-2xl)",
          borderTopRightRadius: "var(--radius-2xl)",
          borderTop: "1px solid var(--border-default)",
          boxShadow: "var(--shadow-sheet)",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform var(--dur-slow) var(--ease-out)",
          ...style,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}>
          <span style={{ width: 38, height: 4, borderRadius: 999, background: "var(--border-strong)" }} />
        </div>
        {title && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px 12px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: "var(--fw-bold)" as unknown as number,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                cursor: "pointer",
                background: "var(--glass)",
                border: "1px solid var(--border-default)",
                color: "var(--text-secondary)",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
        )}
        <div style={{ overflowY: "auto", padding: "0 20px", flex: 1 }}>{children}</div>
        {footer && (
          <div
            style={{
              padding: "14px 20px calc(14px + var(--safe-bottom))",
              borderTop: "1px solid var(--border-subtle)",
              background: "var(--bg-raised)",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
