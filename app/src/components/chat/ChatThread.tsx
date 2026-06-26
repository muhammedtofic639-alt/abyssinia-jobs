"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { formatClock } from "@/lib/time";
import type { ChatMessage, ChatThreadData } from "@/lib/types";

export interface ChatThreadProps {
  matchId: string;
}

/** A single conversation: counterpart header, message bubbles, and a composer. Polls for new messages. */
export function ChatThread({ matchId }: ChatThreadProps) {
  const router = useRouter();
  const [thread, setThread] = React.useState<ChatThreadData | null>(null);
  const [notFound, setNotFound] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const load = React.useCallback(() => {
    return fetch(`/api/matches/${matchId}/messages`)
      .then((r) => {
        if (r.status === 404) {
          setNotFound(true);
          return null;
        }
        return r.ok ? r.json() : null;
      })
      .then((data: ChatThreadData | null) => {
        if (data) setThread(data);
      })
      .catch(() => {});
  }, [matchId]);

  React.useEffect(() => {
    load();
    const t = setInterval(load, 4000);
    return () => clearInterval(t);
  }, [load]);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [thread?.messages.length]);

  async function send() {
    const text = draft.trim();
    if (!text || sending) return;
    setSending(true);
    setDraft("");
    try {
      const res = await fetch(`/api/matches/${matchId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: text }),
      });
      if (res.ok) {
        const msg: ChatMessage = await res.json();
        setThread((prev) => (prev ? { ...prev, messages: [...prev.messages, msg] } : prev));
      } else {
        setDraft(text);
      }
    } catch {
      setDraft(text);
    } finally {
      setSending(false);
    }
  }

  if (notFound) {
    return (
      <div style={{ minHeight: "100dvh", background: "var(--bg-base)", maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24, textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>This conversation isn’t available.</span>
        <button onClick={() => router.push("/app/messages")} style={{ background: "none", border: "none", color: "var(--accent)", fontFamily: "var(--font-body)", fontWeight: 600, cursor: "pointer" }}>
          ← Back to messages
        </button>
      </div>
    );
  }

  return (
    <div style={{ height: "100dvh", background: "var(--bg-base)", maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "52px 16px 12px",
          borderBottom: "1px solid var(--border-subtle)",
          background: "var(--bg-base)",
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => router.push("/app/messages")}
          aria-label="Back"
          style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--surface-card)", border: "1px solid var(--border-default)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
        >
          <ArrowLeft size={17} color="var(--text-primary)" />
        </button>
        {thread && <Avatar src={thread.counterpartPhotoUrl ?? undefined} name={thread.counterpartName} size={40} verified={thread.counterpartVerified} />}
        <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {thread?.counterpartName ?? "…"}
        </span>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "18px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {thread && thread.messages.length === 0 && (
          <div style={{ margin: "auto", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-tertiary)", maxWidth: 260 }}>
            This is the start of your conversation with {thread.counterpartName}.
          </div>
        )}
        {thread?.messages.map((m) => (
          <div key={m.id} style={{ display: "flex", justifyContent: m.mine ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "78%",
                padding: "10px 14px",
                borderRadius: 18,
                borderBottomRightRadius: m.mine ? 4 : 18,
                borderBottomLeftRadius: m.mine ? 18 : 4,
                background: m.mine ? "var(--accent)" : "var(--surface-card)",
                color: m.mine ? "var(--on-accent)" : "var(--text-primary)",
                border: m.mine ? "none" : "1px solid var(--border-default)",
              }}
            >
              <div style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.4, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{m.body}</div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  marginTop: 4,
                  textAlign: "right",
                  color: m.mine ? "rgba(6,6,7,0.5)" : "var(--text-tertiary)",
                }}
              >
                {formatClock(m.createdAt)}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Composer */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, padding: "10px 14px calc(14px + var(--safe-bottom))", borderTop: "1px solid var(--border-subtle)", background: "var(--bg-base)", flexShrink: 0 }}>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Message…"
          rows={1}
          style={{
            flex: 1,
            resize: "none",
            maxHeight: 120,
            padding: "12px 16px",
            borderRadius: 22,
            background: "var(--surface-elevated)",
            border: "1px solid var(--border-default)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            lineHeight: 1.4,
            outline: "none",
          }}
        />
        <button
          onClick={send}
          disabled={!draft.trim() || sending}
          aria-label="Send"
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: draft.trim() ? "var(--accent)" : "var(--surface-card)",
            border: draft.trim() ? "none" : "1px solid var(--border-default)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: draft.trim() && !sending ? "pointer" : "default",
            flexShrink: 0,
            boxShadow: draft.trim() ? "0 6px 18px var(--accent-glow)" : "none",
            transition: "background var(--dur-fast)",
          }}
        >
          <Send size={19} color={draft.trim() ? "var(--on-accent)" : "var(--text-tertiary)"} />
        </button>
      </div>
    </div>
  );
}
