"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type AzvaCoreMarkProps = {
  className?: string;
  animated?: boolean;
  title?: string;
};

export function AzvaCoreMark({
  className,
  animated = true,
  title = "AZVA operating core",
}: AzvaCoreMarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  return (
    <svg
      viewBox="0 0 160 160"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={title}
    >
      <defs>
        <filter id="azvaCoreGlow" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0 0 0 0 0.71
              0 0 0 0 0.43
              0 0 0 0 0.27
              0 0 0 0.28 0
            "
          />
          <feBlend in="SourceGraphic" />
        </filter>

        <clipPath id="azvaCoreClip">
          <rect x="20" y="20" width="120" height="120" rx="28" />
        </clipPath>
      </defs>

      {/* Operating core */}
      <motion.rect
        x="20"
        y="20"
        width="120"
        height="120"
        rx="28"
        fill="var(--azva-primary)"
        filter="url(#azvaCoreGlow)"
        initial={shouldAnimate ? { scale: 0.94, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.65, ease }}
        style={{ transformOrigin: "80px 80px" }}
      />

      {/* Ivory negative-space cuts derived from the open AZVA letterforms */}
      <g clipPath="url(#azvaCoreClip)">
        <motion.path
          d="M6 138 L54 90 L54 138 Z"
          fill="var(--azva-canvas)"
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          transition={{ duration: 0.45, ease, delay: 0.28 }}
        />

        <motion.path
          d="M154 2 L106 50 L106 2 Z"
          fill="var(--azva-canvas)"
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          transition={{ duration: 0.45, ease, delay: 0.28 }}
        />
      </g>

      {/* Copper Z-axis */}
      <motion.path
        d="M48 116 L112 44"
        fill="none"
        stroke="var(--azva-accent)"
        strokeWidth="10"
        strokeLinecap="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.75, ease, delay: 0.18 }}
      />

      {/* Fine ivory highlight, preserving the layered accent in the logo */}
      <motion.path
        d="M55 111 L105 55"
        fill="none"
        stroke="var(--azva-canvas)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.72"
        initial={shouldAnimate ? { pathLength: 0 } : false}
        animate={shouldAnimate ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.65, ease, delay: 0.48 }}
      />
    </svg>
  );
}