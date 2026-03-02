import { motion } from "framer-motion";
import type { TwoColSlide as TwoColData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: TwoColData;
  slideNum: number;
  total: number;
}

const colorMap: Record<string, { bg: string; border: string; accent: string; bullet: string }> = {
  emerald: { bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.15)", accent: "#10b981", bullet: "\u2713" },
  rose: { bg: "rgba(244,63,94,0.05)", border: "rgba(244,63,94,0.15)", accent: "#f43f5e", bullet: "\u2717" },
  blue: { bg: "rgba(59,130,246,0.05)", border: "rgba(59,130,246,0.15)", accent: "#3b82f6", bullet: "\u2022" },
};

export function TwoColSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-6xl">
        <motion.h2
          className="font-display text-white mb-2"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        {slide.subtitle && (
          <motion.p
            className="font-body mb-8"
            style={{ color: "#64748b", fontSize: "1.125rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {slide.subtitle}
          </motion.p>
        )}

        <div className="grid grid-cols-2 gap-7">
          {[slide.left, slide.right].map((col, j) => {
            const colors = colorMap[col.color] ?? colorMap.blue!;
            return (
              <motion.div
                key={j}
                className="rounded-2xl p-8"
                style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                initial={{ opacity: 0, x: j === 0 ? -15 : 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + j * 0.1, duration: 0.4 }}
              >
                <h3 className="font-body font-semibold text-white mb-6" style={{ fontSize: "1.5rem" }}>{col.heading}</h3>
                <ul className="space-y-4">
                  {col.items.map((it, k) => (
                    <li key={k} className="font-body flex items-start gap-3" style={{ color: "#cbd5e1", fontSize: "1.125rem" }}>
                      <span style={{ color: colors.accent }}>{colors.bullet}</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {slide.footnote && (
          <motion.p
            className="font-body mt-7"
            style={{ color: "#64748b", fontSize: "1rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <span className="mr-1">&#x1F3AF;</span> {slide.footnote}
          </motion.p>
        )}
      </div>
    </SlideWrapper>
  );
}
