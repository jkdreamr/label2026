"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhatWeDo() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="01" label="WHAT WE DO" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight text-[var(--text)] sm:text-[48px] lg:text-[64px]"
        >
          What we build around.
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {siteData.whatWeDo.map((card, i) => (
            <motion.div
              key={card.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group relative border border-border p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface lg:p-8"
            >
              {/* Red hover line */}
              <div className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />

              <span className="font-mono text-[11px] text-muted">
                {card.index}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-[var(--text)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
