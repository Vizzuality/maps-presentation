import { motion } from "framer-motion";
import type { TileUrlSlide as TileUrlData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: TileUrlData;
  slideNum: number;
  total: number;
}

const segments = [
  { v: "z", label: "Zoom level", range: "0\u201322", color: "#3b82f6" },
  { v: "x", label: "Column", range: "tile column", color: "#10b981" },
  { v: "y", label: "Row", range: "tile row", color: "#f59e0b" },
];

export function TileUrlSlide({ slide, slideNum, total }: Props) {
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

        <motion.div
          className="glass rounded-2xl p-8 mb-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <p className="font-body text-lg mb-5 font-medium" style={{ color: "#94a3b8" }}>
            Slippy Map convention &mdash; nearly every tile provider uses this:
          </p>

          <div className="font-mono text-2xl mb-7 flex flex-wrap items-center gap-1.5">
            <span style={{ color: "#4a5568" }}>https://server/</span>
            {[
              { token: "{z}", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.25)", color: "#60a5fa" },
              { token: "{x}", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.25)", color: "#34d399" },
              { token: "{y}", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.25)", color: "#fbbf24" },
            ].map((seg, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
              >
                {i > 0 && <span style={{ color: "#4a5568" }}>/</span>}
                <span
                  className="rounded-lg px-3 py-1 ml-1"
                  style={{ background: seg.bg, border: `1px solid ${seg.border}`, color: seg.color }}
                >
                  {seg.token}
                </span>
              </motion.span>
            ))}
            <span style={{ color: "#4a5568" }}>.png</span>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {segments.map((p, j) => (
              <motion.div
                key={j}
                className="rounded-xl p-5"
                style={{ background: `${p.color}0d`, border: `1px solid ${p.color}20` }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + j * 0.08, duration: 0.3 }}
              >
                <span className="font-mono text-2xl font-bold" style={{ color: p.color }}>
                  {p.v}
                </span>
                <p className="font-body text-base mt-1" style={{ color: "#cbd5e1" }}>
                  {p.label}
                </p>
                <p className="font-mono text-sm" style={{ color: "#64748b" }}>
                  {p.range}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <p className="font-body text-base mb-2" style={{ color: "#94a3b8" }}>
            Real-world example (OpenStreetMap):
          </p>
          <p className="font-mono text-lg" style={{ color: "#34d399" }}>
            https://tile.openstreetmap.org/
            <span style={{ color: "#60a5fa" }}>15</span>/
            <span style={{ color: "#34d399" }}>16372</span>/
            <span style={{ color: "#fbbf24" }}>12345</span>.png
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
