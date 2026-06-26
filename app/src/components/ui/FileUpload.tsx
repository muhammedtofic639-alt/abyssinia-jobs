"use client";

import React from "react";

export interface FileUploadProps {
  label?: string;
  hint?: string;
  accept?: string;
  fileName?: string | null;
  icon?: React.ReactNode;
  onPick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Document / photo upload dropzone. Empty state invites a tap; filled state shows the file name + swap
 * affordance. Used for employer commercial license, owner ID, and seeker portrait photo.
 */
export function FileUpload({ label, hint, fileName = null, icon = null, onPick, style = {} }: FileUploadProps) {
  const filled = Boolean(fileName);
  return (
    <button
      type="button"
      onClick={onPick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        textAlign: "left",
        background: filled ? "var(--accent-soft)" : "var(--surface-elevated)",
        border: `1.5px dashed ${filled ? "var(--border-accent)" : "var(--border-strong)"}`,
        borderRadius: "var(--radius-md)",
        padding: 16,
        cursor: "pointer",
        transition: "background var(--dur-fast), border-color var(--dur-fast)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      <span
        style={{
          width: 46,
          height: 46,
          flexShrink: 0,
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: filled ? "var(--accent)" : "var(--glass)",
          color: filled ? "var(--on-accent)" : "var(--text-secondary)",
          fontSize: 20,
        }}
      >
        {icon || (filled ? "✓" : "＋")}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0, flex: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            fontWeight: "var(--fw-semibold)" as unknown as number,
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {filled ? fileName : label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-xs)",
            color: filled ? "var(--accent)" : "var(--text-tertiary)",
          }}
        >
          {filled ? "Uploaded · tap to replace" : hint || "PDF or image, up to 10MB"}
        </span>
      </span>
    </button>
  );
}
