import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PricingSection } from "@/components/brand/pricing-section";
import { isLocale } from "@/i18n/config";
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
    <PricingSection
      locale={locale}
      eyebrow={pricing.eyebrow}
      title={pricing.title}
      subtitle={pricing.subtitle}
      plans={pricing.plans}
      featuredBadge={pricing.featuredBadge}
      priceSuffix={pricing.priceSuffix}
      cta={pricing.cta}
      quoteCta={pricing.quoteCta}
      note={pricing.note}
    />
  );
}
