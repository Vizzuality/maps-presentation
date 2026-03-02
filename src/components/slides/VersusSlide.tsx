import { motion } from "framer-motion";
import type { VersusSlide as VersusData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: VersusData;
  slideNum: number;
  total: number;
}

export function VersusSlide({ slide, slideNum, total }: Props) {
  const sides = [
    { data: slide.left, bg: "rgba(251,146,60,0.05)", border: "rgba(251,146,60,0.15)", flowBg: "rgba(251,146,60,0.08)", flowColor: "#fb923c" },
    { data: slide.right, bg: "rgba(139,92,246,0.05)", border: "rgba(139,92,246,0.15)", flowBg: "rgba(139,92,246,0.08)", flowColor: "#a78bfa" },
  ];

  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-6xl">
        <motion.h2
          className="font-display text-white mb-10"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="grid grid-cols-2 gap-7">
          {sides.map(({ data: side, bg, border, flowBg, flowColor }, j) => (
            <motion.div
              key={j}
              className="rounded-2xl p-8"
              style={{ background: bg, border: `1px solid ${border}` }}
              initial={{ opacity: 0, x: j === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + j * 0.1, duration: 0.4 }}
            >
              <div className="text-5xl mb-4">{side.emoji}</div>
              <h3 className="font-display text-white mb-4" style={{ fontSize: "2rem" }}>{side.label}</h3>
              <p
                className="font-mono px-4 py-2.5 rounded-lg mb-6 inline-block"
                style={{ background: flowBg, color: flowColor, fontSize: "0.875rem" }}
              >
                {side.flow}
              </p>
              <ul className="space-y-3">
                {side.points.map((p, k) => (
                  <li key={k} className="font-body" style={{ color: "#cbd5e1", fontSize: "1.125rem" }}>
                    &bull; {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
