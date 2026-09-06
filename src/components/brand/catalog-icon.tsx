export const CATALOG_ICONS = [
  "listing",
  "media",
  "checklist",
  "publish",
  "pipeline",
  "deal",
  "people",
  "search",
  "inbox",
  "spark",
  "calendar",
  "sign",
  "staging",
  "team",
  "language",
] as const;

export type CatalogIconId = (typeof CATALOG_ICONS)[number];

export function CatalogIcon({
  id,
  className = "h-5 w-5",
}: {
  id: CatalogIconId;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {iconPath(id)}
    </svg>
  );
}

function iconPath(id: CatalogIconId) {
  switch (id) {
    case "listing":
      return (
        <path
          d="M5 10.2 12 4.5l7 5.7V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19v-8.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      );
    case "media":
      return (
        <>
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="9" cy="11" r="1.4" fill="currentColor" />
          <path
            d="m8 16 3.2-3.2 2.3 2.3L16.2 12 20 16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </>
      );
    case "checklist":
      return (
        <>
          <path
            d="M8 7h11M8 12h11M8 17h8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="m4.5 7 .9.9 1.8-2M4.5 12l.9.9 1.8-2M4.5 17l.9.9 1.8-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      );
    case "publish":
      return (
        <>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 12h15M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      );
    case "pipeline":
      return (
        <>
          <rect x="3.5" y="5" width="5" height="14" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="9.5" y="5" width="5" height="14" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="15.5" y="5" width="5" height="14" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        </>
      );
    case "deal":
      return (
        <>
          <rect x="5" y="4.5" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M8 9h8M8 12.5h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "people":
      return (
        <>
          <circle cx="9" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.8 17.2c.4-2.2 2.1-3.6 4.2-3.6s3.8 1.4 4.2 3.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="16.2" cy="8.5" r="1.9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M15.2 13.5c1.8.2 3.2 1.4 3.7 3.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="m15.5 15.5 4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "inbox":
      return (
        <>
          <path
            d="M4 8.5h16v8A2 2 0 0 1 18 18.5H6A2 2 0 0 1 4 16.5v-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M4 8.5 12 13l8-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </>
      );
    case "spark":
      return (
        <path
          d="M12 3.5 13.4 9l5.6 1.4L13.4 12 12 17.5 10.6 12 5 10.4 10.6 9 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      );
    case "calendar":
      return (
        <>
          <rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 10h16M8 3.5v4M16 3.5v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "sign":
      return (
        <>
          <path
            d="M6 18.5h12M8 15.5c2.2-3.4 4.4-6 8-9.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M14.2 5.2 18.8 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "staging":
      return (
        <>
          <path
            d="M5 16.5h14M7 16.5v-4.2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.3V8.2A3 3 0 0 1 12 5.2a3 3 0 0 1 3 3v2.1"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      );
    case "team":
      return (
        <>
          <circle cx="12" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M6.2 18c.5-2.6 2.7-4.2 5.8-4.2s5.3 1.6 5.8 4.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 10.5h3.2M16.8 10.5H20"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      );
    case "language":
      return (
        <>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M5 10h14M5 14h14M12 4c2 2.8 3 5.4 3 8s-1 5.2-3 8c-2-2.8-3-5.4-3-8s1-5.2 3-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      );
  }
}
