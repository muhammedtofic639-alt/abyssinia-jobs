import * as React from 'react';

export interface TagProps {
  /** Active = lime fill. @default false */
  active?: boolean;
  /** Clickable toggle vs static label. @default false */
  selectable?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Category / skill chip — static label or selectable filter pill. */
export function Tag(props: TagProps): JSX.Element;
