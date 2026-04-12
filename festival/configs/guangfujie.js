export const guangfujieFestivalConfig = {
  slug: "guangfujie",
  brandUrl: "https://dayticker.net",
  customsNoBottomRadius: true,
  footerVariant: "default",
  theme: {
    bgMain: "#FFF4EB",
    bgHero: "#FFF0E3",
    bgSoft: "#5A2404",
    bgCard: "rgba(244, 250, 241, 0.92)",
    textStrong: "#5A2200",
    textBody: "#7A4B2A",
    textSoft: "#6F4930",
    textOnDark: "#FFEBDD",
    accentPrimary: "#9A3E00",
    accentStrong: "#8D3B00",
    footerBg: "#3A1805",
    lineSoft: "#E2B07D",
    lineCard: "#CFE5D8",
    noteColor: "#FFBD8A",
    shadowSoft: "0 20px 48px rgba(122, 46, 0, 0.18)",
    bodyAccent: "rgba(243, 194, 125, 0.35)",
    heroOrb: "rgba(204, 138, 84, 0.34)",
    pageOrb: "rgba(255, 247, 239, 0.86)",
    heroTitle: "#5A2200",
    sectionTitle: "#8D3B00",
    sectionKicker: "#A44A00",
    badgeBg: "#F4FAF1",
    badgeMutedBg: "#DDEEDC",
    habitBg: "#F1FAF4",
    habitBorder: "#5F9578",
    habitTitle: "#8C3F0F",
    footerTopLine: "#8A4A26",
  },
  images: {
    hero: {
      avif: "./assets/hero-guangfujie.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-guangfujie.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-guangfujie-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-guangfujie-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription:
        "光复节专题网页，介绍越南 4·30 光复节（统一日）的历史背景、纪念方式与城市公共文化。",
      heroEyebrow: "越南专题 · 光复节",
      heroTitle: "红旗映照城市记忆：走进 4·30 光复节",
      heroLead:
        "光复节（越南统一日）在每年 4 月 30 日纪念国家统一的重要历史时刻。节日期间，城市会举行纪念活动、社区庆典与公共文化展示，强调团结、和平与发展。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "节日玩法", href: "#customs", variant: "muted" },
        { text: "每年 4 月 30 日", variant: "primary" },
        { text: "Reunification / Vietnam", variant: "muted" },
      ],
      heroImageAlt: "光复节主题主视觉，展现城市纪念氛围",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "光复节从何而来？",
      originsIntro:
        "4 月 30 日被视为越南现代史中的关键日期，后续成为国家统一纪念日。如今，光复节既是历史纪念，也是面向公众的国家与城市文化活动。",
      originsImageAlt: "光复节历史纪念与城市公共活动场景",
      originsCaption:
        "光复节的重要意义在于连接过去与当下：通过纪念与公共叙事，让历史记忆进入日常教育与社会共识。",
      originCardTitle: "历史脉络",
      originCardBody:
        "节日源于现代历史节点，逐步发展为全国范围的公共纪念机制。",
      originPatternText: "历史记忆、城市活动与公共叙事共同构成光复节的当代表达。",
      historyCardTitle: "当代意义",
      historyCardBody:
        "今天的光复节强调和平发展与社会团结，也成为城市文化形象的重要时间节点。",
      historyPoint1: "常见形式：纪念仪式、文艺演出、城市灯光与家庭出行",
      historyPoint2: "出行建议：热门点位节假日人流密集，提前规划公共交通与返程路线",
      customsEyebrow: "光复节活动建议",
      customsTitle: "光复节怎么玩？",
      customsIntro:
        "在理解历史背景的基础上参与城市纪念活动，既能感受节日氛围，也能更立体地认识越南现代公共文化。",
      habit1Title: "① 关注官方纪念日程",
      habit1Body: "优先查看城市发布的活动安排，合理选择参观时段与路线。",
      habit2Title: "② 体验公共文化展演",
      habit2Body: "参与在地庆典和历史主题内容，感受纪念叙事与城市生活的连接。",
      habit3Title: "③ 错峰返程更高效",
      habit3Body: "晚间活动散场时段客流集中，建议提前规划公共交通换乘。",
      customDragonBoatAlt: "光复节夜间灯光活动与纪念演出场景",
      customZongziAlt: "光复节白天社区活动与家庭出行场景",
      footerTitle: "DayTicker · 光复节 Reunification Day",
      footerSubtitle:
        "在纪念与庆典之间，光复节把历史记忆转化为面向当代城市生活的公共对话与共同体验。",
      footerOrigins: "历史起源",
      footerCustoms: "节日玩法",
      footerCulture: "城市记忆",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Reunification Day feature page introducing Vietnam's April 30 historical context, commemoration practices, and urban public culture.",
      heroEyebrow: "Vietnam Feature · Reunification Day",
      heroTitle: "City memories under red flags: explore April 30 Reunification Day",
      heroLead:
        "Reunification Day in Vietnam is observed every April 30 to mark a key moment of national reunification. Cities host commemorative ceremonies, community celebrations, and public cultural programs that highlight unity, peace, and development.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "How to Participate", href: "#customs", variant: "muted" },
        { text: "April 30 Every Year", variant: "primary" },
        { text: "Reunification / Vietnam", variant: "muted" },
      ],
      heroImageAlt: "Reunification Day hero scene with urban commemorative atmosphere",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Reunification Day come from?",
      originsIntro:
        "April 30 is recognized as a key date in modern Vietnamese history and later became the national reunification commemoration day. Today it functions both as historical remembrance and as a public-facing civic and cultural event.",
      originsImageAlt: "Reunification Day remembrance and public city activities",
      originsCaption:
        "Its significance lies in linking past and present through public remembrance and civic storytelling.",
      originCardTitle: "Historical Timeline",
      originCardBody:
        "Originating from a modern historical turning point, the day evolved into a nationwide public commemoration mechanism.",
      originPatternText:
        "Historical memory, city events, and civic narratives together shape Reunification Day's contemporary expression.",
      historyCardTitle: "Contemporary Meaning",
      historyCardBody:
        "Today, Reunification Day emphasizes peaceful development and social cohesion, while marking an important node in urban cultural identity.",
      historyPoint1:
        "Common formats: memorial ceremonies, performances, city light activities, and family outings",
      historyPoint2:
        "Practical tip: key landmarks can be crowded on holidays, so plan transit and return routes early",
      customsEyebrow: "Reunification Day Tips",
      customsTitle: "How can you experience Reunification Day?",
      customsIntro:
        "Joining city commemorative activities with historical context in mind offers a fuller understanding of Vietnam's modern public culture.",
      habit1Title: "1. Check Official Schedules",
      habit1Body:
        "Start with city-published event calendars to pick suitable time slots and routes.",
      habit2Title: "2. Join Public Cultural Programs",
      habit2Body:
        "Attend local performances and history-themed showcases to connect commemoration with everyday city life.",
      habit3Title: "3. Plan Off-Peak Return",
      habit3Body:
        "Crowds rise after evening events, so prepare transit connections in advance.",
      customDragonBoatAlt: "Evening light activities and commemorative shows on Reunification Day",
      customZongziAlt: "Daytime community activities and family outings on Reunification Day",
      footerTitle: "DayTicker · Reunification Day",
      footerSubtitle:
        "Between remembrance and celebration, Reunification Day turns historical memory into a shared civic experience in contemporary city life.",
      footerOrigins: "Origins",
      footerCustoms: "Ways",
      footerCulture: "Memory",
      footerSite: "DayTicker Official Site",
    },
  },
};
