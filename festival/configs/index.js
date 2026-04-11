import { dragonBoatFestivalConfig } from "./dragonboat.js";
import { qingmingFestivalConfig } from "./qingming.js";

export const festivalConfigs = {
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
  [qingmingFestivalConfig.slug]: qingmingFestivalConfig,
};

export function getFestivalSlugFromPath(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  return lastSegment.replace(/\.html$/i, "") || dragonBoatFestivalConfig.slug;
}

export function getFestivalConfigFromPath(pathname) {
  const slug = getFestivalSlugFromPath(pathname);
  return festivalConfigs[slug] || dragonBoatFestivalConfig;
}
