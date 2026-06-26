"use client";

import { signOut } from "next-auth/react";
import { AwaitingApproval } from "./AwaitingApproval";

/** Client wrapper for the real /awaiting-approval route — "back to start" signs the pending employer out. */
export function AwaitingApprovalClient() {
  return <AwaitingApproval onBack={() => signOut({ callbackUrl: "/login" })} backLabel="← Sign out" />;
}
