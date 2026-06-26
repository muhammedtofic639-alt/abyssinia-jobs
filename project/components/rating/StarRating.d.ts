import * as React from 'react';

export interface StarRatingProps {
  /** Current rating, 0–max. */
  value?: number;
  /** Scale length. @default 10 */
  max?: number;
  /** Allow click/hover to set rating (admin console). @default false */
  interactive?: boolean;
  onRate?: (value: number) => void;
  /** Star pixel size. @default 18 */
  size?: number;
  /** Show the "N / 10" numeric chip. @default true */
  showValue?: boolean;
  style?: React.CSSProperties;
}

/**
 * 1-to-10 admin rating indicator — ten lime star pips + numeric chip.
 * @startingPoint section="Rating" subtitle="1–10 lime star scale, read-only or interactive" viewport="700x150"
 */
export function StarRating(props: StarRatingProps): JSX.Element;
