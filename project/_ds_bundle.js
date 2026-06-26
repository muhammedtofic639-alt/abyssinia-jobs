/* @ds-bundle: {"format":3,"namespace":"AbyssiniaJobsDesignSystem_633419","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"VerifiedBadge","sourcePath":"components/data-display/VerifiedBadge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FileUpload","sourcePath":"components/forms/FileUpload.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RoleCard","sourcePath":"components/forms/RoleCard.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/overlays/Accordion.jsx"},{"name":"SlideSheet","sourcePath":"components/overlays/SlideSheet.jsx"},{"name":"StarRating","sourcePath":"components/rating/StarRating.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"470d8c9c16c3","components/buttons/IconButton.jsx":"e6ecfe1f6f0a","components/data-display/Avatar.jsx":"f1e0bada24a2","components/data-display/Badge.jsx":"9264300e0197","components/data-display/Card.jsx":"43164b21cd39","components/data-display/Tag.jsx":"2ec3e88b1835","components/data-display/VerifiedBadge.jsx":"cce2b2c0ee03","components/forms/Checkbox.jsx":"fa2396e34c59","components/forms/FileUpload.jsx":"8740f176ed74","components/forms/Input.jsx":"170c6fe1294c","components/forms/RoleCard.jsx":"da4731aa55e1","components/forms/Switch.jsx":"135f591e7a6a","components/overlays/Accordion.jsx":"dec433491093","components/overlays/SlideSheet.jsx":"58a4517d9df5","components/rating/StarRating.jsx":"63746ae91077","ui_kits/mobile_app/OnboardScreens.jsx":"b15d5bb39bd7","ui_kits/mobile_app/SwipeScreens.jsx":"234098ef27cc","ui_kits/mobile_app/utils.jsx":"117cdd48905d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AbyssiniaJobsDesignSystem_633419 = window.AbyssiniaJobsDesignSystem_633419 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Abyssinia Jobs — primary action button.
 * The lime `primary` variant is the single loudest element on any screen;
 * use exactly one per view. `secondary` is a glass pill, `ghost` is text-only,
 * `danger` for destructive/reject actions.
 */
