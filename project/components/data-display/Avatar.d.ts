import * as React from 'react';

export interface AvatarProps {
  src?: string;
  /** Used for initials fallback + alt text. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** Lime ring + glow (active / highlighted). @default false */
  ring?: boolean;
  /** Blue verification dot at the corner. @default false */
  verified?: boolean;
  style?: React.CSSProperties;
}

/** Round avatar with initials fallback, optional lime ring and verify dot. */
export function Avatar(props: AvatarProps): JSX.Element;
