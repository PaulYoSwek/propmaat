"use client";

import { useEffect, useRef } from "react";
import { ChannelBadge, CHANNEL_IDS } from "@/components/brand/channel-icon";
import {
  journeyLandProgress,
  journeyParked,
  pointAlong,
  scrollProgress,
} from "@/lib/pin-progress";

function rectOf(id: string) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el.getBoundingClientRect();
}

export function ChannelJourney() {
  const nodes = useRef<Partial<Record<(typeof CHANNEL_IDS)[number], HTMLDivElement | null>>>(
    {},
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    let running = false;
    let parked = false;

    const hideFlyers = () => {
      for (const id of CHANNEL_IDS) {
        const node = nodes.current[id];
        if (node) node.style.visibility = "hidden";
      }
    };

    const placeFlyer = (
      id: (typeof CHANNEL_IDS)[number],
      x: number,
      y: number,
      scale: number,
    ) => {
      const node = nodes.current[id];
      if (!node) return;
      node.style.visibility = "visible";
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.width = `${scale}px`;
      node.style.height = `${scale}px`;
    };

    const stop = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      running = false;
      parked = false;
      hideFlyers();
      delete document.documentElement.dataset.channelJourney;
    };

    const tick = () => {
      const pairs = CHANNEL_IDS.map((id) => ({
        id,
        source: rectOf(`channel-source-${id}`),
        target: rectOf(`channel-target-${id}`),
      }));

      if (pairs.some((pair) => !pair.source || !pair.target)) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const firstTarget = pairs[0].target;
      if (!firstTarget) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const heading = document.getElementById("propmaat-pin-automation");
      const headingTop = heading
        ? heading.getBoundingClientRect().top + window.scrollY
        : firstTarget.top + window.scrollY;
      const landY = Math.max(1, Math.min(headingTop - 80, maxScroll));
      const startY = Math.min(landY * 0.06, 48);
      const endY = startY + (landY - startY) * 0.6;
      const rawProgress = scrollProgress(window.scrollY, startY, endY);
      parked = journeyParked(rawProgress, parked);

      if (parked) {
        document.documentElement.dataset.channelJourney = "parked";
        hideFlyers();
        frame = window.requestAnimationFrame(tick);
        return;
      }

      document.documentElement.dataset.channelJourney = "travel";
      const progress = journeyLandProgress(rawProgress);
      for (const pair of pairs) {
        const source = pair.source;
        const target = pair.target;
        if (!source || !target) continue;

        const next = pointAlong(progress, [
          {
            x: source.left + source.width / 2,
            y: source.top + source.height / 2,
            scale: Math.max(source.width, 1),
          },
          {
            x: target.left + target.width / 2,
            y: target.top + target.height / 2,
            scale: Math.max(target.width, 1),
          },
        ]);
        placeFlyer(pair.id, next.x, next.y, next.scale);
      }
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

  return (
    <>
      {CHANNEL_IDS.map((id) => (
        <div
          key={id}
          ref={(node) => {
            nodes.current[id] = node;
          }}
          className="pointer-events-none fixed z-40"
          style={{ visibility: "hidden", transform: "translate(-50%, -50%)" }}
          aria-hidden
        >
          <ChannelBadge id={id} className="h-full w-full" />
        </div>
      ))}
    </>
  );
}
