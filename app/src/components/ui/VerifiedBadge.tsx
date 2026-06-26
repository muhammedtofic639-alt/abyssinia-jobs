import React from "react";

export interface VerifiedBadgeProps {
  size?: number;
  withLabel?: boolean;
  style?: React.CSSProperties;
}

/** The public verification emblem — a neon-blue checkmark shown beside a seeker's name. Seekers only. */
export function VerifiedBadge({ size = 22, withLabel = false, style = {} }: VerifiedBadgeProps) {
  const mark = (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--verify)",
        color: "var(--on-verify)",
        fontSize: size * 0.6,
        fontWeight: 700,
        lineHeight: 1,
        boxShadow: "0 0 12px var(--verify-glow)",
      }}
    >
      ✓
    </span>
  );

  if (!withLabel) return <span style={{ display: "inline-flex", ...style }}>{mark}</span>;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, ...style }}>
      {mark}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-bold)" as unknown as number,
          color: "var(--verify)",
        }}
      >
        Verified
      </span>
    </span>
  );
}
