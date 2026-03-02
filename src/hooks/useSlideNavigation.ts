import { useState, useEffect, useCallback } from "react";
import { slides } from "../data/slides";

const total = slides.length;

export function useSlideNavigation() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(
    () => setCurrent((c) => Math.min(c + 1, total - 1)),
    [],
  );
  const goPrev = useCallback(
    () => setCurrent((c) => Math.max(c - 1, 0)),
    [],
  );
  const goTo = useCallback(
    (index: number) => setCurrent(Math.max(0, Math.min(index, total - 1))),
    [],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  return {
    current,
    total,
    progress: (current + 1) / total,
    slide: slides[current]!,
    goNext,
    goPrev,
    goTo,
    isFirst: current === 0,
    isLast: current === total - 1,
  };
}
