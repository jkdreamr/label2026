"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ApplyModal from "./ApplyModal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function JoinSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPath, setModalPath] = useState<"artist" | "builder">("artist");

  function openModal(path: "artist" | "builder") {
    setModalPath(path);
    setModalOpen(true);
  }

  return (
    <>
      <section id="join" className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <SectionLabel index="05" label="JOIN" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight text-[var(--text)] sm:text-[48px] lg:text-[64px]"
          >
            Join the first circle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-4 max-w-xl text-base text-muted lg:text-lg"
          >
            We are looking for artists who build and builders who make art.
          </motion.p>

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
            {/* Artist card */}
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              onClick={() => openModal("artist")}
              className="group relative border border-border p-8 text-left transition-all duration-300 hover:border-accent/40 hover:bg-surface lg:p-10"
            >
              <div className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Path A
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-[var(--text)] lg:text-2xl">
                Apply as Artist
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                For musicians, visual artists, filmmakers, performers, designers,
                and hybrid creators.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-transform duration-300 group-hover:translate-x-1">
                Apply <span aria-hidden="true">&rarr;</span>
              </span>
            </motion.button>

            {/* Builder card */}
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              onClick={() => openModal("builder")}
              className="group relative border border-border p-8 text-left transition-all duration-300 hover:border-accent/40 hover:bg-surface lg:p-10"
            >
              <div className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-500 group-hover:h-full" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Path B
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-[var(--text)] lg:text-2xl">
                Apply as Builder
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                For engineers, creative technologists, VJs, editors,
                photographers, event producers, and people who can make strange
                ideas real.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-transform duration-300 group-hover:translate-x-1">
                Apply <span aria-hidden="true">&rarr;</span>
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      <ApplyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        path={modalPath}
        onPathChange={setModalPath}
      />
    </>
  );
}
