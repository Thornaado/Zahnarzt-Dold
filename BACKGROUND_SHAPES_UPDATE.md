# Background Shapes Update: Continuous Flow

The goal is to create a continuous visual flow of background shapes across different sections. This means the position of the shape at the bottom of one section should align or fluidly connect with the shape at the top of the next section.

## Strategy: Alternating "Blobs"

We will establish a zig-zag or alternating pattern where the visual weight shifts from side to side, or stays on one side to create a connection.

Based on the user's specific request ("if the background shape in the philosophy section is placed at the bottom left, then the next section ... should have a background shape placed at the top left"), we will implement a "Connection Points" strategy.

**Connection Logic:**
*   **Section N Bottom:** Position X
*   **Section N+1 Top:** Position X (same side to create continuity)

## Proposed Changes by Section Order

**Confirmed Order (`page.tsx`):**
1.  **Hero**
2.  **Philosophy**
3.  **Services**
4.  **FAQ**
5.  **Directions**
6.  **Opening Hours**
7.  **CTA**

**Alternating Flow Logic:**

1.  **Hero Section**
    *   **Top**: Right (Balance)
    *   **Bottom**: **Left** (Anchor)

2.  **Philosophy Section** (Follows Hero)
    *   **Top**: **Left** (Connects to Hero Bottom-Left)
    *   **Bottom**: **Right** (New Anchor)

3.  **Services Section** (Follows Philosophy)
    *   **Top**: **Right** (Connects to Philosophy Bottom-Right)
    *   **Bottom**: **Left** (New Anchor)

4.  **FAQ Section** (Follows Services)
    *   **Top**: **Left** (Connects to Services Bottom-Left)
    *   **Bottom**: **Right** (New Anchor)

5.  **Directions Section** (Follows FAQ)
    *   **Top**: **Right** (Connects to FAQ Bottom-Right)
    *   **Bottom**: **Left** (New Anchor)

6.  **Opening Hours Section** (Follows Directions)
    *   **Top**: **Left** (Connects to Directions Bottom-Left)
    *   **Bottom**: **Right** (Fade out)

## Implementation Details

### 1. Hero (`components/sections/hero.tsx`)
- [ ] Top: **Right** (Balance)
- [ ] Bottom: **Left** (Anchor)

### 2. Philosophy (`components/sections/philosophy.tsx`)
- [ ] Top: **Left** (Connects to Hero Bottom-Left)
- [ ] Bottom: **Right** (New Anchor)

### 3. Services (`components/sections/services.tsx`)
- [ ] Top: **Right** (Connects to Philosophy Bottom-Right)
- [ ] Bottom: **Left** (New Anchor)

### 4. FAQ (`components/sections/faq.tsx`)
- [ ] Top: **Left** (Connects to Services Bottom-Left)
- [ ] Bottom: **Right** (New Anchor)

### 5. Directions (`components/sections/directions.tsx`)
- [ ] Top: **Right** (Connects to FAQ Bottom-Right)
- [ ] Bottom: **Left** (New Anchor)

### 6. Opening Hours (`components/sections/opening-hours.tsx`)
- [ ] Top: **Left** (Connects to Directions Bottom-Left)
- [ ] Bottom: **Right** (Fade out)

## Verification
- [ ] Verify section order in `page.tsx` first to confirm flow.
- [ ] Apply changes.
- [ ] Visual check of the transitions.
