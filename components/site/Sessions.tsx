"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";
import BigButton from "./BigButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Sessions() {
  const { event } = siteData;

  return (
    <section id="sessions" className="relative border-t border-border">
      {/* Subtle red background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="04" label="SESSIONS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight text-[var(--text)] sm:text-[48px] lg:text-[72px]"
        >
          {siteData.brandName} Sessions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-4 text-base text-muted lg:text-lg"
        >
          Not a concert. Not a demo day. Something in between.
        </motion.p>

        {/* Event card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="relative mt-16 overflow-hidden border border-accent/30 bg-surface lg:mt-20"
        >
          {/* Red top bar */}
          <div className="h-1 w-full bg-accent" />

          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
            {/* Left: event info */}
            <div>
              <h3 className="text-[28px] font-bold uppercase tracking-tight text-[var(--text)] sm:text-[36px] lg:text-[48px]">
                {event.title}
              </h3>
              <p className="mt-4 text-lg font-light text-[var(--text)]">
                {event.theme}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {event.status}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {event.location}
                </span>
              </div>

              <div className="mt-10">
                <BigButton href="#join" variant="primary">
                  Request Invite
                </BigButton>
              </div>
            </div>

            {/* Right: schedule */}
            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Schedule
              </span>
              <div className="mt-6 space-y-0">
                {event.schedule.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-6 border-b border-border py-4 last:border-b-0"
                  >
                    <span className="w-14 shrink-0 font-mono text-sm tabular-nums text-accent">
                      {s.time}
                    </span>
                    <span className="text-sm text-[var(--text)]">{s.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative corner label */}
          <span className="absolute bottom-3 right-4 font-mono text-[8px] uppercase tracking-[0.3em] text-soft-muted">
            EVT.001
          </span>
        </motion.div>
      </div>
    </section>
  );
}
