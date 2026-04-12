export const diwaliFestivalConfig = {
  slug: "diwali",
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
      avif: "./assets/hero-diwali.avif",
      width: 976,
      height: 476,
    },
    origins: {
      avif: "./assets/origins-diwali.avif",
      width: 1400,
      height: 560,
    },
    customs: [
      {
        avif: "./assets/custom-diwali-1.avif",
        width: 792,
        height: 380,
      },
      {
        avif: "./assets/custom-diwali-2.avif",
        width: 792,
        height: 380,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription:
        "排灯节专题网页，介绍 Diwali 的文化渊源、庆祝方式与家庭社区中的光明仪式。",
      heroEyebrow: "印度排灯节专题 · Diwali",
      heroTitle: "万盏灯火照亮秋夜家园：走进排灯节",
      heroLead:
        "排灯节（Diwali）是南亚最重要的光明节庆之一，象征光明战胜黑暗、善意驱散阴霾。节日期间，人们点灯、团聚、祈福与分享甜点，在家庭与社区中传递祝愿。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "节日玩法", href: "#customs", variant: "muted" },
        { text: "每年秋季", variant: "primary" },
        { text: "Diwali / Lights / Family", variant: "muted" },
      ],
      heroImageAlt: "排灯节灯火主题主视觉，呈现夜间节庆氛围",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "排灯节从何而来？",
      originsIntro:
        "排灯节与光明归来的神话叙事密切相关，在长期传播中发展为覆盖家庭、社区与商业空间的年度节庆。今天它既是宗教与文化仪式，也是一场公共情感表达。",
      originsImageAlt: "排灯节传统点灯与家庭庆祝场景",
      originsCaption:
        "排灯节的核心体验是共同点亮：一盏灯、一次祈福、一场团聚，构成节日最温暖的社会连接。",
      originCardTitle: "历史脉络",
      originCardBody:
        "从古代仪式到现代城市庆祝，排灯节持续扩展其文化影响与公共参与形式。",
      originPatternText: "灯火、祝福与家庭团聚，共同塑造 Diwali 的节庆结构。",
      historyCardTitle: "当代意义",
      historyCardBody:
        "今天的排灯节也是跨文化节庆符号，让光明与希望成为全球共感主题。",
      historyPoint1: "典型活动：点灯、绘制 rangoli、家庭祈祷、互赠礼物与甜点",
      historyPoint2: "参与提醒：夜间点灯和烟火时段应优先关注防火与通行安全",
      customsEyebrow: "排灯节活动建议",
      customsTitle: "排灯节怎么玩？",
      customsIntro:
        "排灯节的仪式感来自准备与分享。无论是布置灯火、绘制地画，还是与家人共餐，只要尊重当地习俗，就能更完整地感受节日温度。",
      habit1Title: "① 黄昏点灯营造节庆",
      habit1Body: "在门前与窗台摆放 diyas（油灯）或灯串，让家居空间在夜色中被温暖点亮。",
      habit2Title: "② 绘制 rangoli",
      habit2Body: "用彩粉或花瓣完成吉祥纹样，作为迎接来客与传递祝愿的视觉表达。",
      habit3Title: "③ 文明观赏烟火",
      habit3Body: "关注当地规定、保持安全距离，并尊重宗教礼仪与家庭空间边界。",
      customDragonBoatAlt: "排灯节夜间灯串与烟火映照街巷场景",
      customZongziAlt: "排灯节白天庭院布置与家庭协作场景",
      footerTitle: "DayTicker · 排灯节 Diwali",
      footerSubtitle:
        "在一盏盏灯火与一句句祝福之间，排灯节把希望、团聚与感恩写进每个家庭的秋夜。",
      footerOrigins: "历史起源",
      footerCustoms: "节日玩法",
      footerCulture: "家庭团聚",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Diwali feature page on cultural roots, celebration practices, and the shared rituals of light in homes and communities.",
      heroEyebrow: "India Feature · Diwali",
      heroTitle: "Thousands of lights across autumn nights: step into Diwali",
      heroLead:
        "Diwali is one of South Asia's most important festivals of light, symbolizing light over darkness and hope over uncertainty. People light lamps, gather with family, pray, and share sweets across homes and neighborhoods.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "How to Celebrate", href: "#customs", variant: "muted" },
        { text: "Every Autumn", variant: "primary" },
        { text: "Diwali / Lights / Family", variant: "muted" },
      ],
      heroImageAlt: "Diwali hero visual with warm festival lights at night",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Diwali come from?",
      originsIntro:
        "Diwali is closely linked to narratives of the return of light. Over time, it evolved into a yearly festival spanning homes, communities, and commercial spaces. Today it is both a religious-cultural ritual and a public expression of shared emotion.",
      originsImageAlt: "Traditional Diwali lamps and family celebration scene",
      originsCaption:
        "The core experience of Diwali is lighting together: one lamp, one prayer, one reunion, creating warm social bonds.",
      originCardTitle: "Historical Path",
      originCardBody:
        "From ancient ritual roots to modern urban celebration, Diwali keeps expanding its cultural impact and public participation forms.",
      originPatternText:
        "Lights, blessings, and family reunion together define the festive structure of Diwali.",
      historyCardTitle: "Contemporary Meaning",
      historyCardBody:
        "Today, Diwali is also a cross-cultural symbol, turning light and hope into globally shared themes.",
      historyPoint1:
        "Typical customs: lighting lamps, creating rangoli, family prayers, exchanging gifts and sweets",
      historyPoint2:
        "Practical reminder: prioritize fire safety and smooth movement during evening lights and fireworks",
      customsEyebrow: "Diwali Suggestions",
      customsTitle: "How can you celebrate Diwali?",
      customsIntro:
        "Diwali's atmosphere comes from preparation and sharing. Decorating with lights, creating rangoli, and family meals all become more meaningful when local customs are respected.",
      habit1Title: "1. Light Lamps at Dusk",
      habit1Body:
        "Place diyas or light strings at doors and windows to bring a warm festive glow into your home.",
      habit2Title: "2. Create Rangoli",
      habit2Body:
        "Use colored powder or petals to make auspicious patterns that welcome guests and express blessings.",
      habit3Title: "3. Watch Fireworks Responsibly",
      habit3Body:
        "Follow local rules, keep safe distance, and respect religious etiquette and private family spaces.",
      customDragonBoatAlt: "Diwali night scene with decorative lights and fireworks",
      customZongziAlt: "Diwali daytime home decoration and family preparation scene",
      footerTitle: "DayTicker · Diwali",
      footerSubtitle:
        "Between lamps and blessings, Diwali writes hope, reunion, and gratitude into autumn nights.",
      footerOrigins: "Origins",
      footerCustoms: "Ways",
      footerCulture: "Family",
      footerSite: "DayTicker Official Site",
    },
  },
};
