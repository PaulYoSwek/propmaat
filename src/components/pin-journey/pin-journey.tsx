"use client";

import { useEffect, useState } from "react";
import { PropmaatPinImage } from "@/components/brand/propmaat-pin-image";
import {
  dropEase,
  journeyEndY,
  pointAlong,
  scrollProgress,
} from "@/lib/pin-progress";

const LAND_AT = 0.75;

function rectOf(id: string) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el.getBoundingClientRect();
}

export function PinJourney() {
  const [pose, setPose] = useState<{
    x: number;
    y: number;
    scale: number;
    visible: boolean;
  } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let running = false;

    const stop = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      running = false;
      delete document.documentElement.dataset.pinJourney;
      setPose(null);
      document.getElementById("propmaat-dossier")?.classList.remove("is-landed");
    };

    const tick = () => {
      const slot = rectOf("propmaat-pin-slot");
      const target = rectOf("propmaat-pin-target");

      if (!slot || !target) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const startY = 0;
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const endY = journeyEndY(
        target.top + window.scrollY,
        window.innerHeight,
        maxScroll,
      );
      const progress = dropEase(scrollProgress(window.scrollY, startY, endY));

      const next = pointAlong(progress, [
        {
          x: slot.left + slot.width / 2,
          y: slot.bottom,
          scale: slot.height,
        },
        {
          x: target.left + target.width / 2,
          y: target.top + target.height / 2,
          scale: 44,
        },
      ]);

      setPose({ ...next, visible: true });
      document.documentElement.dataset.pinJourney = "on";
      document
        .getElementById("propmaat-dossier")
        ?.classList.toggle("is-landed", progress >= LAND_AT);

      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      if (media.matches) stop();
      else start();
    };

    sync();
    media.addEventListener("change", sync);

    return () => {
      media.removeEventListener("change", sync);
      stop();
    };
  }, []);

  if (!pose?.visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left: pose.x,
        top: pose.y,
        transform: "translate(-50%, -100%)",
      }}
      aria-hidden
    >
      <PropmaatPinImage height={Math.max(18, pose.scale)} />
    </div>
  );
}
