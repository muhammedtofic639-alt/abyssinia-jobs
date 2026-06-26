// Onboarding screens: Role select → Seeker profile OR Employer docs → Awaiting approval
// Exports: RoleSelectScreen, SeekerOnboardScreen, EmployerOnboardScreen, AwaitingApprovalScreen

function RoleSelectScreen({ onSelectRole }) {
  const [role, setRole] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '100px 24px 40px', boxSizing: 'border-box', background: 'var(--bg-base)' }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src="../../assets/logo.jpeg" alt="Abyssinia Jobs" style={{ width: '82%', height: '82%', objectFit: 'contain' }} /></div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>abyssinia <span style={{ color: 'var(--text-secondary)' }}>jobs</span></span>
        </div>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 10 }}>How will you<br />use the app?</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Choose your role. You can switch later.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        {[
          { id: 'SEEKER', icon: 'user-circle', title: 'I\'m looking for work', desc: 'Build a video profile, get discovered by employers.' },
          { id: 'EMPLOYER', icon: 'briefcase', title: 'I\'m hiring', desc: 'Browse verified talent, find your next great hire.' },
        ].map(r => (
          <button key={r.id} onClick={() => setRole(r.id)} style={{
            display: 'flex', alignItems: 'center', gap: 16, width: '100%', textAlign: 'left',
            background: role === r.id ? 'rgba(212,255,0,0.09)' : 'var(--surface-card)',
            border: `1.5px solid ${role === r.id ? 'var(--accent)' : 'var(--border-default)'}`,
            borderRadius: 22, padding: '18px 20px', cursor: 'pointer',
            boxShadow: role === r.id ? '0 10px 30px rgba(212,255,0,0.18)' : 'none',
            transition: 'all 240ms cubic-bezier(0.4,0,0.2,1)',
          }}>
            <span style={{ width: 52, height: 52, borderRadius: 15, background: role === r.id ? 'var(--accent)' : 'var(--surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: role === r.id ? 'var(--on-accent)' : 'var(--text-secondary)' }}>
              <Icon name={r.icon} size={24} color={role === r.id ? 'var(--on-accent)' : 'var(--text-secondary)'} />
            </span>
            <span style={{ flex: 1 }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{r.title}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{r.desc}</span>
            </span>
            <span style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${role === r.id ? 'var(--accent)' : 'var(--border-strong)'}`, background: role === r.id ? 'var(--accent)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--on-accent)', fontSize: 12, fontWeight: 700 }}>{role === r.id ? '✓' : ''}</span>
          </button>
        ))}
      </div>
      <button onClick={() => role && onSelectRole(role)} style={{
        marginTop: 24, width: '100%', height: 56, borderRadius: 999, border: 'none', cursor: role ? 'pointer' : 'not-allowed',
        background: role ? 'var(--accent)' : 'var(--surface-elevated)', color: role ? 'var(--on-accent)' : 'var(--text-tertiary)',
        fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 800,
        boxShadow: role ? '0 8px 24px rgba(212,255,0,0.4)' : 'none',
        transition: 'all 240ms cubic-bezier(0.4,0,0.2,1)',
      }}>Continue →</button>
    </div>
  );
}

function SeekerOnboardScreen({ onComplete }) {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [link, setLink] = React.useState('');
  const [photo, setPhoto] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--bg-base)', boxSizing: 'border-box', overflowY: 'auto' }}>
      <div style={{ padding: '100px 24px 0' }}>
        <h1 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Build your profile</h1>
        <p style={{ margin: '0 0 28px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)' }}>You'll be live and discoverable instantly.</p>
      </div>
      <div style={{ flex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {/* Portrait upload */}
        <button onClick={() => setPhoto('portrait.jpg')} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 18, background: photo ? 'rgba(212,255,0,0.07)' : 'var(--surface-elevated)', border: `1.5px dashed ${photo ? 'var(--accent)' : 'var(--border-strong)'}`, cursor: 'pointer', textAlign: 'left', width: '100%' }}>
          <span style={{ width: 52, height: 52, borderRadius: 14, background: photo ? 'var(--accent)' : 'var(--glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: photo ? 'var(--on-accent)' : 'var(--text-secondary)', flexShrink: 0 }}><Icon name={photo ? 'check' : 'camera'} size={22} color={photo ? '#000' : 'var(--text-secondary)'} /></span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{photo ? photo : 'Portrait photo'}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: photo ? 'var(--accent)' : 'var(--text-tertiary)' }}>{photo ? 'Uploaded · tap to replace' : 'Your best headshot or clear photo'}</span>
          </span>
        </button>
        {/* Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>Full name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Selam Tesfaye" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border-default)', borderRadius: 14, padding: '14px 16px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', width: '100%', boxSizing: 'border-box' }} />
        </div>
        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>About you</label>
          <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="A short pitch — 2–3 sentences about your work…" rows={3} style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border-default)', borderRadius: 14, padding: '14px 16px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', resize: 'none', width: '100%', boxSizing: 'border-box', lineHeight: 1.5 }} />
        </div>
        {/* Video link */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>Video pitch link</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface-elevated)', border: '1px solid var(--border-default)', borderRadius: 14, padding: '0 16px', height: 52 }}>
            <Icon name="link" size={18} color="var(--text-tertiary)" />
            <input value={link} onChange={e => setLink(e.target.value)} placeholder="YouTube or TikTok URL" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 15 }} />
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-tertiary)' }}>Optional — but 3× more likely to be discovered.</span>
        </div>
      </div>
      <div style={{ padding: '20px 24px 40px' }}>
        <button onClick={onComplete} style={{ width: '100%', height: 56, borderRadius: 999, border: 'none', cursor: 'pointer', background: 'var(--accent)', color: 'var(--on-accent)', fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 800, boxShadow: '0 8px 24px rgba(212,255,0,0.4)' }}>Go live ✓</button>
      </div>
    </div>
  );
}

function EmployerOnboardScreen({ onSubmit }) {
  const [license, setLicense] = React.useState(null);
  const [ownerId, setOwnerId] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--bg-base)', padding: '100px 24px 40px', boxSizing: 'border-box' }}>
      <h1 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Verify your business</h1>
      <p style={{ margin: '0 0 32px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>We review your documents within 24 hrs. You'll be notified when approved.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {[
          { key: 'license', label: 'Commercial license', hint: 'Official business registration doc', icon: 'file-text', val: license, set: setLicense },
          { key: 'owner', label: 'Owner / Director ID', hint: 'National ID or passport photo', icon: 'credit-card', val: ownerId, set: setOwnerId },
        ].map(f => (
          <button key={f.key} onClick={() => f.set(f.key + '-doc.pdf')} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, borderRadius: 20, background: f.val ? 'rgba(212,255,0,0.07)' : 'var(--surface-elevated)', border: `1.5px dashed ${f.val ? 'var(--accent)' : 'var(--border-strong)'}`, cursor: 'pointer', textAlign: 'left', width: '100%' }}>
            <span style={{ width: 52, height: 52, borderRadius: 14, background: f.val ? 'var(--accent)' : 'var(--glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={f.val ? 'check' : f.icon} size={22} color={f.val ? '#000' : 'var(--text-secondary)'} />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{f.val || f.label}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: f.val ? 'var(--accent)' : 'var(--text-tertiary)' }}>{f.val ? 'Uploaded · tap to replace' : f.hint}</span>
            </span>
          </button>
        ))}
      </div>
      <button onClick={onSubmit} disabled={!license || !ownerId} style={{ width: '100%', height: 56, borderRadius: 999, border: 'none', cursor: license && ownerId ? 'pointer' : 'not-allowed', background: license && ownerId ? 'var(--accent)' : 'var(--surface-elevated)', color: license && ownerId ? 'var(--on-accent)' : 'var(--text-tertiary)', fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 800, boxShadow: license && ownerId ? '0 8px 24px rgba(212,255,0,0.4)' : 'none', transition: 'all 240ms' }}>Submit for review</button>
    </div>
  );
}

function AwaitingApprovalScreen({ onReset }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-base)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px', boxSizing: 'border-box', textAlign: 'center' }}>
      <div style={{ width: 88, height: 88, borderRadius: 26, background: 'rgba(255,197,61,0.15)', border: '1.5px solid rgba(255,197,61,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <Icon name="clock" size={40} color="var(--status-pending)" />
      </div>
      <h2 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Awaiting Approval</h2>
      <p style={{ margin: '0 0 36px', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.55 }}>Your documents are under review. We'll notify you within 24 hours once your account is approved.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', padding: '18px 24px', borderRadius: 20, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', width: '100%', marginBottom: 32 }}>
        <Icon name="shield-check" size={20} color="var(--text-tertiary)" />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Your documents are encrypted and reviewed by our admin team. No access until approval.</span>
      </div>
      <button onClick={onReset} style={{ background: 'transparent', border: '1px solid var(--border-default)', borderRadius: 999, padding: '12px 24px', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 14, cursor: 'pointer' }}>← Back to start</button>
    </div>
  );
}

Object.assign(window, { RoleSelectScreen, SeekerOnboardScreen, EmployerOnboardScreen, AwaitingApprovalScreen });
