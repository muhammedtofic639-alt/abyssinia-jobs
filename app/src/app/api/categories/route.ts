import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.mainCategory.findMany({
    include: { subCategories: { select: { id: true, name: true } } },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}
