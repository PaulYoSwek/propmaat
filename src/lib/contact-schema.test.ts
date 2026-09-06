import { describe, expect, it } from "vitest";
import { parseContactPayload } from "./contact-schema";

const valid = {
  name: "Anna Peeters",
  office: "Peeters Immo",
  email: "anna@peeters.be",
  seats: 3,
};

describe("parseContactPayload", () => {
  it("accepts a valid payload", () => {
    const result = parseContactPayload(valid);
    expect(result).toEqual({
      ok: true,
      honeypot: false,
      data: valid,
    });
  });

  it("rejects missing required fields", () => {
    const result = parseContactPayload({ ...valid, name: "" });
    expect(result).toEqual({ ok: false, error: "required" });
  });

  it("rejects an invalid email", () => {
    const result = parseContactPayload({ ...valid, email: "not-an-email" });
    expect(result).toEqual({ ok: false, error: "email" });
  });

  it("rejects seats outside 1–99", () => {
    expect(parseContactPayload({ ...valid, seats: 0 })).toEqual({
      ok: false,
      error: "seats",
    });
    expect(parseContactPayload({ ...valid, seats: 100 })).toEqual({
      ok: false,
      error: "seats",
    });
    expect(parseContactPayload({ ...valid, seats: 1.5 })).toEqual({
      ok: false,
      error: "seats",
    });
  });

  it("marks honeypot submissions without failing", () => {
    const result = parseContactPayload({ ...valid, company: "bot" });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.honeypot).toBe(true);
    }
  });

  it("rejects non-objects", () => {
    expect(parseContactPayload(null)).toEqual({ ok: false, error: "invalid" });
    expect(parseContactPayload("x")).toEqual({ ok: false, error: "invalid" });
  });
});
