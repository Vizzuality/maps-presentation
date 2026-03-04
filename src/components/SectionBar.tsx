import { AnimatePresence, motion } from "framer-motion";
import { SECTION_COLORS } from "../data/sectionColors";

interface Props {
  label?: string;
}

export function SectionBar({ label }: Props) {
  // Extract section number for keying and coloring
  const match = label?.match(/^(\d+)/);
  const sectionNum = match?.[1] ?? null;
  const color = sectionNum ? SECTION_COLORS[sectionNum] ?? "#a78bfa" : "#a78bfa";

  return (
    <div className="absolute top-0 left-0 right-0 h-12 flex items-center px-10 z-20">
      <AnimatePresence mode="wait">
        {label && (
          <motion.div
            key={sectionNum}
            className="w-full h-full flex items-center glass rounded-none"
            style={{ margin: "0 -2.5rem", padding: "0 2.5rem" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span className="font-mono tracking-wide" style={{ color, fontSize: "1.125rem" }}>
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
