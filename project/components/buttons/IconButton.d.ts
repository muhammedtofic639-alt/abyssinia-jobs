import * as React from 'react';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** @default "glass" */
  variant?: 'glass' | 'solid' | 'accent';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required — icon-only). */
  label: string;
  /** Icon node. */
  children?: React.ReactNode;
}

/** Circular icon-only button for toolbars and card overlays. */
export function IconButton(props: IconButtonProps): JSX.Element;
