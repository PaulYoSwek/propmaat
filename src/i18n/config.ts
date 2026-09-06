export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "nl";
export const localeCookie = "pf_locale";

export type PathKey = "home" | "functies" | "prijzen" | "contact" | "privacy";

export const slugs: Record<Locale, Record<PathKey, string>> = {
  nl: {
    home: "",
    functies: "functies",
    prijzen: "prijzen",
    contact: "contact",
    privacy: "privacy",
  },
  en: {
    home: "",
    functies: "features",
    prijzen: "pricing",
    contact: "contact",
    privacy: "privacy",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, key: PathKey): string {
  const slug = slugs[locale][key];
  if (locale === "nl") return slug ? `/${slug}` : "/";
  return slug ? `/en/${slug}` : "/en";
}

export function tryPathKey(pathname: string): PathKey | null {
  const stripped =
    pathname.replace(/^\/en(?=\/|$)/, "").replace(/^\/nl(?=\/|$)/, "") || "/";
  const segment = stripped.replace(/^\//, "").split("/")[0] ?? "";
  if (!segment) return "home";
  if (segment === "functies" || segment === "features") return "functies";
  if (segment === "prijzen" || segment === "pricing") return "prijzen";
  if (segment === "contact") return "contact";
  if (segment === "privacy") return "privacy";
  return null;
}

export function pathToKey(pathname: string): PathKey {
  return tryPathKey(pathname) ?? "home";
}

export function internalPathFromKey(locale: Locale, key: PathKey): string {
  const slug = slugs.nl[key];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function resolveRequestPath(pathname: string): {
  action: "redirect" | "rewrite" | "next";
  pathname: string;
  locale: Locale;
} {
  if (pathname === "/nl" || pathname.startsWith("/nl/")) {
    return {
      action: "redirect",
      locale: "nl",
      pathname: pathname === "/nl" ? "/" : pathname.slice(3),
    };
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    if (isDutchSlugUnderEn(pathname)) {
      return {
        action: "redirect",
        locale: "en",
        pathname: localizedPath("en", pathToKey(pathname)),
      };
    }
    const key = tryPathKey(pathname);
    if (key === null) {
      return { action: "next", locale: "en", pathname };
    }
    const dest = internalPathFromKey("en", key);
    if (dest !== pathname) {
      return { action: "rewrite", locale: "en", pathname: dest };
    }
    return { action: "next", locale: "en", pathname };
  }

  const key = tryPathKey(pathname);
  if (key === null) {
    return { action: "rewrite", locale: "nl", pathname: `/nl${pathname}` };
  }
  return {
    action: "rewrite",
    locale: "nl",
    pathname: internalPathFromKey("nl", key),
  };
}

export function swapLocalePath(pathname: string, target: Locale): string {
  return localizedPath(target, pathToKey(pathname));
}

/** Internal folder path used by the App Router (Dutch slugs). */
export function internalPath(locale: Locale, pathname: string): string {
  const key = tryPathKey(pathname);
  if (key === null) {
    const suffix = pathname.startsWith("/en") ? pathname.slice(3) : pathname;
    return `/${locale}${suffix || ""}`;
  }
  return internalPathFromKey(locale, key);
}

export function isEnglishPublicSlug(pathname: string): boolean {
  if (!pathname.startsWith("/en")) return false;
  const rest = pathname.slice(3) || "/";
  const key = pathToKey(pathname);
  const enSlug = slugs.en[key];
  if (key === "home") return rest === "/" || rest === "";
  return rest === `/${enSlug}`;
}

export function isDutchSlugUnderEn(pathname: string): boolean {
  if (!pathname.startsWith("/en/")) return false;
  const rest = pathname.slice(4);
  const dutchSlugs = Object.values(slugs.nl).filter(Boolean);
  return dutchSlugs.includes(rest) && slugs.en[pathToKey(pathname)] !== rest;
}
