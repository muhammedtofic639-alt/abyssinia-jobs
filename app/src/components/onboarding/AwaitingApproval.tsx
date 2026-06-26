import React from "react";
import { Clock, ShieldCheck } from "lucide-react";

export interface AwaitingApprovalProps {
  onBack?: () => void;
  backLabel?: string;
}

/** Shown to employers whose verification is still PENDING — either right after submitting docs, or on any later visit. */
export function AwaitingApproval({ onBack, backLabel = "← Back to start" }: AwaitingApprovalProps) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--bg-base)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px",
        boxSizing: "border-box",
        textAlign: "center",
        maxWidth: 440,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 26,
          background: "rgba(255,197,61,0.15)",
          border: "1.5px solid rgba(255,197,61,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <Clock size={40} color="var(--status-pending)" />
      </div>
      <h2 style={{ margin: "0 0 10px", fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
        Awaiting Approval
      </h2>
      <p style={{ margin: "0 0 36px", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.55 }}>
        Your documents are under review. We&rsquo;ll notify you within 24 hours once your account is approved.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          padding: "18px 24px",
          borderRadius: 20,
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          width: "100%",
          marginBottom: 32,
        }}
      >
        <ShieldCheck size={20} color="var(--text-tertiary)" />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          Your documents are encrypted and reviewed by our admin team. No access until approval.
        </span>
      </div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          style={{
            background: "transparent",
            border: "1px solid var(--border-default)",
            borderRadius: 999,
            padding: "12px 24px",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {backLabel}
        </button>
      )}
    </div>
  );
}
