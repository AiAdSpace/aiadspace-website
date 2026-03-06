"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientText from "@/components/ui/GradientText";
import { Shield, Clock, Zap, CheckCircle, AlertCircle } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyFiqw3JL46rG4yMn5kITFWt-QY3yFfP8v0q3xIXk1FLQNaHVu6UzAVRgfgtf7GyZMx6w/exec";

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

const helpOptions = [
  "AI Visibility Audit",
  "AEO Optimization",
  "ChatGPT Ads",
  "Monthly Reporting",
  "Full Strategy",
];

const howHeardOptions = [
  "Google Search",
  "LinkedIn",
  "Twitter / X",
  "Referral",
  "Instagram",
  "Other",
];

const trustSignals = [
  { icon: <Shield size={18} />, label: "No Long-Term Lock-in" },
  { icon: <Clock size={18} />, label: "Response Within 24hrs" },
  { icon: <Zap size={18} />, label: "India's First AEO Agency" },
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    budget: "",
    helpWith: [] as string[],
    brandInfo: "",
    howHeard: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleHelpToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      helpWith: prev.helpWith.includes(option)
        ? prev.helpWith.filter((o) => o !== option)
        : [...prev.helpWith, option],
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.company || !formData.website || !formData.budget || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          helpWith: formData.helpWith.join(", "),
        }),
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-surface">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Application Received!
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Thank you for applying to work with AiAdSpace. We review every
              application personally and will get back to you within 24 hours
              at {formData.email}.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-12 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-violet/8 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <GradientText>Apply to Work With Us</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-3">
            We work with a select number of brands each month. Tell us about
            your business and your vision for the AI era.
          </p>
          <div className="inline-flex items-center gap-2 text-brand-blue text-sm">
            <Clock size={14} />
            Typically respond within 24 hours.
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <div className="gradient-border p-8 md:p-10 space-y-6">

          {/* Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                Company Name *
              </label>
              <input
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Website URL *
            </label>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Monthly Marketing Budget *
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-surface-card">Select budget range</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-surface-card">{opt}</option>
              ))}
            </select>
          </div>

          {/* Help With */}
          <div>
            <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
              What Do You Need Help With?
            </label>
            <div className="flex flex-wrap gap-2">
              {helpOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleHelpToggle(opt)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    formData.helpWith.includes(opt)
                      ? "bg-gradient-to-r from-brand-blue to-brand-violet text-white border-transparent"
                      : "border-surface-border text-text-secondary hover:border-brand-blue/40 hover:text-text-primary"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Info */}
          <div>
            <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Tell Us About Your Brand
            </label>
            <textarea
              rows={4}
              placeholder="Describe your goals, target audience, and current challenges..."
              value={formData.brandInfo}
              onChange={(e) => setFormData({ ...formData, brandInfo: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
            />
          </div>

          {/* How Heard */}
          <div>
            <label className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">
              How Did You Hear About Us?
            </label>
            <select
              value={formData.howHeard}
              onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-text-primary text-sm focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-surface-card">Choose one...</option>
              {howHeardOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-surface-card">{opt}</option>
              ))}
            </select>
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle size={16} />
              Something went wrong. Please try again.
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === "loading" ? "Submitting..." : "Submit Application →"}
          </button>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-surface-border">
            {trustSignals.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1.5">
                <div className="text-brand-blue">{item.icon}</div>
                <div className="text-text-muted text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}