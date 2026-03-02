interface Props {
  slideNum: number;
  total: number;
  color?: string;
}

export function SlideCounter({ slideNum, total, color = "#4a5568" }: Props) {
  return (
    <div className="absolute bottom-6 right-12 text-base font-mono" style={{ color }}>
      {slideNum + 1} / {total}
    </div>
  );
}
