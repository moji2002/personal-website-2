# Neo-Futurism Visual Language & Brand Guide

## Aesthetic Principles
- **Clean, premium, award-winning:** Minimalist layout with generous white space, soft depth (glassmorphism, blur, layered translucency)
- **Grid foundation:** Precision grid and rhythm-based spacing for clarity and efficiency
- **Micro-interactions:** Tasteful springy hover states, smooth section reveals using Framer Motion, tactile cursor affordances
- **Dark mode first:** Rich dark neutrals with layers of glass, one vibrant accent color; also provide cohesive light mode

## Palette
- **Base:** #18181B (near black), #23272F, #1C1F26
- **Surface:** #23272F (base), #24262B (slightly lighter for overlays)
- **Overlay:** White/Neutral #F5F6FA @ 5–15% opacity for glass panels
- **Accent:** Cyan/Blue (#00FFE0 or #42A5F5), refine as UI evolves
- **Disabled/Outline:** Soft border using rgba(255,255,255,0.15)

## Typography
- **Headings:** Inter (geometric sans-serif), bold, tight tracking. [Open Font License, Google Fonts]
- **Body:** System UI or readable sans-serif
- **Code/Monospace:** JetBrains Mono (humanist mono). [Open Font License, web-ready]
- **Responsive type scale** with clear vertical rhythm
- **Implementation:** Import via Google Fonts for Inter, JetBrains Mono via CDN/webfont and configure in Tailwind `fontFamily`.

## Type Scale
Use a modular scale (Major Third, 1.25) for clarity and hierarchy:
- **H1:** 3.5rem (56px)
- **H2:** 2.75rem (44px)
- **H3:** 2.25rem (36px)
- **H4:** 1.75rem (28px)
- **H5:** 1.25rem (20px)
- **Body Large:** 1.125rem (18px)
- **Body:** 1rem (16px)
- **Code/mono:** 0.9375rem (15px)

Adjust scale responsively for mobile using Tailwind’s breakpoints as needed. Set line height to 1.2–1.4 for headings, 1.6 for body.

## Visual References
- **Hero:** Soft dark gradient, minimal glass panels, glowing accent line, depth via translucent layers, thin grid lines, bokeh, cinematic reflection/lighting
- **Project Cards:** MP4/WebM video/animated thumbnail on hover, glassy container
- **Iconography:** Thin-stroke, monochrome, congruent with grid
- **Details:** Tasteful drop shadows, motion curves, depth via soft overlay stacking

## Interaction
- **Motion:** Subtle, physics-aware (Framer Motion). Spring-based hover, reveal transitions, motion that "respects" system settings (`prefers-reduced-motion`)
- **Focus & Accessibility:** Visible focus rings for all inputs & controls. Semantic HTML5 landmarks, ARIA roles as needed.

## Inspiration Links
- [Neo-Futurism Web Design on Behance](https://www.behance.net/search/projects?search=neo-futurism%20web)
- [Awwwards Futuristic Websites](https://www.awwwards.com/websites/futuristic/)
- [Glassmorphism UI References](https://glassmorphism.com/)

## Core Color Palette
- **Background/Base:** #18181B (Near Black)
- **Surface:** #23272F, #24262B (Glass overlays)
- **Overlay/Glass:** #F5F6FA @5-15% opacity
- **Outline:** rgba(255,255,255,0.12)
- **Accent:** #00FFE0 (Aqua Blue), #3B82F6 (Vivid Blue), #F472B6 (Blush Optional)
- **Neutral Text:** #D1D5DB (Light Gray), #FFF
- **Error/Info/Success:** #F87171 (Red), #FACC15 (Yellow), #4ADE80 (Green)
- Must pass AA contrast, especially for text.
- Recommend expressing as Tailwind custom variables in globals.css and tailwind.config.

## Design System Tokens
### Spacing
- 4px base step: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64 (use as `--space-4`, `--space-8`, ...)

### Radii
- Small: 4px (`--radius-sm`)
- Medium: 8px (`--radius-md`)
- Large: 16px (`--radius-lg`)
- Full: 9999px (`--radius-full`)

### Elevation/Shadows
- Level 1 (`--shadow-1`): 0 1px 4px rgba(20,22,31,0.10)
- Level 2 (`--shadow-2`): 0 3px 12px rgba(20,22,31,0.15)
- Level 3 (`--shadow-3`): 0 6px 24px rgba(20,22,31,0.18)

### Motion
- Easing: `--ease-spring` (cubic-bezier(0.48,0.10,0.26,0.98))
- Duration fast: `--dur-fast` (160ms); base: `--dur-base` (300ms); slow: 600ms

### prefers-reduced-motion Compliance
- Animation: Always detect `prefers-reduced-motion` and minimize/disable non-essential animation if true
- **CSS:** Use `@media (prefers-reduced-motion: reduce)` for instant transitions/disable intensive animation
- **Framer Motion:** Check `window.matchMedia('(prefers-reduced-motion: reduce)')` and/or use Framer's built-in reduced motion support to adjust all variants accordingly
- Ensure cursor/interaction cues still visible for accessibility
---

### Focus Ring & Landmarks
- Keyboard focus: Always visible, high-contrast ring using accent color
- Never remove/hide :focus-visible (WCAG 2.2 AA)
- Apply focus styles to all links, buttons, inputs, custom controls
- Use semantic HTML5 landmarks: <header>, <nav>, <main>, <section>, <footer>. Use ARIA role only if custom widget
---

## Physics-Aware Animations
- Use Framer Motion for all interactive and reveal animations.
- **Hover States:** Animate scale, opacity, and/or shadow on Card, CTA, Nav, using spring transitions `{ type: 'spring', stiffness: 340, damping: 26 }` or similar for snap-back feel.
- **Section Reveals:** Components should fade/slide up on scroll into view, delay-cascade as needed (only animate once visible).
- **Tactile Cursor:** Feedback (scale, outline, ripple, etc) for clickable/interactive elements. Consider Framer's `whileHover`, `whileTap`, and custom variants.
- **Reduced Motion:** Always respect user preference. Wrap or skip animations if `prefers-reduced-motion` matches.

Sample animation config for reference:
```ts
<motion.div
  whileHover={{ scale: 1.04, boxShadow: 'var(--shadow-2)' }}
  transition={{ type: 'spring', stiffness: 340, damping: 26 }}
/>
```
---

_This design.md will evolve as the implementation proceeds. Next steps: finalize color palette and typefaces; establish token sheet for spacing, radii, elevation, shadow & motion._

## Performance, Accessibility, SEO: Lighthouse ≥95 Checklist
### Performance
- Use next/image for optimized loading and responsive images
- Preload critical Google Fonts using font-display: swap
- Use dynamic imports and route-based code splitting
- Minimize unused JavaScript & CSS
- Enable HTTP/2, compress assets (Brotli/gzip via host)
### Accessibility
- Ensure color contrast (AA standard): headings, text, CTA
- Provide alt text for all images/icons
- Use semantic HTML5 tags (header, nav, main, section, footer)
- Enable focus-visible rings; test full keyboard navigation
- Use ARIA where appropriate for custom controls
- Comply with prefers-reduced-motion: minimize animations if user preference set
### Best Practices
- Use HTTPS, set secure headers
- Avoid deprecated or experimental APIs in production
- Detect/report errors with user-friendly fallback UI
### SEO
- Include meta title/description
- Use next-seo or similar for structured data, Open Graph/Twitter cards
- Add canonical URLs, sitemap, robots.txt
---

## Accessibility: WCAG 2.2 AA Checklist
- Color contrast: All interactive text and CTAs must pass AA
- Headings: Hierarchically correct<br>- Images/icons: All require descriptive alt text
- Inputs: Associated labels, state feedback (error/success)
- Keyboard navigation for all interactive controls
- Focus visible and not removed anywhere
- Semantic HTML5 landmarks and correct roles
- No keyboard traps, tab sequence logical
- Reduced motion support for users with that preference
- Error messages must be clear and programmatically exposed

_Compliance status: All current tokens, CSS and HTML recommendations meet AA; further testing as new UI is built._
---
