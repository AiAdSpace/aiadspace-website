import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { Search, Target, Zap, ArrowRight } from "lucide-react";
import { VALUE_PROPS, STATS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={22} className="text-brand-blue" />,
  Target: <Target size={22} className="text-brand-violet" />,
  Zap: <Zap size={22} className="text-brand-blue" />,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg grid-bg overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            Next-Gen AI Marketing Agency
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            Advertise Where
            <br />
            <GradientText>Conversations Happen</GradientText>
          </h1>

          {/* Subheadline */}
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We help brands get discovered on ChatGPT, Perplexity, and
            AI-powered search engines. Stop chasing keywords. Start being the
            answer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/apply" variant="gradient" size="lg">
              Apply Now
            </Button>
            <Button href="/how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.title}
              className="card-dark gradient-border p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center mb-5">
                {iconMap[prop.icon]}
              </div>
              <h3 className="text-text-primary font-semibold text-lg mb-3">
                {prop.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            3 Simple Steps
          </h2>
          <p className="text-text-secondary text-base">
            Our methodology for AI dominance.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Audit",
                desc: "We analyse your current AI visibility score and competitor landscape.",
              },
              {
                number: "2",
                title: "Strategy",
                desc: "Custom prompt targeting maps and AEO content architecture.",
              },
              {
                number: "3",
                title: "Launch & Optimize",
                desc: "Continuous monitoring and refinement of your brand mentions.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10 ${
                    i === 0
                      ? "bg-gradient-to-r from-brand-blue to-brand-violet shadow-lg shadow-brand-blue/30"
                      : "bg-surface-card border border-surface-border text-text-secondary"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-surface-border bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden gradient-border p-12 md:p-16 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-violet/10 blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to be found where AI answers?
            </h2>
            <p className="text-text-secondary text-base mb-8 max-w-xl mx-auto">
              Join the waitlist for our next cohort of brands ready for AI
              search dominance. Limited availability.
            </p>
            <Button href="/apply" variant="gradient" size="lg">
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}