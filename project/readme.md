# Abyssinia Jobs Design System

**Product:** Abyssinia Jobs — a premium, mobile-first, video-centric job platform for the Ethiopian and East African market. Inspired by modern card-swiping discovery apps, the product lets job seekers build short video pitch profiles and swipe-discover employers; employers browse verified talent and post roles.

**Design language:** ultra-dark charcoal backgrounds, a single electric lime-green accent, neon-blue verification marks, and soft-glass card surfaces — bold, confident, and product-grade.

---

## Sources

No external codebase or Figma file was attached. This design system was built from the product brief and design language specification provided directly. Stored here for reference:

- **Brief origin:** product spec for "Abyssinia Jobs" detailing stack (Next.js 14, Tailwind, Prisma), schema, components, and visual language
- **Referenced mockup:** `original-ffb67f09cc39d3f376ad3f8cdcb7ed20.webp` — mentioned in brief but not supplied
- **Fonts:** Google Fonts substitutes (Space Grotesk + Manrope + Space Mono) — see [CAVEATS](#caveats)

---

## Content Fundamentals

**Tone:** Direct, confident, no filler. The copy trusts the user — short sentences, active voice, no corporate hedging.

**Voice examples:**
- "Get discovered." (not "Help employers find you more easily")
- "You're live!" (not "Your profile has been successfully created")
- "Awaiting Approval" (not "Your application is currently under administrative review")
- "Browse employers →" (not "Proceed to explore available employer opportunities")

**Casing:** Sentence case for almost everything. ALL-CAPS only for eyebrow labels (PENDING, ACTIVE) and `SCREAMING_SNAKE_CASE` status enums in code.

**Pronouns:** Second-person "you" throughout. No "we" except in legal/trust copy. No emoji in UI chrome — the dark aesthetic doesn't need them.

**Numbers:** Displayed in Space Mono for data fidelity (ratings, counts, durations). Never hide the numbers — "8/10" not just ★★★★★★★★.

**Error messages:** Blame the system, never the user. "Something went wrong" not "You entered an invalid value."

**Calls to action:** One primary action per screen, lime, pill-shaped. Always labeled with a verb: "Continue", "Go live", "Apply filters", "Submit for review."

---

## Visual Foundations

### Color
Two temperatures on a black field: **electric lime** (#D4FF00) for primary actions and active states; **neon blue** (#2EA8FF) for public verification exclusively. Every other element recedes.

- Background stack: `#0B0B0C` → `#121214` → `#161619` → `#1C1C20` (base → raised → card → elevated)
- Lime used for: primary buttons, active toggles, selected states, the verification ✓ glow on cards, active accordion headers
- Blue used for: the public verification checkmark badge *only*. Never repurposed.
- Status colors: amber (#FFC53D) = pending, green (#41E08B) = approved, red (#FF5A5A) = rejected

### Typography
- **Display / headlines:** Space Grotesk — confident, technical, tight letter-spacing (−0.02em to −0.03em), weight 700
- **Body / UI:** Manrope — clean, friendly, high legibility on dark. Default weight 500; labels 600; CTAs 800
- **Data / mono:** Space Mono — ratings, counts, timestamps, status labels. 700 weight for emphasis

### Backgrounds
No gradients on chrome. Imagery (swipe cards) may use rich dark gradients as photo placeholders; real portraits fill these frames in production. The protection gradient `scrim-grad` runs bottom-to-top over every photo to ensure text legibility.

No background patterns or textures — the darkness *is* the canvas.

### Cards
Rounded-2xl (`22px`) for standard cards; rounded-3xl (`28px`) for the main swipe card. Always `border: 1px solid rgba(255,255,255,0.07–0.11)`. Shadow: `0 12px 32px rgba(0,0,0,0.5)`. Glass variant adds `backdrop-filter: blur(18px)` for overlays on imagery.

### Animation & Motion
Standard: `cubic-bezier(0.4,0,0.2,1)` — neutral, polished.  
Enter/expand: `cubic-bezier(0.16,1,0.3,1)` — fast start, gentle settle.  
Accent pops: `cubic-bezier(0.34,1.4,0.5,1)` — subtle spring overshoot on lime elements.  
**No bounce, no wiggle, no looping decorations.** Swipe card fling: 280ms with momentum feel.

### Hover & Press States
- Buttons: `transform: scale(0.97)` on press, 140ms
- IconButtons: `scale(0.92)` on press
- Lime button: shadow dims slightly on press (accent-press color)
- Row items (checkboxes, accordions): no hover background shift — mobile-first, pointer is unreliable

### Transparency & Blur
`backdrop-filter: blur(18px)` on glass cards over imagery only. Never on flat chrome — it adds visual noise without payoff. Scrim overlays: `backdrop-filter: blur(2px)` to soften background without obscuring context.

### Borders & Hairlines
Three levels: subtle (`rgba(255,255,255,0.07)`), default (`0.11`), strong (`0.18`). Lime-tinted border (`rgba(212,255,0,0.55)`) on selected / focused states. All `1px solid`.

### Imagery
No AI-generated imagery. Portraits are user-uploaded. Use gradient placeholder backgrounds (dark, rich, directional) until real photos load. Color palette: deep indigo-purple, midnight blue, or near-black warm tones — never bright or saturated.

### Corner Radii
Pill (`999px`) for all buttons and badges. `22px` cards, `28px` swipe cards, `34px` bottom-sheet top corners, `12px` inputs and small panels.

---

## Iconography

**System:** [Lucide](https://lucide.dev) — 24×24 grid, `stroke-width: 1.75`, `stroke-linecap: round`, `stroke-linejoin: round`. Loaded via `unpkg.com/lucide@latest/dist/umd/lucide.min.js`.

**Size usage:**
- `20px` — standard UI (buttons, nav, list rows)
- `24px` — card overlays, prominent actions
- `14px` — status bar, inline labels

**Color:**
- Default icon color: `var(--text-secondary)` — recedes on dark
- Active / selected: `var(--accent)` lime
- Verification checkmark: `var(--verify)` blue, never lime
- Danger/pass action: `var(--danger)` red

**No emoji as icons.** No unicode symbols as icons (except `⌄` for the accordion caret — acceptable, inherits color). No hand-rolled decorative SVG illustrations.

**Brand assets in `assets/`:**
- `logo-mark.svg` — lime rounded-square monogram, 200×200
- `logo-lockup.svg` — compact 124×32 horizontal lockup (mark + wordmark)

*Both are placeholder designs pending official brand artwork — see [CAVEATS](#caveats).*

---

## Design System Files

| Path | Description |
|------|-------------|
| `styles.css` | Global entry point — imports only |
| `tokens/colors.css` | Full color system (ink, lime, blue, status, semantic) |
| `tokens/typography.css` | Font families, scale, weights, line-heights |
| `tokens/spacing.css` | 4px grid, semantic aliases, layout constants |
| `tokens/radius.css` | xs→2xl + pill |
| `tokens/shadows.css` | Drop shadows, lime/blue glows, focus rings |
| `tokens/motion.css` | Durations + easing curves |
| `tokens/fonts.css` | Google Fonts @import |
| `components/buttons/` | Button, IconButton |
| `components/forms/` | Input, FileUpload, Switch, Checkbox, RoleCard |
| `components/data-display/` | Card, Avatar, Badge, VerifiedBadge, Tag |
| `components/rating/` | StarRating (1–10) |
| `components/overlays/` | Accordion, SlideSheet |
| `ui_kits/mobile_app/` | Interactive mobile prototype (onboarding → swipe feed → filter) |
| `guidelines/` | Foundation specimen cards |
| `assets/` | Logo mark + lockup SVG |

---

## Caveats

1. **Fonts:** Space Grotesk, Manrope, and Space Mono are Google Fonts substitutes. Replace with licensed brand typefaces when available — swap the `@import` in `tokens/fonts.css` and add `@font-face` rules pointing to self-hosted binaries.

2. **Logo:** `assets/logo-mark.svg` and `assets/logo-lockup.svg` are placeholder typographic marks. Replace with official brand artwork.

3. **Photos:** No stock or AI-generated imagery used. Swipe card backgrounds use CSS gradients as placeholders — real user portraits replace these in production.

4. **Icons:** Lucide CDN. If a self-hosted icon set is required, download and copy to `assets/icons/`.

5. **No Figma, no codebase:** System built from brief only. Once a codebase or Figma is available, audit component designs against real product screens and update accordingly.
