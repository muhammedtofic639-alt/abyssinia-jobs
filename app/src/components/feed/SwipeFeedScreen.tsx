"use client";

import React from "react";
import { SlidersHorizontal, X, Heart, Bookmark, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { DualSwipeCard } from "./DualSwipeCard";
import { FilterOverlay } from "@/components/FilterOverlay";
import { MessagesButton } from "@/components/chat/MessagesButton";
import type { FeedSeeker } from "@/lib/types";

/** Employer's swipe feed — fetches seekers from /api/feed/seekers, supports drag-to-decide + the filter sheet. */
export function SwipeFeedScreen() {
  const [seekers, setSeekers] = React.useState<FeedSeeker[]>([]);
  const [idx, setIdx] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [subCategoryIds, setSubCategoryIds] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    subCategoryIds.forEach((id) => params.append("subCategoryId", id));
    fetch(`/api/feed/seekers?${params.toString()}`)
      .then((r) => r.json())
      .then((data) => {
        setSeekers(Array.isArray(data) ? data : []);
        setIdx(0);
      })
      .finally(() => setLoading(false));
  }, [subCategoryIds]);

  const [toast, setToast] = React.useState<string | null>(null);

  const seeker = seekers.length > 0 ? seekers[idx % seekers.length] : null;
  const nextSeeker = seekers.length > 1 ? seekers[(idx + 1) % seekers.length] : null;
  const next = () => setIdx((i) => i + 1);

  // Liking a seeker opens (or reopens) a chat thread with them.
  const like = () => {
    if (seeker) {
      fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seekerUserId: seeker.userId }),
      }).catch(() => {});
      setToast(`Liked ${seeker.name} — say hi in Messages`);
      window.setTimeout(() => setToast(null), 2600);
    }
    setIdx((i) => i + 1);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-base)",
        maxWidth: 440,
        margin: "0 auto",
      }}
    >
      <div style={{ height: 76, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 20px 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--on-accent)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 19,
            }}
          >
            A
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>abyssinia</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
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
            }}
          >
            <LogOut size={17} color="var(--text-secondary)" />
          </button>
          <button
            onClick={() => setFilterOpen(true)}
            aria-label="Filter"
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
            }}
          >
            <SlidersHorizontal size={18} color="var(--text-primary)" />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: "0 16px", position: "relative", overflow: "hidden", minHeight: 480 }}>
        {!loading && !seeker && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)" }}>
              No more candidates. Check back soon, or adjust your filters.
            </span>
          </div>
        )}
        {nextSeeker && (
          <div
            style={{
              position: "absolute",
              inset: "8px 28px 8px",
              borderRadius: 28,
              background: "var(--surface-card)",
              opacity: 0.6,
              transform: "scale(0.96)",
              transformOrigin: "bottom center",
            }}
          />
        )}
        {seeker && (
          <div style={{ position: "absolute", inset: 0, margin: "0 16px" }}>
            <DualSwipeCard key={seeker.id} seeker={seeker} onLike={like} onPass={next} />
          </div>
        )}
      </div>

      <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", gap: 22, flexShrink: 0, paddingBottom: 10 }}>
        <button
          onClick={next}
          disabled={!seeker}
          style={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "var(--surface-card)",
            border: "1px solid var(--border-default)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: seeker ? "pointer" : "default",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <X size={26} color="var(--danger)" strokeWidth={2.5} />
        </button>
        <button
          onClick={like}
          disabled={!seeker}
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "var(--accent)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: seeker ? "pointer" : "default",
            boxShadow: "0 10px 28px rgba(212,255,0,0.45)",
          }}
        >
          <Heart size={30} color="var(--on-accent)" strokeWidth={2.5} />
        </button>
        <button
          style={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "var(--surface-card)",
            border: "1px solid var(--border-default)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <Bookmark size={22} color="var(--text-secondary)" />
        </button>
      </div>

      {toast && (
        <div
          style={{
            position: "absolute",
            bottom: 124,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 40,
            padding: "10px 18px",
            borderRadius: 999,
            background: "var(--surface-elevated)",
            border: "1px solid var(--border-accent)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {toast}
        </div>
      )}

      <FilterOverlay open={filterOpen} onClose={() => setFilterOpen(false)} selected={subCategoryIds} onApply={setSubCategoryIds} />
    </div>
  );
}
