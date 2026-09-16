import { Resend } from "resend";
import { NextResponse, type NextRequest } from "next/server";
import { getDictionary } from "@/i18n/get-dictionary";
import { parseContactPayload, type ContactErrorKey } from "@/lib/contact-schema";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; reset: number }>();

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

function oneLine(value: string): string {
  return value.replace(/[\r\n\u2028\u2029]+/g, " ").slice(0, 200);
}

function errorMessage(locale: "nl" | "en", key: ContactErrorKey | "rateLimit" | "server") {
  return getDictionary(locale).form.errors[key];
}

export async function POST(request: NextRequest) {
  let locale: "nl" | "en" = "nl";

  try {
    const body: unknown = await request.json();
    const parsed = parseContactPayload(body);
    if (parsed.ok && parsed.data.locale) {
      locale = parsed.data.locale;
    }

    if (rateLimited(clientIp(request))) {
      return NextResponse.json(
        { ok: false, error: errorMessage(locale, "rateLimit") },
        { status: 429 },
      );
    }

    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, error: errorMessage(locale, parsed.error) },
        { status: 400 },
      );
    }

    if (parsed.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const { name, office, email, phone, seats, message } = parsed.data;
    const summary = {
      name,
      office,
      email,
      phone: phone ?? null,
      seats,
      message: message ?? null,
      locale,
    };

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (apiKey && to) {
      const resend = new Resend(apiKey);
      const from = process.env.CONTACT_FROM ?? "ImmoCRM <onboarding@resend.dev>";
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `[ImmoCRM demo] ${oneLine(office)} — ${seats} seats`,
        text: [
          `Name: ${oneLine(name)}`,
          `Office: ${oneLine(office)}`,
          `Email: ${oneLine(email)}`,
          `Phone: ${oneLine(phone ?? "")}`,
          `Seats: ${seats}`,
          `Locale: ${locale}`,
          "",
          message ?? "",
        ].join("\n"),
      });
      if (error) {
        console.error("contact_email_failed", error);
        return NextResponse.json(
          { ok: false, error: errorMessage(locale, "server") },
          { status: 500 },
        );
      }
    } else {
      console.info("contact_demo_request", JSON.stringify(summary));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: errorMessage(locale, "server") },
      { status: 400 },
    );
  }
}
