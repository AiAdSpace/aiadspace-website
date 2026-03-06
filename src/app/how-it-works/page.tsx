import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { Search, Map, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "AI Visibility Audit",
    description:
      "We scan 10+ AI platforms including ChatGPT, Perplexity, and Gemini to see if your brand shows up when customers ask relevant questions. We identify authority gaps and find exactly why you're being left out.",
    icon: <Search size={28} className="text-brand-blue" />,
    phase: "Phase 01",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48">
          {/* Radar/scan visual */}
          <div className="absolute inset-0 rounded-full border border-brand-blue/20 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-4 rounded-full border border-brand-blue/30" />
          <div className="absolute inset-8 rounded-full border border-brand-violet/30" />
          <div className="absolute inset-12 rounded-full border border-brand-blue/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Search size={32} className="text-brand-blue opacity-80" />
          </div>
          {/* Dots */}
          <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <div className="absolute bottom-10 left-6 w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 left-4 w-1 h-1 rounded-full bg-brand-blue animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Custom AI Strategy",
    description:
      "We build your AEO content plan, ChatGPT ad strategy, and prompt targeting map. We don't just optimize for keywords — we optimize for intent and conversational triggers tailored to your industry.",
    icon: <Map size={28} className="text-brand-violet" />,
    phase: "Phase 02",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-52 h-44">
          {/* Strategy map nodes */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-brand-blue" />
          </div>
          {/* Lines */}
          <div className="absolute top-14 left-1/2 w-px h-6 bg-gradient-to-b from-brand-blue/40 to-transparent -translate-x-1/2" />
          <div className="absolute top-20 left-1/4 w-1/2 h-px bg-gradient-to-r from-brand-blue/20 via-brand-violet/40 to-brand-blue/20" />
          {/* Child nodes */}
          <div className="absolute bottom-8 left-6 w-8 h-8 rounded-full bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-brand-violet" />
          </div>
          <div className="absolute bottom-8 right-6 w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-brand-blue" />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-brand-violet opacity-60" />
          </div>
          <p className="absolute bottom-0 left-0 right-0 text-center text-text-muted text-xs tracking-widest uppercase">Prompt Targeting Blocks</p>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Launch, Measure, Improve",
    description:
      "We execute the strategy, track your AI visibility score monthly, and continuously optimize. Our proprietary analytics dashboard shows you exactly how much 'Share of Answer' your brand is capturing.",
    icon: <Rocket size={28} className="text-brand-blue" />,
    phase: "Phase 03",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-52 h-44">
          {/* Bar chart */}
          <div className="absolute top-2 right-4 text-xs text-brand-blue font-bold tracking-wider">AI VISIBILITY +240%</div>
          <div className="absolute bottom-6 left-4 right-4 flex items-end gap-2 h-28">
            {[30, 40, 55, 50, 65, 75, 90, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, #3B82F6, #8B5CF6)`,
                  opacity: 0.3 + (i * 0.09),
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-2 left-4 right-4 h-px bg-surface-border" />
        </div>
      </div>
    ),
  },
];

const journeySteps = [
  { label: "Scan & Detect", icon: <Search size={18} /> },
  { label: "Map & Target", icon: <Map size={18} /> },
  { label: "Deploy & Scale", icon: <Rocket size={18} /> },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            Methodology
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            From <em className="not-italic text-text-secondary">Invisible</em> to{" "}
            <GradientText>Inevitable</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Three precision steps to make your brand the definitive answer AI
            gives to your customers.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-24">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Text */}
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <div className="text-7xl font-bold gradient-text leading-none mb-4">
                {step.number}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {step.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {step.description}
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-muted text-xs">
                {step.phase}
              </span>
            </div>

            {/* Visual */}
            <div
              className={`rounded-2xl border border-surface-border bg-surface-card h-56 overflow-hidden ${
                index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >
              {step.visual}
            </div>
          </div>
        ))}
      </section>

      {/* Journey to Dominance */}
      <section className="section-padding border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
              The Journey to Dominance
            </h2>
            <p className="text-text-secondary text-sm">
              A unified workflow designed for the AI-first era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeySteps.map((item, i) => (
              <div
                key={i}
                className="card-dark p-8 flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 border border-surface-border flex items-center justify-center text-brand-blue">
                  {item.icon}
                </div>
                <div className="text-text-muted text-xs uppercase tracking-widest">
                  Step 0{i + 1}
                </div>
                <div className="text-text-primary font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-surface-card p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to be the{" "}
              <GradientText>Only Answer AI Gives?</GradientText>
            </h2>
            <p className="text-text-secondary text-base mb-8 max-w-xl mx-auto">
              Our initial visibility audit is the first step toward reclaiming
              your brand's presence in the conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/apply" variant="gradient" size="lg">
                Start with an Audit →
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Pricing Plans
              </Button>
            </div>
            <p className="text-text-muted text-xs mt-6">
              ✦ Optimized for LLMs &nbsp;·&nbsp; ✦ No Contract
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}