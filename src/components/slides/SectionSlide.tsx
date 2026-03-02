import { motion } from "framer-motion";
import type { SectionSlide as SectionData } from "../../data/slides";
import { SectionIcon } from "../SectionIcon";

interface Props {
  slide: SectionData;
  slideNum: number;
  total: number;
}

export function SectionSlide({ slide, slideNum, total }: Props) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background image */}
      <motion.img
        src={slide.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,11,22,0.65) 0%, rgba(8,11,22,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-24 py-14">
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
          style={{
            color: "#c4b5fd",
            fontSize: "1.25rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {slide.number}
        </motion.div>

        <motion.h2
          className="font-display tracking-tight text-center"
          style={{
            fontSize: "4.5rem",
            lineHeight: 1.1,
            color: "#f1f0fb",
            textShadow:
              "0 2px 16px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
          }}
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
            boxShadow: "0 0 12px rgba(167,139,250,0.4)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-6 right-12 text-base font-mono z-10"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {slideNum + 1} / {total}
      </div>
    </div>
  );
}
