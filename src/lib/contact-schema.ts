export type ContactPayload = {
  name: string;
  office: string;
  email: string;
  phone?: string;
  seats: number;
  message?: string;
  company?: string;
  locale?: "nl" | "en";
};

export type ContactParseOk = { ok: true; data: ContactPayload; honeypot: boolean };
export type ContactParseErr = { ok: false; error: ContactErrorKey };
export type ContactParseResult = ContactParseOk | ContactParseErr;

export type ContactErrorKey = "invalid" | "required" | "email" | "seats";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function trim(value: string): string {
  return value.trim();
}

export function parseContactPayload(input: unknown): ContactParseResult {
  if (input === null || typeof input !== "object") {
    return { ok: false, error: "invalid" };
  }

  const body = input as Record<string, unknown>;
  const name = trim(asString(body.name));
  const office = trim(asString(body.office));
  const email = trim(asString(body.email));
  const phone = trim(asString(body.phone));
  const message = trim(asString(body.message));
  const company = asString(body.company);
  const localeRaw = asString(body.locale);
  const locale = localeRaw === "en" ? "en" : localeRaw === "nl" ? "nl" : undefined;

  const seatsRaw = body.seats;
  const seats =
    typeof seatsRaw === "number"
      ? seatsRaw
      : typeof seatsRaw === "string"
        ? Number(seatsRaw)
        : NaN;

  if (!name || !office || !email || !Number.isFinite(seats)) {
    return { ok: false, error: "required" };
  }
  if (name.length < 2 || name.length > 80 || office.length < 2 || office.length > 80) {
    return { ok: false, error: "required" };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "email" };
  }
  if (!Number.isInteger(seats) || seats < 1 || seats > 99) {
    return { ok: false, error: "seats" };
  }
  if (phone.length > 30 || message.length > 2000) {
    return { ok: false, error: "invalid" };
  }

  return {
    ok: true,
    honeypot: company.trim().length > 0,
    data: {
      name,
      office,
      email,
      seats,
      locale,
      ...(phone ? { phone } : {}),
      ...(message ? { message } : {}),
      ...(company ? { company } : {}),
    },
  };
}
