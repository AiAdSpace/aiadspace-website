import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { Check, Shield, Search, Target, BarChart3 } from "lucide-react";
import { SERVICES, FAQ } from "@/lib/constants";

const trustItems = [
  { icon: <Shield size={20} />, label: "Privacy First", desc: "Compliant with all AI safety protocols" },
  { icon: <Search size={20} />, label: "10+ Platforms", desc: "Visibility across GPT, Claude, Perplexity" },
  { icon: <Target size={20} />, label: "Targeted AEO", desc: "Zero-waste semantic optimization" },
  { icon: <BarChart3 size={20} />, label: "Real-time ROI", desc: "Monthly visibility lift reports" },
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
              {/* Most Popular Badge */}
              {service.highlighted && service.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-violet shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-text-primary font-bold text-xl mb-2">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">
                    {service.price}
                  </span>
                  <span className="text-text-muted text-sm">
                    {service.period}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        service.highlighted
                          ? "text-brand-blue"
                          : "text-brand-violet"
                      }`}
                    />
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href="/apply"
                variant={service.highlighted ? "gradient" : "outline"}
                fullWidth
              >
                {service.cta}
              </Button>
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

      {/* FAQ Section */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Common Questions
          </h2>
          <p className="text-text-secondary">
            Everything you need to know about the future of AI search
            visibility.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ.map((item, i) => (
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
              Schedule a free 15-minute AI visibility strategy call and we'll
              help you map out the best path forward.
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

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-surface-border rounded-xl bg-surface-card overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
        <span className="text-text-primary font-medium text-sm md:text-base">
          {question}
        </span>
        <span className="text-text-muted group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0">
          ▾
        </span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}