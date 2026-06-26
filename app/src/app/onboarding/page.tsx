"use client";

import React from "react";
import { RoleSelectScreen } from "@/components/onboarding/RoleSelectScreen";
import { SeekerOnboardForm } from "@/components/onboarding/SeekerOnboardForm";
import { EmployerOnboardForm } from "@/components/onboarding/EmployerOnboardForm";
import { AwaitingApproval } from "@/components/onboarding/AwaitingApproval";

type Step = "role" | "seeker" | "employer" | "awaiting";

export default function OnboardingPage() {
  const [step, setStep] = React.useState<Step>("role");

  if (step === "role") {
    return <RoleSelectScreen onSelectRole={(role) => setStep(role === "SEEKER" ? "seeker" : "employer")} />;
  }
  if (step === "seeker") {
    return <SeekerOnboardForm onBack={() => setStep("role")} />;
  }
  if (step === "employer") {
    return <EmployerOnboardForm onSubmitted={() => setStep("awaiting")} onBack={() => setStep("role")} />;
  }
  return <AwaitingApproval onBack={() => setStep("role")} />;
}
