import { slides } from "./slides";

/** Color ramp — one color per section (01–08). */
export const SECTION_COLORS: Record<string, string> = {
  "01": "#a78bfa", // violet
  "02": "#60a5fa", // blue
  "03": "#22d3ee", // cyan
  "04": "#34d399", // emerald
  "05": "#fbbf24", // amber
  "06": "#fb923c", // orange
  "07": "#f43f5e", // rose
  "08": "#ec4899", // pink
};

const DEFAULT_COLOR = "#94a3b8";

/** Extract section number ("01", "02", …) from a slide object. */
function sectionOf(slide: (typeof slides)[number]): string | null {
  if ("number" in slide && slide.type === "section") return slide.number;
  if ("sectionLabel" in slide && typeof slide.sectionLabel === "string" && slide.sectionLabel) {
    const m = slide.sectionLabel.match(/^(\d+)/);
    if (m?.[1]) return m[1];
  }
  return null;
}

/** Pre-computed per-slide section number (null for cover/agenda/end). */
export const slideSections: (string | null)[] = slides.map(sectionOf);

/** Get the section color for a slide index. */
export function colorForSlide(index: number): string {
  const sec = slideSections[index];
  return sec ? SECTION_COLORS[sec] ?? DEFAULT_COLOR : DEFAULT_COLOR;
}

/** Pre-computed tooltip label for each slide. */
export const slideTooltips: string[] = slides.map((s) => {
  if ("title" in s && typeof s.title === "string") return s.title;
  return "";
});
