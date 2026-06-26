import * as React from 'react';

export interface RoleCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

/** Large selectable role tile for the Step 1 role-selection gate. */
export function RoleCard(props: RoleCardProps): JSX.Element;
