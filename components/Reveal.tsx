"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClassName = `transition-colors duration-300 ${className}`;

  if (shouldReduceMotion) {
    return <div className={baseClassName}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={baseClassName}
    >
      {children}
    </motion.div>
  );
}