import { motion } from "framer-motion";
import type { TableSlide as TableData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: TableData;
  slideNum: number;
  total: number;
}

export function TableSlide({ slide, slideNum, total }: Props) {
  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-6xl">
        <motion.h2
          className="text-5xl font-display text-white mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        <motion.div
          className="overflow-hidden rounded-2xl glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <table className="w-full text-base font-body">
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                {slide.headers.map((h, j) => (
                  <th key={j} className="text-left p-5 font-medium" style={{ color: "#94a3b8" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows.map((row, j) => (
                <tr
                  key={j}
                  className="transition-colors duration-200"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {row.map((cell, k) => (
                    <td
                      key={k}
                      className="p-5"
                      style={{ color: k === 0 ? "#f1f5f9" : "#cbd5e1", fontWeight: k === 0 ? 500 : 400 }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {slide.footnote && (
          <motion.p
            className="text-sm font-body mt-6"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <span className="mr-1">&#x1F3AF;</span> {slide.footnote}
          </motion.p>
        )}
      </div>
    </SlideWrapper>
  );
}
