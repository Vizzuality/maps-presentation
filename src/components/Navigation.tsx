interface Props {
  current: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  goNext: () => void;
  goPrev: () => void;
  goTo: (i: number) => void;
}

export function Navigation({ current, total, isFirst, isLast, goNext, goPrev, goTo }: Props) {
  return (
    <div className="flex items-center justify-between px-10 py-4 glass-strong">
      <button
        onClick={goPrev}
        disabled={isFirst}
        className="px-6 py-2.5 rounded-xl text-base font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5"
        style={{ color: "#94a3b8" }}
      >
        &larr; Prev
      </button>

      <div className="flex gap-1">
        {Array.from({ length: total }, (_, j) => (
          <button
            key={j}
            onClick={() => goTo(j)}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: j === current ? 28 : 10,
              background: j === current ? "#a78bfa" : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>

      <button
        onClick={goNext}
        disabled={isLast}
        className="px-6 py-2.5 rounded-xl text-base font-medium transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        style={{
          background: "rgba(167,139,250,0.15)",
          color: "#c4b5fd",
        }}
      >
        Next &rarr;
      </button>
    </div>
  );
}
