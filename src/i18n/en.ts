import { cookiesEn, privacyEn, termsEn } from "./legal-en";
import type { Dictionary } from "./nl";

export const en: Dictionary = {
  meta: {
    home: {
      title: "ImmoCRM",
      description:
        "CRM for estate agents in Belgium and the Netherlands. Listings, deals, contacts, email, WhatsApp, calendar, your own website, signing, and office finances in one workspace. €140 per month for the first user, then €40.",
    },
    functies: {
      title: "ImmoCRM",
      description:
        "Listings with AI intake and checklist, publishing to your website, Immoweb, Immoscoop, and Immomaps, deals, prospects, contacts, WhatsApp and email, calendar, tasks, collaboration and signing, virtual staging, finances, reports, and team roles.",
    },
    prijzen: {
      title: "ImmoCRM",
      description:
        "€140 per month for the first user, then €40 per extra user. Every module and your own website included. Or a custom price. Request a demo to get started.",
    },
    contact: {
      title: "ImmoCRM",
      description:
        "Book an ImmoCRM demo. Email info@turboturtle.nl or call +31 6 3496 5518. No automated signup.",
    },
    privacy: {
      title: "ImmoCRM",
      description:
        "How ImmoCRM processes personal data under the GDPR.",
    },
    cookies: {
      title: "ImmoCRM",
      description: "Which cookies ImmoCRM sets and how to manage them.",
    },
    voorwaarden: {
      title: "ImmoCRM",
      description: "Terms for the website, demo, and use of ImmoCRM.",
    },
    stappen: {
      title: "ImmoCRM",
      description:
        "Live in three steps: demo, data migration and setup, training and go-live.",
    },
    faq: {
      title: "ImmoCRM",
      description:
        "Answers on pricing, seats, onboarding, your own website, Immoweb and other portals, WhatsApp, email, AI, signing, finances, and privacy.",
    },
  },
  brand: {
    name: "ImmoCRM",
  },
  nav: {
    features: "Features",
    pricing: "Pricing",
    steps: "Get started",
    faq: "FAQ",
    contact: "Contact",
    demo: "Request a demo",
    login: "Log in",
    language: "Language",
    menu: "Menu",
    close: "Close menu",
  },
  footer: {
    tagline: "One flow for listings, deals, and conversations.",
    privacy: "Privacy statement",
    cookies: "Cookie policy",
    terms: "Terms of service",
    legal: "Legal",
    copyright: "© 2026 ImmoCRM",
    product: "Product",
    company: "Office",
    region: "For estate agents in Belgium and the Netherlands",
    cta: "Request a demo",
  },
  legal: {
    back: "← Back to home",
  },
  home: {
    heroTitle: "The CRM that takes over the office work",
    heroEyebrow: "For estate agents in Belgium and the Netherlands",
    heroSub:
      "ImmoCRM brings together listings, deals, contacts, email, WhatsApp, calendar, your own website, signing, and the office’s own bookkeeping. Checklists, triggers, and follow-up run on their own.",
    heroWhy:
      "One file per listing, per deal, and per contact. No retyping, no separate inboxes, no separate website builder. Does your office work differently? Then we adjust the steps.",
    heroChannelsLead:
      "Email, WhatsApp, your website, the calendar, and documents share one automated follow-up. The conversation with the client continues, without separate inboxes.",
    heroChannels: [
      { id: "mail" as const, label: "Mail" },
      { id: "whatsapp" as const, label: "WhatsApp" },
      { id: "website" as const, label: "Website" },
      { id: "agenda" as const, label: "Calendar" },
      { id: "signing" as const, label: "Contracts" },
    ],
    ctaDemo: "Request a demo",
    scrollHint: "Scroll",
    productPreviewLabel: "ImmoCRM product video showing a dossier, workflow, and checklist",
    videoOpen: "Watch the video larger",
    videoClose: "Close video",
    automationTitle: "Automation",
    automationHeading: "One flow that speeds up the office work",
    automationLead:
      "ImmoCRM speeds up the workflows of your office. Email, WhatsApp, your website, the calendar, and contracts share one flow. Automated messages use your templates; AI helps you write, but never sends on its own.",
    automationShotHint: "Screenshot coming",
    automationChannels: [
      {
        id: "mail" as const,
        label: "Mail",
        headline: "Mail lands in the file, with the reply already drafted.",
        body: "Connect Google or Outlook. Mail from followed senders or with keywords arrives with a draft reply from your templates. You read, adjust, and send, with listing attachments, brochure, or a planning link. Everything hangs on the listing, the deal, or the contact.",
        shot: "/brand/automation-mail.webp",
        video: "/brand/automation-mail.mp4",
        shotAlt:
          "Mail inbox with followed senders and keywords, a draft reply, the same mail on the listing, and the templates",
      },
      {
        id: "whatsapp" as const,
        label: "WhatsApp",
        headline: "WhatsApp on the office number — AI helps write, never sends.",
        body: "One business number via Meta, no private phones. Templates, button flows, and automatic keyword replies catch the first questions. Every conversation hangs on the contact and the listing. AI may rewrite a message, but never sends on its own.",
        shot: "/brand/automation-whatsapp.webp",
        video: "/brand/automation-whatsapp.mp4",
        shotAlt: "WhatsApp inbox on the office number with a flow, the flow settings, and AI rewriting",
      },
      {
        id: "website" as const,
        label: "Website",
        headline: "Your own website is included. Every enquiry becomes a work queue.",
        body: "Your office gets a website on your own domain with your listings and forms for selling, valuation, and search. Publish from the file, live within seconds. Every enquiry lands as an open item with an automatic acknowledgement. You reply by mail or WhatsApp, or turn it into a contact in one click.",
        shot: "/brand/automation-website.webp",
        video: "/brand/automation-website.mp4",
        shotAlt: "The office's own website with listings, the website inbox with enquiries, the automatic acknowledgement, and a reply from the lead",
      },
      {
        id: "agenda" as const,
        label: "Calendar",
        headline: "A planner of your own: everyone votes, you book.",
        body: "Google or Outlook connected. For a viewing you send proposals by mail or WhatsApp; buyer, seller, and office vote. The chosen moment lands in everyone’s calendar, on the listing, with a Meet or Teams link if you want. You see when colleagues are busy.",
        shot: "/brand/automation-agenda.webp",
        video: "/brand/automation-agenda.mp4",
        shotAlt: "Weekly calendar with a linked calendar, the planning dialog with proposals by mail or WhatsApp, and the vote overview",
      },
      {
        id: "signing" as const,
        label: "Contracts",
        headline: "Write together, keep the history, sign through a link.",
        body: "Several parties work in the same document, every version is kept. When everyone agrees, you place signature boxes on the PDF. Each party signs at home through a personal link, with mouse or finger. The signed PDF lands on the listing. No external signing service needed.",
        shot: "/brand/automation-signing.webp",
        video: "/brand/automation-signing.mp4",
        shotAlt: "Collaboration file with document and comments, the file list, a signing request, and the templates",
      },
    ],
    whyUsTitle: "Why ImmoCRM",
    whyUsLead:
      "A generic CRM adapts to real estate. ImmoCRM is built for it.",
    whyUsBody:
      "Listing, deal, contact, and conversation live in one place, with your website, your calendar, and your bookkeeping alongside. Checklists, triggers, and follow-up run with the file, so the office retypes less and chases less.",
    whyUsPoints: [
      {
        icon: "workflow" as const,
        title: "A faster workflow",
        body: "Certificates, checklist, publishing to website and portals, messages, and documents belong to the file. AI reads your PDFs and drafts a reply. You no longer switch between mailbox, chat, portal, and spreadsheet.",
      },
      {
        icon: "followup" as const,
        title: "Follow-up that sticks",
        body: "Every conversation stays with the person and the listing. Decisions and Tasks show who is waiting, what you promised, and what comes next, with colour as soon as the response time is running out.",
      },
      {
        icon: "people" as const,
        title: "The whole office",
        body: "From prospect to signed deed and invoice: leads grow on their own board, deals move through stages, Finances and Reports show what the office earns and who did what.",
      },
    ],
    beats: [
      {
        title: "The listing",
        body: "Every property is a file: details, media, a checklist with phases, and publishing to your website and the portals.",
      },
      {
        title: "The deal",
        body: "A pipeline with your own stages, triggers, and tasks, where every deal has its own file.",
      },
      {
        title: "The conversation",
        body: "Website leads, WhatsApp, email, and appointments in one place, on the contact and the listing.",
      },
    ],
    landingEyebrow: "Sample from the product",
    landingAddress: "Keizerstraat 18, 2000 Antwerp",
    landingPrice: "€ 649,000",
    landingStatus: "For sale",
    landingBeds: "4 bed",
    customTitle: "Your office, your flow",
    customBody:
      "ImmoCRM covers the path from prospect to signature and invoice. If your office works differently, we add workflows or features on request. We scope that in a demo — not a catalog of add-on packs.",
    priceEyebrow: "Price",
    priceTitle: "€140 for the first user",
    priceBody:
      "Then €40 per extra user per month. Every module and your own website included, no hidden packs. See what you get.",
    priceCta: "View pricing",
    finalTitle: "See ImmoCRM in your office",
    finalBody:
      "We’ll walk the product with you. No automated trial — a focused demo.",
  },
  features: {
    title: "Everything in one workspace",
    intro:
      "ImmoCRM covers the path from prospect to signature and invoice, including your own website. No add-on modules to buy later — this is the product.",
    catalogEyebrow: "Features",
    catalogTitle: "Everything the office already does, in one CRM",
    catalogLead:
      "No module shop. This is the product: from listing file and publishing to signing, bookkeeping, and reports, including your website and the conversations around it.",
    catalogCta: "Read the detail per feature",
    custom: {
      title: "Custom",
      body: "ImmoCRM can add workflows or features that fit your office. No module shop: we agree scope and timing in a demo.",
      bullets: [
        "Workflows that match how your office already works",
        "Extra fields, stages, or steps on request",
        "Scoped in the demo, no extra pack to buy",
      ],
    },
    sections: [
      {
        id: "dashboard",
        title: "Dashboard",
        body: "The start screen of the working day. Key figures, open tasks, pipeline, listings, website leads, and calendar in widgets you arrange yourself. Every widget clicks through to its module.",
        bullets: [
          "Drag, resize, and colour widgets, personal per user",
          "Deals board and prospects board as widgets",
          "Checklist progress of your listings at a glance",
        ],
      },
      {
        id: "panden",
        title: "Listings",
        body: "Every property is a file, not a row in a spreadsheet. Details, media, documents, checklist, candidates, and communication stay together. New listing? Drop in the PDFs and AI pre-fills the details.",
        bullets: [
          "AI document intake: EPC, certificates, and deed are read into a pre-filled listing",
          "Checklist with phases and assignee; recognised documents tick themselves off",
          "Room layout, EPC and asbestos, surroundings calculated automatically",
          "Photos, video, and floor plans; portfolio as cards, table, or map",
          "Clone a listing, mail the parties, communication and timeline per listing",
        ],
      },
      {
        id: "publicatie",
        title: "Publishing and portals",
        body: "When the file is ready, you take it live. Your own website, Immoweb, Immoscoop, and Immomaps share the same source. Per channel you see the status and the last error.",
        bullets: [
          "Your website waits for the checklist; portals you publish separately",
          "Immoweb, Immoscoop, and Immomaps from the file, with boost",
          "Publication brochure as PDF, visibility per field and document",
        ],
      },
      {
        id: "eigen-website",
        title: "Your own website",
        body: "ImmoCRM includes a public website for your office, on your own domain and with your logo. Listings, listing detail with photos, video, and map, selling, free valuation, search signup, and compare. Everything comes from the CRM and updates within seconds.",
        bullets: [
          "Listings and detail page with carousel, documents, and location map",
          "Forms for selling, valuation, search signup, and contact",
          "Own domain, SEO and sitemap, page views back in the CRM",
        ],
      },
      {
        id: "deals",
        title: "Deals",
        body: "The pipeline is the daily board, for sales and lettings. Drag a deal to the next stage and open the file for tasks, notes, and messages. Stages, colours, and extra fields are yours to define.",
        bullets: [
          "Kanban with your own stages, colours, and gates per stage",
          "Triggers: automatic mail or WhatsApp on a stage change",
          "Default tasks on a new deal, create a listing from the deal",
        ],
      },
      {
        id: "prospecten",
        title: "Prospects",
        body: "New leads grow on their own board with their own stages first. Only when it gets serious do you turn them into a contact and a deal, without retyping anything.",
        bullets: [
          "Separate kanban board with stages your office sets itself",
          "Link to an existing contact or grow into contact plus deal",
          "Tasks, notes, and mail from the prospect",
        ],
      },
      {
        id: "klanten",
        title: "Contacts and network",
        body: "Buyers, sellers, tenants, and landlords, but also notaries, fellow agents, and your network. Every card has a search profile, a timeline, and a communication tab with all mails and WhatsApp conversations.",
        bullets: [
          "Contact types from buyer to notary, with duplicate detection on email and phone",
          "Search profile per contact and candidate matching with your listings",
          "One mail to several contacts, export and anonymise per contact",
        ],
      },
      {
        id: "website",
        title: "Website leads",
        body: "Enquiries from your site arrive as a work queue: sale, valuation, search, listing question, or message. You reply by mail or WhatsApp, from the same file.",
        bullets: [
          "One inbox for site enquiries, with automatic acknowledgement",
          "Reply by email or WhatsApp, with template, listing, and attachments",
          "Accept as contact, draft listing, or search profile; search signups automatically",
        ],
      },
      {
        id: "inbox",
        title: "WhatsApp and email",
        body: "Two-way inbox for the conversations your office already has. Mail through your connected Google or Outlook account, WhatsApp through the office business number. Templates help; AI drafts a reply, but never sends on its own.",
        bullets: [
          "Followed senders and keywords deliver mails with a draft reply",
          "WhatsApp button flows and automatic keyword replies",
          "Attachments, brochure, and planning link from every compose window",
        ],
      },
      {
        id: "agenda",
        title: "Calendar and viewings",
        body: "Your Google or Outlook calendar inside the CRM, linked to contact and listing. For a viewing you send proposals; buyer, seller, and office vote. The chosen moment lands in everyone’s calendar.",
        bullets: [
          "Planner all parties vote on, by mail or WhatsApp",
          "Invites with Google Meet or Teams, Brussels time",
          "See colleagues busy or free, appointments on the listing",
        ],
      },
      {
        id: "beslissingen",
        title: "Decisions",
        body: "Open actions from mail, WhatsApp, website, planning, tasks, and listings come together. You see what is urgent without five tabs, with colour as soon as the office response time is running out.",
        bullets: [
          "One view of open items",
          "Urgency based on the response time you set yourselves",
          "Team view per agent for those allowed to see it",
        ],
      },
      {
        id: "taken",
        title: "Tasks",
        body: "Every task in the office in one view: on deals, listings, and prospects, but also loose office tasks. Assign to a colleague, reject with a reason, deadline with reminder.",
        bullets: [
          "Table or board per person, tabs Open, Done, and Rejected",
          "Loose tasks such as “print flyers”, separate from any file",
          "Reminder one day before the deadline, badge in the sidebar",
        ],
      },
      {
        id: "signing",
        title: "Collaboration and signing",
        body: "Several parties edit the same document from a template, with version history and approval. Then you place signature boxes on the PDF; each party signs through a personal link. The signed PDF lands on the listing.",
        bullets: [
          "Templates for purchase promise, identification, and AML file",
          "Versions, comments, and approval per participant",
          "Sign through a link with mouse or finger, no external signing service",
        ],
      },
      {
        id: "inrichting",
        title: "Virtual staging",
        body: "Turn an empty room photo into a furnished preview. Describe what you want in plain language, pick a whole room or place a single piece, and save the result on the listing.",
        bullets: [
          "Style a whole room or place one piece on a region of the photo",
          "3D studio and before-and-after slider",
          "Download as PNG or save to the listing media, weekly AI credit per office",
        ],
      },
      {
        id: "financien",
        title: "Finances",
        body: "The office’s own bookkeeping. Revenue from won deals, costs with receipt or invoice attached, totals per quarter and year, and a VAT overview. The export goes straight to your accountant.",
        bullets: [
          "Link revenue to won deals, “still to invoice” at a glance",
          "Costs per category with attachments, VAT overview per quarter",
          "CSV and zip export for the accountant",
        ],
      },
      {
        id: "rapporten",
        title: "Reports",
        body: "Pick an employee and a period and see at a glance what was done: new listings, deals, appointments, messages. With comparison against the previous period and a PDF to share.",
        bullets: [
          "Per week, month, or custom period",
          "Key figures per person or for the whole office",
          "View or download the PDF, access per role",
        ],
      },
      {
        id: "team",
        title: "Team and security",
        body: "Not everyone needs everything. Roles decide per module who can read or edit, and whether someone sees their own files or the whole office. Data is separated per office; anyone working at several offices switches with one login.",
        bullets: [
          "Permission matrix per module, own records or office-wide",
          "Several offices with one login, activity log per office",
          "Built-in documentation, Dutch and English, works on your phone",
        ],
      },
    ],
    catalog: [
      {
        id: "dossier",
        icon: "listing" as const,
        title: "Listing file",
        body: "Every property is a file with details, status, and what’s left.",
      },
      {
        id: "intake",
        icon: "spark" as const,
        title: "AI document intake",
        body: "PDFs in, a pre-filled listing out. The PDFs never leave your browser.",
      },
      {
        id: "media",
        icon: "media" as const,
        title: "Photos, video, and floor plans",
        body: "Photos are resized automatically. Video plays on your website.",
      },
      {
        id: "documents",
        icon: "document" as const,
        title: "Documents and certificates",
        body: "EPC, asbestos, inspections, and deeds on the listing, with visibility per file.",
      },
      {
        id: "checklist",
        icon: "checklist" as const,
        title: "Checklist with phases",
        body: "From prospecting to aftercare. Recognised documents tick themselves off.",
      },
      {
        id: "layout",
        icon: "listing" as const,
        title: "Layout and surroundings",
        body: "Rooms per floor; shops, schools, and station calculated automatically.",
      },
      {
        id: "map",
        icon: "map" as const,
        title: "Map view",
        body: "Your whole portfolio as pins on the map, with a listing summary per pin.",
      },
      {
        id: "clone",
        icon: "listing" as const,
        title: "Clone a listing",
        body: "Details come along; photos, parties, and tasks are your choice.",
      },
      {
        id: "site-publish",
        icon: "publish" as const,
        title: "Publish to your website",
        body: "Same source as the office. Live within seconds, no CMS.",
      },
      {
        id: "immoweb",
        icon: "publish" as const,
        title: "Immoweb",
        body: "Publish, update, take offline, and boost from the file.",
      },
      {
        id: "portals",
        icon: "publish" as const,
        title: "Immoscoop and Immomaps",
        body: "Feeds per office, with status and last error per portal.",
      },
      {
        id: "brochure",
        icon: "document" as const,
        title: "Publication brochure",
        body: "PDF of the listing, also as an attachment in your mail.",
      },
      {
        id: "own-website",
        icon: "publish" as const,
        title: "Own website included",
        body: "Listings, selling, valuation, signup, and compare on your own domain.",
      },
      {
        id: "field-visibility",
        icon: "shield" as const,
        title: "Visibility per field",
        body: "Choose per field and document what goes on the website. Price on request is possible.",
      },
      {
        id: "triggers",
        icon: "spark" as const,
        title: "Listing and stage triggers",
        body: "Automatic mail or WhatsApp on publishing or a stage change, from your templates.",
      },
      {
        id: "pipeline",
        icon: "pipeline" as const,
        title: "Deals pipeline",
        body: "Kanban with your own stages, colours, extra fields, and gates.",
      },
      {
        id: "deal-file",
        icon: "deal" as const,
        title: "Deal file",
        body: "Tasks, notes, and messages belong to the deal.",
      },
      {
        id: "tasks",
        icon: "task" as const,
        title: "Tasks",
        body: "Office overview, assign, reject with a reason, reminders.",
      },
      {
        id: "prospects",
        icon: "people" as const,
        title: "Prospect board",
        body: "New leads grow on their own board first.",
      },
      {
        id: "contacts",
        icon: "people" as const,
        title: "Contacts and network",
        body: "Buyer to notary, with timeline and communication tab.",
      },
      {
        id: "search-profile",
        icon: "search" as const,
        title: "Search profile",
        body: "What someone is looking for, on the contact.",
      },
      {
        id: "matching",
        icon: "search" as const,
        title: "Candidate matching",
        body: "Link interest to matching listings, and the other way round.",
      },
      {
        id: "web-leads",
        icon: "inbox" as const,
        title: "Website leads",
        body: "Enquiries arrive as a work queue, with acknowledgement.",
      },
      {
        id: "whatsapp",
        icon: "inbox" as const,
        title: "WhatsApp inbox",
        body: "Office number via Meta. Conversations on the person and the listing.",
      },
      {
        id: "whatsapp-flows",
        icon: "inbox" as const,
        title: "WhatsApp flows",
        body: "Button conversations and automatic keyword replies.",
      },
      {
        id: "mail",
        icon: "inbox" as const,
        title: "Mail inbox",
        body: "Google or Outlook connected. Followed senders and keywords.",
      },
      {
        id: "ai",
        icon: "spark" as const,
        title: "AI draft replies",
        body: "A draft ready on arrival. Rewrite on a button. Never sends on its own.",
      },
      {
        id: "templates",
        icon: "inbox" as const,
        title: "Templates",
        body: "Per office or per person, for mail, WhatsApp, and planning.",
      },
      {
        id: "communication",
        icon: "inbox" as const,
        title: "Communication per file",
        body: "All mails and WhatsApp conversations on contact and listing.",
      },
      {
        id: "agenda",
        icon: "calendar" as const,
        title: "Calendar link",
        body: "Google or Outlook in the CRM, appointments on contact and listing.",
      },
      {
        id: "planning",
        icon: "calendar" as const,
        title: "Planner with votes",
        body: "All parties vote on a time. You book the chosen moment.",
      },
      {
        id: "invites",
        icon: "calendar" as const,
        title: "Invites",
        body: "Confirmation by mail or WhatsApp, with Meet or Teams link.",
      },
      {
        id: "colleagues",
        icon: "calendar" as const,
        title: "Colleague calendar",
        body: "See when colleagues are busy, without their details.",
      },
      {
        id: "decisions",
        icon: "checklist" as const,
        title: "Decisions",
        body: "Open actions from mail, chat, website, planning, and listings.",
      },
      {
        id: "collaborate",
        icon: "sign" as const,
        title: "Collaboration",
        body: "One document, several parties, every version kept.",
      },
      {
        id: "signing",
        icon: "sign" as const,
        title: "Signing",
        body: "Boxes on the PDF, sign through a personal link, result on the listing.",
      },
      {
        id: "staging",
        icon: "staging" as const,
        title: "Virtual staging",
        body: "Turn an empty room photo into a furnished preview.",
      },
      {
        id: "staging-3d",
        icon: "staging" as const,
        title: "3D studio",
        body: "Place one piece or view a room in 3D.",
      },
      {
        id: "finance",
        icon: "finance" as const,
        title: "Finances",
        body: "Office revenue, costs, and attachments, per quarter and year.",
      },
      {
        id: "vat-export",
        icon: "finance" as const,
        title: "VAT and export",
        body: "VAT overview per quarter, CSV and zip for the accountant.",
      },
      {
        id: "reports",
        icon: "chart" as const,
        title: "Reports",
        body: "Key figures per employee and period, as PDF.",
      },
      {
        id: "dashboard",
        icon: "dashboard" as const,
        title: "Dashboard",
        body: "Widgets you arrange yourself, personal per user.",
      },
      {
        id: "activity",
        icon: "checklist" as const,
        title: "Activity log",
        body: "Who did what, when. Per office and per file.",
      },
      {
        id: "roles",
        icon: "team" as const,
        title: "Roles and permissions",
        body: "Read or write per module, own records or office-wide.",
      },
      {
        id: "multi-office",
        icon: "team" as const,
        title: "Several offices",
        body: "One login, switch between branches. Data separated per office.",
      },
      {
        id: "gdpr",
        icon: "shield" as const,
        title: "GDPR tools",
        body: "Export and anonymise per contact, duplicate detection on entry.",
      },
      {
        id: "docs",
        icon: "document" as const,
        title: "Built-in documentation",
        body: "Guidance per module inside the CRM, for everyone who logs in.",
      },
      {
        id: "locales",
        icon: "language" as const,
        title: "Dutch and English",
        body: "The product in two languages, own colour per user, also on your phone.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Live in 3 steps",
    lead: "No self-serve trial. We take the office live together.",
    items: [
      {
        number: "01",
        title: "Free demo",
        body: "We show ImmoCRM and talk through how your office works: stages, checklist, website, portals. No obligation, no automated signup.",
      },
      {
        number: "02",
        title: "Migration and setup",
        body: "We help import listings, contacts, and deals from Excel or your current software. Together we set up your logo, domain, mail, WhatsApp, and templates.",
      },
      {
        number: "03",
        title: "Training & go-live",
        body: "Personal training in Dutch or English, plus built-in documentation per module. Your team is operational quickly.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lead: "Short and concrete. If your question isn’t here, ask it in the demo.",
    items: [
      {
        q: "Who is ImmoCRM for?",
        a: "Estate agencies in Belgium and the Netherlands that want listings, deals, contacts, and conversations in one workspace, with their website and bookkeeping alongside. Not a generic CRM you later bend toward property.",
      },
      {
        q: "How is it different from a generic CRM?",
        a: "ImmoCRM is built around the file: certificates, checklist, publishing to website and portals, viewings, messages, and signing belong to the listing or the deal. You don’t have to stitch mail, WhatsApp, portals, and spreadsheets together yourself.",
      },
      {
        q: "How much does it cost?",
        a: "ImmoCRM is €140 per month for the first user, then €40 per extra user. Everything is included, your own website too. For larger teams or different workflows we prepare a custom quote.",
      },
      {
        q: "What is a seat?",
        a: "One seat is one person with a login. The first user is €140 per month, each extra user €40. You pay per active login, not per listing, per module, or per website visitor.",
      },
      {
        q: "Do we really get our own website?",
        a: "Yes. ImmoCRM includes a public website for your office with listings, listing detail, selling, free valuation, search signup, compare, about us, and contact. You connect your own domain and logo in Settings. Everything comes from the CRM and updates within seconds.",
      },
      {
        q: "Which portals do we publish to?",
        a: "Your own website, Immoweb, Immoscoop, and Immomaps, from the same file. Per channel you see whether the listing is online and what the last error was. Boosting works from the CRM. Immoweb requires a PRO account for your office.",
      },
      {
        q: "Is there a free trial?",
        a: "No. We start with a demo so you see the product in your office. Then we take you live. No automated signup.",
      },
      {
        q: "How long until we are operational?",
        a: "After the demo we plan migration, setup, and training. Small offices are often live within a week. Larger files or extra workflows we scope in the demo.",
      },
      {
        q: "Can you migrate our data?",
        a: "Yes. We help import listings, contacts, and deals from Excel or your current software. New listings you then read in yourself with the AI document intake. Scope and timing are part of onboarding.",
      },
      {
        q: "Does it work in Belgium and the Netherlands?",
        a: "Yes. ImmoCRM is made for offices from Antwerp to Amsterdam. The product is available in Dutch and English.",
      },
      {
        q: "Does ImmoCRM cover sales and lettings?",
        a: "Yes. Listings are for sale or for rent, the pipeline works for sales and lettings, and contacts can be buyer, seller, tenant, or landlord.",
      },
      {
        q: "Do I need separate accounts for WhatsApp, email, and Immoweb?",
        a: "Yes. WhatsApp needs a business number with Meta, mail and calendar connect through your own Google or Outlook account, and Immoweb requires a PRO account. ImmoCRM connects them so the work stays in one flow. Your website, collaboration, and signing live inside ImmoCRM itself.",
      },
      {
        q: "What exactly does the AI do?",
        a: "Four things: read the PDFs of a new listing into pre-filled details, draft a reply when a mail arrives, rewrite a text or compose an appointment message when you click for it, and furnish an empty room photo. The AI never sends a message on its own.",
      },
      {
        q: "So does the CRM send messages automatically after all?",
        a: "Only if you set it up, and always with your own templates: an acknowledgement on a website enquiry, a mail or WhatsApp on a stage change or publication, and WhatsApp replies on keywords. No AI text goes out without you reading it.",
      },
      {
        q: "How does signing work?",
        a: "You place signature boxes on a PDF in the CRM. Each signer gets a personal link by mail and signs at home with mouse or finger. The signature lands on the PDF right away, and the PDF is kept on the listing. Before that, parties can draft the document together with version history and approval.",
      },
      {
        q: "Is bookkeeping included?",
        a: "The Finances module tracks revenue from won deals, costs with attachments, and a VAT overview per quarter. It does not replace your accountant: you export everything as CSV and zip and pass it on.",
      },
      {
        q: "Can we see what employees do?",
        a: "Yes. Reports shows key figures per employee and period, with comparison against the previous period and a PDF. The activity log shows who changed what. Who may see it is set per role.",
      },
      {
        q: "Can we change workflows?",
        a: "Much of it you set yourself: deal and prospect stages, extra fields, triggers, checklist, default tasks, templates, and response time. If your office works differently still, we add steps or fields. We agree that in the demo — not as a shop add-on.",
      },
      {
        q: "How do team roles work?",
        a: "Not everyone needs everything. Per module you choose none, read, or write, and for contacts, listings, deals, tasks, WhatsApp, and reports whether someone sees own records or the whole office. Administrators manage integrations and domains.",
      },
      {
        q: "What if we have several branches?",
        a: "That works. Each office has its own separated data, website, and settings. Anyone working at several branches switches with one login. Larger teams can get a custom quote.",
      },
      {
        q: "What is virtual staging?",
        a: "You turn an empty room photo into a furnished preview, described in plain language. A whole room or one piece in a spot, with before-and-after slider and 3D studio. Each office has a weekly AI credit; the result is saved with the listing media.",
      },
      {
        q: "How do you handle privacy and the GDPR?",
        a: "Data is separated per office and shielded per role. Per contact you can export and anonymise. We use the demo form on this site only to answer your request. Details are in the privacy statement, cookie policy, and terms of service.",
      },
      {
        q: "How do we start?",
        a: "Request a demo. We walk the product with you, look at your data, and plan migration, setup, and training. No self-serve checkout.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "One plan, everything included",
    subtitle:
      "€140 per month for the first user, then €40 per extra user. Every module and your own website included. If your office works differently, we prepare a custom price.",
    cta: "Request a demo",
    quoteCta: "Request a quote",
    featuredBadge: "Most chosen",
    priceSuffix: "/ user / month",
    includedTitle: "What you get",
    included: [
      "Unlimited listings, deals, contacts, tasks, and website leads",
      "Every module on the features page",
      "Your own website on your own domain",
      "Publishing to Immoweb, Immoscoop, and Immomaps",
      "WhatsApp and email inbox with AI draft replies",
      "Calendar via Google or Outlook, planner parties vote on",
      "Collaboration and signing through a link",
      "Virtual staging with a weekly AI credit",
      "Finances, reports, and activity log",
      "Team roles, permissions, and several offices",
      "Dutch and English in the product",
      "Onboarding through a demo, no self-serve trial",
    ],
    plans: [
      {
        id: "immocrm",
        name: "ImmoCRM",
        subtitle: "The full office, in one flow",
        price: "€140",
        priceNote: "first user / month",
        extraPrice: "€40",
        extraPriceNote: "per extra user / month",
        featured: true,
        features: [
          "Unlimited listings, deals, contacts, tasks, and website leads",
          "Your own website on your own domain",
          "Publishing to Immoweb, Immoscoop, and Immomaps",
          "WhatsApp and email inbox with AI draft replies",
          "Calendar, viewings, and planner",
          "Collaboration and signing through a link",
          "Virtual staging",
          "Finances and reports",
          "Team roles and permissions",
          "Dutch and English",
          "Onboarding through a demo",
        ],
      },
      {
        id: "custom",
        name: "Custom",
        subtitle: "For offices that work differently",
        price: "Custom",
        priceNote: "Possible discount for a larger team",
        quote: true,
        features: [
          "Everything in ImmoCRM",
          "Workflows on request",
          "Extra fields, stages, or steps",
          "Several branches",
          "Personal onboarding",
          "Scoped in the demo",
        ],
      },
    ],
    note: "Immoweb, Immoscoop, WhatsApp (Meta), and your Google or Outlook account need their own accounts. ImmoCRM connects them. Your website, collaboration, and signing live inside ImmoCRM itself.",
    customNote: "Custom workflows or features can be added on request.",
  },
  contact: {
    title: "Request a demo",
    eyebrow: "Contact",
    body: "We walk through ImmoCRM, look at how your office works, and then plan migration, setup, and training. We reply by email or phone. There is no automated signup.",
    companyLine: "ImmoCRM, based in Belgium.",
    priceHint: "€140 per month for the first user, then €40 per extra user. Everything included, your website too. Or a custom price.",
    priceLink: "See pricing",
    labels: {
      email: "Email",
      phone: "Phone",
      location: "Address",
      vat: "VAT",
    },
    successTitle: "Request sent",
    successBody: "Thank you. We’ll get in touch at the email or phone number you provided.",
    submit: "Send request",
    submitting: "Sending…",
    fields: {
      name: "Name",
      office: "Office",
      email: "Email",
      phone: "Phone (optional)",
      seats: "Number of seats",
      message: "Message (optional)",
    },
  },
  privacy: privacyEn,
  cookies: cookiesEn,
  terms: termsEn,
  form: {
    errors: {
      invalid: "Check the form and try again.",
      required: "Please fill in name, office, email, and seats.",
      email: "Please enter a valid email address.",
      seats: "Number of seats must be between 1 and 99.",
      rateLimit: "Too many requests. Please try again in fifteen minutes.",
      server: "Sending failed. Please try again later.",
    },
  },
};
