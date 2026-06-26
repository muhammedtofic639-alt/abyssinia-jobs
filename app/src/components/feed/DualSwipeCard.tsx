"use client";

import React from "react";
import { Play, ArrowLeft } from "lucide-react";
import type { FeedSeeker } from "@/lib/types";

export interface DualSwipeCardProps {
  seeker: FeedSeeker;
  onLike: () => void;
  onPass: () => void;
}

const GRADIENTS = [
  "linear-gradient(160deg,#1a0a2e 0%,#2d1b4e 40%,#5c2d6e 100%)",
  "linear-gradient(160deg,#0a1a2e 0%,#0f3460 50%,#16637a 100%)",
  "linear-gradient(160deg,#1a0a0a 0%,#4e1b1b 50%,#7a3a1a 100%)",
  "linear-gradient(160deg,#0a1a0a 0%,#1b3a1b 50%,#2d5c2d 100%)",
];

function gradientFor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  return GRADIENTS[hash % GRADIENTS.length];
}

/**
 * Two-slide swipe card — slide 0 is the portrait + identity overlay, slide 1 is the video pitch.
 * Drag horizontally past the threshold to like (right) or pass (left).
 */
export function DualSwipeCard({ seeker, onLike, onPass }: DualSwipeCardProps) {
  const [slide, setSlide] = React.useState<0 | 1>(0);
  const [dragging, setDragging] = React.useState(false);
  const [dragX, setDragX] = React.useState(0);
  const startX = React.useRef(0);
  const bg = React.useMemo(() => gradientFor(seeker.id), [seeker.id]);

  function handlePointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
    setDragging(true);
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (dragging) setDragX(e.clientX - startX.current);
  }
  function handlePointerUp() {
    if (Math.abs(dragX) > 80) {
      if (dragX > 0) onLike();
      else onPass();
    }
    setDragging(false);
    setDragX(0);
  }

  const rotate = dragX * 0.05;
  const overlayDir = dragX > 40 ? "like" : dragX < -40 ? "pass" : null;
  const initials = seeker.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 28,
        background: bg,
        overflow: "hidden",
        cursor: dragging ? "grabbing" : "grab",
        transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
        transition: dragging ? "none" : "transform 300ms cubic-bezier(0.16,1,0.3,1)",
        userSelect: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {slide === 0 && (
        <>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {seeker.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={seeker.photoUrl} alt={seeker.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "2px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {initials}
              </span>
            )}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "55%",
              background: "linear-gradient(to top, rgba(6,6,7,0.95) 0%, rgba(6,6,7,0.6) 50%, rgba(6,6,7,0) 100%)",
            }}
          />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 20px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
                {seeker.name}
              </span>
              {seeker.isVerified && (
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--verify)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    boxShadow: "0 0 10px rgba(46,168,255,0.5)",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              {seeker.subCategory && (
                <>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{seeker.subCategory}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
                </>
              )}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {seeker.description}
              </span>
            </div>
            {seeker.videoPitchUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSlide(1);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 36,
                  padding: "0 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <Play size={14} color="#fff" strokeWidth={2} /> Watch pitch
              </button>
            )}
          </div>
          {overlayDir === "like" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(212,255,0,0.12)",
                borderRadius: 28,
                border: "2px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  fontWeight: 900,
                  color: "var(--accent)",
                  letterSpacing: 3,
                  transform: "rotate(-12deg)",
                  textShadow: "0 0 20px var(--accent-glow)",
                }}
              >
                LIKE
              </span>
            </div>
          )}
          {overlayDir === "pass" && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,90,90,0.10)",
                borderRadius: 28,
                border: "2px solid var(--danger)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  fontWeight: 900,
                  color: "var(--danger)",
                  letterSpacing: 3,
                  transform: "rotate(12deg)",
                }}
              >
                PASS
              </span>
            </div>
          )}
        </>
      )}

      {slide === 1 && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: "#050507" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, padding: 24 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(212,255,0,0.12)",
                border: "1.5px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Play size={32} color="var(--accent)" />
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", textAlign: "center" }}>Video pitch</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-tertiary)",
                padding: "6px 12px",
                background: "var(--surface-card)",
                borderRadius: 8,
                maxWidth: "80%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {seeker.videoPitchUrl}
            </span>
          </div>
          <div style={{ padding: "0 20px 24px" }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSlide(0);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 40,
                padding: "0 16px",
                borderRadius: 999,
                background: "var(--glass)",
                border: "1px solid var(--border-default)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <ArrowLeft size={16} color="var(--text-primary)" /> Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
