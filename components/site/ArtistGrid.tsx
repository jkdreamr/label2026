"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";
import ArtistCard from "./ArtistCard";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ArtistGrid() {
  return (
    <section id="artists" className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="02" label="ARTISTS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight text-[var(--text)] sm:text-[48px] lg:text-[64px]"
        >
          Founding artists.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-4 text-base text-muted lg:text-lg"
        >
          Two artists to start. More soon.
        </motion.p>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2">
          {siteData.artists.map((artist, i) => (
            <ArtistCard key={artist.name} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
