import { useState } from "react";
import { colorForSlide, slideTooltips } from "../data/sectionColors";

interface Props {
  current: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  goNext: () => void;
  goPrev: () => void;
  goTo: (i: number) => void;
}

export function Navigation({ current, total, isFirst, isLast, goNext, goPrev, goTo }: Props) {
  const activeColor = colorForSlide(current);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-between px-10 py-4 glass-strong">
      <button
        onClick={goPrev}
        disabled={isFirst}
        className="px-6 py-2.5 rounded-xl text-base font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5"
        style={{ color: "#94a3b8" }}
      >
        &larr; Prev
      </button>

      <div className="flex gap-1 relative">
        {Array.from({ length: total }, (_, j) => {
          const dotColor = colorForSlide(j);
          const isActive = j === current;
          const tooltip = slideTooltips[j];
          return (
            <div key={j} className="relative">
              <button
                onClick={() => goTo(j)}
                onMouseEnter={() => setHovered(j)}
                onMouseLeave={() => setHovered(null)}
                className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: isActive ? 28 : 10,
                  background: isActive ? dotColor : hovered === j ? `${dotColor}70` : `${dotColor}30`,
                }}
              />
              {hovered === j && tooltip && (
                <div
                  className="absolute bottom-full left-1/2 mb-3 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div
                    className="whitespace-nowrap rounded-lg px-3 py-1.5 font-body"
                    style={{
                      background: "#1e293b",
                      border: `1px solid ${dotColor}40`,
                      color: "#e2e8f0",
                      fontSize: "0.8125rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span style={{ color: dotColor, fontWeight: 600 }}>{j + 1}</span>
                    <span style={{ color: "#475569", margin: "0 6px" }}>&middot;</span>
                    {tooltip}
                  </div>
                  {/* Arrow */}
                  <div
                    className="absolute left-1/2 top-full"
                    style={{
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "5px solid #1e293b",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={goNext}
        disabled={isLast}
        className="px-6 py-2.5 rounded-xl text-base font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        style={{
          background: `${activeColor}26`,
          color: activeColor,
        }}
      >
        Next &rarr;
      </button>
    </div>
  );
}
