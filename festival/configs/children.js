export const childrenDayFestivalConfig = {
  slug: "children",
  brandUrl: "https://dayticker.net",
  theme: {
    bgMain: "#FFF9F1",
    bgHero: "#FFF2DE",
    bgSoft: "#FFF5E8",
    bgCard: "rgba(255, 255, 255, 0.9)",
    textStrong: "#4B2D2A",
    textBody: "#6B524C",
    textSoft: "#856D67",
    textOnDark: "#FFF6F2",
    accentPrimary: "#DE5E48",
    accentStrong: "#B94934",
    footerBg: "#B84A3C",
    lineSoft: "#F1D9CC",
    lineCard: "#F4E4D8",
    noteColor: "#C75B45",
    shadowSoft: "0 20px 48px rgba(196, 107, 88, 0.12)",
    bodyAccent: "rgba(255, 225, 204, 0.7)",
    heroOrb: "rgba(255, 187, 120, 0.35)",
    pageOrb: "rgba(255, 238, 220, 0.9)",
    heroTitle: "#4B2D2A",
    sectionTitle: "#AD3E2F",
    sectionKicker: "#C75B45",
    badgeBg: "#FFE3C6",
    badgeMutedBg: "#FFEDE0",
    habitBg: "#FFF9F2",
    habitBorder: "#F2DDCF",
    habitTitle: "#9F3A2E",
  },
  images: {
    hero: {
      avif: "./assets/hero-children.avif",
      width: 920,
      height: 600,
    },
    origins: {
      avif: "./assets/origins-children.avif",
      width: 1400,
      height: 720,
    },
    customs: [
      {
        avif: "./assets/custom-children-1.avif",
        width: 840,
        height: 440,
      },
      {
        avif: "./assets/custom-children-2.avif",
        width: 840,
        height: 440,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "六一儿童节专题网页，介绍儿童节的历史背景、庆祝方式与亲子陪伴灵感。",
      heroEyebrow: "六一儿童节 · International Children's Day",
      heroTitle: "童心闪耀，快乐成长：走进六一儿童节",
      heroLead:
        "通过图文了解六一儿童节的历史背景、社会意义与庆祝方式，在陪伴与关爱中守护每个孩子的好奇心与创造力。",
      heroBadges: [
        { text: "节日由来", href: "#origins", variant: "primary" },
        { text: "庆祝活动", href: "#customs", variant: "muted" },
        { text: "每年6月1日", variant: "primary" },
        { text: "儿童友好", variant: "muted" },
      ],
      heroImageAlt: "六一儿童节活动中的欢笑与节日场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "六一儿童节的由来与价值",
      originsIntro:
        "从国际儿童权益倡议到当代儿童友好理念，理解儿童节如何连接社会关怀、教育发展与家庭陪伴。",
      originsImageAlt: "儿童在节日活动中的创意互动场景",
      originsCaption: "尊重、保护与陪伴，是儿童节最重要的文化内核。",
      originCardTitle: "起源脉络",
      originCardBody:
        "国际儿童节相关纪念活动源于对儿童生存、教育与发展权利的关注。六一在中国逐步形成面向儿童的公共节日，强调平等关爱、健康成长与社会共同守护。",
      originPatternText: "明亮色彩与童趣符号，象征好奇、创造与成长。",
      historyCardTitle: "时代演进",
      historyCardBody:
        "从校园文艺汇演到亲子实践、公益活动和儿童友好城市建设，六一儿童节的表达方式不断更新。今天，它不仅属于庆祝，也承载对儿童权益与成长环境的持续关注。",
      historyPoint1: "20世纪中后期：以学校活动和集体庆祝为主",
      historyPoint2: "近现代：亲子陪伴、公益倡导与儿童友好理念并行",
      customsEyebrow: "儿童节庆祝方式",
      customsTitle: "从礼物惊喜到亲子共创：六一的温暖仪式",
      customsIntro:
        "儿童节庆祝不止于礼物，更在于高质量陪伴。通过亲子互动、艺术体验和户外探索，让孩子在被看见与被鼓励中建立自信。",
      habit1Title: "① 亲子陪伴日",
      habit1Body:
        "安排专属亲子时间，一起阅读、手作或运动，让“陪伴”成为最有价值的节日礼物。",
      habit2Title: "② 儿童主题活动",
      habit2Body:
        "参加校园或社区的儿童节活动，如表演、绘画、科学体验，激发表达力与创造力。",
      habit3Title: "③ 成长礼与鼓励",
      habit3Body:
        "准备一份与兴趣相关的小礼物或成长纪念，传递肯定与祝福，帮助孩子建立积极自我认同。",
      customDragonBoatAlt: "儿童节主题活动中的舞台与互动场景",
      customZongziAlt: "家长与孩子共同参与手作与游戏的节日场景",
      footerTitle: "童心同行 · Children's Day",
      footerSubtitle: "愿每个孩子都被温柔以待，自在成长。",
      footerOrigins: "节日由来",
      footerCustoms: "庆祝活动",
      footerCulture: "成长关怀",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Children's Day feature page introducing the holiday's origins, celebration ideas, and family-friendly inspiration.",
      heroEyebrow: "Children's Day · International Children's Day",
      heroTitle: "Joy, Curiosity, and Growth: Celebrate Children's Day",
      heroLead:
        "Explore Children's Day through stories and visuals, from its historical background to modern ways of celebration, and highlight how care and companionship support every child's growth.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Celebrations", href: "#customs", variant: "muted" },
        { text: "June 1 Every Year", variant: "primary" },
        { text: "Child-Friendly", variant: "muted" },
      ],
      heroImageAlt: "Smiling children and festive atmosphere during Children's Day",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Origins and Meaning of Children's Day",
      originsIntro:
        "From international advocacy for children's rights to today's child-friendly values, see how the holiday connects social care, education, and family support.",
      originsImageAlt: "Children participating in creative activities during a holiday event",
      originsCaption:
        "Respect, protection, and companionship remain the core values of Children's Day.",
      originCardTitle: "Origin Pathways",
      originCardBody:
        "International Children's Day observances emerged from global concern for children's rights to survival, education, and development. In China, June 1 has evolved into a public holiday centered on equal care, healthy growth, and collective social support for children.",
      originPatternText:
        "Bright colors and playful motifs symbolize curiosity, creativity, and growth.",
      historyCardTitle: "Modern Development",
      historyCardBody:
        "Children's Day has expanded from school-centered performances to broader family activities, public programs, and child-friendly city initiatives. Today, it is both a celebration and a reminder to keep improving children's rights and environments.",
      historyPoint1:
        "Mid to late 20th century: school celebrations and collective activities",
      historyPoint2:
        "Contemporary era: family engagement, public campaigns, and child-friendly design",
      customsEyebrow: "Ways to Celebrate",
      customsTitle: "From Gifts to Shared Experiences: Children's Day Rituals",
      customsIntro:
        "Children's Day is more than gift-giving. Meaningful family time, creativity, and outdoor exploration help children feel seen, supported, and confident.",
      habit1Title: "1. Family Time Day",
      habit1Body:
        "Set aside dedicated time for reading, crafts, or sports together so companionship becomes the most valuable gift.",
      habit2Title: "2. Child-Centered Activities",
      habit2Body:
        "Join school or community events such as performances, drawing sessions, or science workshops to encourage expression and imagination.",
      habit3Title: "3. Growth Gifts and Encouragement",
      habit3Body:
        "Choose a small gift connected to the child's interests and add words of encouragement to support healthy self-esteem.",
      customDragonBoatAlt:
        "A stage and interactive activities during a Children's Day celebration",
      customZongziAlt:
        "Parents and children creating crafts and playing games together",
      footerTitle: "Growing with Joy · Children's Day",
      footerSubtitle: "May every child be cared for, respected, and free to grow.",
      footerOrigins: "Origins",
      footerCustoms: "Celebrations",
      footerCulture: "Growth",
      footerSite: "DayTicker Official Site",
    },
  },
};
