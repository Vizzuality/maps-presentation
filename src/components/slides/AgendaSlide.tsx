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
      <div className="w-full max-w-5xl">
        <motion.h2
          className="font-display text-white mb-14"
          style={{ fontSize: "4rem", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="space-y-6">
          {slide.items.map((it, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + j * 0.07, duration: 0.4 }}
            >
              <span className="text-xl font-mono w-14" style={{ color: "#a78bfa" }}>
                {it.n}
              </span>
              <div className="h-px flex-1 transition-colors duration-300" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="font-body" style={{ color: "#cbd5e1", fontSize: "1.375rem" }}>
                {it.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
