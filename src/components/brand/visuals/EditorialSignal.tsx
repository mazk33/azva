"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "../frames/GeometryFrame";
import { AzvaCoreMark } from "../marks/AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type EditorialSignalProps = {
  className?: string;
};

const signals = [
  { x: 118, y: 142, color: "var(--azva-moss)" },
  { x: 118, y: 250, color: "var(--azva-accent)" },
  { x: 118, y: 358, color: "var(--azva-primary)" },
];

export function EditorialSignal({ className }: EditorialSignalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <GeometryFrame className={className}>
      <svg
        viewBox="0 0 520 520"
        className="h-full w-full max-w-[390px] sm:max-w-[430px]"
        role="img"
        aria-label="Independent signals become patterns, perspective, and clearer judgment"
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
            opacity="0.36"
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
            opacity="0.3"
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

        {signals.map((signal, index) => (
          <g key={signal.y}>
            <motion.circle
              cx={signal.x}
              cy={signal.y}
              r="9"
              fill={signal.color}
              initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
              animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.14 + index * 0.12 }}
            />
            <motion.path
              d={`M${signal.x + 12} ${signal.y} C190 ${signal.y}, 196 250, 224 250`}
              fill="none"
              stroke={signal.color}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={reduceMotion ? undefined : { pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.75, ease, delay: 0.2 + index * 0.12 }}
            />
          </g>
        ))}

        <foreignObject x="206" y="196" width="108" height="108">
          <AzvaCoreMark className="h-[108px] w-[108px]" />
        </foreignObject>

        <motion.path
          d="M314 250 C350 250, 360 196, 402 196"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.72, ease, delay: 0.62 }}
        />

        <motion.path
          d="M314 250 C350 250, 360 304, 402 304"
          fill="none"
          stroke="var(--azva-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.72"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 0.72 }}
          transition={{ duration: 0.72, ease, delay: 0.7 }}
        />

        <motion.circle
          cx="414"
          cy="196"
          r="11"
          fill="var(--azva-accent)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.78 }}
        />
        <motion.circle
          cx="414"
          cy="304"
          r="11"
          fill="var(--azva-primary)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.86 }}
        />

        <motion.text
          x="414"
          y="168"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.86 }}
        >
          Perspective
        </motion.text>

        <motion.text
          x="414"
          y="344"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.94 }}
        >
          Judgment
        </motion.text>

        <text
          x="118"
          y="104"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="15"
          fontWeight="600"
        >
          Signals
        </text>
      </svg>
    </GeometryFrame>
  );
}
