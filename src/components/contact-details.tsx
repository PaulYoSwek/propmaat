import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { company } from "@/lib/company";

function Detail({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        {label}
      </p>
      <div className="mt-1 text-base text-ink">{children}</div>
    </div>
  );
}

export function ContactDetails({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const address = locale === "nl" ? company.addressNl : company.addressEn;
  const pricingHref = localizedPath(locale, "prijzen");

  return (
    <aside className="rounded-3xl border border-line bg-surface px-5 py-6 sm:px-7 sm:py-8">
      <p className="text-sm font-semibold tracking-tight">{company.legalName}</p>
      <p className="mt-1 text-sm text-muted">{dict.contact.companyLine}</p>

      <div className="mt-6 grid gap-5">
        <Detail label={dict.contact.labels.email}>
          <a
            href={`mailto:${company.email}`}
            className="break-all font-medium hover:text-accent"
          >
            {company.email}
          </a>
        </Detail>
        <Detail label={dict.contact.labels.phone}>
          <a href={`tel:${company.phoneTel}`} className="font-medium hover:text-accent">
            {company.phoneDisplay}
          </a>
        </Detail>
        <Detail label={dict.contact.labels.location}>
          <p>{address}</p>
        </Detail>
        <Detail label={dict.contact.labels.vat}>
          <p>{company.vat}</p>
        </Detail>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        {dict.contact.priceHint}{" "}
        <Link
          href={pricingHref}
          className="font-medium text-ink underline decoration-line underline-offset-2 hover:text-accent"
        >
          {dict.contact.priceLink}
        </Link>
      </p>
    </aside>
  );
}
