import { PropmaatPinImage } from "./propmaat-pin-image";
import { Container, Eyebrow } from "@/components/ui";

export function FaqSection({
  eyebrow,
  title,
  lead,
  items,
  headingLevel = 2,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: { q: string; a: string }[];
  headingLevel?: 1 | 2;
}) {
  return (
    <section id="propmaat-faq" className="scroll-mt-20 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex items-center gap-3">
          <span className="propmaat-section-pin">
            <PropmaatPinImage height={40} />
          </span>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        {headingLevel === 1 ? (
          <h1 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title}
          </h1>
        ) : (
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title}
          </h2>
        )}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 py-4 text-left font-semibold tracking-tight marker:content-none sm:gap-6 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-sm text-muted transition group-open:border-accent/40 group-open:text-accent"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="pb-5 pr-12 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
