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
      <div className="w-full max-w-5xl">
        <motion.h2
          className="text-5xl font-display text-white mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="grid grid-cols-2 gap-6">
          {sides.map(({ data: side, bg, border, flowBg, flowColor }, j) => (
            <motion.div
              key={j}
              className="rounded-2xl p-7"
              style={{ background: bg, border: `1px solid ${border}` }}
              initial={{ opacity: 0, x: j === 0 ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + j * 0.1, duration: 0.4 }}
            >
              <div className="text-4xl mb-3">{side.emoji}</div>
              <h3 className="text-2xl font-display text-white mb-3">{side.label}</h3>
              <p
                className="text-sm font-mono px-4 py-2 rounded-lg mb-5 inline-block"
                style={{ background: flowBg, color: flowColor }}
              >
                {side.flow}
              </p>
              <ul className="space-y-2">
                {side.points.map((p, k) => (
                  <li key={k} className="font-body text-base" style={{ color: "#cbd5e1" }}>
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
