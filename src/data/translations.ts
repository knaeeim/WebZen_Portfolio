export interface TranslationSchema {
  nav: {
    services: string;
    projects: string;
    process: string;
    calculator: string;
    pricing: string;
    testimonials: string;
    contact: string;
    hireUs: string;
    dhakaTime: string;
    availableStatus: string;
    languageToggle: string;
  };
  hero: {
    badge: string;
    badgeHighlight: string;
    titlePart1: string;
    titleGradient: string;
    titlePart2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    calculatorCta: string;
    tagsHeading: string;
    statsRetention: string;
    statsShipped: string;
    statsUptime: string;
  };
  stats: {
    stat1Label: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Label: string;
    stat4Desc: string;
  };
  services: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    deliverablesLabel: string;
    customScopeTitle: string;
    customScopeDesc: string;
    calculateBtn: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      deliverables: string[];
      tags: string[];
      featured?: boolean;
    }[];
  };
  projects: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    discussBtn: string;
    allFilter: string;
    caseStudyBtn: string;
    clientLabel: string;
  };
  techstack: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    categories: {
      name: string;
      iconType: "layers" | "terminal" | "creditCard" | "bot" | "cloud";
      items: {
        name: string;
        desc: string;
        badge: string;
      }[];
    }[];
  };
  process: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    milestone: string;
    phase: string;
  };
  calculator: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    step1: string;
    step2: string;
    step3: string;
    summaryHeading: string;
    estimateReady: string;
    estimatedTotal: string;
    globalClients: string;
    baseArch: string;
    selectedModules: string;
    targetDelivery: string;
    guarantee: string;
    ctaBtn: string;
    noCommitment: string;
    hostingNotice: string;
    hostingScope: string;
    hostingClientPaid: string;
  };
  pricing: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    currencyBdt: string;
    currencyUsd: string;
    mostPopular: string;
    whatsIncluded: string;
    hostingNoticeTitle: string;
    hostingNoticeBadge: string;
    hostingNoticeDesc: string;
    hostingSetupFree: string;
    hostingCardNote: string;
    plans: {
      id: string;
      name: string;
      priceBdt: string;
      priceUsd: string;
      period: string;
      description: string;
      popular: boolean;
      ctaText: string;
      ctaLink: string;
      features: string[];
    }[];
  };
  testimonials: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    items: {
      id: string;
      name: string;
      role: string;
      company: string;
      location: string;
      avatar: string;
      rating: number;
      content: string;
    }[];
  };
  faq: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    items: {
      id: string;
      question: string;
      answer: string;
      category: string;
    }[];
  };
  contact: {
    badge: string;
    heading: string;
    headingGradient: string;
    subheading: string;
    whatsappTitle: string;
    whatsappSub: string;
    whatsappBtn: string;
    dhakaHq: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    securityPromise: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formAnotherBtn: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabelForm: string;
    phoneLabelForm: string;
    projectTypeLabel: string;
    budgetLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
  };
  footer: {
    bio: string;
    status: string;
    navTitle: string;
    solutionsTitle: string;
    helpTitle: string;
    helpDesc: string;
    backToTop: string;
    allRights: string;
  };
}

