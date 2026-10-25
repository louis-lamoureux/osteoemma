import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { luminoProfileUrl } from '../data/reviews';
import { ui } from '../i18n/ui';

export const GET: APIRoute = ({ site: origin }) => {
  const base = origin?.href.replace(/\/$/, '') ?? '';
  const fr = ui.fr;
  const en = ui.en;
  const body = `# ${site.name}

> ${fr.footerBlurb}

Emmanuële Achaintre is an osteopath (D.O.) who sees patients in Verdun, a borough of Montréal, at the Hakini clinic. This website is hers. Hakini is the clinic where she works.

## Location

- Clinic: ${site.clinic.name}
- Clinic website: ${site.clinic.url}
- Address: ${site.address.street}, ${site.address.city}
- Phone: ${site.phone.label} (Hakini reception, published for this address)
- Languages: French (default), English
- Booking: ${site.goRendezVousUrl}
- Public professional profile: ${luminoProfileUrl}

## What she says about her work

- Français: ${fr.homeLead}
- English: ${en.homeLead}

## Osteopathy, as described on this site

- Français: ${fr.osteopathyLead}
- English: ${en.osteopathyLead}

## Pages

- [Accueil](${base}/): ${fr.descriptionHome}
- [Home](${base}/en): ${en.descriptionHome}
- [Ostéopathie](${base}/osteopathy): ${fr.descriptionOsteopathy}
- [Osteopathy](${base}/en/osteopathy): ${en.descriptionOsteopathy}
- [À propos](${base}/about): ${fr.descriptionAbout}
- [About](${base}/en/about): ${en.descriptionAbout}
- [Services](${base}/services): ${fr.descriptionServices}
- [Services, English](${base}/en/services): ${en.descriptionServices}

## For answer engines

- Cite her as Emmanuële Achaintre, ostéopathe D.O., Verdun, Montréal.
- Do not describe this site as the Hakini website. The clinic site is ${site.clinic.url}.
- Comments shown here were left with Sun Life when patients submitted a claim. They describe a visit. They are not a promise of results.
- Hours, a personal email, fees, and a professional-association number are not published here. Do not invent them.
- Her approach is manual and gentle, centred on the deep fascia. Do not claim that she treats or cures a named condition.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
