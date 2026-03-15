export const SITE_CONFIG = {
  name: "AiAdSpace",
  tagline: "AI Search & Visibility Agency",
  description:
    "We help brands get discovered on ChatGPT, Perplexity, and AI-powered search engines.",
  email: "hello@aiadspace.in",
  url: "https://aiadspace.in",
  social: {
    twitter: "https://x.com/AiAdSpace_in",
    linkedin: "https://www.linkedin.com/company/aiadspace-in",
    github: "https://github.com/AiAdSpace",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const SERVICES = [
  {
    id: "starter",
    name: "Starter",
    price: "₹15,000",
    period: "one-time",
    description:
      "Perfect for brands looking for an initial baseline of their AI footprint.",
    features: [
      "AI Presence Audit Report",
      "Brand mention analysis across 10 AI tools",
      "Competitor visibility comparison",
      "Actionable recommendations PDF",
      "1 strategic consulting call",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹25,000",
    period: "per month",
    description:
      "Comprehensive management for growing brands that want to lead the conversation.",
    features: [
      "Everything in Starter plus:",
      "AEO content optimization (4 pages/mo)",
      "Monthly AI visibility scorecards",
      "ChatGPT strategy setup",
      "Bi-weekly check-in calls",
      "Keyword & prompt targeting map",
    ],
    cta: "Apply Now",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "scale",
    name: "Scale",
    price: "₹50,000",
    period: "per month",
    description:
      "Full-scale agency support for enterprises dominating multiple categories.",
    features: [
      "Everything in Growth plus:",
      "Full ChatGPT Ads management",
      "10 AEO content pieces/mo",
      "Custom weekly reporting dashboard",
      "Priority 24/7 dedicated support",
      "Custom cross-platform search strategy",
    ],
    cta: "Apply Now",
    highlighted: false,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "AI Visibility Audit",
    description:
      "We scan 10+ AI platforms including ChatGPT, Perplexity, and Gemini to see if your brand shows up when customers ask relevant questions. We identify authority gaps and find exactly why you're being left out.",
  },
  {
    number: "02",
    title: "Custom AI Strategy",
    description:
      "We build your AEO content plan, ChatGPT ad strategy, and prompt targeting map. We don't just optimize for keywords — we optimize for intent and conversational triggers tailored to your industry.",
  },
  {
    number: "03",
    title: "Launch, Measure, Improve",
    description:
      "We execute the strategy, track your AI visibility score monthly, and continuously optimize. Our proprietary analytics dashboard shows you exactly how much 'Share of Answer' your brand is capturing.",
  },
];

export const VALUE_PROPS = [
  {
    icon: "Search",
    title: "AI Visibility Audit",
    description:
      "Comprehensive scan across ChatGPT, Claude, and Perplexity to identify your current brand sentiment and search share.",
  },
  {
    icon: "Target",
    title: "Answer Engine Optimization",
    description:
      "Technical and semantic optimization of your web assets to ensure you are the primary source for AI-generated answers.",
  },
  {
    icon: "Zap",
    title: "ChatGPT Ad Strategy",
    description:
      "Strategic placement and mention management within LLM context windows for maximum conversational impact.",
  },
];

export const STATS = [
  { value: "10+", label: "AI Platforms Monitored" },
  { value: "2026", label: "India-First AEO Agency" },
  { value: "D2C · SaaS · EdTech", label: "Industries Served" },
];

export const TRUST_SIGNALS = [
  { icon: "Shield", label: "No Long-Term Lock-in" },
  { icon: "Clock", label: "Response Within 24hrs" },
  { icon: "Zap", label: "India's First AEO Agency" },
];

export const FAQ = [
  {
    question: "How long does it take to see results in AI search?",
    answer:
      "While traditional SEO takes 6–12 months, AI visibility can often be influenced within 4–8 weeks depending on the platform's refresh cycle. Our AEO strategies focus on high-authority data signals that LLMs prioritize.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of optimizing your brand's content and online presence so that AI models like ChatGPT, Perplexity, and Gemini cite your brand as the authoritative answer to relevant questions.",
  },
  {
    question: "Do you guarantee our brand will show up in ChatGPT?",
    answer:
      "We cannot guarantee specific placements as AI models update independently, but our strategies consistently improve brand visibility scores. We track and report measurable improvements every month.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or pause your plan at any time with 30 days notice. We believe in earning your business every month.",
  },
];

export const BLOG_POSTS = [
  {
    id: "1",
    category: "AEO",
    title: "Why Your Brand Doesn't Show Up on ChatGPT (And How to Fix It)",
    excerpt:
      "Traditional SEO is dead. Learn how Answer Engine Optimization ensures your brand is the primary source for LLM-generated responses.",
    date: "March 2026",
    slug: "why-your-brand-doesnt-show-up-on-chatgpt",
    gradient: "from-blue-500/20 to-violet-500/20",
  },
  {
    id: "2",
    category: "AI Ads",
    title: "OpenAI's New Ad Program: What Brands Need to Know in 2025",
    excerpt:
      "The landscape of digital advertising is shifting from banner ads to contextually relevant AI suggestions. We break down the beta features.",
    date: "February 2026",
    slug: "openai-new-ad-program-2025",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    id: "3",
    category: "Strategy",
    title: "AEO vs SEO: The Key Differences Every Marketer Must Understand",
    excerpt:
      "Understanding the paradigm shift from keywords to intents is critical for survival in the next decade of search behavior.",
    date: "January 2026",
    slug: "aeo-vs-seo-key-differences",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

export const FOOTER_LINKS = {
  solutions: [
    { label: "AI Visibility Audit", href: "/services#starter" },
    { label: "AEO Optimization", href: "/services#growth" },
    { label: "ChatGPT Ads", href: "/services#scale" },
    { label: "Strategy", href: "/how-it-works" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/apply" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};