import type { Locale, PathKey } from "@/i18n/config";
import { localizedPath, mainNavKeys } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";

const NAV_LABEL: Record<(typeof mainNavKeys)[number], keyof Dictionary["nav"]> =
  {
    functies: "features",
    prijzen: "pricing",
    stappen: "steps",
    faq: "faq",
    contact: "contact",
  };

export function mainNavItems(locale: Locale, dict: Dictionary) {
  return mainNavKeys.map((key) => ({
    key,
    href: localizedPath(locale, key),
    label: dict.nav[NAV_LABEL[key]],
  }));
}

export function isActiveNav(current: PathKey, key: PathKey) {
  return current === key;
}
