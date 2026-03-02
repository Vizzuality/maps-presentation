import type { ReactNode } from "react";
import { SectionBar } from "./SectionBar";

interface Props {
  children: ReactNode;
  slideNum: number;
  total: number;
  sectionLabel?: string;
}

export function SlideWrapper({ children, slideNum, total, sectionLabel }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-16 py-10 relative">
      <SectionBar label={sectionLabel} />
      <div className={sectionLabel ? "mt-8" : ""}>{children}</div>
      <div className="absolute bottom-6 right-10 text-sm font-mono" style={{ color: "#4a5568" }}>
        {slideNum + 1} / {total}
      </div>
    </div>
  );
}
