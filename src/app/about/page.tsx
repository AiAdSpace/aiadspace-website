import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

const stats = [
  { value: "10+", label: "AI Platforms Monitored" },
  { value: "2026", label: "Founded" },
  { value: "India-First", label: "AEO Agency" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-brand-blue/6 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            Our Origin
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
            <GradientText>Built by Someone Who</GradientText>
            <br />
            <GradientText>Saw the Shift Coming</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            AiAdSpace was founded by a software engineer who watched traditional
            advertising slowly lose relevance as AI changed how people search
            for answers.
          </p>
        </div>
      </section>

      {/* ── EXPANDED FOUNDER SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Avatar + Identity */}
          <div className="flex flex-col items-center md:items-start gap-5">
            {/* Circular photo placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 border-2 border-brand-blue/40 flex items-center justify-center text-5xl shadow-xl shadow-brand-blue/10">
              👤
            </div>
            <div>
              <div className="text-text-primary font-bold text-xl">Aayush Kumbhar</div>
              <div className="text-brand-blue text-sm font-medium mt-1">Founder, AiAdSpace</div>
            </div>

            {/* LinkedIn button */}
            <a
              href="https://linkedin.com/in/aayushkumbhar"
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

          {/* Story + Pull Quote */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                For years, the digital world operated on a simple premise: you ask a search engine
                a question, it gives you ten blue links, and you find the answer yourself. As a
                software engineer building tools for this ecosystem, I saw the cracks forming early.
                When Large Language Models emerged, the paradigm didn't just shift — it shattered.
              </p>
              <p>
                Brands were still pouring budgets into SEO strategies designed for a 2010 internet.
                They were optimizing for clicks while the world was moving toward answers. If
                ChatGPT or Perplexity is the interface, being "on the first page" of Google is no
                longer the win. Being the source the AI trusts is the only win.
              </p>
              <p>
                I built AiAdSpace to close this gap — using my engineering background to understand
                not just how AI systems behave, but why. We engineer your brand's visibility into
                the neural networks that now guide consumer decisions.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="relative rounded-2xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 px-7 py-6 mt-4">
              <div className="absolute -top-3 left-6 text-brand-blue text-4xl font-serif leading-none">"</div>
              <p className="text-text-primary font-medium text-base md:text-lg leading-relaxed italic pt-2">
                As a software engineer, I understand how AI systems are trained — not just how to
                game them. That's what makes AiAdSpace different.
              </p>
              <footer className="mt-3 text-text-muted text-sm font-medium">— Aayush Kumbhar, Founder</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-surface-card border border-surface-border p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-violet/8 blur-3xl pointer-events-none" />
          <p className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight max-w-3xl mx-auto">
            Our mission is to make sure your brand is the{" "}
            <GradientText>answer</GradientText> — not just an option.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="card-dark p-8 border-l-2 border-brand-blue/40">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-text-muted text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}