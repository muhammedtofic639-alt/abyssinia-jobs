import React from 'react';

/**
 * Surface container — the dark rounded panel everything sits on.
 * `glass` floats over imagery/video; `solid` is the default chrome card.
 */
export function Card({ variant = 'solid', padding = 'var(--pad-card)', children, style = {}, ...rest }) {
  const variants = {
    solid: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
    },
    glass: {
      background: 'var(--glass)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
    },
    elevated: {
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)',
    },
  };
  return (
    <div style={{
      borderRadius: 'var(--radius-lg)', padding,
      ...(variants[variant] || variants.solid), ...style,
    }} {...rest}>
      {children}
    </div>
  );
}
