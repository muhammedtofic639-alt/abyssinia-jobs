import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session || session.user.role !== "SEEKER") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const employers = await prisma.employerProfile.findMany({
    where: { user: { verificationStatus: "APPROVED" } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(
    employers.map((e) => ({
      id: e.id,
      companyName: e.companyName,
      adminRating: e.adminRating,
    })),
  );
}
