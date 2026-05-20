---
name: DS Scalp Micropigmentation
description: Editorial, masculine, medical-grade luxury for a premium SMP specialist in Thessaloniki.
colors:
  ink: "oklch(0.34 0.05 260)"
  bone: "oklch(0.97 0.012 240)"
  logo-blue: "oklch(0.55 0.09 245)"
  logo-blue-soft: "oklch(0.78 0.08 235)"
  surface: "oklch(0.94 0.015 235)"
  surface-elevated: "oklch(0.90 0.020 235)"
  muted: "oklch(0.93 0.015 235)"
  muted-foreground: "oklch(0.46 0.03 250)"
  border: "oklch(0.84 0.025 235)"
  destructive: "oklch(0.55 0.22 27)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 1rem + 7vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 1.2rem + 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    fontFeature: "\"ss01\", \"cv11\""
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.28em"
rounded:
  none: "0"
  sm: "2px"
  md: "4px"
spacing:
  gutter: "24px"
  gutter-lg: "40px"
  block: "40px"
  section: "112px"
  section-lg: "144px"
components:
  button-primary:
    backgroundColor: "{colors.logo-blue}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.logo-blue-soft}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-outline-hover:
    textColor: "{colors.logo-blue}"
  card:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "40px"
  input:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: DS Scalp Micropigmentation

## 1. Overview

**Creative North Star: "The Quiet Atelier"**

This is the private studio of a master craftsman, not a clinic foyer and never a sales floor. Everything reads as deliberate: serif headlines set tight and large, cool slate neutrals, hairline rules, a film-grain hush over the surfaces, and a single restrained blue that marks the path forward. The work speaks; the interface gets out of its way. Confidence here is communicated through restraint, the way an expensive object earns trust by what it refuses to do.

The system rejects the cheap-clinic playbook outright: no neon "BOOK NOW", no stock smiling models, no before/after spam wall, no discount-banner urgency. It refuses the generic SaaS / AI-template look: no uniform shadcn card grids, no gradient hero blobs, no hero-metric counters. And it stays clear of the trendy and loud: no brutalism, no neon, no showy choreography. It also avoids the opposite failure, the cold sterile hospital (pure white, clinical teal, intimidating). Warmth and clinical credibility coexist through tone and restraint, not decoration.

Density is generous. Large type sits against wide whitespace; sections breathe with deliberate vertical rhythm rather than uniform padding. The atmosphere is calm, masculine, and discreet, because the visitor is private and a little vulnerable, and the design's job is reassurance before persuasion.

**Key Characteristics:**
- Editorial serif display (Fraunces) over a quiet humanist sans (Inter)
- Cool slate-blue neutral foundation, never pure black or white
- One accent, Logo Blue, used sparingly as wayfinding
- Sharp corners, hairline borders, film grain instead of decoration
- Soft ambient shadows for subtle dimensionality, never heavy or hard
- Calm, scroll-revealed motion that honors `prefers-reduced-motion`

## 2. Colors

A cool, slate-derived palette pulled straight from the DS logo: deep slate-blue ink on a light cool ground, with one mid-blue accent that does all the pointing.

### Primary
- **Logo Blue** (`oklch(0.55 0.09 245)`): The single accent, drawn from the DS mark. Reserved for wayfinding: eyebrows, primary CTA fills, active nav, step numbers, star ratings, italic emphasis words in headlines, and the text selection highlight. Its restraint is the point. Internally the CSS variable is still named `--gold` for legacy reasons; the canonical name is Logo Blue.
- **Logo Blue Soft** (`oklch(0.78 0.08 235)`): The powder/sky tone from the logo mark. Used almost exclusively as the primary-button hover state, a gentle lightening rather than a color shift.

