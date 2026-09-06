import { localeCookie } from "./config";
import type { LegalDoc } from "./legal";
import { company } from "@/lib/company";

const { legalName, productName, addressNl, vat, email, phoneDisplay } = company;

export const privacyNl: LegalDoc = {
  title: "Privacyverklaring",
  updated: "Laatst bijgewerkt: 6 september 2026",
  sections: [
    {
      heading: "1. Inleiding",
      paragraphs: [
        `${productName} is een product van ${legalName} ("wij", "ons"). Deze verklaring legt uit hoe wij persoonsgegevens verwerken wanneer u deze website bezoekt of een demo aanvraagt.`,
        "Wij verwerken gegevens volgens de Algemene Verordening Gegevensbescherming (AVG) en de Belgische wet van 30 juli 2018.",
      ],
    },
    {
      heading: "2. Verwerkingsverantwoordelijke",
      paragraphs: [
        "De verwerkingsverantwoordelijke is:",
        `${legalName}\n${addressNl}\nBTW ${vat}\nE-mail: ${email}\nTelefoon: ${phoneDisplay}`,
      ],
    },
    {
      heading: "3. Welke gegevens verzamelen wij",
      paragraphs: [
        "Via het demoformulier vraagt u zelf: naam, kantoor, e-mailadres, optioneel telefoonnummer, aantal seats en een bericht.",
        "Automatisch kunnen wij technische gegevens zien die nodig zijn om de site te laten werken, zoals IP-adres, browsertype en tijdstip van een aanvraag. Die logs gebruiken we voor beveiliging en om misbruik van het formulier te beperken.",
        `Voor de taalvoorkeur zetten we een functionele cookie (${localeCookie}). Meer daarover staat in de {{cookies}}.`,
      ],
    },
    {
      heading: "4. Doeleinden en rechtsgronden",
      paragraphs: [
        "Wij gebruiken persoonsgegevens alleen voor een duidelijk doel, op een rechtsgrond uit artikel 6 AVG.",
      ],
      table: {
        headers: ["Doel", "Rechtsgrond"],
        rows: [
          [
            "Beantwoorden van een demo-aanvraag en de opvolging daarvan",
            "Gerechtvaardigd belang (art. 6.1.f AVG) en, zodra we een overeenkomst voorbereiden, uitvoering van precontractuele stappen (art. 6.1.b AVG)",
          ],
          [
            "Taalvoorkeur onthouden",
            "Gerechtvaardigd belang: een werkbare website",
          ],
          [
            "Beveiliging, foutopsporing en het beperken van spam",
            "Gerechtvaardigd belang",
          ],
          [
            "Wettelijke bewaarplichten, bijvoorbeeld in de boekhouding als u klant wordt",
            "Wettelijke verplichting (art. 6.1.c AVG)",
          ],
        ],
      },
    },
    {
      heading: "5. Bewaartermijnen",
      list: [
        "Demo-aanvragen: tot 24 maanden na het laatste contact, tenzij u eerder om wissing vraagt.",
        "Server- en beveiligingslogs: tot 12 maanden.",
        `Cookie ${localeCookie}: maximaal 12 maanden.`,
        "Facturen en boekhoudstukken, als u klant wordt: 7 jaar (Belgische bewaarplicht).",
      ],
    },
    {
      heading: "6. Met wie delen wij gegevens",
      paragraphs: [
        "Wij verkopen uw gegevens niet. We delen ze alleen met partijen die ons helpen de site en de demo-aanvraag te laten werken, en alleen voor dat doel.",
      ],
      table: {
        headers: ["Partij", "Doel", "Locatie"],
        rows: [
          ["Vercel Inc.", "Hosting van de website", "EU / VS"],
          ["Resend Inc.", "Verzenden van de demo-e-mail", "EU / VS"],
        ],
      },
      afterTable: [
        "Met die partijen sluiten wij waar nodig een verwerkersovereenkomst. Overheden krijgen gegevens alleen als de wet dat verplicht.",
      ],
    },
    {
      heading: "7. Internationale doorgifte",
      paragraphs: [
        "Sommige leveranciers kunnen gegevens buiten de EER verwerken. In dat geval steunen wij op het EU-VS Data Privacy Framework als de partij daarbij is aangesloten, of op de standaardcontractbepalingen van de Europese Commissie.",
      ],
    },
    {
      heading: "8. Beveiliging",
      paragraphs: [
        "Wij nemen passende technische en organisatorische maatregelen: versleutelde verbindingen (HTTPS), beperkte toegang tot inboxen, en een honeypot plus limiet op het formulier om spam te remmen. Geen enkel systeem is volledig waterdicht. Bij een datalek handelen wij volgens artikel 33 AVG.",
      ],
    },
    {
      heading: "9. Uw rechten",
      paragraphs: [
        "U kunt ons vragen om inzage, verbetering, wissing, beperking, overdracht of bezwaar. Stuur daarvoor een e-mail naar {{email}}. Wij mogen om een identificatie vragen en antwoorden binnen 30 dagen.",
      ],
    },
    {
      heading: "10. Klachten",
      paragraphs: [
        "Bent u het niet eens met hoe wij gegevens verwerken, dan kunt u een klacht indienen bij de Gegevensbeschermingsautoriteit (GBA), Drukpersstraat 35, 1000 Brussel, contact@apd-gba.be, www.gegevensbeschermingsautoriteit.be.",
      ],
    },
    {
      heading: "11. Minderjarigen",
      paragraphs: [
        `${productName} is bedoeld voor makelaarskantoren, niet voor personen jonger dan 16 jaar. Verwerken wij per ongeluk toch zulke gegevens, mail ${email} en wij verwijderen ze.`,
      ],
    },
    {
      heading: "12. Wijzigingen",
      paragraphs: [
        "Wij kunnen deze verklaring aanpassen. De datum bovenaan toont de laatste versie. Bij een ingrijpende wijziging zetten we een korte toelichting op de website.",
      ],
    },
    {
      heading: "13. Contact",
      paragraphs: [
        `Vragen over privacy? Mail ${email} of bel ${phoneDisplay}.`,
      ],
    },
  ],
};

