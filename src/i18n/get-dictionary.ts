import type { Locale } from "./config";
import { isLocale } from "./config";
import { en } from "./en";
import { nl, type Dictionary } from "./nl";

export function getDictionary(locale: string): Dictionary {
  return locale === "en" ? en : nl;
}

export function resolveLocale(locale: string): Locale {
  return isLocale(locale) ? locale : "nl";
}
