import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectionsSlide as ProjData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: ProjData;
  slideNum: number;
  total: number;
}

interface Projection {
  name: string;
  year: string;
  peel: string;
  preserves: string;
  distorts: string;
  use: string;
  color: string;
  svg: ReactNode;
}

const projections: Projection[] = [
  {
    name: "Mercator", year: "1569",
    peel: "Stretch & tape the peel into a perfect rectangle. Poles get hugely stretched.",
    preserves: "Angles & local shapes", distorts: "Size (poles are massive)", use: "Web maps, navigation", color: "#3b82f6",
    svg: (
      <svg viewBox="0 0 240 160" className="w-full h-full">
        <rect x="10" y="5" width="220" height="150" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
        {[0,1,2,3,4,5].map(i => <line key={i} x1="10" y1={5+i*30} x2="230" y2={5+i*30} stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />)}
        {[0,1,2,3,4,5,6].map(i => <line key={`v${i}`} x1={10+i*36.7} y1="5" x2={10+i*36.7} y2="155" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />)}
        <rect x="60" y="8" width="50" height="30" rx="3" fill="#60a5fa" opacity="0.4" />
        <text x="85" y="26" textAnchor="middle" fill="#bfdbfe" fontSize="8">Greenland</text>
        <rect x="100" y="50" width="70" height="50" rx="3" fill="#22c55e" opacity="0.3" />
        <text x="135" y="78" textAnchor="middle" fill="#bbf7d0" fontSize="8">Africa</text>
        <text x="85" y="148" fill="#f87171" fontSize="7" textAnchor="middle">{"\u2195"} stretched!</text>
      </svg>
    ),
  },
  {
    name: "Robinson", year: "1963",
    peel: "Gently stretch the peel into an oval, accepting small distortions everywhere.",
    preserves: "Nothing perfectly (compromise)", distorts: "A little bit of everything", use: "Textbooks, general world maps", color: "#a78bfa",
    svg: (
      <svg viewBox="0 0 240 160" className="w-full h-full">
        <ellipse cx="120" cy="80" rx="110" ry="70" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
        {[-2,-1,0,1,2].map(i => <ellipse key={i} cx="120" cy="80" rx={Math.max(10,110-Math.abs(i)*30)} ry="70" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.25" />)}
        {[-2,-1,0,1,2].map(i => <ellipse key={`h${i}`} cx="120" cy={80+i*22} rx="110" ry={Math.max(5,25-Math.abs(i)*5)} fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.25" />)}
        <text x="120" y="84" textAnchor="middle" fill="#c4b5fd" fontSize="10">Balanced compromise</text>
      </svg>
    ),
  },
  {
    name: "Mollweide", year: "1805",
    peel: "Squish the peel into an ellipse, carefully preserving area. Shapes warp at the edges.",
    preserves: "Area (equal-area)", distorts: "Shapes at the edges", use: "Thematic maps, data viz", color: "#10b981",
    svg: (
      <svg viewBox="0 0 240 160" className="w-full h-full">
        <ellipse cx="120" cy="80" rx="110" ry="70" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
        <line x1="120" y1="10" x2="120" y2="150" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
        <line x1="10" y1="80" x2="230" y2="80" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
        {[-3,-2,-1,1,2,3].map(i => <path key={i} d={`M120,10 Q${120+i*25},80 120,150`} fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />)}
        <rect x="50" y="20" width="15" height="15" rx="2" fill="#10b981" opacity="0.3" />
        <text x="57" y="30" textAnchor="middle" fill="#6ee7b7" fontSize="5">GL</text>
        <rect x="130" y="45" width="40" height="45" rx="2" fill="#10b981" opacity="0.3" />
        <text x="150" y="72" textAnchor="middle" fill="#6ee7b7" fontSize="8">Africa</text>
        <text x="120" y="145" textAnchor="middle" fill="#6ee7b7" fontSize="8">{"\u2713"} Sizes are honest!</text>
      </svg>
    ),
  },
  {
    name: "Goode Homolosine", year: "1923",
    peel: "Actually CUT the peel with scissors, like slicing an orange into segments. Keeps area accurate but with ocean gaps.",
    preserves: "Area (interrupted)", distorts: "Continuity (oceans cut)", use: "Land-area analysis, textbooks", color: "#f59e0b",
    svg: (
      <svg viewBox="0 0 240 160" className="w-full h-full">
        {[
          "M30,80 Q30,20 60,15 Q80,20 80,80 Q80,140 60,145 Q30,140 30,80Z",
          "M85,80 Q85,20 110,15 Q130,20 130,80 Q130,140 110,145 Q85,140 85,80Z",
          "M135,80 Q135,25 158,15 Q175,25 175,80 Q175,135 158,145 Q135,135 135,80Z",
          "M180,80 Q180,30 198,20 Q212,30 212,80 Q212,130 198,140 Q180,130 180,80Z",
        ].map((d, i) => <path key={i} d={d} fill="#451a03" stroke="#f59e0b" strokeWidth="1" />)}
        {[55,110,155,195].map((x,i) => <text key={i} x={x} y="85" textAnchor="middle" fill="#fcd34d" fontSize="8">{"\u2702\uFE0F"}</text>)}
        <text x="120" y="155" textAnchor="middle" fill="#fbbf24" fontSize="8">Cut to keep areas honest</text>
      </svg>
    ),
  },
  {
    name: "Azimuthal Equidistant", year: "~1000 AD",
    peel: "Pin one point flat and let the rest radiate outward like a bullseye. Distance from center is perfect, edges get wild.",
    preserves: "Distance from center point", distorts: "Everything at the edges", use: "Polar maps, airline routes, UN flag", color: "#ec4899",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="90" fill="#1a0a1e" stroke="#ec4899" strokeWidth="1.5" />
        {[20,40,60,80].map(r => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#ec4899" strokeWidth="0.5" opacity="0.25" />)}
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = a * Math.PI / 180;
          return <line key={a} x1="100" y1="100" x2={100+90*Math.cos(rad)} y2={100+90*Math.sin(rad)} stroke="#ec4899" strokeWidth="0.5" opacity="0.25" />;
        })}
        <circle cx="100" cy="100" r="5" fill="#ec4899" />
        <text x="100" y="190" textAnchor="middle" fill="#f9a8d4" fontSize="8">{"\u{1F3AF}"} UN flag uses this!</text>
      </svg>
    ),
  },
];

export function ProjectionsSlide({ slide, slideNum, total }: Props) {
  const [active, setActive] = useState(0);
  const p = projections[active]!;

  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-5xl">
        <motion.h2
          className="text-5xl font-display text-white mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Peeling the Orange: 5 Strategies
        </motion.h2>
        <p className="font-body text-base mb-6" style={{ color: "#64748b" }}>
          Same orange, different cuts &rarr; different tradeoffs
        </p>

        <div className="flex gap-2 mb-6">
          {projections.map((pr, j) => (
            <button
              key={j}
              onClick={() => setActive(j)}
              className="px-5 py-2.5 rounded-xl text-sm font-body font-medium whitespace-nowrap transition-all"
              style={{
                background: j === active ? `${pr.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${j === active ? `${pr.color}35` : "rgba(255,255,255,0.06)"}`,
                color: j === active ? pr.color : "#94a3b8",
              }}
            >
              {pr.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="glass rounded-2xl p-6 flex items-center justify-center" style={{ minHeight: 240 }}>
              {p.svg}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display text-white">
                {p.name}{" "}
                <span className="text-base font-body font-normal" style={{ color: "#64748b" }}>
                  ({p.year})
                </span>
              </h3>

              <div className="rounded-xl p-5" style={{ background: `${p.color}0a`, border: `1px solid ${p.color}1a` }}>
                <p className="text-base font-body font-medium mb-1" style={{ color: p.color }}>
                  &#x1F34A; The Orange Peel Way
                </p>
                <p className="font-body text-base" style={{ color: "#cbd5e1" }}>{p.peel}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <p className="text-sm font-body font-semibold" style={{ color: "#34d399" }}>{"\u2713"} Preserves</p>
                  <p className="font-body text-sm mt-1" style={{ color: "#cbd5e1" }}>{p.preserves}</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(244,63,94,0.05)", border: "1px solid rgba(244,63,94,0.12)" }}>
                  <p className="text-sm font-body font-semibold" style={{ color: "#fb7185" }}>{"\u2717"} Distorts</p>
                  <p className="font-body text-sm mt-1" style={{ color: "#cbd5e1" }}>{p.distorts}</p>
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <p className="font-body text-base" style={{ color: "#94a3b8" }}>
                  &#x1F3AF; <span className="text-white font-medium">Best for:</span> {p.use}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
}
