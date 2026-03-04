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
      <div className="w-full max-w-5xl">
        <motion.h2
          className="font-display text-white mb-7"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        {slide.body && (
          <motion.p
            className="font-body mb-7"
            style={{ color: "#94a3b8", fontSize: "1.625rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {slide.body}
          </motion.p>
        )}

        {slide.highlight && (
          <motion.div
            className="rounded-2xl p-8 mb-7"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.15)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <p className="font-body" style={{ color: "#e2e8f0", fontSize: "1.5rem", lineHeight: 1.7 }}>
              {slide.highlight}
            </p>
          </motion.div>
        )}

        {slide.detail && (
          <motion.p
            className="font-body mt-5"
            style={{ color: "#64748b", fontSize: "1.375rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="mr-2">&#x1F4A1;</span>
            {slide.detail}
          </motion.p>
        )}

        {slide.cards && (
          <div className="space-y-5 mt-5">
            {slide.cards.map((c, j) => (
              <motion.div
                key={j}
                className="glass rounded-2xl p-7 flex gap-7 items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + j * 0.1, duration: 0.4 }}
              >
                <span className="text-5xl">{c.emoji}</span>
                <div>
                  <p className="text-white font-body font-semibold" style={{ fontSize: "1.5rem" }}>{c.name}</p>
                  <p className="font-body mt-2" style={{ color: "#94a3b8", fontSize: "1.375rem" }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SlideWrapper>
  );
}
