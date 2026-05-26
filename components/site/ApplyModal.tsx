"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "@/lib/site-data";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
  path: "artist" | "builder";
  onPathChange: (p: "artist" | "builder") => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function ApplyModal({
  open,
  onClose,
  path,
  onPathChange,
}: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => firstInputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to Tally, Airtable, Supabase, Google Forms, or a custom API route
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === overlayRef.current) handleClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Apply as ${path}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border bg-surface p-8 lg:p-10"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-[var(--text)]"
              aria-label="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 2l12 12M14 2L2 14" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 h-[2px] w-12 bg-accent" />
                <p className="text-lg text-[var(--text)]">
                  Received. We&apos;ll reach out if there is a fit.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {siteData.brandName} / Apply
                </span>
                <h2 className="mt-4 text-2xl font-medium tracking-tight text-[var(--text)]">
                  Apply as {path === "artist" ? "Artist" : "Builder"}
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <Field
                    label="Name"
                    name="name"
                    required
                    ref={firstInputRef}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Role" name="role" required />

                  {/* Path toggle */}
                  <div>
                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      Path
                    </label>
                    <div className="flex gap-3">
                      {(["artist", "builder"] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => onPathChange(p)}
                          className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-all ${
                            path === p
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border text-muted hover:border-border-strong"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Field label="Links" name="links" placeholder="Portfolio, GitHub, social, etc." />
                  <Field
                    label="What are you building?"
                    name="building"
                    multiline
                    required
                  />
                  <Field
                    label="Why does this matter for your art?"
                    name="why"
                    multiline
                  />

                  <button
                    type="submit"
                    className="mt-4 w-full rounded-full bg-accent py-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text)] transition-colors hover:bg-accent-dark"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Reusable field ──────────────────────────────────────────── */
import { forwardRef } from "react";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, name, type = "text", required = false, placeholder, multiline },
  ref,
) {
  const baseClass =
    "w-full border border-border bg-transparent px-4 py-3 text-sm text-[var(--text)] placeholder:text-soft-muted transition-colors focus:border-accent focus:outline-none";

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className={`${baseClass} resize-y`}
        />
      ) : (
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
});
