import React from "react";

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  ring?: boolean;
  verified?: boolean;
  style?: React.CSSProperties;
}

/** Round avatar with optional ring and verification dot. Falls back to initials on a tinted disc. */
export function Avatar({ src, name = "", size = 48, ring = false, verified = false, style = {} }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span style={{ position: "relative", display: "inline-flex", flexShrink: 0, ...style }}>
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--surface-elevated)",
          border: ring ? "2px solid var(--accent)" : "1px solid var(--border-default)",
          boxShadow: ring ? "0 0 14px var(--accent-glow)" : "none",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)" as unknown as number,
          fontSize: size * 0.36,
        }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          initials
        )}
      </span>
      {verified && (
        <span
          style={{
            position: "absolute",
            right: -2,
            bottom: -2,
            width: size * 0.36,
            height: size * 0.36,
            minWidth: 16,
            minHeight: 16,
            borderRadius: "50%",
            background: "var(--verify)",
            color: "var(--on-verify)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.2,
            fontWeight: 700,
            border: "2px solid var(--bg-base)",
          }}
        >
          ✓
        </span>
      )}
    </span>
  );
}
