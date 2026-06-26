import React from 'react';

/**
 * Circular icon button — toolbars, card overlays, close affordances.
 * `glass` over imagery, `solid` on chrome, `accent` for the loud one.
 */
export function IconButton({
  variant = 'glass',
  size = 'md',
  label,
  children,
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 56 }[size] || 44;

  const variants = {
    glass: {
      background: 'var(--glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'blur(12px)',
    },
    solid: {
      background: 'var(--surface-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: '0 6px 20px var(--accent-glow)',
    },
  };
  const v = variants[variant] || variants.glass;

  return (
    <button
      type="button"
      aria-label={label}
      style={{
        width: dims, height: dims,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast)',
        WebkitTapHighlightColor: 'transparent',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
