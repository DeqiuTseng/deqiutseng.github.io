export const dragonBoatFestivalConfig = {
  slug: "dragonboat",
  brandUrl: "https://dayticker.net",
  images: {
    hero: {
      avif: "./assets/hero-dragon-boat.avif",
      fallback: "./assets/hero-dragon-boat.webp",
      width: 920,
      height: 600,
    },
    origins: {
      avif: "./assets/origins-zongzi.avif",
      fallback: "./assets/origins-zongzi.webp",
      width: 1400,
      height: 720,
    },
    customs: [
      {
        avif: "./assets/custom-dragon-boat.avif",
        fallback: "./assets/custom-dragon-boat.webp",
        width: 840,
        height: 440,
      },
      {
        avif: "./assets/custom-zongzi.avif",
        fallback: "./assets/custom-zongzi.webp",
        width: 840,
        height: 440,
      },
    ],
  },
  translations: {
    zh: {
      pageTitle: "DayTicker",
      pageDescription: "端午节专题网页，介绍端午节的历史起源、传统习俗与文化寓意。",
      heroEyebrow: "端午节 · 中国传统节日",
      heroTitle: "粽香千年，龙舟竞渡：走进端午节",
      heroLead:
        "通过图文了解端午节的历史起源与传统习俗，感受中华文化中对家国、安康与团圆的深厚寄托。",
      heroBadges: [
        { text: "节日起源", href: "#origins", variant: "primary" },
        { text: "传统习俗", href: "#customs", variant: "muted" },
        { text: "农历五月初五", variant: "primary" },
        { text: "农历", variant: "muted" },
      ],
      heroImageAlt: "端午节龙舟竞渡与粽子场景",
      originsEyebrow: "节日起源 · Origins",
      originsTitle: "端午节起源与历史背景",
      originsIntro: "从纪念传统到民俗演变，理解端午在中华文化中的精神内核。",
      originsImageAlt: "端午节餐桌上的粽子与传统茶具",
      originsCaption: "粽叶、龙舟与时令食俗，构成端午独特的文化意象。",
      originCardTitle: "起源脉络",
      originCardBody:
        "端午节形成于中国古代夏季时令祭祀与避疫习俗之中，后世逐渐叠加纪念屈原的历史叙事。节日通过龙舟竞渡、食粽、佩香囊、悬艾草等实践，承载了家国情怀与祈福安康的双重意义。",
      originPatternText: "粽叶青绿与传统纹样，象征节气与生命力。",
      historyCardTitle: "历史演进",
      historyCardBody:
        "自汉唐以来，端午由地域性民俗逐渐发展为全国性节日。宋明以后，文献记载与地方志传播使其文化符号更加稳定，近现代则在公共文化活动中持续焕新，成为连接传统记忆与当代生活的重要节日。",
      historyPoint1: "先秦至两汉：时令祭祀与辟邪祈安",
      historyPoint2: "唐宋至近现代：纪念叙事定型并融入公共文化",
      customsEyebrow: "端午节传统习俗",
      customsTitle: "从赛龙舟到挂艾草：端午里的仪式感",
      customsIntro:
        "端午习俗兼具纪念、祈福与防疫意义。不同地区虽有差异，但都围绕“祛病避邪、祈求安康、凝聚家族与乡里情感”展开。",
      habit1Title: "① 赛龙舟",
      habit1Body: "以竞渡纪念先贤，体现团结协作与勇争上游的精神。",
      habit2Title: "② 包粽子与食粽",
      habit2Body: "以糯米与箬叶包裹时令滋味，寄寓团圆丰足、平安顺遂。",
      habit3Title: "③ 挂艾草、佩香囊",
      habit3Body: "古人以艾草菖蒲辟秽驱毒，香囊内置药草，寓意辟邪祈安。",
      customDragonBoatAlt: "端午节赛龙舟活动",
      customZongziAlt: "端午节包粽子场景",
      footerTitle: "端午安康 · Dragon Boat Festival",
      footerSubtitle: "愿岁岁平安，家家团圆。",
      footerOrigins: "节日起源",
      footerCustoms: "传统习俗",
      footerCulture: "文化传承",
      footerSite: "DayTicker 官网",
    },
    en: {
      pageTitle: "DayTicker",
      pageDescription:
        "A special page introducing the Dragon Boat Festival, including its origins, traditions, and cultural symbolism.",
      heroEyebrow: "Dragon Boat Festival · Chinese Traditional Festival",
      heroTitle: "A Thousand Years of Fragrance, A Race of Dragon Boats",
      heroLead:
        "Explore the origins and customs of the Dragon Boat Festival through text and imagery, and experience the cultural meaning of family, health, and reunion in Chinese tradition.",
      heroBadges: [
        { text: "Origins", href: "#origins", variant: "primary" },
        { text: "Customs", href: "#customs", variant: "muted" },
        { text: "Fifth day of the fifth lunar month", variant: "primary" },
        { text: "Lunar Calendar", variant: "muted" },
      ],
      heroImageAlt: "Dragon boat racing and zongzi during the Dragon Boat Festival",
      originsEyebrow: "Festival Origins · Origins",
      originsTitle: "Origins and Historical Background",
      originsIntro:
        "Understand the spiritual core of the festival through its evolution from seasonal ritual to cultural remembrance.",
      originsImageAlt: "Zongzi and traditional tea ware on a Dragon Boat Festival table",
      originsCaption:
        "Bamboo leaves, dragon boats, and seasonal food traditions form the unique imagery of the festival.",
      originCardTitle: "Origin Pathways",
      originCardBody:
        "The Dragon Boat Festival emerged from ancient Chinese summer rites and health-related customs, later layered with narratives commemorating Qu Yuan. Through dragon boat racing, zongzi, sachets, and mugwort, it carries both patriotic feeling and wishes for peace and well-being.",
      originPatternText:
        "Green bamboo leaves and traditional motifs symbolize the season and vitality.",
      historyCardTitle: "Historical Development",
      historyCardBody:
        "Since the Han and Tang periods, the festival has grown from a regional folk custom into a nationwide celebration. By the Song and Ming dynasties, literature and local gazetteers stabilized its symbols, and in modern times it continues to renew itself through public cultural activities.",
      historyPoint1: "Pre-Qin to Han: seasonal rites and blessings for health",
      historyPoint2:
        "Tang, Song to modern era: commemorative narratives entered public culture",
      customsEyebrow: "Traditional Customs",
      customsTitle: "From Dragon Boat Races to Mugwort: Rituals of Duanwu",
      customsIntro:
        "The customs of the festival combine remembrance, blessing, and seasonal health practices. While they vary by region, they all revolve around protection, well-being, and the bonds of family and community.",
      habit1Title: "1. Dragon Boat Racing",
      habit1Body:
        "Boat races honor cultural heroes and express teamwork, discipline, and the drive to move forward.",
      habit2Title: "2. Making and Eating Zongzi",
      habit2Body:
        "Sticky rice wrapped in bamboo leaves captures the flavor of the season and symbolizes reunion, abundance, and peace.",
      habit3Title: "3. Hanging Mugwort and Wearing Sachets",
      habit3Body:
        "Mugwort and calamus were traditionally used to ward off illness, while herbal sachets symbolized protection and blessings.",
      customDragonBoatAlt: "Dragon boat racing during the Dragon Boat Festival",
      customZongziAlt: "Making zongzi during the Dragon Boat Festival",
      footerTitle: "Peace and Health · Dragon Boat Festival",
      footerSubtitle: "May every year bring peace, and every home remain reunited.",
      footerOrigins: "Origins",
      footerCustoms: "Customs",
      footerCulture: "Culture",
      footerSite: "DayTicker Official Site",
    },
  },
};
