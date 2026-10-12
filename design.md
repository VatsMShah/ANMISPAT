# ANM Ispat Website Design Guide

This document describes the existing visual language of the ANM Ispat website. Use it as context when creating or extending pages, components, illustrations, and other UI. Keep new work consistent with the shared brand system, and treat the page-specific styles below as exceptions rather than new global defaults.

## Design direction

The site presents ANM Ispat as a credible, modern industrial steel partner. Its visual character combines:

- **Industrial confidence:** charcoal surfaces, strong typography, steel and manufacturing photography, and clear, structured layouts.
- **Warm brand energy:** a vivid orange accent used sparingly to direct attention to key words, icons, rules, links, and calls to action.
- **Open, legible content:** white and very light gray sections, dark readable text, generous section spacing, and restrained borders.
- **Editorial imagery:** full-bleed photography or video with dark overlays for hero sections, balanced by clean text-led sections and image-led cards.

Do not introduce a new overall theme, competing accent palette, decorative texture, or heavy ornamental treatment without a clear page-specific reason.

## Color palette

The canonical shared colors are defined in `src/index.css` under Tailwind's `@theme`. Prefer these tokens or their existing Tailwind classes (`bg-brand-dark`, `text-brand-orange`, etc.) over repeating literal values.

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Brand orange | `--color-brand-orange` / `--color-brand-accent` | `#F36F35` | Primary accent, buttons, active/hover states, small rules, icon emphasis, and highlighted heading text. Both tokens currently resolve to the same orange. |
| Charcoal | `--color-brand-dark` | `#1F1F1F` | Main dark surface, high-emphasis text, and contrast against white. |
| Body gray | `--color-brand-body` | `#4C4C4C` | Default body copy color on light backgrounds. |
| White | `--color-brand-light` | `#FFFFFF` | Main page background and text on dark or orange surfaces. |
| Pale gray | `--color-brand-footer` | `#F4F5F7` | Footer and occasional softly differentiated sections. |
| Border gray | `--color-brand-border` | `#D8DBE0` | Subtle dividers, outlines, and structural separation. |

### Color usage

- Keep orange as an accent, not a large-area background by default. Pair it with white or charcoal for contrast.
- Light content sections are generally white; use pale gray to distinguish a section or footer without introducing a new color.
- Dark sections use charcoal or a dark image overlay. Use white or muted white text on top.
- On photographic backgrounds, add a dark tint or gradient behind copy so text remains legible.
- Orange-tinted shadows and low-opacity orange glows are used as restrained highlights around CTAs or steel imagery.
- There is no site-wide dark-mode theme. Dark hero sections are local compositions.

### Existing page-specific colors

Some sections use colors outside the canonical palette. Preserve these only where they belong; do not promote them to global brand colors:

- `#0A1120` and `#111923` are deep blue-charcoal hero backgrounds/overlays on the About and Careers pages.
- `#3B52A4` is used as a blue heading and small geometric accent in the Home page's About Overview section.
- `#646B73`, `#555D65`, and related grays appear as local secondary text colors.
- `#FF9A6B` is a light orange initial state on the Contact button; the established brand orange remains its hover color.
- `#DC5D27` appears as a darker orange hover state on a Careers CTA.

If a new section needs a supporting color, first try the shared orange, charcoal, white, and gray system. Introduce another hue only when there is a clear content or brand rationale.

## Typography

The Google Fonts are loaded in `index.html`; the global font roles are declared in `src/index.css`.

| Role | Typeface | Token / existing class | Guidance |
| --- | --- | --- | --- |
| Headings | Plus Jakarta Sans | `--font-heading`, `font-heading` | Bold and confident. Common weights are 700–800, often with tight tracking and compact line-height for large headlines. |
| Body copy | Inter | `--font-body` | Neutral, highly readable text. The body element uses this as its default font. Use regular weight for paragraphs and comfortable line spacing. |
| Badges and UI labels | Space Grotesk | `--font-badge` | Short uppercase labels, eyebrow text, navigation/CTA labels, and compact metadata. Often bold with expanded tracking. |

### Type hierarchy

- Use one clear page-level `h1`, followed by section-level `h2`s and subordinate headings in order.
- Large hero headings scale responsively, typically from about `2.25rem` on small screens to `3–4.5rem` on wider screens.
- Section headings are typically bold Plus Jakarta Sans, around `1.875–2.5rem`, with occasional larger display treatments.
- Body copy is generally `0.875–1.125rem`, with a relaxed line-height. Limit line length for introductory or hero copy.
- Eyebrow labels are small (around `0.75rem`), uppercase, bold, and widely tracked. Orange or muted white is common depending on the background.
- Use orange within a heading to emphasize a short phrase, not to color entire blocks of copy.

