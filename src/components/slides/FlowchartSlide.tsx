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
      <div className="w-full max-w-5xl">
        <motion.h2
          className="font-display text-white mb-10"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="space-y-5">
          {slide.decisions.map((d, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + j * 0.08, duration: 0.4 }}
            >
              <div className="flex-1 glass rounded-xl p-6">
                <p className="font-body" style={{ color: "#cbd5e1", fontSize: "1.125rem" }}>
                  {d.q}
                </p>
              </div>

              <motion.span
                style={{ color: "#4a5568", fontSize: "1.5rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + j * 0.08, duration: 0.3 }}
              >
                &rarr;
              </motion.span>

              <div
                className="rounded-xl px-7 py-5 flex items-center gap-4 min-w-64"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  border: "1px solid rgba(167,139,250,0.15)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{d.icon}</span>
                <span className="font-body font-medium" style={{ color: "#c4b5fd", fontSize: "1.125rem" }}>
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
