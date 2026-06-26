"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { ConversationSummary } from "@/lib/types";

/** Header entry point to the inbox, with a live unread badge. Reused on both feeds. */
export function MessagesButton() {
  const [unread, setUnread] = React.useState(0);

  React.useEffect(() => {
    let active = true;
    const load = () =>
      fetch("/api/matches")
        .then((r) => (r.ok ? r.json() : []))
        .then((data: ConversationSummary[]) => {
          if (active && Array.isArray(data)) setUnread(data.reduce((n, c) => n + c.unreadCount, 0));
        })
        .catch(() => {});
    load();
    const t = setInterval(load, 8000);
    return () => {
      active = false;
      clearInterval(t);
    };
  }, []);

  return (
    <Link
      href="/app/messages"
      aria-label={unread > 0 ? `Messages, ${unread} unread` : "Messages"}
      style={{
        position: "relative",
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
      <MessageCircle size={18} color="var(--text-primary)" />
      {unread > 0 && (
        <span
          style={{
            position: "absolute",
            top: -3,
            right: -3,
            minWidth: 18,
            height: 18,
            padding: "0 5px",
            borderRadius: 999,
            background: "var(--accent)",
            color: "var(--on-accent)",
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid var(--bg-base)",
          }}
        >
          {unread > 9 ? "9+" : unread}
        </span>
      )}
    </Link>
  );
}
