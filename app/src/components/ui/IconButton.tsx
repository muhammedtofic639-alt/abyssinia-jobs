"use client";

import React from "react";

type Variant = "glass" | "solid" | "accent";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  label: string;
}

const DIMS: Record<Size, number> = { sm: 36, md: 44, lg: 56 };

const VARIANTS: Record<Variant, React.CSSProperties> = {
  glass: {
    background: "var(--glass)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)",
    backdropFilter: "blur(12px)",
  },
  solid: {
    background: "var(--surface-elevated)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-subtle)",
  },
  accent: {
    background: "var(--accent)",
    color: "var(--on-accent)",
    border: "1px solid transparent",
    boxShadow: "0 6px 20px var(--accent-glow)",
  },
};

/** Circular icon button — toolbars, card overlays, close affordances. */
export function IconButton({
  variant = "glass",
  size = "md",
  label,
  children,
  style = {},
  type = "button",
  ...rest
}: IconButtonProps) {
  const dims = DIMS[size];
  const v = VARIANTS[variant];

  return (
    <button
      type={type}
      aria-label={label}
      style={{
        width: dims,
        height: dims,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        flexShrink: 0,
        transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-fast)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.92)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
