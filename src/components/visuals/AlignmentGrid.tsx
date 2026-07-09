"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GeometryFrame } from "./GeometryFrame";

const ease = [0.22, 1, 0.36, 1] as const;

export function AlignmentGrid() {
  const reduceMotion = useReducedMotion();

  const lineMotion = reduceMotion
    ? {}
    : {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 1.4, ease },
      };

  const nodeMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 0.94, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.7, ease, delay: 0.35 },
      };

  return (
    <GeometryFrame>
      <svg
        viewBox="0 0 520 520"
        className="h-full w-full max-w-[430px]"
        role="img"
        aria-label="Alignment geometry showing strategy, operations, technology, and capital converging into value"
      >
        <defs>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.71 0 0 0 0 0.43 0 0 0 0 0.27 0 0 0 0.32 0"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        {[80, 160, 240, 320, 400].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="60"
            x2={x}
            y2="460"
            stroke="var(--azva-border)"
            strokeWidth="1"
          />
        ))}

        {[80, 160, 240, 320, 400].map((y) => (
          <line
            key={`h-${y}`}
            x1="60"
            y1={y}
            x2="460"
            y2={y}
            stroke="var(--azva-border)"
            strokeWidth="1"
          />
        ))}

        <rect
          x="72"
          y="72"
          width="376"
          height="376"
          rx="34"
          fill="none"
          stroke="var(--azva-border)"
          strokeWidth="1.2"
        />

        <motion.path
          d="M140 150 L260 260 L380 150"
          fill="none"
          stroke="var(--azva-moss)"
          strokeWidth="2"
          strokeLinecap="round"
          {...lineMotion}
        />
        <motion.path
          d="M140 370 L260 260 L380 370"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          {...lineMotion}
        />
        <motion.path
          d="M140 150 L140 370 M380 150 L380 370"
          fill="none"
          stroke="var(--azva-border)"
          strokeWidth="1.5"
          strokeLinecap="round"
          {...lineMotion}
        />

        <motion.rect
          x="206"
          y="206"
          width="108"
          height="108"
          rx="26"
          fill="var(--azva-primary)"
          filter="url(#softGlow)"
          {...nodeMotion}
        />

        {[
          { cx: 140, cy: 150, fill: "var(--azva-accent)" },
          { cx: 380, cy: 150, fill: "var(--azva-moss)" },
          { cx: 140, cy: 370, fill: "var(--azva-primary)" },
          { cx: 380, cy: 370, fill: "var(--azva-accent)" },
        ].map((node, index) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r="9"
            fill={node.fill}
            initial={reduceMotion ? false : { scale: 0.94, opacity: 0 }}
            animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 0.7, ease, delay: 0.45 + index * 0.08 }
            }
          />
        ))}

        <circle
          cx="260"
          cy="260"
          r="156"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="1"
          opacity="0.22"
        />
      </svg>
    </GeometryFrame>
  );
}