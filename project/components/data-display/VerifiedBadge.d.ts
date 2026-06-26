import * as React from 'react';

export interface VerifiedBadgeProps {
  /** Pixel diameter. @default 22 */
  size?: number;
  /** Show the "Verified" text label after the mark. @default false */
  withLabel?: boolean;
  style?: React.CSSProperties;
}

/** Neon-blue verification checkmark shown next to a verified seeker's name. */
export function VerifiedBadge(props: VerifiedBadgeProps): JSX.Element;
