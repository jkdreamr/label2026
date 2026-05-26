"use client";

import { motion } from "framer-motion";
import type { Artist } from "@/lib/site-data";
import AbstractVisual from "./AbstractVisual";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

export default function ArtistCard({ artist, index }: ArtistCardProps) {
  const variant = index === 0 ? "joshua" : "anna";
  const isExternal = artist.link.startsWith("http");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden border border-border transition-colors duration-300 hover:border-border-strong"
    >
      {/* Abstract visual */}
      <AbstractVisual
        variant={variant}
        className="aspect-[16/10] w-full"
      />

      {/* Content */}
      <div className="relative border-t border-border p-6 lg:p-8">
        {/* Red hover line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />

        <span className="inline-block rounded-sm bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
          {artist.status}
        </span>

        <h3 className="mt-4 text-2xl font-medium tracking-tight text-[var(--text)]">
          {artist.name}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          {artist.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {artist.focus}
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-soft-muted">
          {artist.location}
        </p>

        {/* Link */}
        {artist.link !== "#" ? (
          <a
            href={artist.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
          >
            View Work
            <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
            View Work
            <span aria-hidden="true">&rarr;</span>
          </span>
        )}
      </div>
    </motion.article>
  );
}
