export const earthDayFestivalConfig = {
  slug: "earthday",
  brandUrl: "https://dayticker.net",
  customsNoBottomRadius: true,
  footerVariant: "default",
  theme: {
    bgMain: "#FFF8F1",
    bgHero: "#EAF4EA",
    bgSoft: "#163328",
    bgCard: "rgba(244, 250, 241, 0.92)",
    textStrong: "#183A2A",
    textBody: "#3D5A49",
    textSoft: "#486454",
    textOnDark: "#E9F7EE",
    accentPrimary: "#2E6A46",
    accentStrong: "#1F5A3D",
    footerBg: "#16271D",
    lineSoft: "#A8C3AC",
    lineCard: "#BFD8C0",
    noteColor: "#9CD3B2",
    shadowSoft: "0 20px 48px rgba(30, 63, 47, 0.16)",
    bodyAccent: "rgba(169, 210, 191, 0.38)",
    heroOrb: "rgba(143, 184, 159, 0.42)",
    pageOrb: "rgba(243, 248, 241, 0.9)",
    heroTitle: "#183A2A",
    sectionTitle: "#1F5A3D",
    sectionKicker: "#2E7D57",
    badgeBg: "#F4FAF1",
    badgeMutedBg: "#DDEEDC",
    habitBg: "#F1FAF4",
    habitBorder: "#5F9578",
    habitTitle: "#24563E",
    footerTopLine: "#3D5F4B",
  },
  images: {
    hero: {
      avif: "./assets/hero-earthday.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-earthday.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-earthday-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-earthday-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "地球日专题网页，聚焦环境保护与可持续生活的真实行动。",
      heroEyebrow: "地球日专题 · Earth Day Feature",
      heroTitle: "在同一颗地球上，把每一天都过成可持续生活的行动日",
      heroLead:
        "从垃圾分类与循环回收，到城市植树、低碳通勤与节能饮食，这一页聚焦自然生态与真实行动，让环保不止是口号，而是今天就能开始的生活选择。",
      heroBadges: [
        { text: "地球生态", href: "#origins", variant: "primary" },
        { text: "行动指南", href: "#customs", variant: "muted" },
        { text: "每年 4 月 22 日", variant: "primary" },
        { text: "低碳生活", variant: "muted" },
      ],
      heroImageAlt: "地球日主题的自然与社区行动场景",
      originsEyebrow: "节日起源 · Earth Day Origins",
      originsTitle: "地球日从何而来？",
      originsIntro:
        "地球日定在每年 4 月 22 日，是全球关注环境保护与可持续发展的公共倡议日。它提醒我们：气候、空气、水源、土壤与生物多样性并不是抽象议题，而是每个人每日生活的基础条件。",
      originsImageAlt: "地球日主题下的生态社区与绿色生活插画场景",
      originsCaption: "让地球恢复呼吸，从今天的一次选择开始。",
      originCardTitle: "历史背景",
      originCardBody:
        "1970 年首个地球日活动推动了现代环保运动发展，并逐步形成跨国协作的环境倡议框架。",
      originPatternText: "从最初的环保倡议到今天的全球行动，地球日持续推动公众、学校、企业与城市共同参与。",
      historyCardTitle: "当代议题",
      historyCardBody:
        "今天的地球日聚焦气候变化、资源循环与生态公平，强调每个城市与家庭都可以成为行动单元。",
      historyPoint1: "行动方向：垃圾分类、旧物再利用、绿色消费与社区环保项目",
      historyPoint2: "现实意义：把“知道问题”推进为“今天就开始行动”",
      customsEyebrow: "地球日行动清单",
      customsTitle: "地球日可以怎样参与？",
      customsIntro:
        "从“我能做什么”出发：回收可回收物、减少食物浪费、支持本地绿色品牌、参与社区环保活动。",
      habit1Title: "① 减少一次性用品",
      habit1Body: "自带水杯、餐具与购物袋，减少塑料和包装浪费。",
      habit2Title: "② 低碳出行",
      habit2Body: "短途步行、骑行或公共交通，把个人碳排放降下来。",
      habit3Title: "③ 参与社区行动",
      habit3Body:
        "参与植树、净滩、旧物回收、环保市集，并把环保知识转化为家庭与办公室可执行的小习惯。",
      customDragonBoatAlt: "绿色办公与低碳协作场景",
      customZongziAlt: "社区层面的清洁与循环行动场景",
      footerTitle: "DayTicker · 地球日 Earth Day",
      footerSubtitle:
        "把环保议题转化为可执行的生活方案：从家庭到社区，从个体习惯到公共参与，让每一次选择都更接近可持续未来。",
      footerBrandNote: "Action starts today, and grows through everyday habits.",
      footerColumns: [
        {
          heading: "专题导览",
          items: [
            { text: "地球生态", href: "#origins" },
            { text: "行动指南", href: "#customs" },
            { text: "低碳生活", href: "#customs" },
          ],
        },
        {
          heading: "参与线索",
          items: [
            { text: "回收与再利用", href: "#customs" },
            { text: "植树与社区", href: "#customs" },
            { text: "节能与减排", href: "#customs" },
          ],
        },
        {
          heading: "品牌出口",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description: "继续浏览更多节日与公共议题专题，把可持续行动延展到每一个日常场景。",
        },
      ],
      footerOrigins: "地球生态",
      footerCustoms: "行动指南",
      footerCulture: "低碳生活",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "An Earth Day feature page focused on practical sustainability actions for daily life.",
      heroEyebrow: "Earth Day Feature",
      heroTitle:
        "On one shared planet, turn every day into an action day for sustainable living",
      heroLead:
        "From sorting waste and circular reuse to urban tree planting, low-carbon commuting, and energy-aware diets, this page centers real ecological action so sustainability becomes a choice you can start today.",
      heroBadges: [
        { text: "Earth & Ecology", href: "#origins", variant: "primary" },
        { text: "Action Guide", href: "#customs", variant: "muted" },
        { text: "April 22 Every Year", variant: "primary" },
        { text: "Low-Carbon Living", variant: "muted" },
      ],
      heroImageAlt: "Earth Day themed nature and community action scene",
      originsEyebrow: "Festival Origins · Earth Day Origins",
      originsTitle: "Where does Earth Day come from?",
      originsIntro:
        "Earth Day takes place every April 22 as a global public initiative for environmental protection and sustainable development. It reminds us that climate, air, water, soil, and biodiversity are daily life foundations, not abstract topics.",
      originsImageAlt: "Eco-community and green lifestyle illustration for Earth Day",
      originsCaption: "Let the Earth breathe again, starting with one decision today.",
      originCardTitle: "Historical Context",
      originCardBody:
        "The first Earth Day in 1970 accelerated modern environmental movements and gradually shaped a cross-border framework for environmental collaboration.",
      originPatternText:
        "From early advocacy to global action, Earth Day keeps mobilizing citizens, schools, businesses, and cities together.",
      historyCardTitle: "Current Priorities",
      historyCardBody:
        "Today, Earth Day focuses on climate change, circular resource systems, and ecological fairness, emphasizing that every city and household can be an action unit.",
      historyPoint1:
        "Action directions: waste sorting, reuse, green consumption, and community projects",
      historyPoint2:
        "Core message: move from awareness to action you can start right now",
      customsEyebrow: "Earth Day Action List",
      customsTitle: "How can we participate in Earth Day?",
      customsIntro:
        "Start with what you can do now: recycle, reduce food waste, support local green brands, and join community environmental actions.",
      habit1Title: "1. Reduce Single-Use Items",
      habit1Body:
        "Carry reusable bottles, utensils, and shopping bags to cut plastic and packaging waste.",
      habit2Title: "2. Choose Low-Carbon Mobility",
      habit2Body:
        "For short trips, walk, bike, or use public transit to reduce personal emissions.",
      habit3Title: "3. Join Community Action",
      habit3Body:
        "Take part in tree planting, beach or neighborhood cleanups, reuse markets, and bring eco habits into homes and offices.",
      customDragonBoatAlt: "Green office and low-carbon collaboration scene",
      customZongziAlt: "Community cleanup and circular action scene",
      footerTitle: "DayTicker · Earth Day",
      footerSubtitle:
        "Turn environmental topics into practical life plans, from households to communities, so every choice moves us closer to a sustainable future.",
      footerBrandNote: "Action starts today, and grows through everyday habits.",
      footerColumns: [
        {
          heading: "Feature Map",
          items: [
            { text: "Earth & Ecology", href: "#origins" },
            { text: "Action Guide", href: "#customs" },
            { text: "Low-Carbon Living", href: "#customs" },
          ],
        },
        {
          heading: "Participation",
          items: [
            { text: "Recycle & Reuse", href: "#customs" },
            { text: "Trees & Community", href: "#customs" },
            { text: "Energy & Emissions", href: "#customs" },
          ],
        },
        {
          heading: "Brand Exit",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description:
            "Explore more festival and public-topic features and extend sustainable action into everyday contexts.",
        },
      ],
      footerOrigins: "Earth & Ecology",
      footerCustoms: "Action Guide",
      footerCulture: "Low-Carbon Living",
      footerSite: "DayTicker Official Site",
    },
  },
};
