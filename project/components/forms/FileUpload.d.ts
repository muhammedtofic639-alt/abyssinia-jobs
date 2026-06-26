import * as React from 'react';

export interface FileUploadProps {
  /** Empty-state prompt, e.g. "Commercial license". */
  label: string;
  /** Sub-line in empty state. */
  hint?: string;
  accept?: string;
  /** Name of the chosen file — presence switches to the filled state. */
  fileName?: string | null;
  /** Custom icon node (defaults to ＋ / ✓). */
  icon?: React.ReactNode;
  onPick?: () => void;
  style?: React.CSSProperties;
}

/** Tap-to-upload dropzone for documents and portrait photos. */
export function FileUpload(props: FileUploadProps): JSX.Element;
