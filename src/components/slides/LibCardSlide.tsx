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
      <div className="w-full max-w-4xl">
        <motion.div
          className="flex items-center gap-5 mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-5xl">{slide.emoji}</span>
          <h2 className="text-5xl font-display text-white">{slide.title}</h2>
        </motion.div>

        <motion.p
          className="font-body italic text-lg mb-6"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {slide.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          {slide.meta.map((m, j) => (
            <span
              key={j}
              className="text-sm font-mono glass rounded-full px-4 py-1.5"
              style={{ color: "#94a3b8" }}
            >
              <span style={{ color: "#64748b" }}>{m.k}:</span> {m.v}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          <motion.div
            className="rounded-2xl p-6"
            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h4 className="font-body text-base font-semibold mb-4" style={{ color: "#34d399" }}>
              Pros
            </h4>
            {slide.pros.map((p, j) => (
              <p key={j} className="font-body text-base mb-2" style={{ color: "#cbd5e1" }}>
                <span style={{ color: "#34d399" }}>{"\u2713"}</span> {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="rounded-2xl p-6"
            style={{ background: "rgba(244,63,94,0.05)", border: "1px solid rgba(244,63,94,0.15)" }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <h4 className="font-body text-base font-semibold mb-4" style={{ color: "#fb7185" }}>
              Cons
            </h4>
            {slide.cons.map((c, j) => (
              <p key={j} className="font-body text-base mb-2" style={{ color: "#cbd5e1" }}>
                <span style={{ color: "#fb7185" }}>{"\u2717"}</span> {c}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="rounded-xl px-6 py-4"
          style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          <span className="font-body text-base font-medium" style={{ color: "#c4b5fd" }}>
            Best for &rarr;
          </span>{" "}
          <span className="font-body text-base" style={{ color: "#cbd5e1" }}>
            {slide.bestFor}
          </span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
