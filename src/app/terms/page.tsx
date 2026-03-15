import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-brand-violet/6 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <GradientText>Terms of Service</GradientText>
          </h1>
          <p className="text-text-muted text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
        {[
          {
            title: "1. Acceptance of Terms",
            content: `By accessing or using AiAdSpace's website (aiadspace.in) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.`,
          },
          {
            title: "2. Services",
            content: `AiAdSpace provides Answer Engine Optimization (AEO) consulting and execution services, including AI visibility audits, content optimisation, and AI search strategy. The scope of services is defined in your individual service agreement or the plan you select.`,
          },
          {
            title: "3. Client Responsibilities",
            content: `As a client, you agree to:
• Provide accurate and complete information about your brand and business
• Grant AiAdSpace reasonable access to necessary materials (website, brand assets, content) to perform the services
• Communicate feedback in a timely manner to ensure effective delivery
• Not use our services for any unlawful or unethical purpose`,
          },
          {
            title: "4. Payment Terms",
            content: `Payment is due as per the plan selected:
• Starter plan: Full payment due before work begins
• Growth and Scale plans: Monthly payment due at the start of each billing cycle
• All prices are in Indian Rupees (INR) and exclusive of applicable taxes
• Failure to make timely payment may result in suspension of services`,
          },
          {
            title: "5. Cancellation & Refunds",
            content: `• Monthly plans (Growth, Scale) can be cancelled with 30 days written notice
• The Starter one-time audit is non-refundable once work has commenced
• AiAdSpace reserves the right to cancel services and issue a prorated refund if we are unable to deliver the agreed scope`,
          },
          {
            title: "6. Results & Guarantees",
            content: `AiAdSpace applies proven methodologies to improve your brand's AI search visibility. However, we cannot guarantee specific outcomes as AI platforms (ChatGPT, Perplexity, Gemini, etc.) operate independently and update their systems at their own discretion. We track and report measurable progress every month.`,
          },
          {
            title: "7. Intellectual Property",
            content: `All strategies, reports, and content created by AiAdSpace for your brand become your property upon full payment. AiAdSpace retains the right to reference the engagement (without disclosing confidential information) for marketing purposes, unless you request otherwise in writing.`,
          },
          {
            title: "8. Limitation of Liability",
            content: `AiAdSpace shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability in any case is limited to the amount paid for the service in question.`,
          },
          {
            title: "9. Changes to Terms",
            content: `We may update these Terms of Service from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new terms.`,
          },
          {
            title: "10. Contact",
            content: `For any questions about these Terms, contact us at:
Email: hello@aiadspace.in
Phone: +91 89287 39373`,
          },
        ].map((section, i) => (
          <div key={i} className="card-dark rounded-2xl p-8">
            <h2 className="text-text-primary font-bold text-lg mb-4">{section.title}</h2>
            <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}