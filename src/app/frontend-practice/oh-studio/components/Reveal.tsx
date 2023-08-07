"use client";

import { Transition, motion } from "framer-motion";

export function RevealOnceVisible({
  transition,
  children,
  className,
}: {
  transition?: Transition;
  children: React.ReactNode;
  className?: string;
}) {
  const transitionSpread = transition ?? {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ...transitionSpread } as Transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  transition,
  children,
  className,
}: {
  transition?: Transition;
  children: React.ReactNode;
  className?: string;
}) {
  const transitionSpread = transition ?? {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ...transitionSpread } as Transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
