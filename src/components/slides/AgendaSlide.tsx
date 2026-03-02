import { motion } from "framer-motion";
import type { AgendaSlide as AgendaData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: AgendaData;
  slideNum: number;
  total: number;
}

export function AgendaSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total}>
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-5xl font-display text-white mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="space-y-5">
          {slide.items.map((it, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-6 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + j * 0.07, duration: 0.4 }}
            >
              <span className="text-lg font-mono w-12" style={{ color: "#a78bfa" }}>
                {it.n}
              </span>
              <div className="h-px flex-1 transition-colors duration-300" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="text-xl font-body" style={{ color: "#cbd5e1" }}>
                {it.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
