import { CHANNEL_IDS, type ChannelId } from "../components/brand/channel-icon";

export const AUTOMATION_SECTION_ID = "propmaat-automation";
export const AUTOMATION_HASH_PREFIX = "automation-";
export const AUTOMATION_OPEN_EVENT = "propmaat:open-channel";

export function isChannelId(value: string): value is ChannelId {
  return (CHANNEL_IDS as readonly string[]).includes(value);
}

export function automationChannelHash(id: ChannelId) {
  return `${AUTOMATION_HASH_PREFIX}${id}`;
}

export function channelIdFromHash(hash: string): ChannelId | null {
  const value = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!value.startsWith(AUTOMATION_HASH_PREFIX)) return null;
  const id = value.slice(AUTOMATION_HASH_PREFIX.length);
  return isChannelId(id) ? id : null;
}

export function scrollToAutomation() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(AUTOMATION_SECTION_ID)?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

export function openAutomationChannel(id: ChannelId) {
  const next = `#${automationChannelHash(id)}`;
  if (window.location.hash !== next) {
    history.pushState(null, "", next);
  }
  window.dispatchEvent(new CustomEvent(AUTOMATION_OPEN_EVENT, { detail: id }));
  scrollToAutomation();
}
