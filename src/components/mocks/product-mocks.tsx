import { MockSidebar, MockWindow } from "./shell";

const sidebarNl = ["Dashboard", "Panden", "Deals", "Inbox", "Agenda", "Financiën"];
const sidebarEn = ["Dashboard", "Listings", "Deals", "Inbox", "Calendar", "Finances"];

function Pill({ children, tone = "accent" }: { children: string; tone?: "accent" | "muted" | "warn" }) {
  const cls =
    tone === "accent"
      ? "bg-accent-soft text-accent"
      : tone === "warn"
        ? "bg-amber-100 text-amber-800"
        : "bg-[#f1eee7] text-muted";
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold ${cls}`}>
      {children}
    </span>
  );
}

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
            <Pill>{nl ? "Dossier 7/8" : "File 7/8"}</Pill>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight">€ 429.000</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              [nl ? "Bewoonbaar" : "Liveable", "142 m²"],
              [nl ? "Slaapkamers" : "Bedrooms", "3"],
              ["EPC", nl ? "B · tot 2034" : "B · to 2034"],
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
            <div className="relative h-16 w-16 rounded-xl bg-accent/15">
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-semibold text-accent">
                {nl ? "video" : "video"}
              </span>
            </div>
          </div>
          <p className="mt-3 font-mono text-[9px] text-muted">
            {nl
              ? "AI-intake: EPC, asbest en akte ingelezen uit 3 pdf’s"
              : "AI intake: EPC, asbestos, and deed read from 3 PDFs"}
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

export function DashboardMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const kpis = nl
    ? [
        ["Open deals", "18"],
        ["Website-leads", "4"],
        ["Taken vandaag", "7"],
      ]
    : [
        ["Open deals", "18"],
        ["Website leads", "4"],
        ["Tasks today", "7"],
      ];
  return (
    <MockWindow title={nl ? "dashboard" : "dashboard"}>
      <div className="flex min-h-[220px] bg-surface">
        <MockSidebar items={nl ? sidebarNl : sidebarEn} active="Dashboard" />
        <div className="min-w-0 flex-1 p-3">
          <div className="grid grid-cols-3 gap-2">
            {kpis.map(([label, value], i) => (
              <div
                key={label}
                className={`rounded-xl px-2.5 py-2 ${
                  i === 0 ? "bg-accent text-on-ink" : i === 1 ? "bg-accent-soft" : "border border-line"
                }`}
              >
                <p className={`font-mono text-[9px] ${i === 0 ? "text-on-ink/80" : "text-muted"}`}>{label}</p>
                <p className="text-lg font-semibold tracking-tight">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-[1.4fr_1fr] gap-2">
            <div className="rounded-xl border border-line p-2">
              <p className="font-mono text-[9px] text-muted">{nl ? "Pipeline" : "Pipeline"}</p>
              <div className="mt-2 flex items-end gap-1">
                {[9, 6, 4, 3, 2].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-accent/70"
                    style={{ height: `${h * 5}px`, opacity: 1 - i * 0.14 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-line p-2">
              <p className="font-mono text-[9px] text-muted">{nl ? "Checklist" : "Checklist"}</p>
              <p className="mt-1 text-[11px] font-semibold">{nl ? "Kerkstraat 18" : "18 Church St"}</p>
              <div className="mt-1.5 h-1.5 rounded-full bg-line">
                <div className="h-1.5 w-[85%] rounded-full bg-accent" />
              </div>
            </div>
          </div>
          <p className="mt-2 font-mono text-[9px] text-muted">
            {nl ? "Widgets slepen, vergroten en kleuren" : "Drag, resize, and colour widgets"}
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

export function KanbanMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const cols = nl
    ? [
        ["Nieuw", "Van Dam — studio", "2 taken"],
        ["Bezoek", "Peeters — rijwoning", "mail bij fase"],
        ["Bod", "Nguyen — duplex", "bod: € 389.000"],
      ]
    : [
        ["New", "Van Dam — studio", "2 tasks"],
        ["Viewing", "Peeters — townhouse", "mail on stage"],
        ["Offer", "Nguyen — duplex", "offer: € 389,000"],
      ];
  return (
    <MockWindow title={nl ? "deals" : "deals"}>
      <div className="grid grid-cols-3 gap-1.5 bg-surface p-2 sm:gap-2 sm:p-3">
        {cols.map(([stage, card, meta], i) => (
          <div key={stage} className="min-w-0 rounded-xl bg-[#faf9f6] p-1.5 sm:p-2">
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-semibold text-muted">
              <span
                className={`size-2 rounded-full ${i === 0 ? "bg-sky-400" : i === 1 ? "bg-amber-400" : "bg-accent"}`}
              />
              {stage}
            </p>
            <div className="rounded-lg border border-line bg-surface px-1.5 py-2 shadow-sm sm:px-2">
              <p className="text-[11px] leading-snug font-semibold">{card}</p>
              <p className="mt-1 font-mono text-[9px] text-accent">{meta}</p>
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
    <MockWindow title={nl ? "whatsapp + mail + website" : "whatsapp + mail + website"}>
      <div className="flex min-h-[200px] bg-surface">
        <div className="min-w-0 w-2/5 border-r border-line p-2">
          {[
            [nl ? "Website · schatting" : "Website · valuation", "14:02"],
            ["WhatsApp · L. Janssens", "13:40"],
            [nl ? "Mail · notaris, bod" : "Mail · notary, offer", "09:11"],
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
            {nl ? "Aanvraag van je site · ontvangstbevestiging verstuurd" : "Enquiry from your site · acknowledgement sent"}
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
          <p className="mt-2 text-right font-mono text-[9px] text-muted">
            {nl ? "concept uit sjabloon · AI herschrijft op knop" : "draft from template · AI rewrites on a button"}
          </p>
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
  const rows: [string, string, "accent" | "muted" | "warn"][] = nl
    ? [
        ["Eigen website", "Live · 128 weergaven", "accent"],
        ["Immoweb", "Online sinds 3 okt", "accent"],
        ["Immoscoop", "Klaar om te sturen", "muted"],
        ["Immomaps", "Feed actief", "accent"],
      ]
    : [
        ["Own website", "Live · 128 views", "accent"],
        ["Immoweb", "Online since 3 Oct", "accent"],
        ["Immoscoop", "Ready to push", "muted"],
        ["Immomaps", "Feed active", "accent"],
      ];
  return (
    <MockWindow title={nl ? "publicatie" : "publishing"}>
      <div className="space-y-2 bg-surface p-4">
        {rows.map(([label, status, tone]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-line px-3 py-2.5"
          >
            <p className="text-sm font-semibold">{label}</p>
            <Pill tone={tone}>{status}</Pill>
          </div>
        ))}
        <p className="pt-1 font-mono text-[10px] text-muted">
          {nl ? "Checklist compleet — brochure (pdf) klaar" : "Checklist complete — brochure (PDF) ready"}
        </p>
      </div>
    </MockWindow>
  );
}

export function WebsiteMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const nav = nl
    ? ["Aanbod", "Verkopen", "Schatting", "Inschrijven", "Contact"]
    : ["Listings", "Sell", "Valuation", "Sign up", "Contact"];
  const cards = nl
    ? [
        ["Kerkstraat 18", "€ 429.000", "In de kijker"],
        ["Statiestraat 4", "€ 365.000", "Te koop"],
        ["Leopoldlaan 22", "€ 1.250 / mnd", "Te huur"],
      ]
    : [
        ["Kerkstraat 18", "€ 429,000", "Featured"],
        ["Statiestraat 4", "€ 365,000", "For sale"],
        ["Leopoldlaan 22", "€ 1,250 / mo", "For rent"],
      ];
  return (
    <MockWindow title={nl ? "jouwkantoor.be" : "youroffice.be"}>
      <div className="bg-surface">
        <div className="flex items-center justify-between border-b border-line px-3 py-2">
          <span className="font-mono text-[10px] font-semibold text-ink">
            {nl ? "Jouw Kantoor" : "Your Office"}
          </span>
          <ul className="hidden gap-3 sm:flex">
            {nav.map((item) => (
              <li key={item} className="font-mono text-[9px] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {cards.map(([title, price, tag], i) => (
            <div key={title} className="overflow-hidden rounded-xl border border-line">
              <div
                className={`h-12 ${
                  i === 0
                    ? "bg-gradient-to-br from-accent/30 to-line"
                    : i === 1
                      ? "bg-gradient-to-br from-line to-accent-soft"
                      : "bg-gradient-to-br from-[#e5dfd2] to-line"
                }`}
              />
              <div className="p-1.5">
                <p className="truncate text-[10px] font-semibold">{title}</p>
                <p className="font-mono text-[9px] text-accent">{price}</p>
                <p className="mt-0.5 font-mono text-[8px] text-muted">{tag}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="px-3 pb-3 font-mono text-[9px] text-muted">
          {nl
            ? "Eigen domein · live binnen seconden na opslaan in het CRM"
            : "Own domain · live within seconds of saving in the CRM"}
        </p>
      </div>
    </MockWindow>
  );
}

export function ContactsMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "klanten / Mira De Smet" : "contacts / Mira De Smet"}>
      <div className="bg-surface p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold">Mira De Smet</p>
          <Pill>{nl ? "Kandidaat-koper" : "Prospective buyer"}</Pill>
        </div>
        <p className="mt-1 font-mono text-[10px] text-muted">
          {nl ? "Zoekprofiel · 3 slaapkamers · Antwerpen, Mortsel · tot €450k" : "Search profile · 3 beds · Antwerp, Mortsel · up to €450k"}
        </p>
        <div className="mt-3 flex gap-3 border-b border-line font-mono text-[9px] text-muted">
          <span className="border-b-2 border-accent pb-1 font-semibold text-accent">
            {nl ? "Matches" : "Matches"}
          </span>
          <span className="pb-1">{nl ? "Communicatie" : "Communication"}</span>
          <span className="pb-1">{nl ? "Tijdlijn" : "Timeline"}</span>
        </div>
        <div className="mt-2 space-y-2">
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
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold">
            {nl ? "Kerkstraat 18 — kijkmoment" : "18 Church St — viewing"}
          </p>
          <Pill tone="muted">{nl ? "Google Agenda" : "Google Calendar"}</Pill>
        </div>
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
        <p className="mt-3 font-mono text-[9px] text-muted">
          {nl ? "Bevestiging per mail of WhatsApp · Meet-link toegevoegd" : "Confirmation by mail or WhatsApp · Meet link added"}
        </p>
      </div>
    </MockWindow>
  );
}

export function DecisionsMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const items = nl
    ? [
        ["Planning goedkeuren · Kerkstraat 18", "38 u"],
        ["Website-lead beantwoorden · schatting", "20 u"],
        ["Mail: bod notaris", "2 u"],
      ]
    : [
        ["Approve planning · 18 Church St", "38 h"],
        ["Reply to website lead · valuation", "20 h"],
        ["Mail: notary offer", "2 h"],
      ];
  return (
    <MockWindow title={nl ? "beslissingen" : "decisions"}>
      <div className="bg-surface p-3">
        <div className="mb-2 flex gap-3 font-mono text-[9px] text-muted">
          {(nl
            ? ["Overzicht", "Taken", "Planning", "Website", "Mails", "WhatsApp"]
            : ["Overview", "Tasks", "Planning", "Website", "Mails", "WhatsApp"]
          ).map((tab, i) => (
            <span key={tab} className={i === 0 ? "font-semibold text-accent" : ""}>
              {tab}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {items.map(([item, age], i) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-[12px]"
            >
              <span
                className={`h-8 w-1 rounded-full ${i === 0 ? "bg-red-400" : i === 1 ? "bg-amber-400" : "bg-accent"}`}
              />
              <span className="min-w-0 flex-1 truncate">{item}</span>
              <span className="font-mono text-[9px] text-muted">{age}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-mono text-[9px] text-muted">
          {nl ? "Reactietijd kantoor: 48 u" : "Office response time: 48 h"}
        </p>
      </div>
    </MockWindow>
  );
}

export function TasksMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const rows = nl
    ? [
        ["Flyers maken opendeurdag", "Adam", "ma 13 okt", "Open"],
        ["Bellen: Peeters — bod", "Sofie", "vandaag", "Open"],
        ["EPC opvragen Statiestraat 4", "Jan", "wo 15 okt", "Afgewezen"],
      ]
    : [
        ["Print open-day flyers", "Adam", "Mon 13 Oct", "Open"],
        ["Call: Peeters — offer", "Sofie", "today", "Open"],
        ["Request EPC Statiestraat 4", "Jan", "Wed 15 Oct", "Rejected"],
      ];
  return (
    <MockWindow title={nl ? "taken" : "tasks"}>
      <div className="bg-surface p-3">
        <div className="mb-2 flex gap-3 font-mono text-[9px] text-muted">
          {(nl ? ["Open", "Klaar", "Afgewezen"] : ["Open", "Done", "Rejected"]).map((tab, i) => (
            <span key={tab} className={i === 0 ? "font-semibold text-accent" : ""}>
              {tab}
            </span>
          ))}
        </div>
        <ul className="divide-y divide-line rounded-xl border border-line">
          {rows.map(([title, who, due, status]) => (
            <li key={title} className="flex items-center gap-2 px-3 py-2">
              <span
                className={`size-3.5 shrink-0 rounded border ${
                  status === "Afgewezen" || status === "Rejected" ? "border-red-300 bg-red-50" : "border-line"
                }`}
              />
              <span className="min-w-0 flex-1 truncate text-[11px] font-semibold">{title}</span>
              <span className="hidden font-mono text-[9px] text-muted sm:inline">{who}</span>
              <span
                className={`font-mono text-[9px] ${
                  due === "vandaag" || due === "today" ? "font-semibold text-amber-600" : "text-muted"
                }`}
              >
                {due}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-mono text-[9px] text-muted">
          {nl ? "Toewijzen, afwijzen met reden, herinnering een dag vooraf" : "Assign, reject with a reason, reminder one day ahead"}
        </p>
      </div>
    </MockWindow>
  );
}

export function SignMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const parties = nl
    ? [
        ["Sofie", "Getekend"],
        ["Jan", "Link geopend"],
        ["Adam", "Akkoord"],
      ]
    : [
        ["Sofie", "Signed"],
        ["Jan", "Link opened"],
        ["Adam", "Approved"],
      ];
  const history = nl
    ? [
        ["14:12", "Sofie", "Tekende via haar link"],
        ["11:40", "Adam", "Vakjes geplaatst op p. 4"],
        ["09:15", "Jan", "Versie 3 goedgekeurd"],
      ]
    : [
        ["14:12", "Sofie", "Signed through her link"],
        ["11:40", "Adam", "Placed boxes on p. 4"],
        ["09:15", "Jan", "Approved version 3"],
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
    <MockWindow title={nl ? "ondertekenen / aankoopbelofte" : "signing / purchase promise"}>
      <div className="bg-surface p-3 sm:p-4">
        <p className="text-sm font-semibold">
          {nl ? "Aankoopbelofte — Kerkstraat 18" : "Purchase promise — 18 Church St"}
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
        <div className="relative mt-3 rounded-xl border border-line bg-[#faf9f6] px-3 py-2.5">
          {clauses.map((line) => (
            <p key={line} className="text-[11px] leading-relaxed text-ink">
              {line}
            </p>
          ))}
          <div className="mt-2 flex gap-2">
            <span className="flex h-7 flex-1 items-center justify-center rounded border border-dashed border-accent bg-accent-soft/60 font-mono text-[9px] italic text-accent">
              {nl ? "Sofie — getekend" : "Sofie — signed"}
            </span>
            <span className="flex h-7 flex-1 items-center justify-center rounded border border-dashed border-line font-mono text-[9px] text-muted">
              {nl ? "Jan — handtekening" : "Jan — signature"}
            </span>
          </div>
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
            ? "Getekende pdf komt bij het pand"
            : "Signed PDF lands on the listing"}
        </p>
      </div>
    </MockWindow>
  );
}

export function StagingMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  return (
    <MockWindow title={nl ? "inrichting" : "staging"}>
      <div className="bg-surface p-3">
        <div className="grid grid-cols-2 gap-2">
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
        <p className="mt-2 rounded-lg border border-line px-2.5 py-1.5 font-mono text-[9px] text-muted">
          {nl
            ? "“moderne woonkamer met bank en salontafel” · hele kamer"
            : "“modern living room with sofa and coffee table” · whole room"}
        </p>
      </div>
    </MockWindow>
  );
}

export function FinanceMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const totals = nl
    ? [
        ["Omzet Q3", "€ 48.600"],
        ["Kosten Q3", "€ 12.140"],
        ["Btw af te dragen", "€ 7.657"],
      ]
    : [
        ["Revenue Q3", "€ 48,600"],
        ["Costs Q3", "€ 12,140"],
        ["VAT payable", "€ 7,657"],
      ];
  const rows = nl
    ? [
        ["Commissie Kerkstraat 18", "deal gewonnen", "€ 12.900"],
        ["Immoweb boost", "portalen · bijlage", "− € 95"],
        ["Fotograaf Statiestraat", "media · bijlage", "− € 240"],
      ]
    : [
        ["Commission 18 Church St", "deal won", "€ 12,900"],
        ["Immoweb boost", "portals · attachment", "− € 95"],
        ["Photographer Statiestraat", "media · attachment", "− € 240"],
      ];
  return (
    <MockWindow title={nl ? "financiën / Q3 2026" : "finances / Q3 2026"}>
      <div className="bg-surface p-3">
        <div className="grid grid-cols-3 gap-2">
          {totals.map(([label, value], i) => (
            <div key={label} className={`rounded-xl px-2.5 py-2 ${i === 0 ? "bg-accent-soft" : "border border-line"}`}>
              <p className="font-mono text-[9px] text-muted">{label}</p>
              <p className="text-sm font-semibold tracking-tight">{value}</p>
            </div>
          ))}
        </div>
        <ul className="mt-2 divide-y divide-line rounded-xl border border-line">
          {rows.map(([title, meta, amount]) => (
            <li key={title} className="flex items-center gap-2 px-3 py-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold">{title}</p>
                <p className="font-mono text-[9px] text-muted">{meta}</p>
              </div>
              <span className={`font-mono text-[10px] font-semibold ${amount.startsWith("−") ? "text-muted" : "text-accent"}`}>
                {amount}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-mono text-[9px] text-muted">
          {nl ? "Export CSV + zip voor de boekhouder" : "Export CSV + zip for the accountant"}
        </p>
      </div>
    </MockWindow>
  );
}

export function ReportsMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const metrics = nl
    ? [
        ["Nieuwe panden", "6", "+2"],
        ["Deals gewonnen", "3", "+1"],
        ["Bezichtigingen", "14", "−3"],
        ["Mails verstuurd", "52", "+9"],
      ]
    : [
        ["New listings", "6", "+2"],
        ["Deals won", "3", "+1"],
        ["Viewings", "14", "−3"],
        ["Mails sent", "52", "+9"],
      ];
  return (
    <MockWindow title={nl ? "rapporten / Sofie · september" : "reports / Sofie · September"}>
      <div className="bg-surface p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold">Sofie Claes</p>
          <Pill tone="muted">{nl ? "t.o.v. augustus" : "vs August"}</Pill>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {metrics.map(([label, value, delta]) => (
            <div key={label} className="rounded-xl border border-line px-2.5 py-2">
              <p className="font-mono text-[9px] text-muted">{label}</p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-lg font-semibold tracking-tight">{value}</p>
                <p className={`font-mono text-[9px] font-semibold ${delta.startsWith("−") ? "text-muted" : "text-accent"}`}>
                  {delta}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[9px] text-muted">
          {nl ? "Pdf bekijken of downloaden" : "View or download PDF"}
        </p>
      </div>
    </MockWindow>
  );
}

export function TeamMock({ locale }: { locale: "nl" | "en" }) {
  const nl = locale === "nl";
  const modules = nl
    ? ["Panden", "Deals", "WhatsApp", "Financiën"]
    : ["Listings", "Deals", "WhatsApp", "Finances"];
  const roles = nl
    ? [
        ["Makelaar", ["Schrijven · eigen", "Schrijven · eigen", "Schrijven · eigen", "—"]],
        ["Backoffice", ["Schrijven · alles", "Lezen · alles", "Lezen · alles", "Schrijven"]],
      ]
    : [
        ["Agent", ["Write · own", "Write · own", "Write · own", "—"]],
        ["Back office", ["Write · all", "Read · all", "Read · all", "Write"]],
      ];
  return (
    <MockWindow title={nl ? "gebruikers / rollen" : "users / roles"}>
      <div className="bg-surface p-3">
        <div className="overflow-hidden rounded-xl border border-line">
          <div className="grid grid-cols-5 bg-[#faf9f6] px-2 py-1.5 font-mono text-[9px] text-muted">
            <span>{nl ? "Rol" : "Role"}</span>
            {modules.map((m) => (
              <span key={m} className="truncate">{m}</span>
            ))}
          </div>
          {roles.map(([role, cells]) => (
            <div key={role as string} className="grid grid-cols-5 border-t border-line px-2 py-2">
              <span className="text-[11px] font-semibold">{role as string}</span>
              {(cells as string[]).map((cell, i) => (
                <span key={i} className={`truncate font-mono text-[9px] ${cell === "—" ? "text-muted" : "text-ink"}`}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[9px] text-muted">
          {nl ? "Eén login · wissel tussen Gent en Antwerpen" : "One login · switch between Ghent and Antwerp"}
        </p>
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
    case "dashboard":
      return <DashboardMock locale={locale} />;
    case "panden":
      return <ListingMock locale={locale} />;
    case "publicatie":
      return <PublishMock locale={locale} />;
    case "eigen-website":
      return <WebsiteMock locale={locale} />;
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
    case "taken":
      return <TasksMock locale={locale} />;
    case "signing":
      return <SignMock locale={locale} />;
    case "inrichting":
      return <StagingMock locale={locale} />;
    case "financien":
      return <FinanceMock locale={locale} />;
    case "rapporten":
      return <ReportsMock locale={locale} />;
    case "team":
      return <TeamMock locale={locale} />;
    default:
      return <HeroMock locale={locale} />;
  }
}
