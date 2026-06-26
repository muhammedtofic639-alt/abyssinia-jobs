import React from 'react';

/**
 * Category / skill chip. `selectable` chips toggle; static chips just label
 * (e.g. a seeker's subcategory). Lime when active.
 */
export function Tag({ active = false, selectable = false, onClick, children, style = {} }) {
  return (
    <span
      onClick={selectable ? onClick : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 32, padding: '0 14px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)', whiteSpace: 'nowrap',
        cursor: selectable ? 'pointer' : 'default',
        color: active ? 'var(--on-accent)' : 'var(--text-secondary)',
        background: active ? 'var(--accent)' : 'var(--glass)',
        border: `1px solid ${active ? 'transparent' : 'var(--border-default)'}`,
        transition: 'background var(--dur-fast), color var(--dur-fast)',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
    >{children}</span>
  );
}