function Button({
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
    sm: {
      height: 38,
      padding: '0 16px',
      font: 'var(--text-sm)'
    },
    md: {
      height: 50,
      padding: '0 22px',
      font: 'var(--text-body)'
    },
    lg: {
      height: 58,
      padding: '0 28px',
      font: 'var(--text-body-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: '0 8px 24px var(--accent-glow)'
    },
    secondary: {
      background: 'var(--glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      background: 'rgba(255,90,90,0.12)',
      color: 'var(--danger)',
      border: '1px solid rgba(255,90,90,0.32)',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled || loading,
    style: {
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
      ...style
    },
    onMouseDown: e => {
      if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'aj-spin 0.7s linear infinite'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon, children, trailingIcon), /*#__PURE__*/React.createElement("style", null, `@keyframes aj-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button — toolbars, card overlays, close affordances.
 * `glass` over imagery, `solid` on chrome, `accent` for the loud one.
 */
function IconButton({
  variant = 'glass',
  size = 'md',
  label,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 56
  }[size] || 44;
  const variants = {
    glass: {
      background: 'var(--glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'blur(12px)'
    },
    solid: {
      background: 'var(--surface-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
      boxShadow: '0 6px 20px var(--accent-glow)'
    }
  };
  const v = variants[variant] || variants.glass;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      flexShrink: 0,
      transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast)',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/**
 * Round avatar with optional ring and verification dot. Falls back to
 * initials on a tinted disc when no `src` is given.
 */
function Avatar({
  src,
  name = '',
  size = 48,
  ring = false,
  verified = false,
  style = {}
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-elevated)',
      border: ring ? '2px solid var(--accent)' : '1px solid var(--border-default)',
      boxShadow: ring ? '0 0 14px var(--accent-glow)' : 'none',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.36
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: size * 0.36,
      height: size * 0.36,
      minWidth: 16,
      minHeight: 16,
      borderRadius: '50%',
      background: 'var(--verify)',
      color: 'var(--on-verify)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.2,
      fontWeight: 700,
      border: '2px solid var(--bg-base)'
    }
  }, "\u2713"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/**
 * Small status pill. `tone` maps to verification + feedback colors:
 * pending (amber), approved (green), rejected (red), accent (lime), neutral.
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  children,
  style = {}
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-secondary)',
      bg: 'var(--glass)',
      bd: 'var(--border-default)'
    },
    accent: {
      fg: 'var(--accent)',
      bg: 'var(--accent-soft)',
      bd: 'var(--border-accent)'
    },
    pending: {
      fg: 'var(--status-pending)',
      bg: 'rgba(255,197,61,0.13)',
      bd: 'rgba(255,197,61,0.34)'
    },
    approved: {
      fg: 'var(--status-approved)',
      bg: 'rgba(65,224,139,0.13)',
      bd: 'rgba(65,224,139,0.34)'
    },
    rejected: {
      fg: 'var(--status-rejected)',
      bg: 'rgba(255,90,90,0.13)',
      bd: 'rgba(255,90,90,0.34)'
    },
    verify: {
      fg: 'var(--verify)',
      bg: 'rgba(46,168,255,0.14)',
      bd: 'rgba(46,168,255,0.36)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 11px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.02em',
      color: solid ? 'var(--on-accent)' : t.fg,
      background: solid ? t.fg : t.bg,
      border: solid ? '1px solid transparent' : `1px solid ${t.bd}`,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'var(--on-accent)' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container — the dark rounded panel everything sits on.
 * `glass` floats over imagery/video; `solid` is the default chrome card.
 */
function Card({
  variant = 'solid',
  padding = 'var(--pad-card)',
  children,
  style = {},
  ...rest
}) {
  const variants = {
    solid: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    glass: {
      background: 'var(--glass)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)'
    },
    elevated: {
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      ...(variants[variant] || variants.solid),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/**
 * Category / skill chip. `selectable` chips toggle; static chips just label
 * (e.g. a seeker's subcategory). Lime when active.
 */
function Tag({
  active = false,
  selectable = false,
  onClick,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: selectable ? onClick : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      whiteSpace: 'nowrap',
      cursor: selectable ? 'pointer' : 'default',
      color: active ? 'var(--on-accent)' : 'var(--text-secondary)',
      background: active ? 'var(--accent)' : 'var(--glass)',
      border: `1px solid ${active ? 'transparent' : 'var(--border-default)'}`,
      transition: 'background var(--dur-fast), color var(--dur-fast)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/VerifiedBadge.jsx
try { (() => {
/**
 * The public verification emblem — a neon-blue checkmark shown beside a
 * seeker's name when `isVerified` is true. Glows softly. Inline by default;
 * pass `size` to scale.
 */
function VerifiedBadge({
  size = 22,
  withLabel = false,
  style = {}
}) {
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--verify)',
      color: 'var(--on-verify)',
      fontSize: size * 0.6,
      fontWeight: 700,
      lineHeight: 1,
      boxShadow: '0 0 12px var(--verify-glow)'
    }
  }, "\u2713");
  if (!withLabel) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    }
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--verify)'
    }
  }, "Verified"));
}
Object.assign(__ds_scope, { VerifiedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/VerifiedBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox row — the subcategory toggles inside the filter accordion.
 * Square, lime when checked. Whole row is the hit target.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  count,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '11px 4px',
      cursor: 'pointer',
      minHeight: 'var(--tap-min)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 24,
      height: 24,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--accent)' : 'transparent',
      border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      color: 'var(--on-accent)',
      fontSize: 14,
      fontWeight: 700,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)',
      color: checked ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
/**
 * Document / photo upload dropzone. Empty state invites a tap; filled state
 * shows the file name + a swap affordance. Used for employer commercial
 * license, owner ID, and seeker portrait photo.
 */
function FileUpload({
  label,
  hint,
  accept = 'image/*,.pdf',
  fileName = null,
  icon = null,
  onPick,
  style = {}
}) {
  const filled = Boolean(fileName);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      background: filled ? 'var(--accent-soft)' : 'var(--surface-elevated)',
      border: `1.5px dashed ${filled ? 'var(--border-accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: 16,
      cursor: 'pointer',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: filled ? 'var(--accent)' : 'var(--glass)',
      color: filled ? 'var(--on-accent)' : 'var(--text-secondary)',
      fontSize: 20
    }
  }, icon || (filled ? '✓' : '＋')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, filled ? fileName : label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: filled ? 'var(--accent)' : 'var(--text-tertiary)'
    }
  }, filled ? 'Uploaded · tap to replace' : hint || 'PDF or image, up to 10MB')));
}
Object.assign(__ds_scope, { FileUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text / textarea input on dark glass. Label sits above; focus lights the
 * accent ring. Use `as="textarea"` for the seeker description field.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: as === 'textarea' ? 'flex-start' : 'center',
      gap: 10,
      background: 'var(--surface-elevated)',
      border: `1px solid ${error ? 'var(--danger)' : focused ? 'var(--border-accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: as === 'textarea' ? '14px 16px' : '0 16px',
      height: as === 'textarea' ? 'auto' : 52,
      boxShadow: focused && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'flex',
      paddingTop: as === 'textarea' ? 2 : 0
    }
  }, leadingIcon), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    rows: as === 'textarea' ? 4 : undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      width: '100%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)',
      resize: as === 'textarea' ? 'vertical' : 'none',
      lineHeight: 'var(--lh-normal)',
      padding: 0,
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RoleCard.jsx
try { (() => {
/**
 * Large selectable role tile — the Step 1 role-selection gate
 * (Seeker vs Employer). Selected state lights the lime border + glow.
 */
function RoleCard({
  title,
  description,
  icon = null,
  selected = false,
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSelect,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      width: '100%',
      textAlign: 'left',
      background: selected ? 'var(--accent-soft)' : 'var(--surface-card)',
      border: `1.5px solid ${selected ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      cursor: 'pointer',
      boxShadow: selected ? '0 10px 30px var(--accent-glow)' : 'var(--shadow-sm)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: selected ? 'var(--accent)' : 'var(--glass)',
      color: selected ? 'var(--on-accent)' : 'var(--text-primary)',
      fontSize: 26
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-snug)'
    }
  }, description)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flexShrink: 0,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: selected ? 'var(--accent)' : 'transparent',
      border: `2px solid ${selected ? 'var(--accent)' : 'var(--border-strong)'}`,
      color: 'var(--on-accent)',
      fontSize: 13,
      fontWeight: 700,
      transition: 'all var(--dur-fast)'
    }
  }, selected ? '✓' : ''));
}
Object.assign(__ds_scope, { RoleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RoleCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Pill toggle switch — used for the "view mode" flip (Seeker ⇄ Employer)
 * and binary settings. Lime track when on.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 50,
      height: 30,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--surface-pressed)',
      border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-standard)',
      boxShadow: checked ? '0 4px 14px var(--accent-glow)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: checked ? 'var(--on-accent)' : 'var(--text-secondary)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Accordion.jsx