### Neutral
- **Ink** (`oklch(0.34 0.05 260)`): Deep slate-blue. The foreground for all text and the dark-on-light foundation. Stands in for black, but tinted toward the brand hue. Never `#000`.
- **Bone** (`oklch(0.97 0.012 240)`): Very light cool-blue background. The default page and card ground. Stands in for white, tinted. Never `#fff`.
- **Surface** (`oklch(0.94 0.015 235)`): Soft blue card and section tint, used for gentle tonal separation (e.g. the testimonials band at 30% strength).
- **Surface Elevated** (`oklch(0.90 0.020 235)`): A half-step deeper surface for secondary fills.
- **Muted** (`oklch(0.93 0.015 235)`): Input fields and quiet fills.
- **Muted Foreground** (`oklch(0.46 0.03 250)`): Body copy and secondary text where ink would be too heavy.
- **Border** (`oklch(0.84 0.025 235)`): Hairline rules, dividers, and card outlines. Frequently used at reduced opacity (`/60`) for an even quieter line.

### Tertiary
- **Destructive** (`oklch(0.55 0.22 27)`): Form errors only. The one warm hue in the system; never decorative.

### Named Rules
**The One Voice Rule.** Logo Blue appears on no more than ~10% of any screen. It is wayfinding, not decoration. If two elements both want the accent, one of them is wrong.

**The Tinted Neutral Rule.** Pure `#000` and `#fff` are forbidden. Every neutral carries a trace of the brand hue (chroma ~0.01–0.05 toward 240–260). The cool tint is what makes the slate read as intentional rather than default.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A high-contrast literary serif paired with a quiet humanist sans. Fraunces brings editorial warmth and craft to headlines; Inter recedes into legible, unfussy body copy. The pairing reads as a serious magazine feature, not a tech product. Note: Google Fonts `@import` was deliberately removed, so until Fraunces is self-hosted the display stack renders as Georgia, which holds the same editorial register.

### Hierarchy
- **Display** (400, `clamp(3rem, 1rem + 7vw, 5.5rem)`, line-height 0.92): Hero and final-CTA headlines. Set tight and large, letter-spacing `-0.02em`, balanced wrapping.
- **Headline** (400, `clamp(2rem, 1.2rem + 3vw, 3rem)`, line-height 1.05): Section titles. Italic + Logo Blue used for the emphasized word.
- **Title** (400, `1.5rem`, line-height 1.2): Card and step headings.
- **Body** (400, `clamp(1rem, 0.95rem + 0.3vw, 1.125rem)`, line-height 1.65): Paragraph copy in muted-foreground, capped at ~65ch (`max-w-lg`/`max-w-xl`). Enables `ss01` and `cv11` font features.
- **Label / Eyebrow** (500, `0.7rem`, letter-spacing `0.28em`, UPPERCASE): The signature kicker. Always Logo Blue, always wide-tracked, sits above headlines and on CTAs.

### Named Rules
**The Serif-Headline Rule.** Every `h1`–`h4` is Fraunces at weight 400. Headings are never bold sans; weight contrast comes from the serif/sans split, not from heavy weights.

**The Eyebrow Rule.** Section intros lead with an uppercase, wide-tracked Logo Blue eyebrow. It is the system's connective tissue and must use the `0.28em` tracking, never a tighter approximation.

## 4. Elevation

