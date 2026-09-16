import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { PropmaatWordmark } from "./brand/propmaat-wordmark";
import { SiteNav } from "./site-nav";
import { Container } from "./ui";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="relative sticky top-0 z-40 border-b border-line/80 bg-background/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          href={localizedPath(locale, "home")}
          className="min-w-0 shrink-0 text-ink"
          aria-label="ImmoCRM"
        >
          <PropmaatWordmark />
        </Link>
        <SiteNav locale={locale} dict={dict} />
      </Container>
    </header>
  );
}
