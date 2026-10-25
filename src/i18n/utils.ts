import { ui, type TranslationKey } from './ui';

/** French is the default and is served without a URL prefix. English lives under /en. */
export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export function localePath(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const bare = normalized === '/' ? '/' : normalized.replace(/\/$/, '');
  if (locale === defaultLocale) return bare;
  return bare === '/' ? '/en' : `/en${bare}`;
}

export function stripLocale(pathname: string): string {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/en') return '/';
  if (path.startsWith('/en/')) return path.slice(3) || '/';
  return path;
}

export function swapLocale(pathname: string, locale: Locale): string {
  return localePath(stripLocale(pathname), locale);
}

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return ui[locale][key];
  };
}
