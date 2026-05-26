"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/site-data";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    /* TODO: Link to future project detail pages */
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-1 items-start gap-4 border-b border-border py-8 transition-colors duration-300 hover:bg-surface/60 sm:grid-cols-12 sm:items-center sm:gap-6 lg:py-10"
    >
      {/* Red accent on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Index */}
      <span className="pl-4 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-accent sm:col-span-1">
        {num}
      </span>

      {/* Title */}
      <h3 className="pl-4 text-xl font-medium tracking-tight text-[var(--text)] sm:col-span-4 lg:text-2xl">
        {project.title}
      </h3>

      {/* Type */}
      <span className="pl-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:col-span-3">
        {project.type}
      </span>

      {/* Description */}
      <p className="pl-4 pr-4 text-sm leading-relaxed text-muted sm:col-span-4">
        {project.description}
      </p>
    </motion.div>
  );
}
