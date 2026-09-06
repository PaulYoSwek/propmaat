import { describe, expect, it } from "vitest";
import {
  dropEase,
  journeyEndY,
  pointAlong,
  scrollProgress,
} from "./pin-progress";

describe("scrollProgress", () => {
  it("clamps below the start to 0", () => {
    expect(scrollProgress(-20, 0, 400)).toBe(0);
  });

  it("clamps past the end to 1", () => {
    expect(scrollProgress(800, 0, 400)).toBe(1);
  });

  it("returns the midpoint", () => {
    expect(scrollProgress(200, 0, 400)).toBe(0.5);
  });

  it("returns 0 when the range is empty or inverted", () => {
    expect(scrollProgress(50, 100, 100)).toBe(0);
    expect(scrollProgress(50, 200, 100)).toBe(0);
  });
});

describe("pointAlong", () => {
  it("returns the origin when there are no waypoints", () => {
    expect(pointAlong(0.5, [])).toEqual({ x: 0, y: 0, scale: 1 });
  });

  it("returns the only waypoint", () => {
    expect(pointAlong(0.8, [{ x: 10, y: 20, scale: 1.2 }])).toEqual({
      x: 10,
      y: 20,
      scale: 1.2,
    });
  });

  it("defaults a missing scale to 1", () => {
    expect(pointAlong(0, [{ x: 3, y: 4 }])).toEqual({ x: 3, y: 4, scale: 1 });
  });

  it("interpolates the midpoint of two waypoints", () => {
    expect(
      pointAlong(0.5, [
        { x: 0, y: 0, scale: 1 },
        { x: 10, y: 20, scale: 1.4 },
      ]),
    ).toEqual({ x: 5, y: 10, scale: 1.2 });
  });

  it("clamps progress outside 0–1", () => {
    const waypoints = [
      { x: 0, y: 0, scale: 1 },
      { x: 10, y: 0, scale: 2 },
    ];
    expect(pointAlong(-1, waypoints)).toEqual({ x: 0, y: 0, scale: 1 });
    expect(pointAlong(2, waypoints)).toEqual({ x: 10, y: 0, scale: 2 });
  });
});

describe("journeyEndY", () => {
  it("clamps the landing scroll so the pin can always reach the map", () => {
    expect(journeyEndY(1600, 1100, 1080)).toBe(1080);
  });

  it("uses the preferred viewport offset when there is enough page", () => {
    expect(journeyEndY(2000, 1000, 3000, 0.4)).toBe(1600);
  });

  it("returns 1 when the page cannot scroll", () => {
    expect(journeyEndY(800, 1100, 0)).toBe(1);
  });
});

describe("dropEase", () => {
  it("holds the pin in place for the first tenth of the scroll", () => {
    expect(dropEase(0)).toBe(0);
    expect(dropEase(0.1)).toBe(0);
  });

  it("eases in so the pin falls toward the map", () => {
    expect(dropEase(0.55)).toBeCloseTo(0.25);
    expect(dropEase(1)).toBe(1);
  });

  it("clamps outside 0–1", () => {
    expect(dropEase(-1)).toBe(0);
    expect(dropEase(2)).toBe(1);
  });
});
