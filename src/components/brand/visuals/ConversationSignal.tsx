"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "../frames/GeometryFrame";
import { AzvaCoreMark } from "../marks/AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type ConversationSignalProps = {
  className?: string;
};

export function ConversationSignal({ className }: ConversationSignalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <GeometryFrame className={className}>
      <svg
        viewBox="0 0 520 520"
        className="h-full w-full max-w-[390px] sm:max-w-[430px]"
        role="img"
        aria-label="Two perspectives connect through a shared operating core and create a clearer path forward"
      >
        {[100, 180, 260, 340, 420].map((x) => (
          <line
            key={`vx-${x}`}
            x1={x}
            y1="72"
            x2={x}
            y2="448"
            stroke="var(--azva-border)"
            strokeWidth="1"
            opacity="0.34"
          />
        ))}

        {[100, 180, 260, 340, 420].map((y) => (
          <line
            key={`hy-${y}`}
            x1="72"
            y1={y}
            x2="448"
            y2={y}
            stroke="var(--azva-border)"
            strokeWidth="1"
            opacity="0.28"
          />
        ))}

        <circle
          cx="260"
          cy="250"
          r="166"
          fill="none"
          stroke="var(--azva-moss)"
          strokeWidth="1"
          opacity="0.16"
        />

        <motion.circle
          cx="126"
          cy="196"
          r="12"
          fill="var(--azva-accent)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.12 }}
        />

        <motion.circle
          cx="126"
          cy="304"
          r="12"
          fill="var(--azva-moss)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        />

        <motion.path
          d="M140 196 C190 196, 194 250, 224 250"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="2.3"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 0.84 }}
          transition={{ duration: 0.72, ease, delay: 0.22 }}
        />

        <motion.path
          d="M140 304 C190 304, 194 250, 224 250"
          fill="none"
          stroke="var(--azva-moss)"
          strokeWidth="2.3"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 0.84 }}
          transition={{ duration: 0.72, ease, delay: 0.3 }}
        />

        <foreignObject x="206" y="196" width="108" height="108">
          <AzvaCoreMark className="h-[108px] w-[108px]" />
        </foreignObject>

        <motion.path
          d="M314 250 C354 250, 372 250, 412 250"
          fill="none"
          stroke="var(--azva-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.72, ease, delay: 0.58 }}
        />

        <motion.circle
          cx="426"
          cy="250"
          r="12"
          fill="var(--azva-primary)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.7 }}
        />

        <text
          x="126"
          y="166"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
        >
          Context
        </text>

        <text
          x="126"
          y="342"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
        >
          Intent
        </text>

        <motion.text
          x="426"
          y="286"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.78 }}
        >
          Clarity
        </motion.text>
      </svg>
    </GeometryFrame>
  );
}
