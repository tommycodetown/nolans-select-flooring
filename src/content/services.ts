export const imageRoot = "/images/nolans floors photos";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  seoDescription: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  imagePosition?: string;
  mode: "installation" | "refinishing" | "repair" | "lvt" | "stairs" | "custom";
  handlesTitle: string;
  handlesIntro: string;
  capabilities: { title: string; text: string }[];
  why: string;
};

export const services: Service[] = [
  {
    slug: "custom-decorative-flooring",
    number: "01",
    title: "Custom & Decorative Flooring",
    shortTitle: "Custom & decorative",
    seoDescription: "Custom and decorative hardwood flooring in New York City, including herringbone, parquet, borders and intricate layouts.",
    intro: "Custom and decorative flooring for projects requiring detailed layouts, patterns, borders and precise integration with the surrounding space.",
    heroImage: `${imageRoot}/Custom Flooring.JPG`,
    heroAlt: "Herringbone hardwood meeting a bordered inlay at the corner of a room",
    mode: "custom",
    handlesTitle: "The layout has to work with the room.",
    handlesIntro: "Decorative flooring has to be planned around the shape of the space, sightlines, doorways, stairs and adjoining floors, not simply repeated across the room.",
    capabilities: [
      { title: "Herringbone & chevron", text: "Directional layouts carefully set out around the room and its main sightlines." },
      { title: "Parquet", text: "Block and geometric patterns laid out to suit the space and the required design." },
      { title: "Borders & transitions", text: "Borders, perimeters and connections to adjoining flooring considered as part of the overall layout." },
      { title: "Custom designs", text: "Custom patterns, layouts and finishes tailored to the project." },
    ],
    why: "This work draws on Nolan’s practical site judgement and experience with intricate flooring. Final available techniques should be confirmed against the requirements of each project.",
  },
  {
    slug: "hardwood-flooring-installation",
    number: "02",
    title: "Hardwood Flooring Installation",
    shortTitle: "Hardwood installation",
    seoDescription: "Hardwood flooring installation in New York City for residential, commercial and renovation projects, including solid and engineered wood.",
    intro: "Hardwood flooring installed properly from the start, with the preparation and attention to detail the job requires.",
    heroImage: `${imageRoot}/Hardwood.JPG`,
    heroAlt: "Nolan crew installing light hardwood planks over a subfloor",
    mode: "installation",
    handlesTitle: "Good installation starts with what’s underneath.",
    handlesIntro: "The condition of the existing floor and subfloor matters just as much as the boards going on top. We handle the preparation and corrections needed before installation begins.",
    capabilities: [
      { title: "Hardwood flooring", text: "Solid and engineered hardwood installed to suit the requirements of the project." },
      { title: "Subfloor preparation", text: "Repair, leveling and preparation where the existing surface needs correction before installation." },
      { title: "Existing-floor connections", text: "New flooring carefully tied into existing boards, stairs and thresholds." },
      { title: "Finishing options", text: "Staining and custom colour work coordinated with the finished floor." },
    ],
    why: "Experienced crews can respond to the conditions they find on site while keeping the finished floor, transitions and surrounding construction in view.",
  },
  {
    slug: "floor-sanding-refinishing",
    number: "03",
    title: "Floor Sanding & Refinishing",
    shortTitle: "Sanding & refinishing",
    seoDescription: "Hardwood floor sanding and refinishing in New York City, including staining, bleaching, waxing and custom colour work.",
    intro: "Bring worn hardwood floors back to life with professional sanding and refinishing that restores their colour, character and finish.",
    heroImage: `${imageRoot}/Sanding.jpg`,
    heroAlt: "Floor sander and sanding disc on a light hardwood floor during refinishing",
    mode: "refinishing",
    handlesTitle: "Restore what’s already there.",
    handlesIntro: "Worn or damaged floors can often be brought back through careful sanding, colour work and refinishing, with the treatment chosen to suit the wood and the result required.",
    capabilities: [
      { title: "Sanding", text: "Removing the existing finish and preparing the wood for refinishing." },
      { title: "Staining", text: "Applying stain to achieve the required colour while working with the natural grain of the wood." },
      { title: "Custom colour work", text: "Bleaching, waxing and other colour treatments for floors that call for a more specific result." },
      { title: "Specialist finishes", text: "Scraping and other specialist surface treatments where required by the project." },
    ],
    why: "Nolan combines practical floor assessment with the crew experience needed to maintain an even result across rooms, edges and larger spaces.",
  },
  {
    slug: "floor-repair",
    number: "04",
    title: "Floor Repair",
    shortTitle: "Floor repair",
    seoDescription: "Hardwood floor repair in New York City, including damaged-board replacement, matching, subfloor repair and related refinishing.",
    intro: "We restore damaged sections with repairs that are built around the existing floor and finished to blend naturally.",
    heroImage: `${imageRoot}/1repair.webp`,
    heroAlt: "Nolan flooring specialist kneeling to repair a hardwood floor",
    imagePosition: "68% 50%",
    mode: "repair",
    handlesTitle: "Repair work starts with understanding the problem.",
    handlesIntro: "Floor repairs can range from replacing individual damaged boards to correcting issues with the subfloor beneath.",
    capabilities: [
      { title: "Damaged boards", text: "Removing and replacing boards where damage is limited to specific areas." },
      { title: "Matching existing flooring", text: "Replacement boards selected and fitted to blend as closely as possible with the surrounding floor." },
      { title: "Subfloor correction", text: "Repair and leveling where movement, damage or an uneven base is contributing to the problem." },
      { title: "Finish integration", text: "Sanding and refinishing where needed to help repaired areas blend back into the surrounding floor." },
    ],
    why: "Practical problem-solving matters most when the existing condition is uncertain. Nolan’s crews bring long site experience to that judgement.",
  },
  {
    slug: "lvt-vinyl-flooring",
    number: "05",
    title: "LVT / Vinyl Flooring",
    shortTitle: "LVT / vinyl",
    seoDescription: "LVT and vinyl plank flooring installation in New York City for residential, property-management and commercial projects.",
    intro: "LVT and vinyl plank flooring combine durability with easy maintenance, making them well suited to high-use spaces.",
    heroImage: `${imageRoot}/Vinyl and Luxury Vinyl Tile (LVT) Installation .webp`,
    heroAlt: "Nolan installer fitting plank flooring in a New York high-rise",
    imagePosition: "center 65%",
    mode: "lvt",
    handlesTitle: "Preparation matters just as much as the finished floor.",
    handlesIntro: "LVT and vinyl plank flooring still depend on a sound, properly prepared base and careful work around edges, transitions and adjoining surfaces.",
    capabilities: [
      { title: "LVT & vinyl plank", text: "Resilient plank flooring for residential, commercial and property-management projects." },
      { title: "Subfloor preparation", text: "Checking, repairing and preparing the base before the finished flooring is installed." },
      { title: "Residential & commercial applications", text: "LVT and vinyl plank installed across apartments, homes, managed properties and commercial spaces." },
      { title: "Transitions & finishing", text: "Careful cutting and finishing where the new floor meets thresholds, walls and adjoining surfaces." },
    ],
    why: "Nolan’s history with property managers and its ability to handle larger projects make the service relevant beyond single-room residential work.",
  },
  {
    slug: "hardwood-stairs",
    number: "06",
    title: "Hardwood Stairs",
    shortTitle: "Hardwood stairs",
    seoDescription: "Hardwood stair installation in New York City, including new treads and matching with adjoining hardwood floors.",
    intro: "Hardwood stairs finished to feel like a natural continuation of the surrounding flooring.",
    heroImage: `${imageRoot}/hardwood-stairs.png`,
    heroAlt: "Hardwood staircase with dark treads, white risers and matching newel post",
    mode: "stairs",
    handlesTitle: "Stairs should feel connected to the floor around them.",
    handlesIntro: "The materials, finish and transitions all need to work together so the stairs feel like a natural part of the surrounding flooring.",
    capabilities: [
      { title: "Hardwood treads", text: "Hardwood fitted to the existing stair structure with attention to fit, finish and consistency." },
      { title: "Landings", text: "Flooring carried through landings and changes in direction with clean, considered transitions." },
      { title: "Floor matching", text: "Material, colour and finish matched to the adjoining floor." },
      { title: "Repairs & integration", text: "Related floor repairs or replacement handled alongside the stair work where needed." },
    ],
    why: "Keeping stair and floor work connected gives one experienced flooring team responsibility for the material relationships that matter at the junction.",
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, Service>;
