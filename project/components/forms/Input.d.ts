import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Label above the field. */
  label?: string;
  /** Helper text below. */
  hint?: string;
  /** Error message (turns border + text red). */
  error?: string;
  /** Render a multi-line textarea. @default "input" */
  as?: 'input' | 'textarea';
  /** Icon inside the field, leading edge. */
  leadingIcon?: React.ReactNode;
}

/** Dark glass text field with floating accent focus ring. */
export function Input(props: InputProps): JSX.Element;
