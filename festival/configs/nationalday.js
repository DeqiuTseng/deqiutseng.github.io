export const nationalDayFestivalConfig = {
  slug: "nationalday",
  brandUrl: "https://dayticker.net",
  theme: {
    bgMain: "#FFF7F2",
    bgHero: "#FBE7E2",
    bgSoft: "#F7EFE6",
    bgCard: "#FFF8F1",
    textStrong: "#4A1C1C",
    textBody: "#6A4740",
    textSoft: "#8A6A52",
    textOnDark: "#FFF3EE",
    accentPrimary: "#9F1D1D",
    accentStrong: "#7A1F1A",
    footerBg: "#7C2222",
    lineSoft: "#DEB0A7",
    lineCard: "#E8D9C8",
    noteColor: "#B42318",
    shadowSoft: "0 20px 48px rgba(122, 31, 26, 0.08)",
    bodyAccent: "rgba(245, 217, 211, 0.72)",
    heroOrb: "rgba(229, 178, 74, 0.28)",
    pageOrb: "rgba(252, 237, 234, 0.92)",
    heroTitle: "#4A1C1C",
    sectionTitle: "#7A1F1A",
    sectionKicker: "#B42318",
    badgeBg: "#F5D9D3",
    badgeMutedBg: "#F9E7E3",
    habitBg: "#FFF8F1",
    habitBorder: "#E8D7C8",
    habitTitle: "#8C2A1E",
  },
  images: {
    hero: {
      avif: "./assets/hero-nationalday.avif",
      width: 920,
      height: 600,
    },
    origins: {
      avif: "./assets/origins-nationalday.avif",
      width: 1400,
      height: 720,
    },
    customs: [
      {
        avif: "./assets/custom-nationalday-1.avif",
        width: 840,
        height: 440,
      },
      {
        avif: "./assets/custom-nationalday-2.avif",
        width: 896,
        height: 496,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "国庆节专题网页，介绍国庆节的历史背景、庆祝活动与出游灵感。",
      heroEyebrow: "国庆节 · National Day",
      heroTitle: "山河同庆，锦绣中华：走进国庆节",
      heroLead:
        "以图文方式了解国庆节的历史背景、庆祝活动与出游灵感，在城市与山河之间感受家国同辉。",
      heroBadges: [
        { text: "历史沿革", href: "#origins", variant: "primary" },
        { text: "庆祝活动", href: "#customs", variant: "muted" },
        { text: "每年10月1日", variant: "primary" },
        { text: "National Day", variant: "muted" },
      ],
      heroImageAlt: "国庆节期间的城市庆典与江岸地标景象",
      originsEyebrow: "国庆专题 · Origins",
      originsTitle: "国庆节的历史起源与时代意义",
      originsIntro:
        "从1949年新中国成立到全民节庆文化形成，理解国庆节如何连接国家记忆与当代生活。",
      originsImageAlt: "国庆节城市广场上的国旗花坛与人群庆典",
      originsCaption: "国旗、城市地标与人群庆典，共同构成国庆节的当代视觉记忆。",
      originCardTitle: "起源脉络",
      originCardBody:
        "国庆节设立于中华人民共和国成立之后，核心纪念日为每年10月1日。它不仅是国家主权与现代国家建构的重要象征，也逐步发展为全民共享的公共节日，承载爱国教育、社会凝聚与城市文化展示等多重功能。",
      originPatternText: "红金主调象征节日礼仪感与国家庆典氛围。",
      historyCardTitle: "历史演进",
      historyCardBody:
        "新中国成立初期，国庆以阅兵与群众游行为重要表达；改革开放后，节庆形式更加多元，城市灯光秀、公共文化展演与文旅活动持续丰富。进入当代，国庆节成为国家叙事、家庭团聚与消费出行并行的综合性黄金周节点。",
      historyPoint1: "1949-1970s：建国纪念与集体庆典为核心",
      historyPoint2: "1980s-至今：文化活动与假日经济协同发展",
      customsEyebrow: "国庆节庆祝方式",
      customsTitle: "从城市仪式到全民出游：国庆黄金周的节日节奏",
      customsIntro:
        "国庆节既有国家层面的纪念表达，也有家庭与城市生活中的庆祝实践。合理规划黄金周行程，可在感受节庆氛围的同时提升出行体验。",
      habit1Title: "① 升旗仪式与城市灯光秀",
      habit1Body: "清晨观看升旗、夜间参与地标灯光活动，是最具国庆辨识度的公共庆祝方式。",
      habit2Title: "② 家庭团圆与节日文化活动",
      habit2Body:
        "与家人共聚、观看国庆主题演出或展览，让节日从“休假”升级为有记忆点的文化体验。",
      habit3Title: "③ 旅行建议：错峰与线路规划",
      habit3Body:
        "优先选择早出发或后返程，采用“核心地标+周边慢游”组合路线，并提前预订交通与门票。",
      customDragonBoatAlt: "国庆节夜间灯会与节日街区场景",
      customZongziAlt: "国庆节广场升旗与人群庆典场景",
      footerTitle: "国庆同欢 · National Day",
      footerSubtitle: "山河无恙，家国长安。",
      footerOrigins: "历史沿革",
      footerCustoms: "庆祝活动",
      footerCulture: "出游指南",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A National Day feature page introducing the holiday's historical background, celebrations, and travel inspiration.",
      heroEyebrow: "National Day · China",
      heroTitle: "Celebrating the Nation, Framed by Rivers and Mountains",
      heroLead:
        "Explore National Day through images and text, from its historical background to public celebrations and Golden Week travel ideas, and experience how civic space and national sentiment meet.",
      heroBadges: [
        { text: "History", href: "#origins", variant: "primary" },
        { text: "Celebrations", href: "#customs", variant: "muted" },
        { text: "October 1 every year", variant: "primary" },
        { text: "National Day", variant: "muted" },
      ],
      heroImageAlt: "National Day city celebration with waterfront skyline and festive decorations",
      originsEyebrow: "National Day Feature · Origins",
      originsTitle: "Historical Origins and Modern Meaning of National Day",
      originsIntro:
        "From the founding of the People's Republic in 1949 to today's public holiday culture, see how National Day links national memory with contemporary life.",
      originsImageAlt: "National Day floral display, flags, and celebration crowd in a city square",
      originsCaption:
        "Flags, city landmarks, and public celebrations shape the contemporary visual memory of National Day.",
      originCardTitle: "Origins",
      originCardBody:
        "National Day was established after the founding of the People's Republic of China, with October 1 as its core commemorative date. It marks national sovereignty and modern state formation, while also evolving into a public holiday shared across society with roles in civic education, social cohesion, and urban cultural display.",
      originPatternText:
        "The red-and-gold palette signals ceremonial festivity and the atmosphere of national celebration.",
      historyCardTitle: "Historical Development",
      historyCardBody:
        "In the early decades of the PRC, National Day was closely associated with military parades and mass processions. After reform and opening up, celebration formats diversified through light shows, public performances, and cultural tourism. Today it functions as both a national narrative moment and a Golden Week shaped by family reunion and travel.",
      historyPoint1: "1949-1970s: nation-building commemoration and collective celebration",
      historyPoint2: "1980s-present: cultural events and holiday economy developed together",
      customsEyebrow: "Ways of Celebration",
      customsTitle: "From Civic Ceremony to Golden Week Travel",
      customsIntro:
        "National Day includes both state-level remembrance and everyday forms of celebration in family and city life. With better Golden Week planning, people can enjoy festive energy while improving the travel experience.",
      habit1Title: "1. Flag-Raising Ceremonies and City Light Shows",
      habit1Body:
        "Watching the morning flag-raising and joining nighttime landmark light displays are among the most recognizable public ways to celebrate National Day.",
      habit2Title: "2. Family Reunion and Holiday Cultural Events",
      habit2Body:
        "Gathering with family and visiting themed performances or exhibitions turns the holiday from time off into a more memorable cultural experience.",
      habit3Title: "3. Travel Advice: Off-Peak Timing and Route Planning",
      habit3Body:
        "Leave earlier or return later when possible, combine major landmarks with slower nearby stops, and book transport and tickets in advance.",
      customDragonBoatAlt: "National Day lantern-lit festival street at night",
      customZongziAlt: "National Day square celebration with flags and crowds",
      footerTitle: "Celebrating Together · National Day",
      footerSubtitle: "May the land remain at peace and every home stay secure.",
      footerOrigins: "History",
      footerCustoms: "Celebrations",
      footerCulture: "Travel",
      footerSite: "DayTicker Official Site",
    },
  },
};
