"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "./GeometryFrame";
import { AzvaCoreMark } from "./AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type SystemsFlowProps = {
    className?: string;
};

const stages = [
    {
        label: "Experience",
        cx: 260,
        cy: 94,
        labelY: 62,
        color: "var(--azva-accent)",
    },
    {
        label: "Judgment",
        cx: 260,
        cy: 202,
        labelY: 176,
        color: "var(--azva-moss)",
    },
    {
        label: "Enduring Value",
        cx: 260,
        cy: 430,
        labelY: 474,
        color: "var(--azva-accent)",
    },
];

export function SystemsFlow({ className }: SystemsFlowProps) {
    const reduceMotion = useReducedMotion();

    return (
        <GeometryFrame>
            <svg
                viewBox="0 0 520 520"
                className={cn(
                    "h-full w-full max-w-[390px] sm:max-w-[430px]",
                    className
                )}
                role="img"
                aria-label="Experience becomes judgment, judgment creates alignment, and alignment compounds into enduring value"
            >
                <defs>
                    <filter
                        id="systemsFlowGlow"
                        x="-40%"
                        y="-40%"
                        width="180%"
                        height="180%"
                    >
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="
                0 0 0 0 0.71
                0 0 0 0 0.43
                0 0 0 0 0.27
                0 0 0 0.26 0
              "
                        />
                        <feBlend in="SourceGraphic" />
                    </filter>

                    <marker
                        id="flowArrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto-start-reverse"
                    >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--azva-border)" />
                    </marker>
                </defs>

                {/* construction grid */}
                {[140, 200, 260, 320, 380].map((x) => (
                    <line
                        key={`vertical-${x}`}
                        x1={x}
                        y1="54"
                        x2={x}
                        y2="466"
                        stroke="var(--azva-border)"
                        strokeWidth="1"
                        opacity="0.42"
                    />
                ))}

                {[94, 202, 318, 430].map((y) => (
                    <line
                        key={`horizontal-${y}`}
                        x1="92"
                        y1={y}
                        x2="428"
                        y2={y}
                        stroke="var(--azva-border)"
                        strokeWidth="1"
                        opacity="0.36"
                    />
                ))}

                {/* contextual field */}
                <circle
                    cx="260"
                    cy="260"
                    r="154"
                    fill="none"
                    stroke="var(--azva-moss)"
                    strokeWidth="1"
                    opacity="0.2"
                />

                {/* single directional path */}
                <motion.path
                    d="M260 110 L260 184"
                    fill="none"
                    stroke="var(--azva-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    markerEnd="url(#flowArrow)"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease, delay: 0.1 }}
                />

                <motion.path
                    d="M260 218 L260 264"
                    fill="none"
                    stroke="var(--azva-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    markerEnd="url(#flowArrow)"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease, delay: 0.3 }}
                />

                <motion.path
                    d="M260 372 L260 412"
                    fill="none"
                    stroke="var(--azva-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    markerEnd="url(#flowArrow)"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease, delay: 0.5 }}
                />

                {/* alignment operating core */}
                <g transform="translate(206 264)">
                    <foreignObject width="108" height="108">
                        <AzvaCoreMark className="h-[108px] w-[108px]" />
                    </foreignObject>
                </g>

                <motion.text
                    x="260"
                    y="324"
                    textAnchor="middle"
                    fill="var(--azva-canvas)"
                    fontSize="17"
                    fontWeight="600"
                    letterSpacing="-0.02em"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={reduceMotion ? undefined : { opacity: 1 }}
                    transition={{ duration: 0.55, ease, delay: 0.52 }}
                >
                    Alignment
                </motion.text>

                {/* stages */}
                {stages.map((stage, index) => (
                    <g key={stage.label}>
                        <motion.circle
                            cx={stage.cx}
                            cy={stage.cy}
                            r="10"
                            fill={stage.color}
                            initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
                            animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.55,
                                ease,
                                delay: 0.18 + index * 0.16,
                            }}
                        />

                        <motion.text
                            x="260"
                            y={stage.labelY}
                            textAnchor="middle"
                            fill="var(--azva-primary)"
                            fontSize="16"
                            fontWeight="600"
                            letterSpacing="-0.02em"
                            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease,
                                delay: 0.25 + index * 0.16,
                            }}
                        >
                            {stage.label}
                        </motion.text>
                    </g>
                ))}
            </svg>
        </GeometryFrame>
    );
}