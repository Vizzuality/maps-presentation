import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { OrangeSlide as OrangeData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: OrangeData;
  slideNum: number;
  total: number;
}

const steps = [
  { label: "The Problem", desc: "The Earth isn\u2019t even a perfect sphere \u2014 it\u2019s an oblate ellipsoid, slightly squashed at the poles and bulging at the equator. Your screen is flat. How do you flatten that onto a rectangle?", visual: "sphere" },
  { label: "Grab an Orange", desc: "Imagine the Earth is an orange. To see the whole surface, you need to peel it and lay it flat.", visual: "orange" },
  { label: "Peel It!", desc: "But no matter HOW you peel it, the skin tears, stretches, or leaves gaps. You can\u2019t flatten a sphere perfectly.", visual: "peeled" },
  { label: "Choose Your Compromise", desc: "Each projection is a different way of peeling. Every one distorts SOMETHING \u2014 you just pick which distortion you can live with.", visual: "methods" },
];

function SphereVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-72 h-72">
      <defs>
        <radialGradient id="sph" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#60a5fa" /><stop offset="50%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#1e3a5f" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="88" ry="80" fill="url(#sph)" />
      <ellipse cx="100" cy="100" rx="88" ry="25" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="100" cy="100" rx="88" ry="52" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="100" cy="100" rx="25" ry="80" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="100" cy="100" rx="55" ry="80" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.4" />
      <line x1="12" y1="100" x2="188" y2="100" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="#93c5fd" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

function OrangeVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-72 h-72">
      <defs>
        <radialGradient id="org" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#fdba74" /><stop offset="60%" stopColor="#f97316" /><stop offset="100%" stopColor="#c2410c" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#org)" />
      {[[70,70,3],[120,60,2],[90,110,2.5],[130,90,2],[80,140,1.5],[110,130,2]].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#ea580c" opacity="0.3" />
      ))}
      <path d="M100,15 Q95,100 100,185" fill="none" stroke="#fef3c7" strokeWidth="2" strokeDasharray="4,3" />
    </svg>
  );
}

function PeeledVisual() {
  // Gore segments like an actual orange peel flattened, with gaps between them
  const gores = [
    "M30,80 C30,30 45,8 55,8 C65,8 80,30 80,80 C80,130 65,152 55,152 C45,152 30,130 30,80Z",
    "M95,80 C95,30 110,8 120,8 C130,8 145,30 145,80 C145,130 130,152 120,152 C110,152 95,130 95,80Z",
    "M160,80 C160,30 175,8 185,8 C195,8 210,30 210,80 C210,130 195,152 185,152 C175,152 160,130 160,80Z",
    "M225,80 C225,30 240,8 250,8 C260,8 275,30 275,80 C275,130 260,152 250,152 C240,152 225,130 225,80Z",
  ];
  return (
    <svg viewBox="0 0 300 170" className="w-96 h-56">
      <defs>
        <radialGradient id="peel-g" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="70%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </radialGradient>
      </defs>
      {gores.map((d, i) => (
        <g key={i}>
          <path d={d} fill="url(#peel-g)" stroke="#ea580c" strokeWidth="1.2" opacity="0.9" />
          {/* Texture lines on peel */}
          <path d={d} fill="none" stroke="#fbbf24" strokeWidth="0.4" opacity="0.2" strokeDasharray="3,4" />
        </g>
      ))}
      {/* Gap indicators */}
      {[87, 152, 217].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="35" x2={x} y2="125" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
          <text x={x} y="80" textAnchor="middle" fill="#ef4444" fontSize="14">{"\u2702\uFE0F"}</text>
        </g>
      ))}
      <text x="150" y="168" textAnchor="middle" fill="#94a3b8" fontSize="11">Gaps, tears, stretching &mdash; unavoidable!</text>
    </svg>
  );
}

function MethodsVisual() {
  const methods = [
    { name: "Mercator", icon: "\u{1F4CF}", desc: "Stretch top & bottom" },
    { name: "Robinson", icon: "\u{1F91D}", desc: "Compromise everything" },
    { name: "Mollweide", icon: "\u{1F4D0}", desc: "Keep area, warp shape" },
    { name: "Goode", icon: "\u2702\uFE0F", desc: "Cut to keep area" },
  ];
  return (
    <div className="grid grid-cols-4 gap-6">
      {methods.map((m, j) => (
        <motion.div
          key={j}
          className="glass rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: j * 0.1, duration: 0.3 }}
        >
          <div className="mb-3" style={{ fontSize: "2.5rem" }}>{m.icon}</div>
          <p className="text-white font-body font-semibold" style={{ fontSize: "1.625rem" }}>{m.name}</p>
          <p className="font-body mt-1" style={{ color: "#64748b", fontSize: "1.25rem" }}>{m.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function renderVisual(visual: string) {
  switch (visual) {
    case "sphere": return <SphereVisual />;
    case "orange": return <OrangeVisual />;
    case "peeled": return <PeeledVisual />;
    case "methods": return <MethodsVisual />;
    default: return null;
  }
}

export function OrangeSlide({ slide, slideNum, total }: Props) {
  const [step, setStep] = useState(0);
  const s = steps[step]!;

  return (
    <SlideWrapper slideNum={slideNum} total={total} sectionLabel={slide.sectionLabel}>
      <div className="w-full max-w-5xl text-center">
        <motion.h2
          className="font-display text-white mb-2"
          style={{ fontSize: "3.5rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          &#x1F34A; The Orange Peel Problem
        </motion.h2>
        <p className="font-body mb-10" style={{ color: "#64748b", fontSize: "1.5rem" }}>
          Why every flat map is a beautiful lie
        </p>

        <div className="flex justify-center mb-10 min-h-72 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.visual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {renderVisual(s.visual)}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div className="glass rounded-2xl p-8 mb-8" layout>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono" style={{ color: "#a78bfa", fontSize: "1.25rem" }}>
              Step {step + 1}/{steps.length}
            </span>
            <span className="text-white font-body font-semibold" style={{ fontSize: "1.625rem" }}>&mdash; {s.label}</span>
          </div>
          <p className="font-body" style={{ color: "#cbd5e1", fontSize: "1.5rem" }}>{s.desc}</p>
        </motion.div>

        <div className="flex justify-center gap-4">
          {steps.map((_, j) => (
            <button
              key={j}
              onClick={() => setStep(j)}
              className="w-14 h-14 rounded-xl font-mono transition-all"
              style={{
                fontSize: "1.25rem",
                background: j === step ? "rgba(251,146,60,0.15)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${j === step ? "rgba(251,146,60,0.3)" : "rgba(255,255,255,0.06)"}`,
                color: j === step ? "#fb923c" : "#64748b",
              }}
            >
              {j + 1}
            </button>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
