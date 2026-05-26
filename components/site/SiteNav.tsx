"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "@/lib/site-data";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] border-b border-border backdrop-blur-md bg-[rgba(11,11,10,0.85)]"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        <a
          href="#"
          className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-[var(--text)] transition-colors hover:text-accent"
        >
          {siteData.brandName}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {siteData.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full border border-accent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-[var(--text)]"
          >
            Apply
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-[var(--text)] transition-all duration-300 ${
                menuOpen ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[var(--nav-height)] z-40 flex flex-col items-start justify-start gap-6 bg-background px-8 pt-12 md:hidden"
          >
            {siteData.navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="text-3xl font-light tracking-tight text-[var(--text)] transition-colors hover:text-accent"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#join"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: siteData.navItems.length * 0.05,
                duration: 0.4,
              }}
              className="mt-4 rounded-full border border-accent px-8 py-3 text-lg text-accent transition-all hover:bg-accent hover:text-[var(--text)]"
            >
              Apply
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
