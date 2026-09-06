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
  const [journeyOn, setJourneyOn] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setJourneyOn(root.dataset.pinJourney === "on");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-pin-journey"],
    });
    return () => observer.disconnect();
  }, []);

  const onHome = tryPathKey(pathname) === "home";
  const variant =
    forceVariant ?? (onHome && journeyOn && !reduceMotion ? "slot" : "complete");

  return (
    <span
      className={`inline-flex items-end text-[22px] leading-none font-extrabold tracking-tight text-ink ${className}`}
      role="img"
      aria-label="Propmaat"
    >
      <span>Pr</span>
      <span
        id={forceVariant !== "complete" ? "propmaat-pin-slot" : undefined}
        className="mx-0.5 inline-flex h-[1em] w-[0.95em] items-end justify-center"
      >
        {variant === "complete" ? <PropmaatPin size={20} /> : null}
      </span>
      <span>pmaat</span>
    </span>
  );
}
