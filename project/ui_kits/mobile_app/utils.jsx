// Shared icon helper using Lucide UMD + theme colors
// Exports: Icon, PhoneShell, SectionHeader, NavBar to window

function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.75, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    const key = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const cap = key[0].toUpperCase() + key.slice(1);
    const def = window.lucide[cap];
    if (!def) return;
    el.innerHTML = '';
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', size); svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', color); svg.setAttribute('stroke-width', strokeWidth);
    svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
    // Lucide UMD: def is an array of [tagName, attrsObject] pairs directly
    (Array.isArray(def) ? def : []).forEach(([tag, attrs]) => {
      if (typeof tag !== 'string') return;
      const ch = document.createElementNS(ns, tag);
      Object.entries(attrs || {}).forEach(([k, v]) => ch.setAttribute(k, v));
      svg.appendChild(ch);
    });
    el.appendChild(svg);
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }} />;
}

function PhoneShell({ children, style = {} }) {
  return (
    <div style={{
      width: 390, height: 844, borderRadius: 52, overflow: 'hidden', position: 'relative',
      background: 'var(--bg-base)', boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(255,255,255,0.09)',
      flexShrink: 0, ...style,
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
        width: 120, height: 32, background: '#0a0a0b', borderRadius: 20, zIndex: 100,
      }} />
      {/* Status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 52, zIndex: 99,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '0 28px 8px', boxSizing: 'border-box',
        fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)',
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Icon name="wifi" size={14} color="var(--text-primary)" strokeWidth={2.5} />
          <Icon name="battery" size={14} color="var(--text-primary)" strokeWidth={2.5} />
        </span>
      </div>
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
    </div>
  );
}

function NavBar({ title, leftAction, rightAction }) {
  return (
    <div style={{
      position: 'absolute', top: 52, left: 0, right: 0, height: 52, zIndex: 80,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 20px', boxSizing: 'border-box',
    }}>
      {leftAction || <span style={{ width: 36 }} />}
      {title && <span style={{
        fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
        color: 'var(--text-primary)', letterSpacing: '-0.02em',
      }}>{title}</span>}
      {rightAction || <span style={{ width: 36 }} />}
    </div>
  );
}

Object.assign(window, { Icon, PhoneShell, NavBar });
