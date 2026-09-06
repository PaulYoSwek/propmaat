import Link from "next/link";
import { PropmaatPinImage } from "./propmaat-pin-image";
import {
  Container,
  Eyebrow,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";

function CheckIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.6 10.2 9 12.6l4.5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingSection({
  locale,
  eyebrow,
  title,
  subtitle,
  plans,
  featuredBadge,
  priceSuffix,
  cta,
  quoteCta,
  note,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  subtitle: string;
  featuredBadge: string;
  priceSuffix: string;
  cta: string;
  quoteCta: string;
  note: string;
  plans: {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    priceNote?: string;
    featured?: boolean;
    quote?: boolean;
    features: string[];
  }[];
}) {
  const contactHref = localizedPath(locale, "contact");

  return (
    <section
      id="propmaat-pricing"
      className="scroll-mt-20 border-y border-line bg-band py-12 sm:py-16 lg:py-20"
    >
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
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const featured = Boolean(plan.featured);
            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border px-5 py-7 sm:px-6 sm:py-8 ${
                  featured
                    ? "border-accent bg-ink text-on-ink lg:-translate-y-3"
                    : "border-line bg-surface"
                }`}
              >
                {featured ? (
                  <p className="absolute -top-3 left-1/2 max-w-[calc(100%-1.5rem)] -translate-x-1/2 truncate rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-wide whitespace-nowrap text-on-ink uppercase">
                    {featuredBadge}
                  </p>
                ) : null}
                <h3 className="text-xl font-semibold tracking-tight">
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${featured ? "text-on-ink/70" : "text-muted"}`}
                >
                  {plan.subtitle}
                </p>
                <p className="mt-6 text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                {plan.quote ? (
                  <p
                    className={`mt-1 text-sm ${featured ? "text-on-ink/70" : "text-muted"}`}
                  >
                    {plan.priceNote}
                  </p>
                ) : (
                  <p
                    className={`mt-1 text-sm ${featured ? "text-on-ink/70" : "text-muted"}`}
                  >
                    {priceSuffix}
                  </p>
                )}
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={contactHref}
                  className={
                    featured
                      ? primaryButtonClass("mt-8 w-full")
                      : secondaryButtonClass("mt-8 w-full")
                  }
                >
                  {plan.quote ? quoteCta : cta}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
          {note}
        </p>
      </Container>
    </section>
  );
}
