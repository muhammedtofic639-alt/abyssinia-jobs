import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { counterpartOf, matchParticipantsInclude } from "@/lib/chat";
import type { ConversationSummary } from "@/lib/types";

/** Employer likes a seeker → open (or reopen) a conversation. */
export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "EMPLOYER" || session.user.verificationStatus !== "APPROVED") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { seekerUserId } = await req.json().catch(() => ({ seekerUserId: undefined }));
  if (typeof seekerUserId !== "string" || !seekerUserId) {
    return NextResponse.json({ error: "seekerUserId is required." }, { status: 400 });
  }

  const seeker = await prisma.user.findUnique({ where: { id: seekerUserId } });
  if (!seeker || seeker.role !== "SEEKER") {
    return NextResponse.json({ error: "No such seeker." }, { status: 404 });
  }

  const match = await prisma.match.upsert({
    where: { employerId_seekerId: { employerId: session.user.id, seekerId: seekerUserId } },
    update: {},
    create: { employerId: session.user.id, seekerId: seekerUserId },
  });

  return NextResponse.json({ matchId: match.id });
}

/** Inbox: every conversation the current user is part of, newest activity first. */
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const meId = session.user.id;

  const matches = await prisma.match.findMany({
    where: { OR: [{ employerId: meId }, { seekerId: meId }] },
    include: {
      ...matchParticipantsInclude,
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });

  const unreadByMatch = new Map<string, number>();
  if (matches.length > 0) {
    const grouped = await prisma.message.groupBy({
      by: ["matchId"],
      where: { matchId: { in: matches.map((m) => m.id) }, senderId: { not: meId }, readAt: null },
      _count: { _all: true },
    });
    for (const g of grouped) unreadByMatch.set(g.matchId, g._count._all);
  }

  const conversations: ConversationSummary[] = matches
    .map((m) => {
      const cp = counterpartOf(m, meId);
      const last = m.messages[0] ?? null;
      return {
        matchId: m.id,
        counterpartName: cp.name,
        counterpartPhotoUrl: cp.photoUrl,
        counterpartVerified: cp.verified,
        lastMessage: last?.body ?? null,
        lastMessageAt: (last?.createdAt ?? m.createdAt).toISOString(),
        unreadCount: unreadByMatch.get(m.id) ?? 0,
      };
    })
    .sort((a, b) => (a.lastMessageAt < b.lastMessageAt ? 1 : -1));

  return NextResponse.json(conversations);
}
