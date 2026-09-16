import { cookiesNl, privacyNl, termsNl } from "./legal-nl";

export const nl = {
  meta: {
    home: {
      title: "ImmoCRM",
      description:
        "CRM voor makelaars in België en Nederland. Panden, deals, WhatsApp, mail en publicatie in één werkruimte. €140 per maand voor de eerste gebruiker, daarna €40.",
    },
    functies: {
      title: "ImmoCRM",
      description:
        "Panden, publicatie, deals, klanten, inbox, agenda, contracten en virtuele inrichting. Alles wat je kantoor nodig heeft.",
    },
    prijzen: {
      title: "ImmoCRM",
      description:
        "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Of een prijs op maat. Vraag een demo om te starten.",
    },
    contact: {
      title: "ImmoCRM",
      description:
        "Plan een demo van ImmoCRM. Mail info@turboturtle.nl of bel +31 6 3496 5518. Geen automatische inschrijving.",
    },
    privacy: {
      title: "ImmoCRM",
      description:
        "Hoe ImmoCRM persoonsgegevens verwerkt, conform de AVG.",
    },
    cookies: {
      title: "ImmoCRM",
      description:
        "Welke cookies ImmoCRM zet en hoe je ze beheert.",
    },
    voorwaarden: {
      title: "ImmoCRM",
      description:
        "Voorwaarden voor de website, demo en het gebruik van ImmoCRM.",
    },
    stappen: {
      title: "ImmoCRM",
      description:
        "In drie stappen operationeel: demo, datamigratie, training en go-live.",
    },
    faq: {
      title: "ImmoCRM",
      description:
        "Antwoorden over prijs, seats, onboarding, Immoweb, WhatsApp en privacy.",
    },
  },
  brand: {
    name: "ImmoCRM",
  },
  nav: {
    features: "Functies",
    pricing: "Prijzen",
    steps: "Aan de slag",
    faq: "FAQ",
    contact: "Contact",
    demo: "Vraag een demo",
    language: "Taal",
    menu: "Menu",
    close: "Sluit menu",
  },
  footer: {
    tagline: "Eén flow voor pand, deal en gesprek.",
    privacy: "Privacyverklaring",
    cookies: "Cookieverklaring",
    terms: "Algemene voorwaarden",
    legal: "Juridisch",
    copyright: "© 2026 ImmoCRM",
    product: "Product",
    company: "Kantoor",
    region: "Voor makelaars in België en Nederland",
    cta: "Vraag een demo",
  },
  legal: {
    back: "← Terug naar home",
  },
  home: {
    heroTitle: "Het CRM dat het kantoorwerk overneemt",
    heroEyebrow: "Voor makelaars in België en Nederland",
    heroSub:
      "ImmoCRM automatiseert het werk rondom je panden. Checklists, attesten en opvolging lopen vanzelf, mail, WhatsApp en je website zitten in dezelfde flow.",
    heroWhy:
      "Pand, deals en gesprekken staan op één plek. Geen overtypen, geen losse inboxen. Werkt je kantoor anders? Dan passen we de stappen aan.",
    heroChannelsLead:
      "Mail, WhatsApp en je website zitten in één automatische opvolging. Het gesprek met de klant blijft lopen, zonder losse inboxen.",
    heroChannels: [
      { id: "mail" as const, label: "Mail" },
      { id: "whatsapp" as const, label: "WhatsApp" },
      { id: "website" as const, label: "Website" },
      { id: "agenda" as const, label: "Agenda" },
      { id: "signing" as const, label: "Contracten" },
    ],
    ctaDemo: "Vraag een demo",
    scrollHint: "Scroll",
    productPreviewLabel: "ImmoCRM-productvideo met dossier, workflow en checklist",
    automationTitle: "Automation",
    automationHeading: "Eén flow die je kantoorwerk versnelt",
    automationLead:
      "ImmoCRM versnelt de workflows van je kantoor. Mail, WhatsApp, website, agenda en contracten lopen in één flow, zodat je minder overtypt en minder najaagt.",
    automationShotHint: "Screenshot volgt",
    automationChannels: [
      {
        id: "mail" as const,
        label: "Mail",
        headline: "Mail landt in het dossier, niet in een losse inbox.",
        body: "Inkomende berichten horen bij het pand of de deal. Je antwoordt met sjablonen, zonder overtypen naar een andere mailbox.",
        shot: "/brand/automation-mail.webp",
        video: "/brand/automation-mail.mp4",
        shotAlt:
          "Mailregels voor gevolgde afzenders en trefwoorden, met inbox en conceptantwoord",
      },
      {
        id: "whatsapp" as const,
        label: "WhatsApp",
        headline: "WhatsApp in dezelfde flow — AI schrijft mee, stuurt nooit.",
        body: "Gesprekken blijven bij de persoon en het dossier. Sjablonen helpen; AI mag een tekst herschrijven, maar verstuurt niets zelf.",
        shot: "/brand/automation-whatsapp.webp",
        shotAlt: "WhatsApp-inbox met gesprek, flow en conceptbericht",
      },
      {
        id: "website" as const,
        label: "Website",
        headline: "Website-aanvragen worden werkvoorraad, geen mailbox-chaos.",
        body: "Verkoop, schatting, zoekopdracht of bericht: het komt binnen als een open item. Je pakt het op via mail of WhatsApp, vanuit hetzelfde dossier.",
        shot: "/brand/automation-website.webp",
        shotAlt: "Website-inbox met openstaande aanvragen, types en antwoorden",
      },
      {
        id: "agenda" as const,
        label: "Agenda",
        headline: "Een eigen planner: iedereen stemt, jij plant.",
        body: "Koper, verkoper en het kantoor zien dezelfde voorstellen en stemmen op een tijdstip. Geen heen-en-weer mailen. Het gekozen moment landt in je agenda, bij het pand.",
        shot: "/brand/automation-agenda.webp",
        shotAlt: "Weekagenda met bezichtigingen, CRM-afspraken en gekoppelde kalender",
      },
      {
        id: "signing" as const,
        label: "Contracten",
        headline: "Samen schrijven, geschiedenis bewaren, tekenen als het klopt.",
        body: "Meerdere partijen werken in hetzelfde document. Elke wijziging blijft zichtbaar. Als iedereen tevreden is, teken je vanuit het dossier — geen versies meer heen-en-weer mailen.",
        shot: "/brand/automation-signing.webp",
        shotAlt: "Samenwerkingsdossier met document, reacties en tijdlijn",
      },
    ],
    whyUsTitle: "Waarom ImmoCRM",
    whyUsLead:
      "Een algemeen CRM past zich aan vastgoed aan. ImmoCRM is ervoor gebouwd.",
    whyUsBody:
      "Pand, deal en gesprek staan op één plek. Checklists en opvolging lopen mee, zodat je kantoor minder overtypt en minder najaagt.",
    whyUsPoints: [
      {
        icon: "workflow" as const,
        title: "Snellere workflow",
        body: "Attesten, publicatie en berichten horen bij het dossier. Je hoeft niet te schakelen tussen mailbox, chat en spreadsheet.",
      },
      {
        icon: "followup" as const,
        title: "Opvolging die blijft hangen",
        body: "Elk gesprek blijft bij de persoon en het pand. Je ziet wie wacht, wat je beloofde, en wat de volgende stap is.",
      },
      {
        icon: "people" as const,
        title: "Klanten én prospecten",
        body: "Leads groeien eerst op hun eigen bord. Wordt het ernst, dan is de fiche en het gesprek al mee.",
      },
    ],
    beats: [
      {
        title: "Het pand",
        body: "Elk object is een dossier: gegevens, media en een checklist vóór je live gaat.",
      },
      {
        title: "De deal",
        body: "Een pipeline waarin elke deal een eigen dossier heeft.",
      },
      {
        title: "Het gesprek",
        body: "Website-leads, WhatsApp en mail op één plek.",
      },
    ],
    landingEyebrow: "Voorbeeld in het product",
    landingAddress: "Keizerstraat 18, 2000 Antwerpen",
    landingPrice: "€ 649.000",
    landingStatus: "Te koop",
    landingBeds: "4 slpk",
    customTitle: "Jouw kantoor, jouw flow",
    customBody:
      "ImmoCRM dekt het pad van prospect tot ondertekening. Werkt je kantoor anders, dan voegen we workflows of functies toe op aanvraag. Dat spreken we af in een demo — geen catalogus van extra pakketten.",
    priceEyebrow: "Prijs",
    priceTitle: "€140 voor de eerste gebruiker",
    priceBody:
      "Daarna €40 per extra gebruiker per maand. Alle modules erin, geen verborgen pakketten. Bekijk wat je krijgt.",
    priceCta: "Naar prijzen",
    finalTitle: "Zie ImmoCRM in je kantoor",
    finalBody:
      "We lopen het product met je door. Geen automatische trial, wel een gerichte demo.",
  },
  features: {
    title: "Alles in één werkruimte",
    intro:
      "ImmoCRM dekt het pad van prospect tot ondertekening. Geen extra modules om later te kopen — dit is het product.",
    catalogEyebrow: "Functies",
    catalogTitle: "Alles wat het kantoor al doet, in één CRM",
    catalogLead:
      "Geen modulewinkel. Dit is het product: van panddossier tot ondertekening, inclusief de gesprekken eromheen.",
    catalogCta: "Lees de uitleg per functie",
    custom: {
      title: "Op maat",
      body: "ImmoCRM kan workflows of functies toevoegen die bij jouw kantoor passen. Geen modulewinkel: we spreken scope en timing af in een demo.",
      bullets: [
        "Workflows die aansluiten op hoe je kantoor al werkt",
        "Extra velden of stappen op aanvraag",
        "Afgestemd in de demo, geen extra pakket om te kopen",
      ],
    },
    sections: [
      {
        id: "panden",
        title: "Panden",
        body: "Elk object is een dossier, geen rij in een spreadsheet. Gegevens, foto’s en wat nog moet gebeuren blijven bij elkaar.",
        bullets: [
          "Pandgegevens in overzichtelijke blokken",
          "Media en documenten op het dossier",
          "Checklist vóór je publiceert",
        ],
      },
      {
        id: "publicatie",
        title: "Publicatie",
        body: "Als het dossier klaar is, zet je het live. Je eigen website en Immoweb delen dezelfde bron.",
        bullets: [
          "Publiceren naar je eigen site",
          "Doorzetten naar Immoweb",
          "Foto’s en status in één publicatiestroom",
        ],
      },
      {
        id: "deals",
        title: "Deals",
        body: "De pipeline is het dagelijkse bord. Sleep een deal naar de volgende fase en open het dossier voor taken, notities en berichten.",
        bullets: [
          "Kanban per fase",
          "Dossier per deal",
          "Taken en opvolging in hetzelfde scherm",
        ],
      },
      {
        id: "prospecten",
        title: "Prospecten",
        body: "Nieuwe leads groeien eerst op een eigen bord. Pas als het ernst wordt, maak je er een klant van.",
        bullets: [
          "Apart kanban-bord",
          "Fases die je kantoor zelf zet",
          "Doorgroeien naar een klantfiche",
        ],
      },
      {
        id: "klanten",
        title: "Klanten",
        body: "Contacten met een zoekprofiel. ImmoCRM koppelt interesse aan passende panden, zodat matching geen losse lijst is.",
        bullets: [
          "Contactfiche met tijdlijn",
          "Zoekprofiel per klant",
          "Matching met het aanbod",
        ],
      },
      {
        id: "website",
        title: "Website-leads",
        body: "Aanvragen van je site komen binnen als werkvoorraad. Je antwoordt via mail of WhatsApp, vanuit hetzelfde dossier.",
        bullets: [
          "Eén inbox voor site-aanvragen",
          "Antwoord via e-mail of WhatsApp",
          "Accepteren als klant wanneer het past",
        ],
      },
      {
        id: "inbox",
        title: "WhatsApp & mail",
        body: "Twee-weg inbox voor de gesprekken die je kantoor al voert. Sjablonen helpen; AI mag een tekst herschrijven, maar stuurt niets zelf.",
        bullets: [
          "WhatsApp-inbox met sessies en sjablonen",
          "Persoonlijke mailwachtrij",
          "AI alleen als hulp bij formuleren",
        ],
      },
      {
        id: "agenda",
        title: "Agenda & bezichtigingen",
        body: "Een eigen planner hoort bij het pand. Koper, verkoper en het kantoor stemmen op een tijdstip; het gekozen moment landt in je agenda.",
        bullets: [
          "Planner waarop alle partijen stemmen",
          "Gekozen slot in je gekoppelde agenda",
          "Reeksen bezichtigingen bij het pand",
        ],
      },
      {
        id: "beslissingen",
        title: "Beslissingen",
        body: "Openstaande acties uit panden, planning, mail en WhatsApp komen samen. Je ziet wat urgent is zonder vijf tabbladen.",
        bullets: [
          "Eén overzicht van openstaande items",
          "Urgentie vooraan",
          "Doorklikken naar het juiste dossier",
        ],
      },
      {
        id: "signing",
        title: "Contracten",
        body: "Meerdere partijen bewerken hetzelfde document. Elke wijziging blijft in de geschiedenis. Als iedereen tevreden is, teken je vanuit het dossier.",
        bullets: [
          "Samen schrijven in één document",
          "Geschiedenis van elke wijziging",
          "Tekenen als iedereen akkoord is",
        ],
      },
      {
        id: "inrichting",
        title: "Virtuele inrichting",
        body: "Zet een lege kamerfoto om in een ingerichte preview. Het resultaat bewaar je bij het pand.",
        bullets: [
          "Staging op een kamerfoto",
          "Voor-en-na in het dossier",
          "Opslaan bij de pandmedia",
        ],
      },
      {
        id: "team",
        title: "Team",
        body: "Niet iedereen hoeft alles te zien. Rollen bepalen wie panden, deals of inbox mag lezen en wijzigen.",
        bullets: [
          "Uitnodigen per medewerker",
          "Rechten per module",
          "Eigen of kantoorbreed bereik",
        ],
      },
    ],
    catalog: [
      {
        id: "dossier",
        icon: "listing" as const,
        title: "Panddossier",
        body: "Elk object is een dossier met gegevens, status en wat nog moet.",
      },
      {
        id: "media",
        icon: "media" as const,
        title: "Media en documenten",
        body: "Foto’s, plannen en attesten blijven bij het pand.",
      },
      {
        id: "checklist",
        icon: "checklist" as const,
        title: "Publicatiechecklist",
        body: "Wat nog moet vóór je live gaat, in hetzelfde dossier.",
      },
      {
        id: "attesten",
        icon: "checklist" as const,
        title: "Attesten en verplichtingen",
        body: "Certificaten horen bij het object, niet in een losse map.",
      },
      {
        id: "site-publish",
        icon: "publish" as const,
        title: "Publicatie naar je website",
        body: "Zelfde bron als je kantoor. Geen overtypen naar een CMS.",
      },
      {
        id: "immoweb",
        icon: "publish" as const,
        title: "Publicatie naar Immoweb",
        body: "Doorzetten wanneer het dossier klaar is.",
      },
      {
        id: "pipeline",
        icon: "pipeline" as const,
        title: "Deals-pipeline",
        body: "Kanban per fase. Sleep een deal naar de volgende stap.",
      },
      {
        id: "deal-file",
        icon: "deal" as const,
        title: "Deal-dossier",
        body: "Taken, notities en berichten horen bij de deal.",
      },
      {
        id: "tasks",
        icon: "deal" as const,
        title: "Taken en opvolging",
        body: "Wat openstaat, in hetzelfde scherm als de deal.",
      },
      {
        id: "prospects",
        icon: "people" as const,
        title: "Prospectenbord",
        body: "Nieuwe leads groeien eerst op een eigen bord.",
      },
      {
        id: "contacts",
        icon: "people" as const,
        title: "Klantenfiches",
        body: "Contact met een tijdlijn, geen losse lijst.",
      },
      {
        id: "search-profile",
        icon: "search" as const,
        title: "Zoekprofiel",
        body: "Wat iemand zoekt, staat bij de persoon.",
      },
      {
        id: "matching",
        icon: "search" as const,
        title: "Matching",
        body: "Interesse koppelen aan passende panden.",
      },
      {
        id: "web-leads",
        icon: "inbox" as const,
        title: "Website-leads",
        body: "Aanvragen komen binnen als werkvoorraad, niet als mailbox-chaos.",
      },
      {
        id: "whatsapp",
        icon: "inbox" as const,
        title: "WhatsApp-inbox",
        body: "Gesprekken blijven bij de persoon en het dossier.",
      },
      {
        id: "mail",
        icon: "inbox" as const,
        title: "Mail-inbox",
        body: "Inkomende mail landt bij het pand of de deal.",
      },
      {
        id: "templates",
        icon: "inbox" as const,
        title: "Berichtensjablonen",
        body: "Antwoorden zonder elke keer opnieuw te beginnen.",
      },
      {
        id: "ai",
        icon: "spark" as const,
        title: "AI bij formuleren",
        body: "Herschrijft een tekst. Stuurt nooit zelf.",
      },
      {
        id: "agenda",
        icon: "calendar" as const,
        title: "Agenda-koppeling",
        body: "Afspraken naast je eigen kalender.",
      },
      {
        id: "viewings",
        icon: "calendar" as const,
        title: "Bezichtigingen",
        body: "Kijkmomenten horen bij het pand, niet bij een losse kalender.",
      },
      {
        id: "planning",
        icon: "calendar" as const,
        title: "Planner met stemmen",
        body: "Alle partijen stemmen op een tijdstip. Jij plant het gekozen moment.",
      },
      {
        id: "decisions",
        icon: "checklist" as const,
        title: "Beslissingen",
        body: "Openstaande acties uit mail, chat, planning en panden.",
      },
      {
        id: "signing",
        icon: "sign" as const,
        title: "Contracten",
        body: "Samen bewerken, geschiedenis bewaren, tekenen als het klopt.",
      },
      {
        id: "staging",
        icon: "staging" as const,
        title: "Virtuele inrichting",
        body: "Een lege kamerfoto omzetten in een ingerichte preview.",
      },
      {
        id: "roles",
        icon: "team" as const,
        title: "Teamrollen",
        body: "Rechten per module, eigen bereik of kantoorbreed.",
      },
      {
        id: "locales",
        icon: "language" as const,
        title: "Nederlands en Engels",
        body: "Het product in twee talen, voor het hele kantoor.",
      },
    ],
  },
  steps: {
    eyebrow: "Hoe werkt het?",
    title: "In 3 stappen operationeel",
    lead: "Geen self-serve trial. We zetten het kantoor samen live.",
    items: [
      {
        number: "01",
        title: "Gratis demo",
        body: "We tonen ImmoCRM en bespreken hoe jouw kantoor werkt. Vrijblijvend, geen automatische inschrijving.",
      },
      {
        number: "02",
        title: "Data migratie",
        body: "We helpen panden, klanten en deals importeren vanuit Excel of je huidige software. Geen dataverlies.",
      },
      {
        number: "03",
        title: "Training & go-live",
        body: "Persoonlijke training in het Nederlands of Engels. Je team is snel operationeel.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen",
    lead: "Kort en concreet. Staat je vraag er niet bij, stel hem in de demo.",
    items: [
      {
        q: "Voor wie is ImmoCRM?",
        a: "Voor makelaarskantoren in België en Nederland die pand, deal en gesprek in één werkruimte willen. Geen algemeen CRM dat je later tot vastgoed ombouwt.",
      },
      {
        q: "Wat is het verschil met een algemeen CRM?",
        a: "ImmoCRM is gebouwd rond het dossier: attesten, publicatie, bezichtigingen en berichten horen bij het pand of de deal. Je hoeft mail, WhatsApp en spreadsheets niet zelf aan elkaar te knopen.",
      },
      {
        q: "Hoeveel kost het?",
        a: "ImmoCRM is €140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Alles zit erin. Voor grotere teams of andere workflows maken we een offerte op maat.",
      },
      {
        q: "Wat is een seat?",
        a: "Eén seat is één persoon met een login. De eerste gebruiker is €140 per maand, elke extra gebruiker €40. Je betaalt per actieve login, niet per pand of per module.",
      },
      {
        q: "Is er een gratis trial?",
        a: "Nee. We starten met een demo, zodat je het product in jouw kantoor ziet. Daarna zetten we jullie live. Geen automatische inschrijving.",
      },
      {
        q: "Hoe lang duurt het voor we operationeel zijn?",
        a: "Na de demo plannen we migratie en training. Kleine kantoren zijn vaak binnen een week live. Grotere bestanden of extra workflows spreken we af in de demo.",
      },
      {
        q: "Kunnen jullie onze data overzetten?",
        a: "Ja. We helpen panden, klanten en deals importeren vanuit Excel of je huidige software. Scope en timing horen bij de onboarding.",
      },
      {
        q: "Werkt het in België én Nederland?",
        a: "Ja. ImmoCRM is gemaakt voor kantoren van Antwerpen tot Amsterdam. Het product is beschikbaar in het Nederlands en Engels.",
      },
      {
        q: "Heb ik aparte accounts nodig voor WhatsApp, mail en Immoweb?",
        a: "Ja. Die diensten vragen hun eigen accounts. ImmoCRM koppelt ze, zodat het werk in één flow blijft. Contracten schrijf en teken je in ImmoCRM.",
      },
      {
        q: "Stuurt de AI zelf berichten naar klanten?",
        a: "Nee. AI mag een tekst herschrijven. Versturen doe je zelf, vanuit de inbox.",
      },
      {
        q: "Kunnen we workflows aanpassen?",
        a: "Ja, op aanvraag. Werkt je kantoor anders, dan voegen we stappen of velden toe. Dat spreken we af in de demo, geen extra pakket uit een shop.",
      },
      {
        q: "Hoe werken teamrollen?",
        a: "Niet iedereen hoeft alles te zien. Rollen bepalen wie panden, deals of de inbox mag lezen en wijzigen — eigen records of kantoorbreed.",
      },
      {
        q: "Publiceren we naar Immoweb én onze eigen site?",
        a: "Ja. Je eigen website en Immoweb delen dezelfde bron. Foto’s en status zitten in één publicatiestroom.",
      },
      {
        q: "Wat is virtuele inrichting?",
        a: "Je zet een lege kamerfoto om in een ingerichte preview. Het resultaat bewaar je bij de pandmedia.",
      },
      {
        q: "Werkt ImmoCRM voor verkoop én verhuur?",
        a: "Het product is gebouwd rond pand, deal en gesprek — typisch voor verkoopkantoren. Verhuur in dezelfde dossiers bespreken we in de demo.",
      },
      {
        q: "Hoe gaan jullie om met privacy?",
        a: "Het demoformulier gebruiken we alleen om je aanvraag te beantwoorden. We verkopen die gegevens niet. Details staan in de privacyverklaring, cookieverklaring en algemene voorwaarden.",
      },
      {
        q: "Wat als we meerdere vestigingen hebben?",
        a: "Dat kan. Bereik en rollen stemmen we af op hoe het kantoor werkt. Grotere teams kunnen een offerte op maat krijgen.",
      },
      {
        q: "Hoe starten we?",
        a: "Vraag een demo. We lopen het product met je door, kijken naar je data, en plannen migratie en training. Geen self-serve checkout.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prijzen",
    title: "Eén plan, alles erin",
    subtitle:
      "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Werkt je kantoor anders? Dan maken we een prijs op maat.",
    cta: "Vraag een demo",
    quoteCta: "Offerte aanvragen",
    featuredBadge: "Meest gekozen",
    priceSuffix: "/ gebruiker / maand",
    includedTitle: "Wat je krijgt",
    included: [
      "Onbeperkt panden, deals, klanten en website-leads",
      "Alle modules op de functies-pagina",
      "WhatsApp- en mail-inbox",
      "Publicatie naar je website en Immoweb",
      "Agenda, bezichtigingen en een planner waarop partijen stemmen",
      "Contracten: samen bewerken, geschiedenis en tekenen",
      "Virtuele inrichting",
      "Teamrollen en rechten",
      "Nederlands en Engels in het product",
      "Onboarding via een demo, geen self-serve trial",
    ],
    plans: [
      {
        id: "immocrm",
        name: "ImmoCRM",
        subtitle: "Het volledige kantoor, in één flow",
        price: "€140",
        priceNote: "eerste gebruiker / maand",
        extraPrice: "€40",
        extraPriceNote: "per extra gebruiker / maand",
        featured: true,
        features: [
          "Onbeperkt panden, deals, klanten en website-leads",
          "WhatsApp- en mail-inbox",
          "Publicatie naar je website en Immoweb",
          "Agenda, bezichtigingen en planner",
          "Contracten: bewerken, geschiedenis en tekenen",
          "Virtuele inrichting",
          "Teamrollen en rechten",
          "Nederlands en Engels",
          "Onboarding via een demo",
        ],
      },
      {
        id: "custom",
        name: "Op maat",
        subtitle: "Voor kantoren die anders werken",
        price: "Op maat",
        priceNote: "Mogelijk korting bij een groter team",
        quote: true,
        features: [
          "Alles uit ImmoCRM",
          "Workflows op aanvraag",
          "Extra velden of stappen",
          "Persoonlijke onboarding",
          "Afgestemd in de demo",
        ],
      },
    ],
    note: "Immoweb, WhatsApp en mail vragen hun eigen accounts. ImmoCRM koppelt ze.",
    customNote:
      "Workflows of functies op maat kunnen we toevoegen op aanvraag.",
  },
  contact: {
    title: "Vraag een demo",
    eyebrow: "Contact",
    body: "We lopen ImmoCRM met je door, kijken hoe jouw kantoor werkt en plannen daarna migratie en training. We antwoorden per e-mail of telefoon. Er is geen automatische inschrijving.",
    companyLine: "ImmoCRM, gevestigd in België.",
    priceHint: "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Of een prijs op maat.",
    priceLink: "Bekijk de prijzen",
    labels: {
      email: "E-mail",
      phone: "Telefoon",
      location: "Vestiging",
      vat: "BTW",
    },
    successTitle: "Aanvraag verstuurd",
    successBody: "Bedankt. We nemen contact op via het opgegeven e-mailadres of telefoonnummer.",
    submit: "Verstuur aanvraag",
    submitting: "Versturen…",
    fields: {
      name: "Naam",
      office: "Kantoor",
      email: "E-mail",
      phone: "Telefoon (optioneel)",
      seats: "Aantal seats",
      message: "Bericht (optioneel)",
    },
  },
  privacy: privacyNl,
  cookies: cookiesNl,
  terms: termsNl,
  form: {
    errors: {
      invalid: "Controleer het formulier en probeer opnieuw.",
      required: "Vul naam, kantoor, e-mail en aantal seats in.",
      email: "Vul een geldig e-mailadres in.",
      seats: "Aantal seats moet tussen 1 en 99 liggen.",
      rateLimit: "Te veel aanvragen. Probeer het over een kwartier opnieuw.",
      server: "Versturen lukte niet. Probeer later opnieuw.",
    },
  },
};

export type Dictionary = typeof nl;
