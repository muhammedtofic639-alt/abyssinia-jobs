import * as React from 'react';

export interface BadgeProps {
  /** @default "neutral" */
  tone?: 'neutral' | 'accent' | 'pending' | 'approved' | 'rejected' | 'verify';
  /** Filled (solid tone bg) vs soft tint. @default false */
  solid?: boolean;
  /** Leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small status pill for verification + feedback states. */
export function Badge(props: BadgeProps): JSX.Element;