try { (() => {
/**
 * Single expandable accordion section — the Main Category row in the filter
 * overlay. Header toggles; body slides + fades open. Compose a list of these
 * to build the nested category filter.
 */
function Accordion({
  title,
  count,
  open = false,
  onToggle,
  children,
  style = {}
}) {
  const bodyRef = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    if (bodyRef.current) setH(bodyRef.current.scrollHeight);
  }, [children, open]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '18px 4px',
      textAlign: 'left',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: open ? 'var(--accent)' : 'var(--text-primary)',
      transition: 'color var(--dur-fast)'
    }
  }, title), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)'
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: open ? 'var(--accent)' : 'var(--text-secondary)',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-base) var(--ease-standard), color var(--dur-fast)',
      display: 'inline-block'
    }
  }, "\u2304")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: open ? h : 0,
      opacity: open ? 1 : 0,
      overflow: 'hidden',
      transition: 'height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: bodyRef,
    style: {
      paddingBottom: 12
    }
  }, children)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/overlays/SlideSheet.jsx
try { (() => {
/**
 * Full-screen slide-up sheet — the "Filter & Show" overlay and any modal
 * panel. Scrim fades in; the sheet glides up from the bottom with rounded
 * top corners, a grab handle, sticky title, and a sticky footer action slot.
 */
function SlideSheet({
  open = false,
  title,
  onClose,
  footer = null,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      backdropFilter: 'blur(2px)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: '92%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-raised)',
      borderTopLeftRadius: 'var(--radius-2xl)',
      borderTopRightRadius: 'var(--radius-2xl)',
      borderTop: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sheet)',
      transform: open ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 999,
      background: 'var(--border-strong)'
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'var(--glass)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '0 20px',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px calc(14px + var(--safe-bottom))',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-raised)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { SlideSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/SlideSheet.jsx", error: String((e && e.message) || e) }); }

// components/rating/StarRating.jsx
try { (() => {
/**
 * The 1-to-10 admin rating indicator. Renders ten star pips; filled pips are
 * lime, empty are hairline. A numeric "N / 10" chip sits alongside.
 * Read-only by default; pass `interactive` + `onRate` for the admin console.
 *
 * Shown to a seeker when they view an APPROVED employer's card after a match.
 */
function StarRating({
  value = 0,
  max = 10,
  interactive = false,
  onRate,
  size = 18,
  showValue = true,
  style = {}
}) {
  const [hover, setHover] = React.useState(0);
  const active = hover || value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.18
    },
    onMouseLeave: () => interactive && setHover(0)
  }, Array.from({
    length: max
  }).map((_, i) => {
    const filled = i < active;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onMouseEnter: () => interactive && setHover(i + 1),
      onClick: () => interactive && onRate && onRate(i + 1),
      style: {
        fontSize: size,
        lineHeight: 1,
        cursor: interactive ? 'pointer' : 'default',
        color: filled ? 'var(--accent)' : 'var(--border-strong)',
        textShadow: filled ? '0 0 8px var(--accent-glow)' : 'none',
        transition: 'color var(--dur-fast), transform var(--dur-fast)',
        transform: interactive && hover === i + 1 ? 'scale(1.18)' : 'scale(1)'
      }
    }, "\u2605");
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 1,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      fontSize: size * 0.92,
      padding: '3px 9px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--glass)',
      border: '1px solid var(--border-default)'
    }
  }, active, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: size * 0.7
    }
  }, "/", max)));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/rating/StarRating.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/OnboardScreens.jsx
