import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow, primaryButtonClass } from "@/components/ui";
import { isLocale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/prijzen">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.prijzen.title,
    description: dict.meta.prijzen.description,
    openGraph: {
      title: dict.meta.prijzen.title,
      description: dict.meta.prijzen.description,
    },
  };
}

export default async function PricingPage({
  params,
}: PageProps<"/[locale]/prijzen">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const pricing = dict.pricing;

  return (
    <Container className="py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {pricing.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{pricing.subtitle}</p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-line bg-surface p-8 shadow-[0_24px_60px_-32px_rgba(18,20,26,0.35)]">
        <p className="text-sm font-semibold text-accent">{dict.brand.name}</p>
        <p className="mt-2 text-5xl font-semibold tracking-tight">€50</p>
        <p className="mt-1 text-sm text-muted">
          {locale === "nl" ? "per seat / maand" : "per seat / month"}
        </p>
        <h2 className="mt-8 text-sm font-semibold tracking-wide uppercase">
          {pricing.includedTitle}
        </h2>
        <ul className="mt-4 space-y-3 text-sm">
          {pricing.included.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-ink">
          {pricing.customNote}
        </p>
        <Link
          href={localizedPath(locale, "contact")}
          className={primaryButtonClass("mt-8 w-full")}
        >
          {pricing.cta}
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-muted">{pricing.note}</p>
      </div>
    </Container>
  );
}
