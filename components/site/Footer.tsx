"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        {/* Red signal line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-12 h-px bg-accent"
        />

        {/* Large wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-[18vw] font-bold leading-[0.85] tracking-tighter text-[var(--text)] opacity-[0.08] sm:text-[14vw] lg:text-[10vw]"
        >
          {siteData.brandName}
        </motion.p>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {siteData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${siteData.contactEmail}`}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            Contact
          </a>
          <a
            href="#join"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            Apply
          </a>
          <a
            href={`mailto:${siteData.sponsorEmail}`}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            Sponsor
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-10 font-mono text-[11px] tracking-[0.1em] text-soft-muted">
          &copy; 2026 {siteData.brandName}. {siteData.shortTagline}
        </p>
      </div>
    </footer>
  );
}
