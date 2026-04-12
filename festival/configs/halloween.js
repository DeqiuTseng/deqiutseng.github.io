export const halloweenFestivalConfig = {
  slug: "halloween",
  brandUrl: "https://dayticker.net",
  customsNoBottomRadius: true,
  footerVariant: "default",
  theme: {
    bgMain: "#F6F2EB",
    bgHero: "#F2EBDD",
    bgSoft: "#173126",
    bgCard: "rgba(251, 246, 240, 0.94)",
    textStrong: "#2D1F1D",
    textBody: "#5C4F4A",
    textSoft: "#5D5A62",
    textOnDark: "#F5F1E8",
    accentPrimary: "#8C1E2C",
    accentStrong: "#8D1B2A",
    footerBg: "#1C1718",
    lineSoft: "#D2BFA5",
    lineCard: "#DCCBBB",
    noteColor: "#86685B",
    shadowSoft: "0 20px 48px rgba(74, 58, 48, 0.14)",
    bodyAccent: "rgba(232, 209, 176, 0.48)",
    heroOrb: "rgba(184, 155, 131, 0.34)",
    pageOrb: "rgba(250, 246, 239, 0.86)",
    heroTitle: "#2D1F1D",
    sectionTitle: "#8D1B2A",
    sectionKicker: "#86685B",
    badgeBg: "#FBF6F0",
    badgeMutedBg: "#E9D5C3",
    habitBg: "#F7F5FB",
    habitBorder: "#7B78A8",
    habitTitle: "#4D3E74",
    footerTopLine: "#55494C",
  },
  images: {
    hero: {
      avif: "./assets/hero-halloween.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-halloween.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-halloween-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-halloween-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "圣诞节专题网页，介绍圣诞节的历史来源、节庆文化与冬日庆祝方式。",
      heroEyebrow: "圣诞节专题 · Christmas Feature",
      heroTitle: "在冬夜灯光与松枝香气里，把团聚与祝福写成一页温暖节日故事",
      heroLead:
        "从圣诞树点灯、礼物交换到家庭晚餐与冬日音乐，这一页聚焦圣诞节的节庆美学与人与人之间的温柔联结。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "庆祝方式", href: "#customs", variant: "muted" },
        { text: "每年 12 月 25 日", variant: "primary" },
        { text: "Lights / Gifts / Reunion", variant: "muted" },
      ],
      heroImageAlt: "圣诞节夜晚的灯光与节日家庭场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "圣诞节从何而来？",
      originsIntro:
        "圣诞节原本与宗教纪念相关，随着时间发展，也成为全球范围内强调团聚、感恩与节日共享的冬季文化时刻。",
      originsImageAlt: "圣诞节家庭聚餐与节庆布置场景",
      originsCaption: "灯光、长桌与冬日夜色，是圣诞节最具共鸣的文化画面。",
      originCardTitle: "历史背景",
      originCardBody:
        "圣诞节在长期传播中逐步走向公共文化生活，既保留仪式传统，也吸收了礼物文化、社区活动与城市节庆空间。",
      originPatternText: "从纪念传统到现代庆祝，圣诞节在不同文化里持续生成新的表达方式。",
      historyCardTitle: "当代意义",
      historyCardBody:
        "今天的圣诞节不仅是节日消费节点，也是一年中重新确认关系、表达感谢与分享善意的重要时刻。",
      historyPoint1: "家庭与朋友：通过聚餐、礼物和对话强化彼此连接",
      historyPoint2: "社区与城市：灯会、市集与公益行动构成节日公共性",
      customsEyebrow: "圣诞节庆祝方式",
      customsTitle: "圣诞节可以怎样庆祝？",
      customsIntro:
        "点亮圣诞树、交换礼物、准备家庭晚餐和参与冬日公益行动，都是把节日温度真正带到生活里的方式。",
      habit1Title: "① 点亮圣诞树与家居装饰",
      habit1Body: "让空间有仪式感与节日温度，也让家庭成员共同参与节前准备。",
      habit2Title: "② 交换礼物与手写卡片",
      habit2Body: "把心意具体地送到彼此手中，让祝福从语言变成可被收藏的记忆。",
      habit3Title: "③ 家庭聚餐与冬日公益",
      habit3Body: "在长桌对话中沉淀一年情感，也把物资与陪伴送给需要帮助的人。",
      customDragonBoatAlt: "冬日街区中的圣诞市集与灯光布置",
      customZongziAlt: "圣诞节家庭室内布置与礼物交换场景",
      footerTitle: "DayTicker · 圣诞节 Christmas",
      footerSubtitle: "以灯光、礼物与陪伴为线索，讲述冬季里最有温度的团聚时刻。",
      footerOrigins: "节日起源",
      footerCustoms: "庆祝方式",
      footerCulture: "节庆文化",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Christmas feature page about its historical roots, festive culture, and winter celebration practices.",
      heroEyebrow: "Christmas Feature",
      heroTitle:
        "In winter lights and pine fragrance, turn reunion and blessings into a warm festive story",
      heroLead:
        "From tree lighting and gift exchange to family dinners and winter music, this page focuses on Christmas aesthetics and gentle human connection.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Ways to Celebrate", href: "#customs", variant: "muted" },
        { text: "December 25 Every Year", variant: "primary" },
        { text: "Lights / Gifts / Reunion", variant: "muted" },
      ],
      heroImageAlt: "Christmas evening lights and warm family celebration scene",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Christmas come from?",
      originsIntro:
        "Christmas began as a religious commemoration and evolved into a global winter cultural moment centered on reunion, gratitude, and shared celebration.",
      originsImageAlt: "Family dinner and holiday decorations at Christmas",
      originsCaption:
        "Lights, shared tables, and winter nights form the most resonant visual language of Christmas.",
      originCardTitle: "Historical Background",
      originCardBody:
        "Over time, Christmas expanded from ritual tradition into public cultural life, blending ceremony with gift culture, community activities, and city festivals.",
      originPatternText:
        "From tradition to contemporary celebration, Christmas keeps developing new expressions across cultures.",
      historyCardTitle: "Contemporary Meaning",
      historyCardBody:
        "Today, Christmas is not only a seasonal retail moment but also a time to reaffirm relationships, express gratitude, and share kindness.",
      historyPoint1:
        "Family and friends: strengthen connection through meals, gifts, and conversation",
      historyPoint2:
        "Community and city: lights, markets, and charity actions shape its public spirit",
      customsEyebrow: "Ways to Celebrate",
      customsTitle: "How can we celebrate Christmas?",
      customsIntro:
        "Tree lighting, gift exchange, family meals, and winter charity are practical ways to bring festive warmth into everyday life.",
      habit1Title: "1. Tree Lighting and Home Decor",
      habit1Body:
        "Create a sense of ritual and involve family members in preparing a shared festive space.",
      habit2Title: "2. Gifts and Handwritten Cards",
      habit2Body:
        "Turn feelings into tangible memories through thoughtful gifts and written blessings.",
      habit3Title: "3. Family Dinner and Winter Charity",
      habit3Body:
        "Settle the year's emotions around the table and extend care through meaningful public support.",
      customDragonBoatAlt: "Christmas market and winter lights in a festive neighborhood",
      customZongziAlt: "Indoor Christmas family gathering with gifts and decorations",
      footerTitle: "DayTicker · Christmas",
      footerSubtitle:
        "Follow lights, gifts, and companionship to tell the warmest winter reunion stories.",
      footerOrigins: "Origins",
      footerCustoms: "Ways",
      footerCulture: "Culture",
      footerSite: "DayTicker Official Site",
    },
  },
};
