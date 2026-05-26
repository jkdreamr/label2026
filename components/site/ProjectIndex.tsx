"use client";

import { motion } from "framer-motion";
import siteData from "@/lib/site-data";
import SectionLabel from "./SectionLabel";
import ProjectRow from "./ProjectRow";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectIndex() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-44">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <SectionLabel index="03" label="PROJECTS" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-8 text-[36px] font-light leading-[1.1] tracking-tight text-[var(--text)] sm:text-[48px] lg:text-[64px]"
        >
          Projects as systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-4 text-base text-muted lg:text-lg"
        >
          Each project shows the work and the tool behind it.
        </motion.p>

        <div className="mt-16 border-t border-border lg:mt-20">
          {siteData.projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
