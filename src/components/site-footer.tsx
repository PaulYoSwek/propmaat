import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { company } from "@/lib/company";
import { PropmaatWordmark } from "./brand/propmaat-wordmark";
import { Container, primaryButtonClass } from "./ui";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const product = [
    { href: localizedPath(locale, "functies"), label: dict.nav.features },
    { href: localizedPath(locale, "prijzen"), label: dict.nav.pricing },
    { href: localizedPath(locale, "stappen"), label: dict.nav.steps },
  ];
  const office = [
    { href: localizedPath(locale, "faq"), label: dict.nav.faq },
    { href: localizedPath(locale, "contact"), label: dict.nav.contact },
  ];
  const legal = [
    { href: localizedPath(locale, "privacy"), label: dict.footer.privacy },
    { href: localizedPath(locale, "cookies"), label: dict.footer.cookies },
    { href: localizedPath(locale, "voorwaarden"), label: dict.footer.terms },
  ];
  const address = locale === "nl" ? company.addressNl : company.addressEn;

  return (
    <footer className="mt-auto border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,0.55fr))] lg:gap-12">
        <div>
          <PropmaatWordmark />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
          <p className="mt-2 text-sm text-muted">{dict.footer.region}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {company.legalName}
            <br />
            {address}
            <br />
            {company.vat}
          </p>
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("mt-6")}
          >
            {dict.footer.cta}
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {dict.footer.product}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {product.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {dict.footer.company}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {office.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {dict.footer.legal}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{dict.footer.copyright}</p>
        <p>{dict.footer.region}</p>
      </Container>
    </footer>
  );
}
