"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type MarkProps = {
  className?: string;
  animated?: boolean;
};

function MarkShell({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={title}
    >
      {children}
    </svg>
  );
}

export function AzvaMarkConvergence({
  className,
  animated = true,
}: MarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <MarkShell className={className} title="AZVA convergence mark">
      {/* Navy convergence structure */}
      <motion.path
        d="M34 34 L80 80 L126 34"
        fill="none"
        stroke="var(--azva-primary)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.7, ease }}
      />

      <motion.path
        d="M34 126 L80 80 L126 126"
        fill="none"
        stroke="var(--azva-primary)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.7, ease, delay: 0.12 }}
      />

      {/* Copper axis, exactly centered on the lower-left to upper-right navy diagonal */}
      <motion.path
        d="M58 102 L102 58"
        fill="none"
        stroke="var(--azva-accent)"
        strokeWidth="9"
        strokeLinecap="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.65, ease, delay: 0.22 }}
      />
    </MarkShell>
  );
}

export function AzvaMarkAxis({
  className,
  animated = true,
}: MarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <MarkShell className={className} title="AZVA axis mark">
      <motion.rect
        x="30"
        y="30"
        width="100"
        height="100"
        rx="28"
        fill="var(--azva-primary)"
        initial={shouldAnimate ? { scale: 0.94, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.6, ease }}
        style={{ transformOrigin: "80px 80px" }}
      />

      <motion.path
        d="M48 112 L112 48"
        fill="none"
        stroke="var(--azva-accent)"
        strokeWidth="12"
        strokeLinecap="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.7, ease, delay: 0.18 }}
      />

      <motion.circle
        cx="48"
        cy="112"
        r="7"
        fill="var(--azva-canvas)"
        initial={shouldAnimate ? { scale: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.4, ease, delay: 0.5 }}
      />

      <motion.circle
        cx="112"
        cy="48"
        r="7"
        fill="var(--azva-canvas)"
        initial={shouldAnimate ? { scale: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.4, ease, delay: 0.58 }}
      />
    </MarkShell>
  );
}

export function AzvaMarkMonogram({
  className,
  animated = true,
}: MarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <MarkShell className={className} title="AZVA monogram mark">
      <motion.path
        d="M28 118 L62 48 L82 88"
        fill="none"
        stroke="var(--azva-primary)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.75, ease }}
      />

      <motion.path
        d="M78 50 H128 L84 112 H132"
        fill="none"
        stroke="var(--azva-accent)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.75, ease, delay: 0.14 }}
      />
    </MarkShell>
  );
}