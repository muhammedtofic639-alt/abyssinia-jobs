export type Role = "SEEKER" | "EMPLOYER";

export type VerificationStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface MainCategoryWithSubs {
  id: string;
  name: string;
  subCategories: { id: string; name: string }[];
}

export interface FeedSeeker {
  id: string;
  userId: string;
  name: string;
  photoUrl: string | null;
  videoPitchUrl: string | null;
  description: string;
  isVerified: boolean;
  subCategory: string | null;
}

/** One row in the Messages inbox — the other party in a match plus a preview. */
export interface ConversationSummary {
  matchId: string;
  counterpartName: string;
  counterpartPhotoUrl: string | null;
  counterpartVerified: boolean;
  lastMessage: string | null;
  lastMessageAt: string | null;
  unreadCount: number;
}

export interface ChatMessage {
  id: string;
  body: string;
  mine: boolean;
  createdAt: string;
}

/** Full thread payload: who you're talking to + the messages. */
export interface ChatThreadData {
  matchId: string;
  counterpartName: string;
  counterpartPhotoUrl: string | null;
  counterpartVerified: boolean;
  messages: ChatMessage[];
}
