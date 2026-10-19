import { SiteData } from "@/types/site";

export const initialSiteData: SiteData = {
  companyName: "WebZen Bangladesh",
  tagline: "Engineering High-Performance Digital Realities",
  shortBio: "Elite software engineering agency in Bangladesh architecting ultra-fast web platforms, AI systems, and scalable cloud ecosystems.",
  
  hero: {
    badge: "⚡ WebZen Engineering",
    badgeHighlight: "Dhaka & Global",
    titlePart1: "Architecting",
    titleGradient: "Digital Excellence",
    titlePart2: "For Modern Brands",
    description: "We build ultra-fast web applications, autonomous AI workflows, and resilient cloud platforms engineered for scale and speed.",
    primaryCtaText: "Start Your Project",
    primaryCtaLink: "#contact",
    secondaryCtaText: "View Case Studies",
    secondaryCtaLink: "#projects",
    stats: [
      { label: "Client Retention", value: "99.4%" },
      { label: "Shipped Projects", value: "140+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    highlightTags: [
      "Next.js 16",
      "React 19",
      "AI Automations",
      "FinTech BD",
      "Cloud Scale"
    ]
  },

  stats: [
    {
      id: "stat-1",
      value: 140,
      suffix: "+",
      label: "Shipped Projects",
      description: "From rapid MVPs to high-concurrency enterprise platforms.",
      icon: "Rocket"
    },
    {
      id: "stat-2",
      value: 99.4,
      suffix: "%",
      label: "Retention Rate",
      description: "Trusted long-term engineering partners worldwide.",
      icon: "HeartHandshake"
    },
    {
      id: "stat-3",
      value: 18,
      suffix: "+",
      label: "Countries Served",
      description: "Delivering across Bangladesh, USA, UK, UAE & Australia.",
      icon: "Globe"
    },
    {
      id: "stat-4",
      value: 24,
      suffix: "/7",
      label: "SLA Support",
      description: "Active uptime monitoring and zero-downtime deployments.",
      icon: "ShieldCheck"
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Full-Stack Web Platforms",
      subtitle: "Ultra-fast & Scalable",
      description: "Modern web applications built with Next.js and cloud primitives for sub-second load times.",
      icon: "CodeXml",
      featured: true,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      deliverables: ["Custom Architecture", "Automated CI/CD", "Lighthouse 95+"]
    },
    {
      id: "srv-2",
      title: "AI Workflows & Agents",
      subtitle: "Intelligent Automation",
      description: "Autonomous LLM agents and semantic search pipelines to streamline manual business operations.",
      icon: "Bot",
      featured: true,
      tags: ["OpenAI", "Claude", "LangChain", "Vector DB"],
      deliverables: ["AI Agents", "Automated Pipelines", "Smart Analytics"]
    },
    {
      id: "srv-3",
      title: "High-End UI/UX Design",
      subtitle: "Engaging & Modern",
      description: "Clean aesthetic systems, micro-interactions, dark mode finesse, and high-conversion layouts.",
      icon: "Palette",
      featured: false,
      tags: ["Figma", "Design Systems", "Framer Motion"],
      deliverables: ["Interactive Prototypes", "Design System", "A/B Testing"]
    },
    {
      id: "srv-4",
      title: "Enterprise Cloud & DevOps",
      subtitle: "Zero-Downtime Scaling",
      description: "Cloud-native infrastructure on AWS and Vercel with Docker and automated testing.",
      icon: "CloudLightning",
      featured: false,
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      deliverables: ["Cloud Migration", "Auto-scaling", "Security Audits"]
    },
    {
      id: "srv-5",
      title: "FinTech & BD Payments",
      subtitle: "bKash, Nagad & Cards",
      description: "Seamless checkout experiences integrated with bKash, Nagad, SSLCommerz, and Stripe.",
      icon: "BadgeDollarSign",
      featured: true,
      tags: ["bKash API", "Nagad", "SSLCommerz", "Stripe"],
      deliverables: ["Payment Gateways", "Instant Webhooks", "Ledger Logs"]
    },
    {
      id: "srv-6",
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "High-performance hybrid mobile apps using React Native with offline sync support.",
      icon: "Smartphone",
      featured: false,
      tags: ["React Native", "iOS / Android", "WebSockets"],
      deliverables: ["App Store Launch", "Push Notifications", "Biometric Auth"]
    }
  ],

  projects: [
    {
      id: "proj-devojyoti",
      title: "DevojyotiDutta.com — হেলথটেক ও স্মার্ট সিরিয়াল পোর্টাল",
      category: "HealthTech",
      description: "আয়ুর্বেদাচার্য দেবজ্যোতি দত্তের অফিশিয়াল হেলথটেক পোর্টাল। সহজ ৩ ধাপে অনলাইন ডক্টর সিরিয়াল বুকিং, চেম্বার শিডিউলিং, ভিডিও কনসালটেশন, প্রেসক্রিপশন পোর্টাল, প্রকৃতি অ্যাসেসমেন্ট টুল এবং ডায়নামিক অ্যাডমিন ড্যাশবোর্ড।",
      image: "/projects/devojyoti-dutta.jpg",
      client: "দেবজ্যোতি দত্ত (B.A.M.S., NIA Jaipur)",
      country: "ঢাকা, বাংলাদেশ",
      liveUrl: "https://devojyotidutta.com",
      tags: ["HealthTech", "Next.js", "সিরিয়াল বুকিং", "Tailwind CSS", "TypeScript"],
      metrics: "১,২০০+ সফল সিরিয়াল বুকিং",
      featured: true
    },
    {
      id: "proj-imranh",
      title: "imranh.me — একাডেমিক ও রিসার্চ পোর্টফোলিও",
      category: "Web Applications",
      description: "ব্র্যাক ইনস্টিটিউট অব গভর্ন্যান্স অ্যান্ড ডেভেলপমেন্ট (BIGD)-এর রিসার্চ অ্যাসোসিয়েট ইমরান হোসেনের অফিশিয়াল একাডেমিক পোর্টফোলিও। আধুনিক রিসার্চ পেপার শোকেস, ডায়নামিক অ্যাবস্ট্রাক্ট রিডার, পলিসি ইভ্যালুয়েশন স্টাডিজ, ইন্টারঅ্যাক্টিভ ইকুইলিব্রিয়াম ওয়েভ ফিল্ড ক্যানভাস এবং এলিগ্যান্ট টাইপোগ্রাফি সমৃদ্ধ প্ল্যাটফর্ম।",
      image: "/projects/imranh-me.jpg",
      client: "ইমরান হোসেন (Research Associate, BIGD)",
      country: "ঢাকা, বাংলাদেশ",
      liveUrl: "https://www.imranh.me",
      tags: ["Next.js", "রিসার্চ পোর্টফোলিও", "TypeScript", "Canvas Animation", "Tailwind CSS"],
      metrics: "১০০% লাইভ একাডেমিক শোকেস",
      featured: true
    },
    {
      id: "proj-job-prep",
      title: "Job Prep Arena — চাকরির পরীক্ষার গ্যামিফাইড প্ল্যাটফর্ম",
      category: "AI & Automation",
      description: "চাকরির পরীক্ষার প্রস্তুতিকে আকর্ষণীয় করতে গেম-বেসড ইন্টারঅ্যাক্টিভ কুইজ, লাইভ লিডারবোর্ড, টাইমড ব্যাটেল, স্কিল অ্যাসেসমেন্ট এবং পারফরম্যান্স অ্যানালিটিক্স প্ল্যাটফর্ম। আরও অত্যাধুনিক ফিচার ডেভেলপমেন্ট চলমান রয়েছে যা শীঘ্রই পূর্ণাঙ্গভাবে লাইভ করা হবে।",
      image: "/projects/job-prep-gamified.jpg",
      client: "WebZen EdTech In-House",
      country: "ঢাকা, বাংলাদেশ",
      liveUrl: "",
      tags: ["Gamification", "Job Prep", "EdTech", "Next.js", "WebSockets"],
      metrics: "কাজ চলমান — শীঘ্রই লাইভ হবে",
      featured: true
    },
    {
      id: "proj-skillbridge",
      title: "Mentora (SkillBridge) — অনলাইন টিউটর ও লার্নিং প্ল্যাটফর্ম",
      category: "Web Applications",
      description: "শিক্ষক ও শিক্ষার্থীদের সরাসরি কানেক্ট করার আধুনিক এডু-টেক প্ল্যাটফর্ম। বিষয়ভিত্তিক অভিজ্ঞ টিউটর ব্রাউজিং, ওয়ান-অন-ওয়ান সেশন শিডিউলিং, প্রোফাইল ভেরিফিকেশন, স্টুডেন্ট রিভিউ ও নির্বিঘ্ন বুকিং সুবিধা।",
      image: "/projects/skillbridge-mentora.jpg",
      client: "SkillBridge EdTech",
      country: "ঢাকা, বাংলাদেশ",
      liveUrl: "https://skill-bridge-client-taupe.vercel.app/",
      tags: ["Next.js", "Shadcn UI", "Tutor Matching", "Tailwind CSS", "TypeScript"],
      metrics: "১০০% লাইভ এডুটেক প্ল্যাটফর্ম",
      featured: true
    },
    {
      id: "proj-house-manager",
      title: "House Manager — স্মার্ট অ্যাপার্টমেন্ট ও রেন্টাল ম্যানেজমেন্ট",
      category: "Web Applications",
      description: "বাড়িওয়ালা ও ভাড়াটিয়াদের জন্য স্মার্ট অ্যাপার্টমেন্ট ও প্রপার্টি ম্যানেজমেন্ট সল্যুশন। ফ্ল্যাট লিস্টিং, রেন্ট কালেকশন ট্র্যাকিং, টেন্যান্ট ভেরিফিকেশন, কুপন ডিসকাউন্ট ও রিয়েল-টাইম অ্যাডমিন ড্যাশবোর্ড।",
      image: "/projects/house-manager.jpg",
      client: "House Manager Solutions",
      country: "ঢাকা, বাংলাদেশ",
      liveUrl: "https://house-manager-56098.web.app/",
      tags: ["React", "Firebase", "Property Management", "Tailwind CSS", "Auth"],
      metrics: "লাইভ রেন্টাল ড্যাশবোর্ড",
      featured: true
    }
  ],

  projectCategories: [
    { id: "HealthTech", name: "HealthTech & Booking", nameBn: "হেলথটেক ও সিরিয়াল বুকিং" },
    { id: "Web Applications", name: "E-Commerce & Web", nameBn: "ই-কমার্স ও ওয়েবসাইট" },
    { id: "FinTech", name: "FinTech & Payments", nameBn: "ফিনটেক ও পেমেন্ট" },
    { id: "AI & Automation", name: "AI & Automation", nameBn: "AI ও অটোমেশন" },
    { id: "Mobile Apps", name: "Mobile Apps", nameBn: "মোবাইল অ্যাপস" },
    { id: "Enterprise Cloud", name: "Enterprise Cloud", nameBn: "এন্টারপ্রাইজ ক্লাউড" },
  ],

  process: [
    {
      step: "01",
      title: "Strategic Blueprint",
      description: "Architectural specification, tech stack selection, and milestone roadmap.",
      icon: "Compass",
      duration: "Week 1"
    },
    {
      step: "02",
      title: "Interactive Prototyping",
      description: "High-fidelity Figma prototypes with responsive flows and micro-interactions.",
      icon: "Layers",
      duration: "Week 2 - 3"
    },
    {
      step: "03",
      title: "Agile Engineering",
      description: "Bi-weekly sprint demos, automated unit tests, and production-grade code.",
      icon: "Cpu",
      duration: "Week 4 - 8"
    },
    {
      step: "04",
      title: "Security & QA Hardening",
      description: "Penetration tests, cross-browser validation, and Lighthouse 95+ tuning.",
      icon: "ShieldAlert",
      duration: "Week 9"
    },
    {
      step: "05",
      title: "Production & SLA Scaling",
      description: "Zero-downtime deployment, DNS cutover, and 24/7 proactive monitoring.",
      icon: "Flame",
      duration: "Ongoing"
    }
  ],

  pricing: [
    {
      id: "plan-1",
      name: "Startup Launch",
      priceBdt: "৳ 16,000",
      priceUsd: "$ 150",
      period: "one-time",
      description: "For early startups, clinics, and businesses launching a high-impact web presence quickly.",
      popular: false,
      ctaText: "Select Startup",
      ctaLink: "#contact",
      features: [
        "Up to 5 Animated Pages",
        "Next.js 16 + Tailwind CSS",
        "Mobile-First Responsive UI",
        "Interactive Lead Capture",
        "Basic SEO Configuration",
        "Free Domain & Hosting Setup (Hosting Billed to Client)",
        "Delivery in 14 Days"
      ]
    },
    {
      id: "plan-2",
      name: "Growth E-Commerce & HealthTech",
      priceBdt: "৳ 38,000",
      priceUsd: "$ 350",
      period: "one-time",
      description: "Complete solution for e-commerce stores, doctor booking platforms, and scaling businesses.",
      popular: true,
      ctaText: "Launch Growth Suite",
      ctaLink: "#contact",
      features: [
        "Full E-Commerce or Doctor Serial Booking",
        "bKash, Nagad & Card Gateways",
        "Inventory / Appointment Dashboard",
        "Automated SMS & Invoice Delivery",
        "Google SEO & Meta Pixel Setup",
        "Lighthouse 95+ Speed Score",
        "3 Months Free Maintenance"
      ]
    },
    {
      id: "plan-3",
      name: "Custom Software & Mobile App",
      priceBdt: "৳ 73,000+",
      priceUsd: "$ 680+",
      period: "custom scope",
      description: "For bespoke web apps, mobile apps, and organizations needing dedicated software squads.",
      popular: false,
      ctaText: "Request Consultation",
      ctaLink: "#contact",
      features: [
        "Full-Stack Microservices Architecture",
        "Custom Database & Multi-Tenant Support",
        "Bank-Grade Security Audits",
        "AWS / GCP Auto-Scaling Cloud Cluster",
        "Dedicated Senior Squad & PM",
        "99.99% Uptime SLA Agreement"
      ]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Tanvir Rahman",
      role: "CTO",
      company: "FinVertex Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Dhaka, Bangladesh",
      content: "WebZen completely transformed our digital presence. The speed, smoothness of animations, and architectural cleanliness exceeded our expectations."
    },
    {
      id: "test-2",
      name: "Sarah Jenkins",
      role: "Managing Director",
      company: "Nexus Partners",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Sydney, Australia",
      content: "Communication was prompt, deliverables were always on schedule, and the final web platform is exceptionally fast and elegant."
    },
    {
      id: "test-3",
      name: "Mahmudul Hasan",
      role: "Founder & CEO",
      company: "BongoWear BD",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "Dhaka, Bangladesh",
      content: "Our conversion rate surged after launching our headless store with WebZen. The bKash and card checkout flow is completely seamless."
    },
    {
      id: "test-4",
      name: "Alexander Vance",
      role: "VP of Product",
      company: "CloudCore Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      location: "San Francisco, USA",
      content: "Mastery of modern Next.js and shadcn is top-tier. Animations are buttery smooth without CPU lag. Truly outstanding craftsmanship."
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How long does a standard build take?",
      answer: "Standard high-performance web applications deliver within 2 to 4 weeks. Enterprise platforms take 6 to 10 weeks with weekly staging demos.",
      category: "Timeline"
    },
    {
      id: "faq-2",
      question: "Can I manage content without touching code?",
      answer: "Yes. Our built-in Admin Studio lets you edit text, toggle or reorder sections, and customize designs with instant live updates.",
      category: "CMS"
    },
    {
      id: "faq-3",
      question: "Do you support bKash and Nagad payment gateways?",
      answer: "Yes, we natively integrate bKash Merchant API, Nagad, Rocket, SSLCommerz, as well as global Stripe and PayPal gateways.",
      category: "Payments"
    },
    {
      id: "faq-4",
      question: "Where is the WebZen Bangladesh office?",
      answer: "Headquartered at Crystal ICT Tower, Gulshan-2, Dhaka-1212. We also serve clients remotely worldwide.",
      category: "Company"
    }
  ],

  contact: {
    email: "contact@webzen.com.bd",
    phone: "+880 1886-932936",
    whatsapp: "+8801886932936",
    address: "Level 8, Crystal ICT Tower, Gulshan-2, Dhaka-1212, Bangladesh",
    locationCity: "Dhaka, Bangladesh",
    officeHours: "Sun – Thu: 9:30 AM – 7:00 PM (BST)",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.423985557732!2d90.40728952541467!3d23.79703796440263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
    socials: {
      github: "https://github.com/webzen-bd",
      linkedin: "https://linkedin.com/company/webzen-bangladesh",
      facebook: "https://facebook.com/webzenbangladesh",
      twitter: "https://twitter.com/webzen_bd",
      youtube: "https://youtube.com/@webzenbangladesh"
    }
  },

  sections: [
    { id: "hero", type: "hero", title: "Hero Billboard", subtitle: "Main billboard and high-impact CTA", enabled: true, order: 1 },
    { id: "stats", type: "stats", title: "Key Metrics", subtitle: "Agency stats and credibility", enabled: true, order: 2 },
    { id: "services", type: "services", title: "Core Services", subtitle: "Engineering & Cloud solutions", enabled: true, order: 3 },
    { id: "projects", type: "projects", title: "Featured Showcase", subtitle: "Benchmark client case studies", enabled: true, order: 4 },
    { id: "techstack", type: "techstack", title: "Technology Matrix", subtitle: "Framework ecosystem", enabled: true, order: 5 },
    { id: "process", type: "process", title: "Our Methodology", subtitle: "5-step agile engineering lifecycle", enabled: true, order: 6 },
    { id: "calculator", type: "calculator", title: "Cost Estimator", subtitle: "Interactive quote calculator", enabled: true, order: 7 },
    { id: "pricing", type: "pricing", title: "Pricing & Plans", subtitle: "Clear, transparent pricing", enabled: true, order: 8 },
    { id: "testimonials", type: "testimonials", title: "Client Stories", subtitle: "Client feedback and reviews", enabled: true, order: 9 },
    { id: "faq", type: "faq", title: "FAQ", subtitle: "Common questions answered", enabled: true, order: 10 },
    { id: "contact", type: "contact", title: "Contact & Office", subtitle: "Office details & WhatsApp", enabled: true, order: 11 }
  ],

  theme: {
    preset: "cyber-zen",
    accentColor: "#00f2fe",
    glowIntensity: "high",
    enableParticles: true,
    borderRadius: "lg",
    darkNav: true
  },

  security: {
    adminPassword: "webzen2026"
  },

  footer: {
    bio: "WebZen Bangladesh is your trusted software engineering partner. We build world-class websites, online stores, and mobile apps for ambitious brands.",
    bioBn: "WebZen Bangladesh — প্রিমিয়াম ডিজিটাল ও সফটওয়্যার স্টুডিও। আমরা আধুনিক ব্যবসা ও প্রতিষ্ঠানের জন্য দ্রুতগতির ওয়েবসাইট, অনলাইন শপ ও মোবাইল অ্যাপ তৈরি করি।",
    statusText: "Ready for new projects — Accepting client bookings",
    statusTextBn: "নতুন প্রজেক্টের জন্য উন্মুক্ত — বুকিং নেওয়া হচ্ছে",
    locationBadge: "Dhaka",
    navLinksTitle: "Quick Navigation",
    navLinksTitleBn: "দ্রুত নেভিগেশন",
    navLinks: [
      { id: "nav-1", label: "Services", labelBn: "সার্ভিসসমূহ", url: "#services" },
      { id: "nav-2", label: "Case Studies", labelBn: "প্রজেক্টসমূহ", url: "#projects" },
      { id: "nav-3", label: "Process", labelBn: "কাজের ধাপ", url: "#process" },
      { id: "nav-4", label: "Cost Estimator", labelBn: "বাজেট হিসাব", url: "#calculator" },
      { id: "nav-5", label: "Pricing Plans", labelBn: "প্যাকেজ ও খরচ", url: "#pricing" },
      { id: "nav-6", label: "Contact", labelBn: "যোগাযোগ", url: "#contact" },
    ],
    solutionsTitle: "Core Solutions",
    solutionsTitleBn: "স্পেশাল সল্যুশনস",
    solutionsLinks: [
      { id: "sol-1", label: "HealthTech & Booking", labelBn: "হেলথটেক ও সিরিয়াল বুকিং", url: "#services" },
      { id: "sol-2", label: "bKash / Nagad E-Commerce", labelBn: "অনলাইন শপ ও বিকাশ পেমেন্ট", url: "#services" },
      { id: "sol-3", label: "Custom Websites & Apps", labelBn: "কাস্টম ওয়েবসাইট ও অ্যাপ", url: "#services" },
      { id: "sol-4", label: "AI Chatbots & Automation", labelBn: "অটোমেশন ও AI চ্যাটবট", url: "#services" },
      { id: "sol-5", label: "Cloud Server Deployment", labelBn: "ক্লাউড সার্ভার ও মেইনটেন্যান্স", url: "#services" },
    ],
    helpTitle: "Direct Consultation",
    helpTitleBn: "সরাসরি পরামর্শ",
    helpDesc: "Have a specific project idea or urgent technical requirement? Talk directly to our technical lead.",
    helpDescBn: "আপনার নতুন আইডিয়া বা প্রজেক্ট নিয়ে তাৎক্ষণিক আলোচনার জন্য সরাসরি আমাদের টেকনিক্যাল লিডের সাথে কথা বলুন।",
    helpButtonText: "Chat on WhatsApp",
    helpButtonTextBn: "হোয়াটসঅ্যাপে চ্যাট",
    copyrightText: "All rights reserved.",
    copyrightTextBn: "সর্বস্বত্ব সংরক্ষিত।",
    bottomLocationText: "Gulshan-2, Dhaka, Bangladesh",
  },

  seo: {
    metaTitle: "WebZen Bangladesh | Premier Digital Engineering & Software Solutions",
    metaDescription: "WebZen Bangladesh is a premier digital engineering agency crafting ultra-fast web platforms, e-commerce, mobile apps, and business automation.",
    ogImage: "/og-image.jpg"
  }
};
