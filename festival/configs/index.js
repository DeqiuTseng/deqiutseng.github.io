import { dragonBoatFestivalConfig } from "./dragonboat.js";

export const festivalConfigs = {
  [dragonBoatFestivalConfig.slug]: dragonBoatFestivalConfig,
};

export function getFestivalSlugFromPath(pathname) {
  const lastSegment = pathname.split("/").pop() || "";
  return lastSegment.replace(/\.html$/i, "") || dragonBoatFestivalConfig.slug;
}

export function getFestivalConfigFromPath(pathname) {
  const slug = getFestivalSlugFromPath(pathname);
  return festivalConfigs[slug] || dragonBoatFestivalConfig;
}
