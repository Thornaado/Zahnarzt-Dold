# Implementation Plan: Layout Optimization & Visual Substance

This plan outlines the steps to optimize the website layout for large screens (up to 2k monitors), reduce different white space, and add visual polish.

## 1. Global Layout Updates
- [x] **Update Container Widths**: Change the standard container width from `max-w-7xl` (1280px) to `max-w-[1440px]` in all major sections to utilize more screen real estate on large monitors.
    - [x] `components/sections/hero.tsx`
    - [x] `components/sections/philosophy.tsx`
    - [x] `components/sections/services.tsx`
    - [x] `components/sections/faq.tsx`
    - [x] `components/sections/directions.tsx`
    - [x] `components/sections/opening-hours.tsx`
    - [x] `components/sections/cta-section.tsx`
    - [x] `components/layout/footer.tsx` (if applicable)

## 2. Services Section Transformation
- [x] **Grid Layout**: Update `components/sections/services.tsx` to use a 3-column grid on large screens (`lg:grid-cols-3`).
- [x] **Service Card Styling**: Update `components/sections/service-card.tsx`:
    - [x] Add subtle borders (`border-2`, `border-border/50`).
    - [x] Implement hover 'lift' effect (`hover:-translate-y-2`).
    - [x] enhance shadow on hover (`hover:shadow-2xl`).
    - [x] Ensure proper spacing/padding (`p-6 lg:p-8`).

## 3. Typography Scaling (2xl Breakpoints)
- [ ] **Headings**: Add `2xl:text-` classes to main section headings (`h1`, `h2`) to scale them up on ultra-wide screens.
    - [ ] Hero Section H1
    - [ ] Section H2s (Services, Philosophy, FAQ, Directions, Opening Hours, CTA)
- [ ] **Body Text**: increased font size for intro paragraphs and key content on `2xl` screens.
    - [ ] Hero description
    - [ ] Section subtitles
    - [ ] Service card descriptions

## 4. Visual Substance (Background Shapes)
- [ ] **Add Decorative Elements**: Insert subtle SVG background shapes (using brand accent colors/pastels) to provide visual continuity and reduce "empty" distinct white space.
    - [ ] **Hero**: Add blur/gradient or shape behind text/image area.
    - [ ] **Services**: Add decorative background elements.
    - [ ] **Philosophy**: Add background accents.
    - [ ] **FAQ**: Add background accents.
    - [ ] **Directions**: Add background accents.
    - [ ] **Opening Hours**: Add background accents.

## 5. Review & Polish
- [ ] Verify proper spacing on standard desktops (1080p).
- [ ] Verify scaling and layout on large screens (1440p / 2k).
- [ ] Ensure mobile responsivity remains intact (no horizontal scrollbars).
