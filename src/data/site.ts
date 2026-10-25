/**
 * Practice details shown in the header and footer.
 * Translated sentences live in src/i18n/ui.ts.
 * Everything in [brackets] is a placeholder waiting for real content.
 */
export const site = {
  name: 'Emmanuële Achaintre',
  tagline: 'Ostéopathe D.O.',

  address: {
    street: '[0000, rue Lorem]',
    city: 'Montréal (QC) H0H 0H0',
    transit: '[Métro station]',
  },

  phone: { label: '[514 000-0000]', href: '#' }, // e.g. 'tel:+15140000000'
  email: { label: '[hello@lorem.ca]', href: '#' }, // e.g. 'mailto:hello@example.ca'

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
