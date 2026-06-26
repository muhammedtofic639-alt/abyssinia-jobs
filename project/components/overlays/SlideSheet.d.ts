import * as React from 'react';

export interface SlideSheetProps {
  open?: boolean;
  /** Sticky header title. */
  title?: string;
  onClose?: () => void;
  /** Sticky footer node (e.g. the lime "Apply Filters" button). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Full-screen slide-up sheet with scrim, grab handle, sticky title + footer.
 * Position it inside a `position:relative` phone frame.
 */
export function SlideSheet(props: SlideSheetProps): JSX.Element;
