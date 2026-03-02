import { motion } from "framer-motion";
import type { FlowchartSlide as FlowchartData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: FlowchartData;
  slideNum: number;
  total: number;
}

export function FlowchartSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-5xl font-display text-white mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="space-y-4">
          {slide.decisions.map((d, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + j * 0.08, duration: 0.4 }}
            >
              <div className="flex-1 glass rounded-xl p-5">
                <p className="font-body text-base" style={{ color: "#cbd5e1" }}>
                  {d.q}
                </p>
              </div>

              <motion.span
                className="text-xl"
                style={{ color: "#4a5568" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + j * 0.08, duration: 0.3 }}
              >
                &rarr;
              </motion.span>

              <div
                className="rounded-xl px-6 py-4 flex items-center gap-3 min-w-56"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  border: "1px solid rgba(167,139,250,0.15)",
                }}
              >
                <span className="text-xl">{d.icon}</span>
                <span className="font-body text-base font-medium" style={{ color: "#c4b5fd" }}>
                  {d.a}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
