import { motion } from "framer-motion";
import type { SectionSlide as SectionData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";
import { SectionIcon } from "../SectionIcon";

interface Props {
  slide: SectionData;
  slideNum: number;
  total: number;
}

export function SectionSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total}>
      <div className="text-center">
        <motion.div
          className="mb-8 inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionIcon icon={slide.icon} />
        </motion.div>

        <motion.div
          className="font-mono tracking-widest mb-5"
          style={{ color: "#a78bfa", fontSize: "1.25rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {slide.number}
        </motion.div>

        <motion.h2
          className="font-display text-white tracking-tight"
          style={{ fontSize: "4.5rem", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {slide.title}
        </motion.h2>

        <motion.div
          className="w-28 h-1 mx-auto mt-10 rounded-full"
          style={{
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
      </div>
    </SlideWrapper>
  );
}
