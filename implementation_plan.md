# Portfolio Rebuild — Kuya Juan Brand System

Rebuild the existing Next.js portfolio into a one-page resume-focused personal site that faithfully reuses the Kuya Juan "Noir Serif" brand tokens, restructured around Lorrenz's resume with heavier motion, SVG animation, and the exact color/type system specified.

## Design Read

Reading this as: **solo developer portfolio for hiring managers / clients**, with a **premium dark brand-immersive language**, leaning toward **the existing Next.js + Tailwind v4 stack, native CSS vars, framer-motion for motion, raw SVG for line-draw animations**. The brand system (Playfair Display + Bebas Neue + Montserrat, Ember-on-black palette) is already established — no new aesthetic decisions needed, only faithful reapplication.

**Dials:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 9` · `VISUAL_DENSITY: 3`

---

## User Review Required

> [!IMPORTANT]
> **Font change from Inter → Montserrat + Bebas Neue.** The existing site uses Inter as the UI font. The brief explicitly requires Montserrat (body/labels) and Bebas Neue (numerals/stats). This means replacing the `Inter` import in `layout.tsx` with `Montserrat` and `Bebas_Neue`, and re-wiring the `--font-ui` and adding a new `--font-impact` CSS var. All existing component references to `var(--font-ui)` will seamlessly pick up Montserrat.

> [!IMPORTANT]
> **Background change to TRUE BLACK `#000000`.** The brief overrides the warm-brown `#0A0707` obsidian with pure black. Cards/panels use `#120D0D`. This shifts the entire dark-mode palette.

> [!WARNING]
> **Light mode removal.** The brief specifies no light mode — the site is permanently dark with TRUE BLACK base. The existing light-mode tokens and ThemeProvider toggle will be removed. If you want to keep light mode as a hidden option, let me know.

## Open Questions

> [!IMPORTANT]
> **Content accuracy.** I'll use the real data from the existing components (PRIME Philippines internship, HakotLahat, Kuya Juan projects, etc.) and restructure it into the brief's format (bullet-fact About, badge/level Skills, timeline Experience with ONE outcome line per entry). Please confirm if any resume data needs updating.

> [!IMPORTANT]
> **Contact email / social links.** I'll carry over `amarillelorrenz@gmail.com`, GitHub (`Juroov`), and Facebook from the existing Contact component. Confirm if these are still correct or if new links should be added.

---

## Proposed Changes

### 1. Layout & Font System

#### [MODIFY] [layout.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/layout.tsx)
- Replace `Inter` import with `Montserrat` and `Bebas_Neue` from `next/font/google`
- Wire up `--font-ui` → Montserrat, `--font-impact` → Bebas Neue, keep `--font-display` → Playfair Display
- Remove `ThemeProvider` wrapper (no light mode)
- Remove dark-mode flash-prevention script
- Keep `SmoothScroll` wrapper
- Update metadata title/description

---

### 2. Global CSS Token Overhaul

#### [MODIFY] [globals.css](file:///c:/Users/Lorrenz/Desktop/jurov/app/globals.css)
- Overwrite `:root` dark tokens:
  - `--bg: #000000` (TRUE BLACK)
  - `--bg-card: #120D0D`
  - `--accent: #C41E3A` (Ember)
  - `--accent-glow: rgba(255,77,94,0.40)` (Ember Bright glow)
  - `--accent-bright: #FF4D5E` (Ember Bright — for stat numbers, italic accents)
  - `--accent-deep: #5C0C1D` (Ember Deep — gradient shadow)
  - `--text-primary: #F4EEE7` (Bone)
  - `--text-secondary: #AE9E97` (Ash)
  - `--text-faint: #7E706A` (Ash Dim)
- Remove `[data-theme="light"]` block entirely
- Add `--font-impact` variable for Bebas Neue
- Add custom smooth-scroll easing (slower, more deliberate) with `prefers-reduced-motion` fallback
- Add ghost-word watermark styles
- Add SVG line-draw keyframes
- Add letter-by-letter wave hover animation for links
- Add button hover lift animation (translateY + shadow)
- Add glow-pulse CTA keyframe

---

### 3. Intro Sequence (NEW)

#### [NEW] [IntroSequence.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/IntroSequence.tsx)
- Full-screen overlay on TRUE BLACK
- Shield SVG mark draws its outline via `stroke-dasharray`/`stroke-dashoffset` animation (~1.5s)
- "KJ" letters fade in inside the shield (~0.5s hold)
- Shield scales down + fades as hero content slides/fades in beneath (~1s)
- Total budget ≈ 3s, then overlay removes itself from DOM
- Click/tap anywhere to skip instantly
- `prefers-reduced-motion`: skips straight to hero, no draw

---

### 4. Hero Section (Major Restructure)

#### [MODIFY] [Hero.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Hero.tsx)
- Centered layout: name "Lorrenz Amarille" in Playfair Display with one italic word in Ember Bright
- One-line positioning statement below
- Single CTA button: **"Know More About Me"**
- On click, that button splits into THREE buttons (About · Skills · Experience) with staggered slide/fade animation — not an instant swap
- The button-split doubles as an SVG transition: the shield mark "unfolds" into the three buttons
- Ghost-word watermark behind hero
- Remove existing stat blocks from hero (stats move to About / Experience sections)

---

### 5. View Navigation System (NEW)

#### [NEW] [ViewRouter.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/ViewRouter.tsx)
- Client component managing which "view" is active (About / Skills / Experience)
- Anchor-based routing (`#about`, `#skills`, `#experience`)
- Shared shell: nav bar at top, ghost watermark, footer, TRUE BLACK background
- Smooth cross-fade transition between views
- All three views plus Projects/Contact live on the same page, scrollable

