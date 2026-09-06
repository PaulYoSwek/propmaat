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
      setShowPin(!root.dataset.pinJourney || media.matches);
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
    <div className="propmaat-hero-mark" role="img" aria-label="Propmaat">
      <span className="propmaat-hero-ch" data-k="Pr" aria-hidden>
        P
      </span>
      <span className="propmaat-hero-ch" aria-hidden>
        r
      </span>
      <span id="propmaat-pin-slot" className="propmaat-hero-pin">
        {showPin || reduceMotion ? (
          <PropmaatPinImage className="h-full w-full" />
        ) : null}
      </span>
      <span className="propmaat-hero-ch" data-k="pm" aria-hidden>
        p
      </span>
      <span className="propmaat-hero-ch" data-k="ma" aria-hidden>
        m
      </span>
      <span className="propmaat-hero-ch" data-k="aa" aria-hidden>
        a
      </span>
      <span className="propmaat-hero-ch" data-k="at" aria-hidden>
        a
      </span>
      <span className="propmaat-hero-ch" aria-hidden>
        t
      </span>
    </div>
  );
}
