"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { Search, Target, Zap, ArrowRight } from "lucide-react";
import { VALUE_PROPS, STATS } from "@/lib/constants";

const SNAPSHOT_URL =
  "https://script.google.com/macros/s/AKfycbwAKZ57FaUV07QSSexMjWaYesIFuR7lXrxnDAa23b-awVXSwTTzEECg1gIy_D5bPI1u/exec";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={22} className="text-brand-blue" />,
  Target: <Target size={22} className="text-brand-violet" />,
  Zap: <Zap size={22} className="text-brand-blue" />,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg grid-bg overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            Next-Gen AI Marketing Agency
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            Advertise Where
            <br />
            <GradientText>Conversations Happen</GradientText>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We help brands get discovered on ChatGPT, Perplexity, and
            AI-powered search engines. Stop chasing keywords. Start being the
            answer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/apply" variant="gradient" size="lg">Apply Now</Button>
            <Button href="/how-it-works" variant="outline" size="lg">See How It Works</Button>
          </div>
        </div>
      </section>

      {/* ── AI PLATFORM LOGO STRIP ── */}
      <section className="py-12 border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-text-muted text-xs font-semibold uppercase tracking-widest mb-8">
            We audit your visibility across all major AI platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { name: "ChatGPT", bg: "bg-[#10A37F]", letter: "G" },
              { name: "Perplexity", bg: "bg-[#20808D]", letter: "P" },
              { name: "Gemini", bg: "bg-gradient-to-br from-blue-500 to-purple-600", letter: "✦" },
              { name: "Copilot", bg: "bg-gradient-to-br from-blue-600 to-cyan-400", letter: "C" },
              { name: "Meta AI", bg: "bg-gradient-to-br from-blue-700 to-purple-700", letter: "M" },
              { name: "Claude", bg: "bg-[#CC785C]", letter: "◆" },
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-2 group">
                <div className={`w-12 h-12 rounded-xl ${platform.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-white text-lg font-bold">{platform.letter}</span>
                </div>
                <span className="text-text-muted text-xs font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOW — URGENCY STATS ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-card/30 to-surface pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest">
              ⚡ The AI Search Revolution Is Happening Now
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12 max-w-2xl mx-auto leading-tight">
            The window to be first is{" "}
            <span className="gradient-text">closing fast</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "1B+", label: "daily ChatGPT queries", sub: "Every query is a chance for your brand to be recommended — or ignored.", color: "from-brand-blue/20 to-brand-blue/5", border: "border-brand-blue/30", textColor: "text-brand-blue" },
              { stat: "57%", label: "of consumers use AI before purchase", sub: "More than half your customers are asking AI which brand to trust before buying.", color: "from-brand-violet/20 to-brand-violet/5", border: "border-brand-violet/30", textColor: "text-brand-violet" },
              { stat: "<3%", label: "of Indian brands are AI-optimised", sub: "The opportunity is wide open. First movers will own this channel.", color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/30", textColor: "text-cyan-400" },
            ].map((item, i) => (
              <div key={i} className={`relative rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-8 text-center`}>
                <div className={`text-5xl md:text-6xl font-black mb-2 ${item.textColor}`}>{item.stat}</div>
                <div className="text-text-primary font-semibold text-base mb-3">{item.label}</div>
                <div className="text-text-secondary text-sm leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-text-secondary text-lg md:text-xl mb-6 font-medium">
              Every day you wait,{" "}
              <span className="text-red-400 font-bold">a competitor gets cited instead of you.</span>
            </p>
            <a href="/apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Apply Now — Before Your Competitor Does →
            </a>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Industries We <GradientText>Serve</GradientText>
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            Every industry has customers asking AI for recommendations. Is your brand the answer?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { icon: "🛍️", name: "D2C Brands", desc: "When someone asks ChatGPT for the best skincare brand, will it say yours?" },
            { icon: "💻", name: "SaaS Products", desc: "AI tools recommend software daily. Is your product in the conversation?" },
            { icon: "🎓", name: "EdTech Platforms", desc: "Parents ask AI which course platform to trust. Are you the answer?" },
            { icon: "💰", name: "Finance & Fintech", desc: "AI-powered financial advice is booming. Your brand needs to be cited." },
            { icon: "🏥", name: "Healthcare", desc: "Patients ask AI for trusted health services. Be the one they find." },
            { icon: "🏠", name: "Real Estate", desc: "Buyers query AI before agents. Get your brand into those answers." },
          ].map((item, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-text-primary font-bold text-base mb-2 group-hover:text-brand-blue transition-colors">{item.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEFORE / AFTER VISUAL ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              See the <span className="gradient-text">difference AEO makes</span>
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              This is what happens when someone asks ChatGPT about your category — before and after AiAdSpace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* BEFORE */}
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-red-500/20 bg-red-500/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Before AiAdSpace</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-end">
                  <div className="bg-surface-border rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-text-primary text-sm">Best D2C skincare brand in India?</p>
                  </div>
                </div>
                <div className="flex justify-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#10A37F] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className="bg-surface-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] border border-surface-border">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Top brands include <span className="text-green-400 font-semibold">Minimalist</span>, <span className="text-green-400 font-semibold">Plum</span>, and <span className="text-green-400 font-semibold">Dot & Key</span>.
                    </p>
                    <div className="mt-3 pt-3 border-t border-surface-border flex items-center gap-2">
                      <span className="text-xs text-red-400 font-medium">❌ Your Brand</span>
                      <span className="text-text-muted text-xs">— not mentioned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AFTER */}
            <div className="rounded-2xl border border-brand-blue/40 bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-brand-blue/20 bg-brand-blue/10">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">After AiAdSpace</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-end">
                  <div className="bg-surface-border rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-text-primary text-sm">Best D2C skincare brand in India?</p>
                  </div>
                </div>
                <div className="flex justify-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#10A37F] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className="bg-surface-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] border border-brand-blue/20">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Top brands include <span className="gradient-text font-bold">Your Brand</span>, <span className="text-text-muted">Minimalist</span>, and <span className="text-text-muted">Plum</span>.
                    </p>
                    <div className="mt-3 pt-3 border-t border-brand-blue/20 flex items-center gap-2">
                      <span className="text-xs text-green-400 font-medium">✅ Your Brand</span>
                      <span className="text-text-muted text-xs">— cited first</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-text-muted text-sm mt-8 font-medium">
            This is what AEO does.{" "}
            <a href="/apply" className="text-brand-blue hover:underline">Get your brand cited →</a>
          </p>
        </div>
      </section>

      {/* ── FREE AI SNAPSHOT FORM ── */}
      <section id="snapshot" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-brand-violet/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest mb-6">
            🎁 Free — No Credit Card Required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
            See How Your Brand Appears{" "}
            <span className="gradient-text">on ChatGPT — Free</span>
          </h2>
          <p className="text-text-secondary text-base mb-10 max-w-xl mx-auto">
            We'll manually query ChatGPT, Perplexity, and Gemini with your brand's key topics and send you a personalised AI Snapshot report within 24 hours.
          </p>
          <SnapshotForm />
          <p className="text-text-muted text-xs mt-4">No spam. We only use your email to send the snapshot report.</p>
        </div>
      </section>

      {/* ── FOUNDER TRUST ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 border-2 border-brand-blue/40 flex items-center justify-center mx-auto mb-5">
            <span className="text-4xl">👤</span>
          </div>
          <h3 className="text-text-primary font-bold text-xl mb-1">Aayush Kumbhar</h3>
          <p className="text-brand-blue text-sm font-medium mb-4">Founder, AiAdSpace</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Software engineer turned AI visibility strategist. Built AiAdSpace because I saw brands getting left behind as the internet moved from search to answers.
          </p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-blue/40 text-brand-blue text-sm font-medium hover:bg-brand-blue/10 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop) => (
            <div key={prop.title} className="card-dark gradient-border p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center mb-5">
                {iconMap[prop.icon]}
              </div>
              <h3 className="text-text-primary font-semibold text-lg mb-3">{prop.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">3 Simple Steps</h2>
          <p className="text-text-secondary text-base">Our methodology for AI dominance.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue opacity-30" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1", title: "Audit", desc: "We analyse your current AI visibility score and competitor landscape." },
              { number: "2", title: "Strategy", desc: "Custom prompt targeting maps and AEO content architecture." },
              { number: "3", title: "Launch & Optimize", desc: "Continuous monitoring and refinement of your brand mentions." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10 ${i === 0 ? "bg-gradient-to-r from-brand-blue to-brand-violet shadow-lg shadow-brand-blue/30" : "bg-surface-card border border-surface-border text-text-secondary"}`}>
                  {step.number}
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-12 border-y border-surface-border bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden gradient-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-violet/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to be found where AI answers?
            </h2>
            <p className="text-text-secondary text-base mb-8 max-w-xl mx-auto">
              Join the waitlist for our next cohort of brands ready for AI search dominance. Limited availability.
            </p>
            <Button href="/apply" variant="gradient" size="lg">
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-surface/95 backdrop-blur-xl border-t border-surface-border px-4 py-3">
          <a
            href="#snapshot"
            className="block w-full py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-sm text-center hover:opacity-90 transition-opacity"
          >
            Get Free AI Snapshot →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// ── SNAPSHOT FORM COMPONENT ──
function SnapshotForm() {
  const [formData, setFormData] = useState({ brandName: "", category: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async () => {
    if (!formData.brandName || !formData.email) {
      alert("Please fill in Brand Name and Email.");
      return;
    }
    setStatus("loading");
    await fetch(SNAPSHOT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, formType: "snapshot" }),
    });
    setStatus("success");
  };

  if (status === "success") return (
    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-6 py-8">
      <p className="text-green-400 font-bold text-lg mb-1">✅ Snapshot Request Received!</p>
      <p className="text-text-secondary text-sm">We'll send your AI Snapshot to <strong>{formData.email}</strong> within 24 hours.</p>
    </div>
  );

  return (
    <div className="card-dark rounded-2xl p-6 md:p-8 text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Brand Name *</label>
          <input
            type="text"
            placeholder="Your Brand"
            value={formData.brandName}
            onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select...</option>
            {["D2C", "SaaS", "EdTech", "Finance", "Other"].map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
          <input
            type="email"
            placeholder="you@brand.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="w-full py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-base hover:opacity-90 transition-all duration-200 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Get My Free AI Snapshot →"}
      </button>
    </div>
  );
}