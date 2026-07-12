"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { azvaMotion } from "@/lib/motion";

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionCard({ children, className }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("azva-motion-card", className)}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.006 }}
      transition={{
        duration: azvaMotion.duration.fast,
        ease: azvaMotion.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
