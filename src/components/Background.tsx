import { motion } from "framer-motion";

/** Animated topographic contour background at very low opacity */
export function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Radial gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Animated topo contours */}
      <motion.svg
        viewBox="0 0 1000 1000"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.04 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        {[200, 280, 360, 440, 520].map((r) => (
          <ellipse
            key={r}
            cx="500"
            cy="500"
            rx={r}
            ry={r * 0.7}
            fill="none"
            stroke="#a78bfa"
            strokeWidth="0.8"
          />
        ))}
        {[150, 250, 350, 450].map((r) => (
          <ellipse
            key={`b-${r}`}
            cx="700"
            cy="300"
            rx={r * 0.6}
            ry={r}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="0.5"
          />
        ))}
      </motion.svg>

      {/* Grid overlay */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.025 }}
        preserveAspectRatio="none"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 5}
            x2="100"
            y2={i * 5}
            stroke="#a78bfa"
            strokeWidth="0.15"
          />
        ))}
        {Array.from({ length: 20 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i * 5}
            y1="0"
            x2={i * 5}
            y2="100"
            stroke="#a78bfa"
            strokeWidth="0.15"
          />
        ))}
      </svg>
    </div>
  );
}
