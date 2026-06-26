import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `glass` floats over media; `solid` is default; `elevated` lifts higher. @default "solid" */
  variant?: 'solid' | 'glass' | 'elevated';
  /** CSS padding value. @default "var(--pad-card)" */
  padding?: string;
  children?: React.ReactNode;
}

/**
 * Rounded dark surface panel.
 * @startingPoint section="Surfaces" subtitle="Solid / glass / elevated dark cards" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
