import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  AEO: "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
  "AI Ads": "text-brand-violet border-brand-violet/30 bg-brand-violet/10",
  Strategy: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
};

export default function InsightsPage() {
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
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="card-dark rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 group"
            >
              {/* Gradient Thumbnail */}
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-surface-card/40" />
                <div className="relative flex flex-col items-center gap-2">
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

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-text-primary font-bold text-lg mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
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
            <NewsletterForm />
            <p className="text-text-muted text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function NewsletterForm() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your work email"
        className="flex-1 px-4 py-3 rounded-full bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
      />
      <Button href="/apply" variant="gradient" size="md">
        Subscribe Now →
      </Button>
    </div>
  );
}