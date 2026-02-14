# Zahnarzt Dold - Implementation Kickstart Plan

## 1. Project Overview

**Project:** Frontend-only prototype for client presentation of the "Zahnarzt Dold" dental practice website.
**Owner:** Dr. med. dent. Christian Dold
**Purpose:** High-end, responsive prototype demonstrating the design, structure, and UX of the final product. No backend integration at this stage. All interactive CTAs and forms are placeholders that trigger a Sonner toast notification ("Erfolg!" / Success).

---

## 2. Tech Stack & Environment

| Layer            | Technology                                           | Notes                                                           |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router)                              | Project already runs Next.js 16.1.6 via `package.json`          |
| Styling          | Tailwind CSS 3.x + shadcn/ui design tokens           | Already configured with `tailwind.config.ts` and `globals.css`  |
| Animation        | Framer Motion                                        | **Needs to be added** to `package.json`                         |
| Icons            | Lucide React (v0.544.0)                              | Already installed                                               |
| UI Primitives    | shadcn/ui (Accordion, Button, Card, Sheet, Sonner)   | Already installed; Sheet needed for mobile nav                  |
| Font             | Geist (via `next/font/google`)                       | Already imported in `layout.tsx`                                |
| Language         | TypeScript                                           | Strict mode enabled                                             |

### Environment Notes

- **Next.js Version Discrepancy:** The user specifies Next.js 15, but `package.json` ships `"next": "16.1.6"`. We will use the **installed Next.js 16** since it is backward-compatible and already configured. No downgrade needed.
- **Framer Motion:** Must be installed before development begins (`pnpm add framer-motion`).
- **No Backend / No Database:** All interactions are frontend-only. No API routes, no server actions, no database integrations.
- **Images:** `next.config.mjs` has `images: { unoptimized: true }`, so external image URLs (Unsplash via `images.unsplash.com`) can be used directly in `<img>` tags or Next.js `<Image>` with appropriate `remotePatterns` config.

---

## 3. Design System

### 3.1 Color Palette (Mapped to Design Tokens)

All colors are expressed as HSL values for the existing shadcn token system in `globals.css`.

| Token               | Role                  | Hex       | HSL Value (H S% L%)     |
| -------------------- | --------------------- | --------- | ------------------------ |
| `--primary`          | Deep Slate Blue       | `#2C3E50` | `210 29% 24%`           |
| `--primary-foreground` | White text on primary | `#FFFFFF` | `0 0% 100%`             |
| `--accent`           | Healing Teal          | `#16A085` | `168 74% 36%`           |
| `--accent-foreground` | White text on accent  | `#FFFFFF` | `0 0% 100%`             |
| `--background`       | Clean White           | `#FFFFFF` | `0 0% 100%`             |
| `--foreground`       | Near Black text       | `#1A1A2E` | `240 27% 14%`           |
| `--secondary`        | Soft Gray sections    | `#F8F9FA` | `210 17% 97%`           |
| `--secondary-foreground` | Dark text on gray | `#2C3E50` | `210 29% 24%`           |
| `--muted`            | Muted backgrounds     | `#F1F3F5` | `210 16% 95%`           |
| `--muted-foreground` | Muted text            | `#6C757D` | `210 7% 46%`            |
| `--border`           | Subtle borders        | `#DEE2E6` | `210 14% 89%`           |
| `--card`             | Card background       | `#FFFFFF` | `0 0% 100%`             |
| `--card-foreground`  | Card text             | `#1A1A2E` | `240 27% 14%`           |
| `--ring`             | Focus ring (teal)     | `#16A085` | `168 74% 36%`           |

### 3.2 Typography

| Element         | Font Family | Weight   | Size (Desktop)    | Size (Mobile)     |
| --------------- | ----------- | -------- | ----------------- | ----------------- |
| H1 (Hero)       | Geist       | 700      | `text-5xl` (48px) | `text-3xl` (30px) |
| H2 (Section)    | Geist       | 600      | `text-3xl` (30px) | `text-2xl` (24px) |
| H3 (Card Title) | Geist       | 600      | `text-xl` (20px)  | `text-lg` (18px)  |
| Body            | Geist       | 400      | `text-base` (16px)| `text-base` (16px)|
| Small / Caption | Geist       | 400      | `text-sm` (14px)  | `text-sm` (14px)  |
| Nav Link        | Geist       | 500      | `text-sm` (14px)  | `text-base` (16px)|
| CTA Button      | Geist       | 600      | `text-sm` (14px)  | `text-sm` (14px)  |

