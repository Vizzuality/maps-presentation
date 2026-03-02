import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full h-1" style={{ background: "#0d1120" }}>
      <motion.div
        className="h-full"
        style={{
          background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)",
        }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}
