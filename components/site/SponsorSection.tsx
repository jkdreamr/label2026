"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

const sponsorOptions = [
  "Event partner",
  "Content partner",
  "Tool partner",
  "Founding patron",
];

export default function SponsorSection() {
  return (
    <section className="border-t border-border bg-light-bg text-light-text">
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="06" label="PARTNERS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight sm:text-[48px] lg:text-[64px]"
        >
          Partner with the next creative medium.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-light-muted lg:text-lg"
        >
          {siteData.brandName} gives brands access to artists, builders, cultural
          tastemakers, and live experiences at the edge of music, art, and
          technology.
        </motion.p>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {sponsorOptions.map((opt) => (
            <span
              key={opt}
              className="rounded-full border border-light-text/20 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-light-text/80"
            >
              {opt}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-12"
        >
          <a
            href={`mailto:${siteData.sponsorEmail}`}
            className="inline-flex items-center justify-center rounded-full border border-light-text bg-light-text px-8 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-light-bg transition-all duration-300 hover:bg-transparent hover:text-light-text"
          >
            {siteData.sponsorEmail}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
