"use client";

import { motion } from "framer-motion";

type VisualVariant = "joshua" | "anna" | "hero";

interface AbstractVisualProps {
  variant: VisualVariant;
  className?: string;
}

function JoshuaVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface rounded-sm">
      {/* Hairline grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`vl-${i}`}
            className="absolute top-0 bottom-0 w-px bg-[var(--text)]"
            style={{ left: `${(i + 1) * (100 / 13)}%` }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`hl-${i}`}
            className="absolute left-0 right-0 h-px bg-[var(--text)]"
            style={{ top: `${(i + 1) * (100 / 9)}%` }}
          />
        ))}
      </div>

      {/* Waveform lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,150 Q25,130 50,150 Q75,170 100,145 Q125,120 150,155 Q175,190 200,140 Q225,90 250,155 Q275,220 300,145 Q325,70 350,150 Q375,230 400,150"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          opacity={0.6}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,160 Q30,140 60,165 Q90,190 120,150 Q150,110 180,160 Q210,210 240,155 Q270,100 300,160 Q330,220 360,155 Q390,90 400,160"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.5"
          opacity={0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      {/* Red signal pulse */}
      <motion.div
        className="absolute top-[20%] left-[15%] h-2 w-2 rounded-full bg-accent"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Micro labels */}
      <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-soft-muted">
        REC
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-soft-muted">
        48kHz / 24bit
      </span>
      <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-accent opacity-70">
        LIVE
      </span>

      {/* Timeline bar */}
      <div className="absolute bottom-8 left-6 right-6 h-px bg-border">
        <motion.div
          className="absolute top-0 left-0 h-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "65%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function AnnaVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface rounded-sm">
      {/* Tactile grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        {Array.from({ length: 10 }).map((_, i) =>
          Array.from({ length: 10 }).map((_, j) => (
            <div
              key={`g-${i}-${j}`}
              className="absolute h-1 w-1 rounded-full bg-[var(--text)]"
              style={{
                left: `${(j + 1) * (100 / 11)}%`,
                top: `${(i + 1) * (100 / 11)}%`,
              }}
            />
          ))
        )}
      </div>

      {/* Movement traces */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.circle
          cx="200"
          cy="150"
          r="60"
          fill="none"
          stroke="var(--text)"
          strokeWidth="0.5"
          opacity={0.15}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.circle
          cx="200"
          cy="150"
          r="90"
          fill="none"
          stroke="var(--text)"
          strokeWidth="0.3"
          opacity={0.1}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M120,200 Q160,100 200,150 Q240,200 280,120 Q320,40 350,150"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      {/* Touch points */}
      {[
        { x: 30, y: 40, delay: 0 },
        { x: 55, y: 65, delay: 0.3 },
        { x: 70, y: 35, delay: 0.6 },
        { x: 45, y: 75, delay: 0.9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full border border-[var(--text)]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.6, delay: p.delay + 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Micro labels */}
      <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-soft-muted">
        HCI
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-soft-muted">
        TOUCH / SOUND
      </span>
      <span className="absolute top-3 right-3 font-mono text-[9px] text-accent opacity-60">
        &#9679;
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-sm border border-border bg-surface">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={`hv-${i}`}
            className="absolute top-0 bottom-0 w-px bg-[var(--text)]"
            style={{ left: `${(i + 1) * (100 / 17)}%` }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`hh-${i}`}
            className="absolute left-0 right-0 h-px bg-[var(--text)]"
            style={{ top: `${(i + 1) * (100 / 11)}%` }}
          />
        ))}
      </div>

      {/* Animated red signal */}
      <motion.div
        className="absolute top-[20%] left-0 right-0 h-px bg-accent opacity-40"
        animate={{ top: ["20%", "80%", "20%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blurred red orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-[0.08] blur-[60px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Signal waveform */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,150 Q30,120 60,150 Q90,180 120,140 Q150,100 180,160 Q210,220 240,140 Q270,60 300,150 Q330,240 360,140 Q390,40 420,150 Q450,260 500,150"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      {/* Corner coordinates */}
      <span className="absolute top-2 left-3 font-mono text-[8px] text-soft-muted">
        0,0
      </span>
      <span className="absolute top-2 right-3 font-mono text-[8px] text-soft-muted">
        1920,0
      </span>
      <span className="absolute bottom-2 left-3 font-mono text-[8px] text-soft-muted">
        0,1080
      </span>
      <span className="absolute bottom-2 right-3 font-mono text-[8px] text-soft-muted">
        SYS.01
      </span>

      {/* System label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted opacity-60">
          SIGNAL ACTIVE
        </span>
      </div>
    </div>
  );
}

export default function AbstractVisual({
  variant,
  className = "",
}: AbstractVisualProps) {
  return (
    <div className={className} aria-hidden="true">
      {variant === "joshua" && <JoshuaVisual />}
      {variant === "anna" && <AnnaVisual />}
      {variant === "hero" && <HeroVisual />}
    </div>
  );
}
