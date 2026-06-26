"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 24,
        maxWidth: 440,
        margin: "0 auto",
        background: "var(--bg-base)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
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
      <h1 style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
        Welcome back
      </h1>
      <p style={{ margin: "0 0 28px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)" }}>Sign in to continue.</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <span style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: 13 }}>{error}</span>}
        <Button type="submit" loading={loading} fullWidth>
          Sign in
        </Button>
      </form>
      <p style={{ marginTop: 24, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-tertiary)" }}>
        New here?{" "}
        <a href="/onboarding" style={{ color: "var(--accent)", fontWeight: 600 }}>
          Create an account
        </a>
      </p>
    </div>
  );
}
