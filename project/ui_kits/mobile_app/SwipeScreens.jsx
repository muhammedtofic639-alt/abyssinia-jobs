// Swipe feed + filter overlay screens
// Exports: SwipeFeedScreen, FilterScreen

const SEEKERS = [
  { id:1, name:'Selam Tesfaye', role:'Video Editor', location:'Addis Ababa', verified:true, rating:null, bg:'linear-gradient(160deg,#1a0a2e 0%,#2d1b4e 40%,#5c2d6e 100%)', videoUrl:'https://youtube.com/watch?v=dQw4w9WgXcQ' },
  { id:2, name:'Abel Girma', role:'Cinematographer', location:'Addis Ababa', verified:false, rating:null, bg:'linear-gradient(160deg,#0a1a2e 0%,#0f3460 50%,#16637a 100%)', videoUrl:'https://youtube.com/watch?v=abc123' },
  { id:3, name:'Mekdes Alemu', role:'Motion Designer', location:'Nairobi', verified:true, rating:null, bg:'linear-gradient(160deg,#1a0a0a 0%,#4e1b1b 50%,#7a3a1a 100%)', videoUrl:'' },
  { id:4, name:'Yonas Bekele', role:'Graphic Designer', location:'Addis Ababa', verified:false, rating:null, bg:'linear-gradient(160deg,#0a1a0a 0%,#1b3a1b 50%,#2d5c2d 100%)', videoUrl:'https://youtube.com/watch?v=xyz789' },
];

const CATEGORIES = [
  { id:'ca', title:'Creative Arts & Media', subs:['Video Editor','Cinematographer','Motion Designer','Photographer','Illustrator'] },
  { id:'eng', title:'Engineering & Tech', subs:['Frontend Developer','Backend Developer','Mobile Developer','DevOps Engineer'] },
  { id:'hos', title:'Hospitality & Service', subs:['Barista','Waiter','Chef','Event Coordinator'] },
  { id:'biz', title:'Business & Finance', subs:['Accountant','HR Manager','Business Analyst','Project Manager'] },
];

function DualSwipeCard({ seeker, onLike, onPass }) {
  const [slide, setSlide] = React.useState(0); // 0=photo, 1=video
  const [dragging, setDragging] = React.useState(false);
  const [dragX, setDragX] = React.useState(0);
  const startX = React.useRef(0);

  function handlePointerDown(e) { startX.current = e.clientX; setDragging(true); }
  function handlePointerMove(e) { if (dragging) setDragX(e.clientX - startX.current); }
  function handlePointerUp() {
    if (Math.abs(dragX) > 80) { dragX > 0 ? onLike() : onPass(); }
    setDragging(false); setDragX(0);
  }

  const rotate = dragX * 0.05;
  const overlayDir = dragX > 40 ? 'like' : dragX < -40 ? 'pass' : null;

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', borderRadius: 28,
      background: seeker.bg, overflow: 'hidden', cursor: dragging ? 'grabbing' : 'grab',
      transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
      transition: dragging ? 'none' : 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
      userSelect: 'none',
    }}
      onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp} onPointerLeave={handlePointerUp}
    >
      {/* Slide 0: Portrait */}
      {slide === 0 && <>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>
            {seeker.name.split(' ').map(w=>w[0]).join('')}
          </span>
        </div>
        {/* Bottom protection gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(6,6,7,0.95) 0%, rgba(6,6,7,0.6) 50%, rgba(6,6,7,0) 100%)' }} />
        {/* Info overlay */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{seeker.name}</span>
            {seeker.verified && <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--verify)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, boxShadow: '0 0 10px rgba(46,168,255,0.5)', flexShrink: 0 }}>✓</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{seeker.role}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{seeker.location}</span>
          </div>
          {seeker.videoUrl && (
            <button onClick={(e) => { e.stopPropagation(); setSlide(1); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 36, padding: '0 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <Icon name="play" size={14} color="#fff" strokeWidth={2} /> Watch pitch
            </button>
          )}
        </div>
        {/* Drag feedback overlays */}
        {overlayDir === 'like' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(212,255,0,0.12)', borderRadius: 28, border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 900, color: 'var(--accent)', letterSpacing: 3, transform: 'rotate(-12deg)', textShadow: '0 0 20px var(--accent-glow)' }}>LIKE</span></div>}
        {overlayDir === 'pass' && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,90,90,0.10)', borderRadius: 28, border: '2px solid var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 900, color: 'var(--danger)', letterSpacing: 3, transform: 'rotate(12deg)' }}>PASS</span></div>}
      </>}

      {/* Slide 1: Video pitch */}
      {slide === 1 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#050507' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, padding: 24 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(212,255,0,0.12)', border: '1.5px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="play" size={32} color="var(--accent)" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', textAlign: 'center' }}>Video pitch</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', padding: '6px 12px', background: 'var(--surface-card)', borderRadius: 8, maxWidth: '80%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{seeker.videoUrl}</span>
          </div>
          <div style={{ padding: '0 20px 24px' }}>
            <button onClick={(e) => { e.stopPropagation(); setSlide(0); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px', borderRadius: 999, background: 'var(--glass)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <Icon name="arrow-left" size={16} color="var(--text-primary)" /> Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SwipeFeedScreen({ onOpenFilter }) {
  const [idx, setIdx] = React.useState(0);
  const [gone, setGone] = React.useState([]); // liked/passed ids
  const seeker = SEEKERS[idx % SEEKERS.length];
  const next = () => { setGone(g => [...g, seeker.id]); setIdx(i => i + 1); };

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--bg-base)' }}>
      {/* Top bar */}
      <div style={{ height: 100, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 20px 12px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-accent)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>A</div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>abyssinia</span>
        </div>
        <button onClick={onOpenFilter} style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--surface-card)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Icon name="sliders-horizontal" size={18} color="var(--text-primary)" />
        </button>
      </div>

      {/* Card stack */}
      <div style={{ flex: 1, padding: '0 16px', position: 'relative', overflow: 'hidden' }}>
        {/* Next card (peeking behind) */}
        {SEEKERS[(idx + 1) % SEEKERS.length] && (
          <div style={{ position: 'absolute', inset: '8px 28px 8px', borderRadius: 28, background: SEEKERS[(idx + 1) % SEEKERS.length].bg, opacity: 0.6, transform: 'scale(0.96)', transformOrigin: 'bottom center' }} />
        )}
        {/* Active card */}
        <div style={{ position: 'absolute', inset: 0, margin: '0 16px' }}>
          <DualSwipeCard key={idx} seeker={seeker} onLike={next} onPass={next} />
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, flexShrink: 0, paddingBottom: 10 }}>
        <button onClick={next} style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--surface-card)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
          <Icon name="x" size={26} color="var(--danger)" strokeWidth={2.5} />
        </button>
        <button onClick={next} style={{ width: 70, height: 70, borderRadius: '50%', background: 'var(--accent)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 28px rgba(212,255,0,0.45)' }}>
          <Icon name="heart" size={30} color="var(--on-accent)" strokeWidth={2.5} />
        </button>
        <button style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--surface-card)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
          <Icon name="bookmark" size={22} color="var(--text-secondary)" />
        </button>
      </div>
    </div>
  );
}

