import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { getFestivalConfigFromPath } from "./configs/index.js";

function getLangFromSearch(search) {
  const params = new URLSearchParams(search);
  return params.get("lang") === "en" ? "en" : "zh";
}

function ResponsiveImage({ src, alt, width, height, eager = false }) {
  return React.createElement("img", {
    src,
    alt,
    width,
    height,
    loading: eager ? "eager" : "lazy",
    fetchPriority: eager ? "high" : undefined,
  });
}

function getThemeStyle(theme) {
  if (!theme) {
    return {};
  }

  return {
    "--bg-main": theme.bgMain,
    "--bg-hero": theme.bgHero,
    "--bg-soft": theme.bgSoft,
    "--bg-card": theme.bgCard,
    "--text-strong": theme.textStrong,
    "--text-body": theme.textBody,
    "--text-soft": theme.textSoft,
    "--text-on-dark": theme.textOnDark,
    "--green-700": theme.accentPrimary,
    "--green-800": theme.accentStrong,
    "--green-900": theme.footerBg,
    "--line-soft": theme.lineSoft,
    "--line-card": theme.lineCard,
    "--blue-note": theme.noteColor,
    "--shadow-soft": theme.shadowSoft,
    "--body-accent": theme.bodyAccent,
    "--hero-orb": theme.heroOrb,
    "--page-orb": theme.pageOrb,
    "--hero-title": theme.heroTitle,
    "--section-title": theme.sectionTitle,
    "--section-kicker": theme.sectionKicker,
    "--badge-bg": theme.badgeBg,
    "--badge-muted-bg": theme.badgeMutedBg,
    "--habit-bg": theme.habitBg,
    "--habit-border": theme.habitBorder,
    "--habit-title": theme.habitTitle,
    "--footer-top-line": theme.footerTopLine,
  };
}

function HeroSection({ copy, heroImage }) {
  const badges = copy.heroBadges || [copy.badgeOrigins, copy.badgeCustoms];

  return React.createElement(
    "section",
    { className: "hero" },
    React.createElement(
      "div",
      { className: "hero__copy" },
      React.createElement("p", { className: "hero__eyebrow" }, copy.heroEyebrow),
      React.createElement("h1", null, copy.heroTitle),
      React.createElement("p", { className: "hero__lead" }, copy.heroLead),
      React.createElement(
        "div",
        { className: "hero__badges", "aria-label": "festival sections" },
        ...badges.map((badge, index) => {
          const badgeClass =
            badge.variant === "muted" || (!badge.variant && index % 2 === 1)
              ? "badge badge--muted"
              : "badge";

          return badge.href
            ? React.createElement(
                "a",
                {
                  key: badge.text + index,
                  href: badge.href,
                  className: badgeClass,
                },
                badge.text,
              )
            : React.createElement(
                "span",
                {
                  key: badge.text + index,
                  className: badgeClass,
                },
                badge.text,
              );
        }),
      ),
    ),
    React.createElement(
      "figure",
      { className: "hero__media framed-media" },
      React.createElement(ResponsiveImage, {
        src: heroImage.avif,
        alt: copy.heroImageAlt,
        width: heroImage.width,
        height: heroImage.height,
        eager: true,
      }),
    ),
  );
}

