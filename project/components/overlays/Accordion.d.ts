import * as React from 'react';

export interface AccordionProps {
  /** Main-category label. */
  title: string;
  /** Optional trailing count of items inside. */
  count?: number;
  open?: boolean;
  onToggle?: () => void;
  /** Body content (subcategory checkboxes). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** One expandable section; stack many to build the nested category filter. */
export function Accordion(props: AccordionProps): JSX.Element;
