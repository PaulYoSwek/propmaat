import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
      {children}
    </p>
  );
}

export function primaryButtonClass(extra = "") {
  return `inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-ink transition-colors hover:bg-accent-hover ${extra}`;
}

export function secondaryButtonClass(extra = "") {
  return `inline-flex items-center justify-center rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft/40 ${extra}`;
}
