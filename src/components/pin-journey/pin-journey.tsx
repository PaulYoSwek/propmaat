"use client";

import { useEffect, useState } from "react";
import { PropmaatPinImage } from "@/components/brand/propmaat-pin-image";
import {
  ensureIncreasing,
  pointAlong,
  progressAlongStops,
} from "@/lib/pin-progress";

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
    const desktop = window.matchMedia("(min-width: 1024px)");
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
    };

    const tick = () => {
      const slot = rectOf("propmaat-pin-slot");
      const heading = rectOf("propmaat-pin-automation");

      if (!slot || !heading) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const headingDocTop = heading.top + window.scrollY;
      const headerOffset = 80;
      const autoReady = Math.max(
        1,
        Math.min(headingDocTop - headerOffset, maxScroll),
      );
      const autoEnter = Math.max(1, autoReady * 0.6);
      const stops = ensureIncreasing([0, autoEnter], 80);
      const progress = progressAlongStops(window.scrollY, stops);

      const headingPoint = {
        x: heading.left + heading.width / 2,
        y: heading.bottom,
        scale: heading.height,
      };

      const next = pointAlong(progress, [
        {
          x: slot.left + slot.width / 2,
          y: slot.bottom,
          scale: slot.height,
        },
        headingPoint,
      ]);

      const parkedAtHeading = progress >= 1;
      const phase = parkedAtHeading ? "automation" : "travel";

      document.documentElement.dataset.pinJourney = phase;
      setPose({ ...next, visible: phase === "travel" });

      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      if (media.matches || !desktop.matches) stop();
      else start();
    };

    sync();
    media.addEventListener("change", sync);
    desktop.addEventListener("change", sync);

    return () => {
      media.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
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
