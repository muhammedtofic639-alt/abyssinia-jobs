import React from 'react';

/**
 * Abyssinia Jobs — primary action button.
 * The lime `primary` variant is the single loudest element on any screen;
 * use exactly one per view. `secondary` is a glass pill, `ghost` is text-only,
 * `danger` for destructive/reject actions.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leadingIcon = null,
  trailingIcon = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 38, padding: '0 16px', font: 'var(--text-sm)' },
    md: { height: 50, padding: '0 22px', font: 'var(--text-body)' },
    lg: { height: 58, padding: '0 28px', font: 'var(--text-body-lg)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: '0 8px 24px var(--accent-glow)',
    },
    secondary: {
      background: 'var(--glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
    danger: {
      background: 'rgba(255,90,90,0.12)',
      color: 'var(--danger)',
      border: '1px solid rgba(255,90,90,0.32)',
      boxShadow: 'none',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type="button"
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: fullWidth ? '100%' : 'auto',
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontSize: s.font,
        fontWeight: 'var(--fw-bold)',
        letterSpacing: '-0.01em',
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.42 : 1,
        transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
        WebkitTapHighlightColor: 'transparent',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {loading ? (
        <span
          style={{
            width: 16, height: 16, borderRadius: '50%',
            border: '2px solid currentColor', borderTopColor: 'transparent',
            display: 'inline-block', animation: 'aj-spin 0.7s linear infinite',
          }}
        />
      ) : (
        <>
          {leadingIcon}
          {children}
          {trailingIcon}
        </>
      )}
      <style>{`@keyframes aj-spin{to{transform:rotate(360deg)}}`}</style>
    </button>
  );
}
