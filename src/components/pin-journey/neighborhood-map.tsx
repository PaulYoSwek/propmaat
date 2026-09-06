import { PropmaatPin } from "@/components/brand/propmaat-pin";

export type DossierCopy = {
  eyebrow: string;
  address: string;
  price: string;
  status: string;
  beds: string;
};

export function NeighborhoodMap({ dossier }: { dossier: DossierCopy }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-line bg-surface">
        <svg
          viewBox="0 0 640 400"
          className="h-full w-full"
          role="img"
          aria-label={dossier.address}
        >
          <rect width="640" height="400" fill="#F7F4EE" />
          <path d="M0 250 H640" stroke="#DDD8CE" strokeWidth="36" />
          <path d="M220 0 V400" stroke="#DDD8CE" strokeWidth="28" />
          <path d="M0 250 H640" stroke="#FBF8F2" strokeWidth="2" strokeDasharray="10 12" />
          <path d="M220 0 V400" stroke="#FBF8F2" strokeWidth="2" strokeDasharray="10 12" />

          <g fill="#E8E4DC" stroke="#2D2D2D" strokeWidth="1.4">
            <rect x="48" y="48" width="88" height="70" rx="4" />
            <polygon points="48,48 92,22 136,48" />
            <rect x="360" y="40" width="96" height="78" rx="4" />
            <polygon points="360,40 408,14 456,40" />
            <rect x="500" y="56" width="80" height="64" rx="4" />
            <polygon points="500,56 540,32 580,56" />
            <rect x="56" y="292" width="100" height="72" rx="4" />
            <polygon points="56,292 106,268 156,292" />
            <rect x="400" y="300" width="90" height="68" rx="4" />
            <polygon points="400,300 445,276 490,300" />
          </g>

          <g
            id="propmaat-pin-target"
            transform="translate(292 118)"
            fill="#FBF8F2"
            stroke="#2D2D2D"
            strokeWidth="1.6"
          >
            <rect x="0" y="28" width="110" height="86" rx="5" />
            <polygon points="0,28 55,0 110,28" />
            <rect x="44" y="74" width="22" height="40" fill="#E8E4DC" />
            <rect x="16" y="46" width="22" height="18" fill="#E8E4DC" />
            <rect x="72" y="46" width="22" height="18" fill="#E8E4DC" />
          </g>

          <circle cx="92" cy="200" r="7" fill="#6B6860" />
          <circle cx="92" cy="188" r="16" fill="#2D2D2D" opacity="0.18" />
          <circle cx="540" cy="210" r="7" fill="#6B6860" />
          <circle cx="540" cy="198" r="16" fill="#2D2D2D" opacity="0.18" />
        </svg>
        <div className="pin-static pointer-events-none absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-full text-ink">
          <PropmaatPin size={28} />
        </div>
      </div>

      <aside
        id="propmaat-dossier"
        className="rounded-3xl border border-line bg-surface p-6"
      >
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
          {dossier.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          {dossier.address}
        </h3>
        <p className="mt-4 text-3xl font-semibold tracking-tight">
          {dossier.price}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink">
            {dossier.status}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
            {dossier.beds}
          </span>
        </div>
      </aside>
    </div>
  );
}
