import { MockSidebar, MockWindow } from "./shell";

const sidebarNl = ["Panden", "Deals", "Inbox", "Agenda", "Team"];
const sidebarEn = ["Listings", "Deals", "Inbox", "Calendar", "Team"];

export function HeroMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "panden / 18 Kerkstraat" : "listings / 18 Church St"}>
      <div className="flex min-h-[220px] bg-surface sm:min-h-[280px]">
        <MockSidebar items={nl ? sidebarNl : sidebarEn} active={nl ? "Panden" : "Listings"} />
        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs text-muted">
                {nl ? "Te koop · Antwerpen" : "For sale · Antwerp"}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight">
                {nl ? "Kerkstraat 18" : "18 Church Street"}
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-accent-soft px-2 py-1 font-mono text-[10px] font-semibold text-accent sm:px-2.5">
              {nl ? "Checklist 7/8" : "Checklist 7/8"}
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight">€ 429.000</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              [nl ? "Bewoonbaar" : "Liveable", "142 m²"],
              [nl ? "Slaapkamers" : "Bedrooms", "3"],
              ["EPC", "B"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-line px-2.5 py-2">
                <p className="font-mono text-[9px] text-muted">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-accent/25 to-line" />
            <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-line to-accent-soft" />
            <div className="h-16 w-16 rounded-xl bg-accent/15" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

export function KanbanMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const cols = nl
    ? [
        ["Nieuw", "Van Dam — studio"],
        ["Bezoek", "Peeters — rijwoning"],
        ["Bod", "Nguyen — duplex"],
      ]
    : [
        ["New", "Van Dam — studio"],
        ["Viewing", "Peeters — townhouse"],
        ["Offer", "Nguyen — duplex"],
      ];
  return (
    <MockWindow title={nl ? "deals" : "deals"}>
      <div className="grid grid-cols-3 gap-1.5 bg-surface p-2 sm:gap-2 sm:p-3">
        {cols.map(([stage, card]) => (
          <div key={stage} className="min-w-0 rounded-xl bg-[#faf9f6] p-1.5 sm:p-2">
            <p className="mb-2 font-mono text-[10px] font-semibold text-muted">
              {stage}
            </p>
            <div className="rounded-lg border border-line bg-surface px-1.5 py-2 shadow-sm sm:px-2">
              <p className="text-[11px] leading-snug font-semibold">{card}</p>
              <p className="mt-1 font-mono text-[9px] text-accent">€ 389.000</p>
            </div>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

export function InboxMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "whatsapp + website" : "whatsapp + website"}>
      <div className="flex min-h-[200px] bg-surface">
        <div className="min-w-0 w-2/5 border-r border-line p-2">
          {[
            [nl ? "Website · Kerkstraat" : "Website · Church St", "14:02"],
            ["WhatsApp · L. Janssens", "13:40"],
            [nl ? "Mail · bod ontvangen" : "Mail · offer in", "09:11"],
          ].map(([title, time], i) => (
            <div
              key={title}
              className={`rounded-lg px-2 py-2 ${i === 0 ? "bg-accent-soft/70" : ""}`}
            >
              <div className="flex justify-between gap-2">
                <p className="truncate text-[11px] font-semibold">{title}</p>
                <p className="font-mono text-[9px] text-muted">{time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1 p-3">
          <p className="text-[11px] text-muted">
            {nl ? "Aanvraag van je site" : "Enquiry from your site"}
          </p>
          <div className="mt-2 rounded-2xl rounded-tl-sm bg-[#faf9f6] px-3 py-2 text-[12px] leading-relaxed">
            {nl
              ? "Kunnen we zaterdag een bezichtiging plannen voor Kerkstraat 18?"
              : "Can we book a Saturday viewing for 18 Church Street?"}
          </div>
          <div className="mt-3 ml-4 rounded-2xl rounded-tr-sm bg-accent px-3 py-2 text-[12px] text-on-ink sm:ml-8">
            {nl
              ? "Zaterdag 11:00 past. Ik stuur de bevestiging."
              : "Saturday 11:00 works. I’ll send the confirmation."}
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

export function ListingMock({ locale }: { locale: "nl" | "en" }) {
  return <HeroMock locale={locale} />;
}

export function PublishMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "publicatie" : "publishing"}>
      <div className="space-y-2 bg-surface p-4">
        {[
          [nl ? "Eigen website" : "Own website", nl ? "Live" : "Live"],
          ["Immoweb", nl ? "Klaar om te sturen" : "Ready to push"],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-line px-3 py-2.5"
          >
            <p className="text-sm font-semibold">{label}</p>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-accent">
              {status}
            </span>
          </div>
        ))}
        <p className="pt-1 font-mono text-[10px] text-muted">
          {nl ? "Checklist 7/8 — 1 foto ontbreekt" : "Checklist 7/8 — 1 photo missing"}
        </p>
      </div>
    </MockWindow>
  );
}

export function ContactsMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "klanten / interesse" : "contacts / interest"}>
      <div className="bg-surface p-4">
        <p className="text-sm font-semibold">{nl ? "Mira De Smet" : "Mira De Smet"}</p>
        <p className="mt-1 font-mono text-[10px] text-muted">
          {nl ? "Zoekprofiel · 3 slaapkamers · tot €450k" : "Search profile · 3 beds · up to €450k"}
        </p>
        <div className="mt-3 space-y-2">
          {[
            [nl ? "Kerkstraat 18 — 92%" : "18 Church St — 92%"],
            [nl ? "Statiestraat 4 — 81%" : "4 Station Rd — 81%"],
          ].map(([row]) => (
            <div key={row} className="rounded-lg border border-line px-3 py-2 text-[12px]">
              {row}
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  );
}

export function AgendaMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const slots = nl
    ? [
        { day: "Di 9 sep", time: "11:00", votes: "2/3" },
        { day: "Wo 10 sep", time: "14:30", votes: "3/3", chosen: true },
        { day: "Do 11 sep", time: "16:00", votes: "1/3" },
      ]
    : [
        { day: "Tue 9 Sep", time: "11:00", votes: "2/3" },
        { day: "Wed 10 Sep", time: "14:30", votes: "3/3", chosen: true },
        { day: "Thu 11 Sep", time: "16:00", votes: "1/3" },
      ];
  const parties = nl
    ? "Koper · Sofie  ·  Verkoper · Jan  ·  Kantoor · Adam"
    : "Buyer · Sofie  ·  Seller · Jan  ·  Office · Adam";

  return (
    <MockWindow title={nl ? "planner / bezichtiging" : "planner / viewing"}>
      <div className="bg-surface p-3 sm:p-4">
        <p className="text-sm font-semibold">
          {nl ? "Kerkstraat 18 — kijkmoment" : "18 Church St — viewing"}
        </p>
        <p className="mt-1 font-mono text-[10px] text-muted">{parties}</p>
        <ul className="mt-3 space-y-2">
          {slots.map((slot) => (
            <li
              key={slot.day}
              className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                slot.chosen ? "border-accent bg-accent-soft" : "border-line"
              }`}
            >
              <div>
                <p className="text-[12px] font-semibold">{slot.day}</p>
                <p className="font-mono text-[10px] text-muted">{slot.time}</p>
              </div>
              <p className="font-mono text-[10px] font-semibold text-accent">
                {nl ? `${slot.votes} stemmen` : `${slot.votes} votes`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </MockWindow>
  );
}

export function DecisionsMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const items = nl
    ? ["Planning goedkeuren", "Website-lead beantwoorden", "Mail: bod"]
    : ["Approve planning", "Reply to website lead", "Mail: offer"];
  return (
    <MockWindow title={nl ? "beslissingen" : "decisions"}>
      <ul className="space-y-2 bg-surface p-3">
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-[12px]"
          >
            <span
              className={`h-8 w-1 rounded-full ${i === 0 ? "bg-red-400" : i === 1 ? "bg-amber-400" : "bg-accent"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </MockWindow>
  );
}

export function SignMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const parties = nl
    ? [
        ["Sofie", "Bewerkt"],
        ["Jan", "Gelezen"],
        ["Adam", "Akkoord"],
      ]
    : [
        ["Sofie", "Edited"],
        ["Jan", "Read"],
        ["Adam", "Approved"],
      ];
  const history = nl
    ? [
        ["14:12", "Sofie", "Clausule 4 herschreven"],
        ["11:40", "Adam", "Prijs en termijn gezet"],
        ["09:15", "Jan", "Concept geopend"],
      ]
    : [
        ["14:12", "Sofie", "Rewrote clause 4"],
        ["11:40", "Adam", "Set price and term"],
        ["09:15", "Jan", "Opened the draft"],
      ];

  const clauses = nl
    ? [
        "1. De verkoopprijs bedraagt € 429.000.",
        "2. Overdracht binnen 4 maanden na ondertekening.",
        "4. Opschortende voorwaarde: financiering.",
      ]
    : [
        "1. The sale price is € 429,000.",
        "2. Transfer within 4 months of signing.",
        "4. Condition: financing approval.",
      ];

  return (
    <MockWindow title={nl ? "contracten / compromis" : "contracts / sale agreement"}>
      <div className="bg-surface p-3 sm:p-4">
        <p className="text-sm font-semibold">
          {nl ? "Compromis — Kerkstraat 18" : "Sale agreement — 18 Church St"}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {parties.map(([name, status]) => (
            <span
              key={name}
              className="rounded-full border border-line px-2 py-1 font-mono text-[9px]"
            >
              {name} · {status}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-line bg-[#faf9f6] px-3 py-2.5">
          {clauses.map((line) => (
            <p key={line} className="text-[11px] leading-relaxed text-ink">
              {line}
            </p>
          ))}
        </div>
        <ul className="mt-3 space-y-1.5">
          {history.map(([time, who, what]) => (
            <li
              key={time}
              className="flex gap-2 rounded-lg bg-[#faf9f6] px-2.5 py-1.5"
            >
              <span className="shrink-0 font-mono text-[9px] text-muted">
                {time}
              </span>
              <span className="text-[11px]">
                <span className="font-semibold">{who}</span> {what}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg bg-accent-soft px-3 py-2 font-mono text-[10px] font-semibold text-accent">
          {nl
            ? "Iedereen tevreden — klaar om te tekenen"
            : "Everyone is happy — ready to sign"}
        </p>
      </div>
    </MockWindow>
  );
}

export function StagingMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "inrichting" : "staging"}>
      <div className="grid grid-cols-2 gap-2 bg-surface p-3">
        <div className="rounded-xl bg-gradient-to-br from-line to-[#ddd8cc] p-2">
          <p className="font-mono text-[9px] text-muted">{nl ? "Voor" : "Before"}</p>
          <div className="mt-6 h-12 rounded bg-surface/40" />
        </div>
        <div className="rounded-xl bg-gradient-to-br from-accent/30 to-accent-soft p-2">
          <p className="font-mono text-[9px] text-accent">{nl ? "Na" : "After"}</p>
          <div className="mt-4 flex gap-1">
            <div className="h-8 flex-1 rounded bg-surface/70" />
            <div className="h-8 w-6 rounded bg-accent/40" />
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

export function TeamMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const rows = nl
    ? [
        ["Sofie", nl ? "Makelaar" : "Agent"],
        ["Adam", nl ? "Backoffice" : "Back office"],
      ]
    : [
        ["Sofie", "Agent"],
        ["Adam", "Back office"],
      ];
  return (
    <MockWindow title={nl ? "team / rollen" : "team / roles"}>
      <div className="space-y-2 bg-surface p-3">
        {rows.map(([name, role]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-xl border border-line px-3 py-2"
          >
            <p className="text-sm font-semibold">{name}</p>
            <p className="font-mono text-[10px] text-muted">{role}</p>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

export function FeatureMock({
  id,
  locale,
}: {
  id: string;
  locale: "nl" | "en";
}) {
  switch (id) {
    case "panden":
      return <ListingMock locale={locale} />;
    case "publicatie":
      return <PublishMock locale={locale} />;
    case "deals":
    case "prospecten":
      return <KanbanMock locale={locale} />;
    case "klanten":
      return <ContactsMock locale={locale} />;
    case "website":
    case "inbox":
      return <InboxMock locale={locale} />;
    case "agenda":
      return <AgendaMock locale={locale} />;
    case "beslissingen":
      return <DecisionsMock locale={locale} />;
    case "signing":
    case "docusign":
      return <SignMock locale={locale} />;
    case "inrichting":
      return <StagingMock locale={locale} />;
    case "team":
      return <TeamMock locale={locale} />;
    default:
      return <HeroMock locale={locale} />;
  }
}
