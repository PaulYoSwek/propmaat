import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StepsSection } from "@/components/brand/steps-section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/aan-de-slag">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.stappen.title,
    description: dict.meta.stappen.description,
    openGraph: {
      title: dict.meta.stappen.title,
      description: dict.meta.stappen.description,
    },
  };
}

export default async function StepsPage({
  params,
}: PageProps<"/[locale]/aan-de-slag">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <StepsSection
      eyebrow={dict.steps.eyebrow}
      title={dict.steps.title}
      lead={dict.steps.lead}
      items={dict.steps.items}
      headingLevel={1}
    />
  );
}
