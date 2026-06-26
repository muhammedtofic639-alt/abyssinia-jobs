import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label: string;
  /** Optional trailing count (e.g. result tally for a subcategory). */
  count?: number;
  style?: React.CSSProperties;
}

/** Square lime checkbox row — subcategory toggles in the filter accordion. */
export function Checkbox(props: CheckboxProps): JSX.Element;
