import React from "react";

type Tone = "neutral" | "accent" | "pending" | "approved" | "rejected" | "verify";

export interface BadgeProps {
  tone?: Tone;
  solid?: boolean;
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const TONES: Record<Tone, { fg: string; bg: string; bd: string }> = {
  neutral: { fg: "var(--text-secondary)", bg: "var(--glass)", bd: "var(--border-default)" },
  accent: { fg: "var(--accent)", bg: "var(--accent-soft)", bd: "var(--border-accent)" },
  pending: { fg: "var(--status-pending)", bg: "rgba(255,197,61,0.13)", bd: "rgba(255,197,61,0.34)" },
  approved: { fg: "var(--status-approved)", bg: "rgba(65,224,139,0.13)", bd: "rgba(65,224,139,0.34)" },
  rejected: { fg: "var(--status-rejected)", bg: "rgba(255,90,90,0.13)", bd: "rgba(255,90,90,0.34)" },
  verify: { fg: "var(--verify)", bg: "rgba(46,168,255,0.14)", bd: "rgba(46,168,255,0.36)" },
};

/** Small status pill — pending (amber), approved (green), rejected (red), accent (lime), neutral. */
export function Badge({ tone = "neutral", solid = false, dot = false, children, style = {} }: BadgeProps) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 26,
        padding: "0 11px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--fw-bold)" as unknown as number,
        letterSpacing: "0.02em",
        color: solid ? "var(--on-accent)" : t.fg,
        background: solid ? t.fg : t.bg,
        border: solid ? "1px solid transparent" : `1px solid ${t.bd}`,
        ...style,
      }}
    >
      {dot && (
        <span
          style={{ width: 6, height: 6, borderRadius: "50%", background: solid ? "var(--on-accent)" : t.fg }}
        />
      )}
      {children}
    </span>
  );
}
