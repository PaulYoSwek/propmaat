"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { tryPathKey } from "@/i18n/config";
import { PropmaatPin } from "./propmaat-pin";

export function PropmaatWordmark({
  className = "",
  forceVariant,
}: {
  className?: string;
  forceVariant?: "complete" | "slot";
}) {
  const pathname = usePathname();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onHome = tryPathKey(pathname) === "home";
  const variant =
    forceVariant ?? (onHome && !reduceMotion ? "slot" : "complete");

  return (
    <span
      className={`inline-flex items-end text-[22px] leading-none font-extrabold tracking-tight text-ink ${className}`}
      aria-label="Propmaat"
    >
      <span>Pr</span>
      <span
        id="propmaat-pin-slot"
        className="mx-0.5 inline-flex h-[1em] w-[0.95em] items-end justify-center"
      >
        {variant === "complete" ? <PropmaatPin size={20} /> : null}
      </span>
      <span>pmaat</span>
    </span>
  );
}
