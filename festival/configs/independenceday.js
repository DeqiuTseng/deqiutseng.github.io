export const independenceDayFestivalConfig = {
  slug: "independenceday",
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
      avif: "./assets/hero-independenceday.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-independenceday.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-independenceday-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-independenceday-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "独立日专题网页，介绍美国独立日的历史来源、公共纪念方式与节日文化。",
      heroEyebrow: "美国独立日专题 · Independence Day",
      heroTitle: "烟火与星条旗之夜：在 7 月 4 日重温自由宣言的诞生",
      heroLead:
        "美国独立日（Independence Day）在每年 7 月 4 日举行，人们以游行、烟花、家庭聚会与社区庆典纪念《独立宣言》发布，表达对自由、自治与公民精神的共同认同。",
      heroBadges: [
        { text: "历史起源", href: "#origins", variant: "primary" },
        { text: "节日玩法", href: "#customs", variant: "muted" },
        { text: "每年 7 月 4 日", variant: "primary" },
        { text: "Liberty / Community", variant: "muted" },
      ],
      heroImageAlt: "独立日夜晚烟花与城市庆典场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "独立日从何而来？",
      originsIntro:
        "1776 年 7 月 4 日，大陆会议通过《独立宣言》，北美 13 个殖民地正式宣布脱离英国统治。此后，这一天逐步成为美国最具象征性的国家纪念日之一。",
      originsImageAlt: "独立日历史文化纪念场景",
      originsCaption: "历史文本与公共庆典共同塑造了独立日的国家记忆。",
      originCardTitle: "历史线索",
      originCardBody:
        "独立日不仅纪念政治独立，也承载了美国公共叙事中的公民参与传统。各地以升旗、宣言诵读、社区活动等方式，将历史事件转化为代际共享的公共文化。",
      originPatternText: "从革命时代到当代城市生活，独立日始终连接历史记忆与公共身份。",
      historyCardTitle: "当代表达",
      historyCardBody:
        "从历史街区到现代都市，独立日将历史记忆转化为当下体验：升旗、社区音乐会、夜空烟火与家庭聚餐，让“自由与责任并行”的理念持续被看见。",
      historyPoint1: "公共纪念：游行、音乐会与城市烟花",
      historyPoint2: "家庭连接：聚餐、旅行与邻里庆典",
      customsEyebrow: "独立日庆祝方式",
      customsTitle: "独立日通常怎样庆祝？",
      customsIntro:
        "白天看巡游、听乐队、参加社区活动，夜晚看烟花与灯光秀，是独立日最常见的节奏。很多家庭也会通过户外烧烤和朋友聚会来分享节日氛围。",
      habit1Title: "① 巡游与社区庆典",
      habit1Body: "地方游行、历史服饰与现场演出，构成独立日白天最具参与感的公共场景。",
      habit2Title: "② 烟花与夜间仪式",
      habit2Body: "夜幕下的烟花点亮天际，是独立日最具仪式感、也最具传播性的节日符号。",
      habit3Title: "③ 家庭聚会与户外活动",
      habit3Body: "烧烤、野餐与邻里聚会让节日从国家纪念延展到日常生活中的真实连接。",
      customDragonBoatAlt: "独立日夜间烟花庆典场景",
      customZongziAlt: "独立日白天巡游与家庭聚会场景",
      footerTitle: "DayTicker · 美国独立日 Independence Day",
      footerSubtitle:
        "在 7 月 4 日回看自由宣言的历史现场，也在社区庆典中感受当代公共生活：纪念历史、连接彼此、面向未来。",
      footerOrigins: "历史起源",
      footerCustoms: "节日玩法",
      footerCulture: "公共记忆",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "An Independence Day feature page introducing the origins of July 4, public rituals, and community celebration culture.",
      heroEyebrow: "U.S. Independence Day Feature",
      heroTitle:
        "Night of fireworks and stripes: revisiting the birth of the Declaration on July 4",
      heroLead:
        "Independence Day is observed on July 4 each year. Parades, fireworks, family gatherings, and community festivals commemorate the Declaration of Independence and express shared civic identity around liberty and self-governance.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Celebration", href: "#customs", variant: "muted" },
        { text: "July 4 Every Year", variant: "primary" },
        { text: "Liberty / Community", variant: "muted" },
      ],
      heroImageAlt: "Independence Day fireworks over a city celebration",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Independence Day come from?",
      originsIntro:
        "On July 4, 1776, the Continental Congress adopted the Declaration of Independence, with thirteen colonies formally declaring separation from British rule. Over time, this date became one of the most symbolic national observances in the United States.",
      originsImageAlt: "Historical and civic imagery for Independence Day",
      originsCaption:
        "Historical documents and public celebrations together shape Independence Day memory.",
      originCardTitle: "Historical Threads",
      originCardBody:
        "Independence Day marks not only political separation but also a civic tradition of public participation. Flag ceremonies, Declaration readings, and community events turn history into shared cultural memory across generations.",
      originPatternText:
        "From the revolutionary era to modern city life, the holiday links historical memory and public identity.",
      historyCardTitle: "Contemporary Expression",
      historyCardBody:
        "From historic districts to modern downtowns, Independence Day transforms history into lived experience through ceremonies, concerts, fireworks, and family gatherings.",
      historyPoint1: "Public rituals: parades, concerts, and city fireworks",
      historyPoint2: "Family connection: gatherings, trips, and neighborhood events",
      customsEyebrow: "Ways to Celebrate",
      customsTitle: "How is Independence Day usually celebrated?",
      customsIntro:
        "Daytime parades and community events, followed by night fireworks and light shows, shape the classic rhythm of July 4. Many families also celebrate through barbecues, picnics, and gatherings with friends.",
      habit1Title: "1. Parades and Community Events",
      habit1Body:
        "Local parades, historical costumes, and live performances create the most participatory daytime scenes.",
      habit2Title: "2. Fireworks and Night Rituals",
      habit2Body:
        "Night fireworks remain the most iconic and widely shared symbol of Independence Day.",
      habit3Title: "3. Family Gatherings and Outdoor Time",
      habit3Body:
        "Barbecues, picnics, and neighborhood gatherings bring national remembrance into everyday social connection.",
      customDragonBoatAlt: "Night fireworks celebration on Independence Day",
      customZongziAlt: "Daytime parade and family gathering for Independence Day",
      footerTitle: "DayTicker · U.S. Independence Day",
      footerSubtitle:
        "Revisit the historical moment of the Declaration and experience contemporary public life through community celebrations that connect past and future.",
      footerOrigins: "Origins",
      footerCustoms: "Celebration",
      footerCulture: "Civic Memory",
      footerSite: "DayTicker Official Site",
    },
  },
};
