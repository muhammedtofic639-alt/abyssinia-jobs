import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/onboarding");
  if (session.user.role === "EMPLOYER" && session.user.verificationStatus !== "APPROVED") {
    redirect("/awaiting-approval");
  }
  redirect("/app");
}
