import React from 'react';

/**
 * The 1-to-10 admin rating indicator. Renders ten star pips; filled pips are
 * lime, empty are hairline. A numeric "N / 10" chip sits alongside.
 * Read-only by default; pass `interactive` + `onRate` for the admin console.
 *
 * Shown to a seeker when they view an APPROVED employer's card after a match.
 */
export function StarRating({
  value = 0,
  max = 10,
  interactive = false,
  onRate,
  size = 18,
  showValue = true,
  style = {},
}) {
  const [hover, setHover] = React.useState(0);
  const active = hover || value;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}>
      <div
        style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.18 }}
        onMouseLeave={() => interactive && setHover(0)}
      >
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < active;
          return (
            <span
              key={i}
              onMouseEnter={() => interactive && setHover(i + 1)}
              onClick={() => interactive && onRate && onRate(i + 1)}
              style={{
                fontSize: size, lineHeight: 1,
                cursor: interactive ? 'pointer' : 'default',
                color: filled ? 'var(--accent)' : 'var(--border-strong)',
                textShadow: filled ? '0 0 8px var(--accent-glow)' : 'none',
                transition: 'color var(--dur-fast), transform var(--dur-fast)',
                transform: interactive && hover === i + 1 ? 'scale(1.18)' : 'scale(1)',
              }}
            >★</span>
          );
        })}
      </div>
      {showValue && (
        <span style={{
          display: 'inline-flex', alignItems: 'baseline', gap: 1,
          fontFamily: 'var(--font-mono)', fontWeight: 700,
          color: 'var(--text-primary)', fontSize: size * 0.92,
          padding: '3px 9px', borderRadius: 'var(--radius-xs)',
          background: 'var(--glass)', border: '1px solid var(--border-default)',
        }}>
          {active}<span style={{ color: 'var(--text-tertiary)', fontSize: size * 0.7 }}>/{max}</span>
        </span>
      )}
    </div>
  );
}
