import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. `primary` = lime CTA (one per screen). @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width (full-width mobile CTAs). @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Show spinner, disable interaction. @default false */
  loading?: boolean;
  /** Icon node rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Pill-shaped action button. The lime `primary` variant is the loudest element
 * on a screen — use exactly one.
 *
 * @startingPoint section="Buttons" subtitle="Lime CTA + glass / ghost / danger variants" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
