import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoForm } from "@/components/demo-form";
import { Container } from "@/components/ui";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    openGraph: {
      title: dict.meta.contact.title,
      description: dict.meta.contact.description,
    },
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const query = await searchParams;
  const raw = query.seats;
  const parsed = typeof raw === "string" ? Number(raw) : Number.NaN;
  const defaultSeats =
    Number.isInteger(parsed) && parsed >= 1 && parsed <= 99 ? parsed : 1;

  return (
    <Container className="grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-20">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {dict.contact.title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
          {dict.contact.body}
        </p>
        <p className="mt-8 text-3xl font-semibold tracking-tight">€50</p>
        <p className="text-sm text-muted">
          {locale === "nl" ? "per seat per maand" : "per seat per month"}
        </p>
      </div>
      <DemoForm locale={locale} dict={dict} defaultSeats={defaultSeats} />
    </Container>
  );
}
