import { childrenDayFestivalConfig } from "./children.js";
import { dragonBoatFestivalConfig } from "./dragonboat.js";
import { earthDayFestivalConfig } from "./earthday.js";
import { halloweenFestivalConfig } from "./halloween.js";
import { independenceDayFestivalConfig } from "./independenceday.js";
import { laborDayFestivalConfig } from "./laborday.js";
import { nationalDayFestivalConfig } from "./nationalday.js";
import { newYearFestivalConfig } from "./newyear.js";
import { qingmingFestivalConfig } from "./qingming.js";
import { valentineFestivalConfig } from "./valentine.js";
import { womensDayFestivalConfig } from "./womensday.js";

export const festivalConfigs = {
  [childrenDayFestivalConfig.slug]: childrenDayFestivalConfig,
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
  [earthDayFestivalConfig.slug]: earthDayFestivalConfig,
  [halloweenFestivalConfig.slug]: halloweenFestivalConfig,
  [independenceDayFestivalConfig.slug]: independenceDayFestivalConfig,
  [laborDayFestivalConfig.slug]: laborDayFestivalConfig,
  [nationalDayFestivalConfig.slug]: nationalDayFestivalConfig,
  [newYearFestivalConfig.slug]: newYearFestivalConfig,
  [qingmingFestivalConfig.slug]: qingmingFestivalConfig,
  [valentineFestivalConfig.slug]: valentineFestivalConfig,
  [womensDayFestivalConfig.slug]: womensDayFestivalConfig,
};

function normalizeFestivalSlug(value) {
  return (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function getFestivalSlugFromPath(pathname) {
  const segments = (pathname || "").split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";
  const normalized = normalizeFestivalSlug(lastSegment.replace(/\.html$/i, ""));
  return normalized || dragonBoatFestivalConfig.slug;
}

export function getFestivalConfigFromPath(pathname) {
  const slug = getFestivalSlugFromPath(pathname);
  return festivalConfigs[slug] || dragonBoatFestivalConfig;
}
