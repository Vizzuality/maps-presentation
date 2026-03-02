import { motion } from "framer-motion";
import type { ContentSlide as ContentData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: ContentData;
  slideNum: number;
  total: number;
}

export function ContentSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-5xl font-display text-white mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        {slide.body && (
          <motion.p
            className="text-xl font-body mb-6"
            style={{ color: "#94a3b8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {slide.body}
          </motion.p>
        )}

        {slide.highlight && (
          <motion.div
            className="rounded-2xl p-7 mb-6"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.15)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <p className="text-lg font-body" style={{ color: "#e2e8f0" }}>
              {slide.highlight}
            </p>
          </motion.div>
        )}

        {slide.detail && (
          <motion.p
            className="text-base font-body mt-5"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="mr-2">&#x1F4A1;</span>
            {slide.detail}
          </motion.p>
        )}

        {slide.cards && (
          <div className="space-y-4 mt-4">
            {slide.cards.map((c, j) => (
              <motion.div
                key={j}
                className="glass rounded-2xl p-6 flex gap-6 items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + j * 0.1, duration: 0.4 }}
              >
                <span className="text-4xl">{c.emoji}</span>
                <div>
                  <p className="text-white font-body font-semibold text-lg">{c.name}</p>
                  <p className="font-body text-base mt-1" style={{ color: "#94a3b8" }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SlideWrapper>
  );
}
