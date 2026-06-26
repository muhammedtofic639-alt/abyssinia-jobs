"use client";

import React from "react";

export interface RoleCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

/** Large selectable role tile — the Step 1 role-selection gate (Seeker vs Employer). */
export function RoleCard({ title, description, icon = null, selected = false, onSelect, style = {} }: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        width: "100%",
        textAlign: "left",
        background: selected ? "var(--accent-soft)" : "var(--surface-card)",
        border: `1.5px solid ${selected ? "var(--accent)" : "var(--border-default)"}`,
        borderRadius: "var(--radius-lg)",
        padding: 20,
        cursor: "pointer",
        boxShadow: selected ? "0 10px 30px var(--accent-glow)" : "var(--shadow-sm)",
        transition: "all var(--dur-base) var(--ease-standard)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      <span
        style={{
          width: 56,
          height: 56,
          flexShrink: 0,
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: selected ? "var(--accent)" : "var(--glass)",
          color: selected ? "var(--on-accent)" : "var(--text-primary)",
          fontSize: 26,
        }}
      >
        {icon}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h3)",
            fontWeight: "var(--fw-bold)" as unknown as number,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: "var(--lh-snug)" as unknown as number,
          }}
        >
          {description}
        </span>
      </span>
      <span
        style={{
          width: 24,
          height: 24,
          flexShrink: 0,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: selected ? "var(--accent)" : "transparent",
          border: `2px solid ${selected ? "var(--accent)" : "var(--border-strong)"}`,
          color: "var(--on-accent)",
          fontSize: 13,
          fontWeight: 700,
          transition: "all var(--dur-fast)",
        }}
      >
        {selected ? "✓" : ""}
      </span>
    </button>
  );
}