## Layout and spacing

- Center content in a responsive max-width container. Common widths are `1280px`, `1400px`, or Tailwind's `max-w-7xl`.
- Use consistent horizontal padding that grows with the viewport (commonly `px-6`, then wider padding at `sm`/`lg` breakpoints).
- Give major sections generous vertical spacing; `py-16` through `py-28` is a common range. Reduce this on mobile as needed.
- Use grid and flex layouts with clear alignment and whitespace. Common patterns include centered text-led introductions, two-column content/image sections, and responsive card grids.
- Keep page content within the shared centered container; full-bleed media and background colors may extend edge to edge.
- Stack columns and cards on narrow screens. Avoid fixed widths or clipped content at mobile sizes.

## Surfaces, imagery, and components

- **Navigation:** white sticky header with a subtle lower border/shadow, centered logo, restrained gray links, and orange hover/active accents. Preserve room for the header and its top information strip.
- **Hero sections:** full-width video or photography, `object-cover` imagery, a dark overlay/gradient, left-aligned or centered copy, and a prominent CTA. Keep the text block constrained in width.
- **Content sections:** predominantly white backgrounds, with occasional pale-gray bands, fine dividers, and simple accent rules.
- **Cards:** favor imagery and content hierarchy over decorative containers. Existing corners range from square/softly rounded to `rounded-2xl`/`rounded-3xl` on image cards. Use one radius consistently within a component; reserve pill radii for pill buttons or badges.
- **Footer:** pale gray surface, charcoal headings, muted body text, a top border, and orange interactive accents.
- **Icons:** use the existing Lucide icon library and keep icon strokes/sizing simple and consistent with the adjacent text.
- **Photography:** prioritize authentic steel, industrial facilities, construction, infrastructure, and people-at-work imagery. Use brand marks/logos as supplied assets; do not approximate or recolor them as decoration.

## Buttons, links, and interaction

- Make the primary action visually obvious with a solid brand-orange fill, white text, and concise copy. A slight lift or orange-tinted shadow on hover is appropriate.
- Secondary actions may use a transparent or white-on-dark treatment with a subtle border.
- Existing button shapes vary by component (small radius, square, and pill). Match the surrounding page/component rather than adding a new shape style.
- Links are generally understated at rest and turn orange on hover; navigation/footer links may use a short underline-reveal treatment.
- Keep transitions short and purposeful (typically color, opacity, transform, or shadow); avoid motion that competes with the content.
- Provide a visible keyboard focus indicator. Preserve semantic controls, useful link text, and sufficient foreground/background contrast.
- Respect `prefers-reduced-motion` for new animation. The shared page entrance fade and some component-specific motion exist today, but reduced-motion support is not applied uniformly yet.

## Responsive behavior

The site uses Tailwind responsive breakpoints (`sm`, `md`, `lg`) alongside a few CSS media queries. Apply the same mobile-first approach:

- Start with a readable single-column layout.
- Reveal wider navigation, multi-column layouts, larger type, and increased spacing at appropriate breakpoints.
- Preserve readable hero copy over media at every viewport.
- Let card grids, logo strips, and CTA groups wrap or stack when needed.
- Do not rely on hover alone to communicate interactive state; touch and keyboard users need clear interaction cues too.

## Guidance for AI design and implementation agents

When generating a new page or component:

1. Reuse the shared color and font tokens in `src/index.css`; avoid creating alternate global tokens for colors already covered.
2. Follow the existing content width, mobile-first spacing, and typography hierarchy.
3. Use orange to emphasize important actions or short highlights, not as a second body-text color.
4. Match the local page's surface and component style. Keep documented blue/dark hero treatments local to their existing context.
5. Use real project imagery and logo assets when suitable. Use overlays on media rather than sacrificing text contrast.
6. Keep motion restrained, responsive, and reduced-motion aware; retain visible focus states and semantic heading order.
7. Check the rendered result at mobile and desktop widths and verify that it feels consistent with the shared navigation, footer, and neighboring sections.

## Source of truth and current variation

- **Global theme and base typography:** `src/index.css`.
- **Font loading:** `index.html`.
- **Shared page shell, navigation, routes, and footer:** `src/App.jsx`, `src/components/Navbar.jsx`, and `src/components/Footer.jsx`.
- **Representative page treatments:** `src/components/Hero.jsx`, `src/components/About.jsx`, `src/components/Careers.jsx`, and `src/components/Products.jsx`.

The implementation has a strong shared palette but is not fully tokenized: some components use literal color values, locally defined animations, and different button/corner treatments. For new work, use the shared system above as the default and retain local variation only when it serves the page's content.