export const translations: Record<"bn" | "en", TranslationSchema> = {
  bn: {
    nav: {
      services: "সার্ভিস",
      projects: "পোর্টফোলিও",
      process: "কাজের ধাপ",
      calculator: "বাজেট হিসাব",
      pricing: "প্যাকেজ ও খরচ",
      testimonials: "ক্লায়েন্ট রিভিউ",
      contact: "যোগাযোগ",
      hireUs: "প্রজেক্ট শুরু করুন",
      dhakaTime: "ঢাকা",
      availableStatus: "নতুন প্রজেক্টের জন্য প্রস্তুত",
      languageToggle: "English",
    },
    hero: {
      badge: "⚡ বিশ্বস্ত ডিজিটাল সফটওয়্যার পার্টনার",
      badgeHighlight: "ঢাকা ও গ্লোবাল",
      titlePart1: "ব্যবসা বাড়াতে",
      titleGradient: "প্রিমিয়াম ওয়েবসাইট ও সফটওয়্যার",
      titlePart2: "",
      description:
        "আমরা এমন ওয়েবসাইট, অনলাইন শপ আর মোবাইল অ্যাপ তৈরি করি যা দেখতে যেমন চোখ জুড়ানো, তেমনি সুপারফাস্ট। বিকাশ-নগদ পেমেন্ট, গুগল সার্চে এগিয়ে থাকা আর সহজ ড্যাশবোর্ড—সবকিছুই পাবেন এক ছাদের নিচে।",
      primaryCta: "নতুন প্রজেক্ট নিয়ে আলাপ করুন",
      secondaryCta: "আমাদের কাজ দেখুন",
      calculatorCta: "খরচ কত পড়বে হিসাব করুন",
      tagsHeading: "যেসব আধুনিক টেকনোলজিতে আমরা কাজ করি",
      statsRetention: "রিপিট ক্লায়েন্ট",
      statsShipped: "সফল প্রজেক্ট",
      statsUptime: "সার্ভার আপটাইম",
    },
    stats: {
      stat1Label: "৫০+ সফল প্রজেক্ট",
      stat1Desc: "ই-কমার্স, করপোরেট প্রতিষ্ঠান থেকে শুরু করে ফাস্ট-গ্রোয়িং স্টার্টআপ।",
      stat2Label: "৯৮% ক্লায়েন্ট সন্তুষ্টি",
      stat2Desc: "কাজ বুঝিয়ে দেওয়ার পরও নিয়মিত টেকনিক্যাল কেয়ার ও পাশে থাকার প্রতিশ্রুতি।",
      stat3Label: "১৮+ দেশে ক্লায়েন্ট",
      stat3Desc: "বাংলাদেশ ছাড়াও যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা ও মধ্যপ্রাচ্যে সফল ডেলিভারি।",
      stat4Label: "২৪/৭ সার্বক্ষণিক কেয়ার",
      stat4Desc: "জরুরি প্রয়োজনে আমাদের ইঞ্জিনিয়ারদের সরাসরি হোয়াটসঅ্যাপ বা ফোনে পাবেন।",
    },
    services: {
      badge: "আমাদের সার্ভিস",
      heading: "আপনার ব্যবসাকে এগিয়ে নিতে",
      headingGradient: "যেসব সমাধান আমরা দিচ্ছি",
      subheading:
        "কোনো জটিল টেকনিক্যাল বুলি নয়; সোজা বাংলায় আপনার ব্যবসার সেলস ও ব্র্যান্ড ভ্যালু বাড়াতে যা সত্যিই কাজে আসবে, আমরা সেটাই তৈরি করি।",
      deliverablesLabel: "এই সার্ভিসে যা যা পাচ্ছেন:",
      customScopeTitle: "আপনার প্রজেক্টের রিকোয়ারমেন্ট কি একটু ভিন্ন?",
      customScopeDesc: "কোনো সমস্যা নেই। আপনার নির্দিষ্ট বিজনেস মডেল অনুযায়ী আমরা কাস্টম পরিকল্পনা ও কোটেশন দেব।",
      calculateBtn: "বাজেট হিসাব করুন",
      items: [
        {
          id: "srv-1",
          title: "কর্পোরেট ও হেলথটেক পোর্টাল",
          subtitle: "ডাক্তার, কনসালটেন্ট ও ব্র্যান্ডের আস্থার ভিত্তি",
          description:
            "ডাক্তারদের জন্য স্মার্ট সিরিয়াল বুকিং, ক্লিনিক শিডিউলিং বা করপোরেট পোর্টাল। রোগীরা সরাসরি ৩ ধাপে অ্যাপয়েন্টমেন্ট বুক করতে পারবে এবং ফোনে তাৎক্ষণিক এসএমএস কনফার্মেশন পাবে।",
          deliverables: ["অনলাইন সিরিয়াল ও স্লট বুকিং", "মোবাইল ও ল্যাপটপে নিখুঁত ডিসপ্লে", "গুগল সার্চ ও এসইও (SEO) সেটআপ"],
          tags: ["হেলথটেক", "সিরিয়াল বুকিং", "কর্পোরেট পোর্টাল"],
          featured: true,
        },
        {
          id: "srv-2",
          title: "ই-কমার্স ও অনলাইন শপ",
          subtitle: "ঝামেলাহীন অর্ডার ও ইনস্ট্যান্ট পেমেন্ট",
          description:
            "ফেসবুক ইনবক্সে ঘণ্টার পর ঘণ্টা অর্ডার নেওয়ার দিন শেষ। কাস্টমার সরাসরি ওয়েবসাইটে বিকাশ, নগদ বা কার্ডে পে করে অর্ডার কনফার্ম করবে, আর আপনার ফোনে যাবে ইনস্ট্যান্ট নোটিফিকেশন।",
          deliverables: ["বিকাশ, নগদ ও কার্ড পেমেন্ট গেটওয়ে", "অটোমেটিক ইনভয়েস ও এসএমএস নোটিফিকেশন", "স্টক ও অর্ডার ম্যানেজমেন্ট ড্যাশবোর্ড"],
          tags: ["অনলাইন শপ", "বিকাশ পেমেন্ট", "ই-কমার্স"],
          featured: true,
        },
        {
          id: "srv-3",
          title: "মোবাইল অ্যাপস (Android & iOS)",
          subtitle: "কাস্টমারের মোবাইলের হোম স্ক্রিনে আপনার সার্ভিস",
          description:
            "অ্যান্ড্রয়েড ও আইফোন উভয়ের জন্যই স্মুথ, দ্রুতগতির ও বাগমুক্ত অ্যাপ্লিকেশন। পুশ নোটিফিকেশন পাঠিয়ে অফার জানান বা নিয়মিত গ্রাহক তৈরি করুন সহজে।",
          deliverables: ["গুগল প্লে স্টোর ও অ্যাপল অ্যাপ স্টোরে লঞ্চ", "পুশ নোটিফিকেশন সিস্টেম", "অফলাইনেও কাজ করার সুবিধা"],
          tags: ["অ্যান্ড্রয়েড", "আইওএস", "মোবাইল অ্যাপ"],
          featured: false,
        },
        {
          id: "srv-4",
          title: "বিজনেস অটোমেশন ও AI চ্যাটবট",
          subtitle: "মানুষ ছাড়াই ২৪ ঘণ্টা কাস্টমার হ্যান্ডলিং",
          description:
            "রাত-দিন যেকোনো সময় কাস্টমার মেসেজ দিলে স্মার্ট চ্যাটবট সেকেন্ডের মধ্যে উত্তর দেবে এবং অর্ডার কনফার্ম করবে। আপনার কাজের সময় ও জনবল খরচ দুটোই বাঁচবে।",
          deliverables: ["ওয়েবসাইট ও সোশ্যাল মিডিয়া চ্যাটবট", "স্বয়ংক্রিয় অর্ডার প্রসেসিং", "দৈনিক সেলস ও আয়ের রিয়েল-টাইম রিপোর্ট"],
          tags: ["স্মার্ট চ্যাটবট", "অটোমেশন", "কাস্টমার সাপোর্ট"],
          featured: true,
        },
        {
          id: "srv-5",
          title: "UI/UX ডিজাইন ও রি-ডিজাইন",
          subtitle: "পুরনো ও ধীরগতির ওয়েবসাইটকে প্রিমিয়াম রূপ দিন",
          description:
            "আপনার বর্তমান সাইট কি দেখতে পুরনো কিংবা মোবাইল থেকে ব্রাউজ করা কঠিন? আধুনিক ট্রেন্ড অনুযায়ী রি-ডিজাইন করে সাইটকে আকর্ষণীয় ও ব্যবহারে সহজ করে তুলুন।",
          deliverables: ["আন্তর্জাতিক মানের প্রিমিয়াম লুক", "লোগো ও কালার ব্র্যান্ড গাইডলাইন", "ইউজার-ফ্রেন্ডলি সহজ ইন্টারফেস"],
          tags: ["UI/UX ডিজাইন", "সাইট রি-ডিজাইন", "ব্র্যান্ডিং"],
          featured: false,
        },
        {
          id: "srv-6",
          title: "হোস্টিং, মেইনটেন্যান্স ও সাইবার সিকিউরিটি",
          subtitle: "সাইট সচল আর নিরাপদ রাখার পুরো দায়িত্ব আমাদের",
          description:
            "সার্ভার ডাউন হওয়া, সাইট হ্যাক হওয়া বা ডাটা মুছে যাওয়ার ভয় ভুলে যান। সার্বক্ষণিক সার্ভার মনিটরিং, অটোমেটিক ব্যাকআপ আর প্রয়োজনীয় রক্ষণাবেক্ষণ আমরাই সামলাই।",
          deliverables: ["সার্বক্ষণিক আপটাইম মনিটরিং", "প্রতিদিনের ক্লাউড ব্যাকআপ", "ডিডস ও হ্যাকিং প্রটেকশন"],
          tags: ["সার্ভার কেয়ার", "ডাটা ব্যাকআপ", "সাইবার নিরাপত্তা"],
          featured: false,
        },
      ],
    },
    projects: {
      badge: "আমাদের কাজ",
      heading: "বাস্তব অভিজ্ঞতা আর",
      headingGradient: "সাফল্যের কিছু গল্প",
      subheading:
        "আমরা কথার চেয়ে কাজে বিশ্বাসী। devojyotidutta.com-এর মতো হেলথটেক পোর্টাল, স্মার্ট সিরিয়াল বুকিং ও সফল ই-কমার্স প্রজেক্টের বাস্তব নমুনা নিচে দেখুন।",
      discussBtn: "আপনার প্রজেক্ট নিয়ে আলাপ করুন",
      allFilter: "সব প্রজেক্ট",
      caseStudyBtn: "লাইভ সাইট দেখুন",
      clientLabel: "ক্লায়েন্ট:",
    },
    techstack: {
      badge: "প্রযুক্তি ও প্ল্যাটফর্ম",
      heading: "যেসব নির্ভরযোগ্য টেকনোলজিতে",
      headingGradient: "আমরা ওয়েবসাইট বানাই",
      subheading:
        "কোনো পুরনো বা ধীরগতির টেমপ্লেট নয়; বিশ্বের শীর্ষ টেক কোম্পানিগুলো যেসব ফ্রেমওয়ার্ক দিয়ে কাজ করে, আমরাও ঠিক সেগুলোই ব্যবহার করি।",
      categories: [
        {
          name: "ওয়েবসাইট ও ফ্রন্টএন্ড",
          iconType: "layers",
          items: [
            { name: "Next.js ও React", desc: "ক্লিক করলেই পেজ হাজির, কোনো লোডিংয়ের বিরক্তি নেই", badge: "সুপারফাস্ট" },
            { name: "ফুল রেসপনসিভ লেআউট", desc: "মোবাইল, ট্যাব বা মনিটর—সব ডিভাইসে সাইট থাকবে পারফেক্ট", badge: "রেসপনসিভ" },
            { name: "স্মুথ ইন্টারঅ্যাকশন", desc: "চোখ জুড়ানো হালকা অ্যানিমেশন যা সাইটকে করে তোলে আকর্ষণীয়", badge: "৬০ FPS" },
            { name: "shadcn/ui প্রিমিয়াম লুক", desc: "আন্তর্জাতিক মানের পরিচ্ছন্ন ও আধুনিক ইন্টারফেস", badge: "মডার্ন লুক" },
          ],
        },
        {
          name: "সার্ভার ও ডাটা নিরাপত্তা",
          iconType: "terminal",
          items: [
            { name: "হাই-স্পিড ক্লাউড সার্ভার", desc: "একসাথে হাজার হাজার ভিজিটর আসলেও সাইট স্লো হবে না", badge: "৯৯.৯% আপটাইম" },
            { name: "এনক্রিপ্টেড ডাটাবেস", desc: "পাসওয়ার্ড ও গ্রাহকের যেকোনো তথ্যের শতভাগ নিরাপত্তা", badge: "সম্পূর্ণ নিরাপদ" },
            { name: "ইনস্ট্যান্ট এপিআই রেসপন্স", desc: "মুহূর্তেই ডাটা লোড ও রিয়েল-টাইম অর্ডার সিঙ্ক", badge: "হাই-স্পিড" },
            { name: "অটো ক্লাউড ব্যাকআপ", desc: "প্রতিদিনের ডাটা আলাদা সিকিউর সার্ভারে ব্যাকআপ থাকবে", badge: "ডেইলি ব্যাকআপ" },
          ],
        },
        {
          name: "বিকাশ ও অনলাইন পেমেন্ট",
          iconType: "creditCard",
          items: [
            { name: "বিকাশ ও নগদ পেমেন্ট", desc: "১-ক্লিকে বিকাশ ও নগদ পেমেন্ট এবং অটো ভেরিফিকেশন", badge: "ইনস্ট্যান্ট পেমেন্ট" },
            { name: "ভিসা ও মাস্টারকার্ড", desc: "যেকোনো দেশি-বিদেশি ব্যাংকের কার্ডে নিরাপদ ট্রানজ্যাকশন", badge: "কার্ড গেটওয়ে" },
            { name: "স্বয়ংক্রিয় রসিদ ও ইনভয়েস", desc: "পেমেন্টের সাথে সাথে গ্রাহকের ফোনে এসএমএস ও পিডিএফ ইনভয়েস", badge: "অটো রসিদ" },
            { name: "রিফান্ড ও হিসাব ড্যাশবোর্ড", desc: "অ্যাডমিন প্যানেল থেকেই পেমেন্ট স্ট্যাটাস ও হিসাব দেখার সুযোগ", badge: "সহজ হিসাব" },
          ],
        },
        {
          name: "অটোমেশন ও স্মার্ট সিস্টেম",
          iconType: "bot",
          items: [
            { name: "স্মার্ট এআই চ্যাটবট", desc: "গ্রাহক মেসেজ দেওয়া মাত্রই সঠিক উত্তর ও প্রডাক্টের লিংক দেওয়া", badge: "২৪/৭ চ্যাট" },
            { name: "স্বয়ংক্রিয় অর্ডার প্রসেসিং", desc: "অর্ডারের সাথে সাথে স্টক সমন্বয় ও ইনভেন্টরি আপডেট", badge: "অটোমেশন" },
            { name: "কাস্টমার এসএমএস এলার্ট", desc: "কাস্টমার ও ডেলিভারি টিমের কাছে রিয়েল-টাইম স্ট্যাটাস এসএমএস", badge: "এসএমএস এলার্ট" },
            { name: "সেলস ও আয়ের অ্যানালিটিক্স", desc: "প্রতিদিন কত টাকার বিক্রি হলো তার পরিষ্কার ভিজ্যুয়াল চার্ট", badge: "ভিজ্যুয়াল গ্রাফ" },
          ],
        },
        {
          name: "ক্লাউড সিকিউরিটি ও স্পিড",
          iconType: "cloud",
          items: [
            { name: "Cloudflare সিকিউরিটি শিল্ড", desc: "ডিডস (DDoS), ম্যালওয়্যার ও সাইবার আক্রমণ থেকে নিরাপত্তা", badge: "সাইবার শিল্ড" },
            { name: "গ্লোবাল এজ ক্যাশিং", desc: "দেশ বা বিদেশ—সব জায়গা থেকে সাইট বিদ্যুৎ গতিতে ওপেন হবে", badge: "গ্লোবাল স্পিড" },
            { name: "SSL সিকিউরিটি সার্টিফিকেট", desc: "গ্রিন প্যাডলক সহ সম্পূর্ণ বিশ্বস্ত ও নিরাপদ ব্রাউজিং", badge: "SSL সিকিউর" },
            { name: "২৪/৭ সার্বক্ষণিক নজরদারি", desc: "যেকোনো সমস্যা দেখা দিলে সিস্টেম নিজে থেকেই সমাধান করবে", badge: "সার্ভার হেলথ" },
          ],
        },
      ],
    },
    process: {
      badge: "কাজের সহজ ধাপ",
      heading: "আইডিয়া থেকে লাইভ সাইট —",
      headingGradient: "৫টি স্পষ্ট ধাপে কাজ",
      subheading:
        "কোনো লুকোচুরি বা অনিশ্চয়তা নেই। প্রতিটি ধাপে আপনি সরাসরি জানবেন আপনার প্রজেক্টের কাজ কতটুকু এগোলো।",
      milestone: "সম্পন্ন ✓",
      phase: "ধাপ",
    },
    calculator: {
      badge: "বাজেট ক্যালকুলেটর",
      heading: "শুরুতেই প্রজেক্ট খরচের",
      headingGradient: "একটি পরিষ্কার ধারণা নিন",
      subheading:
        "আপনার কী কী প্রয়োজন তা নিচের অপশনগুলো থেকে বেছে নিন; সাথে সাথে আনুমানিক বাজেট ও ডেলিভারি টাইম দেখতে পাবেন।",
      step1: "১. প্রজেক্টের ধরন বেছে নিন",
      step2: "২. অতিরিক্ত ফিচার বা সুবিধা যোগ করুন",
      step3: "৩. কত দ্রুত ডেলিভারি চান?",
      summaryHeading: "বাজেটের হিসাব",
      estimateReady: "হিসাব প্রস্তুত",
      estimatedTotal: "আনুমানিক মোট বাজেট (টাকা)",
      globalClients: "আন্তর্জাতিক ক্লায়েন্টদের জন্য সমমূল্যের ইউএস ডলার হিসাব",
      baseArch: "মূল প্রজেক্টের ধরন:",
      selectedModules: "নির্বাচিত অতিরিক্ত ফিচার:",
      targetDelivery: "সম্ভাব্য ডেলিভারি সময়:",
      guarantee: "সম্পূর্ণ সোর্স কোডের মালিকানা, সার্ভার সেটআপ এবং ৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট অন্তর্ভুক্ত।",
      ctaBtn: "এই বাজেটে আলোচনা শুরু করুন",
      noCommitment: "কোনো অগ্রিম ফি বা চুক্তি ছাড়াই আলোচনা করতে পারেন। আমরা ২ ঘণ্টার মধ্যে যোগাযোগ করব।",
      hostingNotice: "⚠️ বিশেষ দ্রষ্টব্য: উল্লেখিত বাজেটটি শুধুমাত্র ওয়েবসাইট বা সফটওয়্যার ডেভেলপমেন্ট ফি। সার্ভার হোস্টিং এবং ক্লাউড ডাটাবেজ/স্টোরেজের রানিং খরচ এই বাজেটের সাথে যুক্ত নয়—এটি ক্লায়েন্টকে সরাসরি সার্ভিস প্রোভাইডারকে বহন করতে হবে (আমরা ক্লাউড সার্ভার সম্পূর্ণ ফ্রিতে কনফিগার করে দেব)।",
      hostingScope: "হোস্টিং ও ডাটাবেজ:",
      hostingClientPaid: "ক্লায়েন্ট বহন করবেন (সেটআপ ফ্রি)",
    },
    pricing: {
      badge: "স্বচ্ছ প্যাকেজ",
      heading: "আপনার ব্যবসার পরিধি অনুযায়ী",
      headingGradient: "উপযুক্ত প্যাকেজ বেছে নিন",
      subheading:
        "কোনো গোপন চার্জ বা বাড়তি ফি নেই। শুরুতেই পরিষ্কার বাজেট ও টাইমলাইনে সম্পূর্ণ স্বচ্ছতার সাথে কাজ করা হয়।",
      currencyBdt: "টাকা (৳) বাংলাদেশ",
      currencyUsd: "ডলার ($) আন্তর্জাতিক",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      whatsIncluded: "এই প্যাকেজে যা যা অন্তর্ভুক্ত:",
      hostingNoticeTitle: "সার্ভার হোস্টিং ও ডাটাবেজ সংক্রান্ত স্বচ্ছতা",
      hostingNoticeBadge: "গুরুত্বপূর্ণ নোটিশ",
      hostingNoticeDesc: "প্যাকেজের মূল্য শুধুমাত্র ওয়েবসাইট বা সফটওয়্যার ডেভেলপমেন্ট ও কোডিংয়ের জন্য প্রযোজ্য। লাইভ সার্ভার হোস্টিং এবং ক্লাউড ডাটাবেজ/স্টোরেজের খরচ ক্লায়েন্টকে নিজস্ব অ্যাকাউন্ট থেকে সরাসরি প্রোভাইডারকে বহন করতে হবে। তবে আপনার প্রজেক্টের জন্য সবচেয়ে নির্ভরযোগ্য ও সাশ্রয়ী সার্ভার বাছাই এবং সম্পূর্ণ সেটআপ আমরা ফ্রিতে করে দেব।",
      hostingSetupFree: "সার্ভার ও ডাটাবেজ সেটআপ সম্পূর্ণ ফ্রি",
      hostingCardNote: "* সার্ভার হোস্টিং ও ডাটাবেজ খরচ আলাদা (ক্লায়েন্ট বহন করবেন)",
      plans: [
        {
          id: "plan-1",
          name: "স্টার্টআপ ওয়েবসাইট প্যাকেজ",
          priceBdt: "৳ ১৬,০০০",
          priceUsd: "$ 150",
          period: "এককালীন",
          description: "নতুন উদ্যোগ বা পেশাদার ব্র্যান্ডের জন্য পরিচ্ছন্ন, দ্রুতগতির ও আকর্ষণীয় ওয়েবসাইট।",
          popular: false,
          ctaText: "স্টার্টআপ প্যাকেজ নিন",
          ctaLink: "#contact",
          features: [
            "৫টি আকর্ষণীয় প্রিমিয়াম পেজ",
            "মোবাইল ও কম্পিউটারে সুপারফাস্ট লোডিং",
            "সহজ কাস্টমার ইনকোয়ারি ফর্ম ও হোয়াটসঅ্যাপ বাটন",
            "গুগল সার্চে আসার প্রাথমিক এসইও সেটআপ",
            "কোডিং ছাড়া কনটেন্ট পরিবর্তনের সহজ ড্যাশবোর্ড",
            "ডোমেইন ও হোস্টিং সেটআপে ফ্রি সহায়তা (হোস্টিং ফি ক্লায়েন্টের)",
            "৩০ দিনের ফ্রি টেকনিক্যাল সাপোর্ট ও ওয়ারেন্টি"
          ]
        },
        {
          id: "plan-2",
          name: "গ্রোথ ই-কমার্স ও হেলথটেক পোর্টাল",
          priceBdt: "৳ ৩৮,০০০",
          priceUsd: "$ 350",
          period: "এককালীন",
          description: "অনলাইনে সরাসরি প্রডাক্ট বিক্রি অথবা ডক্টর সিরিয়াল বুকিংয়ের সম্পূর্ণ প্ল্যাটফর্ম।",
          popular: true,
          ctaText: "গ্রোথ প্যাকেজ শুরু করুন",
          ctaLink: "#contact",
          features: [
            "সম্পূর্ণ কাস্টম ই-কমার্স শপ বা ডক্টর সিরিয়াল পোর্টাল",
            "বিকাশ, নগদ ও কার্ড পেমেন্ট অটোমেটিক ইন্টিগ্রেশন",
            "ইনভেন্টরি, অর্ডার ও কাস্টমার ম্যানেজমেন্ট ড্যাশবোর্ড",
            "অর্ডার বা বুকিং হলেই অটোমেটিক এসএমএস স্লিপ",
            "এডভান্সড গুগল এসইও ও মেটা পিক্সেল সেটআপ",
            "২৪/৭ সরাসরি হোয়াটসঅ্যাপ ও কল সাপোর্ট",
            "লাইটহাউস ৯৫+ স্পিড স্কোর পারফরম্যান্স",
            "৩ মাসের ফ্রি মেইনটেন্যান্স ও টেকনিক্যাল কেয়ার"
          ]
        },
        {
          id: "plan-3",
          name: "কাস্টম সফটওয়্যার ও মোবাইল অ্যাপ",
          priceBdt: "৳ ৭৩,০০০+",
          priceUsd: "$ 680+",
          period: "কাস্টম স্কোপ",
          description: "বিশেষ বিজনেস মডেল, মোবাইল অ্যাপ বা কাস্টম ক্লাউড প্ল্যাটফর্মের জন্য।",
          popular: false,
          ctaText: "ফ্রি পরামর্শ নিন",
          ctaLink: "#contact",
          features: [
            "অ্যান্ড্রয়েড ও আইওএস (iOS) ডেডিকেটেড মোবাইল অ্যাপ",
            "কাস্টম ক্লাউড প্ল্যাটফর্ম ও হাই-সিকিউরিটি ডাটাবেস",
            "ব্যাংক-গ্রেড ডাটা নিরাপত্তা ও স্বয়ংক্রিয় ব্যাকআপ",
            "অভিজ্ঞ ফুল-স্ট্যাক ডেভেলপারদের ডেডিকেটেড টিম",
            "ব্যবসায়িক প্রয়োজন অনুযায়ী আনলিমিটেড স্কেলেবিলিটি",
            "অগ্রাধিকার ভিত্তিতে সার্বক্ষণিক প্রায়োরিটি সাপোর্ট"
          ]
        }
      ]
    },
    testimonials: {
      badge: "ক্লায়েন্টদের অভিজ্ঞতা",
      heading: "আমাদের কাজে খুশি হয়ে",
      headingGradient: "ক্লায়েন্টরা যা বলছেন",
      subheading:
        "দেশ-বিদেশের যেসব উদ্যোক্তা ও কোম্পানি আমাদের ওপর ভরসা রেখেছেন, তাদের আসল অনুভূতি ও অভিজ্ঞতা।",
      items: [
        {
          id: "test-1",
          name: "সাকিব আল হাসান",
          role: "ব্যবস্থাপনা পরিচালক",
          company: "বঙ্গওয়্যার বাংলাদেশ",
          location: "ঢাকা, বাংলাদেশ",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "সাইটের স্পিড আর বিকাশ পেমেন্ট সিস্টেম সত্যি দুর্দান্ত হয়েছে। লঞ্চ করার পর থেকেই কাস্টমাররা স্বাচ্ছন্দ্যে অর্ডার করতে পারছে এবং আমাদের বিক্রি উল্লেখযোগ্যভাবে বেড়েছে।"
        },
        {
          id: "test-2",
          name: "ডা. ফারহানা চৌধুরী",
          role: "কো-ফাউন্ডার ও সিইও",
          company: "মেডিসিংক হেলথ",
          location: "ঢাকা, বাংলাদেশ",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "ইউজার ইন্টারফেস যেমন সুন্দর, তেমনি চালানোও খুব সহজ। সাধারণ রোগী থেকে শুরু করে ডাক্তার—সবাই কোনো ঝামেলা ছাড়াই অ্যাপয়েন্টমেন্ট ও প্রেসক্রিপশন হ্যান্ডেল করতে পারছেন।"
        },
        {
          id: "test-3",
          name: "রফিকুল ইসলাম",
          role: "ডিরেক্টর",
          company: "এগ্রোফিন বাংলাদেশ",
          location: "চট্টগ্রাম, বাংলাদেশ",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "বিদেশি বায়ারদের কাছে আমাদের ফ্যাক্টরি ও প্রডাক্ট তুলে ধরতে প্রিমিয়াম এক ওয়েবসাইট দরকার ছিল। WebZen-এর ডিজাইনিং আর কাজের নিষ্ঠা আমাদের প্রত্যাশা ছাড়িয়ে গেছে।"
        },
        {
          id: "test-4",
          name: "তানভীর মাহমুদ",
          role: "হেড অব প্রোডাক্ট",
          company: "ক্লাউডকোর সিস্টেমস",
          location: "সান ফ্রান্সিসকো / ঢাকা",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "কোড কোয়ালিটি, রেসপনসিভনেস আর স্মুথ অ্যানিমেশন অসাধারণ। কমিটমেন্ট অনুযায়ী সময়মতো কাজ ডেলিভারি দিয়েছে টিম। সিরিয়াস কাজের জন্য এদের টিম এক নম্বর।"
        }
      ]
    },
    faq: {
      badge: "সাধারণ প্রশ্নোত্তর",
      heading: "কাজ শুরুর আগে আপনার মনে",
      headingGradient: "যেসব প্রশ্ন আসতে পারে",
      subheading:
        "সময়, পেমেন্ট, বাজেট বা টেকনিক্যাল সাপোর্ট নিয়ে সরাসরি উত্তর।",
      items: [
        {
          id: "faq-1",
          question: "একটি ওয়েবসাইট বা অ্যাপ রেডি হতে সাধারণত কত দিন সময় লাগে?",
          answer: "একটি সাধারণ কর্পোরেট বা ব্র্যান্ড ওয়েবসাইটের কাজ সাধারণত ২ থেকে ৩ সপ্তাহের মধ্যেই শেষ হয়ে যায়। পূর্ণাঙ্গ অনলাইন শপ বা কাস্টম অ্যাপের ক্ষেত্রে ৪ থেকে ৬ সপ্তাহ সময় লাগতে পারে। কাজের প্রতিটি ধাপের লাইভ প্রিভিউ আমরা নিয়মিত আপনার সাথে শেয়ার করব, যাতে পুরো প্রক্রিয়ায় আপনি আপডেট থাকেন।",
          category: "ডেলিভারি সময়"
        },
        {
          id: "faq-2",
          question: "সাইট ডেলিভারির পর আমি কি নিজে ছবি বা লেখা পরিবর্তন করতে পারব?",
          answer: "হ্যাঁ, খুব সহজেই পারবেন। আমরা অত্যন্ত সহজ একটি ড্যাশবোর্ড বানিয়ে দিই, যাতে কোনো কোডিং জানা ছাড়াই আপনি নতুন ছবি আপলোড, দাম আপডেট বা টেক্সট এডিট করতে পারবেন। কীভাবে করবেন তার একটি ছোট্ট ভিডিও টিউটোরিয়ালও বুঝিয়ে দেওয়া হবে।",
          category: "কনটেন্ট নিয়ন্ত্রণ"
        },
        {
          id: "faq-3",
          question: "ওয়েবসাইটে বিকাশ ও নগদে পেমেন্ট কীভাবে জমা হবে?",
          answer: "আমরা সরাসরি আপনার মার্চেন্ট অ্যাকাউন্টের সাথে বিকাশ ও নগদের পেমেন্ট গেটওয়ে যুক্ত করে দেব। ফলে কাস্টমার অনলাইনে পে করামাত্রই টাকা সরাসরি আপনার ব্যবসায়িক ব্যাংক বা মার্চেন্ট অ্যাকাউন্টে জমা হবে।",
          category: "পেমেন্ট গেটওয়ে"
        },
        {
          id: "faq-4",
          question: "কাজের মাঝে বা কাজ শেষে কোনো লুকানো খরচ আছে?",
          answer: "একদমই না। কাজ শুরুর আগেই লিখিতভাবে কাজের পরিধি, বাজেট ও ডেলিভারি ডেট ঠিক করে নেওয়া হয়। এর বাইরে কোনো গোপন বা অপ্রত্যাশিত চার্জের কোনো সুযোগ নেই। ডোমেইন, সার্ভার কনফিগারেশন আর ৩০ দিনের ফ্রি সাপোর্ট প্যাকেজের ভেতরেই থাকে।",
          category: "বাজেট ও খরচ"
        },
        {
          id: "faq-5",
          question: "আমরা কীভাবে কথা বলে প্রজেক্ট শুরু করতে পারি?",
          answer: "আমাদের অফিস ঢাকার গুলশান-২ এ (ক্রিস্টাল আইসিটি টাওয়ার)। আপনি সরাসরি অফিসে এসে এক কাপ কফি খেতে খেতে আলোচনা করতে পারেন, অথবা সুবিধাজনক সময়ে হোয়াটসঅ্যাপে মেসেজ দিয়ে বা ফোনে কল করেও আজই কথা বলতে পারেন।",
          category: "অফিস ও যোগাযোগ"
        }
      ]
    },
    contact: {
      badge: "খোলামেলা আলাপ",
      heading: "আপনার নতুন প্রজেক্ট নিয়ে",
      headingGradient: "একটু কথা বলতে চান?",
      subheading:
        "আপনার পরিকল্পনা বা প্রয়োজনীয় ফিচার সম্পর্কে আমাদের জানান। কোনো চাপ ছাড়াই আমরা আপনার জন্য সেরা সমাধান ও সঠিক বাজেট নিয়ে আলোচনা করব।",
      whatsappTitle: "হোয়াটসঅ্যাপে দ্রুত কথা বলতে চান?",
      whatsappSub: "আমাদের ইঞ্জিনিয়ারিং টিমের সাথে সরাসরি চ্যাট করুন",
      whatsappBtn: "হোয়াটসঅ্যাপে মেসেজ পাঠান",
      dhakaHq: "ঢাকা অফিস",
      addressLabel: "ঠিকানা:",
      phoneLabel: "সরাসরি ফোন:",
      emailLabel: "ইমেইল:",
      hoursLabel: "অফিস সময়:",
      securityPromise: "আপনার প্রজেক্ট আইডিয়া ও তথ্য আমাদের কাছে সম্পূর্ণ নিরাপদ ও গোপনীয় থাকবে।",
      formSuccessTitle: "আপনার মেসেজ আমরা পেয়েছি!",
      formSuccessDesc:
        "WebZen-এ আগ্রহ দেখানোর জন্য ধন্যবাদ। আমাদের টিম লিড আপনার রিকোয়ারমেন্ট দেখে আগামী ২ ঘণ্টার মধ্যেই ফোন বা ইমেইলে যোগাযোগ করবেন।",
      formAnotherBtn: "আরেকটি বার্তা পাঠান",
      nameLabel: "আপনার নাম *",
      namePlaceholder: "যেমন: তানভীর আহমেদ",
      emailLabelForm: "ইমেইল অ্যাড্রেস *",
      phoneLabelForm: "মোবাইল / হোয়াটসঅ্যাপ নম্বর *",
      projectTypeLabel: "প্রজেক্টের ধরন",
      budgetLabel: "আনুমানিক বাজেট",
      messageLabel: "আপনার প্রজেক্ট সম্পর্কে সংক্ষেপে জানান *",
      messagePlaceholder: "আপনি কী ধরনের ওয়েবসাইট বা অ্যাপ বানাতে চান, কোন নির্দিষ্ট ফিচার প্রয়োজন কি না...",
      submitBtn: "মেসেজ পাঠান ও আলাপ শুরু করুন",
      submittingBtn: "পাঠানো হচ্ছে...",
    },
    footer: {
      bio: "WebZen Bangladesh — প্রিমিয়াম ডিজিটাল ও সফটওয়্যার স্টুডিও। আমরা আধুনিক ব্যবসা ও প্রতিষ্ঠানের জন্য দ্রুতগতির ওয়েবসাইট, অনলাইন শপ ও মোবাইল অ্যাপ তৈরি করি।",
      status: "গুলশান-২, ঢাকা • দেশ-বিদেশে ক্লায়েন্ট সার্ভিস",
      navTitle: "পেজসমূহ",
      solutionsTitle: "আমাদের সার্ভিস",
      helpTitle: "পরামর্শ বা সহায়তা প্রয়োজন?",
      helpDesc: "যেকোনো প্রশ্নের জন্য নির্দ্বিধায় সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন বা কল করুন।",
      backToTop: "উপরে যান",
      allRights: "সর্বস্বত্ব সংরক্ষিত।",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Our Work",
      process: "Methodology",
      calculator: "Cost Estimator",
      pricing: "Pricing",
      testimonials: "Reviews",
      contact: "Contact",
      hireUs: "Start Project",
      dhakaTime: "Dhaka",
      availableStatus: "Available for Projects",
      languageToggle: "বাংলা",
    },
    hero: {
      badge: "⚡ Trusted Digital & Software Partner",
      badgeHighlight: "Dhaka & Global",
      titlePart1: "High-Performance",
      titleGradient: "Websites & Software",
      titlePart2: "Built to Grow Your Business",
      description:
        "We build fast, modern websites, e-commerce stores, and mobile apps designed to help businesses sell online, accept bKash & card payments, and attract more customers.",
      primaryCta: "Start Your Project",
      secondaryCta: "Explore Our Work",
      calculatorCta: "Instant Cost Estimator",
      tagsHeading: "Built with modern production standards",
      statsRetention: "Client Retention",
      statsShipped: "Shipped Projects",
      statsUptime: "Uptime Guaranteed",
    },
    stats: {
      stat1Label: "Successful Deliveries",
      stat1Desc: "From fast-moving startups to market leaders.",
      stat2Label: "Client Retention",
      stat2Desc: "Trusted long-term technical partners worldwide.",
      stat3Label: "Countries Reached",
      stat3Desc: "Clients in Bangladesh, USA, UK, UAE & Australia.",
      stat4Label: "24/7 SLA Support",
      stat4Desc: "Active monitoring to ensure your site never goes down.",
    },
    services: {
      badge: "What We Do For You",
      heading: "Purpose-Built Solutions to",
      headingGradient: "Scale Your Business",
      subheading:
        "No confusing agency buzzwords. Just fast, modern websites and applications that look exceptional and deliver real business results.",
      deliverablesLabel: "What you get in this package:",
      customScopeTitle: "Have unique or complex requirements?",
      customScopeDesc: "We build bespoke software tailored to your specific operational workflows.",
      calculateBtn: "Calculate Cost",
      items: [
        {
          id: "srv-1",
          title: "Corporate & HealthTech Portals",
          subtitle: "Smart doctor booking & verified brand presence",
          description:
            "Tailored digital consultation platforms for doctors, specialized clinics, and modern brands. Effortless 3-step appointment booking, automated SMS/WhatsApp slips, and doctor chamber dashboards.",
          deliverables: ["Online slot & appointment booking", "Automated SMS/WhatsApp slip", "Mobile-first responsive design"],
          tags: ["HealthTech", "Doctor Booking", "Corporate Web"],
          featured: true,
        },
        {
          id: "srv-2",
          title: "E-Commerce & Online Stores",
          subtitle: "Automate orders and accept payments",
          description:
            "Stop losing sales on social media DMs. Give your customers an instant checkout experience with bKash, Nagad, and credit cards.",
          deliverables: ["Instant bKash, Nagad & Card checkout", "Inventory & order management", "Automated SMS & invoice delivery"],
          tags: ["Online Store", "bKash Payment", "E-Commerce"],
          featured: true,
        },
        {
          id: "srv-3",
          title: "Mobile Apps (Android & iOS)",
          subtitle: "Your business right in your customer's pocket",
          description:
            "Fast, reliable mobile apps built with React Native and Flutter. Keep your audience engaged with push notifications and seamless offline support.",
          deliverables: ["App Store & Play Store publication", "Targeted push notifications", "Offline sync & account security"],
          tags: ["Android", "iOS", "Cross-Platform"],
          featured: false,
        },
        {
          id: "srv-4",
          title: "Business Automation & AI Chatbots",
          subtitle: "Save hours of daily manual work",
          description:
            "Automate repetitive tasks like answering common questions on WhatsApp/Web, issuing receipts, and updating your sales sheets automatically.",
          deliverables: ["Intelligent 24/7 customer assistant", "Automated order confirmation flows", "Real-time sales & revenue reports"],
          tags: ["Chatbots", "Automation", "Customer Care"],
          featured: true,
        },
        {
          id: "srv-5",
          title: "UI/UX Redesign & Modernization",
          subtitle: "Give your existing website a premium facelift",
          description:
            "Is your current site feeling outdated, slow, or hard to use on phones? We redesign your interfaces into sleek, modern, conversion-focused experiences.",
          deliverables: ["World-class visual redesign", "Design system & brand guidelines", "Smooth, intuitive user journeys"],
          tags: ["UI/UX Design", "Redesign", "Brand Identity"],
          featured: false,
        },
        {
          id: "srv-6",
          title: "Hosting, DevOps & Cyber Security",
          subtitle: "Your digital assets protected 24/7",
          description:
            "Never worry about site crashes, traffic spikes, or malware again. We take care of server configuration, automated backups, and security hardening.",
          deliverables: ["24/7 uptime monitoring & SLAs", "Automated daily cloud backups", "DDoS mitigation & firewall setup"],
          tags: ["Cloud DevOps", "Backups", "Security"],
          featured: false,
        },
      ],
    },
    projects: {
      badge: "Proven Track Record",
      heading: "Real Projects That",
      headingGradient: "Drive Real Growth",
      subheading:
        "Explore how we built live platforms like devojyotidutta.com, modern HealthTech doctor booking portals, and high-converting e-commerce stores.",
      discussBtn: "Discuss Similar Project",
      allFilter: "All Projects",
      caseStudyBtn: "Visit Live Site",
      clientLabel: "Client:",
    },
    techstack: {
      badge: "Under the Hood",
      heading: "Reliable Technologies",
      headingGradient: "Powering Your Platform",
      subheading:
        "We build exclusively with modern, battle-tested frameworks used by top global technology companies. No bloated, fragile legacy code.",
      categories: [
        {
          name: "Modern Frontend & Web",
          iconType: "layers",
          items: [
            { name: "Next.js & React", desc: "Instant page transitions with zero loading delays", badge: "Blazing Fast" },
            { name: "Fluid Responsive Design", desc: "Flawless layout across smartphones, tablets, and desktops", badge: "Pixel Perfect" },
            { name: "Smooth Micro-Animations", desc: "Delightful 60 FPS transitions that keep users engaged", badge: "60 FPS" },
            { name: "shadcn/ui Design System", desc: "Clean, consistent, and enterprise-grade visual components", badge: "Modern UI" },
          ],
        },
        {
          name: "Cloud Server & Database",
          iconType: "terminal",
          items: [
            { name: "High-Performance Cloud", desc: "Handles traffic spikes without slowdowns or crashes", badge: "99.9% Uptime" },
            { name: "Encrypted PostgreSQL", desc: "Customer data and passwords protected with encryption", badge: "Encrypted" },
            { name: "Fast REST & GraphQL APIs", desc: "Instant data retrieval and seamless app connectivity", badge: "High Speed" },
            { name: "Automated Daily Backups", desc: "Safe point-in-time recovery stored in redundant zones", badge: "Daily Backups" },
          ],
        },
        {
          name: "Payments & Financial Flow",
          iconType: "creditCard",
          items: [
            { name: "bKash & Nagad Direct Checkout", desc: "1-click payment confirmation with automated verification", badge: "Instant MFS" },
            { name: "Visa & Mastercard Gateway", desc: "Accept payments from local and international cards securely", badge: "Global Cards" },
            { name: "Automated Digital Invoices", desc: "Instant SMS receipt and downloadable PDF bills", badge: "Auto Billing" },
            { name: "Payment Dashboard", desc: "Track settlement, transactions, and refunds in real time", badge: "Full Control" },
          ],
        },
        {
          name: "Smart Automation & AI",
          iconType: "bot",
          items: [
            { name: "AI Customer Assistant", desc: "Instant answers to product and order questions 24/7", badge: "AI Assistant" },
            { name: "Automated Order Processing", desc: "Syncs inventory instantly when a customer checks out", badge: "Zero Manual" },
            { name: "Instant SMS Dispatch", desc: "Keep customers notified with live tracking updates", badge: "Live Alerts" },
            { name: "Sales & Revenue Analytics", desc: "Clean visual reports of daily revenue and performance", badge: "Real-time" },
          ],
        },
        {
          name: "Cloud Security & CDN",
          iconType: "cloud",
          items: [
            { name: "Cloudflare Edge Defense", desc: "Comprehensive DDoS mitigation and bot protection", badge: "Edge Shield" },
            { name: "Global Edge Caching", desc: "Sub-second load times for users in Dhaka and abroad", badge: "Global CDN" },
            { name: "SSL Certificate Included", desc: "Secure HTTPS green padlock across all subdomains", badge: "SSL Secured" },
            { name: "24/7 Automated Health Checks", desc: "Continuous uptime checks with proactive alert triggers", badge: "Always On" },
          ],
        },
      ],
    },
    process: {
      badge: "Proven Methodology",
      heading: "From Concept to Launch —",
      headingGradient: "Our 5-Step Process",
      subheading:
        "No surprises. You will always know what is being built, when milestones are delivered, and how your budget is invested.",
      milestone: "Completed ✓",
      phase: "Phase",
    },
    calculator: {
      badge: "Instant Cost Estimator",
      heading: "Estimate Your Investment",
      headingGradient: "In Under 60 Seconds",
      subheading:
        "Select your core project scope and desired features below to view transparent ballpark pricing and delivery schedules.",
      step1: "1. Select Core Platform",
      step2: "2. Add Desired Features & Modules",
      step3: "3. Choose Desired Delivery Timeline",
      summaryHeading: "Estimated Project Summary",
      estimateReady: "Estimate Ready",
      estimatedTotal: "Estimated Investment (BDT)",
      globalClients: "Equivalent USD for international clients",
      baseArch: "Selected Platform:",
      selectedModules: "Active Modules:",
      targetDelivery: "Estimated Delivery Timeline:",
      guarantee: "Includes full source code ownership, production server deployment, and 30 days of warranty support.",
      ctaBtn: "Book Strategy Call With This Estimate",
      noCommitment: "Zero commitment required. Our technical lead reviews your estimate and replies within 2 hours.",
      hostingNotice: "⚠️ Important Note: Estimates cover custom engineering and software development only. Recurring server hosting and cloud database/storage provider costs are not included and must be borne directly by the client (we provide complete setup & deployment free).",
      hostingScope: "Hosting & Database:",
      hostingClientPaid: "Client-owned (Free setup)",
    },
    pricing: {
      badge: "Transparent Packages",
      heading: "Simple, Predictable Plans",
      headingGradient: "For Every Business Stage",
      subheading:
        "Clear deliverables, transparent timelines, and zero surprise invoices. Everything you need to launch with confidence.",
      currencyBdt: "BDT (৳) Bangladesh",
      currencyUsd: "USD ($) Global",
      mostPopular: "Most Popular",
      whatsIncluded: "Everything included in this package:",
      hostingNoticeTitle: "Hosting & Cloud Storage Transparency",
      hostingNoticeBadge: "Important Notice",
      hostingNoticeDesc: "All package fees cover UI/UX design, custom programming, and software delivery only. Recurring server hosting and cloud database/storage subscriptions must be borne directly by the client with the infrastructure provider. We handle all deployment, domain linking, and cloud configuration free of charge.",
      hostingSetupFree: "Free Server Deployment & Setup Included",
      hostingCardNote: "* Server hosting & database storage billed directly to client",
      plans: [
        {
          id: "plan-1",
          name: "Startup MVP Launchpad",
          priceBdt: "৳ 16,000",
          priceUsd: "$ 150",
          period: "one-time",
          description: "Ideal for new ventures, doctors, and businesses needing a sharp, modern digital presence.",
          popular: false,
          ctaText: "Choose Startup Plan",
          ctaLink: "#contact",
          features: [
            "Up to 5 high-converting custom pages",
            "Blazing-fast mobile & desktop performance",
            "Inquiry capture form & direct WhatsApp button",
            "Foundational SEO configuration for Google Search",
            "Easy content management (edit text/images easily)",
            "Assistance with domain & hosting setup (hosting fee client-owned)",
            "30 days of post-launch technical warranty"
          ]
        },
        {
          id: "plan-2",
          name: "Growth E-Commerce & HealthTech",
          priceBdt: "৳ 38,000",
          priceUsd: "$ 350",
          period: "one-time",
          description: "Full-scale solution for online stores, clinic appointment portals, and expanding businesses.",
          popular: true,
          ctaText: "Start Growth Project",
          ctaLink: "#contact",
          features: [
            "Complete custom e-commerce or clinic booking portal",
            "bKash, Nagad & credit card payment integration",
            "Inventory, customer & appointment dashboard",
            "Automated order confirmation SMS & PDF receipts",
            "Advanced SEO & Meta Pixel tracking setup",
            "Direct WhatsApp & phone support",
            "Lighthouse 95+ speed score guarantee",
            "3 months of free maintenance & updates"
          ]
        },
        {
          id: "plan-3",
          name: "Custom Software & Mobile App",
          priceBdt: "৳ 73,000+",
          priceUsd: "$ 680+",
          period: "custom scope",
          description: "For bespoke operational platforms, mobile apps, or enterprise integrations with custom architecture.",
          popular: false,
          ctaText: "Request Custom Proposal",
          ctaLink: "#contact",
          features: [
            "Native iOS & Android mobile application",
            "Custom cloud architecture & encrypted database",
            "Bank-grade security hardening & automated backups",
            "Dedicated senior full-stack development squad",
            "Custom integration with third-party ERPs/CRMs",
            "Priority SLA support with dedicated account manager"
          ]
        }
      ]
    },
    testimonials: {
      badge: "Client Stories",
      heading: "Trusted by Ambitious Brands",
      headingGradient: "Across Dhaka & Beyond",
      subheading:
        "Read authentic experiences from founders, executives, and business owners who partnered with WebZen Bangladesh.",
      items: [
        {
          id: "test-1",
          name: "Sakib Al Hasan",
          role: "Managing Director",
          company: "BongoWear Bangladesh",
          location: "Dhaka, Bangladesh",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "The checkout speed and seamless bKash integration completely changed our online sales volume. Customers love the simplicity and our repeat orders grew noticeably."
        },
        {
          id: "test-2",
          name: "Dr. Farhana Chowdhury",
          role: "Co-Founder & CEO",
          company: "MediSync Health",
          location: "Dhaka, Bangladesh",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "The user interface is exceptionally clean. Both patients and doctors navigate their appointments and prescription history without any technical hurdles."
        },
        {
          id: "test-3",
          name: "Rafiqul Islam",
          role: "Director",
          company: "AgroFin Bangladesh",
          location: "Chittagong, Bangladesh",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "We needed an international-standard digital presentation for our export buyers. WebZen delivered well above our expectations with unmatched design finesse."
        },
        {
          id: "test-4",
          name: "Tanvir Mahmud",
          role: "Head of Product",
          company: "CloudCore Systems",
          location: "San Francisco / Dhaka",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
          rating: 5,
          content: "Code quality, responsiveness, and silky 60fps animations are top-notch. They met all our tight deadlines without cutting any corners. Outstanding engineering team."
        }
      ]
    },
    faq: {
      badge: "Common Questions",
      heading: "Frequently Asked Questions",
      headingGradient: "Before Starting",
      subheading:
        "Straightforward answers to the most common questions regarding timelines, costs, payment gateways, and ownership.",
      items: [
        {
          id: "faq-1",
          question: "How long does it typically take to complete a project?",
          answer: "A standard corporate or brand website typically takes 2 to 3 weeks. Full-scale e-commerce stores or custom mobile apps generally require 4 to 6 weeks. We provide regular interactive preview links throughout development so you always have full visibility.",
          category: "Timeline"
        },
        {
          id: "faq-2",
          question: "Can I easily update images, prices, and text myself later?",
          answer: "Absolutely. We provide an intuitive administrative dashboard where you can edit content, upload pictures, and manage inventory without writing a single line of code. We also deliver a short video walkthrough during handover.",
          category: "Content Control"
        },
        {
          id: "faq-3",
          question: "How do bKash and Nagad payments reach my bank account?",
          answer: "We connect the checkout directly to your official bKash and Nagad Merchant API. All payments processed on your store deposit directly into your merchant or bank account without any intermediaries.",
          category: "Payments"
        },
        {
          id: "faq-4",
          question: "Are there any hidden charges or unexpected renewal fees?",
          answer: "None whatsoever. All scopes, budgets, and milestone deliverables are locked in writing prior to kickoff. Standard domain, server configuration, and 30 days of warranty support are bundled into your package.",
          category: "Budgeting"
        },
        {
          id: "faq-5",
          question: "How do we get started and discuss our project?",
          answer: "Our office is located at Crystal ICT Tower, Gulshan-2, Dhaka. You are warmly welcome to visit us for an in-person strategy session over coffee, or simply message us on WhatsApp or call our line right now.",
          category: "Consultation"
        }
      ]
    },
    contact: {
      badge: "Start The Conversation",
      heading: "Let’s Build Something",
      headingGradient: "Exceptional Together",
      subheading:
        "Share your vision, project goals, or target deadline. We will review your scope and provide a practical plan and transparent quote with zero obligations.",
      whatsappTitle: "Want a quick discussion on WhatsApp?",
      whatsappSub: "Chat directly with our senior engineering team in Dhaka",
      whatsappBtn: "Message on WhatsApp",
      dhakaHq: "Dhaka Studio",
      addressLabel: "Address:",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      hoursLabel: "Hours:",
      securityPromise: "Standard NDA and complete privacy guaranteed for your business ideas.",
      formSuccessTitle: "Inquiry Received Successfully!",
      formSuccessDesc:
        "Thank you for contacting WebZen Bangladesh. Our team lead will review your requirements and reach out via phone or email within 2 hours.",
      formAnotherBtn: "Send Another Message",
      nameLabel: "Your Full Name *",
      namePlaceholder: "e.g. Tanvir Rahman",
      emailLabelForm: "Email Address *",
      phoneLabelForm: "Phone / WhatsApp *",
      projectTypeLabel: "Project Type",
      budgetLabel: "Estimated Budget",
      messageLabel: "Tell us about your project *",
      messagePlaceholder: "Briefly describe what you need, your target deadline, or any special requirements...",
      submitBtn: "Send Inquiry & Request Consultation",
      submittingBtn: "Submitting...",
    },
    footer: {
      bio: "WebZen Bangladesh is your trusted software engineering partner. We build world-class websites, online stores, and mobile apps for ambitious brands.",
      status: "Gulshan-2, Dhaka • Serving Clients Globally",
      navTitle: "Navigation",
      solutionsTitle: "Core Solutions",
      helpTitle: "Need Help?",
      helpDesc: "Reach out via WhatsApp or call us anytime for advice or emergency support.",
      backToTop: "Back to Top",
      allRights: "All rights reserved.",
    },
  },
};
