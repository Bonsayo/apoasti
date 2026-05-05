# Design System: Astawash (አስታዋሽ)
**Project ID:** astawash-et-2026

## 1. Visual Theme & Atmosphere
Astawash embodies a **Premium Minimalist** aesthetic with a focus on high-end utility and cultural relevance. The atmosphere is **Airy, Precise, and Reassuring**. It uses a "Glassmorphism" approach for navigational elements to provide depth without clutter. The design prioritizes whitespace and bold typography to reduce cognitive load in high-stress situations (like booking medical appointments).

## 2. Color Palette & Roles
*   **Electric Ethiopic Blue (#2563EB):** Primary brand color. Used for high-priority actions (CTAs), active navigation states, and essential progress indicators.
*   **Ink Obsidian (#000000):** Primary text and heading color. Used at varying opacities to create hierarchy.
*   **Ethereal White (#FFFFFF):** Main background color and card surface. Used with glass effects.
*   **Vitality Green (#16A34A):** Success states, confirmation badges, and "Available" indicators.
*   **Urgency Amber (#D97706):** Pending states, waitlist warnings, and low-availability alerts.
*   **Critical Red (#DC2626):** Error states, cancellations, and urgent no-show alerts.

## 3. Typography Rules
*   **Display Font:** Manrope (Primary). Used for its modern, geometric character that remains legible at extreme weights.
*   **Headings:** Bold to Black weights (700-900), tracking-tighter (-0.02em to -0.05em), leading-none or leading-tight.
*   **Body:** Medium weight (500), tracking-normal, leading-relaxed (1.5-1.7).
*   **Utility/Metadata:** Black weight (900), all-caps, tracking-widest (0.1em to 0.2em), small font size (10px-12px).

## 4. Component Stylings
*   **Buttons:** Generously rounded corners (`rounded-3xl` or `rounded-full`). High-contrast background for primary actions. Subtle scale transforms on hover.
*   **Cards/Containers:** "Floating" cards with `rounded-[2.5rem]` or `rounded-[3rem]`. Diffused shadows (`shadow-soft`). Whisper-thin borders (`border-[#000000]/5`).
*   **Navbars:** Floating headers and footers with `backdrop-blur-xl` and high-transparency backgrounds (`bg-white/80`).
*   **Inputs:** Large, accessible touch targets (height 56px+). Background-filled (`bg-[#F1F5F9]`) with rounded corners.

## 5. Layout Principles
*   **Whitespace Strategy:** Aggressive use of margins (`gap-20` to `gap-32`) to separate major sections.
*   **Floating Elements:** Interactive elements (Nav, CTAs) float above the content to maintain a layered, modern depth.
*   **Responsive Integrity:** Mobile-first approach with fluid grids. Maximum container width of 1200px.
*   **Cultural Dividers:** Subtle use of traditional Ethiopian patterns (Tilet) as dividers or background masks at low opacity.
