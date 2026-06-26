import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { counterpartOf, findOwnedMatch } from "@/lib/chat";
import type { ChatMessage, ChatThreadData } from "@/lib/types";

/** Fetch a thread and mark the other party's messages as read. */
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const meId = session.user.id;

  const match = await findOwnedMatch(params.id, meId);
  if (!match) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Opening the thread acknowledges everything the counterpart has sent.
  await prisma.message.updateMany({
    where: { matchId: match.id, senderId: { not: meId }, readAt: null },
    data: { readAt: new Date() },
  });

  const rows = await prisma.message.findMany({
    where: { matchId: match.id },
    orderBy: { createdAt: "asc" },
  });

  const cp = counterpartOf(match, meId);
  const messages: ChatMessage[] = rows.map((m) => ({
    id: m.id,
    body: m.body,
    mine: m.senderId === meId,
    createdAt: m.createdAt.toISOString(),
  }));

  const payload: ChatThreadData = {
    matchId: match.id,
    counterpartName: cp.name,
    counterpartPhotoUrl: cp.photoUrl,
    counterpartVerified: cp.verified,
    messages,
  };
  return NextResponse.json(payload);
}

/** Send a message into a thread. */
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const meId = session.user.id;

  const match = await findOwnedMatch(params.id, meId);
  if (!match) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { body } = await req.json().catch(() => ({ body: undefined }));
  const text = typeof body === "string" ? body.trim() : "";
  if (!text) return NextResponse.json({ error: "Message body is required." }, { status: 400 });
  if (text.length > 2000) return NextResponse.json({ error: "Message too long." }, { status: 400 });

  const created = await prisma.message.create({
    data: { matchId: match.id, senderId: meId, body: text },
  });

  const message: ChatMessage = {
    id: created.id,
    body: created.body,
    mine: true,
    createdAt: created.createdAt.toISOString(),
  };
  return NextResponse.json(message);
}
