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

        <motion.div
          className="glass rounded-2xl p-10 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <p className="font-body mb-6 font-medium" style={{ color: "#94a3b8", fontSize: "1.25rem" }}>
            Slippy Map convention &mdash; nearly every tile provider uses this:
          </p>

          <div className="font-mono mb-8 flex flex-wrap items-center gap-2" style={{ fontSize: "1.75rem" }}>
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
                  className="rounded-lg px-4 py-1.5 ml-1"
                  style={{ background: seg.bg, border: `1px solid ${seg.border}`, color: seg.color }}
                >
                  {seg.token}
                </span>
              </motion.span>
            ))}
            <span style={{ color: "#4a5568" }}>.png</span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {segments.map((p, j) => (
              <motion.div
                key={j}
                className="rounded-xl p-6"
                style={{ background: `${p.color}0d`, border: `1px solid ${p.color}20` }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + j * 0.08, duration: 0.3 }}
              >
                <span className="font-mono font-bold" style={{ color: p.color, fontSize: "1.75rem" }}>
                  {p.v}
                </span>
                <p className="font-body mt-2" style={{ color: "#cbd5e1", fontSize: "1.125rem" }}>
                  {p.label}
                </p>
                <p className="font-mono" style={{ color: "#64748b", fontSize: "0.9375rem" }}>
                  {p.range}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-xl p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <p className="font-body mb-2" style={{ color: "#94a3b8", fontSize: "1.125rem" }}>
            Real-world example (OpenStreetMap):
          </p>
          <p className="font-mono" style={{ color: "#34d399", fontSize: "1.25rem" }}>
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
