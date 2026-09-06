import Link from "next/link";
import { HeroMock } from "@/components/mocks/product-mocks";
import {
  Container,
  Eyebrow,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/ui";
import { isLocale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    },
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const home = dict.home;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(230,226,216,0.9),transparent_50%)]" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="animate-rise text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              {home.heroTitle}
            </h1>
            <p className="animate-rise delay-1 mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {home.heroSub}
            </p>
            <div className="animate-rise delay-2 mt-8 flex flex-wrap gap-3">
              <Link href={localizedPath(locale, "contact")} className={primaryButtonClass()}>
                {home.ctaDemo}
              </Link>
              <Link
                href={localizedPath(locale, "functies")}
                className={secondaryButtonClass()}
              >
                {home.ctaFeatures}
              </Link>
            </div>
          </div>
          <div className="animate-rise delay-3">
            <HeroMock locale={locale} />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <Eyebrow>{home.highlightsEyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            {home.highlightsTitle}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {home.highlights.map((item, index) => (
              <Link
                key={item.title}
                href={localizedPath(locale, "functies")}
                className="group rounded-2xl border border-line bg-surface p-6 transition-transform hover:-translate-y-0.5"
              >
                <p className="font-mono text-[11px] font-semibold text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                <p className="mt-4 text-sm font-semibold text-accent group-hover:text-accent-hover">
                  {home.ctaFeatures} →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <Container className="max-w-3xl">
          <Eyebrow>{home.whoEyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{home.whoTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{home.whoBody}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="rounded-3xl border border-line bg-ink px-6 py-12 text-white sm:px-12">
          <Eyebrow>
            <span className="text-accent-soft">{home.priceEyebrow}</span>
          </Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.priceTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            {home.priceBody}
          </p>
          <Link
            href={localizedPath(locale, "prijzen")}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-soft"
          >
            {home.priceCta}
          </Link>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{home.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">{home.finalBody}</p>
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("mt-6")}
          >
            {home.ctaDemo}
          </Link>
        </Container>
      </section>
    </>
  );
}
