import React from 'react';

/**
 * Checkbox row — the subcategory toggles inside the filter accordion.
 * Square, lime when checked. Whole row is the hit target.
 */
export function Checkbox({ checked = false, onChange, label, count, style = {} }) {
  return (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 12, width: '100%',
      padding: '11px 4px', cursor: 'pointer', minHeight: 'var(--tap-min)',
      WebkitTapHighlightColor: 'transparent', ...style,
    }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 24, height: 24, flexShrink: 0, borderRadius: 'var(--radius-xs)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: checked ? 'var(--accent)' : 'transparent',
          border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
          color: 'var(--on-accent)', fontSize: 14, fontWeight: 700,
          transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        }}
      >{checked ? '✓' : ''}</span>
      <span style={{
        flex: 1, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)',
        fontWeight: 'var(--fw-medium)',
        color: checked ? 'var(--text-primary)' : 'var(--text-secondary)',
      }}>{label}</span>
      {count != null && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          color: 'var(--text-tertiary)',
        }}>{count}</span>
      )}
    </label>
  );
}
