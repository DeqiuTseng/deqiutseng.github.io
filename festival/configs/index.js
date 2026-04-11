import { childrenDayFestivalConfig } from "./children.js";
import { dragonBoatFestivalConfig } from "./dragonboat.js";
import { nationalDayFestivalConfig } from "./nationalday.js";
import { newYearFestivalConfig } from "./newyear.js";
import { qingmingFestivalConfig } from "./qingming.js";
import { valentineFestivalConfig } from "./valentine.js";

export const festivalConfigs = {
  [childrenDayFestivalConfig.slug]: childrenDayFestivalConfig,
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
  [nationalDayFestivalConfig.slug]: nationalDayFestivalConfig,
  [newYearFestivalConfig.slug]: newYearFestivalConfig,
  [qingmingFestivalConfig.slug]: qingmingFestivalConfig,
  [valentineFestivalConfig.slug]: valentineFestivalConfig,
};

export function getFestivalSlugFromPath(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  return lastSegment.replace(/\.html$/i, "") || dragonBoatFestivalConfig.slug;
}

export function getFestivalConfigFromPath(pathname) {
  const slug = getFestivalSlugFromPath(pathname);
  return festivalConfigs[slug] || dragonBoatFestivalConfig;
}
