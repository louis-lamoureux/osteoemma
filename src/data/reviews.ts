/**
 * Patient comments from Emmanuële Achaintre's public Lumino profile
 * (Sun Life), fetched from getProviderFeedback and getProviderReviews.
 * Text is kept as published. Only five-star comments are kept, and
 * comments that claim a treatment outcome are left out.
 */
export interface Review {
  date: string;
  rating: number;
  text: string;
}

export const luminoProfileUrl =
  'https://providersearch.sunlife.ca/fr/profil-du-professionnel-de-la-sante/osteopathie/hakini-clinique-dosteopathie-sante-globale/emmanuele-achaintre-951349-667186/';

export const reviews: Review[] = [
  {
    date: '15 mai 2026',
    rating: 5,
    text: "Great Osteopath with amazing skill. She really cares about patient's well-being. I'd recommend her to anyone.",
  },
  {
    date: '4 novembre 2025',
    rating: 5,
    text: "Passionnée et passionnante et très à l'écoute de nos douleurs et sait nous rassurer !",
  },
  {
    date: '13 mai 2025',
    rating: 5,
    text: 'La meilleure ostéopathe rencontrée à ce jour',
  },
  {
    date: '30 avril 2025',
    rating: 5,
    text: 'excellent',
  },
  {
    date: '29 décembre 2024',
    rating: 5,
    text: "Excellente écoute. Ambiance de la clinique très relaxante.",
  },
  {
    date: '16 décembre 2024',
    rating: 5,
    text: "Elle est très gentille et à l'écoute. J'ai vraiment aimé ma visite",
  },
  {
    date: '5 décembre 2024',
    rating: 5,
    text: 'She’s amazing!',
  },
  {
    date: '26 novembre 2024',
    rating: 5,
    text: 'She’s excellent',
  },
  {
    date: '12 novembre 2024',
    rating: 5,
    text: 'She’s amazing',
  },
  {
    date: '6 janvier 2024',
    rating: 5,
    text: 'Elle prend le temps de bien expliquer le traitement, j’ai beaucoup apprécié.',
  },
];
