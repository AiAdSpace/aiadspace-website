import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

const stats = [
  { value: "10+", label: "AI Platforms Monitored" },
  { value: "2025", label: "Founded" },
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

      {/* Founder Story */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Avatar */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 border-2 border-brand-blue/40 flex items-center justify-center text-5xl">
              👤
            </div>
            <div>
              <div className="text-text-primary font-semibold text-lg">Aayush Kumbhar</div>
              <div className="text-brand-blue text-sm">Founder, AiAdSpace</div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-2 space-y-5 text-text-secondary leading-relaxed">
            <p>
              For over a decade, the digital world operated on a simple premise:
              you ask a search engine a question, it gives you ten blue links,
              and you do the work of finding the answer. As a developer building
              tools for this ecosystem, I saw the cracks forming early. When
              Large Language Models emerged, the paradigm didn't just
              shift — it shattered.
            </p>
            <p>
              I realized that brands were still pouring millions into SEO
              strategies designed for a 2010 internet. They were optimizing for
              clicks while the world was moving toward answers. If ChatGPT or
              Perplexity is the interface, being 'on the first page' of Google
              is no longer the win. Being the data source the AI trusts is the
              only win.
            </p>
            <p>
              I built AiAdSpace to solve this specific, growing gap. We don't
              just 'rank' your brand — we engineer its visibility into the
              neural networks that now guide consumer decisions. We are moving
              beyond keywords into the era of semantic authority and AI-native
              brand recognition.
            </p>
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
            <div
              key={stat.label}
              className="card-dark p-8 border-l-2 border-brand-blue/40"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}