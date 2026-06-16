# DrQuran Academy v2 — Design Ideas

## Context
Original site: Angular SPA, Bootstrap 5, Metropolis font, teal primary (#5bc1ac), dark navy nav (#16234b), gold accent (#F4B400).
Key weaknesses: Generic Bootstrap layout, no hero section on homepage, poor course discovery, minimal visual hierarchy, no stats/impact section.

---

<response>
<text>
## Idea A — "Sacred Geometry Minimalism"

**Design Movement**: Islamic Geometric Modernism meets Swiss Grid Typography

**Core Principles**:
1. Geometric Islamic patterns as subtle background motifs (not kitschy — refined, low-opacity)
2. Extreme typographic hierarchy: massive display numerals for stats, tight body text
3. Asymmetric split-screen layouts with deliberate negative space
4. Warm off-white paper texture as base, not pure white

**Color Philosophy**:
- Deep forest green (#1a3a2a) as primary — evokes the color of the Quran cover, gravitas
- Warm gold (#c8963e) as accent — Islamic illumination manuscripts
- Cream (#f7f3ec) background — aged parchment warmth
- Charcoal (#2d2d2d) for body text

**Layout Paradigm**:
- Diagonal split hero: left half dark green with Arabic calligraphy pattern, right half cream with headline
- Staggered card grid for courses (not uniform rows)
- Full-bleed section dividers using geometric SVG patterns

**Signature Elements**:
1. Octagonal geometric border motif used as card frames and section dividers
2. Arabic numerals (١٢٣) alongside English stats for cultural authenticity
3. Gold underline accent on key headings

**Interaction Philosophy**:
- Cards lift with a subtle shadow increase on hover
- Section entrance animations: slide-in from left for text, fade-in for images
- Smooth scroll with progress indicator

**Animation**:
- Entrance: staggered fade-up (50ms delay between items)
- Hover: translateY(-4px) + shadow deepening
- CTA button: gold shimmer sweep on hover

**Typography System**:
- Display: Playfair Display (serif) — weight 700/900 for headlines
- Body: Source Sans 3 (sans-serif) — weight 400/600
- Arabic accent: Amiri for any Arabic text
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idea B — "Modern Islamic Academy" (CHOSEN)

**Design Movement**: Contemporary Educational Platform with Islamic Warmth

**Core Principles**:
1. Clean, editorial layout with strong typographic hierarchy
2. Deep navy (#0f1f3d) as anchor color — authority, trust, night sky
3. Teal (#3dbfa0) as energy color — growth, learning, fresh
4. Generous whitespace with purposeful density in content zones

**Color Philosophy**:
- Navy (#0f1f3d): primary nav, headings, authority sections
- Teal (#3dbfa0): CTAs, highlights, active states — inherited from original brand
- Amber (#f59e0b): donation/zakat accent — warmth, generosity
- Off-white (#f8fafc): page background — clean but not sterile
- Slate (#64748b): secondary text

**Layout Paradigm**:
- Diagonal hero section with a large Quran/learning image on the right
- Horizontal scrolling course cards on mobile, 3-column grid on desktop
- Sticky top navigation with transparent-to-solid scroll behavior
- Full-width stats band with animated counters
- Alternating left/right content sections for variety

**Signature Elements**:
1. Subtle Islamic geometric pattern as hero overlay (very low opacity)
2. Rounded pill badges for course categories
3. Gradient teal-to-navy on the hero section

**Interaction Philosophy**:
- Smooth scroll navigation
- Course cards with hover reveal of "Enroll Free" button
- Animated number counters when stats section enters viewport

**Animation**:
- Hero text: word-by-word fade-up
- Stats: count-up animation
- Cards: stagger-in on scroll
- Nav: blur backdrop on scroll

**Typography System**:
- Display: DM Serif Display — elegant, editorial
- Body: DM Sans — clean, modern, highly readable
- Hierarchy: 64px hero → 40px h2 → 28px h3 → 16px body
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea C — "Warm Scholarly Depth"

**Design Movement**: Academic Warmth meets Digital Publishing

**Core Principles**:
1. Warm, book-like aesthetic — feels like a premium educational institution
2. Rich texture: subtle paper grain, soft shadows, warm tones
3. Generous typography: large, confident headings with tight leading
4. Community-first: teacher profiles and testimonials are hero-level content

**Color Philosophy**:
- Warm ivory (#faf7f2): background — like quality paper
- Deep burgundy (#7c2d12): primary — scholarly authority, Islamic manuscript tradition
- Soft teal (#5bc1ac): inherited brand accent — kept for recognition
- Dark charcoal (#1c1917): body text — high contrast on warm background

**Layout Paradigm**:
- Magazine-style homepage with editorial grid
- Large feature image on left, stacked text blocks on right for hero
- Masonry-style testimonials grid
- Full-bleed teacher section with overlapping card layout

**Signature Elements**:
1. Drop-cap style large initial letters on section introductions
2. Horizontal rule dividers with small geometric diamond center
3. Pull-quote style testimonials with large quotation marks

**Interaction Philosophy**:
- Minimal animation — content-first approach
- Hover states are color shifts, not movement
- Focus on readability and trust

**Animation**:
- Subtle fade-in on scroll
- No aggressive animations — scholarly restraint

**Typography System**:
- Display: Cormorant Garamond — classical, scholarly
- Body: Lato — clean, readable
- Accent: Amiri for Arabic text
</text>
<probability>0.06</probability>
</response>

---

## Selected Design: **Idea B — "Modern Islamic Academy"**

Clean, editorial layout with strong typographic hierarchy. Deep navy + teal + amber palette. DM Serif Display + DM Sans typography. Animated stats, diagonal hero, course cards with hover effects.
