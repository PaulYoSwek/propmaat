import type { ReactNode } from "react";

export function MockWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(18,20,26,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-[#faf9f6] px-3 py-2">
        <span className="size-2 rounded-full bg-[#e8b4b4]" />
        <span className="size-2 rounded-full bg-[#ead89a]" />
        <span className="size-2 rounded-full bg-[#b8d6b8]" />
        <span className="ml-2 font-mono text-[10px] tracking-wide text-muted">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export function MockSidebar({ items, active }: { items: string[]; active: string }) {
  return (
    <aside className="hidden w-36 shrink-0 border-r border-line bg-[#faf9f6] p-2 sm:block">
      <p className="mb-2 px-2 font-mono text-[10px] font-semibold text-accent">
        PandFlow
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-lg px-2 py-1 font-mono text-[10px] ${
              item === active
                ? "bg-accent-soft font-semibold text-accent"
                : "text-muted"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
