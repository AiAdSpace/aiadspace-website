"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const categoryColors: Record<string, string> = {
  AEO: "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
  "AI Ads": "text-brand-violet border-brand-violet/30 bg-brand-violet/10",
  Strategy: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Your Brand Doesn't Show Up on ChatGPT (And How to Fix It)",
    excerpt:
      "Traditional SEO is dead. Learn how Answer Engine Optimization ensures your brand is the primary source for LLM-generated responses.",
    category: "AEO",
    date: "March 2025",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
    content: `
Most brands obsess over Google rankings. But here's the uncomfortable truth: when someone asks ChatGPT "what's the best project management tool for startups?", Google rankings don't matter at all.

**The New Search Reality**

Large Language Models like ChatGPT, Perplexity, and Gemini don't crawl your meta tags. They don't count your backlinks. They've absorbed the internet's knowledge during training — and they decide who to mention based on something far more nuanced: semantic authority.

Semantic authority is how deeply and consistently your brand is associated with a topic across the web. It's built through:

- **Structured, authoritative content** — long-form guides, FAQs, comparison pages that LLMs can learn from
- **Third-party citations** — being mentioned in reviews, forums, industry publications
- **Consistent entity presence** — your brand name appearing alongside the right keywords, concepts, and contexts repeatedly

**Why Most Brands Fail at This**

Traditional SEO optimizes for crawlers. AEO optimizes for comprehension. If your website is full of keyword-stuffed landing pages with no real depth, LLMs simply won't trust your brand enough to recommend it.

**What You Can Do Today**

1. Audit what ChatGPT currently says about your brand — ask it directly
2. Identify the questions your customers ask AI tools
3. Create dedicated, deeply informative content that answers those questions better than anyone else
4. Build citations by getting featured in industry roundups, comparison sites, and expert publications

The brands winning in the AI era aren't the ones with the biggest ad budgets. They're the ones that became the most trusted data source.
    `,
  },
  {
    id: 2,
    title: "OpenAI's New Ad Program: What Brands Need to Know in 2025",
    excerpt:
      "The landscape of digital advertising is shifting from banner ads to contextually relevant AI suggestions. We break down the beta features.",
    category: "AI Ads",
    date: "February 2025",
    gradient: "from-violet-900 via-purple-800 to-pink-900",
    content: `
OpenAI quietly began testing sponsored placements inside ChatGPT responses in early 2025. This isn't banner advertising — it's something fundamentally different, and brands need to understand the distinction before their competitors do.

**How AI Advertising Actually Works**

Unlike display ads that interrupt users, AI-native advertising works by making your brand the contextually relevant answer. When a user asks ChatGPT for a recommendation, sponsored results appear as natural suggestions — clearly labeled, but woven into the conversation flow.

The key difference: users are in high-intent, decision-making mode when they ask AI tools for recommendations. This is arguably the highest-quality advertising surface ever created.

**What the Beta Looks Like**

Early testers report that ads appear in response to specific query types:
- Product comparisons ("best X for Y")
- Service recommendations ("who offers Z in my area")
- How-to queries with product implications

Brands in the beta are seeing click-through rates significantly higher than traditional display advertising, precisely because of this intent alignment.

**What Brands Should Do Now**

Even if you're not in the beta, preparation is everything:

1. **Ensure your brand data is clean** — OpenAI pulls from structured data sources. Make sure your business information is consistent everywhere.
2. **Build content depth** — sponsored placement works best when organic brand authority already exists
3. **Define your target queries** — what questions do your ideal customers ask AI tools? Those are your future ad targets.

The window to be an early mover here is narrow. The brands establishing AI ad presence now will have a significant advantage when these platforms open to all advertisers.
    `,
  },
  {
    id: 3,
    title: "AEO vs SEO: The Key Differences Every Marketer Must Understand",
    excerpt:
      "Understanding the paradigm shift from keywords to intents is critical for survival in the next decade of search behavior.",
    category: "Strategy",
    date: "January 2025",
    gradient: "from-cyan-900 via-teal-800 to-emerald-900",
    content: `
If you've spent the last decade mastering SEO, here's what you need to know: the skills transfer, but the strategy doesn't. Answer Engine Optimization is a different discipline built for a different era.

**The Core Philosophical Difference**

SEO asks: "How do I rank for this keyword?"
AEO asks: "How do I become the answer to this question?"

This sounds like a subtle distinction, but it drives completely different execution.

SEO optimizes for algorithms that match queries to pages. AEO optimizes for AI systems that synthesize information to generate direct answers. One is about visibility in a list. The other is about being the singular trusted source.

**Key Tactical Differences**

| SEO | AEO |
|-----|-----|
| Keyword density | Semantic depth |
| Backlink quantity | Citation quality |
| Page speed | Content comprehensiveness |
| Meta descriptions | Structured data markup |
| Ranking position | AI mention frequency |

**The Content Approach**

SEO content is often built around search volume. AEO content is built around question depth. A 500-word blog post targeting a keyword is an SEO asset. A 3,000-word definitive guide that answers every related question a user might have is an AEO asset.

LLMs reward completeness, accuracy, and the presence of your content in high-authority contexts.

**Should You Abandon SEO?**

No. Google still drives significant traffic and the two disciplines complement each other. Strong AEO content — comprehensive, authoritative, well-structured — also tends to rank well on Google.

The brands that will win are those who understand both games and play them simultaneously. Start by auditing your existing content for AEO gaps: where are you thin on depth? Where are competitor brands being cited by AI tools instead of you?

That gap is your opportunity.
    `,
  },
];

function renderContent(content: string) {
  return content
    .trim()
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h3 key={i} className="text-text-primary font-bold text-base mt-6 mb-2">
            {line.replace(/\*\*/g, "")}
          </h3>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-text-secondary text-sm leading-relaxed ml-4 list-disc">
            {line.replace(/\*\*(.*?)\*\*/g, "$1").slice(2)}
          </li>
        );
      }
      if (line.startsWith("|")) return null; // skip table lines for simplicity
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return (
        <p key={i} className="text-text-secondary text-sm leading-relaxed">
          {line.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
}

export default function InsightsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-violet/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            ✦ Updated Monthly
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Insigh<GradientText>ts</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Decoding the future of brand visibility. Stay ahead of the AI
            advertising curve with expert analysis.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => {
            const isExpanded = expandedId === post.id;
            return (
              <article
                key={post.id}
                className={`card-dark rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? "md:col-span-2" : "hover:-translate-y-1"
                }`}
              >
                {/* Gradient Thumbnail — hide when expanded */}
                {!isExpanded && (
                  <div
                    className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-surface-card/40" />
                    <div className="relative">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          categoryColors[post.category] ||
                          "text-brand-blue border-brand-blue/30 bg-brand-blue/10"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-text-muted text-xs">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      {isExpanded && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            categoryColors[post.category] ||
                            "text-brand-blue border-brand-blue/30 bg-brand-blue/10"
                          }`}
                        >
                          {post.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-text-primary font-bold text-lg mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-surface-border space-y-1">
                      {renderContent(post.content)}
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggle(post.id)}
                    className="flex items-center gap-1.5 text-brand-blue text-sm font-medium mt-4 hover:gap-2 transition-all duration-200"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-card to-surface-muted border border-surface-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Get AI Visibility Tips in Your Inbox
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
              Join marketing leaders receiving our monthly deep-dive into AI
              search algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-full bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
              <a
                href="/apply"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe Now →
              </a>
            </div>
            <p className="text-text-muted text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}