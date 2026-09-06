import { describe, expect, it } from "vitest";
import {
  dropEase,
  ensureIncreasing,
  journeyEndY,
  journeyLandProgress,
  journeyParked,
  pointAlong,
  progressAlongStops,
  scrollProgress,
  easeOutCubic,
  smoothstep,
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

describe("progressAlongStops", () => {
  const stops = [0, 100, 200, 300];

  it("stays at the first stop until you scroll", () => {
    expect(progressAlongStops(-20, stops)).toBe(0);
    expect(progressAlongStops(0, stops)).toBe(0);
  });

  it("reaches each stop at equal progress steps", () => {
    expect(progressAlongStops(100, stops)).toBeCloseTo(1 / 3);
    expect(progressAlongStops(200, stops)).toBeCloseTo(2 / 3);
    expect(progressAlongStops(300, stops)).toBe(1);
  });

  it("interpolates between stops", () => {
    expect(progressAlongStops(50, stops)).toBeCloseTo(1 / 6);
  });

  it("clamps past the last stop", () => {
    expect(progressAlongStops(800, stops)).toBe(1);
  });
});

describe("ensureIncreasing", () => {
  it("pushes later stops forward when they collide", () => {
    expect(ensureIncreasing([0, 10, 8, 40], 4)).toEqual([0, 10, 14, 40]);
  });
});

describe("smoothstep", () => {
  it("eases the midpoint", () => {
    expect(smoothstep(0)).toBe(0);
    expect(smoothstep(1)).toBe(1);
    expect(smoothstep(0.5)).toBe(0.5);
    expect(smoothstep(0.25)).toBeCloseTo(0.15625);
  });
});

describe("journeyParked", () => {
  it("parks once the eased landing has visually settled", () => {
    expect(journeyParked(0.72, false)).toBe(false);
    expect(journeyParked(0.73, false)).toBe(true);
    expect(journeyParked(1, false)).toBe(true);
  });

  it("stays parked through small scroll-back so the landing does not bounce", () => {
    expect(journeyParked(0.6, true)).toBe(true);
    expect(journeyParked(0.51, true)).toBe(true);
  });

  it("releases only after scrolling back up through the travel range", () => {
    expect(journeyParked(0.5, true)).toBe(false);
    expect(journeyParked(0.2, true)).toBe(false);
  });

  it("lands on the target at the same moment it parks", () => {
    expect(journeyLandProgress(0)).toBe(0);
    expect(journeyLandProgress(0.73)).toBe(1);
    expect(journeyLandProgress(1)).toBe(1);
  });
});

describe("easeOutCubic", () => {
  it("covers more ground early", () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
    expect(easeOutCubic(0.5)).toBeCloseTo(0.875);
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
