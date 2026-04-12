import { childrenDayFestivalConfig } from "./children.js";
import { bastilleDayFestivalConfig } from "./bastilleday.js";
import { christmasFestivalConfig } from "./christmas.js";
import { dragonBoatFestivalConfig } from "./dragonboat.js";
import { diwaliFestivalConfig } from "./diwali.js";
import { earthDayFestivalConfig } from "./earthday.js";
import { guangfujieFestivalConfig } from "./guangfujie.js";
import { bonfireNightFestivalConfig } from "./bonfirenight.js";
import { halloweenFestivalConfig } from "./halloween.js";
import { holiFestivalConfig } from "./holi.js";
import { independenceDayFestivalConfig } from "./independenceday.js";
import { kodomoNoHiFestivalConfig } from "./kodomonohi.js";
import { laborDayFestivalConfig } from "./laborday.js";
import { nationalDayFestivalConfig } from "./nationalday.js";
import { newYearFestivalConfig } from "./newyear.js";
import { oktoberfestFestivalConfig } from "./oktoberfest.js";
import { qingmingFestivalConfig } from "./qingming.js";
import { rioCarnivalFestivalConfig } from "./riocarnival.js";
import { showaDayFestivalConfig } from "./showaday.js";
import { thanksgivingFestivalConfig } from "./thanksgiving.js";
import { valentineFestivalConfig } from "./valentine.js";
import { womensDayFestivalConfig } from "./womensday.js";

export const festivalConfigs = {
  [childrenDayFestivalConfig.slug]: childrenDayFestivalConfig,
  [bastilleDayFestivalConfig.slug]: bastilleDayFestivalConfig,
  [christmasFestivalConfig.slug]: christmasFestivalConfig,
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
  [diwaliFestivalConfig.slug]: diwaliFestivalConfig,
  [earthDayFestivalConfig.slug]: earthDayFestivalConfig,
  [guangfujieFestivalConfig.slug]: guangfujieFestivalConfig,
  [bonfireNightFestivalConfig.slug]: bonfireNightFestivalConfig,
  [halloweenFestivalConfig.slug]: halloweenFestivalConfig,
  [holiFestivalConfig.slug]: holiFestivalConfig,
  [independenceDayFestivalConfig.slug]: independenceDayFestivalConfig,
  [kodomoNoHiFestivalConfig.slug]: kodomoNoHiFestivalConfig,
  [laborDayFestivalConfig.slug]: laborDayFestivalConfig,
  [nationalDayFestivalConfig.slug]: nationalDayFestivalConfig,
  [newYearFestivalConfig.slug]: newYearFestivalConfig,
  [oktoberfestFestivalConfig.slug]: oktoberfestFestivalConfig,
  [qingmingFestivalConfig.slug]: qingmingFestivalConfig,
  [rioCarnivalFestivalConfig.slug]: rioCarnivalFestivalConfig,
  [showaDayFestivalConfig.slug]: showaDayFestivalConfig,
  [thanksgivingFestivalConfig.slug]: thanksgivingFestivalConfig,
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