function OriginsSection({ copy, originsImage }) {
  const hasDateCard = Boolean(copy.dateCardTitle && copy.solarDate && copy.lunarDate);

  return React.createElement(
    "section",
    { className: "section section--light", id: "origins" },
    React.createElement(
      "div",
      { className: "section__header" },
      React.createElement(
        "p",
        { className: "section__eyebrow section__eyebrow--blue" },
        copy.originsEyebrow,
      ),
      React.createElement("h2", null, copy.originsTitle),
      React.createElement("p", { className: "section__intro" }, copy.originsIntro),
    ),
    React.createElement(
      "div",
      { className: "origins-grid" },
      React.createElement(
        "figure",
        { className: "origins-grid__visual" },
        React.createElement(
          "div",
          { className: "framed-media framed-media--flat" },
          React.createElement(ResponsiveImage, {
            src: originsImage.avif,
            alt: copy.originsImageAlt,
            width: originsImage.width,
            height: originsImage.height,
          }),
        ),
        React.createElement("figcaption", null, copy.originsCaption),
      ),
      React.createElement(
        "div",
        { className: "origins-grid__cards" },
        hasDateCard
          ? React.createElement(
              "article",
              { className: "info-card info-card--date" },
              React.createElement("h3", { className: "date-card__title" }, copy.dateCardTitle),
              React.createElement(
                "div",
                { className: "date-row" },
                React.createElement("span", { className: "date-row__primary" }, copy.solarDate),
                React.createElement("span", { className: "date-row__secondary" }, copy.lunarDate),
              ),
            )
          : null,
        React.createElement(
          "article",
          { className: "info-card" },
          React.createElement("h3", null, copy.originCardTitle),
          React.createElement("p", null, copy.originCardBody),
          React.createElement(
            "div",
            { className: "pattern-row" },
            React.createElement("span", {
              className: "pattern-row__tile",
              "aria-hidden": "true",
            }),
            React.createElement("span", null, copy.originPatternText),
          ),
        ),
        React.createElement(
          "article",
          { className: "info-card" },
          React.createElement("h3", null, copy.historyCardTitle),
          React.createElement("p", null, copy.historyCardBody),
          React.createElement(
            "ul",
            { className: "timeline" },
            React.createElement("li", null, copy.historyPoint1),
            React.createElement("li", null, copy.historyPoint2),
          ),
        ),
      ),
    ),
  );
}

function CustomsSection({ copy, customsImages, noBottomRadius = false }) {
  const sectionClassName = noBottomRadius
    ? "section section--green section--no-bottom-radius"
    : "section section--green";

  return React.createElement(
    "section",
    { className: sectionClassName, id: "customs" },
    React.createElement(
      "div",
      { className: "customs-grid" },
      React.createElement(
        "div",
        { className: "customs-grid__content" },
        React.createElement(
          "div",
          { className: "section__header section__header--compact" },
          React.createElement("p", { className: "section__eyebrow" }, copy.customsEyebrow),
          React.createElement("h2", null, copy.customsTitle),
          React.createElement("p", { className: "section__intro" }, copy.customsIntro),
        ),
        React.createElement(
          "div",
          { className: "habit-list" },
          React.createElement(
            "article",
            { className: "habit-card" },
            React.createElement("h3", null, copy.habit1Title),
            React.createElement("p", null, copy.habit1Body),
          ),
          React.createElement(
            "article",
            { className: "habit-card" },
            React.createElement("h3", null, copy.habit2Title),
            React.createElement("p", null, copy.habit2Body),
          ),
          React.createElement(
            "article",
            { className: "habit-card" },
            React.createElement("h3", null, copy.habit3Title),
            React.createElement("p", null, copy.habit3Body),
          ),
        ),
      ),
      React.createElement(
        "div",
        { className: "customs-grid__gallery" },
        React.createElement(
          "figure",
          { className: "framed-media" },
          React.createElement(ResponsiveImage, {
            src: customsImages[0].avif,
            alt: copy.customDragonBoatAlt,
            width: customsImages[0].width,
            height: customsImages[0].height,
          }),
        ),
        React.createElement(
          "figure",
          { className: "framed-media" },
          React.createElement(ResponsiveImage, {
            src: customsImages[1].avif,
            alt: copy.customZongziAlt,
            width: customsImages[1].width,
            height: customsImages[1].height,
          }),
        ),
      ),
    ),
  );
}

