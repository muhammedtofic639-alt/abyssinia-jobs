import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { saveUpload } from "@/lib/storage";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = form.get("email");
  const password = form.get("password");
  const companyName = form.get("companyName");
  const license = form.get("license");
  const ownerId = form.get("ownerId");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof companyName !== "string" ||
    !email ||
    !password ||
    !companyName ||
    !(license instanceof File) ||
    license.size === 0 ||
    !(ownerId instanceof File) ||
    ownerId.size === 0
  ) {
    return NextResponse.json(
      { error: "Missing required fields. Commercial license and owner ID are both required." },
      { status: 400 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
  }

  const [licenseUrl, ownerIdUrl] = await Promise.all([saveUpload(license), saveUpload(ownerId)]);
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      role: "EMPLOYER",
      // Employers are locked behind admin review until approved.
      verificationStatus: "PENDING",
      activeViewMode: "EMPLOYER",
      employerProfile: {
        create: {
          companyName,
          commercialLicense: licenseUrl,
          ownerId: ownerIdUrl,
        },
      },
    },
  });

  return NextResponse.json({ id: user.id, email: user.email });
}
