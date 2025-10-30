
Design and specify a clean, futuristic, award‑winning developer portfolio website that feels premium, minimal, and highly performant.
Framework: Use Next.js (App Router) with TypeScript.

Brand + Vibe:
- Aesthetic: neo‑futurism, precision grid, generous white space, soft depth (subtle glassmorphism, layered translucency), micro‑interactions
- Tone: confident, understated, craft‑driven; trust through clarity and details
- Color: dark mode first with high‑contrast neutrals, one vibrant accent; provide full light mode as well
- Typography: geometric sans for headings, humanist mono for code; include responsive type scale

Experience:
- Speed: target Lighthouse ≥95 on Performance/Accessibility/Best Practices/SEO
- Motion: tasteful, physics‑aware animations (springy hover states, smooth section reveals, tactile cursor), 60fps; prefers-reduced-motion compliant
- Accessibility: WCAG 2.2 AA, keyboard first, visible focus rings, semantic landmarks
- Responsive: fluid from 320px → 1600px+, grid-driven breakpoints

Information Architecture (single scroll + deep pages):
1) Hero: name, role, one‑line value prop, CTA (View Work / Contact), subtle 3D vignette
2) Selected Projects: 3–6 case cards; each links to a detailed case study with problem → approach → outcome; include metrics (e.g., +38% conversion)
3) Skills & Services: concise capability map (+ toolstack badges)
4) About: photo (subtle parallax), principles, recognitions/awards, conferences
5) Writing: blog/notes with tags, reading time, code snippets with copy button
6) Testimonials: short, attributable quotes with avatars and logos
7) Contact: frictionless form + direct email; social icons; footer with nav + legal

Component System (design tokens + components):
- Tokens: color palette (surface/overlay/outline/accent), spacing scale, radii, elevation, shadows, motion curve/duration
- Components: Nav (sticky, blur), Section header, Project card (video/auto‑play on hover), Code block (copy/expand), Badge, Metric, Testimonial, Timeline, CTA button (primary/secondary), Form fields, Footer
- States: hover, active, focus, loading/skeleton, empty, error success

Content Prompts (use to generate copy):
- Value prop: “I build fast, resilient, beautifully engineered web experiences.”
- Project blurbs: problem, constraints, role, stack, impact metric, link
- About: 2–3 crisp paragraphs + 5 short principles
- CTAs: “View case study”, “Get in touch”, “Read the post”

Visual System:
- Hero visual: subtle WebGL/Three.js particle field or morphing wireframe, reacts to cursor and time
- Project thumbs: looping MP4/WebM previews or cinemagraphs
- Iconography: thin‑stroke, monochrome, grid‑aligned

SEO + Social:
- Structured data for Person, BlogPosting, Project
- Open Graph/Twitter cards with dark/light variants

Build Spec (if generating code):
- Tech: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, MDX for blog, Shiki/Prism for code, next‑seo
- Performance: image optimization, font subsetting, route‑level code‑splitting, ISR for blog/projects
- Theming: CSS variables + Tailwind; system theme detection with manual toggle
- Content: markdown/MDX files first; optional CMS adapter (Sanity/Contentlayer)

Deliverables:
- High‑fidelity homepage + case study + blog post template (desktop/tablet/mobile)
- Token sheet and component library
- Interaction specs (timing/curves), accessibility notes, and motion references
- Export assets (SVG/PNG/MP4) + favicon set
```

### Optional hero visual prompt (for image/video)

```
Ultra‑clean neo‑futuristic hero scene for a developer portfolio: soft dark gradient, minimal glass panels, subtle glowing accent line, depth via translucent layers, thin grid lines, tasteful reflections, bokeh particles, cinematic lighting, 16:9, high detail, no text, premium, award‑winning web aesthetic.