export const cookiesNl: LegalDoc = {
  title: "Cookieverklaring",
  updated: "Laatst bijgewerkt: 6 september 2026",
  sections: [
    {
      heading: "1. Inleiding",
      paragraphs: [
        `Deze cookieverklaring hoort bij de website van ${productName}, een product van ${legalName}. Ze legt uit welke cookies wij plaatsen en waarom.`,
        "Lees ook de {{privacy}}.",
      ],
    },
    {
      heading: "2. Wat zijn cookies",
      paragraphs: [
        "Cookies zijn kleine tekstbestanden die een site op uw apparaat zet. Ze onthouden bijvoorbeeld een taalvoorkeur of houden een beveiligde sessie in stand. Vergelijkbare technieken, zoals local storage, behandelen wij hier hetzelfde.",
      ],
    },
    {
      heading: "3. Welke cookies wij gebruiken",
      paragraphs: [
        "Op dit moment plaatsen wij geen marketing- of advertentiecookies en geen analytische cookies van derden. Wij gebruiken alleen wat nodig is om de site te laten werken.",
      ],
      table: {
        headers: ["Naam", "Type", "Doel", "Bewaartermijn"],
        rows: [
          [
            localeCookie,
            "Functioneel",
            "Onthoudt of u Nederlands of Engels koos",
            "12 maanden",
          ],
          [
            "Next.js-sessiecookies",
            "Strikt noodzakelijk",
            "Laat de website en het formulier betrouwbaar werken",
            "Sessie of kortstondig",
          ],
        ],
      },
    },
    {
      heading: "4. Toestemming",
      paragraphs: [
        "Functionele en strikt noodzakelijke cookies mogen zonder extra toestemming. Omdat wij nu geen trackingcookies zetten, tonen wij geen cookiebanner. Als dat later verandert, vragen wij eerst toestemming en werken wij deze verklaring bij.",
      ],
    },
    {
      heading: "5. Cookies beheren",
      paragraphs: [
        "U kunt cookies wissen of blokkeren in uw browser. De taalvoorkeur valt dan terug naar de standaard van de site. Hoe u dat doet, staat in de hulp van Chrome, Safari, Firefox of Edge.",
      ],
    },
    {
      heading: "6. Wijzigingen",
      paragraphs: [
        "Wijzigingen aan deze verklaring zetten wij hier online, met een nieuwe datum bovenaan.",
      ],
    },
    {
      heading: "7. Contact",
      paragraphs: [
        `Vragen over cookies? Mail ${email} of bel ${phoneDisplay}. ${legalName}, ${addressNl}, BTW ${vat}.`,
      ],
    },
  ],
};

