"use client";

import React from "react";
import { UserCircle, Briefcase, type LucideIcon } from "lucide-react";

export interface RoleSelectScreenProps {
  onSelectRole: (role: "SEEKER" | "EMPLOYER") => void;
}

const ROLES: { id: "SEEKER" | "EMPLOYER"; Icon: LucideIcon; title: string; desc: string }[] = [
  { id: "SEEKER", Icon: UserCircle, title: "I'm looking for work", desc: "Build a video profile, get discovered by employers." },
  { id: "EMPLOYER", Icon: Briefcase, title: "I'm hiring", desc: "Browse verified talent, find your next great hire." },
];

/** Step 1 of onboarding — choose Seeker or Employer. */
export function RoleSelectScreen({ onSelectRole }: RoleSelectScreenProps) {
  const [role, setRole] = React.useState<"SEEKER" | "EMPLOYER" | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        padding: "64px 24px 40px",
        boxSizing: "border-box",
        background: "var(--bg-base)",
        maxWidth: 440,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              overflow: "hidden",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo.jpeg" alt="Abyssinia Jobs" style={{ width: "82%", height: "82%", objectFit: "contain" }} />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
            abyssinia <span style={{ color: "var(--text-secondary)" }}>jobs</span>
          </span>
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: 32,
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 10,
          }}
        >
          How will you
          <br />
          use the app?
        </h1>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          Choose your role. You can switch later.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {ROLES.map((r) => {
          const selected = role === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                width: "100%",
                textAlign: "left",
                background: selected ? "rgba(212,255,0,0.09)" : "var(--surface-card)",
                border: `1.5px solid ${selected ? "var(--accent)" : "var(--border-default)"}`,
                borderRadius: 22,
                padding: "18px 20px",
                cursor: "pointer",
                boxShadow: selected ? "0 10px 30px rgba(212,255,0,0.18)" : "none",
                transition: "all 240ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 15,
                  background: selected ? "var(--accent)" : "var(--surface-elevated)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: selected ? "var(--on-accent)" : "var(--text-secondary)",
                }}
              >
                <r.Icon size={24} color={selected ? "var(--on-accent)" : "var(--text-secondary)"} strokeWidth={1.75} />
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                  {r.title}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.4 }}>{r.desc}</span>
              </span>
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: `2px solid ${selected ? "var(--accent)" : "var(--border-strong)"}`,
                  background: selected ? "var(--accent)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--on-accent)",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {selected ? "✓" : ""}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => role && onSelectRole(role)}
        style={{
          marginTop: 24,
          width: "100%",
          height: 56,
          borderRadius: 999,
          border: "none",
          cursor: role ? "pointer" : "not-allowed",
          background: role ? "var(--accent)" : "var(--surface-elevated)",
          color: role ? "var(--on-accent)" : "var(--text-tertiary)",
          fontFamily: "var(--font-body)",
          fontSize: 17,
          fontWeight: 800,
          boxShadow: role ? "0 8px 24px rgba(212,255,0,0.4)" : "none",
          transition: "all 240ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Continue →
      </button>
    </div>
  );
}
