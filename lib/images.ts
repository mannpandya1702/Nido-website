// Curated, content-verified photography (Unsplash CDN). Every image below was
// visually audited for a warm, cozy, *vegetarian* rooftop-cafe brand — no meat,
// no off-tone bar shots. A single helper keeps the treatment consistent so the
// varied sources read as one editorial set.

const BASE = "https://images.unsplash.com/photo-";

export function img(id: string, w = 1400, q = 80): string {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const photos = {
  // Ambiance / the space
  rooftopTerrace: "1559339352-11d035aa65de", // open-air pergola terrace at dusk
  plantCafe: "1600093463592-8e36ae95ef56", // lush hanging-plant interior
  brightCafe: "1567521464027-f127ff144326", // airy cafe, big windows
  communalCafe: "1555396273-367ea4eb4db5", // long communal table
  darkInterior: "1517248135467-4c7edcad34c4", // moody upscale interior
  relaxNeon: "1481833761820-0509d3217039", // "RELAX" window
  windowTable: "1445116572660-236099ec97a0", // window seat + french press
  cafeCounter: "1493857671505-72967e2e2760", // counter + menu board

  // Coffee
  cappuccino: "1509042239860-f550ce710b93",
  glassLatte: "1517701550927-30cf4ba1dba5",
  pourOver: "1442512595331-e89e73853f31",

  // Cold drinks (all veg / mocktail)
  icedCoffee: "1461023058943-07fcbe16d735",
  mojito: "1551538827-9c037cb4f32a",
  mangoCooler: "1546173159-315724a31696",
  lemonMint: "1621263764928-df1444c5e859",
  hotChocolate: "1517578239113-b03992dcdd25",

  // Food (vegetarian)
  pasta: "1621996346565-e3dbc646d9a9", // penne, red sauce
  pizza: "1513104890138-7c749659a591",
  sandwich: "1528735602780-2552fd46c7af",
  fries: "1541592106381-b31e9677c0e5",
  fruitBowl: "1490474418585-ba9bad8fd0ea",
  waffle: "1562376552-0d160a2f238d",

  // People / conversations
  peopleCheers: "1533777419517-3e4017e2e15a",
} as const;
