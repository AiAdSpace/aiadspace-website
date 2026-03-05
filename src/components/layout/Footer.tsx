import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/aiadspace-logo-v3.svg"
                alt="AiAdSpace"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Leading brands into the era of AI-powered search. We ensure your
              brand is the answer, not just an option.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <Link
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand-blue transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand-blue transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2026 AiAdSpace. All rights reserved. Built for the AI era.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-text-muted text-xs">
              AI Platforms Monitored Live
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}