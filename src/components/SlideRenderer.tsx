import { AnimatePresence, motion } from "framer-motion";
import type { Slide } from "../data/slides";
import { CoverSlide } from "./slides/CoverSlide";
import { EndSlide } from "./slides/EndSlide";
import { SectionSlide } from "./slides/SectionSlide";
import { AgendaSlide } from "./slides/AgendaSlide";
import { ContentSlide } from "./slides/ContentSlide";
import { TwoColSlide } from "./slides/TwoColSlide";
import { VersusSlide } from "./slides/VersusSlide";
import { TableSlide } from "./slides/TableSlide";
import { LibCardSlide } from "./slides/LibCardSlide";
import { FlowchartSlide } from "./slides/FlowchartSlide";
import { ResourcesSlide } from "./slides/ResourcesSlide";
import { TilesVisualSlide } from "./slides/TilesVisualSlide";
import { TileUrlSlide } from "./slides/TileUrlSlide";
import { OrangeSlide } from "./slides/OrangeSlide";
import { ProjectionsSlide } from "./slides/ProjectionsSlide";

interface Props {
  slide: Slide;
  index: number;
  total: number;
}

function renderSlideContent(slide: Slide, index: number, total: number) {
  const common = { slideNum: index, total };
  switch (slide.type) {
    case "cover":
      return <CoverSlide slide={slide} {...common} />;
    case "end":
      return <EndSlide slide={slide} {...common} />;
    case "section":
      return <SectionSlide slide={slide} {...common} />;
    case "agenda":
      return <AgendaSlide slide={slide} {...common} />;
    case "content":
      return <ContentSlide slide={slide} {...common} />;
    case "two_col":
      return <TwoColSlide slide={slide} {...common} />;
    case "versus":
      return <VersusSlide slide={slide} {...common} />;
    case "table":
    case "projection_table":
      return <TableSlide slide={slide} {...common} />;
    case "lib_card":
      return <LibCardSlide slide={slide} {...common} />;
    case "flowchart":
      return <FlowchartSlide slide={slide} {...common} />;
    case "resources":
      return <ResourcesSlide slide={slide} {...common} />;
    case "tiles_visual":
      return <TilesVisualSlide slide={slide} {...common} />;
    case "tile_url":
      return <TileUrlSlide slide={slide} {...common} />;
    case "orange":
      return <OrangeSlide slide={slide} {...common} />;
    case "projections":
      return <ProjectionsSlide slide={slide} {...common} />;
    default:
      return null;
  }
}

export function SlideRenderer({ slide, index, total }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="w-full h-full"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {renderSlideContent(slide, index, total)}
      </motion.div>
    </AnimatePresence>
  );
}
