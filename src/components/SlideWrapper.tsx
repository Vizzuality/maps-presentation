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
    <div className="w-full h-full flex flex-col justify-center items-center px-24 py-14 relative">
      <SectionBar label={sectionLabel} />
      <div className={`w-full flex justify-center ${sectionLabel ? "mt-10" : ""}`}>{children}</div>
      <div className="absolute bottom-6 right-12 text-base font-mono" style={{ color: "#4a5568" }}>
        {slideNum + 1} / {total}
      </div>
    </div>
  );
}
