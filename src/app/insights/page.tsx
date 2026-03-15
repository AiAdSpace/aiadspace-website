"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

const POSTS = [
  {
    id: "1",
    category: "AEO",
    categoryColor: "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
    title: "Why Your Brand Doesn't Show Up on ChatGPT (And How to Fix It)",
    excerpt: "Traditional SEO is dead. Learn how Answer Engine Optimization ensures your brand is the primary source for LLM-generated responses.",
    date: "March 2026",
    gradient: "from-blue-500/20 to-violet-500/20",
    content: `If you've ever typed your brand name into ChatGPT and watched it recommend a competitor instead, you're not alone. This is the new visibility crisis — and most Indian brands have no idea it's happening.

Search Engine Optimization taught us to chase keywords and backlinks. For two decades, that was the game. But the game has changed. When a user asks ChatGPT "what's the best skincare brand in India?" they don't get ten blue links. They get one answer. One recommendation. One brand.

Is it yours?

**Why AI Models Ignore Most Brands**

Large Language Models like GPT-4o don't crawl the web in real time the way Google does. They were trained on a massive snapshot of the internet — books, articles, forums, product reviews, press coverage — and they learned to associate certain brands with certain topics based on the volume and quality of that data.

If your brand has thin online presence, inconsistent messaging, or no third-party citations, you simply don't exist in the model's understanding of your category. It's not that ChatGPT dislikes you. It's that it's never heard of you.

**The 3 Most Common Reasons Brands Get Ignored**

1. No semantic depth. Your website talks about your products but never establishes deep topical authority. AI models look for brands that comprehensively own a subject area — not just sell within it.

2. Zero citation footprint. If no trusted publications, review sites, or expert blogs have mentioned your brand in context, the model has no external signal to anchor its recommendation to you.

3. Entity inconsistency. Your brand name, description, and category are described differently across your website, social profiles, Google Business, and press mentions. AI models get confused and default to the brand they understand most clearly.

**How AEO Fixes This**

Answer Engine Optimization works by systematically building the signals that AI models trust. This means creating deep, authoritative content that covers your topic from every angle. It means getting your brand mentioned in the right publications and contexts. It means making your entity — your brand as a concept — crystal clear across every platform an AI might learn from.

The brands winning on ChatGPT today didn't get there by accident. They got there because they started treating AI search as a channel worth investing in before their competitors did.

The window to be first is still open — but it's closing fast.`,
  },
  {
    id: "2",
    category: "AI Ads",
    categoryColor: "text-brand-violet border-brand-violet/30 bg-brand-violet/10",
    title: "OpenAI's New Ad Program: What Brands Need to Know in 2026",
    excerpt: "The landscape of digital advertising is shifting from banner ads to contextually relevant AI suggestions. We break down what's happening.",
    date: "February 2026",
    gradient: "from-violet-500/20 to-blue-500/20",
    content: `OpenAI's move into advertising isn't a rumour anymore. The company has begun piloting sponsored recommendations within ChatGPT, with Criteo confirmed as the first ad tech partner. For brands paying attention, this is one of the most significant shifts in digital advertising since the launch of Google AdWords.

Here's what we know, what it means, and how to prepare.

**What OpenAI's Ad Program Actually Is**

Unlike traditional display advertising where you pay to put a banner in front of someone scrolling a page, OpenAI's model embeds brand recommendations directly into AI-generated answers. When a user asks ChatGPT for a product recommendation, a sponsored brand can appear as part of that response — contextually, conversationally, without the jarring interruption of a banner ad.

Early conversion data from the pilot is reportedly strong, which makes sense: a user who has just asked "what's the best project management tool for a startup?" and receives a sponsored recommendation is in active purchase intent mode. That's a very different user from someone passively scrolling a feed.

**Why This Changes Everything**

Traditional digital advertising has been built around attention — catching someone's eye while they're doing something else. AI advertising is built around intent — answering someone's question at the exact moment they're asking it.

This fundamentally changes the value equation. A sponsored placement in a ChatGPT response is closer to a sales conversation than an ad impression. Brands that understand this will allocate budget accordingly.

**What Brands Should Do Now**

The brands best positioned to benefit from paid AI placements are the ones that have already built organic AI visibility. Why? Because AI ad systems are likely to favour brands whose content the model already trusts — it's much easier to amplify an existing signal than to manufacture one from scratch.

In other words, AEO is the foundation. Paid AI placements are the accelerator. Build the foundation first.`,
  },
  {
    id: "3",
    category: "Strategy",
    categoryColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    title: "AEO vs SEO: The Key Differences Every Marketer Must Understand",
    excerpt: "Understanding the paradigm shift from keywords to intents is critical for survival in the next decade of search behaviour.",
    date: "January 2026",
    gradient: "from-blue-500/20 to-cyan-500/20",
    content: `Marketers who built their careers on SEO are facing an uncomfortable question: does everything I know still apply?

The honest answer is: some of it does, most of it doesn't, and the parts that don't are exactly the parts that matter most in AI-powered search.

**What SEO and AEO Share**

Both disciplines care about the quality and trustworthiness of your content. Both reward brands that genuinely know their subject matter. Both penalise thin, spammy, or duplicated content. If you've done good SEO work — building real authority through genuine expertise — you're starting from a better position than most.

**Where They Diverge**

SEO is fundamentally about ranking in a list. The goal is to appear on page one, ideally in position one, for a set of target keywords. Success is measured in click-through rates, impressions, and organic traffic.

AEO is about being the answer. There is no list. There is no position two. When ChatGPT responds to a query, it cites one brand, or maybe two or three. Everyone else is invisible. Success is measured in citation frequency, sentiment, and share of AI-generated recommendations.

This changes everything about strategy. In SEO, you target keywords. In AEO, you build topical authority. In SEO, you chase backlinks. In AEO, you build citation quality. In SEO, you optimise meta tags. In AEO, you optimise structured data and entity clarity.

**The Transition**

Brands don't need to abandon SEO. Google is still enormously important, and will be for years. But the smart play is to start building AEO infrastructure now — before every competitor wakes up to what's happening. The brands that treat AEO as an add-on in 2027 will be playing catch-up to the ones who treated it as a priority in 2026.`,
  },
  {
    id: "4",
    category: "Research",
    categoryColor: "text-green-400 border-green-400/30 bg-green-400/10",
    title: "India's Top D2C Brands: Who ChatGPT Recommends And Who It Ignores",
    excerpt: "We queried ChatGPT with 20 different D2C category prompts and tracked which Indian brands appeared. The results were revealing — and concerning for most.",
    date: "March 2026",
    gradient: "from-green-500/20 to-cyan-500/20",
    content: `We ran an experiment. Over the course of two weeks, we asked ChatGPT-4o the same 20 D2C category questions — skincare, haircare, supplements, home decor, snacking, personal care, fashion basics, and more — and tracked which Indian brands it recommended, how often, and in what context.

The findings were striking. A small cluster of brands appeared repeatedly. The vast majority didn't appear at all.

**The Methodology**

We used 20 prompts across 8 D2C categories, each phrased three different ways: direct recommendation, comparison, and problem-solution format. Examples:

- "What's the best Indian skincare brand for oily skin?"
- "Compare Indian D2C skincare brands"
- "I have oily skin and want an Indian brand that actually works — what do you recommend?"

Each prompt was run five times on fresh sessions to account for model variability. We tracked first mention, total mentions, and sentiment (positive, neutral, or hedged).

**Who Won**

In skincare, Minimalist dominated — appearing in 94% of relevant responses, almost always as the first recommendation. The Derma Co and Plum followed with strong but less consistent presence. Dot & Key appeared frequently in "aesthetic" or "gifting" contexts.

In supplements and nutrition, Wellbeing Nutrition and Oziva appeared consistently. MuscleBlaze dominated the fitness and protein sub-category almost unchallenged.

In snacking, Too Yumm and Yoga Bar had strong AI presence. Interestingly, several newer VC-backed snacking brands with significant marketing budgets had near-zero AI visibility.

**Who Got Ignored — And Why**

Several well-funded D2C brands with strong Instagram followings and significant ad spend were essentially invisible in ChatGPT responses. This is the core insight: social media presence and paid advertising do not translate into AI visibility.

The brands that ChatGPT recommends are the ones with deep content ecosystems (blogs, guides, expert articles) that establish category authority, consistent third-party coverage in publications like YourStory, Inc42, Economic Times, and Healthline India, clear and consistent entity descriptions across their website and press materials, and structured data that makes their product categories machine-readable.

One brand we analysed had spent heavily on influencer marketing for two years. Beautiful content. Millions of followers. Zero ChatGPT mentions. Their entire digital presence was built on platforms that AI models don't learn from effectively — short-form video and paid social.

**The Implication for Indian D2C Brands**

India's D2C market is growing rapidly. The brands that will capture disproportionate share are the ones that AI systems trust and recommend. Right now, fewer than 3% of Indian D2C brands have any meaningful AI search presence.

The gap between the brands AI recommends and the brands with the biggest marketing budgets is wide — and that gap is an opportunity. Building AI visibility now, before the category gets crowded, is one of the highest-leverage investments a D2C brand can make.

If your brand wasn't in our results, the question isn't whether you should act. It's how fast.`,
  },
  {
    id: "5",
    category: "Data",
    categoryColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    title: "What Happened When We Asked ChatGPT to Recommend a SaaS Tool 100 Times",
    excerpt: "We ran 100 identical SaaS recommendation queries across ChatGPT, Perplexity, and Gemini. The consistency — and the surprises — tell a clear story about how AI visibility actually works.",
    date: "March 2026",
    gradient: "from-orange-500/20 to-red-500/20",
    content: `Here's a question most SaaS founders haven't thought to ask: if 100 of your potential customers asked ChatGPT to recommend a tool in your category, how many times would your product come up?

We decided to find out — not just for one product, but across six SaaS categories. We ran 100 queries per category across ChatGPT-4o, Perplexity, and Gemini. Here's what we found.

**The Setup**

Six categories: project management, email marketing, HR software, CRM, accounting software, and customer support tools. For each category, we used a single consistent prompt — "What's the best [category] tool for a small business in India?" — and ran it 100 times across fresh sessions on each platform over a three-week period.

We tracked which tools were mentioned, in what position, how consistently, and with what sentiment.

**The Data**

In project management, the top 3 tools — Notion, Asana, and Monday.com — accounted for 89 out of 100 first-position mentions on ChatGPT. The remaining 11 were split across 6 other tools. Indian-origin tools like Kissflow appeared 4 times total.

In email marketing, Mailchimp was mentioned first 71 times. Brevo (formerly Sendinblue) appeared 18 times. Every other tool combined accounted for 11 mentions.

In CRM, Zoho CRM — an Indian product — performed remarkably well, appearing in 43% of responses. This is notable and instructive: Zoho has invested heavily in content, documentation, third-party reviews, and structured data for over a decade. That infrastructure pays dividends in AI visibility.

In HR software, Darwinbox — another Indian product — appeared in only 6% of responses despite being one of India's most well-funded HR tech companies. Their AI presence is significantly below their actual market share.

**What Drives Consistency**

The tools that appeared most consistently shared a clear set of characteristics. They had extensive documentation and help content indexed across the web. They had thousands of third-party reviews on sites like G2, Capterra, and Trustpilot. They were mentioned in comparison articles, "best of" lists, and expert guides published on high-authority domains.

Tools that appeared inconsistently — or not at all — tended to rely heavily on paid acquisition and had thin organic content footprints.

**The Platform Differences**

Perplexity was notably more variable than ChatGPT — it cited more tools overall and was more likely to surface newer or niche options. This is because Perplexity performs live web searches to inform its answers, making it more responsive to recent content.

Gemini was the most conservative, sticking closely to established market leaders and rarely surfacing tools outside the top 5 in any category.

This has a strategic implication: if you want consistent AI visibility, you need to build authority that works across multiple platforms. A strategy optimised only for ChatGPT will leave significant reach on the table.

**What This Means for SaaS Brands**

If you're running a SaaS company in India and you haven't run this test for your own category, do it now. The results will either reassure you or alarm you — and either way, you'll have information you need.

The SaaS brands with strong AI visibility today didn't build it overnight. They built it through years of content, community, and citation building. But the compounding nature of AI visibility means that starting now is dramatically better than starting after your competitors have locked in their positions.

The question isn't whether AI recommendation matters for SaaS growth in 2026. It does, measurably. The question is whether your brand will be the one getting recommended.`,
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-blue/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            ✦ Updated Monthly
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <GradientText>Insights</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Stay ahead of the AI advertising curve.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-4xl mx-auto px-6 pb-16 space-y-6">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 border border-brand-blue/20 p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="relative">
            <h3 className="text-text-primary font-bold text-xl md:text-2xl mb-3">
              Get our weekly AI Visibility Report
            </h3>
            <p className="text-text-secondary text-sm mb-6 max-w-lg mx-auto">
              See which Indian brands are winning and losing in AI search this week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card-dark rounded-2xl overflow-hidden border border-surface-border hover:border-brand-blue/30 transition-colors duration-300">
      <div className={`h-2 w-full bg-gradient-to-r ${post.gradient}`} />
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="text-text-muted text-xs">{post.date}</span>
        </div>
        <h2 className="text-text-primary font-bold text-lg md:text-xl leading-snug mb-3">
          {post.title}
        </h2>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {post.excerpt}
        </p>
        {expanded && (
          <div className="border-t border-surface-border pt-6 mb-5 space-y-4">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3 key={i} className="text-text-primary font-bold text-base mt-6 mb-1">
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (para.includes("**")) {
                return (
                  <p key={i} className="text-text-secondary text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
                    }}
                  />
                );
              }
              if (para.startsWith("- ") || para.includes("\n- ")) {
                return (
                  <ul key={i} className="space-y-1.5 pl-4">
                    {para.split("\n").filter(l => l.trim()).map((line, j) => (
                      <li key={j} className="text-text-secondary text-sm list-disc list-inside">
                        {line.replace(/^- /, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-text-secondary text-sm leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          {expanded ? "Show Less ↑" : "Read More →"}
        </button>
      </div>
    </article>
  );
}