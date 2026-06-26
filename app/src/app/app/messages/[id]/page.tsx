import { ChatThread } from "@/components/chat/ChatThread";

export default function ThreadPage({ params }: { params: { id: string } }) {
  return <ChatThread matchId={params.id} />;
}
