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
            ? "inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] active:shadow-lg dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)] dark:hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)]"
            : "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-6 py-3 text-sm font-semibold text-black shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:border-black/20 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)] active:shadow-lg dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] dark:shadow-[0_14px_35px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.12] dark:hover:shadow-[0_18px_50px_rgba(0,0,0,0.42)]"
        }
      >
        {children}

        <motion.span
          aria-hidden="true"
          whileHover={{ x: 3, y: -3 }}
          transition={{ duration: 0.2 }}
          className="grid h-5 w-5 place-items-center"
        >
          <ArrowUpRight size={18} strokeWidth={2.4} />
        </motion.span>
      </Link>
    </motion.div>
  );
}