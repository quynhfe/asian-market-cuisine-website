import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { enDictionary } from "@/lib/i18n/dictionaries/en";
import { viDictionary } from "@/lib/i18n/dictionaries/vi";

export type Dictionary = typeof enDictionary | typeof viDictionary;

export function resolveLocale(rawLocale: string): Locale {
  if (isLocale(rawLocale)) return rawLocale;
  return DEFAULT_LOCALE;
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "vi" ? viDictionary : enDictionary;
}