- **Line height:** `leading-relaxed` (1.625) for body text, `leading-tight` (1.25) for headings.
- **Single font family** across the entire site (Geist). No secondary font needed.

### 3.3 Spacing (8-Point Grid System)

All spacing uses Tailwind's default scale aligned to 8px increments:

| Tailwind Class | Value  | Usage                                |
| -------------- | ------ | ------------------------------------ |
| `p-2` / `m-2`  | 8px    | Tight inner padding, icon gaps       |
| `p-4` / `m-4`  | 16px   | Card inner padding, standard gaps    |
| `p-6` / `m-6`  | 24px   | Section inner padding               |
| `p-8` / `m-8`  | 32px   | Section vertical padding             |
| `gap-4`        | 16px   | Grid/flex gap between cards          |
| `gap-6`        | 24px   | Section-level element spacing        |
| `gap-8`        | 32px   | Major section gaps                   |
| `py-16`        | 64px   | Vertical padding between sections    |
| `py-24`        | 96px   | Hero section vertical padding        |

### 3.4 Border Radius & Shadows

| Element       | Radius          | Shadow                                |
| ------------- | --------------- | ------------------------------------- |
| Cards         | `rounded-xl`    | `shadow-sm`, hover: `shadow-lg`       |
| Buttons       | `rounded-lg`    | None                                  |
| Inputs        | `rounded-md`    | None                                  |
| Accordion     | `rounded-lg`    | None                                  |
| Hero Image    | `rounded-2xl`   | `shadow-xl`                           |

---

## 4. Responsive Breakpoint Strategy

Mobile-first approach. Breakpoints follow Tailwind defaults:

| Breakpoint | Prefix | Min Width | Target Devices            |
| ---------- | ------ | --------- | ------------------------- |
| Base       | (none) | 0px       | All mobile phones         |
| `sm`       | `sm:`  | 640px     | Large phones / landscape  |
| `md`       | `md:`  | 768px     | Tablets (iPad Mini, etc.) |
| `lg`       | `lg:`  | 1024px    | Tablets (iPad Pro), small laptops |
| `xl`       | `xl:`  | 1280px    | Desktop                   |

### Bento Grid Layout per Breakpoint

| Breakpoint | Columns | Gap    |
| ---------- | ------- | ------ |
| Base       | 1       | `gap-4` |
| `md:`      | 2       | `gap-6` |
| `lg:`      | 3       | `gap-6` |

- All three service cards maintain **equal prominence** (same height, same card design).

---

## 5. File & Component Architecture

### 5.1 Route Structure

```
app/
  layout.tsx                    # Root layout (Geist font, Toaster, smooth scroll, lang="de")
  page.tsx                      # Homepage (orchestrates section components)
  impressum/
    page.tsx                    # Static Impressum (legal notice) page
  datenschutz/
    page.tsx                    # Static Datenschutz (privacy policy) page
```

### 5.2 Component File Map

Each major section is a standalone component. Target: 100-300 lines per component file, never exceeding 400-600.

```
components/
  layout/
    header.tsx                  # Sticky header with logo, nav, CTA, mobile hamburger
    footer.tsx                  # 3-column footer (Kontakt, Oeffnungszeiten, Rechtliches)
    mobile-nav.tsx              # Sheet-based mobile navigation drawer
    back-to-top.tsx             # Scroll-to-top floating button
  sections/
    hero.tsx                    # Hero section with headline, subheadline, CTA, image
    services.tsx                # Bento Grid with 3 service cards
    service-card.tsx            # Individual service card component
    faq.tsx                     # FAQ section with shadcn Accordion
    cta-section.tsx             # Final conversion / call-to-action section
  ui/
    (existing shadcn components - accordion, button, card, sheet, sonner, etc.)
```

### 5.3 Estimated Line Counts

| File                      | Est. Lines | Rationale                                |
| ------------------------- | ---------- | ---------------------------------------- |
| `app/layout.tsx`          | 40-60      | Font setup, Toaster, metadata, html lang |
| `app/page.tsx`            | 30-50      | Import and compose section components    |
| `components/layout/header.tsx` | 120-180 | Sticky logic, desktop nav, CTA, scroll state |
| `components/layout/mobile-nav.tsx` | 80-120 | Sheet trigger, nav links, CTA |
| `components/layout/footer.tsx` | 100-150 | 3-column layout, contact info, links |
| `components/layout/back-to-top.tsx` | 40-60 | Scroll detection, smooth scroll up |
| `components/sections/hero.tsx` | 100-160 | Headline, subtext, CTA, hero image, animation |
| `components/sections/services.tsx` | 60-80 | Grid container, maps over service data |
| `components/sections/service-card.tsx` | 80-120 | Card with icon, title, description, hover |
| `components/sections/faq.tsx` | 80-120 | Accordion with 3 Q&A items, section title |
| `components/sections/cta-section.tsx` | 60-100 | Conversion headline, subtext, CTA button |
| `app/impressum/page.tsx`  | 80-120     | Static German legal placeholder text     |
| `app/datenschutz/page.tsx`| 80-120     | Static German privacy placeholder text   |

