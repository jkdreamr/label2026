"use client";

import { type ReactNode } from "react";

interface BigButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

export default function BigButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: BigButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-[var(--text)] border border-accent hover:bg-accent-dark hover:border-accent-dark",
    secondary:
      "bg-transparent text-[var(--text)] border border-border-strong hover:bg-[rgba(244,240,232,0.06)] hover:border-[var(--text)]",
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
