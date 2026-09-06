import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    openGraph: {
      title: dict.meta.privacy.title,
      description: dict.meta.privacy.description,
    },
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Container className="max-w-2xl py-16 lg:py-20">
      <h1 className="text-4xl font-semibold tracking-tight">{dict.privacy.title}</h1>
      <p className="mt-6 text-base leading-relaxed text-muted">{dict.privacy.body}</p>
    </Container>
  );
}
