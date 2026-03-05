"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export default function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={`bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}