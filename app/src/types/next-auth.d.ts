import type { Role, VerificationStatus } from "@/lib/types";

declare module "next-auth" {
  interface User {
    role: Role;
    verificationStatus: VerificationStatus;
    activeViewMode: Role | null;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      role: Role;
      verificationStatus: VerificationStatus;
      activeViewMode: Role | null;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: Role;
    verificationStatus: VerificationStatus;
    activeViewMode: Role | null;
  }
}
