/** Scroll story: 7 narrative beats inside one damped scroll track (0→1). */
export const SCENE_COUNT = 7;
/** Extra scroll length for full-system beat + comfortable exit. */
export const SCROLL_PAGES = 8;

export const COLORS = {
  core: "#a78bfa",
  cyan: "#22d3ee",
  magenta: "#e879f9",
  blue: "#3b82f6",
  purple: "#8b5cf6",
  grid: "#64748b",
  dim: "#1e293b",
} as const;

/** Normalized start (0–1) for each scene window. */
export function sceneStart(index: number) {
  return index / SCENE_COUNT;
}
