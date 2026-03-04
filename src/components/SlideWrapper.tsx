import type { ReactNode } from "react";
import { SlideCounter } from "./SlideCounter";

interface Props {
  children: ReactNode;
  slideNum: number;
  total: number;
  sectionLabel?: string;
}

export function SlideWrapper({ children, slideNum, total, sectionLabel }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-24 py-14 relative">
      <div className={`w-full flex justify-center ${sectionLabel ? "mt-10" : ""}`}>{children}</div>
      <SlideCounter slideNum={slideNum} total={total} />
    </div>
  );
}
