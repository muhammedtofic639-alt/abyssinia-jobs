import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");
  if (session.user.role === "EMPLOYER" && session.user.verificationStatus !== "APPROVED") {
    redirect("/awaiting-approval");
  }
  return <>{children}</>;
}
