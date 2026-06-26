---
name: abyssinia-jobs-design
description: Use this skill to generate well-branded interfaces and assets for Abyssinia Jobs, a premium mobile-first video-centric job platform targeting East Africa. Contains essential design guidelines, colors, typography, component library, and a full mobile UI kit for prototyping or production reference.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, read the guidelines here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** Abyssinia Jobs — dark, electric, video-first job discovery for East Africa  
**Namespace:** `window.AbyssiniaJobsDesignSystem_633419`  
**Fonts (Google Fonts):** Space Grotesk (display), Manrope (body), Space Mono (data)  
**Icons:** Lucide CDN — `unpkg.com/lucide@latest/dist/umd/lucide.min.js`  

### Core design decisions
- Background: `#0B0B0C` base → `#121214` raised → `#161619` card
- Accent (use once per screen): `#D4FF00` lime with `rgba(212,255,0,0.45)` glow
- Verification ONLY: `#2EA8FF` neon blue — never repurposed
- Radius: `999px` pill buttons, `22px` cards, `28px` swipe cards
- Motion: enter = `cubic-bezier(0.16,1,0.3,1)`, press = `scale(0.97)`, 240ms base

### Components available
Button · IconButton · Input · FileUpload · Switch · Checkbox · RoleCard  
Card · Avatar · Badge · VerifiedBadge · Tag  
StarRating (1–10 admin scale)  
Accordion · SlideSheet

### UI Kit
`ui_kits/mobile_app/index.html` — full interactive prototype  
Screens: Role selection → Seeker onboard → Employer docs → Awaiting approval → Swipe feed → Filter overlay
