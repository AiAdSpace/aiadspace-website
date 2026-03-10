import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { Check, Shield, Search, Target, BarChart3, FileText, Calendar, LayoutDashboard } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const trustItems = [
  { icon: <Shield size={20} />, label: "Privacy First", desc: "Compliant with all AI safety protocols" },
  { icon: <Search size={20} />, label: "10+ Platforms", desc: "Visibility across GPT, Claude, Perplexity" },
  { icon: <Target size={20} />, label: "Targeted AEO", desc: "Zero-waste semantic optimization" },
  { icon: <BarChart3 size={20} />, label: "Real-time ROI", desc: "Monthly visibility lift reports" },
];

const comparisonRows = [
  { feature: "AI Search Visibility", us: "✅", seo: "❌", nothing: "❌" },
  { feature: "ChatGPT Citations", us: "✅", seo: "❌", nothing: "❌" },
  { feature: "Google Gemini Presence", us: "✅", seo: "Partial", nothing: "❌" },
  { feature: "Content Strategy", us: "✅", seo: "Partial", nothing: "❌" },
  { feature: "Monthly Reporting", us: "✅", seo: "✅", nothing: "❌" },
  { feature: "India-Focused", us: "✅", seo: "Partial", nothing: "❌" },
];

const deliverables = [
  {
    icon: <FileText size={28} className="text-brand-blue" />,
    title: "AI Visibility Report",
    desc: "Detailed PDF audit showing your brand's presence across 10+ AI platforms",
  },
  {
    icon: <Calendar size={28} className="text-brand-violet" />,
    title: "Monthly Strategy Pack",
    desc: "Content calendar, citation targets, and AEO optimisation roadmap",
  },
  {
    icon: <LayoutDashboard size={28} className="text-cyan-400" />,
    title: "Live Visibility Dashboard",
    desc: "Real-time tracking of your brand mentions across all major AI platforms",
  },
];

const FAQ_EXPANDED = [
  {
    question: "What exactly is Answer Engine Optimization (AEO)?",
    answer: "AEO is the practice of optimising your brand's content, citations, and online presence so that AI systems like ChatGPT, Perplexity, and Gemini recommend your brand when users ask relevant questions. Unlike SEO which targets search engine algorithms, AEO targets the language models that now guide consumer decisions.",
  },
  {
    question: "How is AEO different from SEO?",
    answer: "SEO optimises for ranking in a list of blue links on Google. AEO optimises for being the single recommended answer when someone asks an AI assistant a question. SEO cares about keywords and backlinks; AEO cares about semantic authority, citation quality, and how deeply AI models associate your brand with your topic.",
  },
  {
    question: "Which AI platforms do you cover?",
    answer: "We monitor and optimise for ChatGPT (GPT-4o), Perplexity AI, Google Gemini, Microsoft Copilot, Meta AI, Claude, and several emerging AI search tools — 10+ platforms in total.",
  },
  {
    question: "How long before I see results?",
    answer: "AEO results depend on your starting visibility, industry competitiveness, and how aggressively we execute. Some clients see improvement within 4–6 weeks. A meaningful, measurable shift in AI citation frequency typically takes 2–3 months of consistent work. We track and report progress every month.",
  },
  {
    question: "Do I need to be running ads already?",
    answer: "No. AEO is independent of paid advertising. It's about building organic authority in AI systems through content, citations, and structured data — not ad spend. You can start AEO whether you're running ads or not.",
  },
  {
    question: "What if my brand still isn't cited after 3 months?",
    answer: "We've never had a client with zero improvement after 3 months of active work. However, if we aren't hitting agreed milestones, we extend the engagement at no additional cost until we do. We stand behind our results.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term lock-in. Our Growth and Scale plans are month-to-month. We recommend a minimum of 3 months to see meaningful results, but you're never locked in. The Starter plan is a one-time payment.",
  },
  {
    question: "How do you measure AI visibility?",
    answer: "We run structured queries across 10+ AI platforms using your brand's key topic keywords. We track mention frequency, citation position (are you mentioned first or fifth?), sentiment, and competitor share of AI recommendations. All of this is compiled into your monthly AI Visibility Report.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-violet/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            ✦ Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Choose Your <GradientText>Growth Plan</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tailored strategies to ensure your brand is the first answer AI
            models give to your customers.
          </p>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Why AiAdSpace vs <GradientText>The Alternatives</GradientText>
          </h2>
          <p className="text-text-secondary text-sm">See why brands choose us over traditional agencies or doing nothing.</p>
        </div>
        <div className="rounded-2xl border border-surface-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-surface-card border-b border-surface-border">
            <div className="px-5 py-4 text-text-muted text-xs font-semibold uppercase tracking-wider">Feature</div>
            <div className="px-5 py-4 text-center">
              <span className="text-white font-bold text-sm gradient-text">AiAdSpace</span>
            </div>
            <div className="px-5 py-4 text-center text-text-secondary text-sm font-medium">Traditional SEO</div>
            <div className="px-5 py-4 text-center text-text-secondary text-sm font-medium">Doing Nothing</div>
          </div>
          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-surface-border last:border-0 ${i % 2 === 0 ? "bg-surface" : "bg-surface-card/30"}`}
            >
              <div className="px-5 py-4 text-text-secondary text-sm font-medium">{row.feature}</div>
              <div className="px-5 py-4 text-center text-base">{row.us}</div>
              <div className={`px-5 py-4 text-center text-sm ${row.seo === "Partial" ? "text-yellow-400" : "text-base"}`}>{row.seo}</div>
              <div className="px-5 py-4 text-center text-base">{row.nothing}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-8 flex flex-col ${
                service.highlighted
                  ? "bg-surface-card border border-brand-blue/40 shadow-xl shadow-brand-violet/10"
                  : "bg-surface-card border border-surface-border"
              }`}
            >
              {service.highlighted && service.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-violet shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-text-primary font-bold text-xl mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  <span className="text-text-muted text-sm">{service.period}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${service.highlighted ? "text-brand-blue" : "text-brand-violet"}`} />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/apply" variant={service.highlighted ? "gradient" : "outline"} fullWidth>
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── DELIVERABLES VISUAL ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            What You'll <GradientText>Receive</GradientText>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Tangible deliverables every month — not just vague strategy advice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <div key={i} className="card-dark rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-surface-muted flex items-center justify-center mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-text-primary font-bold text-base mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-surface-border bg-surface-muted/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="text-brand-blue">{item.icon}</div>
                <div className="text-text-primary text-sm font-semibold">{item.label}</div>
                <div className="text-text-muted text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPANDED FAQ (8 questions) ── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Common Questions
          </h2>
          <p className="text-text-secondary">
            Everything you need to know about AI search visibility.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_EXPANDED.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-surface-border bg-surface-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-text-primary font-bold text-xl md:text-2xl mb-2">
              Not sure which plan is right for you?
            </h3>
            <p className="text-text-secondary text-sm">
              Schedule a free 15-minute AI visibility strategy call and we'll help you map out the best path forward.
            </p>
          </div>
          <Button href="/apply" variant="outline" size="lg" className="whitespace-nowrap">
            Book a Strategy Call →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-surface-border rounded-xl bg-surface-card overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
        <span className="text-text-primary font-medium text-sm md:text-base">{question}</span>
        <span className="text-text-muted group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0">▾</span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}