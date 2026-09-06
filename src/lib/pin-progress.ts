export type Waypoint = {
  x: number;
  y: number;
  scale?: number;
};

export function scrollProgress(
  scrollY: number,
  startY: number,
  endY: number,
): number {
  if (endY <= startY) return 0;
  const t = (scrollY - startY) / (endY - startY);
  return Math.min(1, Math.max(0, t));
}

export const JOURNEY_PARK_VISUAL = 0.98;

export function journeyParkRaw(visual = JOURNEY_PARK_VISUAL): number {
  return 1 - (1 - visual) ** (1 / 3);
}

export function journeyParked(
  progress: number,
  wasParked: boolean,
  releaseProgress = 0.5,
): boolean {
  if (wasParked) return progress > releaseProgress;
  return easeOutCubic(progress) >= JOURNEY_PARK_VISUAL;
}

export function journeyLandProgress(progress: number): number {
  return easeOutCubic(Math.min(1, progress / journeyParkRaw()));
}

export function journeyEndY(
  targetDocumentTop: number,
  viewportHeight: number,
  maxScroll: number,
  viewOffset = 0.42,
): number {
  if (maxScroll <= 1) return 1;
  const preferred = targetDocumentTop - viewportHeight * viewOffset;
  return Math.max(1, Math.min(preferred, maxScroll));
}

export function dropEase(progress: number): number {
  const t = Math.min(1, Math.max(0, progress));
  if (t <= 0.1) return 0;
  const u = (t - 0.1) / 0.9;
  return u * u;
}

export function ensureIncreasing(stops: number[], gap = 1): number[] {
  const out: number[] = [];
  for (const stop of stops) {
    if (out.length === 0) {
      out.push(stop);
      continue;
    }
    out.push(Math.max(out[out.length - 1] + gap, stop));
  }
  return out;
}

export function progressAlongStops(scrollY: number, stops: number[]): number {
  if (stops.length < 2) return 0;
  if (scrollY <= stops[0]) return 0;
  const last = stops.length - 1;
  if (scrollY >= stops[last]) return 1;

  for (let i = 0; i < last; i += 1) {
    const a = stops[i];
    const b = stops[i + 1];
    if (scrollY > b && i < last - 1) continue;
    const local = b <= a ? 1 : (scrollY - a) / (b - a);
    return (i + Math.min(1, Math.max(0, local))) / last;
  }

  return 1;
}

export function smoothstep(progress: number): number {
  const t = Math.min(1, Math.max(0, progress));
  return t * t * (3 - 2 * t);
}

export function easeOutCubic(progress: number): number {
  const t = Math.min(1, Math.max(0, progress));
  return 1 - (1 - t) ** 3;
}

export function pointAlong(
  progress: number,
  waypoints: Waypoint[],
): { x: number; y: number; scale: number } {
  if (waypoints.length === 0) return { x: 0, y: 0, scale: 1 };
  if (waypoints.length === 1) {
    const only = waypoints[0];
    return { x: only.x, y: only.y, scale: only.scale ?? 1 };
  }

  const t = Math.min(1, Math.max(0, progress));
  const lastIndex = waypoints.length - 1;
  const scaled = t * lastIndex;
  const index = Math.min(lastIndex - 1, Math.floor(scaled));
  const local = scaled - index;
  const a = waypoints[index];
  const b = waypoints[index + 1];
  const aScale = a.scale ?? 1;
  const bScale = b.scale ?? 1;
  return {
    x: a.x + (b.x - a.x) * local,
    y: a.y + (b.y - a.y) * local,
    scale: aScale + (bScale - aScale) * local,
  };
}
