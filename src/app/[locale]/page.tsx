import Link from "next/link";
import {
  HeroMock,
  InboxMock,
  KanbanMock,
} from "@/components/mocks/product-mocks";
import { NeighborhoodMap } from "@/components/pin-journey/neighborhood-map";
import { PinJourney } from "@/components/pin-journey/pin-journey";
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
  const beatMocks = [
    <HeroMock key="listing" locale={locale} />,
    <KanbanMock key="deal" locale={locale} />,
    <InboxMock key="inbox" locale={locale} />,
  ];

  return (
    <>
      <PinJourney />

      <section className="relative">
        <Container className="py-16 lg:py-24">
          <h1 className="animate-rise max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {home.heroTitle}
          </h1>
          <p className="animate-rise delay-1 mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {home.heroSub}
          </p>
          <div className="animate-rise delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "contact")}
              className={primaryButtonClass()}
            >
              {home.ctaDemo}
            </Link>
            <Link
              href={localizedPath(locale, "functies")}
              className={secondaryButtonClass()}
            >
              {home.ctaFeatures}
            </Link>
          </div>
        </Container>
      </section>

      {home.beats.map((beat, index) => (
        <section key={beat.title} className="py-16 lg:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {beat.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {beat.body}
              </p>
            </div>
            <div id={`pin-beat-${index}`}>{beatMocks[index]}</div>
          </Container>
        </section>
      ))}

      <section className="py-16 lg:py-20">
        <Container>
          <NeighborhoodMap
            dossier={{
              eyebrow: home.landingEyebrow,
              address: home.landingAddress,
              price: home.landingPrice,
              status: home.landingStatus,
              beds: home.landingBeds,
            }}
          />
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            {home.customTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {home.customBody}
          </p>
          <Link
            href={localizedPath(locale, "contact")}
            className={primaryButtonClass("mt-8")}
          >
            {home.ctaDemo}
          </Link>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="rounded-3xl border border-line bg-ink px-6 py-12 text-on-ink sm:px-12">
          <Eyebrow>
            <span className="text-accent-soft">{home.priceEyebrow}</span>
          </Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.priceTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-ink/70">
            {home.priceBody}
          </p>
          <Link
            href={localizedPath(locale, "prijzen")}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-on-ink px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-soft"
          >
            {home.priceCta}
          </Link>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            {home.finalTitle}
          </h2>
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
