import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/brand/faq-section";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
    openGraph: {
      title: dict.meta.faq.title,
      description: dict.meta.faq.description,
    },
  };
}

export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <FaqSection
      eyebrow={dict.faq.eyebrow}
      title={dict.faq.title}
      lead={dict.faq.lead}
      items={dict.faq.items}
      headingLevel={1}
    />
  );
}
