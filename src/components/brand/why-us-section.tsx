import { PropmaatPinImage } from "./propmaat-pin-image";
import { Container, Eyebrow } from "@/components/ui";

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 7h10M4 12h6M4 17h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 6.5 20 12l-4 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FollowupIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M5 7.5h14v8.5a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.5h8M8 14.5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.8 17.2c.4-2.3 2.2-3.7 4.2-3.7s3.8 1.4 4.2 3.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16.2" cy="8.6" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.2 13.6c1.8.2 3.3 1.4 3.8 3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const POINT_ICONS = {
  workflow: WorkflowIcon,
  followup: FollowupIcon,
  people: PeopleIcon,
};

export function WhyUsSection({
  title,
  lead,
  body,
  points,
}: {
  title: string;
  lead: string;
  body: string;
  points: {
    icon: keyof typeof POINT_ICONS;
    title: string;
    body: string;
  }[];
}) {
  return (
    <section id="propmaat-why-us" className="scroll-mt-20 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-3xl border border-line bg-surface px-5 py-8 sm:rounded-[2rem] sm:px-10 sm:py-14">
          <div className="flex items-center gap-3">
            <span className="propmaat-section-pin">
              <PropmaatPinImage height={40} />
            </span>
            <Eyebrow>{title}</Eyebrow>
          </div>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {lead}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {body}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {points.map((point) => {
              const Icon = POINT_ICONS[point.icon];
              return (
                <article key={point.title} className="border-t border-line pt-5">
                  <span className="mb-3 inline-flex text-accent">
                    <Icon />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {point.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
