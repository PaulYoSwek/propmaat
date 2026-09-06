import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { Container } from "./ui";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">PandFlow</p>
          <p className="mt-1 max-w-sm text-sm text-muted">{dict.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link href={localizedPath(locale, "functies")} className="hover:text-ink">
            {dict.nav.features}
          </Link>
          <Link href={localizedPath(locale, "prijzen")} className="hover:text-ink">
            {dict.nav.pricing}
          </Link>
          <Link href={localizedPath(locale, "contact")} className="hover:text-ink">
            {dict.nav.contact}
          </Link>
          <Link href={localizedPath(locale, "privacy")} className="hover:text-ink">
            {dict.footer.privacy}
          </Link>
        </div>
      </Container>
      <Container className="border-t border-line py-4 text-xs text-muted">
        {dict.footer.copyright}
      </Container>
    </footer>
  );
}
