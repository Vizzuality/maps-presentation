// ── Slide type definitions (discriminated union) ──

export interface CoverSlide {
  type: "cover";
  emoji: string;
  title: string;
  subtitle: string;
}

export interface AgendaSlide {
  type: "agenda";
  title: string;
  sectionLabel: string;
  items: { n: string; text: string }[];
}

export interface SectionSlide {
  type: "section";
  number: string;
  title: string;
  icon: string;
  image: string;
}

export interface ContentSlide {
  type: "content";
  sectionLabel: string;
  title: string;
  body: string | null;
  highlight?: string;
  detail?: string;
  cards?: { emoji: string; name: string; desc: string }[];
}

export interface TwoColSlide {
  type: "two_col";
  sectionLabel: string;
  title: string;
  subtitle?: string;
  left: { heading: string; items: string[]; color: string };
  right: { heading: string; items: string[]; color: string };
  footnote?: string;
}

export interface VersusSlide {
  type: "versus";
  sectionLabel: string;
  title: string;
  left: {
    label: string;
    emoji: string;
    flow: string;
    points: string[];
  };
  right: {
    label: string;
    emoji: string;
    flow: string;
    points: string[];
  };
}

export interface TableSlide {
  type: "table" | "projection_table";
  sectionLabel: string;
  title: string;
  headers: string[];
  rows: string[][];
  footnote?: string;
}

