import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureMock } from "@/components/mocks/product-mocks";
import { Container, Eyebrow } from "@/components/ui";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/functies">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.functies.title,
    description: dict.meta.functies.description,
    openGraph: {
      title: dict.meta.functies.title,
      description: dict.meta.functies.description,
    },
  };
}

export default async function FeaturesPage({
  params,
}: PageProps<"/[locale]/functies">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Container className="py-16 lg:py-20">
      <Eyebrow>PandFlow</Eyebrow>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.features.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        {dict.features.intro}
      </p>

      <div className="mt-16 space-y-20">
        {dict.features.sections.map((section, index) => (
          <article
            key={section.id}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {section.body}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <FeatureMock id={section.id} locale={locale} />
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