try { (() => {
// Onboarding screens: Role select → Seeker profile OR Employer docs → Awaiting approval
// Exports: RoleSelectScreen, SeekerOnboardScreen, EmployerOnboardScreen, AwaitingApprovalScreen

function RoleSelectScreen({
  onSelectRole
}) {
  const [role, setRole] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '100px 24px 40px',
      boxSizing: 'border-box',
      background: 'var(--bg-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      overflow: 'hidden',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.jpeg",
    alt: "Abyssinia Jobs",
    style: {
      width: '82%',
      height: '82%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "abyssinia ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "jobs"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      marginBottom: 10
    }
  }, "How will you", /*#__PURE__*/React.createElement("br", null), "use the app?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "Choose your role. You can switch later.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, [{
    id: 'SEEKER',
    icon: 'user-circle',
    title: 'I\'m looking for work',
    desc: 'Build a video profile, get discovered by employers.'
  }, {
    id: 'EMPLOYER',
    icon: 'briefcase',
    title: 'I\'m hiring',
    desc: 'Browse verified talent, find your next great hire.'
  }].map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    onClick: () => setRole(r.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      width: '100%',
      textAlign: 'left',
      background: role === r.id ? 'rgba(212,255,0,0.09)' : 'var(--surface-card)',
      border: `1.5px solid ${role === r.id ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 22,
      padding: '18px 20px',
      cursor: 'pointer',
      boxShadow: role === r.id ? '0 10px 30px rgba(212,255,0,0.18)' : 'none',
      transition: 'all 240ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 15,
      background: role === r.id ? 'var(--accent)' : 'var(--surface-elevated)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: role === r.id ? 'var(--on-accent)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 24,
    color: role === r.id ? 'var(--on-accent)' : 'var(--text-secondary)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: 4
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      lineHeight: 1.4
    }
  }, r.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: `2px solid ${role === r.id ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: role === r.id ? 'var(--accent)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'var(--on-accent)',
      fontSize: 12,
      fontWeight: 700
    }
  }, role === r.id ? '✓' : '')))), /*#__PURE__*/React.createElement("button", {
    onClick: () => role && onSelectRole(role),
    style: {
      marginTop: 24,
      width: '100%',
      height: 56,
      borderRadius: 999,
      border: 'none',
      cursor: role ? 'pointer' : 'not-allowed',
      background: role ? 'var(--accent)' : 'var(--surface-elevated)',
      color: role ? 'var(--on-accent)' : 'var(--text-tertiary)',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 800,
      boxShadow: role ? '0 8px 24px rgba(212,255,0,0.4)' : 'none',
      transition: 'all 240ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, "Continue \u2192"));
}
function SeekerOnboardScreen({
  onComplete
}) {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [link, setLink] = React.useState('');
  const [photo, setPhoto] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-base)',
      boxSizing: 'border-box',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '100px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, "Build your profile"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "You'll be live and discoverable instantly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPhoto('portrait.jpg'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 16,
      borderRadius: 18,
      background: photo ? 'rgba(212,255,0,0.07)' : 'var(--surface-elevated)',
      border: `1.5px dashed ${photo ? 'var(--accent)' : 'var(--border-strong)'}`,
      cursor: 'pointer',
      textAlign: 'left',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: photo ? 'var(--accent)' : 'var(--glass)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: photo ? 'var(--on-accent)' : 'var(--text-secondary)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: photo ? 'check' : 'camera',
    size: 22,
    color: photo ? '#000' : 'var(--text-secondary)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, photo ? photo : 'Portrait photo'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: photo ? 'var(--accent)' : 'var(--text-tertiary)'
    }
  }, photo ? 'Uploaded · tap to replace' : 'Your best headshot or clear photo'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Selam Tesfaye",
    style: {
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      borderRadius: 14,
      padding: '14px 16px',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "About you"), /*#__PURE__*/React.createElement("textarea", {
    value: desc,
    onChange: e => setDesc(e.target.value),
    placeholder: "A short pitch \u2014 2\u20133 sentences about your work\u2026",
    rows: 3,
    style: {
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      borderRadius: 14,
      padding: '14px 16px',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      outline: 'none',
      resize: 'none',
      width: '100%',
      boxSizing: 'border-box',
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "Video pitch link"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      borderRadius: 14,
      padding: '0 16px',
      height: 52
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("input", {
    value: link,
    onChange: e => setLink(e.target.value),
    placeholder: "YouTube or TikTok URL",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, "Optional \u2014 but 3\xD7 more likely to be discovered."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    style: {
      width: '100%',
      height: 56,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 800,
      boxShadow: '0 8px 24px rgba(212,255,0,0.4)'
    }
  }, "Go live \u2713")));
}
function EmployerOnboardScreen({
  onSubmit
}) {
  const [license, setLicense] = React.useState(null);
  const [ownerId, setOwnerId] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-base)',
      padding: '100px 24px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.03em'
    }
  }, "Verify your business"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 32px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "We review your documents within 24 hrs. You'll be notified when approved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1
    }
  }, [{
    key: 'license',
    label: 'Commercial license',
    hint: 'Official business registration doc',
    icon: 'file-text',
    val: license,
    set: setLicense
  }, {
    key: 'owner',
    label: 'Owner / Director ID',
    hint: 'National ID or passport photo',
    icon: 'credit-card',
    val: ownerId,
    set: setOwnerId
  }].map(f => /*#__PURE__*/React.createElement("button", {
    key: f.key,
    onClick: () => f.set(f.key + '-doc.pdf'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 18,
      borderRadius: 20,
      background: f.val ? 'rgba(212,255,0,0.07)' : 'var(--surface-elevated)',
      border: `1.5px dashed ${f.val ? 'var(--accent)' : 'var(--border-strong)'}`,
      cursor: 'pointer',
      textAlign: 'left',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: f.val ? 'var(--accent)' : 'var(--glass)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.val ? 'check' : f.icon,
    size: 22,
    color: f.val ? '#000' : 'var(--text-secondary)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, f.val || f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: f.val ? 'var(--accent)' : 'var(--text-tertiary)'
    }
  }, f.val ? 'Uploaded · tap to replace' : f.hint))))), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    disabled: !license || !ownerId,
    style: {
      width: '100%',
      height: 56,
      borderRadius: 999,
      border: 'none',
      cursor: license && ownerId ? 'pointer' : 'not-allowed',
      background: license && ownerId ? 'var(--accent)' : 'var(--surface-elevated)',
      color: license && ownerId ? 'var(--on-accent)' : 'var(--text-tertiary)',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 800,
      boxShadow: license && ownerId ? '0 8px 24px rgba(212,255,0,0.4)' : 'none',
      transition: 'all 240ms'
    }
  }, "Submit for review"));
}
function AwaitingApprovalScreen({
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--bg-base)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 26,
      background: 'rgba(255,197,61,0.15)',
      border: '1.5px solid rgba(255,197,61,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 40,
    color: "var(--status-pending)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, "Awaiting Approval"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, "Your documents are under review. We'll notify you within 24 hours once your account is approved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center',
      padding: '18px 24px',
      borderRadius: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      width: '100%',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "Your documents are encrypted and reviewed by our admin team. No access until approval.")), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    style: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      borderRadius: 999,
      padding: '12px 24px',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "\u2190 Back to start"));
}
Object.assign(window, {
  RoleSelectScreen,
  SeekerOnboardScreen,
  EmployerOnboardScreen,
  AwaitingApprovalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/OnboardScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/SwipeScreens.jsx
try { (() => {
// Swipe feed + filter overlay screens
// Exports: SwipeFeedScreen, FilterScreen

const SEEKERS = [{
  id: 1,
  name: 'Selam Tesfaye',
  role: 'Video Editor',
  location: 'Addis Ababa',
  verified: true,
  rating: null,
  bg: 'linear-gradient(160deg,#1a0a2e 0%,#2d1b4e 40%,#5c2d6e 100%)',
  videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
}, {
  id: 2,
  name: 'Abel Girma',
  role: 'Cinematographer',
  location: 'Addis Ababa',
  verified: false,
  rating: null,
  bg: 'linear-gradient(160deg,#0a1a2e 0%,#0f3460 50%,#16637a 100%)',
  videoUrl: 'https://youtube.com/watch?v=abc123'
}, {
  id: 3,
  name: 'Mekdes Alemu',
  role: 'Motion Designer',
  location: 'Nairobi',
  verified: true,
  rating: null,
  bg: 'linear-gradient(160deg,#1a0a0a 0%,#4e1b1b 50%,#7a3a1a 100%)',
  videoUrl: ''
}, {
  id: 4,
  name: 'Yonas Bekele',
  role: 'Graphic Designer',
  location: 'Addis Ababa',
  verified: false,
  rating: null,
  bg: 'linear-gradient(160deg,#0a1a0a 0%,#1b3a1b 50%,#2d5c2d 100%)',
  videoUrl: 'https://youtube.com/watch?v=xyz789'
}];
const CATEGORIES = [{
  id: 'ca',
  title: 'Creative Arts & Media',
  subs: ['Video Editor', 'Cinematographer', 'Motion Designer', 'Photographer', 'Illustrator']
}, {
  id: 'eng',
  title: 'Engineering & Tech',
  subs: ['Frontend Developer', 'Backend Developer', 'Mobile Developer', 'DevOps Engineer']
}, {
  id: 'hos',
  title: 'Hospitality & Service',
  subs: ['Barista', 'Waiter', 'Chef', 'Event Coordinator']
}, {
  id: 'biz',
  title: 'Business & Finance',
  subs: ['Accountant', 'HR Manager', 'Business Analyst', 'Project Manager']
}];
function DualSwipeCard({
  seeker,
  onLike,
  onPass
}) {
  const [slide, setSlide] = React.useState(0); // 0=photo, 1=video
  const [dragging, setDragging] = React.useState(false);
  const [dragX, setDragX] = React.useState(0);
  const startX = React.useRef(0);
  function handlePointerDown(e) {
    startX.current = e.clientX;
    setDragging(true);
  }
  function handlePointerMove(e) {
    if (dragging) setDragX(e.clientX - startX.current);
  }
  function handlePointerUp() {
    if (Math.abs(dragX) > 80) {
      dragX > 0 ? onLike() : onPass();
    }
    setDragging(false);
    setDragX(0);
  }
  const rotate = dragX * 0.05;
  const overlayDir = dragX > 40 ? 'like' : dragX < -40 ? 'pass' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 28,
      background: seeker.bg,
      overflow: 'hidden',
      cursor: dragging ? 'grabbing' : 'grab',
      transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
      transition: dragging ? 'none' : 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
      userSelect: 'none'
    },
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp
  }, slide === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 130,
      height: 130,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      border: '2px solid rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)'
    }
  }, seeker.name.split(' ').map(w => w[0]).join(''))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '55%',
      background: 'linear-gradient(to top, rgba(6,6,7,0.95) 0%, rgba(6,6,7,0.6) 50%, rgba(6,6,7,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, seeker.name), seeker.verified && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--verify)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      boxShadow: '0 0 10px rgba(46,168,255,0.5)',
      flexShrink: 0
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)'
    }
  }, seeker.role), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.4)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.5)'
    }
  }, seeker.location)), seeker.videoUrl && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setSlide(1);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 14,
    color: "#fff",
    strokeWidth: 2
  }), " Watch pitch")), overlayDir === 'like' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(212,255,0,0.12)',
      borderRadius: 28,
      border: '2px solid var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 900,
      color: 'var(--accent)',
      letterSpacing: 3,
      transform: 'rotate(-12deg)',
      textShadow: '0 0 20px var(--accent-glow)'
    }
  }, "LIKE")), overlayDir === 'pass' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(255,90,90,0.10)',
      borderRadius: 28,
      border: '2px solid var(--danger)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 900,
      color: 'var(--danger)',
      letterSpacing: 3,
      transform: 'rotate(12deg)'
    }
  }, "PASS"))), slide === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#050507'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 16,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'rgba(212,255,0,0.12)',
      border: '1.5px solid var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 32,
    color: "var(--accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, "Video pitch"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-tertiary)',
      padding: '6px 12px',
      background: 'var(--surface-card)',
      borderRadius: 8,
      maxWidth: '80%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, seeker.videoUrl)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setSlide(0);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px',
      borderRadius: 999,
      background: 'var(--glass)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16,
    color: "var(--text-primary)"
  }), " Photo"))));
}
function SwipeFeedScreen({
  onOpenFilter
}) {
  const [idx, setIdx] = React.useState(0);
  const [gone, setGone] = React.useState([]); // liked/passed ids
  const seeker = SEEKERS[idx % SEEKERS.length];
  const next = () => {
    setGone(g => [...g, seeker.id]);
    setIdx(i => i + 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 20px 12px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-accent)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19
    }
  }, "A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "abyssinia")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenFilter,
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 16px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, SEEKERS[(idx + 1) % SEEKERS.length] && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '8px 28px 8px',
      borderRadius: 28,
      background: SEEKERS[(idx + 1) % SEEKERS.length].bg,
      opacity: 0.6,
      transform: 'scale(0.96)',
      transformOrigin: 'bottom center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      margin: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(DualSwipeCard, {
    key: idx,
    seeker: seeker,
    onLike: next,
    onPass: next
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      flexShrink: 0,
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: next,
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 26,
    color: "var(--danger)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    style: {
      width: 70,
      height: 70,
      borderRadius: '50%',
      background: 'var(--accent)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 10px 28px rgba(212,255,0,0.45)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 30,
    color: "var(--on-accent)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 22,
    color: "var(--text-secondary)"
  }))));
}
function FilterScreen({
  onClose
}) {
  const [open, setOpen] = React.useState('ca');
  const [sel, setSel] = React.useState({
    'Video Editor': true
  });
  const toggle = id => setOpen(o => o === id ? null : id);
  const check = sub => setSel(s => ({
    ...s,
    [sub]: !s[sub]
  }));
  const selCount = Object.values(sel).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(6,6,7,0.72)',
      backdropFilter: 'blur(2px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: '88%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-raised)',
      borderTopLeftRadius: 34,
      borderTopRightRadius: 34,
      borderTop: '1px solid var(--border-default)',
      boxShadow: '0 -16px 48px rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 999,
      background: 'var(--border-strong)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, "Filter & Show"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'var(--glass)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '0 20px',
      flex: 1
    }
  }, CATEGORIES.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat.id,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(cat.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '16px 4px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: open === cat.id ? 'var(--accent)' : 'var(--text-primary)',
      transition: 'color 140ms'
    }
  }, cat.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, cat.subs.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: open === cat.id ? 'var(--accent)' : 'var(--text-tertiary)',
      transform: open === cat.id ? 'rotate(180deg)' : 'none',
      transition: 'transform 240ms',
      display: 'inline-block'
    }
  }, "\u2304")), open === cat.id && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 10
    }
  }, cat.subs.map(sub => /*#__PURE__*/React.createElement("label", {
    key: sub,
    onClick: () => check(sub),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 4px',
      cursor: 'pointer',
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      background: sel[sub] ? 'var(--accent)' : 'transparent',
      border: `1.5px solid ${sel[sub] ? 'var(--accent)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-accent)',
      fontSize: 13,
      fontWeight: 700,
      flexShrink: 0,
      transition: 'all 140ms'
    }
  }, sel[sub] ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: sel[sub] ? 'var(--text-primary)' : 'var(--text-secondary)',
      flex: 1
    }
  }, sub))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 34px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-raised)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: '100%',
      height: 54,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 800,
      boxShadow: '0 8px 24px rgba(212,255,0,0.4)'
    }
  }, "Apply filters ", selCount > 0 ? `(${selCount})` : ''))));
}
Object.assign(window, {
  SwipeFeedScreen,
  FilterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/SwipeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/utils.jsx
try { (() => {
// Shared icon helper using Lucide UMD + theme colors
// Exports: Icon, PhoneShell, SectionHeader, NavBar to window

function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style = {}
}) {
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
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', color);
    svg.setAttribute('stroke-width', strokeWidth);
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    // Lucide UMD: def is an array of [tagName, attrsObject] pairs directly
    (Array.isArray(def) ? def : []).forEach(([tag, attrs]) => {
      if (typeof tag !== 'string') return;
      const ch = document.createElementNS(ns, tag);
      Object.entries(attrs || {}).forEach(([k, v]) => ch.setAttribute(k, v));
      svg.appendChild(ch);
    });
    el.appendChild(svg);
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  });
}
function PhoneShell({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 52,
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bg-base)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(255,255,255,0.09)',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 32,
      background: '#0a0a0b',
      borderRadius: 20,
      zIndex: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 52,
      zIndex: 99,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 28px 8px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 14,
    color: "var(--text-primary)",
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery",
    size: 14,
    color: "var(--text-primary)",
    strokeWidth: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children));
}
function NavBar({
  title,
  leftAction,
  rightAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 0,
      right: 0,
      height: 52,
      zIndex: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box'
    }
  }, leftAction || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, title), rightAction || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36
    }
  }));
}
Object.assign(window, {
  Icon,
  PhoneShell,
  NavBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/utils.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FileUpload = __ds_scope.FileUpload;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RoleCard = __ds_scope.RoleCard;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.SlideSheet = __ds_scope.SlideSheet;

__ds_ns.StarRating = __ds_scope.StarRating;

})();
