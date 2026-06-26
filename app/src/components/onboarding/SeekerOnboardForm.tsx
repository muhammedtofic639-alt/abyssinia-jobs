"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Camera, Check, Link2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";

export interface SeekerOnboardFormProps {
  onBack: () => void;
}

/** Step 2 (Seeker path) — portrait, bio, video link, and account credentials. Goes live instantly on submit. */
export function SeekerOnboardForm({ onBack }: SeekerOnboardFormProps) {
  const router = useRouter();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [videoPitchUrl, setVideoPitchUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit() {
    if (!name || !description || !email || !password) {
      setError("Please fill in your name, bio, email, and password.");
      return;
    }
    setLoading(true);
    setError(null);

    const form = new FormData();
    form.set("email", email);
    form.set("password", password);
    form.set("name", name);
    form.set("description", description);
    if (videoPitchUrl) form.set("videoPitchUrl", videoPitchUrl);
    if (photo) form.set("photo", photo);

    const res = await fetch("/api/onboarding/seeker", { method: "POST", body: form });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    const signInRes = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (signInRes?.error) {
      router.push("/login");
      return;
    }
    router.push("/app");
    router.refresh();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        background: "var(--bg-base)",
        boxSizing: "border-box",
        maxWidth: 440,
        margin: "0 auto",
      }}
    >
      <div style={{ padding: "64px 24px 0" }}>
        <h1 style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
          Build your profile
        </h1>
        <p style={{ margin: "0 0 28px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)" }}>
          You&rsquo;ll be live and discoverable instantly.
        </p>
      </div>
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", gap: 18 }}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
        />
        <FileUpload
          label="Portrait photo"
          hint="Your best headshot or clear photo"
          fileName={photo?.name ?? null}
          icon={photo ? <Check size={22} /> : <Camera size={22} />}
          onPick={() => fileInputRef.current?.click()}
        />
        <Input label="Full name" placeholder="e.g. Selam Tesfaye" value={name} onChange={(e) => setName(e.target.value)} />
        <Input
          label="About you"
          as="textarea"
          placeholder="A short pitch — 2–3 sentences about your work…"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Video pitch link"
          placeholder="YouTube or TikTok URL"
          leadingIcon={<Link2 size={18} />}
          value={videoPitchUrl}
          onChange={(e) => setVideoPitchUrl(e.target.value)}
          hint="Optional — but 3× more likely to be discovered."
        />
        <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: 13 }}>{error}</span>}
      </div>
      <div style={{ padding: "20px 24px 40px" }}>
        <Button fullWidth size="lg" loading={loading} onClick={handleSubmit}>
          Go live ✓
        </Button>
        <button
          type="button"
          onClick={onBack}
          style={{
            marginTop: 14,
            width: "100%",
            background: "transparent",
            border: "none",
            color: "var(--text-tertiary)",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
