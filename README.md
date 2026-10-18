# Osteopath website — Montréal

Static multi-page site built with [Astro](https://astro.build), ported 1:1 from the approved design mockup.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

Requires Node 18.20+ (Node 20 or 22 recommended).

## Pages

| Route | File | Notes |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home |
| `/services` | `src/pages/services.astro` | Services list, first-visit steps |
| `/about` | `src/pages/about.astro` | Story, "growth rings" timeline, credentials |
| `/osteopathy` | `src/pages/osteopathy.astro` | Foundations, principles, FAQ accordion |
| `/booking` | `src/pages/booking.astro` | Go Rendez-Vous placeholder + clinic info |

## Structure

```
src/
  layouts/BaseLayout.astro       <head>, header, footer, per-page colour themes
  components/
    Header.astro                 logo, nav, Book now, FR/EN switch
    Footer.astro
    Wave.astro                   curved section divider (rise | fall | ripple | drift)
    FaqAccordion.astro           one-open-at-a-time accordion (vanilla JS)
    GoRendezVousWidget.astro     PLACEHOLDER for the Go Rendez-Vous embed
  data/
    site.ts                      name, address, phone, email, hours, booking URL
    faqs.ts                      FAQ copy
    availability.ts              mock slots for the placeholder only
  styles/tokens.css              palette + fonts as CSS variables (reference)
public/favicon.svg
```

## Notes

- Styling is inline on purpose, so the markup matches the approved mockup exactly. `src/styles/tokens.css` documents the palette for a later, optional migration.
- Placeholders: copy is lorem ipsum; anything in `[brackets]`, every "Photo — …" blob, and every `href="#"` still needs real content.
- Go Rendez-Vous: replace the inside of the `data-grv-embed` block in `GoRendezVousWidget.astro` with the embed snippet from her account, and set `goRendezVousUrl` in `src/data/site.ts`.
- Working in Cursor: see `CURSOR_PROMPT.md`. Project rules live in `.cursor/rules/osteo-site.mdc`.
