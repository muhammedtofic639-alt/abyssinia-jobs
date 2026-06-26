import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { saveUpload } from "@/lib/storage";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = form.get("email");
  const password = form.get("password");
  const name = form.get("name");
  const description = form.get("description");
  const videoPitchUrl = form.get("videoPitchUrl");
  const subCategoryId = form.get("subCategoryId");
  const photo = form.get("photo");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string" ||
    typeof description !== "string" ||
    !email ||
    !password ||
    !name ||
    !description
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
  }

  const photoUrl = photo instanceof File && photo.size > 0 ? await saveUpload(photo) : null;
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      role: "SEEKER",
      // Seekers go straight into the talent pool — there's no admin gate for them.
      verificationStatus: "APPROVED",
      activeViewMode: "SEEKER",
      seekerProfile: {
        create: {
          name,
          description,
          photoUrl,
          videoPitchUrl: typeof videoPitchUrl === "string" && videoPitchUrl ? videoPitchUrl : null,
          isVerified: false,
          subCategoryId: typeof subCategoryId === "string" && subCategoryId ? subCategoryId : null,
        },
      },
    },
  });

  return NextResponse.json({ id: user.id, email: user.email });
}
