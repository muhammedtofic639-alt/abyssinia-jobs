"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { MessagesButton } from "@/components/chat/MessagesButton";

interface FeedEmployer {
  id: string;
  companyName: string;
  adminRating: number | null;
}

/** Seeker-side view: the list of admin-approved employers, each showing the 1-10 admin rating. */
export function BrowseEmployers() {
  const [employers, setEmployers] = React.useState<FeedEmployer[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/feed/employers")
      .then((r) => r.json())
      .then((data) => setEmployers(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg-base)", maxWidth: 440, margin: "0 auto", padding: "64px 20px 40px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
            Verified employers
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)" }}>Approved companies hiring on Abyssinia Jobs.</p>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <MessagesButton />
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            aria-label="Sign out"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "var(--surface-card)",
              border: "1px solid var(--border-default)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <LogOut size={17} color="var(--text-secondary)" />
          </button>
        </div>
      </div>
      {loading && <span style={{ fontFamily: "var(--font-body)", color: "var(--text-tertiary)" }}>Loading…</span>}
      {!loading && employers.length === 0 && (
        <span style={{ fontFamily: "var(--font-body)", color: "var(--text-tertiary)" }}>No approved employers yet.</span>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {employers.map((e) => (
          <Card key={e.id} variant="elevated" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>{e.companyName}</span>
            <StarRating value={e.adminRating ?? 0} size={14} />
          </Card>
        ))}
      </div>
    </div>
  );
}
