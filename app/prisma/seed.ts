import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const TAXONOMY: { name: string; subs: string[] }[] = [
  {
    name: "Creative Arts, Design & Media Production",
    subs: [
      "Video Editor",
      "Cinematographer",
      "Motion Designer",
      "Photographer",
      "Illustrator",
      "Graphic Designer",
    ],
  },
  {
    name: "Engineering & Technology",
    subs: [
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
      "DevOps Engineer",
    ],
  },
  {
    name: "Hospitality & Service",
    subs: ["Barista", "Waiter", "Chef", "Event Coordinator"],
  },
  {
    name: "Business & Finance",
    subs: ["Accountant", "HR Manager", "Business Analyst", "Project Manager"],
  },
];

const DEMO_PASSWORD = "password123";

const DEMO_SEEKERS = [
  {
    email: "selam.tesfaye@example.com",
    name: "Selam Tesfaye",
    sub: "Video Editor",
    description:
      "Video editor based in Addis Ababa — five years cutting branded content and short documentaries.",
    videoPitchUrl: "https://www.youtube.com/watch?v=example-selam",
    isVerified: true,
  },
  {
    email: "abel.girma@example.com",
    name: "Abel Girma",
    sub: "Cinematographer",
    description:
      "Cinematographer specializing in handheld documentary work and music videos around East Africa.",
    videoPitchUrl: "https://www.youtube.com/watch?v=example-abel",
    isVerified: false,
  },
  {
    email: "mekdes.alemu@example.com",
    name: "Mekdes Alemu",
    sub: "Motion Designer",
    description:
      "Motion designer and animator. Nairobi-based, remote-friendly, loves a tight deadline.",
    videoPitchUrl: null,
    isVerified: true,
  },
  {
    email: "yonas.bekele@example.com",
    name: "Yonas Bekele",
    sub: "Graphic Designer",
    description:
      "Graphic designer focused on brand identity and packaging for hospitality and retail clients.",
    videoPitchUrl: "https://www.youtube.com/watch?v=example-yonas",
    isVerified: false,
  },
];

const DEMO_EMPLOYERS = [
  {
    email: "hr@addisstudios.example.com",
    companyName: "Addis Studios",
    verificationStatus: "APPROVED" as const,
    adminRating: 9,
  },
  {
    email: "talent@nilebrands.example.com",
    companyName: "Nile Brands",
    verificationStatus: "PENDING" as const,
    adminRating: null,
  },
];

async function main() {
  const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 10);

  const subCategoryByName = new Map<string, string>();

  for (const main of TAXONOMY) {
    const mainCategory = await prisma.mainCategory.upsert({
      where: { name: main.name },
      update: {},
      create: { name: main.name },
    });
    for (const subName of main.subs) {
      const sub = await prisma.subCategory.upsert({
        where: { mainCategoryId_name: { mainCategoryId: mainCategory.id, name: subName } },
        update: {},
        create: { name: subName, mainCategoryId: mainCategory.id },
      });
      subCategoryByName.set(subName, sub.id);
    }
  }

  for (const seeker of DEMO_SEEKERS) {
    const subCategoryId = subCategoryByName.get(seeker.sub) ?? null;
    await prisma.user.upsert({
      where: { email: seeker.email },
      update: {},
      create: {
        email: seeker.email,
        passwordHash,
        role: "SEEKER",
        verificationStatus: "APPROVED",
        seekerProfile: {
          create: {
            name: seeker.name,
            description: seeker.description,
            videoPitchUrl: seeker.videoPitchUrl,
            isVerified: seeker.isVerified,
            subCategoryId,
          },
        },
      },
    });
  }

  for (const employer of DEMO_EMPLOYERS) {
    await prisma.user.upsert({
      where: { email: employer.email },
      update: {},
      create: {
        email: employer.email,
        passwordHash,
        role: "EMPLOYER",
        verificationStatus: employer.verificationStatus,
        employerProfile: {
          create: {
            companyName: employer.companyName,
            commercialLicense: "/uploads/seed-commercial-license.pdf",
            ownerId: "/uploads/seed-owner-id.pdf",
            adminRating: employer.adminRating,
          },
        },
      },
    });
  }

  console.log(`Seeded ${TAXONOMY.length} main categories, ${DEMO_SEEKERS.length} seekers, ${DEMO_EMPLOYERS.length} employers.`);
  console.log(`Demo login password for all seeded accounts: ${DEMO_PASSWORD}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
