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
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-5xl font-display text-white mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <div className="grid grid-cols-3 gap-4">
          {slide.links.map((l, j) => (
            <motion.div
              key={j}
              className="glass rounded-2xl p-6 flex items-center gap-4 transition-all duration-200"
              style={{ cursor: "default" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + j * 0.05, duration: 0.3 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(167,139,250,0.1)",
              }}
            >
              <span className="text-xl">&#x1F517;</span>
              <div>
                <p className="font-body text-white font-medium text-base">{l.name}</p>
                <p className="font-mono text-sm" style={{ color: "#64748b" }}>
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
