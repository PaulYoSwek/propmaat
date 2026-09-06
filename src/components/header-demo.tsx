import Link from "next/link";

export function HeaderDemo({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="hidden min-h-11 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-ink transition-colors hover:bg-accent-hover lg:inline-flex"
    >
      {label}
    </Link>
  );
}
