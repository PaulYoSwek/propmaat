import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactDetails } from "@/components/contact-details";
import { DemoForm } from "@/components/demo-form";
import { Container, Eyebrow } from "@/components/ui";
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
    <Container className="py-12 sm:py-16 lg:py-20">
      <Eyebrow>{dict.contact.eyebrow}</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {dict.contact.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {dict.contact.body}
      </p>
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <ContactDetails locale={locale} dict={dict} />
        <DemoForm locale={locale} dict={dict} defaultSeats={defaultSeats} />
      </div>
    </Container>
  );
}
