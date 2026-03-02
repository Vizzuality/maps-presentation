interface Props {
  label?: string;
}

export function SectionBar({ label }: Props) {
  if (!label) return null;
  return (
    <div className="absolute top-0 left-0 right-0 h-12 flex items-center px-10 z-10 glass">
      <span className="text-sm font-mono tracking-wide" style={{ color: "#a78bfa" }}>
        {label}
      </span>
    </div>
  );
}
