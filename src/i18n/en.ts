import { cookiesEn, privacyEn, termsEn } from "./legal-en";
import type { Dictionary } from "./nl";

export const en: Dictionary = {
  meta: {
    home: {
      title: "ImmoCRM",
      description:
        "CRM for estate agents in Belgium and the Netherlands. Listings, deals, WhatsApp, email, and publishing in one workspace. €140 per month for the first user, then €40.",
    },
    functies: {
      title: "ImmoCRM",
      description:
        "Listings, publishing, deals, contacts, inbox, calendar, contracts, and virtual staging. Everything your office needs.",
    },
    prijzen: {
      title: "ImmoCRM",
      description:
        "€140 per month for the first user, then €40 per extra user. Or a custom price. Request a demo to get started.",
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
        "Live in three steps: demo, data migration, training and go-live.",
    },
    faq: {
      title: "ImmoCRM",
      description:
        "Answers on pricing, seats, onboarding, Immoweb, WhatsApp, and privacy.",
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
      "ImmoCRM automates the work around your listings. Checklists, certificates, and follow-up run on their own, and mail, WhatsApp, and your website sit in the same flow.",
    heroWhy:
      "Listings, deals, and conversations live in one place. No retyping, no separate inboxes. Does your office work differently? Then we adjust the steps.",
    heroChannelsLead:
      "Mail, WhatsApp, and your website share one automated follow-up. The conversation with the client continues, without separate inboxes.",
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
    automationTitle: "Automation",
    automationHeading: "One flow that speeds up the office work",
    automationLead:
      "ImmoCRM speeds up the workflows of your office. Mail, WhatsApp, website, calendar, and contracts share one flow, so you retype less and chase less.",
    automationShotHint: "Screenshot coming",
    automationChannels: [
      {
        id: "mail" as const,
        label: "Mail",
        headline: "Mail lands in the dossier, not in a separate inbox.",
        body: "Incoming messages belong to the listing or the deal. You reply with templates, without retyping into another mailbox.",
        shot: "/brand/automation-mail.webp",
        video: "/brand/automation-mail.mp4",
        shotAlt:
          "Mail rules for followed senders and keywords, with inbox and a draft reply",
      },
      {
        id: "whatsapp" as const,
        label: "WhatsApp",
        headline: "WhatsApp in the same flow — AI helps write, never sends.",
        body: "Conversations stay with the person and the file. Templates help; AI may rewrite a message, but never sends on its own.",
        shot: "/brand/automation-whatsapp.webp",
        shotAlt: "WhatsApp inbox with a conversation, flow, and draft message",
      },
      {
        id: "website" as const,
        label: "Website",
        headline: "Website enquiries become a work queue, not inbox noise.",
        body: "A sale, valuation, search, or message lands as an open item. You pick it up by mail or WhatsApp from the same dossier.",
        shot: "/brand/automation-website.webp",
        shotAlt: "Website inbox with open enquiries, types, and replies",
      },
      {
        id: "agenda" as const,
        label: "Calendar",
        headline: "A planner of your own: everyone votes, you book.",
        body: "Buyers, sellers, and the office see the same slots and vote on a time. No back-and-forth mail. The chosen moment lands in your calendar, on the listing.",
        shot: "/brand/automation-agenda.webp",
        shotAlt: "Weekly calendar with viewings, CRM appointments, and a linked calendar",
      },
      {
        id: "signing" as const,
        label: "Contracts",
        headline: "Write together, keep the history, sign when it is right.",
        body: "Several parties work in the same document. Every change stays visible. When everyone is happy, you sign from the file — no more mailing versions around.",
        shot: "/brand/automation-signing.webp",
        shotAlt: "Collaboration file with document, comments, and timeline",
      },
    ],
    whyUsTitle: "Why ImmoCRM",
    whyUsLead:
      "A generic CRM adapts to real estate. ImmoCRM is built for it.",
    whyUsBody:
      "Listing, deal, and conversation live in one place. Checklists and follow-up run with the file, so the office retypes less and chases less.",
    whyUsPoints: [
      {
        icon: "workflow" as const,
        title: "A faster workflow",
        body: "Certificates, publishing, and messages belong to the dossier. You don’t switch between mailbox, chat, and spreadsheet.",
      },
      {
        icon: "followup" as const,
        title: "Follow-up that sticks",
        body: "Every conversation stays with the person and the listing. You see who is waiting, what you promised, and what comes next.",
      },
      {
        icon: "people" as const,
        title: "Clients and prospects",
        body: "Leads grow on their own board first. When it becomes serious, the file and the conversation are already there.",
      },
    ],
    beats: [
      {
        title: "The listing",
        body: "Every property is a dossier: details, media, and a checklist before you go live.",
      },
      {
        title: "The deal",
        body: "A pipeline where every deal has its own dossier.",
      },
      {
        title: "The conversation",
        body: "Website leads, WhatsApp, and email in one place.",
      },
    ],
    landingEyebrow: "Sample from the product",
    landingAddress: "Keizerstraat 18, 2000 Antwerp",
    landingPrice: "€ 649,000",
    landingStatus: "For sale",
    landingBeds: "4 bed",
    customTitle: "Your office, your flow",
    customBody:
      "ImmoCRM covers the path from prospect to signature. If your office works differently, we add workflows or features on request. We scope that in a demo — not a catalog of add-on packs.",
    priceEyebrow: "Price",
    priceTitle: "€140 for the first user",
    priceBody:
      "Then €40 per extra user per month. Every module included, no hidden packs. See what you get.",
    priceCta: "View pricing",
    finalTitle: "See ImmoCRM in your office",
    finalBody:
      "We’ll walk the product with you. No automated trial — a focused demo.",
  },
  features: {
    title: "Everything in one workspace",
    intro:
      "ImmoCRM covers the path from prospect to signature. No add-on modules to buy later — this is the product.",
    catalogEyebrow: "Features",
    catalogTitle: "Everything the office already does, in one CRM",
    catalogLead:
      "Not a module shop. This is the product: from listing file to signature, including the conversations around it.",
    catalogCta: "Read the detail per feature",
    custom: {
      title: "Built to fit",
      body: "ImmoCRM can add workflows or features that fit your office. Not a module shop: we agree scope and timing in a demo.",
      bullets: [
        "Workflows that match how your office already works",
        "Extra fields or steps on request",
        "Scoped in the demo, not sold as an add-on pack",
      ],
    },
    sections: [
      {
        id: "panden",
        title: "Listings",
        body: "Every property is a dossier, not a spreadsheet row. Details, photos, and what’s left to do stay together.",
        bullets: [
          "Listing data in clear sections",
          "Media and documents on the file",
          "A checklist before you publish",
        ],
      },
      {
        id: "publicatie",
        title: "Publishing",
        body: "When the file is ready, you go live. Your own website and Immoweb share the same source.",
        bullets: [
          "Publish to your own site",
          "Push to Immoweb",
          "Photos and status in one flow",
        ],
      },
      {
        id: "deals",
        title: "Deals",
        body: "The pipeline is the daily board. Move a deal to the next stage and open the dossier for tasks, notes, and messages.",
        bullets: [
          "Kanban by stage",
          "A dossier per deal",
          "Tasks and follow-up in the same screen",
        ],
      },
      {
        id: "prospecten",
        title: "Prospects",
        body: "New leads grow on their own board first. When it becomes serious, you turn them into a contact.",
        bullets: [
          "A separate kanban board",
          "Stages your office defines",
          "Promote to a contact file",
        ],
      },
      {
        id: "klanten",
        title: "Contacts",
        body: "People with a search profile. ImmoCRM matches interest to listings, so matching isn’t a side list.",
        bullets: [
          "Contact file with a timeline",
          "A search profile per client",
          "Matching against stock",
        ],
      },
      {
        id: "website",
        title: "Website leads",
        body: "Enquiries from your site land as a work queue. You reply by email or WhatsApp from the same file.",
        bullets: [
          "One inbox for site enquiries",
          "Reply by email or WhatsApp",
          "Accept as a contact when it fits",
        ],
      },
      {
        id: "inbox",
        title: "WhatsApp & email",
        body: "A two-way inbox for the conversations your office already has. Templates help; AI may rewrite a text, but never sends on its own.",
        bullets: [
          "WhatsApp inbox with sessions and templates",
          "A personal email queue",
          "AI only as writing help",
        ],
      },
      {
        id: "agenda",
        title: "Calendar & viewings",
        body: "A planner of your own belongs to the listing. Buyer, seller, and the office vote on a time; the chosen slot lands in your calendar.",
        bullets: [
          "A planner all parties can vote on",
          "Chosen slot in your linked calendar",
          "Viewing series on the listing",
        ],
      },
      {
        id: "beslissingen",
        title: "Decisions",
        body: "Open actions from listings, planning, email, and WhatsApp land together. You see what’s urgent without five tabs.",
        bullets: [
          "One view of open items",
          "Urgency first",
          "Jump to the right dossier",
        ],
      },
      {
        id: "signing",
        title: "Contracts",
        body: "Several parties edit the same document. Every change stays in the history. When everyone is happy, you sign from the file.",
        bullets: [
          "Write together in one document",
          "A history of every change",
          "Sign when everyone agrees",
        ],
      },
      {
        id: "inrichting",
        title: "Virtual staging",
        body: "Turn an empty room photo into a furnished preview. Save the result on the listing.",
        bullets: [
          "Staging on a room photo",
          "Before and after on the file",
          "Save with listing media",
        ],
      },
      {
        id: "team",
        title: "Team",
        body: "Not everyone needs everything. Roles decide who can read or change listings, deals, or the inbox.",
        bullets: [
          "Invite each teammate",
          "Permissions per module",
          "Own records or office-wide",
        ],
      },
    ],
    catalog: [
      {
        id: "dossier",
        icon: "listing" as const,
        title: "Listing file",
        body: "Every property is a dossier with details, status, and what’s left.",
      },
      {
        id: "media",
        icon: "media" as const,
        title: "Media and documents",
        body: "Photos, plans, and certificates stay on the listing.",
      },
      {
        id: "checklist",
        icon: "checklist" as const,
        title: "Publishing checklist",
        body: "What’s left before you go live, in the same file.",
      },
      {
        id: "attesten",
        icon: "checklist" as const,
        title: "Certificates and duties",
        body: "Certificates belong to the property, not a loose folder.",
      },
      {
        id: "site-publish",
        icon: "publish" as const,
        title: "Publish to your website",
        body: "Same source as the office. No retyping into a CMS.",
      },
      {
        id: "immoweb",
        icon: "publish" as const,
        title: "Publish to Immoweb",
        body: "Push the listing when the file is ready.",
      },
      {
        id: "pipeline",
        icon: "pipeline" as const,
        title: "Deals pipeline",
        body: "Kanban by stage. Move a deal to the next step.",
      },
      {
        id: "deal-file",
        icon: "deal" as const,
        title: "Deal file",
        body: "Tasks, notes, and messages belong to the deal.",
      },
      {
        id: "tasks",
        icon: "deal" as const,
        title: "Tasks and follow-up",
        body: "What’s open, in the same screen as the deal.",
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
        title: "Contact files",
        body: "A person with a timeline, not a loose list.",
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
        title: "Matching",
        body: "Match interest to the right listings.",
      },
      {
        id: "web-leads",
        icon: "inbox" as const,
        title: "Website leads",
        body: "Enquiries land as a work queue, not inbox noise.",
      },
      {
        id: "whatsapp",
        icon: "inbox" as const,
        title: "WhatsApp inbox",
        body: "Conversations stay with the person and the file.",
      },
      {
        id: "mail",
        icon: "inbox" as const,
        title: "Email inbox",
        body: "Incoming mail lands on the listing or the deal.",
      },
      {
        id: "templates",
        icon: "inbox" as const,
        title: "Message templates",
        body: "Reply without starting from a blank page.",
      },
      {
        id: "ai",
        icon: "spark" as const,
        title: "AI for wording",
        body: "It may rewrite a text. It never sends.",
      },
      {
        id: "agenda",
        icon: "calendar" as const,
        title: "Calendar sync",
        body: "Appointments sit next to your own calendar.",
      },
      {
        id: "viewings",
        icon: "calendar" as const,
        title: "Viewings",
        body: "Viewings belong to the listing, not a separate calendar.",
      },
      {
        id: "planning",
        icon: "calendar" as const,
        title: "Planner with votes",
        body: "All parties vote on a time. You book the chosen slot.",
      },
      {
        id: "decisions",
        icon: "checklist" as const,
        title: "Decisions",
        body: "Open actions from mail, chat, planning, and listings.",
      },
      {
        id: "signing",
        icon: "sign" as const,
        title: "Contracts",
        body: "Edit together, keep the history, sign when it is right.",
      },
      {
        id: "staging",
        icon: "staging" as const,
        title: "Virtual staging",
        body: "Turn an empty room photo into a furnished preview.",
      },
      {
        id: "roles",
        icon: "team" as const,
        title: "Team roles",
        body: "Permissions per module, own records or office-wide.",
      },
      {
        id: "locales",
        icon: "language" as const,
        title: "Dutch and English",
        body: "The product in two languages, for the whole office.",
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
        body: "We show ImmoCRM and talk through how your office works. No obligation, no automated signup.",
      },
      {
        number: "02",
        title: "Data migration",
        body: "We help import listings, contacts, and deals from Excel or your current software. No data loss.",
      },
      {
        number: "03",
        title: "Training & go-live",
        body: "Personal training in Dutch or English. Your team is operational quickly.",
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
        a: "Estate agencies in Belgium and the Netherlands that want listings, deals, and conversations in one workspace. Not a generic CRM you later bend toward property.",
      },
      {
        q: "How is it different from a generic CRM?",
        a: "ImmoCRM is built around the dossier: certificates, publishing, viewings, and messages belong to the listing or the deal. You don’t have to stitch mail, WhatsApp, and spreadsheets together yourself.",
      },
      {
        q: "How much does it cost?",
        a: "ImmoCRM is €140 per month for the first user, then €40 per extra user. Everything is included. For larger teams or different workflows we prepare a custom quote.",
      },
      {
        q: "What is a seat?",
        a: "One seat is one person with a login. The first user is €140 per month, each extra user €40. You pay per active login, not per listing or per module.",
      },
      {
        q: "Is there a free trial?",
        a: "No. We start with a demo so you see the product in your office. Then we take you live. No automated signup.",
      },
      {
        q: "How long until we are operational?",
        a: "After the demo we plan migration and training. Small offices are often live within a week. Larger files or extra workflows we scope in the demo.",
      },
      {
        q: "Can you migrate our data?",
        a: "Yes. We help import listings, contacts, and deals from Excel or your current software. Scope and timing are part of onboarding.",
      },
      {
        q: "Does it work in Belgium and the Netherlands?",
        a: "Yes. ImmoCRM is made for offices from Antwerp to Amsterdam. The product is available in Dutch and English.",
      },
      {
        q: "Do I need separate accounts for WhatsApp, email, and Immoweb?",
        a: "Yes. Those services need their own accounts. ImmoCRM connects them so the work stays in one flow. You write and sign contracts in ImmoCRM.",
      },
      {
        q: "Does the AI send messages to clients?",
        a: "No. AI may rewrite a text. Sending is always you, from the inbox.",
      },
      {
        q: "Can we change workflows?",
        a: "Yes, on request. If your office works differently, we add steps or fields. We agree that in the demo — not as a shop add-on.",
      },
      {
        q: "How do team roles work?",
        a: "Not everyone needs everything. Roles decide who can read or change listings, deals, or the inbox — own records or office-wide.",
      },
      {
        q: "Do we publish to Immoweb and our own site?",
        a: "Yes. Your website and Immoweb share the same source. Photos and status sit in one publishing flow.",
      },
      {
        q: "What is virtual staging?",
        a: "You turn an empty room photo into a furnished preview. The result is saved with the listing media.",
      },
      {
        q: "Does ImmoCRM cover sales and lettings?",
        a: "The product is built around listing, deal, and conversation — typically for sales offices. Using the same files for lettings is something we discuss in the demo.",
      },
      {
        q: "How do you handle privacy?",
        a: "We use the demo form only to answer your request. We do not sell that data. Details are in the privacy statement, cookie policy, and terms of service.",
      },
      {
        q: "What if we have several branches?",
        a: "That works. We match reach and roles to how the office works. Larger teams can get a custom quote.",
      },
      {
        q: "How do we start?",
        a: "Request a demo. We walk the product with you, look at your data, and plan migration and training. No self-serve checkout.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "One plan, everything included",
    subtitle:
      "€140 per month for the first user, then €40 per extra user. If your office works differently, we prepare a custom price.",
    cta: "Request a demo",
    quoteCta: "Request a quote",
    featuredBadge: "Most chosen",
    priceSuffix: "/ user / month",
    includedTitle: "What you get",
    included: [
      "Unlimited listings, deals, contacts, and website leads",
      "Every module on the features page",
      "WhatsApp and email inbox",
      "Publishing to your website and Immoweb",
      "Calendar, viewings, and a planner parties vote on",
      "Contracts: edit together, history, and signing",
      "Virtual staging",
      "Team roles and permissions",
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
          "Unlimited listings, deals, contacts, and website leads",
          "WhatsApp and email inbox",
          "Publishing to your website and Immoweb",
          "Calendar, viewings, and planner",
          "Contracts: edit, history, and signing",
          "Virtual staging",
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
          "Extra fields or steps",
          "Personal onboarding",
          "Scoped in the demo",
        ],
      },
    ],
    note: "Immoweb, WhatsApp, and email need their own accounts. ImmoCRM connects them.",
    customNote: "Custom workflows or features can be added on request.",
  },
  contact: {
    title: "Request a demo",
    eyebrow: "Contact",
    body: "We walk through ImmoCRM, look at how your office works, and then plan migration and training. We reply by email or phone. There is no automated signup.",
    companyLine: "ImmoCRM, based in Belgium.",
    priceHint: "€140 per month for the first user, then €40 per extra user. Or a custom price.",
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
      seats: "Seats must be between 1 and 99.",
      rateLimit: "Too many requests. Try again in fifteen minutes.",
      server: "Could not send. Please try again later.",
    },
  },
};
