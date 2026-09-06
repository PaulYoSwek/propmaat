"use client";

import { useEffect, useState } from "react";
import { PropmaatPinImage } from "./propmaat-pin-image";

export function PropmaatHeroMark() {
  const [showPin, setShowPin] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);

    const root = document.documentElement;
    const syncJourney = () => {
      setShowPin(root.dataset.pinJourney !== "on" || media.matches);
    };
    syncJourney();
    const observer = new MutationObserver(syncJourney);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-pin-journey"],
    });

    return () => {
      media.removeEventListener("change", syncMotion);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="propmaat-hero-mark flex items-end justify-center"
      role="img"
      aria-label="Propmaat"
    >
      <img
        src="/brand/pr.png"
        alt=""
        className="propmaat-hero-pr select-none"
        draggable={false}
      />
      <span id="propmaat-pin-slot" className="propmaat-hero-pin">
        {showPin || reduceMotion ? (
          <PropmaatPinImage className="h-full w-full" height={92} />
        ) : null}
      </span>
      <img
        src="/brand/pmaat.png"
        alt=""
        className="propmaat-hero-pmaat select-none"
        draggable={false}
      />
    </div>
  );
}
