import { motion } from "framer-motion";
import type { ResourcesSlide as ResourcesData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: ResourcesData;
  slideNum: number;
  total: number;
}

export function ResourcesSlide({ slide, slideNum, total }: Props) {
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

        <div className="grid grid-cols-3 gap-5">
          {slide.links.map((l, j) => (
            <motion.div
              key={j}
              className="glass rounded-2xl p-7 flex items-center gap-5 transition-all duration-200"
              style={{ cursor: "default" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + j * 0.05, duration: 0.3 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(167,139,250,0.1)",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>&#x1F517;</span>
              <div>
                <p className="font-body text-white font-medium" style={{ fontSize: "1.125rem" }}>{l.name}</p>
                <p className="font-mono" style={{ color: "#64748b", fontSize: "0.875rem" }}>
                  {l.url}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
