"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { azvaMotion } from "@/lib/motion";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

type StaggerProps = MotionProps & {
  stagger?: number;
};

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: azvaMotion.distance.standard }
      }
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={azvaMotion.viewport}
      transition={{
        duration: azvaMotion.duration.medium,
        ease: azvaMotion.ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: azvaMotion.distance.generous }
      }
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-110px" }}
      transition={{
        duration: azvaMotion.duration.slow,
        ease: azvaMotion.ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Lift({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{
        duration: azvaMotion.duration.fast,
        ease: azvaMotion.ease,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = azvaMotion.stagger.standard,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={azvaMotion.viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: reduceMotion ? 0 : stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion
          ? {}
          : { opacity: 0, y: azvaMotion.distance.subtle },
        visible: reduceMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: azvaMotion.duration.medium,
                ease: azvaMotion.ease,
              },
            },
      }}
    >
      {children}
    </motion.div>
  );
}
