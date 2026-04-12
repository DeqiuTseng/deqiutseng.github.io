export const womensDayFestivalConfig = {
  slug: "womensday",
  brandUrl: "https://dayticker.net",
  customsNoBottomRadius: true,
  footerVariant: "default",
  theme: {
    bgMain: "#FFF8F1",
    bgHero: "#F5EEE4",
    bgSoft: "#1F2037",
    bgCard: "rgba(252, 250, 247, 0.92)",
    textStrong: "#221A1D",
    textBody: "#56484D",
    textSoft: "#8C6E61",
    textOnDark: "#FFF5EE",
    accentPrimary: "#7A4D5D",
    accentStrong: "#3E2B54",
    footerBg: "#1F1C1E",
    lineSoft: "#CCB69D",
    lineCard: "#E2DAF0",
    noteColor: "#6A4E9E",
    shadowSoft: "0 20px 48px rgba(49, 44, 57, 0.14)",
    bodyAccent: "rgba(200, 183, 188, 0.34)",
    heroOrb: "rgba(130, 107, 130, 0.32)",
    pageOrb: "rgba(240, 232, 238, 0.58)",
    heroTitle: "#221A1D",
    sectionTitle: "#3E2B54",
    sectionKicker: "#6A4E9E",
    badgeBg: "#FBF6F0",
    badgeMutedBg: "#F6F2FB",
    habitBg: "#F7F5FB",
    habitBorder: "#7B78A8",
    habitTitle: "#4D3E74",
    footerTopLine: "#5E4348",
  },
  images: {
    hero: {
      avif: "./assets/hero-womensday.avif",
      width: 920,
      height: 600,
    },
    origins: {
      avif: "./assets/origins-womensday.avif",
      width: 1400,
      height: 720,
    },
    customs: [
      {
        avif: "./assets/custom-womensday-1.avif",
        width: 840,
        height: 440,
      },
      {
        avif: "./assets/custom-womensday-2.avif",
        width: 840,
        height: 440,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "妇女节专题网页，介绍国际妇女节的历史背景、现实意义与当代庆祝方式。",
      heroEyebrow: "妇女节专题 · International Women's Day",
      heroTitle: "让她们的专业、耐心与锋芒，被看见，也被认真命名",
      heroLead:
        "从会议桌、工作台与通勤路上，到照顾家庭、组织社区与坚持创作的日常现场，这一页致敬持续发光的女性力量。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "今日表达", href: "#customs", variant: "muted" },
        { text: "每年 3 月 8 日", variant: "primary" },
        { text: "Work / Care / Creation", variant: "muted" },
      ],
      heroImageAlt: "妇女节专题中的女性职业与日常群像场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "妇女节从何而来？",
      originsIntro:
        "国际妇女节既是对女性争取平等权利历史的纪念，也是今天重新看见女性劳动、创造力与公共影响力的重要时刻。",
      originsImageAlt: "妇女节相关的女性工作与公共参与场景",
      originsCaption: "尊重不应停留在祝福，而应落实到机会、表达与制度支持之中。",
      originCardTitle: "历史脉络",
      originCardBody:
        "从争取工作权、选举权到教育机会与平等话语，妇女节承载着持续向前的历史线索。今天谈论妇女节，不只是回顾成就，更是继续回应现实议题：公平、照护、职业发展与安全感。",
      originPatternText: "历史背景、现实意义与今天的表达，构成妇女节最核心的三条阅读线索。",
      historyCardTitle: "当代意义",
      historyCardBody:
        "妇女节让“感谢女性”之外的议题进入公共讨论，包括平等机会、职场环境、家庭分工、教育支持与社会安全。它提醒我们把尊重转化成可见、可持续的行动。",
      historyPoint1: "历史背景：源于全球女性争取劳动权与政治权利的运动",
      historyPoint2: "今天的表达：在工作与生活现场看见女性经验与贡献",
      customsEyebrow: "妇女节庆祝方式",
      customsTitle: "妇女节可以怎样被好好庆祝？",
      customsIntro:
        "比起一次性的口号，讲述、分担、支持与制度改进更重要。庆祝的价值在于把“尊重”变得具体。",
      habit1Title: "① 讲述与分享",
      habit1Body:
        "邀请不同年龄、职业与经历的女性讲述自己的故事，让经验被看见，让声音被认真聆听。",
      habit2Title: "② 致敬日常劳动",
      habit2Body:
        "家务、照护、管理、组织与创作同样值得被公开感谢，也值得被公平分担。",
      habit3Title: "③ 关注真实支持",
      habit3Body:
        "改善制度、提供资源、创造更安全公平的环境，比节日当天的热闹更能带来长期改变。",
      customDragonBoatAlt: "女性在职业现场中的专注与专业表达",
      customZongziAlt: "女性在家庭与社区照护场景中的真实贡献",
      footerTitle: "妇女节 · International Women's Day",
      footerSubtitle: "让尊重不止停在祝福，也落在日常行动里。",
      footerBrandNote:
        "Editorial festival stories for courage, labor, and everyday brilliance.",
      footerColumns: [
        {
          heading: "专题导览",
          items: [
            { text: "人物群像", href: "#origins" },
            { text: "职业现场", href: "#customs" },
            { text: "日常光芒", href: "#customs" },
          ],
        },
        {
          heading: "阅读线索",
          items: [
            { text: "劳动与照料", href: "#origins" },
            { text: "创作与表达", href: "#customs" },
            { text: "平等与支持", href: "#top" },
          ],
        },
        {
          heading: "品牌出口",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description: "继续浏览更多值得被认真讲述的节日专题。",
        },
      ],
      footerOrigins: "节日起源",
      footerCustoms: "庆祝方式",
      footerCulture: "现实议题",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A Women's Day feature page introducing the historical roots, present relevance, and meaningful ways to celebrate International Women's Day.",
      heroEyebrow: "International Women's Day Feature",
      heroTitle:
        "Let their expertise, patience, and sharpness be seen, and named with respect",
      heroLead:
        "From meeting rooms and workshops to care work, community effort, and creative practice, this page honors the women whose everyday work keeps shaping the world.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Today", href: "#customs", variant: "muted" },
        { text: "March 8 Every Year", variant: "primary" },
        { text: "Work / Care / Creation", variant: "muted" },
      ],
      heroImageAlt:
        "Women's Day feature visual with professional and everyday female scenes",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Where does Women's Day come from?",
      originsIntro:
        "International Women's Day is both a remembrance of struggles for equal rights and a present-day lens for recognizing women's labor, creativity, and influence.",
      originsImageAlt:
        "Women's Day themed scene featuring women's work and civic participation",
      originsCaption:
        "Respect should not stop at greetings; it should appear in opportunities, expression, and structural support.",
      originCardTitle: "Historical Pathways",
      originCardBody:
        "From labor rights and voting rights to education access and equal voice, Women's Day carries a long line of collective progress. Today, it is also a reminder to keep addressing fairness, care, career growth, and safety.",
      originPatternText:
        "History, present relevance, and lived experience are the three core reading threads of this festival.",
      historyCardTitle: "Contemporary Relevance",
      historyCardBody:
        "Women's Day brings conversations beyond symbolic appreciation, including equal opportunities, workplace conditions, family division of labor, education support, and social safety.",
      historyPoint1:
        "Historical roots: global movements for labor and political rights",
      historyPoint2:
        "Current expression: recognizing women's contributions in real settings",
      customsEyebrow: "Ways to Mark the Day",
      customsTitle: "How can Women's Day be celebrated meaningfully?",
      customsIntro:
        "Beyond slogans, meaningful celebration means storytelling, shared responsibility, practical support, and long-term improvement.",
      habit1Title: "1. Storytelling and Sharing",
      habit1Body:
        "Invite women across ages, professions, and backgrounds to speak, so lived experience is visible and heard.",
      habit2Title: "2. Honor Everyday Labor",
      habit2Body:
        "Care work, household coordination, management, and creation all deserve public acknowledgment and fairer distribution.",
      habit3Title: "3. Focus on Real Support",
      habit3Body:
        "Policy, resources, and safer, fairer environments matter more than one-day gestures.",
      customDragonBoatAlt:
        "Women demonstrating focus and expertise in professional settings",
      customZongziAlt:
        "Women's contribution in care work across family and community contexts",
      footerTitle: "International Women's Day",
      footerSubtitle: "Let respect move from celebration into everyday action.",
      footerBrandNote:
        "Editorial festival stories for courage, labor, and everyday brilliance.",
      footerColumns: [
        {
          heading: "Feature Map",
          items: [
            { text: "Portraits", href: "#origins" },
            { text: "Workplaces", href: "#customs" },
            { text: "Everyday Brilliance", href: "#customs" },
          ],
        },
        {
          heading: "Reading Threads",
          items: [
            { text: "Labor & Care", href: "#origins" },
            { text: "Creation & Voice", href: "#customs" },
            { text: "Equity & Support", href: "#top" },
          ],
        },
        {
          heading: "Brand Exit",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description: "Browse more festival features built with thoughtful narratives.",
        },
      ],
      footerOrigins: "Origins",
      footerCustoms: "Ways",
      footerCulture: "Issues",
      footerSite: "DayTicker Official Site",
    },
  },
};
