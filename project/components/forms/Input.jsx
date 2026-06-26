import React from 'react';

/**
 * Text / textarea input on dark glass. Label sits above; focus lights the
 * accent ring. Use `as="textarea"` for the seeker description field.
 */
export function Input({
  label,
  hint,
  error,
  as = 'input',
  leadingIcon = null,
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || React.useId();
  const Tag = as === 'textarea' ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          fontWeight: 'var(--fw-semibold)', color: 'var(--text-secondary)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: as === 'textarea' ? 'flex-start' : 'center', gap: 10,
        background: 'var(--surface-elevated)',
        border: `1px solid ${error ? 'var(--danger)' : focused ? 'var(--border-accent)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)',
        padding: as === 'textarea' ? '14px 16px' : '0 16px',
        height: as === 'textarea' ? 'auto' : 52,
        boxShadow: focused && !error ? 'var(--ring-focus)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {leadingIcon && <span style={{ color: 'var(--text-tertiary)', display: 'flex', paddingTop: as === 'textarea' ? 2 : 0 }}>{leadingIcon}</span>}
        <Tag
          id={fieldId}
          rows={as === 'textarea' ? 4 : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, width: '100%', background: 'transparent', border: 'none', outline: 'none',
            color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)', fontWeight: 'var(--fw-medium)',
            resize: as === 'textarea' ? 'vertical' : 'none',
            lineHeight: 'var(--lh-normal)', padding: 0,
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
          color: error ? 'var(--danger)' : 'var(--text-tertiary)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
