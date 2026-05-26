"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative border-t border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="00" label="MANIFESTO" />
        </motion.div>

        {/* Red accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 h-[2px] bg-accent"
        />

        <div className="mt-16 space-y-3 lg:mt-20">
          {siteData.manifestoLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="text-[28px] font-light leading-[1.2] tracking-tight text-[var(--text)] sm:text-[36px] lg:text-[52px] xl:text-[64px]"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: siteData.manifestoLines.length * 0.08 + 0.1,
            ease,
          }}
          className="mt-16 max-w-2xl text-base leading-relaxed text-muted lg:mt-20 lg:text-lg"
        >
          {siteData.manifestoParagraph}
        </motion.p>
      </div>
    </section>
  );
}
