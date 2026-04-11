export const womensDayFestivalConfig = {
  slug: "womensday",
  brandUrl: "https://dayticker.net",
  layoutVariant: "womensday_strict",
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
    footerTopLine: "#51464B",
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
      heroStats: [
        {
          heading: "专题视角",
          title: "职业与日常",
          body: "把专业能力、照料劳动与个人表达放在同一张叙事版面里。",
          accent: false,
        },
        {
          heading: "人物群像",
          title: "08 幅现场切片",
          body: "聚焦创作者、工程师、教师、护理者与普通生活中的坚韧瞬间。",
          accent: false,
        },
        {
          heading: "核心语气",
          title: "坚定、明亮、克制",
          body: "避免节庆浪漫化表达，让尊重感与真实生活经验成为主轴。",
          accent: true,
        },
      ],
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "今日表达", href: "#customs", variant: "muted" },
        { text: "每年 3 月 8 日", variant: "primary" },
        { text: "Work / Care / Creation", variant: "muted" },
      ],
      heroFocusTag: "本期主线",
      heroFocusTitle: "她们并不等待被赞美，而是在现场定义标准",
      heroNoteTag: "编辑注",
      heroNoteBody:
        "从工作与生活的交叠处进入，记录那些常被忽略却持续照亮周围的人。",
      heroImageAlt: "妇女节专题中的女性职业与日常群像场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "妇女节从何而来？",
      originsIntro:
        "国际妇女节既是对女性争取平等权利历史的纪念，也是今天重新看见女性劳动、创造力与公共影响力的重要时刻。",
      originsImageAlt: "妇女节相关的女性工作与公共参与场景",
      originsCaption: "尊重不应停留在祝福，而应落实到机会、表达与制度支持之中。",
      originsFacts: [
        {
          heading: "历史背景",
          body: "妇女节起源于 20 世纪初全球女性争取劳动权与政治权利的运动，后来逐渐成为国际社会共同纪念的重要日期。",
        },
        {
          heading: "现实意义",
          body: "它让“感谢女性”之外的议题进入公共讨论，包括平等机会、职场环境、家庭分工、教育支持与社会安全。",
        },
        {
          heading: "今天的表达",
          body: "在学校、公司、社区与家庭里，妇女节也成为一次重新倾听女性经验、看见女性贡献并给出更真实支持的机会。",
        },
      ],
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
        "• 讲述与分享：邀请不同年龄、职业与经历的女性讲述自己的故事，让经验被看见。\n• 致敬日常劳动：家务、照护、管理、组织与创作，同样值得被公开感谢与认真分担。\n• 关注真实支持：比起一次性的口号，改善制度、提供资源、创造更安全公平的环境更重要。\n• 让庆祝更具体：送花、展览、沙龙、读书会或一次认真对话，都可以成为尊重的开始。",
      customsCard1Text: "从办公室到工作坊，女性的专业与判断力每天都在塑造现实。",
      customsCard2Text: "家庭、社区与公共空间中的照护劳动，也值得被认真看见与尊重。",
      customDragonBoatAlt: "女性在职业现场中的专注与专业表达",
      customZongziAlt: "女性在家庭与社区照护场景中的真实贡献",
      footerTitle: "DayTicker · 妇女节 International Women's Day",
      footerSubtitle:
        "记录她们在工作、生活与创造中的真实光芒，让专题页面成为更有尊重感的观看入口。",
      footerBrandNote:
        "Editorial festival stories for courage, labor, and everyday brilliance.",
      footerBrandPill: "Browse all features",
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
            { text: "尊重感排版", href: "#top" },
          ],
        },
        {
          heading: "品牌出口",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description: "继续浏览更多关于节日、文化与公共叙事的专题页面。",
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
      heroStats: [
        {
          heading: "Lens",
          title: "Work and Everyday Life",
          body: "Putting professional skill, care labor, and personal voice in one narrative view.",
          accent: false,
        },
        {
          heading: "Portrait Set",
          title: "08 Scene Fragments",
          body: "Focusing on creators, engineers, teachers, caregivers, and resilient moments in ordinary life.",
          accent: false,
        },
        {
          heading: "Core Tone",
          title: "Firm, Bright, Restrained",
          body: "Avoiding festive romanticization and centering respect with lived experience.",
          accent: true,
        },
      ],
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Today", href: "#customs", variant: "muted" },
        { text: "March 8 Every Year", variant: "primary" },
        { text: "Work / Care / Creation", variant: "muted" },
      ],
      heroFocusTag: "Main Thread",
      heroFocusTitle: "They do not wait for praise; they define standards on site",
      heroNoteTag: "Editor's Note",
      heroNoteBody:
        "Starting from where work and life overlap, we document women who keep lighting up their surroundings.",
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
      originsFacts: [
        {
          heading: "Historical Context",
          body: "Women's Day emerged from early 20th-century movements for labor and political rights, and later became an internationally recognized commemorative date.",
        },
        {
          heading: "Present Relevance",
          body: "It opens discussion beyond appreciation, including equal opportunity, workplace conditions, care distribution, education, and safety.",
        },
        {
          heading: "Today's Expression",
          body: "Across schools, companies, communities, and homes, it is a chance to hear women's experiences and offer more concrete support.",
        },
      ],
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
        "• Storytelling and sharing: invite women across ages and professions so lived experience is visible.\n• Honor everyday labor: care, household coordination, management, and creation all deserve acknowledgment.\n• Focus on real support: resources, policies, and safer, fairer environments matter more than one-day gestures.\n• Make celebration concrete: flowers, salons, reading groups, exhibitions, and serious conversations can all be a start.",
      customsCard1Text:
        "From offices to workshops, women's expertise and judgment shape reality every day.",
      customsCard2Text:
        "Care labor in families, communities, and public spaces also deserves clear recognition and respect.",
      customDragonBoatAlt:
        "Women demonstrating focus and expertise in professional settings",
      customZongziAlt:
        "Women's contribution in care work across family and community contexts",
      footerTitle: "DayTicker · International Women's Day",
      footerSubtitle:
        "A respectful viewing entry for women's real brilliance in work, life, and creation.",
      footerBrandNote:
        "Editorial festival stories for courage, labor, and everyday brilliance.",
      footerBrandPill: "Browse all features",
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
            { text: "Respectful Layout", href: "#top" },
          ],
        },
        {
          heading: "Brand Exit",
          items: [{ text: "DayTicker", href: "https://dayticker.net", external: true, highlight: true }],
          description: "Browse more features on festivals, culture, and public narratives.",
        },
      ],
      footerOrigins: "Origins",
      footerCustoms: "Ways",
      footerCulture: "Issues",
      footerSite: "DayTicker Official Site",
    },
  },
};
