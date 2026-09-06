import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/voorwaarden">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.voorwaarden.title,
    description: dict.meta.voorwaarden.description,
    openGraph: {
      title: dict.meta.voorwaarden.title,
      description: dict.meta.voorwaarden.description,
    },
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/voorwaarden">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return <LegalPage locale={locale} dict={dict} doc={dict.terms} />;
}
