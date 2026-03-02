import { useState } from "react";
import { motion } from "framer-motion";
import type { TilesVisualSlide as TilesData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: TilesData;
  slideNum: number;
  total: number;
}

const colors = ["#3b82f6", "#2563eb", "#1d4ed8", "#60a5fa", "#93c5fd"];

export function TilesVisualSlide({ slide, slideNum, total }: Props) {
  const [zoom, setZoom] = useState(0);
  const maxZ = 4;
  const gridSize = Math.pow(2, zoom);
  const tileSize = Math.min(340 / gridSize, 85);

  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-5xl text-center">
        <motion.h2
          className="font-display text-white mb-4"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          The Tile System &mdash; Zoom Levels
        </motion.h2>

        <p className="font-body mb-10" style={{ color: "#64748b", fontSize: "1.25rem" }}>
          Click the zoom buttons to see how tiles multiply
        </p>

        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl p-10 inline-block">
            <div
              className="flex flex-wrap justify-center"
              style={{ width: gridSize * tileSize + gridSize * 2, gap: 2 }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, idx) => (
                <motion.div
                  key={`${zoom}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(idx * 0.01, 0.3), duration: 0.3 }}
                  style={{
                    width: tileSize,
                    height: tileSize,
                    background: colors[idx % colors.length] + "25",
                    border: `1px solid ${colors[idx % colors.length]}50`,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: Math.max(9, 15 - zoom * 2),
                      color: "#93c5fd",
                    }}
                  >
                    {zoom < 4 ? `${idx % gridSize},${Math.floor(idx / gridSize)}` : ""}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={() => setZoom(Math.max(0, zoom - 1))}
            disabled={zoom === 0}
            className="w-16 h-16 rounded-xl font-bold transition-all disabled:opacity-20 glass"
            style={{ color: "#cbd5e1", fontSize: "1.5rem" }}
          >
            &minus;
          </button>

          <div
            className="rounded-xl px-10 py-5 min-w-80"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            <span className="font-mono font-bold" style={{ color: "#c4b5fd", fontSize: "1.375rem" }}>
              Zoom {zoom}
            </span>
            <span className="font-body ml-6" style={{ color: "#94a3b8", fontSize: "1.25rem" }}>
              {gridSize}&times;{gridSize} ={" "}
              <span className="text-white font-bold">{gridSize * gridSize} tiles</span>
            </span>
          </div>

          <button
            onClick={() => setZoom(Math.min(maxZ, zoom + 1))}
            disabled={zoom === maxZ}
            className="w-16 h-16 rounded-xl font-bold transition-all disabled:opacity-20 glass"
            style={{ color: "#cbd5e1", fontSize: "1.5rem" }}
          >
            +
          </button>
        </div>

        <p className="font-body" style={{ color: "#64748b", fontSize: "1.125rem" }}>
          4<sup>N</sup> tiles per zoom level &middot; At zoom 18 &rarr; ~69 billion tiles
        </p>
      </div>
    </SlideWrapper>
  );
}
