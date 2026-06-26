import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AwaitingApprovalClient } from "@/components/onboarding/AwaitingApprovalClient";

export default async function AwaitingApprovalPage() {
  const session = await auth();
  if (!session) redirect("/login");
  if (session.user.role !== "EMPLOYER" || session.user.verificationStatus === "APPROVED") {
    redirect("/app");
  }
  return <AwaitingApprovalClient />;
}
