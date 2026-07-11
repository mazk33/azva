"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GeometryFrame } from "./GeometryFrame";
import { AzvaCoreMark } from "./AzvaCoreMark";

const ease = [0.22, 1, 0.36, 1] as const;

type ConfidenceMatrixProps = {
    className?: string;
};

const signals = [
    {
        label: "Feasibility",
        cx: 118,
        cy: 124,
        textX: 94,
        textY: 96,
        anchor: "end" as const,
        color: "var(--azva-moss)",
    },
    {
        label: "Value",
        cx: 118,
        cy: 244,
        textX: 88,
        textY: 250,
        anchor: "end" as const,
        color: "var(--azva-accent)",
    },
    {
        label: "Realization",
        cx: 118,
        cy: 364,
        textX: 94,
        textY: 394,
        anchor: "end" as const,
        color: "var(--azva-primary)",
    },
];

export function ConfidenceMatrix({
    className,
}: ConfidenceMatrixProps) {
    const reduceMotion = useReducedMotion();
    const instanceId = useId().replace(/:/g, "");
    const arrowId = `confidence-arrow-${instanceId}`;

    return (
        <div
            className={cn(
                "card-azva relative block aspect-square w-full overflow-hidden bg-[var(--azva-canvas)]",
                "min-h-[340px] sm:min-h-[440px] lg:min-h-[560px]",
                className
            )}
        >
            <GeometryFrame>
                <svg
                    viewBox="0 0 520 520"
                    className={cn(
                        "h-full w-full max-w-[390px] sm:max-w-[430px]",
                        className
                    )}
                    role="img"
                    aria-label="Feasibility, value, and realization signals converge through PRIZM into a measurable confidence score"
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
                            y2="448"
                            stroke="var(--azva-border)"
                            strokeWidth="1"
                            opacity="0.4"
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
                            opacity="0.34"
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
                        opacity="0.18"
                    />

                    {/* Signal paths */}
                    {signals.map((signal, index) => (
                        <motion.path
                            key={signal.label}
                            d={`M${signal.cx} ${signal.cy} C190 ${signal.cy}, 190 250, 224 250`}
                            fill="none"
                            stroke={signal.color}
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
                                duration: 0.78,
                                ease,
                                delay: 0.12 + index * 0.12,
                            }}
                        />
                    ))}

                    {/* PRIZM operating core */}
                    <foreignObject x="206" y="196" width="108" height="108">
                        <AzvaCoreMark className="h-[108px] w-[108px]" />
                    </foreignObject>

                    {/* Confidence output */}
                    <motion.path
                        d="M314 250 L402 250"
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
                            duration: 0.72,
                            ease,
                            delay: 0.58,
                        }}
                    />

                    {/* Input nodes and labels */}
                    {signals.map((signal, index) => (
                        <g key={signal.label}>
                            <motion.circle
                                cx={signal.cx}
                                cy={signal.cy}
                                r="10"
                                fill={signal.color}
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
                                    delay: 0.18 + index * 0.12,
                                }}
                            />

                            <motion.text
                                x={signal.textX}
                                y={signal.textY}
                                textAnchor={signal.anchor}
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
                                    delay: 0.24 + index * 0.12,
                                }}
                            >
                                {signal.label}
                            </motion.text>
                        </g>
                    ))}

                    {/* Confidence score */}
                    <motion.circle
                        cx="420"
                        cy="250"
                        r="42"
                        fill="var(--azva-primary)"
                        initial={
                            reduceMotion
                                ? false
                                : { scale: 0.9, opacity: 0 }
                        }
                        animate={
                            reduceMotion
                                ? undefined
                                : { scale: 1, opacity: 1 }
                        }
                        transition={{
                            duration: 0.58,
                            ease,
                            delay: 0.68,
                        }}
                    />

                    <motion.text
                        x="420"
                        y="244"
                        textAnchor="middle"
                        fill="var(--azva-canvas)"
                        fontSize="16"
                        fontWeight="600"
                        initial={
                            reduceMotion
                                ? false
                                : { opacity: 0 }
                        }
                        animate={
                            reduceMotion
                                ? undefined
                                : { opacity: 1 }
                        }
                        transition={{
                            duration: 0.45,
                            ease,
                            delay: 0.78,
                        }}
                    >
                        ACI
                    </motion.text>

                    <motion.text
                        x="420"
                        y="268"
                        textAnchor="middle"
                        fill="var(--azva-accent)"
                        fontSize="21"
                        fontWeight="700"
                        initial={
                            reduceMotion
                                ? false
                                : { opacity: 0 }
                        }
                        animate={
                            reduceMotion
                                ? undefined
                                : { opacity: 1 }
                        }
                        transition={{
                            duration: 0.45,
                            ease,
                            delay: 0.84,
                        }}
                    >
                        87
                    </motion.text>

                    <motion.text
                        x="420"
                        y="322"
                        textAnchor="middle"
                        fill="var(--azva-primary)"
                        fontSize="16"
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
                            delay: 0.9,
                        }}
                    >
                        Confidence
                    </motion.text>
                </svg>
            </GeometryFrame>
        </div>
    );
}