"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "./GeometryFrame";
import { AzvaCoreMark } from "./AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type OperatingConvergenceProps = {
  className?: string;
};

const inputs = [
  {
    label: "Experience",
    cx: 142,
    cy: 132,
    textX: 118,
    textY: 104,
    anchor: "end" as const,
    color: "var(--azva-accent)",
  },
  {
    label: "Judgment",
    cx: 378,
    cy: 132,
    textX: 402,
    textY: 104,
    anchor: "start" as const,
    color: "var(--azva-moss)",
  },
  {
    label: "Alignment",
    cx: 142,
    cy: 338,
    textX: 112,
    textY: 368,
    anchor: "end" as const,
    color: "var(--azva-primary)",
  },
  {
    label: "Execution",
    cx: 378,
    cy: 338,
    textX: 408,
    textY: 368,
    anchor: "start" as const,
    color: "var(--azva-accent)",
  },
];

export function OperatingConvergence({
  className,
}: OperatingConvergenceProps) {
  const reduceMotion = useReducedMotion();
  const instanceId = useId().replace(/:/g, "");
  const arrowId = `convergence-arrow-${instanceId}`;

  return (
    <GeometryFrame>
      <svg
        viewBox="0 0 520 520"
        className={cn(
          "h-full w-full max-w-[390px] sm:max-w-[430px]",
          className
        )}
        role="img"
        aria-label="Experience, judgment, alignment, and execution converge through the AZVA operating core to create enduring value"
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
            <path
              d="M0 0 L10 5 L0 10 Z"
              fill="var(--azva-accent)"
            />
          </marker>
        </defs>

        {/* Construction grid */}
        {[100, 180, 260, 340, 420].map((x) => (
          <line
            key={`vertical-${x}`}
            x1={x}
            y1="72"
            x2={x}
            y2="454"
            stroke="var(--azva-border)"
            strokeWidth="1"
            opacity="0.42"
          />
        ))}

        {[100, 180, 260, 340, 420].map((y) => (
          <line
            key={`horizontal-${y}`}
            x1="72"
            y1={y}
            x2="448"
            y2={y}
            stroke="var(--azva-border)"
            strokeWidth="1"
            opacity="0.36"
          />
        ))}

        {/* Enterprise context */}
        <circle
          cx="260"
          cy="250"
          r="166"
          fill="none"
          stroke="var(--azva-moss)"
          strokeWidth="1"
          opacity="0.2"
        />

        {/* Converging relationships */}
        {inputs.map((input, index) => (
          <motion.path
            key={`path-${input.label}`}
            d={`M${input.cx} ${input.cy} C${
              input.cx < 260 ? 190 : 330
            } ${input.cy}, ${
              input.cx < 260 ? 205 : 315
            } 250, 224 250`}
            fill="none"
            stroke={
              index === 0 || index === 3
                ? "var(--azva-accent)"
                : "var(--azva-primary)"
            }
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.82"
            initial={
              reduceMotion
                ? false
                : { pathLength: 0, opacity: 0 }
            }
            animate={
              reduceMotion
                ? undefined
                : { pathLength: 1, opacity: 0.82 }
            }
            transition={{
              duration: 0.8,
              ease,
              delay: 0.12 + index * 0.1,
            }}
          />
        ))}

        {/* Canonical AZVA operating core */}
        <foreignObject x="206" y="196" width="108" height="108">
          <AzvaCoreMark className="h-[108px] w-[108px]" />
        </foreignObject>

        {/* Value creation path */}
        <motion.path
          d="M260 304 L260 414"
          fill="none"
          stroke="var(--azva-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd={`url(#${arrowId})`}
          initial={
            reduceMotion
              ? false
              : { pathLength: 0, opacity: 0 }
          }
          animate={
            reduceMotion
              ? undefined
              : { pathLength: 1, opacity: 1 }
          }
          transition={{
            duration: 0.75,
            ease,
            delay: 0.62,
          }}
        />

        {/* Input nodes and outward-facing labels */}
        {inputs.map((input, index) => (
          <g key={input.label}>
            <motion.circle
              cx={input.cx}
              cy={input.cy}
              r="10"
              fill={input.color}
              initial={
                reduceMotion
                  ? false
                  : { scale: 0.8, opacity: 0 }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { scale: 1, opacity: 1 }
              }
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
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 4 }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
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

        {/* Enduring value outcome */}
        <motion.circle
          cx="260"
          cy="430"
          r="11"
          fill="var(--azva-accent)"
          initial={
            reduceMotion ? false : { scale: 0.8, opacity: 0 }
          }
          animate={
            reduceMotion ? undefined : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: 0.55,
            ease,
            delay: 0.78,
          }}
        />

        <motion.text
          x="260"
          y="472"
          textAnchor="middle"
          fill="var(--azva-primary)"
          fontSize="16"
          fontWeight="600"
          letterSpacing="-0.02em"
          initial={
            reduceMotion ? false : { opacity: 0, y: 4 }
          }
          animate={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          transition={{
            duration: 0.5,
            ease,
            delay: 0.84,
          }}
        >
          Enduring Value
        </motion.text>
      </svg>
    </GeometryFrame>
  );
}