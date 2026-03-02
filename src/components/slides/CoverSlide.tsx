import { motion } from "framer-motion";
import type { CoverSlide as CoverData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: CoverData;
  slideNum: number;
  total: number;
}

export function CoverSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total}>
      <div className="text-center">
        <motion.div
          className="text-9xl mb-8 inline-block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 40px rgba(167,139,250,0.3))",
          }}
        >
          {slide.emoji}
        </motion.div>

        <motion.h1
          className="text-8xl font-display text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="text-2xl font-body font-light"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {slide.subtitle}
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
