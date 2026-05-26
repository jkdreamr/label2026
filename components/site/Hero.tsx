"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import BigButton from "./BigButton";
import AbstractVisual from "./AbstractVisual";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-[var(--nav-height)]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10">
        {/* Top label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          Label / Collective / Creative Lab
        </motion.span>

        {/* Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mb-6 text-[21vw] font-bold leading-[0.85] tracking-tighter text-[var(--text)] md:text-[16vw] lg:text-[13vw]"
        >
          {siteData.brandName}
        </motion.h1>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mb-4 text-[32px] font-light leading-[1.15] tracking-tight text-[var(--text)] sm:text-[44px] lg:text-[56px] xl:text-[64px]"
            >
              {siteData.shortTagline}
            </motion.p>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mb-10 max-w-xl text-base leading-relaxed text-muted lg:text-lg"
            >
              Music, visuals, performance, and technology from artists building
              their own systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease }}
              className="flex flex-wrap gap-4"
            >
              <BigButton href="#join" variant="primary">
                Apply to Join
              </BigButton>
              <BigButton
                href={`mailto:${siteData.sponsorEmail}`}
                variant="secondary"
              >
                Sponsor a Session
              </BigButton>
            </motion.div>
          </div>

          {/* Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="lg:col-span-5"
          >
            <AbstractVisual
              variant="hero"
              className="aspect-[4/3] w-full lg:aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
