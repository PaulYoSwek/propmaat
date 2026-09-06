import Link from "next/link";
import { CrmPreview } from "@/components/brand/crm-preview";
import { PropmaatHeroMark } from "@/components/brand/propmaat-hero-mark";
import { BeneluxMap } from "@/components/pin-journey/benelux-map";
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

  return (
    <>
      <PinJourney />

      <section className="flex min-h-[calc(100svh-4rem)] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-10">
          <p className="animate-rise text-[11px] font-semibold tracking-[0.22em] text-muted uppercase">
            {home.heroEyebrow}
          </p>
          <PropmaatHeroMark />
          <p className="animate-rise delay-1 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg">
            {home.heroSub}
          </p>
        </div>
        <div className="flex justify-center px-4">
          <CrmPreview label={home.productPreviewLabel} />
        </div>
      </section>

      <section className="flex min-h-[100svh] items-center py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16">
            <BeneluxMap label={home.mapLabel} />
            <aside id="propmaat-dossier" className="lg:py-6">
              <Eyebrow>{home.mapEyebrow}</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {home.mapTitle}
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                {home.mapBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
