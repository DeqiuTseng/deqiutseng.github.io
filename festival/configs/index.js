import { dragonBoatFestivalConfig } from "./dragonboat.js";
import { nationalDayFestivalConfig } from "./nationalday.js";
import { qingmingFestivalConfig } from "./qingming.js";

export const festivalConfigs = {
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
  [nationalDayFestivalConfig.slug]: nationalDayFestivalConfig,
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
