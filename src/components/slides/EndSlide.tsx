import { motion } from "framer-motion";
import type { EndSlide as EndData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: EndData;
  slideNum: number;
  total: number;
}

export function EndSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total}>
      <div className="text-center">
        <motion.div
          className="mb-10 inline-block"
          style={{
            fontSize: "8rem",
            lineHeight: 1,
            filter: "drop-shadow(0 0 60px rgba(99,102,241,0.4))",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {slide.emoji}
        </motion.div>

        <motion.h1
          className="font-display text-white mb-8"
          style={{ fontSize: "6rem", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="font-body"
          style={{ color: "#94a3b8", fontSize: "1.75rem" }}
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
