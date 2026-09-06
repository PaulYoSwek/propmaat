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
