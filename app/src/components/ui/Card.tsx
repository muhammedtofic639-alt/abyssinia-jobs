import React from "react";

type Variant = "solid" | "glass" | "elevated";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  padding?: string | number;
}

const VARIANTS: Record<Variant, React.CSSProperties> = {
  solid: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-md)",
  },
  glass: {
    background: "var(--glass)",
    border: "1px solid var(--border-default)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
  },
  elevated: {
    background: "var(--surface-elevated)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-lg)",
  },
};

/** Surface container — the dark rounded panel everything sits on. */
export function Card({ variant = "solid", padding = "var(--pad-card)", children, style = {}, ...rest }: CardProps) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding,
        ...VARIANTS[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
