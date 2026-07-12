"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * AZVA Core Mark geometry
 *
 * Canvas:        160 × 160
 * Core:          112 × 112
 * Core radius:   30
 * Axis angle:    45°
 * Ivory channel: 20
 * Copper axis:   10
 *
 * The channel and copper axis share the same centerline.
 * The copper axis terminates inside the channel at both ends.
 */

const CORE = {
  x: 24,
  y: 24,
  size: 112,
  radius: 30,
};

const CHANNEL = {
  startX: 18,
  startY: 142,
  endX: 142,
  endY: 18,
  width: 20,
};

const COPPER_AXIS = {
  startX: 43,
  startY: 117,
  endX: 117,
  endY: 43,
  width: 10,
};

const HIGHLIGHT = {
  startX: 48,
  startY: 112,
  endX: 112,
  endY: 48,
  width: 2,
};

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

  // Prevent SVG definition collisions when several marks appear on one page.
  const instanceId = useId().replace(/:/g, "");
  const glowId = `azva-core-glow-${instanceId}`;
  const clipId = `azva-core-clip-${instanceId}`;

  return (
    <svg
      viewBox="0 0 160 160"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={title}
    >
      <defs>
        <filter
          id={glowId}
          x="-45%"
          y="-45%"
          width="190%"
          height="190%"
        >
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              0 0 0 0 0.71
              0 0 0 0 0.43
              0 0 0 0 0.27
              0 0 0 0.22 0
            "
          />
          <feBlend in="SourceGraphic" />
        </filter>

        <clipPath id={clipId}>
          <rect
            x={CORE.x}
            y={CORE.y}
            width={CORE.size}
            height={CORE.size}
            rx={CORE.radius}
          />
        </clipPath>
      </defs>

      {/* Operating core */}
      <motion.rect
        x={CORE.x}
        y={CORE.y}
        width={CORE.size}
        height={CORE.size}
        rx={CORE.radius}
        fill="var(--azva-primary)"
        filter={`url(#${glowId})`}
        initial={shouldAnimate ? { scale: 0.95, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.65, ease }}
        style={{ transformOrigin: "80px 80px" }}
      />

      <g clipPath={`url(#${clipId})`}>
        {/* Precisely centered ivory alignment channel */}
        <motion.path
          d={`M${CHANNEL.startX} ${CHANNEL.startY} L${CHANNEL.endX} ${CHANNEL.endY}`}
          fill="none"
          stroke="var(--azva-canvas)"
          strokeWidth={CHANNEL.width}
          strokeLinecap="round"
          initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
          animate={
            shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined
          }
          transition={{ duration: 0.72, ease, delay: 0.18 }}
        />

        {/* Copper axis, sharing the exact channel centerline */}
        <motion.path
          d={`M${COPPER_AXIS.startX} ${COPPER_AXIS.startY} L${COPPER_AXIS.endX} ${COPPER_AXIS.endY}`}
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth={COPPER_AXIS.width}
          strokeLinecap="round"
          initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
          animate={
            shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined
          }
          transition={{ duration: 0.68, ease, delay: 0.32 }}
        />

        {/* Controlled highlight, centered within the copper axis */}
        <motion.path
          d={`M${HIGHLIGHT.startX} ${HIGHLIGHT.startY} L${HIGHLIGHT.endX} ${HIGHLIGHT.endY}`}
          fill="none"
          stroke="var(--azva-canvas)"
          strokeWidth={HIGHLIGHT.width}
          strokeLinecap="round"
          opacity="0.62"
          initial={shouldAnimate ? { pathLength: 0 } : false}
          animate={shouldAnimate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.55, ease, delay: 0.54 }}
        />
      </g>
    </svg>
  );
}