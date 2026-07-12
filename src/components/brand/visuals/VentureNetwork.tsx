"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "../frames/GeometryFrame";
import { AzvaCoreMark } from "../marks/AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type VentureNetworkProps = {
  className?: string;
};

const inputs = [
  {
    label: "Founder",
    cx: 130,
    cy: 138,
    textX: 106,
    textY: 108,
    anchor: "end" as const,
    color: "var(--azva-accent)",
  },
  {
    label: "Strategy",
    cx: 390,
    cy: 138,
    textX: 414,
    textY: 108,
    anchor: "start" as const,
    color: "var(--azva-moss)",
  },
  {
    label: "Capability",
    cx: 130,
    cy: 346,
    textX: 104,
    textY: 378,
    anchor: "end" as const,
    color: "var(--azva-primary)",
  },
  {
    label: "Capital",
    cx: 390,
    cy: 346,
    textX: 416,
    textY: 378,
    anchor: "start" as const,
    color: "var(--azva-accent)",
  },
];

export function VentureNetwork({ className }: VentureNetworkProps) {
  const reduceMotion = useReducedMotion();
  const instanceId = useId().replace(/:/g, "");
  const arrowId = `venture-arrow-${instanceId}`;

  return (
    <GeometryFrame className={className}>
      <svg
        viewBox="0 0 520 520"
        className="h-full w-full max-w-[390px] sm:max-w-[430px]"
        role="img"
        aria-label="Founder, strategy, capability, and capital converge through a shared operating core to create durable growth"
      >
        <defs>
          <marker
            id={arrowId}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="var(--azva-accent)" />
          </marker>
        </defs>

        {[100, 180, 260, 340, 420].map((x) => (
          <line
            key={`vx-${x}`}
            x1={x}
            y1="72"
            x2={x}
            y2="448"
            stroke="var(--azva-border)"
            strokeWidth="1"
            opacity="0.4"
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
            opacity="0.34"
          />
        ))}

        <circle
          cx="260"
          cy="250"
          r="166"
          fill="none"
          stroke="var(--azva-moss)"
          strokeWidth="1"
          opacity="0.18"
        />

        {inputs.map((input, index) => (
          <motion.path
            key={`line-${input.label}`}
            d={`M${input.cx} ${input.cy} C${
              input.cx < 260 ? 192 : 328
            } ${input.cy}, ${
              input.cx < 260 ? 204 : 316
            } 250, ${input.cx < 260 ? 224 : 296} 250`}
            fill="none"
            stroke={input.color}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.82"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { pathLength: 1, opacity: 0.82 }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.12 + index * 0.1,
            }}
          />
        ))}

        <foreignObject x="206" y="196" width="108" height="108">
          <AzvaCoreMark className="h-[108px] w-[108px]" />
        </foreignObject>

        <motion.path
          d="M260 304 L260 412"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd={`url(#${arrowId})`}
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease, delay: 0.62 }}
        />

        {inputs.map((input, index) => (
          <g key={input.label}>
            <motion.circle
              cx={input.cx}
              cy={input.cy}
              r="10"
              fill={input.color}
              initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
              animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease,
                delay: 0.18 + index * 0.1,
              }}
            />
            <motion.text
              x={input.textX}
              y={input.textY}
              textAnchor={input.anchor}
              fill="var(--azva-primary)"
              fontSize="15"
              fontWeight="600"
              letterSpacing="-0.02em"
              initial={reduceMotion ? false : { opacity: 0, y: 4 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease,
                delay: 0.25 + index * 0.1,
              }}
            >
              {input.label}
            </motion.text>
          </g>
        ))}

        <motion.circle
          cx="260"
          cy="430"
          r="11"
          fill="var(--azva-accent)"
          initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
          animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease, delay: 0.78 }}
        />

        <motion.text
          x="260"
          y="474"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="16"
          fontWeight="600"
          letterSpacing="-0.02em"
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.84 }}
        >
          Durable Growth
        </motion.text>
      </svg>
    </GeometryFrame>
  );
}
