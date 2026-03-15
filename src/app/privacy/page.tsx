import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-brand-blue/6 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <GradientText>Privacy Policy</GradientText>
          </h1>
          <p className="text-text-muted text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
        {[
          {
            title: "1. Information We Collect",
            content: `When you use AiAdSpace's website or services, we may collect the following information:
• Name, company name, and email address submitted through our contact or application forms
• Website URL and business details you provide when applying for our services
• Usage data such as pages visited and time spent on the site (via analytics tools)
• Device and browser information for improving site performance`,
          },
          {
            title: "2. How We Use Your Information",
            content: `We use the information we collect to:
• Respond to your enquiries and process service applications
• Send you the free AI Snapshot report you requested
• Communicate updates about our services or insights (only if you opt in)
• Improve the quality and performance of our website
We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
          },
          {
            title: "3. Data Storage",
            content: `Form submissions are stored securely in Google Sheets, accessible only to the AiAdSpace team. We use industry-standard practices to protect your data from unauthorised access. Data is retained only as long as necessary to provide you with our services.`,
          },
          {
            title: "4. Cookies",
            content: `Our website may use cookies to improve your browsing experience. Cookies are small text files stored on your device. You can choose to disable cookies through your browser settings, though this may affect some site functionality. See our Cookie Policy for more details.`,
          },
          {
            title: "5. Third-Party Services",
            content: `We use trusted third-party tools including Google Analytics (for usage tracking) and Google Sheets (for form data storage). These services have their own privacy policies which govern how they handle data.`,
          },
          {
            title: "6. Your Rights",
            content: `You have the right to:
• Request access to the personal data we hold about you
• Request correction or deletion of your data
• Opt out of any marketing communications at any time
To exercise any of these rights, contact us at hello@aiadspace.in`,
          },
          {
            title: "7. Contact Us",
            content: `If you have any questions about this Privacy Policy, please reach out:
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