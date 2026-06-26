import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "EMPLOYER" || session.user.verificationStatus !== "APPROVED") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const subCategoryIds = searchParams.getAll("subCategoryId");

  const seekers = await prisma.seekerProfile.findMany({
    where: subCategoryIds.length > 0 ? { subCategoryId: { in: subCategoryIds } } : undefined,
    include: { subCategory: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(
    seekers.map((s) => ({
      id: s.id,
      userId: s.userId,
      name: s.name,
      photoUrl: s.photoUrl,
      videoPitchUrl: s.videoPitchUrl,
      description: s.description,
      isVerified: s.isVerified,
      subCategory: s.subCategory?.name ?? null,
    })),
  );
}
