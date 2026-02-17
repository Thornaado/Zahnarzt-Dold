# Background Blob Overhaul Plan

This plan details the steps to overhaul the decorative background shapes on the landing page, implementing a consistent, alternating flow of soft green blobs.

## Goal
Create a cohesive visual flow where each section has exactly one large, soft green blob, alternating left and right positions, centered vertically.

## Technical Requirements
1.  **Component**: `BackgroundBlob` component accepting `position` ('left' | 'right').
2.  **Styling**: Absolute positioning, low opacity (`opacity-20`), heavy blur (`blur-3xl`), primary green brand color (`bg-accent`).
3.  **Layout**: Sections use `relative` but *not* `overflow-hidden` (to allow bleeding). Page wrapper uses `overflow-x-hidden`.
4.  **Alternating Pattern (Zig-Zag)**:
    -   **Hero**: Left
    -   **Philosophy**: Right
    -   **Services**: Left
    -   **FAQ**: Right
    -   **Directions**: Left
    -   **Opening Hours**: Right
    -   **CTA**: Left

## Steps

### 1. Global Setup
- [ ] **Update Layout**: Add `overflow-x-hidden` to `body` or `main` in `app/layout.tsx` to prevent horizontal scrolling from bleeding blobs.

### 2. Create Component
- [ ] **Create `components/ui/background-blob.tsx`**:
    -   Props: `position: 'left' | 'right'`, `className?`.
    -   Styles: `absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none z-0`.
    -   Positioning logic:
        -   `left`: `-left-64` (or similar to center on edge).
        -   `right`: `-right-64`.
    -   Responsive: Adjust size/position for mobile (e.g., smaller or centered).

### 3. Update Sections
Iterate through each section, remove existing background shapes, and add the new `BackgroundBlob`.

- [ ] **Hero (`components/sections/hero.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="left" />`.
    -   Ensure section has `relative` but remove `overflow-hidden`.

- [ ] **Philosophy (`components/sections/philosophy.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="right" />`.
    -   Ensure section has `relative`.

- [ ] **Services (`components/sections/services.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="left" />`.
    -   Ensure section has `relative`.

- [ ] **FAQ (`components/sections/faq.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="right" />`.
    -   Ensure section has `relative`.

- [ ] **Directions (`components/sections/directions.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="left" />`.
    -   Ensure section has `relative`.

- [ ] **Opening Hours (`components/sections/opening-hours.tsx`):**
    -   Remove old shapes.
    -   Add `<BackgroundBlob position="right" />`.
    -   Ensure section has `relative`.

- [ ] **CTA (`components/sections/cta-section.tsx`):**
    -   Remove old shapes (if any).
    -   Add `<BackgroundBlob position="left" />`.
    -   Ensure section has `relative`.

## Verification
- [ ] Verify zigzag pattern flow.
- [ ] Check mobile responsiveness (blobs not overwhelming).
- [ ] Ensure no horizontal scrollbar.
