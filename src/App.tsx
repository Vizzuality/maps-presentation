import { useSlideNavigation } from "./hooks/useSlideNavigation";
import { Background } from "./components/Background";
import { ProgressBar } from "./components/ProgressBar";
import { SlideRenderer } from "./components/SlideRenderer";
import { Navigation } from "./components/Navigation";
import { SectionBar } from "./components/SectionBar";

function getSectionLabel(slide: Record<string, unknown>): string | undefined {
  if ("sectionLabel" in slide && typeof slide.sectionLabel === "string" && slide.sectionLabel) {
    return slide.sectionLabel;
  }
  return undefined;
}

export default function App() {
  const nav = useSlideNavigation();
  const sectionLabel = getSectionLabel(nav.slide as unknown as Record<string, unknown>);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden select-none grain" style={{ background: "#080b16" }}>
      <Background />
      <ProgressBar progress={nav.progress} />

      <div className="flex-1 overflow-y-auto relative z-10">
        <SectionBar label={sectionLabel} />
        <SlideRenderer slide={nav.slide} index={nav.current} total={nav.total} />
      </div>

      <div className="relative z-10">
        <Navigation
          current={nav.current}
          total={nav.total}
          isFirst={nav.isFirst}
          isLast={nav.isLast}
          goNext={nav.goNext}
          goPrev={nav.goPrev}
          goTo={nav.goTo}
        />
      </div>
    </div>
  );
}
