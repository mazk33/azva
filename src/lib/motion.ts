export const azvaMotion = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.22,
    medium: 0.52,
    slow: 0.78,
  },
  distance: {
    subtle: 10,
    standard: 18,
    generous: 28,
  },
  stagger: {
    tight: 0.06,
    standard: 0.1,
    relaxed: 0.14,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
} as const;
