import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { PropmaatWordmark } from "./brand/propmaat-wordmark";
import { LanguageToggle } from "./language-toggle";
import { Container, primaryButtonClass } from "./ui";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={localizedPath(locale, "home")} className="text-ink">
          <PropmaatWordmark />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          <Link
            href={localizedPath(locale, "functies")}
            className="hover:text-ink"
          >
            {dict.nav.features}
          </Link>
          <Link
            href={localizedPath(locale, "prijzen")}
            className="hover:text-ink"
          >
            {dict.nav.pricing}
          </Link>
          <Link
            href={localizedPath(locale, "contact")}
            className="hover:text-ink"
          >
            {dict.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("hidden sm:inline-flex")}
          >
            {dict.nav.demo}
          </Link>
        </div>
      </Container>
    </header>
  );
}
