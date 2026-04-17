export const LOCALES = ["en", "vi"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const [first, ...rest] = segments;
  if (!first || !isLocale(first)) return pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (rest.length === 0) return "/";
  return `/${rest.join("/")}`;
}

export function withLocale(pathname: string, locale: Locale): string {
  const normalized = stripLocaleFromPath(pathname);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  return withLocale(href, locale);
}
