export const thanksgivingFestivalConfig = {
  slug: "thanksgiving",
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
      avif: "./assets/hero-thanksgiving.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-thanksgiving.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-thanksgiving-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-thanksgiving-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "感恩节专题网页，介绍美国感恩节的历史来源、节日仪式与家庭社区文化。",
      heroEyebrow: "美国感恩节专题 · Thanksgiving",
      heroTitle: "火鸡、南瓜派与团圆长桌：在感恩节重拾分享与感谢",
      heroLead:
        "美国感恩节（Thanksgiving）在每年 11 月第四个星期四庆祝。人们以家庭聚餐、感恩祈祷、慈善志愿与节庆巡游，表达对收获、亲情与社区支持的感谢。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "庆祝方式", href: "#customs", variant: "muted" },
        { text: "11 月第四个星期四", variant: "primary" },
        { text: "Gratitude / Family / Community", variant: "muted" },
      ],
      heroImageAlt: "感恩节家庭餐桌与秋季节庆场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "感恩节从何而来？",
      originsIntro:
        "感恩节的历史常追溯到 17 世纪早期新英格兰移民的“丰收感恩”传统。19 世纪起，感恩节逐渐制度化，并在 1941 年确定为美国联邦法定节日。",
      originsImageAlt: "感恩节历史叙事与家庭团聚主题场景",
      originsCaption: "从丰收纪念到家庭团聚，感恩节不断扩展其公共文化意义。",
      originCardTitle: "历史脉络",
      originCardBody:
        "今天的感恩节早已超越单一历史叙事，更多呈现为一场“与家人团聚、向帮助过自己的人表达感谢”的年度仪式：餐桌、对话与陪伴，构成节日最核心的情感记忆。",
      originPatternText: "感恩节连接历史记忆、家庭关系与社区互助，是美国公共文化中的重要节点。",
      historyCardTitle: "当代表达",
      historyCardBody:
        "现代感恩节既有传统家庭晚餐，也有社区志愿、公益餐食、节庆巡游与体育赛事等公共活动，让“感谢”从私人情感延展到公共生活。",
      historyPoint1: "家庭仪式：火鸡、南瓜派与长桌对话",
      historyPoint2: "公共参与：巡游、志愿服务与社区互助",
      customsEyebrow: "感恩节庆祝方式",
      customsTitle: "感恩节可以怎样庆祝？",
      customsIntro:
        "无论是与家人共享一顿节日晚餐，还是参与社区志愿和慈善行动，感恩节的核心始终是把感谢说出口，并转化为真实行动。",
      habit1Title: "① 家庭聚餐与感谢时刻",
      habit1Body: "在餐桌前分享一年中的支持与收获，让“感谢”具体落在彼此关系里。",
      habit2Title: "② 社区巡游与公共庆典",
      habit2Body: "通过节庆巡游、社区活动与文艺表演，把节日氛围扩展到城市公共空间。",
      habit3Title: "③ 志愿服务与慈善分享",
      habit3Body: "向有需要的人提供餐食、物资或陪伴，让感恩从情绪表达转化为社会互助。",
      customDragonBoatAlt: "感恩节家庭围桌共享晚餐场景",
      customZongziAlt: "感恩节社区巡游与志愿活动场景",
      footerTitle: "DayTicker · 美国感恩节 Thanksgiving",
      footerSubtitle:
        "在感恩节，把一年中的收获、支持与陪伴说出口：感谢家人、朋友与社区，也把温暖分享给更多需要帮助的人。",
      footerOrigins: "节日起源",
      footerCustoms: "庆祝方式",
      footerCulture: "感恩文化",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Thanksgiving feature page introducing the holiday's origins, rituals, and family-community culture in the United States.",
      heroEyebrow: "U.S. Thanksgiving Feature",
      heroTitle:
        "Turkey, pumpkin pie, and reunion tables: rediscover sharing and gratitude on Thanksgiving",
      heroLead:
        "Thanksgiving in the United States is celebrated on the fourth Thursday of November. Through family meals, gratitude prayers, volunteering, and community parades, people express thanks for harvest, relationships, and social support.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Celebration", href: "#customs", variant: "muted" },
        { text: "Fourth Thursday of November", variant: "primary" },
        { text: "Gratitude / Family / Community", variant: "muted" },
      ],
      heroImageAlt: "Thanksgiving family table and autumn celebration scene",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Thanksgiving come from?",
      originsIntro:
        "Thanksgiving is often traced to early New England harvest traditions in the 17th century. It became more institutionalized in the 19th century and was established as a U.S. federal holiday in 1941.",
      originsImageAlt: "Historical and family gathering imagery for Thanksgiving",
      originsCaption:
        "From harvest remembrance to family reunion, Thanksgiving keeps expanding its cultural meaning.",
      originCardTitle: "Historical Path",
      originCardBody:
        "Today Thanksgiving goes beyond a single historical narrative. It has become an annual ritual of reunion and appreciation, where shared meals, conversations, and presence build the holiday's core emotional memory.",
      originPatternText:
        "Thanksgiving connects historical memory, family relationships, and community support in American public culture.",
      historyCardTitle: "Contemporary Expression",
      historyCardBody:
        "Modern Thanksgiving includes family dinners as well as volunteering, charity meals, parades, and public festivities, extending gratitude from private emotion into public life.",
      historyPoint1: "Family ritual: turkey, pie, and long-table conversation",
      historyPoint2: "Public participation: parades, volunteering, and community care",
      customsEyebrow: "Ways to Celebrate",
      customsTitle: "How can Thanksgiving be celebrated?",
      customsIntro:
        "Whether sharing a dinner with family or joining local volunteer efforts, the heart of Thanksgiving is to speak gratitude clearly and turn it into action.",
      habit1Title: "1. Family Meal and Gratitude Moments",
      habit1Body:
        "Share what you received and who supported you this year, and make gratitude tangible in relationships.",
      habit2Title: "2. Community Parades and Public Festivities",
      habit2Body:
        "Bring celebration into shared city space through parades, local events, and performances.",
      habit3Title: "3. Volunteering and Charitable Sharing",
      habit3Body:
        "Offer meals, supplies, or companionship to people in need so gratitude becomes social support.",
      customDragonBoatAlt: "Thanksgiving family dinner gathering",
      customZongziAlt: "Thanksgiving community parade and volunteer activities",
      footerTitle: "DayTicker · U.S. Thanksgiving",
      footerSubtitle:
        "On Thanksgiving, say thanks for the support and companionship you received, and share warmth with people who need it.",
      footerOrigins: "Origins",
      footerCustoms: "Celebration",
      footerCulture: "Gratitude",
      footerSite: "DayTicker Official Site",
    },
  },
};
