export const valentineFestivalConfig = {
  slug: "valentine",
  brandUrl: "https://dayticker.net",
  customsNoBottomRadius: true,
  footerVariant: "editorial",
  theme: {
    bgMain: "#FFF8F1",
    bgHero: "#F6EDE4",
    bgSoft: "#2D1520",
    bgCard: "rgba(255, 248, 250, 0.9)",
    textStrong: "#24171A",
    textBody: "#5C4447",
    textSoft: "#8E6570",
    textOnDark: "#FFF5EF",
    accentPrimary: "#8C3146",
    accentStrong: "#7B1E3A",
    footerBg: "#1F1719",
    lineSoft: "#C9A48E",
    lineCard: "#EED9DE",
    noteColor: "#A12D52",
    shadowSoft: "0 20px 48px rgba(73, 33, 41, 0.16)",
    bodyAccent: "rgba(229, 186, 197, 0.32)",
    heroOrb: "rgba(148, 63, 88, 0.32)",
    pageOrb: "rgba(255, 234, 240, 0.58)",
    heroTitle: "#24171A",
    sectionTitle: "#7B1E3A",
    sectionKicker: "#A12D52",
    badgeBg: "#FBF4EC",
    badgeMutedBg: "#FFF0F4",
    habitBg: "#FFF8FA",
    habitBorder: "#6A3148",
    habitTitle: "#7A2443",
    footerTopLine: "#5E4348",
  },
  images: {
    hero: {
      avif: "./assets/hero-valentine.avif",
      width: 920,
      height: 600,
    },
    origins: {
      avif: "./assets/origins-valentine.avif",
      width: 1400,
      height: 720,
    },
    customs: [
      {
        avif: "./assets/custom-valentine-1.avif",
        width: 840,
        height: 440,
      },
      {
        avif: "./assets/custom-valentine-2.avif",
        width: 840,
        height: 440,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription:
        "情人节专题网页，介绍情人节的历史来源、节日表达与现代亲密关系中的仪式感。",
      heroEyebrow: "情人节专题 · Valentine's Day",
      heroTitle: "把一束花、一封信与一顿晚餐，留给今晚愿意并肩的人",
      heroLead:
        "从花店门口的短暂停留，到城市夜色里的慢餐桌与两个人靠近的静默时刻，这一页把情人节写成克制、真实、可以被反复回味的亲密编辑。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "庆祝方式", href: "#customs", variant: "muted" },
        { text: "2 月 14 日", variant: "primary" },
        { text: "Flowers / Letters / Dinner", variant: "muted" },
      ],
      heroImageAlt: "情人节夜色与亲密氛围场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "情人节为什么总与爱有关？",
      originsIntro:
        "情人节既有历史传说来源，也在现代城市生活中演变为关于陪伴、承诺与仪式感的公共语言。",
      originsImageAlt: "情人节主题视觉中的花束与亲密场景",
      originsCaption:
        "它更像一次认真说出“我在意你”的机会，而不是寻找标准答案的节日考试。",
      originCardTitle: "起源脉络",
      originCardBody:
        "从手写卡片、鲜花与晚餐，到一起看展、散步或只是留出完整相处时间，情人节的核心不在消费本身，而在于把平日不易被郑重表达的情感，借由节日转换成清晰回应。",
      originPatternText:
        "历史线索、现代语境与节日气质，构成情人节在当代社会里的三重坐标。",
      historyCardTitle: "文化演变",
      historyCardBody:
        "围绕圣瓦伦丁的传说与中世纪爱情书写，情人节逐渐从纪念性节日扩展为公开表达爱意的文化时刻。今天，它也被许多人用于感谢伴侣、朋友或家人。",
      historyPoint1: "历史线索：从传说纪念到爱情书写",
      historyPoint2: "现代语境：从恋人节庆到广义亲密表达",
      customsEyebrow: "情人节庆祝方式",
      customsTitle: "人们通常怎样度过情人节？",
      customsIntro:
        "一束花、一张卡片、一顿晚餐或一次夜景散步，都可以成为节日记忆的触发器。重点不在规模，而在彼此被认真对待。",
      habit1Title: "① 送花与写卡片",
      habit1Body:
        "玫瑰、郁金香与手写短笺依然是最经典也最直接的表达方式，让心意落在可触摸的细节上。",
      habit2Title: "② 预约一顿晚餐",
      habit2Body:
        "烛光、甜点和慢一点的对话，让日常时间被重新命名，成为两个人专属的节日场景。",
      habit3Title: "③ 保留安静相处",
      habit3Body:
        "并非所有爱都需要盛大场面，有些情人节只是一起做饭、散步、拥抱和完整倾听。",
      customDragonBoatAlt: "情人节花束与夜色中的约会场景",
      customZongziAlt: "情人节安静晚餐与双人对话场景",
      footerTitle: "情人节 · Valentine's Day",
      footerSubtitle: "把想说的话说出来，把想陪的人留在身边。",
      footerOrigins: "节日起源",
      footerCustoms: "庆祝方式",
      footerCulture: "亲密表达",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Valentine's Day feature page about the holiday's origins, modern rituals, and everyday expressions of intimacy.",
      heroEyebrow: "Valentine's Day Feature",
      heroTitle:
        "Save a bouquet, a letter, and a dinner for the person who walks beside you tonight",
      heroLead:
        "From stopping by a flower shop to sharing a slow dinner under city lights, this page frames Valentine's Day as restrained, real, and worth revisiting.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Rituals", href: "#customs", variant: "muted" },
        { text: "February 14", variant: "primary" },
        { text: "Flowers / Letters / Dinner", variant: "muted" },
      ],
      heroImageAlt: "Valentine's Day evening scene with intimate atmosphere",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Why is Valentine's Day always linked with love?",
      originsIntro:
        "Valentine's Day has historical and legendary roots, and in modern city life it has become a shared language for companionship, promise, and ritual.",
      originsImageAlt:
        "Valentine themed visual featuring flowers and intimate moments",
      originsCaption:
        "More than finding the right answer, it is a chance to clearly say: I care about you.",
      originCardTitle: "Origin Pathways",
      originCardBody:
        "From handwritten notes and flowers to exhibitions, walks, or simply making time for each other, the essence of Valentine's Day is not consumption but deliberate emotional response.",
      originPatternText:
        "Historical clues, modern context, and emotional tone define the holiday's contemporary identity.",
      historyCardTitle: "Cultural Evolution",
      historyCardBody:
        "From Saint Valentine legends and medieval romantic writing, the holiday evolved from a commemorative date into a cultural moment for expressing affection. Today it often extends beyond couples to partners, friends, and family.",
      historyPoint1: "Historical thread: from legend to love letters",
      historyPoint2: "Modern context: from couple ritual to wider care expression",
      customsEyebrow: "Ways to Celebrate",
      customsTitle: "How do people usually spend Valentine's Day?",
      customsIntro:
        "A bouquet, a card, a dinner, or a quiet walk can all become lasting memories. Scale matters less than being genuinely present for each other.",
      habit1Title: "1. Flowers and Notes",
      habit1Body:
        "Roses, tulips, and handwritten cards remain classic and direct gestures that make affection tangible.",
      habit2Title: "2. A Slow Dinner",
      habit2Body:
        "Candlelight, dessert, and unhurried conversation rename ordinary time into a shared ritual.",
      habit3Title: "3. Quiet Time Together",
      habit3Body:
        "Not every expression of love needs spectacle. Sometimes cooking, walking, hugging, and listening are enough.",
      customDragonBoatAlt:
        "Valentine bouquet and evening date scene in city lights",
      customZongziAlt:
        "Valentine quiet dinner and two-person conversation scene",
      footerTitle: "Valentine's Day",
      footerSubtitle: "Say what you feel, and stay with the one you choose.",
      footerOrigins: "Origins",
      footerCustoms: "Rituals",
      footerCulture: "Intimacy",
      footerSite: "DayTicker Official Site",
    },
  },
};
