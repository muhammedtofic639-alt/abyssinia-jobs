"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FileText, CreditCard, Check } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";

export interface EmployerOnboardFormProps {
  onSubmitted: () => void;
  onBack: () => void;
}

/** Step 2 (Employer path) — company name, commercial license, owner ID, and account credentials. Locked PENDING until admin approval. */
export function EmployerOnboardForm({ onSubmitted, onBack }: EmployerOnboardFormProps) {
  const router = useRouter();
  const licenseInputRef = React.useRef<HTMLInputElement>(null);
  const ownerIdInputRef = React.useRef<HTMLInputElement>(null);
  const [license, setLicense] = React.useState<File | null>(null);
  const [ownerId, setOwnerId] = React.useState<File | null>(null);
  const [companyName, setCompanyName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit() {
    if (!companyName || !email || !password || !license || !ownerId) {
      setError("Please fill in your company name, email, password, and both documents.");
      return;
    }
    setLoading(true);
    setError(null);

    const form = new FormData();
    form.set("email", email);
    form.set("password", password);
    form.set("companyName", companyName);
    form.set("license", license);
    form.set("ownerId", ownerId);

    const res = await fetch("/api/onboarding/employer", { method: "POST", body: form });
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
    onSubmitted();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        background: "var(--bg-base)",
        padding: "64px 24px 40px",
        boxSizing: "border-box",
        maxWidth: 440,
        margin: "0 auto",
      }}
    >
      <h1 style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
        Verify your business
      </h1>
      <p style={{ margin: "0 0 32px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5 }}>
        We review your documents within 24 hrs. You&rsquo;ll be notified when approved.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        <Input label="Company name" placeholder="e.g. Abyssinia Studios" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <input
          ref={licenseInputRef}
          type="file"
          accept="image/*,.pdf"
          hidden
          onChange={(e) => setLicense(e.target.files?.[0] ?? null)}
        />
        <FileUpload
          label="Commercial license"
          hint="Official business registration doc"
          fileName={license?.name ?? null}
          icon={license ? <Check size={22} /> : <FileText size={22} />}
          onPick={() => licenseInputRef.current?.click()}
        />
        <input
          ref={ownerIdInputRef}
          type="file"
          accept="image/*,.pdf"
          hidden
          onChange={(e) => setOwnerId(e.target.files?.[0] ?? null)}
        />
        <FileUpload
          label="Owner / Director ID"
          hint="National ID or passport photo"
          fileName={ownerId?.name ?? null}
          icon={ownerId ? <Check size={22} /> : <CreditCard size={22} />}
          onPick={() => ownerIdInputRef.current?.click()}
        />
        <Input label="Email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: 13 }}>{error}</span>}
      </div>
      <Button fullWidth size="lg" loading={loading} disabled={!license || !ownerId} onClick={handleSubmit}>
        Submit for review
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
  );
}
