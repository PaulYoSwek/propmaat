"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/nl";
import { primaryButtonClass } from "./ui";

type Props = {
  locale: Locale;
  dict: Dictionary;
  defaultSeats?: number;
};

export function DemoForm({ locale, dict, defaultSeats = 1 }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const fields = dict.contact.fields;

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8">
        <h2 className="text-xl font-semibold tracking-tight">
          {dict.contact.successTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {dict.contact.successBody}
        </p>
      </div>
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      office: String(form.get("office") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      seats: Number(form.get("seats")),
      message: String(form.get("message") ?? ""),
      company: String(form.get("company") ?? ""),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setError(json.error ?? dict.form.errors.server);
        return;
      }
      setDone(true);
    } catch {
      setError(dict.form.errors.server);
    } finally {
      setPending(false);
    }
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-line bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          {fields.name}
          <input name="name" required minLength={2} maxLength={80} className={inputClass} />
        </label>
        <label className="text-sm font-medium">
          {fields.office}
          <input name="office" required minLength={2} maxLength={80} className={inputClass} />
        </label>
        <label className="text-sm font-medium">
          {fields.email}
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className="text-sm font-medium">
          {fields.phone}
          <input name="phone" maxLength={30} className={inputClass} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {fields.seats}
          <input
            name="seats"
            type="number"
            min={1}
            max={99}
            defaultValue={defaultSeats}
            required
            className={inputClass}
          />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {fields.message}
          <textarea name="message" maxLength={2000} rows={4} className={inputClass} />
        </label>
      </div>
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}
      <button type="submit" disabled={pending} className={primaryButtonClass("mt-6 w-full")}>
        {pending ? dict.contact.submitting : dict.contact.submit}
      </button>
    </form>
  );
}
