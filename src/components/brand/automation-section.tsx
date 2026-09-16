"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChannelBadge, type ChannelId } from "./channel-icon";
import { PropmaatPinImage } from "./propmaat-pin-image";
import { Container, Eyebrow } from "@/components/ui";
import {
  AUTOMATION_OPEN_EVENT,
  automationChannelHash,
  channelIdFromHash,
  isChannelId,
  scrollToAutomation,
} from "@/lib/automation-channel";

type AutomationChannel = {
  id: ChannelId;
  label: string;
  headline: string;
  body: string;
  shot?: string;
  video?: string;
  shotAlt?: string;
};

function AutomationMedia({
  video,
  poster,
  alt,
}: {
  video?: string;
  poster?: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) {
        node.pause();
        node.currentTime = 0;
        return;
      }
      void node.play();
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [video]);

  return (
    <div className="automation-shot overflow-hidden rounded-xl border border-line bg-surface">
      {video ? (
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className="block h-auto w-full"
        />
      ) : (
        <img
          src={poster}
          alt={alt}
          className="block h-auto w-full"
          draggable={false}
        />
      )}
    </div>
  );
}

const ARROW_MOVE: Record<string, number> = {
  ArrowRight: 1,
  ArrowLeft: -1,
  ArrowDown: 1,
  ArrowUp: -1,
};

export function AutomationSection({
  title,
  heading,
  lead,
  shotHint,
  channels,
}: {
  title: string;
  heading: string;
  lead: string;
  shotHint: string;
  channels: AutomationChannel[];
}) {
  const uid = useId();
  const [activeId, setActiveId] = useState<ChannelId>(channels[0].id);
  const active = channels.find((channel) => channel.id === activeId) ?? channels[0];

  function select(id: ChannelId) {
    setActiveId(id);
    const next = `#${automationChannelHash(id)}`;
    if (window.location.hash !== next) {
      history.replaceState(null, "", next);
    }
  }

  function activate(id: ChannelId) {
    select(id);
    document.getElementById(`${uid}-tab-${id}`)?.focus();
  }

  useEffect(() => {
    const fromHash = channelIdFromHash(window.location.hash);
    if (fromHash) {
      setActiveId(fromHash);
      scrollToAutomation();
    }

    const onOpen = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (isChannelId(id)) setActiveId(id);
    };
    const onPop = () => {
      const id = channelIdFromHash(window.location.hash);
      if (id) setActiveId(id);
    };

    window.addEventListener(AUTOMATION_OPEN_EVENT, onOpen);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener(AUTOMATION_OPEN_EVENT, onOpen);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  return (
    <section
      id="propmaat-automation"
      className="flex flex-col scroll-mt-20 border-y border-line bg-band py-10 sm:py-14"
    >
      <Container className="flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span
            id="propmaat-pin-automation"
            className="propmaat-section-pin pin-static"
          >
            <PropmaatPinImage height={40} />
          </span>
          <Eyebrow>{title}</Eyebrow>
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>

        <div
          role="tablist"
          aria-label={title}
          className="-mx-1 mt-7 flex flex-wrap gap-1.5 px-1 sm:gap-2"
          onKeyDown={(event) => {
            const move = ARROW_MOVE[event.key];
            if (!move) return;
            event.preventDefault();
            const index = channels.findIndex((channel) => channel.id === activeId);
            const next =
              channels[(index + move + channels.length) % channels.length];
            activate(next.id);
          }}
        >
          {channels.map((channel) => {
            const selected = channel.id === activeId;
            return (
              <button
                key={channel.id}
                id={`${uid}-tab-${channel.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(channel.id)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-2.5 py-1.5 text-sm font-semibold transition-colors sm:gap-2.5 sm:px-3 ${
                  selected
                    ? "border-ink bg-surface text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                <span
                  id={`channel-target-${channel.id}`}
                  className="inline-flex"
                >
                  <ChannelBadge
                    id={channel.id}
                    className={`channel-static-target size-9 ${
                      selected ? "border-ink" : ""
                    }`}
                  />
                </span>
                {channel.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${uid}-panel`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${active.id}`}
          className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:gap-14"
        >
          {active.video || active.shot ? (
            <AutomationMedia
              video={active.video}
              poster={active.shot}
              alt={active.shotAlt ?? active.label}
            />
          ) : (
            <div
              className="flex aspect-[1024/554] items-center justify-center rounded-xl border border-dashed border-line bg-surface"
              role="img"
              aria-label={shotHint}
            >
              <span className="px-4 text-xs font-medium text-muted">
                {shotHint}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {active.headline}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {active.body}
            </p>
          </div>
        </div>

        <div className="hidden" aria-hidden>
          {channels.map((channel) =>
            channel.shot && channel.id !== active.id ? (
              <img key={channel.id} src={channel.shot} alt="" />
            ) : null,
          )}
        </div>
      </Container>
    </section>
  );
}