**Total estimated:** ~950-1,440 lines across 13 files (well within the modular target).

---

## 6. Section-by-Section Specifications

### 6.1 Sticky Header

- **Behavior:** Fixed to top on all devices (`sticky top-0 z-50`).
- **Background:** Transparent initially; transitions to solid `background` with `backdrop-blur` + subtle border-bottom on scroll (controlled via scroll event listener or Intersection Observer).
- **Left:** Logo text "Zahnarzt Dold" (styled as brand text, no image logo).
- **Center/Right (Desktop):** Nav links "Leistungen", "FAQ", "Kontakt" as scroll anchors (`href="#leistungen"`, `#faq`, `#kontakt`). Smooth scroll via `scroll-behavior: smooth` on `<html>`.
- **Far Right (Desktop):** CTA Button "Termin online buchen" using accent color.
- **Mobile:** Logo left, hamburger icon right. Hamburger opens a `Sheet` (shadcn) from the right with full nav links + CTA.
- **Animation:** Framer Motion `animate` for background opacity transition on scroll.
- **Height:** `h-16` (64px, aligns with 8-point grid).

### 6.2 Hero Section

- **Layout:** Two-column on desktop (`lg:grid-cols-2`), single stacked column on mobile.
- **Left Column:** Headline, subheadline, primary CTA button.
  - Headline: "Moderne Zahnmedizin in Rheinfelden. Prazision, der Sie vertrauen."
  - Subheadline: "Spezialisierte Fachkompetenz in Endodontie und Parodontologie. Wir kombinieren modernste Technik mit einfuhlsamer Behandlung."
  - CTA: "Jetzt Termin wahlen" button (accent background, white text). On click: `toast.success("Erfolg! Terminbuchung wird geladen...")`.
- **Right Column:** High-quality dental clinic image (generated via `GenerateImage` tool, professional dental clinic interior or modern dental office).
- **Background:** White (`background`).
- **Animation:** Framer Motion `fadeInUp` on headline and subheadline. Slight `scale` animation on image.
- **Vertical Padding:** `py-24` on desktop, `py-16` on mobile.

### 6.3 Services Section (Bento Grid)

- **Section ID:** `id="leistungen"`
- **Background:** Secondary/soft gray (`secondary`).
- **Section Title:** "Unsere Leistungen" (centered, H2).
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Cards (x3):** Equal prominence, each containing:
  - Lucide icon (top): Card 1 = `Microscope`, Card 2 = `HeartPulse`, Card 3 = `ShieldCheck`.
  - Title (H3).
  - Description paragraph.
  - Hover effect: `scale-[1.02]` + `shadow-lg` transition via Tailwind `transition-all duration-300`.
- **Animation:** Framer Motion staggered `fadeInUp` for each card (delay 0, 0.1, 0.2s).

### 6.4 FAQ Section (Accordion)

- **Section ID:** `id="faq"`
- **Background:** White (`background`).
- **Section Title:** "Haufig gestellte Fragen" (centered, H2).
- **Component:** shadcn `Accordion` with `type="single"` and `collapsible={true}`. Only one item open at a time; all closed by default.
- **Items:** 3 Q&A pairs as defined in the original brief.
- **Styling:** Override default accordion to remove underline hover, add rounded borders per item, and use the 8-point spacing scale.
- **Animation:** Framer Motion `fadeIn` on the section wrapper.
- **Max Width:** Constrain accordion to `max-w-3xl mx-auto` for readability.

### 6.5 Final CTA / Conversion Section

- **Background:** Primary color (`primary`) as a full-width banner.
- **Text Color:** White (`primary-foreground`).
- **Content:**
  - Headline: "Bereit fur Ihr gesundes Lacheln?"
  - Subtext: "Wahlen Sie jetzt Ihren Wunschtermin bequem online aus."
  - CTA Button: "Termin online buchen" (white background, primary text color - inverted scheme). On click: `toast.success("Erfolg!")`.
