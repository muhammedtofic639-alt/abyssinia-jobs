import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Optional trailing label. */
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Lime pill toggle — view-mode flip and binary settings. */
export function Switch(props: SwitchProps): JSX.Element;
