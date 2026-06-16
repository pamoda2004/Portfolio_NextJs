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
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={
          isDark
            ? "inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:shadow-xl"
            : "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:shadow-xl"
        }
      >
        {children}
        <ArrowUpRight size={18} />
      </Link>
    </motion.div>
  );
}