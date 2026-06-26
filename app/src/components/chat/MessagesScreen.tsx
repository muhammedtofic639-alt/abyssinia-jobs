"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { formatRelative } from "@/lib/time";
import type { ConversationSummary } from "@/lib/types";

/** The inbox: every conversation the signed-in user is part of. */
export function MessagesScreen() {
  const router = useRouter();
  const [convos, setConvos] = React.useState<ConversationSummary[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    const load = () =>
      fetch("/api/matches")
        .then((r) => (r.ok ? r.json() : []))
        .then((data) => {
          if (active && Array.isArray(data)) setConvos(data);
        })
        .finally(() => active && setLoading(false));
    load();
    const t = setInterval(load, 6000);
    return () => {
      active = false;
      clearInterval(t);
    };
  }, []);

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg-base)", maxWidth: 440, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "60px 20px 16px" }}>
        <button
          onClick={() => router.push("/app")}
          aria-label="Back"
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
          <ArrowLeft size={18} color="var(--text-primary)" />
        </button>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
          Messages
        </h1>
      </div>

      {loading && <div style={{ padding: "0 20px", fontFamily: "var(--font-body)", color: "var(--text-tertiary)" }}>Loading…</div>}

      {!loading && convos.length === 0 && (
        <div style={{ padding: "80px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "var(--surface-card)",
              border: "1px solid var(--border-default)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageCircle size={28} color="var(--text-tertiary)" />
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)" }}>No conversations yet.</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-tertiary)", maxWidth: 260 }}>
            When an employer likes your profile, your chat will appear here.
          </span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {convos.map((c) => (
          <Link
            key={c.matchId}
            href={`/app/messages/${c.matchId}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 20px",
              borderBottom: "1px solid var(--border-subtle)",
              textDecoration: "none",
            }}
          >
            <Avatar src={c.counterpartPhotoUrl ?? undefined} name={c.counterpartName} size={52} verified={c.counterpartVerified} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {c.counterpartName}
                </span>
                {c.lastMessageAt && (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-tertiary)", flexShrink: 0 }}>{formatRelative(c.lastMessageAt)}</span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 3 }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: c.unreadCount > 0 ? "var(--text-secondary)" : "var(--text-tertiary)",
                    fontWeight: c.unreadCount > 0 ? 600 : 400,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {c.lastMessage ?? "Say hello 👋"}
                </span>
                {c.unreadCount > 0 && (
                  <span
                    style={{
                      minWidth: 20,
                      height: 20,
                      padding: "0 6px",
                      borderRadius: 999,
                      background: "var(--accent)",
                      color: "var(--on-accent)",
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.unreadCount > 9 ? "9+" : c.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
