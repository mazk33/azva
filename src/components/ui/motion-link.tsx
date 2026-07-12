"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { azvaMotion } from "@/lib/motion";

type MotionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const AnimatedLink = motion.create(Link);

export function MotionLink({
  href,
  children,
  className,
}: MotionLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedLink
      href={href}
      className={className}
      whileHover={reduceMotion ? undefined : { x: 3 }}
      transition={{
        duration: azvaMotion.duration.fast,
        ease: azvaMotion.ease,
      }}
    >
      {children}
    </AnimatedLink>
  );
}
