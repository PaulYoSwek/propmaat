import { localeCookie } from "./config";
import type { LegalDoc } from "./legal";
import { company } from "@/lib/company";

const { legalName, productName, addressEn, vat, email, phoneDisplay } = company;

export const privacyEn: LegalDoc = {
  title: "Privacy statement",
  updated: "Last updated: 6 September 2026",
  sections: [
    {
      heading: "1. Introduction",
      paragraphs: [
        `${productName} is a product of ${legalName} ("we", "us"). This statement explains how we process personal data when you visit this website or request a demo.`,
        "We process data under the General Data Protection Regulation (GDPR) and the Belgian Act of 30 July 2018.",
      ],
    },
    {
      heading: "2. Controller",
      paragraphs: [
        "The controller is:",
        `${legalName}\n${addressEn}\nVAT ${vat}\nEmail: ${email}\nPhone: ${phoneDisplay}`,
      ],
    },
    {
      heading: "3. Data we collect",
      paragraphs: [
        "The demo form asks for name, office, email address, optional phone number, number of seats, and a message.",
        "We may also see technical data needed to run the site, such as IP address, browser type, and the time of a request. We use those logs for security and to limit form abuse.",
        `We set a functional cookie (${localeCookie}) for language. Details are in the {{cookies}}.`,
      ],
    },
    {
      heading: "4. Purposes and legal bases",
      paragraphs: [
        "We use personal data only for a stated purpose, on a legal basis in article 6 GDPR.",
      ],
      table: {
        headers: ["Purpose", "Legal basis"],
        rows: [
          [
            "Answering a demo request and following it up",
            "Legitimate interest (art. 6.1.f GDPR) and, once we prepare an agreement, pre-contractual steps (art. 6.1.b GDPR)",
          ],
          [
            "Remembering language preference",
            "Legitimate interest: a usable website",
          ],
          [
            "Security, debugging, and limiting spam",
            "Legitimate interest",
          ],
          [
            "Legal retention, for example accounts once you become a customer",
            "Legal obligation (art. 6.1.c GDPR)",
          ],
        ],
      },
    },
    {
      heading: "5. Retention",
      list: [
        "Demo requests: up to 24 months after the last contact, unless you ask us to delete sooner.",
        "Server and security logs: up to 12 months.",
        `Cookie ${localeCookie}: up to 12 months.`,
        "Invoices and accounting records, if you become a customer: 7 years (Belgian retention duty).",
      ],
    },
    {
      heading: "6. Who we share data with",
      paragraphs: [
        "We do not sell your data. We only share it with parties that help us run the site and the demo request, and only for that purpose.",
      ],
      table: {
        headers: ["Party", "Purpose", "Location"],
        rows: [
          ["Vercel Inc.", "Website hosting", "EU / US"],
          ["Resend Inc.", "Sending the demo email", "EU / US"],
        ],
      },
      afterTable: [
        "We sign a processor agreement where needed. Public authorities receive data only when the law requires it.",
      ],
    },
    {
      heading: "7. International transfers",
      paragraphs: [
        "Some vendors may process data outside the EEA. In that case we rely on the EU-US Data Privacy Framework if the vendor is certified, or on the European Commission’s standard contractual clauses.",
      ],
    },
    {
      heading: "8. Security",
      paragraphs: [
        "We take appropriate measures: encrypted connections (HTTPS), limited inbox access, and a honeypot plus rate limit on the form. No system is fully watertight. If a breach occurs we follow article 33 GDPR.",
      ],
    },
    {
      heading: "9. Your rights",
      paragraphs: [
        "You can ask for access, correction, deletion, restriction, portability, or object. Email {{email}}. We may ask you to identify yourself and we reply within 30 days.",
      ],
    },
    {
      heading: "10. Complaints",
      paragraphs: [
        "If you disagree with how we process data, you can complain to the Belgian Data Protection Authority (GBA), Drukpersstraat 35, 1000 Brussels, contact@apd-gba.be, www.gegevensbeschermingsautoriteit.be.",
      ],
    },
    {
      heading: "11. Children",
      paragraphs: [
        `${productName} is for estate agencies, not for people under 16. If we process such data by mistake, email ${email} and we will delete it.`,
      ],
    },
    {
      heading: "12. Changes",
      paragraphs: [
        "We may update this statement. The date at the top shows the latest version. For a material change we add a short note on the website.",
      ],
    },
    {
      heading: "13. Contact",
      paragraphs: [
        `Questions about privacy? Email ${email} or call ${phoneDisplay}.`,
      ],
    },
  ],
};

