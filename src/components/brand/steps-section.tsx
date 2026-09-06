import { PropmaatPinImage } from "./propmaat-pin-image";
import { Container, Eyebrow } from "@/components/ui";

export function StepsSection({
  eyebrow,
  title,
  lead,
  items,
  headingLevel = 2,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: { number: string; title: string; body: string }[];
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section
      id="propmaat-steps"
      className="scroll-mt-20 border-y border-line bg-band py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="flex items-center gap-3">
          <span className="propmaat-section-pin">
            <PropmaatPinImage height={40} />
          </span>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <Heading className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </Heading>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>

        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((item) => (
            <li key={item.number}>
              <article className="h-full">
                <span className="block font-semibold tabular-nums tracking-tight text-accent text-5xl leading-none sm:text-6xl">
                  {item.number}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
