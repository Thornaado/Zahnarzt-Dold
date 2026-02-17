# Refinement Plan: Enhance Background Shape Visibility

The user reported that the decorative background shapes are not visible on their laptop screen. This is likely due to the combination of low opacity (5-8%) and the shapes being positioned too far off-screen.

This plan details the steps to make these shapes more visible across all devices.

## Proposed Changes

We will iterate through all sections with background shapes and:
1.  **Increase Opacity**: Boost opacity from `5-8%` to `10-15%`.
2.  **Adjust Positioning**: Bring the shapes closer to the content area (e.g., changing `-right-32` to `-right-20`).

### 1. Hero Section (`components/sections/hero.tsx`)
- [ ] Update top-right shape: `bg-accent/5` -> `bg-accent/10`, `-right-32` -> `-right-16`.
- [ ] Update bottom-left shape: `bg-accent/8` -> `bg-accent/15`, `-left-32` -> `-left-16`.

### 2. Services Section (`components/sections/services.tsx`)
- [ ] Update top-left shape: `bg-accent/5` -> `bg-accent/10`, `-left-40` -> `-left-20`.
- [ ] Update bottom-right shape: `bg-accent/8` -> `bg-accent/15`, `-right-40` -> `-right-20`.

### 3. Philosophy Section (`components/sections/philosophy.tsx`)
- [ ] Update top-right shape: `bg-accent/5` -> `bg-accent/10`, `-right-40` -> `-right-20`.
- [ ] Update bottom-left shape: `bg-accent/8` -> `bg-accent/15`, `-left-40` -> `-left-20`.

### 4. FAQ Section (`components/sections/faq.tsx`)
- [ ] Update top-left shape: `bg-accent/5` -> `bg-accent/10`, `-left-40` -> `-left-20`.
- [ ] Update bottom-right shape: `bg-accent/8` -> `bg-accent/15`, `-right-40` -> `-right-20`.

### 5. Directions Section (`components/sections/directions.tsx`)
- [ ] Update top-right shape: `bg-accent/5` -> `bg-accent/10`, `-right-40` -> `-right-20`.
- [ ] Update bottom-left shape: `bg-accent/8` -> `bg-accent/15`, `-left-40` -> `-left-20`.

### 6. Opening Hours Section (`components/sections/opening-hours.tsx`)
- [ ] Update top-left shape: `bg-accent/5` -> `bg-accent/10`, `-left-40` -> `-left-20`.
- [ ] Update bottom-right shape: `bg-accent/8` -> `bg-accent/15`, `-right-40` -> `-right-20`.

## Verification
- [ ] Visual check on simulated laptop screen size (1366x768 / 1440x900).
- [ ] Ensure shapes are clearly visible but not overwhelming.
