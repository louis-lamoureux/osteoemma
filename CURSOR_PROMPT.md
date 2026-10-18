# Cursor kickoff prompt

Open this folder in Cursor, run `npm install`, then paste the prompt below into Cursor's chat (Agent mode).
The file `.cursor/rules/osteo-site.mdc` is loaded automatically on every request, so the design rules stay in force for later prompts too.

---

```text
You're picking up an Astro static site for a solo osteopath in Montréal, Québec. Read
.cursor/rules/osteo-site.mdc, README.md, src/layouts/BaseLayout.astro, src/data/site.ts and
one page (src/pages/index.astro) before changing anything.

CONTEXT
- 5 pages: / (home), /services, /about, /osteopathy (foundations of osteopathy), /booking.
- The visual design is approved and was ported 1:1 from a mockup. Markup and inline styles
  must stay as they are unless I ask for a change. No Tailwind, no UI frameworks, no restyling.
- Visual language: nature — trees (roots, rings, leaves) and a flowing river. Pastel greens and
  browns. All section dividers are curved (<Wave /> component); never straight lines.
- Copy is lorem ipsum. Anything in [brackets] is a placeholder for real content.
- Booking uses her Go Rendez-Vous scheduler. src/components/GoRendezVousWidget.astro is a
  visual placeholder; the real embed snippet will replace the inside of its data-grv-embed block.

HOW I WANT YOU TO WORK
- Make small, focused changes and tell me which files you touched.
- Reuse existing section patterns and the Wave component for anything new.
- Run `npm run build` after each task and fix any errors before reporting back.
- Ask me rather than guess for real-world facts: her name, credentials, prices, address,
  association, Go Rendez-Vous embed code or URL. Never invent these.

FIRST TASK
Confirm the project runs (`npm run dev`), then give me a short summary of the structure and a
checklist of every placeholder I need to supply (grep for "[" placeholders, "Lorem", "Photo —",
"href=\"#\"" and the Go Rendez-Vous placeholder), grouped by page. Don't change any files yet.

UPCOMING TASKS (I'll ask for these one at a time)
1. Content: replace lorem ipsum and [placeholders] with the text I provide.
2. Bilingual FR/EN: set up Astro i18n routing with French as the default locale (/ in French,
   /en/... in English), move copy into per-locale content, and wire the FR/EN switch in the
   header. Keep identical markup for both languages.
3. Go Rendez-Vous: swap the placeholder for the official embed snippet I'll paste, keeping the
   white card wrapper. Set site.goRendezVousUrl as a fallback link.
4. Photos: replace the blob placeholders ("Photo — …") with optimized images via astro:assets
   <Image />, keeping each blob's border-radius and aspect ratio. Add meaningful alt text.
5. SEO: per-page titles/descriptions, Open Graph tags, @astrojs/sitemap, and JSON-LD
   (MedicalBusiness / Physician-style LocalBusiness with address, hours, phone).
6. Privacy policy page (Québec Law 25) at /privacy (and /en/privacy), linked from the footer.
7. Deployment: configure for Netlify, Vercel or Cloudflare Pages (I'll choose), with the real
   domain in astro.config.mjs `site`.
8. Optional clean-up: move repeated inline hex colours to the CSS variables in
   src/styles/tokens.css, with zero visual change.
```
