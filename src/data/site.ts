/**
 * Practice details shown in the header and footer.
 * Everything in [brackets] is a placeholder waiting for real content.
 */
export const site = {
  name: 'Lorem Ipsum',
  tagline: 'Ostéopathe · Montréal',
  footerBlurb: 'Ostéopathe à Montréal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  address: {
    street: '[0000, rue Lorem]',
    city: 'Montréal (QC) H0H 0H0',
    transit: '[Métro station]',
  },

  phone: { label: '[514 000-0000]', href: '#' }, // e.g. 'tel:+15140000000'
  email: { label: '[hello@lorem.ca]', href: '#' }, // e.g. 'mailto:hello@example.ca'

  hours: [
    'Mon–Thu · [9:00–19:00]',
    'Fri · [9:00–15:00]',
    'Sat–Sun · Closed',
  ],

  legalLine: '© 2026 Lorem Ipsum, ostéopathe · [Association] member #0000',
  privacyUrl: '#', // Quebec Law 25 privacy policy page

  /** Her public Go Rendez-Vous booking page. Fallback if the embed script does not run. */
  goRendezVousUrl: 'https://www.gorendezvous.com/hakini?companyId=101639',
};

export type PageKey = 'home' | 'services' | 'about' | 'osteopathy' | 'booking';

export const nav: { key: Exclude<PageKey, 'booking'>; href: string; label: string }[] = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'services', href: '/services', label: 'Services' },
  { key: 'about', href: '/about', label: 'About' },
  { key: 'osteopathy', href: '/osteopathy', label: 'Osteopathy' },
];