export const termsNl: LegalDoc = {
  title: "Algemene voorwaarden",
  updated: "Laatst bijgewerkt: 6 september 2026",
  sections: [
    {
      heading: "1. Wie wij zijn",
      paragraphs: [
        `${productName} is een product van ${legalName}, met zetel te ${addressNl}, BTW ${vat}. Contact: ${email}, ${phoneDisplay}.`,
      ],
    },
    {
      heading: "2. Toepasselijkheid",
      paragraphs: [
        "Deze voorwaarden gelden voor het gebruik van deze website, het aanvragen van een demo en, voor zover hieronder beschreven, het latere gebruik van Propmaat. Afwijkingen gelden alleen als wij die schriftelijk bevestigen.",
        "Bij een betaald abonnement of maatwerkafspraak kunnen wij een aparte overeenkomst of offerte laten tekenen. Die gaat boven deze pagina als ze elkaar tegenspreken.",
      ],
    },
    {
      heading: "3. De dienst",
      paragraphs: [
        "Propmaat is software voor makelaarskantoren: panddossier, deals, inbox, agenda en de koppelingen die wij op de site beschrijven. De website is informatief. Een demo is vrijblijvend en geeft geen automatisch recht op een account.",
        "Functies, prijzen en planning kunnen wij aanpassen. Wat in een getekende offerte of overeenkomst staat, prevaleert.",
      ],
    },
    {
      heading: "4. Demo en offertes",
      paragraphs: [
        "Via het formulier vraagt u een demo aan. Wij antwoorden per e-mail of telefoon. Er is geen self-serve checkout en geen automatische inschrijving.",
        "Offertes zijn vrijblijvend tot schriftelijke aanvaarding, tenzij de offerte een andere termijn noemt.",
      ],
    },
    {
      heading: "5. Prijzen en betaling",
      paragraphs: [
        "De publieke prijzen staan op {{prijzen}}: Basis vanaf €35 per seat per maand, Propmaat €50 per seat per maand, of een prijs op maat. Prijzen zijn exclusief btw, tenzij wij anders vermelden.",
        "Facturatie, betaaltermijn en opzegging spreken wij af in de overeenkomst. Bij laattijdige betaling mogen wij de toegang opschorten na een herinnering.",
      ],
    },
    {
      heading: "6. Accounts van derden",
      paragraphs: [
        "Immoweb, WhatsApp, mail en vergelijkbare diensten vragen hun eigen accounts en voorwaarden. Propmaat koppelt ze; wij zijn niet verantwoordelijk voor die diensten zelf, hun storingen of hun prijzen.",
      ],
    },
    {
      heading: "7. Uw gegevens in de software",
      paragraphs: [
        "Als u klant wordt, blijft u verantwoordelijk voor de data die u in Propmaat zet (panden, klanten, berichten). U garandeert dat u die data mag verwerken. Wij treden dan op als verwerker voor die klantdata, volgens de AVG en een verwerkersafspraak.",
        "Gegevens uit het demoformulier vallen onder de {{privacy}}.",
      ],
    },
    {
      heading: "8. Intellectuele eigendom",
      paragraphs: [
        "De merknaam Propmaat, de software, teksten, beelden en het ontwerp van deze site blijven van Turbo Turtle BV of haar licentiegevers. U krijgt geen eigendom, alleen het gebruiksrecht dat in de overeenkomst staat.",
        "U mag geen reverse engineering, scraping of wederverkoop doen, tenzij de wet dat toestaat.",
      ],
    },
    {
      heading: "9. Aansprakelijkheid",
      paragraphs: [
        "De website en de demo zijn 'as is'. Wij streven naar juiste informatie, maar de site kan onvolledig zijn.",
        "Onze aansprakelijkheid voor de betaalde dienst is, voor zover de wet dat toelaat, beperkt tot het bedrag dat u in de twaalf maanden daarvoor voor Propmaat betaalde. Wij zijn niet aansprakelijk voor indirecte schade, gederfde winst of dataverlies, behalve bij opzet of zware fout.",
        "Niets in deze voorwaarden beperkt aansprakelijkheid die de wet niet toelaat uit te sluiten.",
      ],
    },
    {
      heading: "10. Duur en beëindiging",
      paragraphs: [
        "Een abonnement loopt voor de termijn in de overeenkomst. Bij een ernstige schending mogen wij de toegang onmiddellijk stopzetten. Na afloop helpen wij, binnen de afgesproken termijn, met export van uw data.",
      ],
    },
    {
      heading: "11. Toepasselijk recht",
      paragraphs: [
        "Op deze voorwaarden geldt Belgisch recht. Geschillen horen bij de rechtbanken van het arrondissement Gent, onverminderd dwingend consumentenrecht als dat van toepassing zou zijn. Propmaat richt zich op professionele makelaarskantoren.",
      ],
    },
    {
      heading: "12. Contact",
      paragraphs: [
        `Vragen over deze voorwaarden? Mail ${email} of bel ${phoneDisplay}.`,
      ],
    },
  ],
};
