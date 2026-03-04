import { motion } from "framer-motion";
import type { FlowchartSlide as FlowchartData } from "../../data/slides";
import { SlideWrapper } from "../SlideWrapper";

interface Props {
  slide: FlowchartData;
  slideNum: number;
  total: number;
}

/* ── answer badge ─────────────────────────────────────── */
function AnswerBadge({
  icon,
  label,
  delay,
}: {
  icon: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="rounded-xl px-5 py-3 flex items-center gap-3"
      style={{
        background: "rgba(167,139,250,0.08)",
        border: "1px solid rgba(167,139,250,0.15)",
        whiteSpace: "nowrap",
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.35 }}
    >
      <span style={{ fontSize: "1.35rem" }}>{icon}</span>
      <span
        className="font-body font-medium"
        style={{ color: "#c4b5fd", fontSize: "1.15rem" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function FlowchartSlide({ slide, slideNum, total }: Props) {
  const nodes = slide.nodes;

  return (
    <SlideWrapper
      slideNum={slideNum}
      total={total}
      sectionLabel={slide.sectionLabel}
    >
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.h2
          className="font-display text-white mb-8"
          style={{ fontSize: "3rem", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {slide.title}
        </motion.h2>

        {/* Decision tree */}
        <div className="flex flex-col items-start" style={{ gap: 0 }}>
          {nodes.map((node, i) => {
            const baseDelay = 0.15 + i * 0.15;
            const isLast = i === nodes.length - 1;

            return (
              <div key={i} className="flex flex-col items-start w-full">
                {/* Row: question + YES arrow + answer */}
                <div className="flex items-center w-full" style={{ gap: "1.25rem" }}>
                  {/* Question box */}
                  <motion.div
                    className="glass rounded-xl px-6 py-4 flex-shrink-0"
                    style={{ maxWidth: "32rem" }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: baseDelay, duration: 0.35 }}
                  >
                    <p
                      className="font-body"
                      style={{ color: "#e2e8f0", fontSize: "1.15rem" }}
                    >
                      {node.q}
                    </p>
                  </motion.div>

                  {/* YES arrow */}
                  <motion.div
                    className="flex items-center gap-2 flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: baseDelay + 0.1, duration: 0.3 }}
                  >
                    <span
                      className="font-body font-semibold"
                      style={{ color: "#34d399", fontSize: "0.85rem", letterSpacing: "0.05em" }}
                    >
                      YES
                    </span>
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path
                        d="M0 6h24m0 0l-5-5m5 5l-5 5"
                        stroke="#34d399"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* YES answer */}
                  <AnswerBadge
                    icon={node.yesIcon}
                    label={node.yes}
                    delay={baseDelay + 0.15}
                  />

                  {/* NO answer on last node (beside YES) */}
                  {isLast && node.no && (
                    <>
                      <motion.div
                        className="flex items-center gap-2 flex-shrink-0 ml-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: baseDelay + 0.25, duration: 0.3 }}
                      >
                        <span
                          className="font-body font-semibold"
                          style={{ color: "#f87171", fontSize: "0.85rem", letterSpacing: "0.05em" }}
                        >
                          NO
                        </span>
                        <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                          <path
                            d="M0 6h24m0 0l-5-5m5 5l-5 5"
                            stroke="#f87171"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      <AnswerBadge
                        icon={node.noIcon!}
                        label={node.no}
                        delay={baseDelay + 0.3}
                      />
                    </>
                  )}
                </div>

                {/* Vertical NO connector to next question */}
                {!isLast && (
                  <motion.div
                    className="flex items-center"
                    style={{ marginLeft: "2.5rem", height: "2.5rem" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: baseDelay + 0.2, duration: 0.3 }}
                  >
                    <div className="flex flex-col items-center" style={{ height: "100%" }}>
                      <div
                        style={{
                          width: "1.5px",
                          flex: 1,
                          background: "linear-gradient(to bottom, rgba(248,113,113,0.5), rgba(248,113,113,0.3))",
                        }}
                      />
                      <span
                        className="font-body font-semibold"
                        style={{
                          color: "#f87171",
                          fontSize: "0.7rem",
                          letterSpacing: "0.08em",
                          lineHeight: 1,
                        }}
                      >
                        NO
                      </span>
                      <div
                        style={{
                          width: "1.5px",
                          flex: 1,
                          background: "linear-gradient(to bottom, rgba(248,113,113,0.3), rgba(248,113,113,0.5))",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
