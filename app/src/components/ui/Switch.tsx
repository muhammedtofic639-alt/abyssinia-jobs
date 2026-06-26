"use client";

import React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Pill toggle switch — used for the "view mode" flip and binary settings. Lime track when on. */
export function Switch({ checked = false, onChange, label, disabled = false, style = {} }: SwitchProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      <span
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 50,
          height: 30,
          flexShrink: 0,
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--accent)" : "var(--surface-pressed)",
          border: `1px solid ${checked ? "transparent" : "var(--border-default)"}`,
          position: "relative",
          transition: "background var(--dur-base) var(--ease-standard)",
          boxShadow: checked ? "0 4px 14px var(--accent-glow)" : "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: checked ? 23 : 3,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: checked ? "var(--on-accent)" : "var(--text-secondary)",
            transition: "left var(--dur-base) var(--ease-spring)",
          }}
        />
      </span>
      {label && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            fontWeight: "var(--fw-medium)" as unknown as number,
            color: "var(--text-primary)",
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