The system is flat by inheritance: depth has historically come from film grain, hairline borders, and tonal surface shifts rather than shadows. The chosen direction is to introduce **soft ambient shadows**, diffuse and low-contrast, for a touch of dimensionality on cards and the primary CTA. Shadows stay atmospheric, never hard or dark. If a shadow looks like a drop shadow from a 2014 app (tight blur, dark alpha), it is wrong: increase the blur, drop the opacity, widen the spread.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 8px 28px oklch(0.34 0.05 260 / 0.06)`): Resting shadow for cards and elevated surfaces. Barely-there lift.
- **Ambient Hover** (`box-shadow: 0 16px 44px oklch(0.34 0.05 260 / 0.10)`): Slightly deeper, paired with a `translateY(-2px)`, as hover feedback on interactive cards and CTAs.

### Named Rules
**The Diffuse-Only Rule.** Shadows are always soft, wide, and tinted with ink (never neutral gray, never black). A small blur radius or alpha above ~0.12 is forbidden. Depth whispers; it does not announce.

## 5. Components

The component feel is **refined and restrained**: sharp corners, uppercase wide-tracked labels, hairline borders, quiet transitions. Color and motion are spent sparingly.

### Buttons
- **Shape:** Sharp, square corners (0 radius). The editorial CTAs deliberately use no border-radius.
- **Primary:** Logo Blue fill, Ink text, padding `16px 28px`, uppercase label type at `0.25em` tracking. The conversion button across the site.
- **Hover / Focus:** Background shifts to Logo Blue Soft (a gentle lightening); color transition only. Trailing arrow icons translate `+1` on the x-axis. Focus-visible shows a 1px ring in Logo Blue.
- **Outline / Secondary:** Bone background, 1px Border, Ink text, same padding and label type. Hover shifts border and text to Logo Blue.

### Cards / Containers
- **Corner Style:** Sharp (0 radius).
- **Background:** Bone, occasionally Surface for tonal banding.
- **Shadow Strategy:** Flat at rest or Ambient Low; Ambient Hover on interactive cards (see Elevation).
- **Border:** 1px Border, frequently at `/60` opacity. The promise grid uses a 1px gap over a border-tinted background to render hairline dividers between cells.
- **Internal Padding:** Generous, `32–40px` (`p-8`/`p-10`).

### Inputs / Fields
- **Style:** Muted fill, subtle border, slightly rounded (`4px`, the one place softness is allowed for hit-area clarity).
- **Focus:** 1px Logo Blue ring.
- **Error:** Destructive hue for messaging only.

### Navigation
- **Style:** Fixed header, transparent over the hero, transitioning to `bg-background/85` with `backdrop-blur-xl` and a hairline bottom border once scrolled past 16px.
- **Typography:** Inter, small, muted-foreground; active route is Logo Blue.
- **Mobile:** Full-height drawer with large Fraunces nav links (`text-3xl`), staggered reveal, hairline dividers, and a square Logo Blue book CTA at the base.

### Signature: Film Grain & Reveal
- **Grain:** A `.grain` overlay (SVG fractal noise, 4% opacity, overlay blend) sits on hero and CTA sections for analog texture. It is the system's atmosphere, applied to full-bleed sections, never to small components.
- **Reveal:** Content rises and fades in on scroll (`translateY(24px)` → `0`, opacity 0 → 1, ~1s `cubic-bezier(0.22, 1, 0.36, 1)`), staggered by ~100ms via an IntersectionObserver. Hero elements use `fade-up` with `delay-100/200/300`. All of it must collapse to instant, full-content rendering under `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** keep Logo Blue under ~10% of any screen, as wayfinding only (eyebrows, the one CTA, active nav, step numbers).
- **Do** set every headline in Fraunces at weight 400; let the serif/sans split carry hierarchy, not bold weights.
- **Do** lead sections with the uppercase, `0.28em`-tracked Logo Blue eyebrow.
- **Do** tint every neutral toward the brand hue; use Ink for "black" and Bone for "white".
- **Do** keep CTAs and cards sharp-cornered (0 radius); reserve the 4px softening for inputs only.
- **Do** use soft, wide, ink-tinted ambient shadows when you want lift, paired with a small `translateY` on hover.
- **Do** honor `prefers-reduced-motion`: reveals and fades collapse to instant, content-complete rendering.
- **Do** let real results (the gallery) carry the argument: show, don't tell.

### Don't:
- **Don't** build the cheap-clinic look: no neon "BOOK NOW!!!", no stock smiling models, no before/after spam wall, no discount-banner urgency.
- **Don't** ship the generic SaaS / AI-template look: no uniform shadcn card grids, no gradient hero blobs, no hero-metric counters.
- **Don't** go trendy, loud, or gimmicky: no brutalism, no neon, no heavy showy animation.
- **Don't** drift into the cold, sterile hospital extreme (pure white + clinical teal). Warmth and credibility coexist.
- **Don't** use `#000` or `#fff` anywhere.
- **Don't** use gradient text (`background-clip: text`) or colored side-stripe borders (`border-left` greater than 1px as an accent). Both are forbidden.
- **Don't** use hard, dark, tight-blur drop shadows. If it looks like a 2014 app shadow, the blur is too small and the alpha too high.
- **Don't** apply grain or heavy motion to small components; grain belongs on full-bleed sections.
- **Don't** treat one language as primary: Greek and English layouts and tone must both feel native.
