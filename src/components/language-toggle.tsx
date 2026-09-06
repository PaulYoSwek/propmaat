"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { swapLocalePath } from "@/i18n/config";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const other: Locale = locale === "nl" ? "en" : "nl";

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-line bg-surface p-0.5 text-xs font-semibold"
      aria-label={locale === "nl" ? "Taal" : "Language"}
    >
      <Link
        href={swapLocalePath(pathname, "nl")}
        className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-full px-2.5 ${
          locale === "nl" ? "bg-ink text-on-ink" : "text-muted hover:text-ink"
        }`}
        hrefLang="nl"
      >
        NL
      </Link>
      <Link
        href={swapLocalePath(pathname, "en")}
        className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-full px-2.5 ${
          locale === "en" ? "bg-ink text-on-ink" : "text-muted hover:text-ink"
        }`}
        hrefLang="en"
      >
        EN
      </Link>
      <span className="sr-only">{other.toUpperCase()}</span>
    </div>
  );
}
