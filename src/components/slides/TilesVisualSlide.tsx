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
  const tileSize = Math.min(300 / gridSize, 75);

  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-4xl text-center">
        <motion.h2
          className="text-5xl font-display text-white mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          The Tile System &mdash; Zoom Levels
        </motion.h2>

        <p className="font-body text-lg mb-8" style={{ color: "#64748b" }}>
          Click the zoom buttons to see how tiles multiply
        </p>

        <div className="flex justify-center mb-8">
          <div className="glass rounded-2xl p-8 inline-block">
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
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: Math.max(8, 14 - zoom * 2),
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

        <div className="flex items-center justify-center gap-5 mb-5">
          <button
            onClick={() => setZoom(Math.max(0, zoom - 1))}
            disabled={zoom === 0}
            className="w-14 h-14 rounded-xl text-xl font-bold transition-all disabled:opacity-20 glass"
            style={{ color: "#cbd5e1" }}
          >
            &minus;
          </button>

          <div
            className="rounded-xl px-8 py-4 min-w-72"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
            }}
          >
            <span className="font-mono text-xl font-bold" style={{ color: "#c4b5fd" }}>
              Zoom {zoom}
            </span>
            <span className="font-body text-lg ml-5" style={{ color: "#94a3b8" }}>
              {gridSize}&times;{gridSize} ={" "}
              <span className="text-white font-bold">{gridSize * gridSize} tiles</span>
            </span>
          </div>

          <button
            onClick={() => setZoom(Math.min(maxZ, zoom + 1))}
            disabled={zoom === maxZ}
            className="w-14 h-14 rounded-xl text-xl font-bold transition-all disabled:opacity-20 glass"
            style={{ color: "#cbd5e1" }}
          >
            +
          </button>
        </div>

        <p className="font-body text-base" style={{ color: "#64748b" }}>
          4<sup>N</sup> tiles per zoom level &middot; At zoom 18 &rarr; ~69 billion tiles
        </p>
      </div>
    </SlideWrapper>
  );
}
