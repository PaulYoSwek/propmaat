import { cookiesNl, privacyNl, termsNl } from "./legal-nl";

export const nl = {
  meta: {
    home: {
      title: "ImmoCRM",
      description:
        "CRM voor makelaars in België en Nederland. Panden, deals, klanten, mail, WhatsApp, agenda, je eigen website, ondertekenen en financiën in één werkruimte. €140 per maand voor de eerste gebruiker, daarna €40.",
    },
    functies: {
      title: "ImmoCRM",
      description:
        "Panden met AI-intake en checklist, publicatie naar je website, Immoweb, Immoscoop en Immomaps, deals, prospecten, klanten, WhatsApp en mail, agenda, taken, samenwerken en ondertekenen, virtuele inrichting, financiën, rapporten en teamrollen.",
    },
    prijzen: {
      title: "ImmoCRM",
      description:
        "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Alle modules en je eigen website inbegrepen. Of een prijs op maat. Vraag een demo om te starten.",
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
        "In drie stappen operationeel: demo, datamigratie en inrichting, training en go-live.",
    },
    faq: {
      title: "ImmoCRM",
      description:
        "Antwoorden over prijs, seats, onboarding, je eigen website, Immoweb en andere portalen, WhatsApp, mail, AI, ondertekenen, financiën en privacy.",
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
    login: "Inloggen",
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
      "ImmoCRM bundelt panden, deals, klanten, mail, WhatsApp, agenda, je eigen website, ondertekenen en de administratie van het kantoor. Checklists, triggers en opvolging lopen vanzelf.",
    heroWhy:
      "Eén dossier per pand, per deal en per klant. Geen overtypen, geen losse inboxen, geen aparte websitebouwer. Werkt je kantoor anders? Dan passen we de stappen aan.",
    heroChannelsLead:
      "Mail, WhatsApp, je website, de agenda en documenten zitten in één automatische opvolging. Het gesprek met de klant blijft lopen, zonder losse inboxen.",
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
    videoOpen: "Video groter bekijken",
    videoClose: "Video sluiten",
    automationTitle: "Automation",
    automationHeading: "Eén flow die je kantoorwerk versnelt",
    automationLead:
      "ImmoCRM versnelt de workflows van je kantoor. Mail, WhatsApp, je website, de agenda en contracten lopen in één flow. Automatische berichten gebruiken jouw sjablonen; AI helpt formuleren, maar verstuurt nooit zelf.",
    automationShotHint: "Screenshot volgt",
    automationChannels: [
      {
        id: "mail" as const,
        label: "Mail",
        headline: "Mail landt in het dossier, met het antwoord al klaar.",
        body: "Koppel Google of Outlook. Mails van gevolgde afzenders of met trefwoorden komen binnen met een conceptantwoord uit jouw sjablonen. Jij leest, past aan en verstuurt, met pandbijlagen, brochure of planninglink. Alles hangt aan het pand, de deal of de klant.",
        shot: "/brand/automation-mail.webp",
        video: "/brand/automation-mail.mp4",
        shotAlt:
          "Mailinbox met gevolgde afzenders en trefwoorden, een conceptantwoord, dezelfde mail bij het pand en de sjablonen",
      },
      {
        id: "whatsapp" as const,
        label: "WhatsApp",
        headline: "WhatsApp op het kantoornummer — AI schrijft mee, stuurt nooit.",
        body: "Eén zakelijk nummer via Meta, geen privé-telefoons. Sjablonen, flows met knoppen en automatische antwoorden op trefwoorden vangen de eerste vragen op. Elk gesprek hangt aan de klant en het pand. AI mag een tekst herschrijven, maar verstuurt niets zelf.",
        shot: "/brand/automation-whatsapp.webp",
        video: "/brand/automation-whatsapp.mp4",
        shotAlt: "WhatsApp-inbox op het kantoornummer met een flow, de flow-instellingen en AI-herschrijven",
      },
      {
        id: "website" as const,
        label: "Website",
        headline: "Je eigen website zit erin. Elke aanvraag wordt werkvoorraad.",
        body: "Je kantoor krijgt een website op je eigen domein met je aanbod, verkoop-, schattings- en zoekformulieren. Publiceren vanuit het dossier, live binnen seconden. Elke aanvraag komt binnen als open item met een automatische ontvangstbevestiging. Jij antwoordt per mail of WhatsApp, of maakt er in één klik een klant van.",
        shot: "/brand/automation-website.webp",
        video: "/brand/automation-website.mp4",
        shotAlt: "De eigen kantoorwebsite met aanbod, de website-inbox met aanvragen, de automatische ontvangstbevestiging en een antwoord vanuit de lead",
      },
      {
        id: "agenda" as const,
        label: "Agenda",
        headline: "Een eigen planner: iedereen stemt, jij plant.",
        body: "Google of Outlook gekoppeld. Voor een bezichtiging stuur je voorstellen per mail of WhatsApp; koper, verkoper en kantoor stemmen. Het gekozen moment landt in ieders agenda, bij het pand, met een Meet- of Teams-link als je wil. Je ziet wanneer collega’s bezet zijn.",
        shot: "/brand/automation-agenda.webp",
        video: "/brand/automation-agenda.mp4",
        shotAlt: "Weekagenda met gekoppelde kalender, het planvenster met voorstellen per mail of WhatsApp en het stemoverzicht",
      },
      {
        id: "signing" as const,
        label: "Contracten",
        headline: "Samen schrijven, geschiedenis bewaren, tekenen via een link.",
        body: "Meerdere partijen werken in hetzelfde document, elke versie blijft bewaard. Is iedereen akkoord, dan zet je handtekeningvakjes op de PDF. Elke partij tekent thuis via een eigen link, met muis of vinger. De getekende PDF komt bij het pand. Geen externe tekendienst nodig.",
        shot: "/brand/automation-signing.webp",
        video: "/brand/automation-signing.mp4",
        shotAlt: "Samenwerkingsdossier met document en reacties, de lijst met dossiers, een ondertekenverzoek en de sjablonen",
      },
    ],
    whyUsTitle: "Waarom ImmoCRM",
    whyUsLead:
      "Een algemeen CRM past zich aan vastgoed aan. ImmoCRM is ervoor gebouwd.",
    whyUsBody:
      "Pand, deal, klant en gesprek staan op één plek, met je website, je agenda en je administratie erbij. Checklists, triggers en opvolging lopen mee, zodat je kantoor minder overtypt en minder najaagt.",
    whyUsPoints: [
      {
        icon: "workflow" as const,
        title: "Snellere workflow",
        body: "Attesten, checklist, publicatie naar website en portalen, berichten en documenten horen bij het dossier. AI leest je pdf’s in en zet een conceptantwoord klaar. Je schakelt niet meer tussen mailbox, chat, portaal en spreadsheet.",
      },
      {
        icon: "followup" as const,
        title: "Opvolging die blijft hangen",
        body: "Elk gesprek blijft bij de persoon en het pand. Beslissingen en Taken tonen wie wacht, wat je beloofde en wat de volgende stap is, met kleur zodra de reactietijd dringt.",
      },
      {
        icon: "people" as const,
        title: "Het hele kantoor",
        body: "Van prospect tot getekende akte en factuur: leads groeien op hun eigen bord, deals lopen door fases, Financiën en Rapporten tonen wat het kantoor omzet en wie wat deed.",
      },
    ],
    beats: [
      {
        title: "Het pand",
        body: "Elk object is een dossier: gegevens, media, checklist met fases en publicatie naar je website en de portalen.",
      },
      {
        title: "De deal",
        body: "Een pipeline met eigen fases, triggers en taken, waarin elke deal een eigen dossier heeft.",
      },
      {
        title: "Het gesprek",
        body: "Website-leads, WhatsApp, mail en afspraken op één plek, bij de klant en het pand.",
      },
    ],
    landingEyebrow: "Voorbeeld in het product",
    landingAddress: "Keizerstraat 18, 2000 Antwerpen",
    landingPrice: "€ 649.000",
    landingStatus: "Te koop",
    landingBeds: "4 slpk",
    customTitle: "Jouw kantoor, jouw flow",
    customBody:
      "ImmoCRM dekt het pad van prospect tot ondertekening en factuur. Werkt je kantoor anders, dan voegen we workflows of functies toe op aanvraag. Dat spreken we af in een demo — geen catalogus van extra pakketten.",
    priceEyebrow: "Prijs",
    priceTitle: "€140 voor de eerste gebruiker",
    priceBody:
      "Daarna €40 per extra gebruiker per maand. Alle modules en je eigen website erin, geen verborgen pakketten. Bekijk wat je krijgt.",
    priceCta: "Naar prijzen",
    finalTitle: "Zie ImmoCRM in je kantoor",
    finalBody:
      "We lopen het product met je door. Geen automatische trial, wel een gerichte demo.",
  },
  features: {
    title: "Alles in één werkruimte",
    intro:
      "ImmoCRM dekt het pad van prospect tot ondertekening en factuur, inclusief je eigen website. Geen extra modules om later te kopen — dit is het product.",
    catalogEyebrow: "Functies",
    catalogTitle: "Alles wat het kantoor al doet, in één CRM",
    catalogLead:
      "Geen modulewinkel. Dit is het product: van panddossier en publicatie tot ondertekening, administratie en rapporten, inclusief je website en de gesprekken eromheen.",
    catalogCta: "Lees de uitleg per functie",
    custom: {
      title: "Op maat",
      body: "ImmoCRM kan workflows of functies toevoegen die bij jouw kantoor passen. Geen modulewinkel: we spreken scope en timing af in een demo.",
      bullets: [
        "Workflows die aansluiten op hoe je kantoor al werkt",
        "Extra velden, fases of stappen op aanvraag",
        "Afgestemd in de demo, geen extra pakket om te kopen",
      ],
    },
    sections: [
      {
        id: "dashboard",
        title: "Dashboard",
        body: "Het startscherm van de werkdag. Kerncijfers, open taken, pipeline, panden, website-leads en agenda in widgets die je zelf schikt. Elke widget klikt door naar de module.",
        bullets: [
          "Widgets slepen, vergroten en kleuren, persoonlijk per gebruiker",
          "Deals-bord en prospectenbord als widget",
          "Checklist-voortgang van je panden in beeld",
        ],
      },
      {
        id: "panden",
        title: "Panden",
        body: "Elk object is een dossier, geen rij in een spreadsheet. Gegevens, media, documenten, checklist, kandidaten en communicatie blijven bij elkaar. Nieuw pand? Sleep de pdf’s erin en AI vult de gegevens voor.",
        bullets: [
          "AI-documentenintake: EPC, attesten en akte worden ingelezen tot een vooringevuld pand",
          "Checklist met fases en toewijzing; herkende documenten vinken zichzelf af",
          "Indeling per ruimte, EPC en asbest, woonomgeving automatisch berekend",
          "Foto’s, video en plattegronden; portfolio als kaarten, tabel of kaart",
          "Pand klonen, partijen mailen, communicatie en tijdlijn per pand",
        ],
      },
      {
        id: "publicatie",
        title: "Publicatie en portalen",
        body: "Als het dossier klaar is, zet je het live. Je eigen website, Immoweb, Immoscoop en Immomaps delen dezelfde bron. Per kanaal zie je de status en de laatste fout.",
        bullets: [
          "Je website wacht op de checklist; portalen publiceer je apart",
          "Immoweb, Immoscoop en Immomaps vanuit het dossier, met boost",
          "Publicatiebrochure als pdf, zichtbaarheid per veld en document",
        ],
      },
      {
        id: "eigen-website",
        title: "Je eigen website",
        body: "Bij ImmoCRM hoort een publieke website voor je kantoor, op je eigen domein en met je logo. Aanbod, panddetail met foto’s, video en kaart, verkopen, gratis schatting, zoekopdracht inschrijven en vergelijken. Alles komt uit het CRM en is binnen seconden bijgewerkt.",
        bullets: [
          "Aanbod en panddetail met carrousel, documenten en locatiekaart",
          "Formulieren voor verkoop, schatting, zoekopdracht en contact",
          "Eigen domein, SEO en sitemap, weergaven terug in het CRM",
        ],
      },
      {
        id: "deals",
        title: "Deals",
        body: "De pipeline is het dagelijkse bord, voor verkoop en verhuur. Sleep een deal naar de volgende fase en open het dossier voor taken, notities en berichten. Fases, kleuren en extra velden bepaal je zelf.",
        bullets: [
          "Kanban met eigen fases, kleuren en poorten per fase",
          "Triggers: automatische mail of WhatsApp bij een fasewissel",
          "Standaardtaken bij een nieuwe deal, pand aanmaken vanuit de deal",
        ],
      },
      {
        id: "prospecten",
        title: "Prospecten",
        body: "Nieuwe leads groeien eerst op een eigen bord met eigen fases. Pas als het ernst wordt, maak je er een klant en een deal van, zonder iets over te typen.",
        bullets: [
          "Apart kanban-bord met fases die je kantoor zelf zet",
          "Koppelen aan een bestaande klant of doorgroeien naar klant plus deal",
          "Taken, notities en mail vanuit de prospect",
        ],
      },
      {
        id: "klanten",
        title: "Klanten en netwerk",
        body: "Kopers, verkopers, huurders en verhuurders, maar ook notarissen, collega-makelaars en je netwerk. Elke fiche heeft een zoekprofiel, een tijdlijn en een communicatietab met alle mails en WhatsApp-gesprekken.",
        bullets: [
          "Klanttypes van koper tot notaris, met dubbelherkenning op mail en telefoon",
          "Zoekprofiel per klant en kandidaten-matching met het aanbod",
          "Eén mail naar meerdere klanten, export en anonimiseren per contact",
        ],
      },
      {
        id: "website",
        title: "Website-leads",
        body: "Aanvragen van je site komen binnen als werkvoorraad: verkoop, schatting, zoekopdracht, pandvraag of bericht. Je antwoordt via mail of WhatsApp, vanuit hetzelfde dossier.",
        bullets: [
          "Eén inbox voor site-aanvragen, met automatische ontvangstbevestiging",
          "Antwoord via e-mail of WhatsApp, met sjabloon, pand en bijlagen",
          "Accepteren als klant, concept-pand of zoekprofiel; zoekopdrachten automatisch",
        ],
      },
      {
        id: "inbox",
        title: "WhatsApp en mail",
        body: "Twee-weg inbox voor de gesprekken die je kantoor al voert. Mail via je gekoppelde Google- of Outlook-account, WhatsApp via het zakelijke kantoornummer. Sjablonen helpen; AI zet een concept klaar, maar stuurt niets zelf.",
        bullets: [
          "Gevolgde afzenders en trefwoorden leveren mails met conceptantwoord",
          "WhatsApp-flows met knoppen en automatische antwoorden op trefwoorden",
          "Bijlagen, brochure en planninglink vanuit elk compose-venster",
        ],
      },
      {
        id: "agenda",
        title: "Agenda en bezichtigingen",
        body: "Je Google- of Outlook-agenda in het CRM, gekoppeld aan klant en pand. Voor een bezichtiging stuur je voorstellen; koper, verkoper en kantoor stemmen. Het gekozen moment landt in ieders agenda.",
        bullets: [
          "Planner waarop alle partijen stemmen, per mail of WhatsApp",
          "Uitnodigingen met Google Meet of Teams, Brusselse tijd",
          "Collega’s bezet of vrij zien, afspraken bij het pand",
        ],
      },
      {
        id: "beslissingen",
        title: "Beslissingen",
        body: "Openstaande acties uit mail, WhatsApp, website, planning, taken en panden komen samen. Je ziet wat urgent is zonder vijf tabbladen, met kleur zodra de reactietijd van het kantoor dringt.",
        bullets: [
          "Eén overzicht van openstaande items",
          "Urgentie op basis van de reactietijd die jullie zelf zetten",
          "Teamoverzicht per makelaar voor wie dat mag zien",
        ],
      },
      {
        id: "taken",
        title: "Taken",
        body: "Alle taken van het kantoor in één overzicht: bij deals, panden en prospecten, maar ook losse kantoortaken. Toewijzen aan een collega, afwijzen met reden, deadline met herinnering.",
        bullets: [
          "Tabel of bord per persoon, tabs Open, Klaar en Afgewezen",
          "Losse taken zoals “flyers maken”, los van een dossier",
          "Herinnering een dag voor de deadline, badge in de zijbalk",
        ],
      },
      {
        id: "signing",
        title: "Samenwerken en ondertekenen",
        body: "Meerdere partijen bewerken hetzelfde document vanuit een sjabloon, met versiegeschiedenis en goedkeuring. Daarna zet je handtekeningvakjes op de pdf; elke partij tekent via een eigen link. De getekende pdf komt bij het pand.",
        bullets: [
          "Sjablonen voor aankoopbelofte, identificatie en AML-dossier",
          "Versies, reacties en akkoord per deelnemer",
          "Tekenen via link met muis of vinger, zonder externe tekendienst",
        ],
      },
      {
        id: "inrichting",
        title: "Virtuele inrichting",
        body: "Zet een lege kamerfoto om in een ingerichte preview. Beschrijf in het Nederlands wat je wil, kies een hele kamer of plaats één meubel, en bewaar het resultaat bij het pand.",
        bullets: [
          "Hele kamer stylen of één stuk plaatsen op een regio van de foto",
          "3D-studio en voor-en-na-slider",
          "Downloaden als PNG of opslaan bij de pandmedia, wekelijks AI-tegoed per kantoor",
        ],
      },
      {
        id: "financien",
        title: "Financiën",
        body: "De administratie van het kantoor zelf. Omzet uit gewonnen deals, kosten met bonnetje of factuur als bijlage, totalen per kwartaal en jaar, en een btw-overzicht. De export gaat zo naar je boekhouder.",
        bullets: [
          "Omzet koppelen aan gewonnen deals, “nog te factureren” in beeld",
          "Kosten per categorie met bijlagen, btw-overzicht per kwartaal",
          "CSV- en zip-export voor de boekhouder",
        ],
      },
      {
        id: "rapporten",
        title: "Rapporten",
        body: "Kies een medewerker en een periode en zie in één oogopslag wat er gedaan is: nieuwe panden, deals, afspraken, berichten. Met vergelijking tegenover de vorige periode en een pdf om te delen.",
        bullets: [
          "Per week, maand of eigen periode",
          "Kerncijfers per persoon of voor het hele kantoor",
          "Pdf bekijken of downloaden, toegang per rol",
        ],
      },
      {
        id: "team",
        title: "Team en beveiliging",
        body: "Niet iedereen hoeft alles te zien. Rollen bepalen per module wie mag lezen of wijzigen, en of iemand eigen dossiers of het hele kantoor ziet. Gegevens zijn per kantoor gescheiden; wie bij meerdere kantoren werkt, wisselt met één login.",
        bullets: [
          "Rechtenmatrix per module, bereik eigen of kantoorbreed",
          "Meerdere kantoren met één login, activiteitenlog per kantoor",
          "Ingebouwde documentatie, Nederlands en Engels, werkt op telefoon",
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
        id: "intake",
        icon: "spark" as const,
        title: "AI-documentenintake",
        body: "Pdf’s erin, een vooringevuld pand eruit. De pdf’s verlaten je browser niet.",
      },
      {
        id: "media",
        icon: "media" as const,
        title: "Foto’s, video en plattegronden",
        body: "Foto’s worden automatisch verkleind. Video speelt op je website.",
      },
      {
        id: "documents",
        icon: "document" as const,
        title: "Documenten en attesten",
        body: "EPC, asbest, keuringen en akten bij het pand, met zichtbaarheid per bestand.",
      },
      {
        id: "checklist",
        icon: "checklist" as const,
        title: "Checklist met fases",
        body: "Van prospectie tot nazorg. Herkende documenten vinken zichzelf af.",
      },
      {
        id: "layout",
        icon: "listing" as const,
        title: "Indeling en woonomgeving",
        body: "Ruimtes per verdieping; winkels, scholen en station automatisch berekend.",
      },
      {
        id: "map",
        icon: "map" as const,
        title: "Kaartweergave",
        body: "Je hele portfolio als pins op de kaart, met pandoverzicht per pin.",
      },
      {
        id: "clone",
        icon: "listing" as const,
        title: "Pand klonen",
        body: "Gegevens gaan mee; foto’s, partijen en taken kies je.",
      },
      {
        id: "site-publish",
        icon: "publish" as const,
        title: "Publicatie naar je website",
        body: "Zelfde bron als je kantoor. Live binnen seconden, geen CMS.",
      },
      {
        id: "immoweb",
        icon: "publish" as const,
        title: "Immoweb",
        body: "Publiceren, bijwerken, offline halen en boosten vanuit het dossier.",
      },
      {
        id: "portals",
        icon: "publish" as const,
        title: "Immoscoop en Immomaps",
        body: "Feeds per kantoor, met status en laatste fout per portaal.",
      },
      {
        id: "brochure",
        icon: "document" as const,
        title: "Publicatiebrochure",
        body: "Pdf van het pand, ook als bijlage in je mail.",
      },
      {
        id: "own-website",
        icon: "publish" as const,
        title: "Eigen website inbegrepen",
        body: "Aanbod, verkopen, schatting, inschrijven en vergelijken op je eigen domein.",
      },
      {
        id: "field-visibility",
        icon: "shield" as const,
        title: "Zichtbaarheid per veld",
        body: "Kies per veld en document wat op de website komt. Prijs op aanvraag kan.",
      },
      {
        id: "triggers",
        icon: "spark" as const,
        title: "Pand- en fasetriggers",
        body: "Automatische mail of WhatsApp bij publicatie of fasewissel, uit jouw sjablonen.",
      },
      {
        id: "pipeline",
        icon: "pipeline" as const,
        title: "Deals-pipeline",
        body: "Kanban met eigen fases, kleuren, extra velden en poorten.",
      },
      {
        id: "deal-file",
        icon: "deal" as const,
        title: "Deal-dossier",
        body: "Taken, notities en berichten horen bij de deal.",
      },
      {
        id: "tasks",
        icon: "task" as const,
        title: "Taken",
        body: "Kantooroverzicht, toewijzen, afwijzen met reden, herinneringen.",
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
        title: "Klanten en netwerk",
        body: "Koper tot notaris, met tijdlijn en communicatietab.",
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
        title: "Kandidaten-matching",
        body: "Interesse koppelen aan passende panden, en omgekeerd.",
      },
      {
        id: "web-leads",
        icon: "inbox" as const,
        title: "Website-leads",
        body: "Aanvragen komen binnen als werkvoorraad, met ontvangstbevestiging.",
      },
      {
        id: "whatsapp",
        icon: "inbox" as const,
        title: "WhatsApp-inbox",
        body: "Kantoornummer via Meta. Gesprekken bij de persoon en het pand.",
      },
      {
        id: "whatsapp-flows",
        icon: "inbox" as const,
        title: "WhatsApp-flows",
        body: "Knoppen-gesprekken en automatische antwoorden op trefwoorden.",
      },
      {
        id: "mail",
        icon: "inbox" as const,
        title: "Mail-inbox",
        body: "Google of Outlook gekoppeld. Gevolgde afzenders en trefwoorden.",
      },
      {
        id: "ai",
        icon: "spark" as const,
        title: "AI-conceptantwoorden",
        body: "Concept klaar bij binnenkomst. Herschrijven op knop. Stuurt nooit zelf.",
      },
      {
        id: "templates",
        icon: "inbox" as const,
        title: "Sjablonen",
        body: "Per kantoor of per persoon, voor mail, WhatsApp en planning.",
      },
      {
        id: "communication",
        icon: "inbox" as const,
        title: "Communicatie per dossier",
        body: "Alle mails en WhatsApp-gesprekken bij klant en pand.",
      },
      {
        id: "agenda",
        icon: "calendar" as const,
        title: "Agenda-koppeling",
        body: "Google of Outlook in het CRM, afspraken bij klant en pand.",
      },
      {
        id: "planning",
        icon: "calendar" as const,
        title: "Planner met stemmen",
        body: "Alle partijen stemmen op een tijdstip. Jij plant het gekozen moment.",
      },
      {
        id: "invites",
        icon: "calendar" as const,
        title: "Uitnodigingen",
        body: "Bevestiging per mail of WhatsApp, met Meet- of Teams-link.",
      },
      {
        id: "colleagues",
        icon: "calendar" as const,
        title: "Collega-agenda",
        body: "Zie wanneer collega’s bezet zijn, zonder hun details.",
      },
      {
        id: "decisions",
        icon: "checklist" as const,
        title: "Beslissingen",
        body: "Openstaande acties uit mail, chat, website, planning en panden.",
      },
      {
        id: "collaborate",
        icon: "sign" as const,
        title: "Samenwerken",
        body: "Eén document, meerdere partijen, elke versie bewaard.",
      },
      {
        id: "signing",
        icon: "sign" as const,
        title: "Ondertekenen",
        body: "Vakjes op de pdf, tekenen via een eigen link, resultaat bij het pand.",
      },
      {
        id: "staging",
        icon: "staging" as const,
        title: "Virtuele inrichting",
        body: "Een lege kamerfoto omzetten in een ingerichte preview.",
      },
      {
        id: "staging-3d",
        icon: "staging" as const,
        title: "3D-studio",
        body: "Eén meubel plaatsen of een kamer in 3D bekijken.",
      },
      {
        id: "finance",
        icon: "finance" as const,
        title: "Financiën",
        body: "Omzet, kosten en bijlagen van het kantoor, per kwartaal en jaar.",
      },
      {
        id: "vat-export",
        icon: "finance" as const,
        title: "Btw en export",
        body: "Btw-overzicht per kwartaal, CSV en zip voor de boekhouder.",
      },
      {
        id: "reports",
        icon: "chart" as const,
        title: "Rapporten",
        body: "Kerncijfers per medewerker en periode, als pdf.",
      },
      {
        id: "dashboard",
        icon: "dashboard" as const,
        title: "Dashboard",
        body: "Widgets die je zelf schikt, persoonlijk per gebruiker.",
      },
      {
        id: "activity",
        icon: "checklist" as const,
        title: "Activiteitenlog",
        body: "Wie deed wat, wanneer. Per kantoor en per dossier.",
      },
      {
        id: "roles",
        icon: "team" as const,
        title: "Rollen en rechten",
        body: "Lezen of schrijven per module, eigen bereik of kantoorbreed.",
      },
      {
        id: "multi-office",
        icon: "team" as const,
        title: "Meerdere kantoren",
        body: "Eén login, wisselen tussen vestigingen. Data per kantoor gescheiden.",
      },
      {
        id: "gdpr",
        icon: "shield" as const,
        title: "AVG-tools",
        body: "Export en anonimiseren per contact, dubbelherkenning bij invoer.",
      },
      {
        id: "docs",
        icon: "document" as const,
        title: "Ingebouwde documentatie",
        body: "Uitleg per module in het CRM zelf, voor iedereen die inlogt.",
      },
      {
        id: "locales",
        icon: "language" as const,
        title: "Nederlands en Engels",
        body: "Het product in twee talen, eigen kleur per gebruiker, ook op telefoon.",
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
        body: "We tonen ImmoCRM en bespreken hoe jouw kantoor werkt: fases, checklist, website, portalen. Vrijblijvend, geen automatische inschrijving.",
      },
      {
        number: "02",
        title: "Migratie en inrichting",
        body: "We helpen panden, klanten en deals importeren vanuit Excel of je huidige software. Samen zetten we je logo, domein, mail, WhatsApp en sjablonen klaar.",
      },
      {
        number: "03",
        title: "Training & go-live",
        body: "Persoonlijke training in het Nederlands of Engels, plus ingebouwde documentatie per module. Je team is snel operationeel.",
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
        a: "Voor makelaarskantoren in België en Nederland die pand, deal, klant en gesprek in één werkruimte willen, met hun website en administratie erbij. Geen algemeen CRM dat je later tot vastgoed ombouwt.",
      },
      {
        q: "Wat is het verschil met een algemeen CRM?",
        a: "ImmoCRM is gebouwd rond het dossier: attesten, checklist, publicatie naar website en portalen, bezichtigingen, berichten en ondertekening horen bij het pand of de deal. Je hoeft mail, WhatsApp, portalen en spreadsheets niet zelf aan elkaar te knopen.",
      },
      {
        q: "Hoeveel kost het?",
        a: "ImmoCRM is €140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Alles zit erin, ook je eigen website. Voor grotere teams of andere workflows maken we een offerte op maat.",
      },
      {
        q: "Wat is een seat?",
        a: "Eén seat is één persoon met een login. De eerste gebruiker is €140 per maand, elke extra gebruiker €40. Je betaalt per actieve login, niet per pand, per module of per websitebezoeker.",
      },
      {
        q: "Krijgen we echt een eigen website?",
        a: "Ja. Bij ImmoCRM hoort een publieke website voor je kantoor met aanbod, panddetail, verkopen, gratis schatting, zoekopdracht inschrijven, vergelijken, over ons en contact. Je koppelt je eigen domein en logo in Instellingen. Alles komt uit het CRM en is binnen seconden bijgewerkt.",
      },
      {
        q: "Naar welke portalen publiceren we?",
        a: "Je eigen website, Immoweb, Immoscoop en Immomaps, vanuit hetzelfde dossier. Per kanaal zie je of het pand online staat en wat de laatste fout was. Boosten kan vanuit het CRM. Immoweb vraagt een PRO-account van je kantoor.",
      },
      {
        q: "Is er een gratis trial?",
        a: "Nee. We starten met een demo, zodat je het product in jouw kantoor ziet. Daarna zetten we jullie live. Geen automatische inschrijving.",
      },
      {
        q: "Hoe lang duurt het voor we operationeel zijn?",
        a: "Na de demo plannen we migratie, inrichting en training. Kleine kantoren zijn vaak binnen een week live. Grotere bestanden of extra workflows spreken we af in de demo.",
      },
      {
        q: "Kunnen jullie onze data overzetten?",
        a: "Ja. We helpen panden, klanten en deals importeren vanuit Excel of je huidige software. Nieuwe panden lees je daarna zelf in met de AI-documentenintake. Scope en timing horen bij de onboarding.",
      },
      {
        q: "Werkt het in België én Nederland?",
        a: "Ja. ImmoCRM is gemaakt voor kantoren van Antwerpen tot Amsterdam. Het product is beschikbaar in het Nederlands en Engels.",
      },
      {
        q: "Werkt ImmoCRM voor verkoop én verhuur?",
        a: "Ja. Panden zijn te koop of te huur, de pipeline werkt voor verkoop en verhuur, en klanten kunnen koper, verkoper, huurder of verhuurder zijn.",
      },
      {
        q: "Heb ik aparte accounts nodig voor WhatsApp, mail en Immoweb?",
        a: "Ja. WhatsApp vraagt een zakelijk nummer bij Meta, mail en agenda koppel je met je eigen Google- of Outlook-account, en Immoweb vraagt een PRO-account. ImmoCRM koppelt ze, zodat het werk in één flow blijft. Je website, samenwerken en ondertekenen zitten in ImmoCRM zelf.",
      },
      {
        q: "Wat doet de AI precies?",
        a: "Vier dingen: pdf’s van een nieuw pand inlezen tot vooringevulde gegevens, een conceptantwoord klaarzetten bij een binnenkomende mail, een tekst herschrijven of een afspraakbericht opstellen als je daarop klikt, en een lege kamerfoto inrichten. De AI verstuurt nooit zelf een bericht.",
      },
      {
        q: "Stuurt het CRM dan toch automatisch berichten?",
        a: "Alleen als jij dat instelt, en altijd met jouw eigen sjablonen: een ontvangstbevestiging op een website-aanvraag, een mail of WhatsApp bij een fasewissel of publicatie, en WhatsApp-antwoorden op trefwoorden. Geen AI-teksten zonder dat jij ze leest.",
      },
      {
        q: "Hoe werkt ondertekenen?",
        a: "Je zet handtekeningvakjes op een pdf in het CRM. Elke ondertekenaar krijgt een eigen link per mail en tekent thuis met muis of vinger. De handtekening komt meteen op de pdf, die bij het pand bewaard wordt. Voordien kunnen partijen het document samen opstellen met versiegeschiedenis en akkoord.",
      },
      {
        q: "Zit de boekhouding erin?",
        a: "De module Financiën houdt omzet uit gewonnen deals, kosten met bijlagen en een btw-overzicht per kwartaal bij. Het vervangt je boekhouder niet: je exporteert alles als CSV en zip en stuurt het door.",
      },
      {
        q: "Kunnen we zien wat medewerkers doen?",
        a: "Ja. Rapporten toont per medewerker en periode de kerncijfers, met vergelijking tegenover de vorige periode en een pdf. Het activiteitenlog toont wie wat wijzigde. Wie dat mag zien, bepaal je per rol.",
      },
      {
        q: "Kunnen we workflows aanpassen?",
        a: "Veel zet je zelf: deal- en prospectfases, extra velden, triggers, checklist, standaardtaken, sjablonen en reactietijd. Werkt je kantoor nog anders, dan voegen we stappen of velden toe. Dat spreken we af in de demo, geen extra pakket uit een shop.",
      },
      {
        q: "Hoe werken teamrollen?",
        a: "Niet iedereen hoeft alles te zien. Per module kies je geen, lezen of schrijven, en voor klanten, panden, deals, taken, WhatsApp en rapporten of iemand eigen records of het hele kantoor ziet. Beheerders beheren koppelingen en domeinen.",
      },
      {
        q: "Wat als we meerdere vestigingen hebben?",
        a: "Dat kan. Elk kantoor heeft zijn eigen gescheiden gegevens, website en instellingen. Wie bij meerdere vestigingen werkt, wisselt met één login. Grotere teams kunnen een offerte op maat krijgen.",
      },
      {
        q: "Wat is virtuele inrichting?",
        a: "Je zet een lege kamerfoto om in een ingerichte preview, in het Nederlands beschreven. Hele kamer of één meubel op een plek, met voor-en-na-slider en 3D-studio. Elk kantoor heeft een wekelijks AI-tegoed; het resultaat bewaar je bij de pandmedia.",
      },
      {
        q: "Hoe gaan jullie om met privacy en de AVG?",
        a: "Gegevens zijn per kantoor gescheiden en per rol afgeschermd. Per contact kun je exporteren en anonimiseren. Het demoformulier op deze site gebruiken we alleen om je aanvraag te beantwoorden. Details staan in de privacyverklaring, cookieverklaring en algemene voorwaarden.",
      },
      {
        q: "Hoe starten we?",
        a: "Vraag een demo. We lopen het product met je door, kijken naar je data, en plannen migratie, inrichting en training. Geen self-serve checkout.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prijzen",
    title: "Eén plan, alles erin",
    subtitle:
      "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Alle modules en je eigen website inbegrepen. Werkt je kantoor anders? Dan maken we een prijs op maat.",
    cta: "Vraag een demo",
    quoteCta: "Offerte aanvragen",
    featuredBadge: "Meest gekozen",
    priceSuffix: "/ gebruiker / maand",
    includedTitle: "Wat je krijgt",
    included: [
      "Onbeperkt panden, deals, klanten, taken en website-leads",
      "Alle modules op de functies-pagina",
      "Je eigen website op je eigen domein",
      "Publicatie naar Immoweb, Immoscoop en Immomaps",
      "WhatsApp- en mail-inbox met AI-conceptantwoorden",
      "Agenda via Google of Outlook, planner waarop partijen stemmen",
      "Samenwerken en ondertekenen via link",
      "Virtuele inrichting met wekelijks AI-tegoed",
      "Financiën, rapporten en activiteitenlog",
      "Teamrollen, rechten en meerdere kantoren",
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
          "Onbeperkt panden, deals, klanten, taken en website-leads",
          "Je eigen website op je eigen domein",
          "Publicatie naar Immoweb, Immoscoop en Immomaps",
          "WhatsApp- en mail-inbox met AI-conceptantwoorden",
          "Agenda, bezichtigingen en planner",
          "Samenwerken en ondertekenen via link",
          "Virtuele inrichting",
          "Financiën en rapporten",
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
          "Extra velden, fases of stappen",
          "Meerdere vestigingen",
          "Persoonlijke onboarding",
          "Afgestemd in de demo",
        ],
      },
    ],
    note: "Immoweb, Immoscoop, WhatsApp (Meta) en je Google- of Outlook-account vragen hun eigen accounts. ImmoCRM koppelt ze. Je website, samenwerken en ondertekenen zitten in ImmoCRM zelf.",
    customNote:
      "Workflows of functies op maat kunnen we toevoegen op aanvraag.",
  },
  contact: {
    title: "Vraag een demo",
    eyebrow: "Contact",
    body: "We lopen ImmoCRM met je door, kijken hoe jouw kantoor werkt en plannen daarna migratie, inrichting en training. We antwoorden per e-mail of telefoon. Er is geen automatische inschrijving.",
    companyLine: "ImmoCRM, gevestigd in België.",
    priceHint: "€140 per maand voor de eerste gebruiker, daarna €40 per extra gebruiker. Alles inbegrepen, ook je website. Of een prijs op maat.",
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
