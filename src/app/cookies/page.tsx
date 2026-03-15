import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-500/6 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-card text-text-secondary text-xs font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <GradientText>Cookie Policy</GradientText>
          </h1>
          <p className="text-text-muted text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
        {[
          {
            title: "1. What Are Cookies?",
            content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and understand how you interact with the site, making your experience smoother and more personalised.`,
          },
          {
            title: "2. How We Use Cookies",
            content: `AiAdSpace uses cookies for the following purposes:
• Essential cookies: Required for the website to function correctly (e.g. navigation, form submissions)
• Analytics cookies: Help us understand how visitors use our site so we can improve it (via Google Analytics)
• Preference cookies: Remember your settings and preferences for future visits
We do not use cookies to track you across other websites or serve you targeted advertisements.`,
          },
          {
            title: "3. Types of Cookies We Use",
            content: `Session cookies: Temporary cookies that are deleted when you close your browser. Used to maintain your session while browsing our site.

Persistent cookies: Remain on your device for a set period. Used by analytics tools to recognise returning visitors and understand usage patterns.

Third-party cookies: Set by services like Google Analytics. These are governed by the respective third party's privacy policy.`,
          },
          {
            title: "4. Managing Cookies",
            content: `You can control and manage cookies through your browser settings. Most browsers allow you to:
• View cookies stored on your device
• Delete all or specific cookies
• Block cookies from all or specific websites
• Set preferences for cookie acceptance

Please note that disabling certain cookies may affect the functionality of our website. To manage cookies, refer to your browser's help documentation:
• Chrome: Settings → Privacy and Security → Cookies
• Firefox: Options → Privacy & Security → Cookies
• Safari: Preferences → Privacy → Cookies
• Edge: Settings → Cookies and Site Permissions`,
          },
          {
            title: "5. Google Analytics",
            content: `We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymous information such as number of visitors, pages viewed, and time spent on the site. This data helps us improve our website and content.

You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.`,
          },
          {
            title: "6. Updates to This Policy",
            content: `We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with a revised date.`,
          },
          {
            title: "7. Contact Us",
            content: `If you have any questions about our use of cookies, please contact us:
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