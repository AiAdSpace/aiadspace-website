"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gradient" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "gradient",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    gradient:
      "bg-gradient-to-r from-brand-blue to-brand-violet text-white hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-violet-500/20",
    outline:
      "border border-surface-border text-text-primary hover:border-brand-blue/50 hover:bg-surface-card hover:-translate-y-0.5",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-surface-card",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const allStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={allStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allStyles}
    >
      {children}
    </button>
  );
}