export interface LibCardSlide {
  type: "lib_card";
  sectionLabel: string;
  title: string;
  emoji: string;
  tagline: string;
  meta: { k: string; v: string }[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface FlowchartSlide {
  type: "flowchart";
  sectionLabel: string;
  title: string;
  decisions: { q: string; a: string; icon: string }[];
}

export interface TilesVisualSlide {
  type: "tiles_visual";
  sectionLabel: string;
  title: string;
}

export interface TileUrlSlide {
  type: "tile_url";
  sectionLabel: string;
  title: string;
}

export interface OrangeSlide {
  type: "orange";
  sectionLabel: string;
  title: string;
  subtitle: string;
}

export interface ProjectionsSlide {
  type: "projections";
  sectionLabel: string;
  title: string;
}

export interface ResourcesSlide {
  type: "resources";
  sectionLabel: string;
  title: string;
  links: { name: string; url: string }[];
}

export interface EndSlide {
  type: "end";
  emoji: string;
  title: string;
  subtitle: string;
}

export type Slide =
  | CoverSlide
  | AgendaSlide
  | SectionSlide
  | ContentSlide
  | TwoColSlide
  | VersusSlide
  | TableSlide
  | LibCardSlide
  | FlowchartSlide
  | TilesVisualSlide
  | TileUrlSlide
  | OrangeSlide
  | ProjectionsSlide
  | ResourcesSlide
  | EndSlide;

// ── Slide data ──

export const slides: Slide[] = [
  {
    type: "cover",
    emoji: "\u{1F5FA}\uFE0F",
    title: "Maps on the Web",
    subtitle: "From zero to choosing your stack",
  },
  {
    type: "agenda",
    title: "Agenda",
    sectionLabel: "",
    items: [
      { n: "01", text: "How does a map work in the browser?" },
      { n: "02", text: "Projections: flattening a sphere" },
      { n: "03", text: "Raster Tiles vs Vector Tiles" },
      { n: "04", text: "The library ecosystem" },
      { n: "05", text: "Library comparison" },
      { n: "06", text: "Tile & data providers" },
      { n: "07", text: "When to use what?" },
      { n: "08", text: "Resources" },
    ],
  },

  // ── SECTION 1 ──
  {
    type: "section",
    number: "01",
    title: "How Does a Map Work in the Browser?",
    icon: "tile",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "content",
    sectionLabel: "01 \u00B7 How Does a Map Work in the Browser?",
    title: "It\u2019s Not One Giant Image",
    body: "A web map is a dynamic puzzle assembled in real time.",
    highlight:
      "The world is divided into small square tiles (256\u00D7256 or 512\u00D7512 px). When you pan or zoom, the browser requests only the tiles it needs.",
    detail:
      "At zoom 18 (street level) there are ~69 billion possible tiles. That\u2019s why they\u2019re loaded on demand.",
  },
  {
    type: "tiles_visual",
    sectionLabel: "01 \u00B7 How Does a Map Work in the Browser?",
    title: "The Tile System \u2014 Zoom Levels",
  },
  {
    type: "tile_url",
    sectionLabel: "01 \u00B7 How Does a Map Work in the Browser?",
    title: "The Tile URL",
  },

  // ── SECTION 2 ──
  {
    type: "section",
    number: "02",
    title: "Projections: Flattening a Sphere",
    icon: "globe",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "orange",
    sectionLabel: "02 \u00B7 Projections: Flattening a Sphere",
    title: "The Orange Peel Problem",
    subtitle: "Why every flat map is a beautiful lie",
  },
  {
    type: "projections",
    sectionLabel: "02 \u00B7 Projections: Flattening a Sphere",
    title: "Peeling the Orange: 5 Strategies",
  },
  {
    type: "projection_table" as "table",
    sectionLabel: "02 \u00B7 Projections: Flattening a Sphere",
    title: "Projection Comparison",
    headers: ["Projection", "Preserves", "Distorts", "Best for"],
    rows: [
      ["Mercator", "Angles & shapes", "Size (poles huge)", "Navigation, web maps"],
      ["Robinson", "Nothing perfectly", "Mild compromise", "General world maps"],
      ["Mollweide", "Area (equal-area)", "Shapes at edges", "Thematic / data maps"],
      ["Azimuthal Eq.", "Distance from center", "Everything at edges", "Polar maps, airline routes"],
      ["Goode Homolosine", "Area", "Continuity (cut)", "Textbooks, land analysis"],
    ],
    footnote:
      "Web Mercator (EPSG:3857) dominates web maps. Only worry about others for data viz or scientific use cases.",
  },
  {
    type: "two_col",
    sectionLabel: "02 \u00B7 Projections: Flattening a Sphere",
    title: "Web Mercator (EPSG:3857)",
    subtitle: 'Used by 99% of web maps \u2014 the "stretch and tape" approach',
    left: {
      heading: "Why Mercator?",
      items: [
        "Angles are preserved (navigation)",
        "North is always up",
        "Simple math for tile grids",
        "Shapes of small areas are accurate",
      ],
      color: "emerald",
    },
    right: {
      heading: "The Catch",
      items: [
        "Distorts size near the poles",
        "Greenland looks as big as Africa (14\u00D7 smaller)",
        "Can\u2019t show the poles at all",
        "Misleading for area comparisons",
      ],
      color: "rose",
    },
    footnote:
      "For most web apps, Mercator works perfectly. Only worry if you need accurate area representation.",
  },

  // ── SECTION 3 ──
  {
    type: "section",
    number: "03",
    title: "Raster Tiles vs Vector Tiles",
    icon: "raster_vector",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "versus",
    sectionLabel: "03 \u00B7 Raster Tiles vs Vector Tiles",
    title: "The Core Difference",
    left: {
      label: "Raster Tiles",
      emoji: "\u{1F5BC}\uFE0F",
      flow: "Server renders image \u2192 sends PNG \u2192 browser displays",
      points: [
        "Pre-rendered images (PNG/JPEG)",
        "No client-side customization",
        "Lighter on the client",
        "Heavier on bandwidth",
        "No rotation or tilt",
      ],
    },
    right: {
      label: "Vector Tiles",
      emoji: "\u{1F4D0}",
      flow: "Server sends data \u2192 browser renders with GPU (WebGL)",
      points: [
        "Raw geometry + metadata (Protobuf)",
        "Fully customizable styles",
        "Smooth 3D, rotation, tilt",
        "Lighter on bandwidth",
        "Needs decent GPU",
      ],
    },
  },
  {
    type: "table",
    sectionLabel: "03 \u00B7 Raster Tiles vs Vector Tiles",
    title: "Comparison Table",
    headers: ["Feature", "Raster", "Vector"],
    rows: [
      ["Rendering", "Server-side", "Client-side (WebGL)"],
      ["Customization", "None / limited", "Full (colors, fonts, layers)"],
      ["File size", "Larger (PNG)", "Smaller (Protobuf)"],
      ["3D / tilt / rotate", "\u274C No", "\u2705 Yes"],
      ["Client performance", "Light", "Needs decent GPU"],
      ["Retina support", "Needs 2\u00D7 tiles", "Native"],
      ["Interactivity", "Click on tile only", "Click on features"],
    ],
    footnote:
      "Rule of thumb: simple map with markers \u2192 raster. Custom styling, 3D, rich interactivity \u2192 vector.",
  },

  // ── SECTION 4 ──
  {
    type: "section",
    number: "04",
    title: "The Library Ecosystem",
    icon: "libs",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "lib_card",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "Leaflet",
    emoji: "\u{1F33F}",
    tagline: "The classic. The jQuery of maps.",
    meta: [
      { k: "Type", v: "Raster-first" },
      { k: "Rendering", v: "DOM + Canvas/SVG" },
      { k: "Size", v: "~42 KB gz" },
      { k: "License", v: "BSD-2" },
    ],
    pros: [
      "Dead simple API \u2014 5 lines of code",
      "800+ plugins",
      "Battle-tested, massive community",
      "Works on old browsers",
    ],
    cons: [
      "No native vector tiles",
      "No 3D, tilt, or rotation",
      "Perf drops with 1000s of markers",
    ],
    bestFor: "Simple maps, prototypes, small bundle size",
  },
  {
    type: "lib_card",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "Mapbox GL JS",
    emoji: "\u{1F3A8}",
    tagline: "The premium experience.",
    meta: [
      { k: "Type", v: "Vector-first" },
      { k: "Rendering", v: "WebGL" },
      { k: "Size", v: "~230 KB gz" },
      { k: "License", v: "Proprietary (v2+)" },
    ],
    pros: [
      "Gorgeous default styles",
      "Smooth 3D, rotation, pitch",
      "Powerful data viz (heatmaps, extrusions)",
      "Geocoding & directions included",
    ],
    cons: [
      "Requires access token (paid)",
      "Proprietary lock-in since v2",
      "Heavy bundle",
      "Must use Mapbox tiles",
    ],
    bestFor: "Production apps with budget, beautiful UX, data viz",
  },
  {
    type: "lib_card",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "MapLibre GL JS",
    emoji: "\u{1F5FD}",
    tagline: "The open-source fork of Mapbox GL v1.",
    meta: [
      { k: "Type", v: "Vector-first" },
      { k: "Rendering", v: "WebGL" },
      { k: "Size", v: "~230 KB gz" },
      { k: "License", v: "BSD-3" },
    ],
    pros: [
      "Same power, no vendor lock-in",
      "Use ANY tile provider",
      "Active community, growing fast",
      "3D terrain, sky, globe view",
    ],
    cons: [
      "No bundled geocoding/directions",
      "Smaller ecosystem than Mapbox",
      "Default styles less polished",
    ],
    bestFor: "Production apps wanting vector maps without lock-in",
  },
  {
    type: "lib_card",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "Google Maps JS API",
    emoji: "\u{1F535}",
    tagline: "The behemoth.",
    meta: [
      { k: "Type", v: "Raster + Vector (hybrid)" },
      { k: "Rendering", v: "Proprietary" },
      { k: "Size", v: "~300+ KB CDN" },
      { k: "License", v: "Proprietary" },
    ],
    pros: [
      "Best geocoding & directions in the world",
      "Familiar UI for all users",
      "Places API, traffic, transit, Street View",
      "Excellent mobile SDKs",
    ],
    cons: [
      "Expensive at scale",
      "Limited style customization",
      "Closed ecosystem",
      "Restrictive ToS",
    ],
    bestFor: "When you need Google\u2019s data (Places, Directions, Street View)",
  },
  {
    type: "lib_card",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "ArcGIS Maps SDK for JS",
    emoji: "\u{1F7E3}",
    tagline: "The enterprise GIS powerhouse.",
    meta: [
      { k: "Type", v: "Vector + 3D" },
      { k: "Rendering", v: "WebGL / WebGPU" },
      { k: "Size", v: "Modular (tree-shake)" },
      { k: "License", v: "Proprietary (Esri)" },
    ],
    pros: [
      "Deep GIS analysis built-in (spatial queries, geoprocessing)",
      "Massive catalog of authoritative data layers",
      "Advanced 3D scenes (buildings, terrain, point clouds)",
      "Tight integration with ArcGIS Online / Enterprise",
    ],
    cons: [
      "Requires ArcGIS subscription (expensive)",
      "Steep learning curve \u2014 GIS-heavy API",
      "Heavier than most web-only libs",
      "Vendor lock-in to the Esri ecosystem",
    ],
    bestFor: "Enterprise GIS, government, utilities, spatial analysis at scale",
  },
  {
    type: "content",
    sectionLabel: "04 \u00B7 The Library Ecosystem",
    title: "Honorable Mentions",
    body: null,
    cards: [
      {
        emoji: "\u{1F52C}",
        name: "OpenLayers",
        desc: "Very powerful for complex GIS use cases. Steep learning curve, bigger bundle. Great for scientific/gov apps.",
      },
      {
        emoji: "\u{1F4CA}",
        name: "Deck.gl",
        desc: "Visualization layer by Uber. Renders millions of data points via WebGL. Usually paired with MapLibre.",
      },
      {
        emoji: "\u{1F30D}",
        name: "CesiumJS",
        desc: "Full 3D globe for satellite imagery, terrain, aerospace. Overkill for most web apps.",
      },
    ],
  },

  // ── SECTION 5 ──
  {
    type: "section",
    number: "05",
    title: "The Big Comparison",
    icon: "compare",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "table",
    sectionLabel: "05 \u00B7 The Big Comparison",
    title: "Library Comparison",
    headers: ["", "Leaflet", "Mapbox GL", "MapLibre", "Google Maps", "ArcGIS JS"],
    rows: [
      ["Vector tiles", "Plugin", "\u2705 Native", "\u2705 Native", "Proprietary", "\u2705 Native"],
      ["3D / Tilt", "\u274C", "\u2705", "\u2705", "Limited", "\u2705 Advanced"],
      ["Bundle size", "~42 KB", "~230 KB", "~230 KB", "CDN ~300 KB", "Modular"],
      ["License", "BSD-2", "Proprietary", "BSD-3", "Proprietary", "Proprietary"],
      ["Free tier", "\u221E (OSM)", "50K loads", "\u221E (free tiles)", "$200/mo credit", "Dev use only"],
      ["GIS analysis", "\u274C", "Basic", "Basic", "\u274C", "\u2705 Deep"],
      ["Learning curve", "Very low", "Medium", "Medium", "Low", "High"],
      ["Lock-in risk", "None", "High", "None", "High", "High"],
    ],
  },

  // ── SECTION 6 ──
  {
    type: "section",
    number: "06",
    title: "Tile & Data Providers",
    icon: "providers",
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "two_col",
    sectionLabel: "06 \u00B7 Tile & Data Providers",
    title: "Where Do Tiles Come From?",
    left: {
      heading: "Free / Open Source",
      items: [
        "OpenStreetMap \u2014 the Wikipedia of maps",
        "OpenFreeMap \u2014 free vector tiles, no API key",
        "Protomaps \u2014 self-host on S3/CloudFlare",
      ],
      color: "emerald",
    },
    right: {
      heading: "Commercial",
      items: [
        "Mapbox \u2014 premium, pay per use",
        "MapTiler \u2014 affordable, generous free tier",
        "Stadia Maps \u2014 good free tier",
        "Thunderforest \u2014 outdoor/cycling",
        "CARTO \u2014 spatial analytics",
        "HERE \u2014 automotive & logistics",
      ],
      color: "blue",
    },
  },

  // ── SECTION 7 ──
  {
    type: "section",
    number: "07",
    title: "When to Use What?",
    icon: "decision",
    image:
      "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "flowchart",
    sectionLabel: "07 \u00B7 When to Use What?",
    title: "Decision Guide",
    decisions: [
      { q: "Need enterprise GIS or spatial analysis?", a: "ArcGIS Maps SDK", icon: "\u{1F7E3}" },
      { q: "Need Google data (Places, Street View, Directions)?", a: "Google Maps API", icon: "\u{1F535}" },
      { q: "Need custom styles, 3D, or vector tiles with budget?", a: "Mapbox GL JS", icon: "\u{1F3A8}" },
      { q: "Need custom styles, 3D, vector tiles \u2014 open source?", a: "MapLibre GL JS", icon: "\u{1F5FD}" },
      { q: "Just need a simple map with markers?", a: "Leaflet + OSM", icon: "\u{1F33F}" },
      { q: "Need heavy data visualization?", a: "Deck.gl + MapLibre", icon: "\u{1F4CA}" },
    ],
  },

  // ── SECTION 8 ──
  {
    type: "section",
    number: "08",
    title: "Resources & Next Steps",
    icon: "resources",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2560&q=60",
  },
  {
    type: "resources",
    sectionLabel: "08 \u00B7 Resources & Next Steps",
    title: "Resources",
    links: [
      { name: "Leaflet", url: "leafletjs.com" },
      { name: "MapLibre", url: "maplibre.org" },
      { name: "Mapbox GL JS", url: "docs.mapbox.com/mapbox-gl-js" },
      { name: "ArcGIS Maps SDK", url: "developers.arcgis.com/javascript" },
      { name: "OpenStreetMap Wiki", url: "wiki.openstreetmap.org" },
      { name: "OpenFreeMap", url: "openfreemap.org" },
      { name: "Protomaps", url: "protomaps.com" },
      { name: "Deck.gl", url: "deck.gl" },
      { name: "MapTiler", url: "maptiler.com" },
    ],
  },
  {
    type: "end",
    emoji: "\u{1F680}",
    title: "Thank You!",
    subtitle: "Questions?",
  },
];
