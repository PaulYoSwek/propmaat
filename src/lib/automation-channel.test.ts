import { describe, expect, it } from "vitest";
import {
  automationChannelHash,
  channelIdFromHash,
  isChannelId,
} from "./automation-channel";

describe("channelIdFromHash", () => {
  it("reads a channel from an automation hash", () => {
    expect(channelIdFromHash("#automation-signing")).toBe("signing");
    expect(channelIdFromHash("automation-agenda")).toBe("agenda");
  });

  it("rejects unknown hashes", () => {
    expect(channelIdFromHash("#propmaat-automation")).toBeNull();
    expect(channelIdFromHash("#automation-fax")).toBeNull();
    expect(channelIdFromHash("")).toBeNull();
  });
});

describe("automationChannelHash", () => {
  it("builds a stable hash", () => {
    expect(automationChannelHash("mail")).toBe("automation-mail");
    expect(isChannelId("whatsapp")).toBe(true);
    expect(isChannelId("fax")).toBe(false);
  });
});