export const cookiesEn: LegalDoc = {
  title: "Cookie policy",
  updated: "Last updated: 6 September 2026",
  sections: [
    {
      heading: "1. Introduction",
      paragraphs: [
        `This cookie policy belongs to the ${productName} website, a product of ${legalName}. It explains which cookies we set and why.`,
        "Also read the {{privacy}}.",
      ],
    },
    {
      heading: "2. What cookies are",
      paragraphs: [
        "Cookies are small text files a site stores on your device. They can remember a language choice or keep a session working. We treat similar techniques, such as local storage, the same way here.",
      ],
    },
    {
      heading: "3. Cookies we use",
      paragraphs: [
        "We do not currently set marketing, advertising, or third-party analytics cookies. We only use what the site needs to work.",
      ],
      table: {
        headers: ["Name", "Type", "Purpose", "Retention"],
        rows: [
          [
            localeCookie,
            "Functional",
            "Remembers whether you chose Dutch or English",
            "12 months",
          ],
          [
            "Next.js session cookies",
            "Strictly necessary",
            "Keeps the website and form working reliably",
            "Session or short-lived",
          ],
        ],
      },
    },
    {
      heading: "4. Consent",
      paragraphs: [
        "Functional and strictly necessary cookies do not need extra consent. Because we do not set tracking cookies, we do not show a cookie banner. If that changes, we will ask first and update this policy.",
      ],
    },
    {
      heading: "5. Managing cookies",
      paragraphs: [
        "You can delete or block cookies in your browser. Language preference then falls back to the site default. See the help pages of Chrome, Safari, Firefox, or Edge.",
      ],
    },
    {
      heading: "6. Changes",
      paragraphs: [
        "We publish changes here, with a new date at the top.",
      ],
    },
    {
      heading: "7. Contact",
      paragraphs: [
        `Questions about cookies? Email ${email} or call ${phoneDisplay}. ${legalName}, ${addressEn}, VAT ${vat}.`,
      ],
    },
  ],
};

export const termsEn: LegalDoc = {
  title: "Terms of service",
  updated: "Last updated: 6 September 2026",
  sections: [
    {
      heading: "1. Who we are",
      paragraphs: [
        `${productName} is a product of ${legalName}, registered at ${addressEn}, VAT ${vat}. Contact: ${email}, ${phoneDisplay}.`,
      ],
    },
    {
      heading: "2. Scope",
      paragraphs: [
        "These terms apply to this website, demo requests, and, as described below, later use of Propmaat. Deviations apply only if we confirm them in writing.",
        "A paid subscription or custom agreement may have its own contract or quote. That document prevails if it conflicts with this page.",
      ],
    },
    {
      heading: "3. The service",
      paragraphs: [
        "Propmaat is software for estate agencies: listing files, deals, inbox, calendar, and the integrations described on the site. The website is informational. A demo is without obligation and does not create an account.",
        "We may change features, prices, and timing. A signed quote or agreement prevails.",
      ],
    },
    {
      heading: "4. Demos and quotes",
      paragraphs: [
        "You request a demo through the form. We reply by email or phone. There is no self-serve checkout and no automated signup.",
        "Quotes are without obligation until written acceptance, unless the quote states another period.",
      ],
    },
    {
      heading: "5. Prices and payment",
      paragraphs: [
        "Public prices are on the {{prijzen}} page: Basis from €35 per seat per month, Propmaat €50 per seat per month, or a custom price. Prices exclude VAT unless we say otherwise.",
        "Invoicing, payment terms, and cancellation are set in the agreement. If payment is late we may suspend access after a reminder.",
      ],
    },
    {
      heading: "6. Third-party accounts",
      paragraphs: [
        "Immoweb, WhatsApp, email, and similar services need their own accounts and terms. Propmaat connects them; we are not responsible for those services, their outages, or their prices.",
      ],
    },
    {
      heading: "7. Your data in the software",
      paragraphs: [
        "If you become a customer, you remain responsible for the data you put in Propmaat (listings, contacts, messages). You warrant that you may process that data. We then act as processor for that customer data, under the GDPR and a processor agreement.",
        "Data from the demo form is covered by the {{privacy}}.",
      ],
    },
    {
      heading: "8. Intellectual property",
      paragraphs: [
        "The Propmaat name, software, copy, images, and site design stay with Turbo Turtle BV or its licensors. You do not receive ownership, only the licence in the agreement.",
        "You may not reverse engineer, scrape, or resell, except where the law allows it.",
      ],
    },
    {
      heading: "9. Liability",
      paragraphs: [
        "The website and demo are provided as is. We aim for accurate information, but the site may be incomplete.",
        "Our liability for the paid service is, to the extent the law allows, limited to the amount you paid for Propmaat in the twelve months before the claim. We are not liable for indirect loss, lost profit, or data loss, except for intent or gross negligence.",
        "Nothing here limits liability that the law does not allow us to exclude.",
      ],
    },
    {
      heading: "10. Term and termination",
      paragraphs: [
        "A subscription runs for the term in the agreement. We may stop access immediately for a serious breach. After the end we help, within the agreed period, with export of your data.",
      ],
    },
    {
      heading: "11. Governing law",
      paragraphs: [
        "These terms are governed by Belgian law. Disputes go to the courts of the district of Ghent, without prejudice to mandatory consumer law if it ever applied. Propmaat is aimed at professional estate agencies.",
      ],
    },
    {
      heading: "12. Contact",
      paragraphs: [
        `Questions about these terms? Email ${email} or call ${phoneDisplay}.`,
      ],
    },
  ],
};
