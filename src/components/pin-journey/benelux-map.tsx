import { PropmaatPinImage } from "@/components/brand/propmaat-pin-image";

export function BeneluxMap({ label }: { label: string }) {
  return (
    <div className="relative min-h-[min(64vh,36rem)] overflow-hidden rounded-[2rem] border border-line bg-surface">
      <svg
        viewBox="0 0 400 520"
        className="h-full w-full"
        role="img"
        aria-label={label}
      >
        <rect width="400" height="520" fill="#F3F0E8" />
        <path
          d="M-20 -10C48 86 28 176 14 256c-12 80 20 154 8 226 52 42 136 24 208 36 92 16 170-8 252 22V-10H-20Z"
          fill="#E1E6E2"
        />

        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={28 + i * 48}
            y1="0"
            x2={28 + i * 48}
            y2="520"
            stroke="#DDD8CE"
            strokeWidth="0.55"
          />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={20 + i * 52}
            x2="400"
            y2={20 + i * 52}
            stroke="#DDD8CE"
            strokeWidth="0.55"
          />
        ))}

        <path
          d="M280.3,53.3 L334.8,56.2 L347.1,91.9 L330.7,188.5 L314.1,228.1 L274.7,228.2 L285.7,338.7 L249.7,314.1 L208.1,267.9 L147.3,289.8 L99.3,281.5 L133.1,252.6 L190.6,97.4 L280.3,53.3 Z"
          fill="#EDE8DC"
          stroke="#2D2D2D"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <path
          d="M99.3,281.5 L147.3,289.8 L208.1,267.9 L249.7,314.1 L285.7,338.7 L278.3,410.0 L261.2,413.9 L254.1,473.1 L196.7,425.0 L163.0,433.2 L117.2,383.5 L86.7,341.2 L56.2,339.4 L46.7,302.3 L99.3,281.5 Z"
          fill="#EDE8DC"
          stroke="#2D2D2D"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        <text
          x="250"
          y="150"
          textAnchor="middle"
          fill="#6B6860"
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          letterSpacing="0.22em"
        >
          NEDERLAND
        </text>
        <text
          x="168"
          y="390"
          textAnchor="middle"
          fill="#6B6860"
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          letterSpacing="0.22em"
        >
          BELGIË
        </text>

        <circle
          id="propmaat-pin-target"
          cx="170.5"
          cy="294.8"
          r="5.5"
          fill="#2D2D2D"
        />
        <circle cx="170.5" cy="294.8" r="15" fill="#2D2D2D" opacity="0.1" />
      </svg>

      <div className="pin-static pointer-events-none absolute top-[56.7%] left-[42.6%] -translate-x-1/2 -translate-y-full">
        <PropmaatPinImage height={44} />
      </div>
    </div>
  );
}
