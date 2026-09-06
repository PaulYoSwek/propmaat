"use client";

import { useEffect, useState } from "react";
import { PropmaatPin } from "@/components/brand/propmaat-pin";
import { pointAlong, scrollProgress, type Waypoint } from "@/lib/pin-progress";

const BEAT_IDS = ["pin-beat-0", "pin-beat-1", "pin-beat-2"] as const;
const LAND_AT = 0.92;

function centerOf(id: string): Waypoint | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
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
    if (media.matches) return;

    document.documentElement.dataset.pinJourney = "on";

    let frame = 0;

    const tick = () => {
      const slot = centerOf("propmaat-pin-slot");
      const house = centerOf("propmaat-pin-target");
      const beats = BEAT_IDS.map((id) => {
        const point = centerOf(id);
        return point ? { ...point, scale: 1.35 } : null;
      });

      if (!slot || !house || beats.some((b) => b === null)) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const houseDocY = house.y + window.scrollY;
      const progress = scrollProgress(
        window.scrollY,
        0,
        Math.max(1, houseDocY - window.innerHeight * 0.42),
      );

      const waypoints: Waypoint[] = [
        { x: slot.x, y: slot.y, scale: 1 },
        ...(beats as Waypoint[]),
        { x: house.x, y: house.y - 28, scale: 1.15 },
      ];

      const next = pointAlong(progress, waypoints);
      setPose({ ...next, visible: true });

      const dossier = document.getElementById("propmaat-dossier");
      dossier?.classList.toggle("is-landed", progress >= LAND_AT);

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      delete document.documentElement.dataset.pinJourney;
      document.getElementById("propmaat-dossier")?.classList.remove("is-landed");
    };
  }, []);

  if (!pose?.visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 text-ink"
      style={{
        left: pose.x,
        top: pose.y,
        transform: `translate(-50%, -100%) scale(${pose.scale})`,
      }}
      aria-hidden
    >
      <PropmaatPin size={22} />
    </div>
  );
}
