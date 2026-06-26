import { auth } from "@/auth";
import { SwipeFeedScreen } from "@/components/feed/SwipeFeedScreen";
import { BrowseEmployers } from "@/components/feed/BrowseEmployers";

export default async function AppPage() {
  const session = await auth();
  if (session?.user.role === "EMPLOYER") return <SwipeFeedScreen />;
  return <BrowseEmployers />;
}
