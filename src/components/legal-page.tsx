import Link from "next/link";
import { Container } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import type { LegalDoc } from "@/i18n/legal";
import type { Dictionary } from "@/i18n/nl";
import { company } from "@/lib/company";

type Token = "privacy" | "cookies" | "terms" | "contact" | "prijzen" | "email";

function tokensFor(locale: Locale, dict: Dictionary): Record<Token, { href: string; label: string }> {
  return {
    privacy: { href: localizedPath(locale, "privacy"), label: dict.footer.privacy },
    cookies: { href: localizedPath(locale, "cookies"), label: dict.footer.cookies },
    terms: { href: localizedPath(locale, "voorwaarden"), label: dict.footer.terms },
    contact: { href: localizedPath(locale, "contact"), label: dict.nav.demo },
    prijzen: { href: localizedPath(locale, "prijzen"), label: dict.nav.pricing },
    email: { href: `mailto:${company.email}`, label: company.email },
  };
}

function RichText({
  text,
  tokens,
}: {
  text: string;
  tokens: Record<Token, { href: string; label: string }>;
}) {
  const parts = text.split(/(\{\{(?:privacy|cookies|terms|contact|prijzen|email)\}\})/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\{\{(privacy|cookies|terms|contact|prijzen|email)\}\}$/);
        if (!match) {
          return part.split("\n").map((line, lineIndex, lines) => (
            <span key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < lines.length - 1 ? <br /> : null}
            </span>
          ));
        }
        const token = match[1] as Token;
        const item = tokens[token];
        return (
          <Link
            key={`${index}-${token}`}
            href={item.href}
            className="font-medium text-ink underline decoration-line underline-offset-2 hover:text-accent"
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function LegalPage({
  locale,
  dict,
  doc,
}: {
  locale: Locale;
  dict: Dictionary;
  doc: LegalDoc;
}) {
  const tokens = tokensFor(locale, dict);

  return (
    <Container className="max-w-3xl py-12 sm:py-16 lg:py-20">
      <Link
        href={localizedPath(locale, "home")}
        className="text-sm font-medium text-muted hover:text-ink"
      >
        {dict.legal.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-3 text-sm text-muted">{doc.updated}</p>

      <div className="mt-10 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-3 text-base leading-relaxed text-muted"
              >
                <RichText text={paragraph} tokens={tokens} />
              </p>
            ))}
            {section.table ? (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-line bg-surface">
                      {section.table.headers.map((header) => (
                        <th
                          key={header}
                          className="px-3 py-2 font-semibold text-ink"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join("|")} className="border-b border-line">
                        {row.map((cell) => (
                          <td key={cell} className="px-3 py-2 align-top text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {section.afterTable?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-3 text-base leading-relaxed text-muted"
              >
                <RichText text={paragraph} tokens={tokens} />
              </p>
            ))}
            {section.list ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                {section.list.map((item) => (
                  <li key={item}>
                    <RichText text={item} tokens={tokens} />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </Container>
  );
}
