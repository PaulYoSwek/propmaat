import { describe, expect, it } from "vitest";
import {
  internalPath,
  isDutchSlugUnderEn,
  isEnglishPublicSlug,
  localizedPath,
  pathToKey,
  resolveRequestPath,
  swapLocalePath,
} from "./config";

describe("localizedPath", () => {
  it("keeps Dutch URLs unprefixed", () => {
    expect(localizedPath("nl", "home")).toBe("/");
    expect(localizedPath("nl", "functies")).toBe("/functies");
    expect(localizedPath("nl", "prijzen")).toBe("/prijzen");
    expect(localizedPath("nl", "contact")).toBe("/contact");
    expect(localizedPath("nl", "privacy")).toBe("/privacy");
    expect(localizedPath("nl", "cookies")).toBe("/cookies");
    expect(localizedPath("nl", "voorwaarden")).toBe("/voorwaarden");
    expect(localizedPath("nl", "stappen")).toBe("/aan-de-slag");
    expect(localizedPath("nl", "faq")).toBe("/faq");
  });

  it("prefixes English and uses English slugs", () => {
    expect(localizedPath("en", "home")).toBe("/en");
    expect(localizedPath("en", "functies")).toBe("/en/features");
    expect(localizedPath("en", "prijzen")).toBe("/en/pricing");
    expect(localizedPath("en", "contact")).toBe("/en/contact");
    expect(localizedPath("en", "privacy")).toBe("/en/privacy");
    expect(localizedPath("en", "cookies")).toBe("/en/cookies");
    expect(localizedPath("en", "voorwaarden")).toBe("/en/terms");
    expect(localizedPath("en", "stappen")).toBe("/en/get-started");
    expect(localizedPath("en", "faq")).toBe("/en/faq");
  });
});

describe("swapLocalePath", () => {
  it("swaps / to /en and back", () => {
    expect(swapLocalePath("/", "en")).toBe("/en");
    expect(swapLocalePath("/en", "nl")).toBe("/");
  });

  it("swaps /functies to /en/features and back", () => {
    expect(swapLocalePath("/functies", "en")).toBe("/en/features");
    expect(swapLocalePath("/en/features", "nl")).toBe("/functies");
  });

  it("swaps /prijzen to /en/pricing and back", () => {
    expect(swapLocalePath("/prijzen", "en")).toBe("/en/pricing");
    expect(swapLocalePath("/en/pricing", "nl")).toBe("/prijzen");
  });

  it("swaps /aan-de-slag to /en/get-started and back", () => {
    expect(swapLocalePath("/aan-de-slag", "en")).toBe("/en/get-started");
    expect(swapLocalePath("/en/get-started", "nl")).toBe("/aan-de-slag");
  });

  it("understands rewritten /nl and /en Dutch slugs", () => {
    expect(pathToKey("/nl/functies")).toBe("functies");
    expect(swapLocalePath("/en/functies", "nl")).toBe("/functies");
  });
});

describe("internalPath", () => {
  it("maps public URLs onto Dutch App Router folders", () => {
    expect(internalPath("nl", "/")).toBe("/nl");
    expect(internalPath("nl", "/functies")).toBe("/nl/functies");
    expect(internalPath("en", "/en/features")).toBe("/en/functies");
    expect(internalPath("en", "/en/pricing")).toBe("/en/prijzen");
    expect(internalPath("en", "/en/get-started")).toBe("/en/aan-de-slag");
    expect(internalPath("en", "/en/faq")).toBe("/en/faq");
    expect(internalPath("en", "/en/terms")).toBe("/en/voorwaarden");
    expect(internalPath("en", "/en/cookies")).toBe("/en/cookies");
  });
});

describe("resolveRequestPath", () => {
  it("rewrites Dutch URLs under /nl", () => {
    expect(resolveRequestPath("/")).toEqual({
      action: "rewrite",
      locale: "nl",
      pathname: "/nl",
    });
    expect(resolveRequestPath("/functies")).toEqual({
      action: "rewrite",
      locale: "nl",
      pathname: "/nl/functies",
    });
  });

  it("rewrites English feature slugs to Dutch folders", () => {
    expect(resolveRequestPath("/en/features")).toEqual({
      action: "rewrite",
      locale: "en",
      pathname: "/en/functies",
    });
    expect(resolveRequestPath("/en")).toEqual({
      action: "next",
      locale: "en",
      pathname: "/en",
    });
  });

  it("redirects /nl and Dutch slugs under /en", () => {
    expect(resolveRequestPath("/nl/prijzen")).toEqual({
      action: "redirect",
      locale: "nl",
      pathname: "/prijzen",
    });
    expect(resolveRequestPath("/en/functies")).toEqual({
      action: "redirect",
      locale: "en",
      pathname: "/en/features",
    });
    expect(resolveRequestPath("/en/aan-de-slag")).toEqual({
      action: "redirect",
      locale: "en",
      pathname: "/en/get-started",
    });
    expect(resolveRequestPath("/en/voorwaarden")).toEqual({
      action: "redirect",
      locale: "en",
      pathname: "/en/terms",
    });
    expect(resolveRequestPath("/en/terms")).toEqual({
      action: "rewrite",
      locale: "en",
      pathname: "/en/voorwaarden",
    });
  });
});

describe("public slug helpers", () => {
  it("detects canonical English slugs", () => {
    expect(isEnglishPublicSlug("/en")).toBe(true);
    expect(isEnglishPublicSlug("/en/features")).toBe(true);
    expect(isEnglishPublicSlug("/en/functies")).toBe(false);
  });

  it("detects Dutch slugs under /en that should redirect", () => {
    expect(isDutchSlugUnderEn("/en/functies")).toBe(true);
    expect(isDutchSlugUnderEn("/en/features")).toBe(false);
    expect(isDutchSlugUnderEn("/en/contact")).toBe(false);
  });
});
