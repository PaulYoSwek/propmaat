import Link from "next/link";
import { CatalogIcon, type CatalogIconId } from "./catalog-icon";
import { PropmaatPinImage } from "./propmaat-pin-image";
import { Container, Eyebrow, secondaryButtonClass } from "@/components/ui";

export function FeaturesCatalog({
  eyebrow,
  title,
  lead,
  ctaLabel,
  ctaHref,
  items,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: { id: string; icon: CatalogIconId; title: string; body: string }[];
}) {
  return (
    <section id="propmaat-features" className="scroll-mt-20 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex items-center gap-3">
          <span className="propmaat-section-pin">
            <PropmaatPinImage height={40} />
          </span>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <article className="flex h-full gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <CatalogIcon id={item.icon} className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-snug text-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {ctaLabel && ctaHref ? (
          <div className="mt-10">
            <Link href={ctaHref} className={secondaryButtonClass()}>
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