function FooterSection({ copy, brandUrl, variant = "default" }) {
  if (variant === "editorial" && Array.isArray(copy.footerColumns)) {
    return React.createElement(
      "footer",
      { className: "footer footer--editorial" },
      React.createElement(
        "div",
        { className: "footer__brand footer__brand--editorial" },
        React.createElement("p", { className: "footer__title" }, copy.footerTitle),
        React.createElement("p", { className: "footer__subtitle" }, copy.footerSubtitle),
        copy.footerBrandNote
          ? React.createElement("p", { className: "footer__note" }, copy.footerBrandNote)
          : null,
      ),
      React.createElement(
        "div",
        { className: "footer__columns" },
        ...copy.footerColumns.map((column, index) =>
          React.createElement(
            "div",
            { className: "footer__column", key: `${column.heading}-${index}` },
            React.createElement("p", { className: "footer__column-title" }, column.heading),
            ...column.items.map((item, itemIndex) =>
              item.href
                ? React.createElement(
                    "a",
                    {
                      className: item.highlight
                        ? "footer__column-link footer__column-link--highlight"
                        : "footer__column-link",
                      href: item.href,
                      key: `${item.text}-${itemIndex}`,
                      target: item.external ? "_blank" : undefined,
                      rel: item.external ? "noreferrer" : undefined,
                    },
                    item.text,
                  )
                : React.createElement(
                    "p",
                    {
                      className: item.highlight
                        ? "footer__column-link footer__column-link--highlight"
                        : "footer__column-link",
                      key: `${item.text}-${itemIndex}`,
                    },
                    item.text,
                  ),
            ),
            column.description
              ? React.createElement(
                  "p",
                  { className: "footer__column-description" },
                  column.description,
                )
              : null,
          ),
        ),
      ),
    );
  }

  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "footer__brand" },
      React.createElement("p", { className: "footer__title" }, copy.footerTitle),
      React.createElement("p", { className: "footer__subtitle" }, copy.footerSubtitle),
    ),
    React.createElement(
      "nav",
      { className: "footer__nav", "aria-label": "festival footer navigation" },
      React.createElement("a", { href: "#origins" }, copy.footerOrigins),
      React.createElement("a", { href: "#customs" }, copy.footerCustoms),
      React.createElement("a", { href: "#top" }, copy.footerCulture),
      React.createElement(
        "a",
        {
          href: brandUrl,
          target: "_blank",
          rel: "noreferrer",
        },
        copy.footerSite,
      ),
    ),
  );
}

function FestivalPage({ config, lang }) {
  const copy = config.translations[lang] || config.translations.zh;
  const pageShellClassNames = [`page-shell`, `page-shell--${config.slug}`];
  if (config.customsNoBottomRadius) {
    pageShellClassNames.push("page-shell--customs-no-bottom");
  }
  if ((config.footerVariant || "default") === "default") {
    pageShellClassNames.push("page-shell--footer-default");
  }

  useEffect(() => {
    const themeStyle = getThemeStyle(config.theme);
    Object.entries(themeStyle).forEach(([key, value]) => {
      if (value) {
        document.documentElement.style.setProperty(key, value);
      }
    });

    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = "DayTicker";

    const metaDescription = document.getElementById("page-description");
    if (metaDescription) {
      metaDescription.setAttribute("content", copy.pageDescription);
    }

    return () => {
      Object.keys(themeStyle).forEach((key) => {
        document.documentElement.style.removeProperty(key);
      });
    };
  }, [config.theme, copy, lang]);

  return React.createElement(
    "div",
    { className: pageShellClassNames.join(" "), id: "top" },
    React.createElement(
      "main",
      { className: "festival-page" },
      React.createElement(HeroSection, {
        copy,
        heroImage: config.images.hero,
      }),
      React.createElement(OriginsSection, {
        copy,
        originsImage: config.images.origins,
      }),
      React.createElement(CustomsSection, {
        copy,
        customsImages: config.images.customs,
        noBottomRadius: Boolean(config.customsNoBottomRadius),
      }),
    ),
    React.createElement(FooterSection, {
      copy,
      brandUrl: config.brandUrl,
      variant: config.footerVariant || "default",
    }),
  );
}

function App() {
  const [lang, setLang] = useState(() => getLangFromSearch(window.location.search));
  const config = useMemo(() => getFestivalConfigFromPath(window.location.pathname), []);

  useEffect(() => {
    const onPopState = () => {
      setLang(getLangFromSearch(window.location.search));
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return React.createElement(FestivalPage, { config, lang });
}

createRoot(document.getElementById("root")).render(React.createElement(App));
