import { motion } from "framer-motion";
import type { LibCardSlide as LibCardData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: LibCardData;
  slideNum: number;
  total: number;
}

export function LibCardSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-5xl">
        <motion.div
          className="flex items-center gap-6 mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span style={{ fontSize: "3.5rem" }}>{slide.emoji}</span>
          <h2 className="font-display text-white" style={{ fontSize: "3.5rem", lineHeight: 1.15 }}>{slide.title}</h2>
        </motion.div>

        <motion.p
          className="font-body italic mb-7"
          style={{ color: "#94a3b8", fontSize: "1.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {slide.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          {slide.meta.map((m, j) => (
            <span
              key={j}
              className="font-mono glass rounded-full px-5 py-2"
              style={{ color: "#94a3b8", fontSize: "1.125rem" }}
            >
              <span style={{ color: "#64748b" }}>{m.k}:</span> {m.v}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-6 mb-7">
          <motion.div
            className="rounded-2xl p-7"
            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h4 className="font-body font-semibold mb-5" style={{ color: "#34d399", fontSize: "1.375rem" }}>
              Pros
            </h4>
            {slide.pros.map((p, j) => (
              <p key={j} className="font-body mb-3" style={{ color: "#cbd5e1", fontSize: "1.375rem" }}>
                <span style={{ color: "#34d399" }}>{"\u2713"}</span> {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="rounded-2xl p-7"
            style={{ background: "rgba(244,63,94,0.05)", border: "1px solid rgba(244,63,94,0.15)" }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <h4 className="font-body font-semibold mb-5" style={{ color: "#fb7185", fontSize: "1.375rem" }}>
              Cons
            </h4>
            {slide.cons.map((c, j) => (
              <p key={j} className="font-body mb-3" style={{ color: "#cbd5e1", fontSize: "1.375rem" }}>
                <span style={{ color: "#fb7185" }}>{"\u2717"}</span> {c}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="rounded-xl px-7 py-5"
          style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          <span className="font-body font-medium" style={{ color: "#c4b5fd", fontSize: "1.375rem" }}>
            Best for &rarr;
          </span>{" "}
          <span className="font-body" style={{ color: "#cbd5e1", fontSize: "1.375rem" }}>
            {slide.bestFor}
          </span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
