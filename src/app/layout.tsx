import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiAdSpace — AI Search & Visibility Agency",
  description:
    "We help brands get discovered on ChatGPT, Perplexity, and AI-powered search engines. AI Visibility Audits, AEO Optimization, and ChatGPT Ad Strategy.",
  keywords: [
    "AI advertising",
    "ChatGPT ads",
    "Answer Engine Optimization",
    "AEO",
    "AI visibility",
    "Perplexity ads",
    "AI search marketing",
    "India AI agency",
  ],
  authors: [{ name: "AiAdSpace" }],
  creator: "AiAdSpace",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aiadspace.in",
    siteName: "AiAdSpace",
    title: "AiAdSpace — AI Search & Visibility Agency",
    description:
      "Be found where AI answers. We help brands get discovered on ChatGPT, Perplexity, and AI-powered search engines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiAdSpace — AI Search & Visibility Agency",
    description:
      "Be found where AI answers. AI Visibility Audits, AEO Optimization & ChatGPT Ad Strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-surface text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}