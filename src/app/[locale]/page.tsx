import Link from "next/link";
import { AutomationSection } from "@/components/brand/automation-section";
import { FaqSection } from "@/components/brand/faq-section";
import { FeaturesCatalog } from "@/components/brand/features-catalog";
import { PricingSection } from "@/components/brand/pricing-section";
import { StepsSection } from "@/components/brand/steps-section";
import { WhyUsSection } from "@/components/brand/why-us-section";
import { CrmPreview } from "@/components/brand/crm-preview";
import { HeroChannels } from "@/components/brand/hero-channels";
import { PropmaatHeroMark } from "@/components/brand/propmaat-hero-mark";
import { ChannelJourney } from "@/components/pin-journey/channel-journey";
import { PinJourney } from "@/components/pin-journey/pin-journey";
import { Container, primaryButtonClass } from "@/components/ui";
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
      <ChannelJourney />

      <section className="pt-6 pb-10 sm:pt-10 sm:pb-16">
        <Container>
          <div className="flex justify-center">
            <PropmaatHeroMark />
          </div>

          <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <h1 className="max-w-md text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {home.heroTitle}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                {home.heroSub}
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                {home.heroWhy}
              </p>
              <div className="mt-8">
                <Link
                  href={localizedPath(locale, "contact")}
                  className={primaryButtonClass()}
                >
                  {home.ctaDemo}
                </Link>
              </div>
              <div className="mt-8">
                <HeroChannels items={home.heroChannels} />
              </div>
            </div>
            <CrmPreview
              label={home.productPreviewLabel}
              openLabel={home.videoOpen}
              closeLabel={home.videoClose}
            />
          </div>
        </Container>
      </section>

      <AutomationSection
        title={home.automationTitle}
        heading={home.automationHeading}
        lead={home.automationLead}
        shotHint={home.automationShotHint}
        channels={home.automationChannels}
        videoOpen={home.videoOpen}
        videoClose={home.videoClose}
      />

      <WhyUsSection
        title={home.whyUsTitle}
        lead={home.whyUsLead}
        body={home.whyUsBody}
        points={home.whyUsPoints}
      />

      <PricingSection
        locale={locale}
        eyebrow={dict.pricing.eyebrow}
        title={dict.pricing.title}
        subtitle={dict.pricing.subtitle}
        plans={dict.pricing.plans}
        featuredBadge={dict.pricing.featuredBadge}
        priceSuffix={dict.pricing.priceSuffix}
        cta={dict.pricing.cta}
        quoteCta={dict.pricing.quoteCta}
        note={dict.pricing.note}
      />

      <FeaturesCatalog
        eyebrow={dict.features.catalogEyebrow}
        title={dict.features.catalogTitle}
        lead={dict.features.catalogLead}
        ctaLabel={dict.features.catalogCta}
        ctaHref={localizedPath(locale, "functies")}
        items={dict.features.catalog}
      />

      <StepsSection
        eyebrow={dict.steps.eyebrow}
        title={dict.steps.title}
        lead={dict.steps.lead}
        items={dict.steps.items}
      />

      <FaqSection
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        lead={dict.faq.lead}
        items={dict.faq.items}
      />
    </>
  );
}
