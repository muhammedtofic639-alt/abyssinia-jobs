import { prisma } from "@/lib/prisma";

/** Prisma include that pulls both sides' display profiles for a Match. */
export const matchParticipantsInclude = {
  employer: { include: { employerProfile: true } },
  seeker: { include: { seekerProfile: true } },
} as const;

type MatchWithParticipants = {
  employerId: string;
  seekerId: string;
  employer: { employerProfile: { companyName: string } | null };
  seeker: { seekerProfile: { name: string; photoUrl: string | null; isVerified: boolean } | null };
};

export interface Counterpart {
  name: string;
  photoUrl: string | null;
  verified: boolean;
}

/** Given a match and the current user, describe the *other* party in the thread. */
export function counterpartOf(match: MatchWithParticipants, meId: string): Counterpart {
  if (match.employerId === meId) {
    return {
      name: match.seeker.seekerProfile?.name ?? "Seeker",
      photoUrl: match.seeker.seekerProfile?.photoUrl ?? null,
      verified: match.seeker.seekerProfile?.isVerified ?? false,
    };
  }
  return {
    name: match.employer.employerProfile?.companyName ?? "Employer",
    photoUrl: null,
    // Employers are only ever in a match once admin-approved, so show the tick.
    verified: true,
  };
}

/** Loads a match the given user participates in, or null if it doesn't exist / isn't theirs. */
export async function findOwnedMatch(matchId: string, meId: string) {
  return prisma.match.findFirst({
    where: { id: matchId, OR: [{ employerId: meId }, { seekerId: meId }] },
    include: matchParticipantsInclude,
  });
}
