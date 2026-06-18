"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export default function MagneticButton({
  href,
  children,
  variant = "dark",
}: MagneticButtonProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.22 }}
    >
      <Link
        href={href}
        data-cursor="hover"
        className={
          isDark
            ? "inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:shadow-xl active:shadow-lg"
            : "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:shadow-xl active:shadow-lg"
        }
      >
        {children}
        <motion.span
          aria-hidden="true"
          whileHover={{ x: 3, y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={18} />
        </motion.span>
      </Link>
    </motion.div>
  );
}