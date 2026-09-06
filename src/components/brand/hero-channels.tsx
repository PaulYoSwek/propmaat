"use client";

import { ChannelBadge, type ChannelId } from "./channel-icon";
import {
  automationChannelHash,
  openAutomationChannel,
} from "@/lib/automation-channel";

export function HeroChannels({
  items,
}: {
  items: { id: ChannelId; label: string }[];
}) {
  return (
    <div className="animate-rise delay-1 flex w-full flex-col items-start">
      <ul className="flex flex-wrap items-start justify-start gap-4 sm:gap-8">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${automationChannelHash(item.id)}`}
              onClick={(event) => {
                event.preventDefault();
                openAutomationChannel(item.id);
              }}
              className="group flex flex-col items-center gap-2 rounded-lg text-ink outline-offset-4"
            >
              <span id={`channel-source-${item.id}`} className="inline-flex">
                <ChannelBadge
                  id={item.id}
                  className="channel-static-source size-10 transition-colors group-hover:border-ink"
                />
              </span>
              <span className="channel-static-source text-xs font-semibold tracking-wide">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
