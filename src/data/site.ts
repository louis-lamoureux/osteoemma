/**
 * Practice details shown in the header and footer.
 * Translated sentences live in src/i18n/ui.ts.
 * Everything in [brackets] is a placeholder waiting for real content.
 */
export const site = {
  name: 'Emmanuële Achaintre',
  tagline: 'Ostéopathe D.O.',

  address: {
    street: '4255, rue Wellington, bureau 202',
    city: 'Montréal (Verdun) QC H4G 1V9',
    transit: 'Clinique Hakini',
    locality: 'Montréal',
    region: 'QC',
    postalCode: 'H4G 1V9',
    country: 'CA',
  },

  /** Reception number published by Hakini for this address. */
  phone: { label: '514 886-2946', href: 'tel:+15148862946' },
  email: { label: '[hello@lorem.ca]', href: '#' }, // e.g. 'mailto:hello@example.ca'

  clinic: {
    name: 'Hakini — Clinique d’ostéopathie & santé globale',
    url: 'https://www.hakini.ca/fr/',
  },

  privacyUrl: '#', // Quebec Law 25 privacy policy page

  /** Her public Go Rendez-Vous booking page. Fallback if the embed script does not run. */
  goRendezVousUrl: 'https://www.gorendezvous.com/hakini?companyId=101639',
};

export type PageKey = 'home' | 'services' | 'about' | 'osteopathy' | 'booking';

export const nav: { key: Exclude<PageKey, 'booking'>; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'osteopathy', href: '/osteopathy' },
];