function FilterScreen({ onClose }) {
  const [open, setOpen] = React.useState('ca');
  const [sel, setSel] = React.useState({ 'Video Editor': true });
  const toggle = (id) => setOpen(o => o === id ? null : id);
  const check = (sub) => setSel(s => ({ ...s, [sub]: !s[sub] }));
  const selCount = Object.values(sel).filter(Boolean).length;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, pointerEvents: 'auto' }}>
      {/* Scrim */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(6,6,7,0.72)', backdropFilter: 'blur(2px)' }} />
      {/* Sheet */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, maxHeight: '88%', display: 'flex', flexDirection: 'column', background: 'var(--bg-raised)', borderTopLeftRadius: 34, borderTopRightRadius: 34, borderTop: '1px solid var(--border-default)', boxShadow: '0 -16px 48px rgba(0,0,0,0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 4 }}>
          <span style={{ width: 38, height: 4, borderRadius: 999, background: 'var(--border-strong)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px 8px' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Filter &amp; Show</h2>
          <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', background: 'var(--glass)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
        <div style={{ overflowY: 'auto', padding: '0 20px', flex: 1 }}>
          {CATEGORIES.map(cat => (
            <div key={cat.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <button onClick={() => toggle(cat.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', padding: '16px 4px', textAlign: 'left' }}>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: open === cat.id ? 'var(--accent)' : 'var(--text-primary)', transition: 'color 140ms' }}>{cat.title}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)' }}>{cat.subs.length}</span>
                <span style={{ fontSize: 14, color: open === cat.id ? 'var(--accent)' : 'var(--text-tertiary)', transform: open === cat.id ? 'rotate(180deg)' : 'none', transition: 'transform 240ms', display: 'inline-block' }}>⌄</span>
              </button>
              {open === cat.id && (
                <div style={{ paddingBottom: 10 }}>
                  {cat.subs.map(sub => (
                    <label key={sub} onClick={() => check(sub)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px', cursor: 'pointer', minHeight: 44 }}>
                      <span style={{ width: 22, height: 22, borderRadius: 7, background: sel[sub] ? 'var(--accent)' : 'transparent', border: `1.5px solid ${sel[sub] ? 'var(--accent)' : 'var(--border-strong)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-accent)', fontSize: 13, fontWeight: 700, flexShrink: 0, transition: 'all 140ms' }}>{sel[sub] ? '✓' : ''}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: sel[sub] ? 'var(--text-primary)' : 'var(--text-secondary)', flex: 1 }}>{sub}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 20px 34px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-raised)' }}>
          <button onClick={onClose} style={{ width: '100%', height: 54, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'var(--accent)', color: 'var(--on-accent)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 800, boxShadow: '0 8px 24px rgba(212,255,0,0.4)' }}>
            Apply filters {selCount > 0 ? `(${selCount})` : ''}
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SwipeFeedScreen, FilterScreen });