---

### 6. Navbar (Simplify)

#### [MODIFY] [Navbar.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Navbar.tsx)
- Simplify to: wordmark "Lorrenz." on left, nav links (About · Skills · Experience · Contact) on right
- Letter-by-letter wave animation on hover for nav links
- Remove theme toggle
- Keep mobile hamburger menu
- Montserrat uppercase tracked labels

---

### 7. About Section (Restructure to Minimal)

#### [MODIFY] [About.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/About.tsx)
- One positioning line (Playfair Display, italic accent word in Ember Bright)
- 3–4 fact bullets only (no bio paragraph):
  - 📍 Based in Bulacan, Philippines
  - 🎓 BS Computer Engineering, Bulacan State University
  - 💼 Interned at PRIME Philippines (ArgoNavis fleet system)
  - 🔧 Freelance frontend dev & UI/UX designer
- Stats with oversized Bebas Neue numerals in Ember Bright with text-glow
- Ghost-word watermark: "ABOUT"

---

### 8. Skills Section (Restructure to Badge/Level System)

#### [MODIFY] [Skills.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Skills.tsx)
- Badge/tag grid with skill level indicators (not list format)
- Each skill: label + level bar (0–100% filled, Ember gradient fill)
- Categories: Frontend · Design · Tools · Professional
- SVG line-draw icons per skill category (animated on scroll enter)
- Ghost-word watermark: "SKILLS"
- Oversized Bebas Neue category numbers

---

### 9. Experience Section (Vertical SVG Timeline)

#### [MODIFY] [Experience.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Experience.tsx)
- Vertical timeline layout
- SVG line draws itself down the page on scroll
- Dots light up (fill-animate) as each entry enters viewport
- Each entry: role/company, dates, ONE outcome number/line (not duties list):
  - PRIME Philippines: "Built design system for ArgoNavis fleet platform"
  - Microsoft Student Community: "Led external partnerships for 200+ members"
  - DEVCON Manila: "Coordinated 30+ volunteers across 2 conferences"
  - YGG Philippines: "Managed digital assets across 12-month engagement"
- Outcome numbers in oversized Bebas Neue, Ember Bright, with text-glow
- Ghost-word watermark: "EXPERIENCE"

---

### 10. Projects / Proof Section (Image Carousel)

#### [MODIFY] [Projects.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Projects.tsx)
- Use the **actual uploaded screenshot images** (`/real-hakot.png`, `/real-juan.png`, `/project-hakotlahat.png`, `/project-kuyajuan.png`, etc.) — not recreated HTML mockups
- Rounded-corner frames with subtle border
- Hover: zoom + lift effect
- Working carousel with:
  - Prev/next arrow controls
  - Dot indicators
  - Smooth slide/fade transition
  - Touch/swipe support
  - No broken/stuck states
- Ghost-word watermark: "PROOF"

---

### 11. Contact / Commission Section (Emphasized CTA)

#### [MODIFY] [Contact.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Contact.tsx)
- Larger scale than surrounding sections
- "Message Me" headline in Playfair Display
- Glow-pulse CTA button
- Shield logo/icon displayed beside contact details as a signature close
- Social links with wave hover animation
- Keep the form with email/budget/message fields
- Ghost-word watermark: "CONNECT"

---

### 12. Footer (Simplified)

#### [MODIFY] [Footer.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Footer.tsx)
- Wordmark: "Lorrenz." in Playfair Display Italic
- Small copyright line
- Shield SVG mark

---

### 13. Scroll & Motion System

#### [MODIFY] [ScrollReveal.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/ScrollReveal.tsx)
- Slow, eased scroll-triggered fade/rise reveals (longer duration than current)
- Parallax ghost-word watermarks (slower movement)
- All motion respects `prefers-reduced-motion`

#### [MODIFY] [SmoothScroll.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/SmoothScroll.tsx)
- Custom smooth-scroll easing with longer duration (Lenis config)
- Falls back to native scroll under `prefers-reduced-motion`

---

### 14. Component Cleanup

#### [DELETE] [ThemeProvider.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/ThemeProvider.tsx)
No light mode — not needed.

#### [DELETE] [MarqueeStrip.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/MarqueeStrip.tsx)
Not in the new structure.

#### [DELETE] [Commissions.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/Commissions.tsx)
Merged into the Contact/Commission section.

#### [DELETE] [BrowserFrame.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/BrowserFrame.tsx)
Replaced by real image carousel approach.

#### [DELETE] [ProjectPreviewSVG.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/components/ProjectPreviewSVG.tsx)
No longer needed — using real images.

---

### 15. Page Assembly

#### [MODIFY] [page.tsx](file:///c:/Users/Lorrenz/Desktop/jurov/app/page.tsx)
- New order: IntroSequence → Hero → About → Skills → Experience → Projects → Contact → Footer
- Remove MarqueeStrip, Commissions
- Add IntroSequence as first child
- Remove AmbientGlow (replaced by per-section radial glows)

---

## Verification Plan

### Automated Tests
- `npm run build` — ensure no TypeScript or build errors after all changes

### Manual Verification
- Visual check: brand tokens (TRUE BLACK bg, Ember accents, Bone text) match spec
- Intro sequence: shield draws → holds → fades → hero appears (≈3s)
- Click skip on intro works
- "Know More About Me" button splits into 3 buttons with staggered animation
- Bebas Neue numbers are oversized, Ember Bright, glowing
- Image carousel: prev/next, dots, swipe all functional
- SVG timeline line draws on scroll, dots light up
- Letter-by-letter wave on nav hover
- `prefers-reduced-motion` disables all animation
- Mobile responsive: hamburger nav, stacked layouts, touch carousel
