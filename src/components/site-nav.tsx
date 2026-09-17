"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import { localizedPath, pathToKey } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { isActiveNav, mainNavItems } from "@/lib/site-nav";
import { company } from "@/lib/company";
import { HeaderDemo } from "./header-demo";
import { LanguageToggle } from "./language-toggle";
import { primaryButtonClass, secondaryButtonClass } from "./ui";

export function SiteNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() || "/";
  const current = pathToKey(pathname);
  const items = mainNavItems(locale, dict);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
      <nav
        className="hidden items-center gap-5 text-sm font-medium text-muted xl:gap-6 lg:flex"
        aria-label={dict.brand.name}
      >
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={
              isActiveNav(current, item.key)
                ? "text-ink"
                : "hover:text-ink"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <LanguageToggle locale={locale} />
        <a
          href={company.appUrl}
          className="hidden min-h-11 items-center justify-center rounded-full border border-line bg-transparent px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-line hover:bg-surface hover:text-ink lg:inline-flex"
        >
          {dict.nav.login}
        </a>
        <HeaderDemo
          href={localizedPath(locale, "contact")}
          label={dict.nav.demo}
        />
        <button
          type="button"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? dict.nav.close : dict.nav.menu}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? dict.nav.close : dict.nav.menu}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-4 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      </div>
      {open ? (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full max-h-[min(28rem,calc(100dvh-3.5rem))] overflow-y-auto border-b border-line bg-background px-5 py-5 shadow-sm lg:hidden"
        >
          <nav className="flex flex-col gap-1 text-sm font-medium" aria-label={dict.nav.menu}>
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-xl px-3 py-2.5 ${
                  isActiveNav(current, item.key)
                    ? "bg-surface text-ink"
                    : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a href={company.appUrl} className={secondaryButtonClass("w-full")}>
              {dict.nav.login}
            </a>
            <Link
              href={localizedPath(locale, "contact")}
              className={primaryButtonClass("w-full")}
            >
              {dict.nav.demo}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
