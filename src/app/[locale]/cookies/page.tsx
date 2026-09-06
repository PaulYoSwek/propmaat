import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/cookies">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.cookies.title,
    description: dict.meta.cookies.description,
    openGraph: {
      title: dict.meta.cookies.title,
      description: dict.meta.cookies.description,
    },
  };
}

export default async function CookiesPage({
  params,
}: PageProps<"/[locale]/cookies">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return <LegalPage locale={locale} dict={dict} doc={dict.cookies} />;
}