- **Animation:** Framer Motion `fadeIn` + subtle `y` translate on scroll into view.
- **Padding:** `py-16` mobile, `py-24` desktop.

### 6.6 Footer

- **Background:** Primary color (`primary`) or a slightly darker shade.
- **Text Color:** White / light muted.
- **Layout:** `grid grid-cols-1 md:grid-cols-3 gap-8`.
- **Column 1 (Kontakt):**
  - "Kirchplatz 2, 79618 Rheinfelden"
  - "Tel: +49 (0) 7623 1234"
  - "E-Mail: info@zahnarzt-dold.de"
- **Column 2 (Oeffnungszeiten):**
  - "Mo-Do: 08:00 - 18:00"
  - "Fr: 08:00 - 14:00"
- **Column 3 (Rechtliches):**
  - Link to `/impressum`
  - Link to `/datenschutz`
- **Bottom Bar:** Copyright line: "(c) 2026 Zahnarzt Dold. Alle Rechte vorbehalten."

### 6.7 Back-to-Top Button

- **Position:** Fixed bottom-right (`fixed bottom-6 right-6`).
- **Visibility:** Hidden when scroll position < 300px; visible otherwise.
- **Behavior:** Smooth scroll to top on click (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
- **Icon:** Lucide `ArrowUp`.
- **Style:** Accent background, white icon, rounded-full, shadow-lg.
- **Animation:** Framer Motion `fadeIn` / `fadeOut` based on visibility.

### 6.8 Legal Pages

Both `/impressum` and `/datenschutz` are simple static pages:
- **Layout:** Shared site header and footer (via root layout or imported components).
- **Content:** Clean German placeholder legal text in a `max-w-3xl mx-auto` prose container.
- **Back Navigation:** Include a link/button to return to the homepage.
- **No animations needed** beyond the standard page load.

---

## 7. Animation Strategy (Framer Motion)

| Element                | Animation Type        | Trigger           | Details                                    |
| ---------------------- | --------------------- | ----------------- | ------------------------------------------ |
| Hero headline          | `fadeInUp`            | Page load         | `y: 20 -> 0`, `opacity: 0 -> 1`, 0.6s     |
| Hero subheadline       | `fadeInUp`            | Page load         | Same as above, 0.1s delay                  |
| Hero CTA               | `fadeInUp`            | Page load         | Same as above, 0.2s delay                  |
| Hero image             | `fadeIn` + `scale`    | Page load         | `scale: 0.95 -> 1`, `opacity: 0 -> 1`     |
| Service cards          | `fadeInUp` staggered  | Scroll into view  | Stagger 0.1s per card, via `whileInView`   |
| FAQ section            | `fadeIn`              | Scroll into view  | `opacity: 0 -> 1`, 0.5s                   |
| CTA section            | `fadeInUp`            | Scroll into view  | `y: 30 -> 0`, `opacity: 0 -> 1`           |
| Back-to-top button     | `fadeIn` / `fadeOut`  | Scroll position   | `AnimatePresence` for mount/unmount        |
| Header background      | Opacity transition    | Scroll position   | CSS transition or Framer `animate`         |
| Mobile nav sheet       | Slide from right      | Hamburger click   | Handled by shadcn Sheet (built-in)         |

**Global scroll behavior:** `scroll-behavior: smooth` set on `<html>` element in `globals.css`.

---

## 8. Accessibility Checklist

| Requirement                           | Implementation                                              |
| ------------------------------------- | ----------------------------------------------------------- |
| Semantic HTML                         | `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`     |
| Landmark roles                        | Implicit via semantic elements                              |
| Skip to content link                  | `sr-only` skip link at top of page                          |
| Keyboard navigation                   | All interactive elements focusable and operable via keyboard|
| Focus visible styles                  | `ring` token applied via Tailwind `focus-visible:ring-2`    |
| Alt text for images                   | Descriptive alt text on hero image                          |
| ARIA labels                           | Mobile hamburger: `aria-label="Menu offnen"`                |
| Color contrast                        | WCAG AA minimum (4.5:1 for body text, 3:1 for large text)  |
| Reduced motion                        | `prefers-reduced-motion` media query to disable animations  |
| Language attribute                    | `<html lang="de">` on root layout                          |
| Accordion accessibility               | Handled by Radix primitives (built-in ARIA)                 |

---

## 9. SEO & Metadata

Applied in `app/layout.tsx` and page-level metadata exports:

```
Root Layout Metadata:
  title: "Zahnarzt Dold | Moderne Zahnmedizin in Rheinfelden"
  description: "Dr. med. dent. Christian Dold - Spezialisierte Fachkompetenz in Endodontie und Parodontologie in Rheinfelden."
  lang: "de"
  viewport: width=device-width, initial-scale=1
  themeColor: "#2C3E50"

/impressum Metadata:
  title: "Impressum | Zahnarzt Dold"

/datenschutz Metadata:
  title: "Datenschutz | Zahnarzt Dold"
```

---

## 10. CTA Behavior (All Instances)

Every CTA button across the site triggers the same placeholder behavior:

```tsx
import { toast } from "sonner"

const handleCTA = () => {
  toast.success("Erfolg! Terminbuchung wird geladen...")
}
```

This applies to:
- Header CTA: "Termin online buchen"
- Hero CTA: "Jetzt Termin wahlen"
- Final CTA Section: "Termin online buchen"

The Sonner `<Toaster />` component is mounted once in `app/layout.tsx`.

---

## 11. Configuration Changes Required

### 11.1 Files to Modify

| File                    | Changes                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| `package.json`          | Add `framer-motion` dependency                                          |
| `app/globals.css`       | Override all design tokens (colors), add `scroll-behavior: smooth`      |
| `app/layout.tsx`        | Set `lang="de"`, update metadata, mount `<Toaster />`, update font setup|
| `tailwind.config.ts`    | Add `fontFamily: { sans: ['var(--font-geist)'] }` to theme             |
| `next.config.mjs`       | Add `images.remotePatterns` for Unsplash if using Next/Image            |

### 11.2 Files to Create

| File                                      | Purpose                        |
| ----------------------------------------- | ------------------------------ |
| `components/layout/header.tsx`            | Sticky header                  |
| `components/layout/mobile-nav.tsx`        | Mobile navigation sheet        |
| `components/layout/footer.tsx`            | 3-column footer                |
| `components/layout/back-to-top.tsx`       | Scroll-to-top button           |
| `components/sections/hero.tsx`            | Hero section                   |
| `components/sections/services.tsx`        | Services bento grid container  |
| `components/sections/service-card.tsx`    | Individual service card         |
| `components/sections/faq.tsx`             | FAQ accordion section          |
| `components/sections/cta-section.tsx`     | Conversion CTA banner          |
| `app/page.tsx`                            | Homepage (compose sections)    |
| `app/impressum/page.tsx`                  | Legal notice page              |
| `app/datenschutz/page.tsx`               | Privacy policy page            |

---

## 12. Implementation Phases (5-Phase Build Order)

The build follows a strict sequential dependency chain: each phase produces the
artefacts the next phase consumes. No phase may be started until the preceding
phase is fully complete and verified in the preview.

---

### PHASE 1 -- Foundation (Configuration & Global Styles)

**Goal:** Establish the design system, fonts, tokens, and global configuration so
that every component built afterwards inherits the correct visual language from
the start.

**Scope of work:**

| #   | Task                                    | File(s) Touched                          | Details                                                                                                                                                                          |
| --- | --------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Install Framer Motion                  | `package.json`                           | Add `framer-motion` as a dependency. The system auto-installs on file change.                                                                                                   |
| 1.2 | Override design tokens (colors)        | `app/globals.css`                        | Replace all HSL token values in `:root` (light mode only) with the palette from Section 3.1. Add `scroll-behavior: smooth` on `html`.                                          |
| 1.3 | Configure font                         | `app/layout.tsx`, `tailwind.config.ts`   | Ensure Geist is imported via `next/font/google`, set `--font-geist-sans` CSS var, map `fontFamily.sans` in Tailwind config. Verify `font-sans` class is on `<body>`.            |
| 1.4 | Set HTML language                      | `app/layout.tsx`                         | Add `lang="de"` to the `<html>` element.                                                                                                                                        |
| 1.5 | Update root metadata                   | `app/layout.tsx`                         | Set `title`, `description`, and `themeColor` per Section 9.                                                                                                                     |
| 1.6 | Mount Sonner Toaster                   | `app/layout.tsx`                         | Import `<Toaster />` from `sonner` component and render it inside the body. This provides the toast context for every CTA in later phases.                                      |
| 1.7 | Configure remote image patterns        | `next.config.mjs`                        | Add `images.remotePatterns` entry for `images.unsplash.com` so Next/Image can optimise remote hero images (fallback: `unoptimized: true` is already set, so this is a safeguard).|

**Acceptance criteria (Phase 1 complete when):**
- Preview loads with correct Geist font rendering.
- Tailwind utilities like `bg-primary`, `text-accent`, `bg-secondary` resolve to
  the Zahnarzt Dold palette.
- `<html>` has `lang="de"`, metadata is visible in page source.
- Toaster is mounted (can be verified by calling `toast("test")` from console).
- Page scrolls smoothly when anchor links are clicked.

**Dependencies on prior work:** None (this is the first phase).

---

### PHASE 2 -- Layout Shell (Header, Footer, Mobile Nav, Back-to-Top)

**Goal:** Build the persistent chrome that wraps every page -- the sticky header
with responsive navigation, the multi-column footer, and the back-to-top
affordance. These components are imported into the root layout or page
compositions so they are available site-wide.

**Scope of work:**

| #   | Task                                    | File(s) Created/Modified                  | Details                                                                                                                                                                                                                           |
| --- | --------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1 | Sticky Header (desktop)               | `components/layout/header.tsx`            | Logo text "Zahnarzt Dold" left-aligned. Desktop nav links ("Leistungen", "FAQ", "Kontakt") as `<a href="#id">` scroll anchors. CTA "Termin online buchen" far right (accent bg). Sticky `top-0 z-50`, height `h-16` (64px).       |
| 2.2 | Header scroll effect                   | `components/layout/header.tsx`            | Transparent bg initially. On scroll > 50px: solid `bg-background/95 backdrop-blur-md` with `border-b`. Use `useEffect` + scroll listener or `useMotionValueEvent`. Framer `motion.header` for smooth opacity transition.           |
| 2.3 | Mobile Navigation                      | `components/layout/mobile-nav.tsx`        | Hamburger (`Menu` icon) visible below `lg:` breakpoint. Opens a shadcn `Sheet` (side="right") containing nav links + CTA. Each link closes the sheet and scrolls to section. `aria-label="Menu offnen"` on trigger.                |
| 2.4 | Footer                                 | `components/layout/footer.tsx`            | Three-column grid (`grid-cols-1 md:grid-cols-3`). Column 1: Kontakt info. Column 2: Oeffnungszeiten. Column 3: Impressum + Datenschutz links (Next.js `<Link>`). Bottom bar with copyright. Primary bg, white/muted text.          |
| 2.5 | Back-to-Top Button                     | `components/layout/back-to-top.tsx`       | Fixed `bottom-6 right-6`. `ArrowUp` icon on accent bg, `rounded-full`. Visible when `scrollY > 300`, hidden otherwise. `AnimatePresence` + `motion.button` for fade in/out. `onClick` smooth scrolls to top.                      |
| 2.6 | Integrate layout components            | `app/layout.tsx` or `app/page.tsx`        | Import Header and Footer into the appropriate layout/page file so they render on all routes. Back-to-Top rendered globally.                                                                                                        |

**Acceptance criteria (Phase 2 complete when):**
- Header is sticky on scroll, background transitions from transparent to solid.
- Desktop nav links scroll smoothly to placeholder `<section>` elements.
- Mobile hamburger opens Sheet with full nav; links close the sheet.
- Footer renders 3 columns on desktop, stacks on mobile.
- Back-to-top button appears after scrolling, smoothly returns to top on click.
- All interactive elements are keyboard-accessible and have focus-visible rings.

**Dependencies:** Phase 1 (design tokens, Toaster for CTA, Framer Motion installed).

---

### PHASE 3 -- Page Sections (Top-to-Bottom Homepage Build)

**Goal:** Build every content section of the homepage as an independent component,
then compose them together in `app/page.tsx`. Sections are built and tested in
visual order: Hero, Services, FAQ, CTA.

**Scope of work:**

| #   | Task                                    | File(s) Created/Modified                                       | Details                                                                                                                                                                                                         |
| --- | --------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.1 | Generate hero image                    | `public/images/hero-dental.jpg`                                | Use `GenerateImage` tool: "Premium modern dental clinic interior, bright and welcoming, clean white and teal accents, professional photography style, no people." Saved as JPG in `/public/images/`.             |
| 3.2 | Hero Section                           | `components/sections/hero.tsx`                                 | Two-column layout (`lg:grid-cols-2`), stacked on mobile. Left: headline (H1), subheadline (p), CTA button. Right: hero image with `rounded-2xl shadow-xl`. Framer `fadeInUp` staggered on text, `scale` on image.|
| 3.3 | Service Card component                 | `components/sections/service-card.tsx`                         | Reusable card accepting `icon`, `title`, `description` props. Lucide icon top, H3 title, body text. Card bg white, `rounded-xl`. Hover: `scale-[1.02]` + `shadow-lg` via Tailwind `transition-all duration-300`.|
| 3.4 | Services Section (Bento Grid)          | `components/sections/services.tsx`                             | `id="leistungen"`. Secondary bg. Centered H2 "Unsere Leistungen". Grid `1 / md:2 / lg:3` cols. Maps service data array to `<ServiceCard>`. Framer staggered `fadeInUp` via `whileInView` + `viewport once`.    |
| 3.5 | FAQ Section                            | `components/sections/faq.tsx`                                  | `id="faq"`. White bg. Centered H2 "Haufig gestellte Fragen". shadcn `Accordion type="single" collapsible`. 3 items from brief. `max-w-3xl mx-auto`. Framer `fadeIn` on section wrapper via `whileInView`.       |
| 3.6 | Final CTA Section                      | `components/sections/cta-section.tsx`                          | `id="kontakt"`. Primary bg, white text. Centered headline + subtext + inverted CTA button (white bg, primary text). On click: `toast.success(...)`. Framer `fadeInUp` via `whileInView`.                         |
| 3.7 | Compose homepage                       | `app/page.tsx`                                                 | Import and render all sections in order: `<Hero />`, `<Services />`, `<FAQ />`, `<CTASection />`. Clean orchestration file, no logic -- just composition.                                                        |

**Section build sub-order (strict):**

```
3.1 Generate hero image asset
    |
3.2 Hero Section
    |
3.3 Service Card --> 3.4 Services Section (card must exist before grid)
                         |
                    3.5 FAQ Section
                         |
                    3.6 CTA Section
                         |
                    3.7 Compose page.tsx
```

**Acceptance criteria (Phase 3 complete when):**
- Homepage renders all 4 sections in correct visual order.
- Hero displays generated image, responsive two-column/stacked layout.
- Services grid shows 3 equal cards; hover effects work (scale + shadow).
- FAQ accordion opens one item at a time, all closed by default.
- All CTA buttons trigger Sonner toast with German success message.
- Scroll-anchor links from header land on correct sections.
- All text content matches the German strings from the original brief exactly (including umlauts).
- Framer Motion animations fire on page load (hero) and on scroll into view (services, FAQ, CTA).

**Dependencies:** Phase 2 (Header/Footer must be in place for full-page testing).

---

### PHASE 4 -- Secondary Pages & Interactive Refinement

**Goal:** Build the legal pages (`/impressum`, `/datenschutz`), wire up all
remaining interactive behaviours, and ensure cross-page navigation works
correctly.

**Scope of work:**

| #   | Task                                    | File(s) Created/Modified                  | Details                                                                                                                                                                                                    |
| --- | --------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1 | Impressum page                         | `app/impressum/page.tsx`                  | Static route. Page-level metadata: `title: "Impressum / Zahnarzt Dold"`. Clean German placeholder legal text (practice name, address, Verantwortlich, Berufsbezeichnung, Aufsichtsbehorde). `max-w-3xl mx-auto` prose layout. Link back to homepage.|
| 4.2 | Datenschutz page                       | `app/datenschutz/page.tsx`               | Static route. Page-level metadata: `title: "Datenschutz / Zahnarzt Dold"`. German placeholder DSGVO text (Verantwortlicher, Erhebung personenbezogener Daten, Cookies, Rechte der Betroffenen). Same prose layout. Link back to homepage.          |
| 4.3 | Verify footer links                    | `components/layout/footer.tsx`            | Confirm `<Link href="/impressum">` and `<Link href="/datenschutz">` navigate correctly. Verify header and footer render on legal pages (shared layout).                                                    |
| 4.4 | Mobile nav sheet close on navigate     | `components/layout/mobile-nav.tsx`        | Ensure Sheet closes when a nav link is tapped (controlled open state). Ensure scroll-to works after Sheet animation completes.                                                                              |
| 4.5 | CTA toast consistency                  | All CTA buttons                           | Audit every CTA across all pages/components. Verify each triggers `toast.success("Erfolg! Terminbuchung wird geladen...")`. No dead buttons.                                                                |
| 4.6 | Scroll anchor offset                   | `app/globals.css` or section components   | Ensure scroll anchors account for sticky header height (64px). Apply `scroll-margin-top: 80px` (64px header + 16px breathing room) on all section `id` targets.                                             |

**Acceptance criteria (Phase 4 complete when):**
- `/impressum` and `/datenschutz` render with clean German placeholder text.
- Both legal pages show the shared header and footer.
- "Back to homepage" links work on both legal pages.
- Footer links to legal pages navigate correctly.
- Mobile sheet closes after link tap and page scrolls to correct position.
- All CTA buttons site-wide trigger the toast.
- Scroll anchors land at the correct position (not hidden behind sticky header).

**Dependencies:** Phase 3 (all homepage sections and page composition must be complete).

---

### PHASE 5 -- Polish, Animation Tuning & Accessibility Audit

**Goal:** Fine-tune every animation, verify responsive behaviour across all
breakpoints, audit accessibility, and do a final visual quality pass. This is
the phase where the prototype goes from "working" to "presentation-ready."

**Scope of work:**

| #   | Task                                    | Details                                                                                                                                                                                       |
| --- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.1 | Animation timing pass                  | Review all Framer Motion animations. Ensure consistent easing (`easeOut`), durations (0.5-0.7s for fades, 0.3s for hovers), and stagger intervals. No janky or overlapping animations.          |
| 5.2 | `prefers-reduced-motion` support       | Wrap all Framer Motion animations in a check: if the user prefers reduced motion, set `initial`, `animate`, and `transition` to no-ops. Apply via a shared `useReducedMotion` hook or media query.|
| 5.3 | Responsive QA -- Mobile (375px)        | Verify: stacked hero, 1-col service grid, readable FAQ, hamburger nav, footer stacks, back-to-top not obscuring content, no horizontal overflow, touch targets >= 44px.                         |
| 5.4 | Responsive QA -- Tablet (768px)        | Verify: hero stacked or 2-col, 2-col service grid, footer 3-col or graceful 2+1, header nav visible or hamburger threshold correct.                                                            |
| 5.5 | Responsive QA -- Desktop (1280px)      | Verify: 2-col hero, 3-col service grid, full desktop nav, footer 3-col, `max-w-7xl` container centering, no excessive whitespace.                                                               |
| 5.6 | Accessibility audit                    | Keyboard-only full page navigation test. Verify: skip-to-content link, focus-visible rings on all interactive elements, ARIA labels on hamburger and accordion, correct heading hierarchy (single H1 on homepage, H2 per section).|
| 5.7 | Color contrast verification            | Verify all text/background combinations meet WCAG AA (4.5:1 body, 3:1 large text). Critical pairs: white text on accent (#16A085), white text on primary (#2C3E50), muted-foreground on white bg.|
| 5.8 | Typography & spacing consistency       | Final pass: verify 8-point grid alignment, consistent `leading-relaxed` on body, `leading-tight` on headings, `text-balance` or `text-pretty` on headlines, no orphaned words on CTA text.      |
| 5.9 | Image optimisation                     | Ensure hero image has `alt` text in German, appropriate `width`/`height` or `sizes` attribute, and `priority` flag for LCP optimisation.                                                        |
| 5.10 | Final preview review                  | Full scroll-through of the prototype in preview: top to bottom, all interactions, all pages, all breakpoints. Verify the prototype is client-presentation-ready.                                 |

**Acceptance criteria (Phase 5 complete when):**
- All animations are smooth, consistent, and respect `prefers-reduced-motion`.
- No layout issues at 375px, 768px, or 1280px viewports.
- Full keyboard navigation works without traps.
- Color contrast passes WCAG AA for all text/bg pairs.
- Hero image is optimised and has proper alt text.
- The prototype is visually polished and ready for client presentation.

**Dependencies:** Phase 4 (all pages and interactions must be complete before polish).

---

### Phase Dependency Chain (Visual)

```
PHASE 1: Foundation
   Tokens, fonts, globals, Toaster, Framer Motion
         |
         v
PHASE 2: Layout Shell
   Header (sticky + mobile), Footer, Back-to-Top
         |
         v
PHASE 3: Page Sections (top-to-bottom)
   Hero --> Services --> FAQ --> CTA --> page.tsx
         |
         v
PHASE 4: Secondary Pages & Interactivity
   /impressum, /datenschutz, scroll offsets, CTA audit
         |
         v
PHASE 5: Polish & Accessibility
   Animation tuning, responsive QA, a11y audit, final review
```

---

## 13. Assets to Generate

| Asset                  | Method           | Description                                              |
| ---------------------- | ---------------- | -------------------------------------------------------- |
| Hero image             | `GenerateImage`  | Premium dental clinic interior, modern and welcoming     |

---

## 14. Out of Scope (Explicitly Excluded)

- Backend / API routes / server actions
- Database integration
- Real appointment booking functionality
- Authentication / user accounts
- CMS integration
- Analytics / tracking
- Cookie consent banner
- Dark mode (light mode only for this prototype)
- Multilingual support (German only)
- Automated testing
