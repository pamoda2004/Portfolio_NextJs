"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 0);

    const endTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 750);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key={pathname}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[9998] origin-bottom bg-black text-white transition-colors dark:bg-[#f4f4f1] dark:text-black"
        >
          {/* Soft glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl dark:bg-black/[0.06] sm:h-[360px] sm:w-[360px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="relative flex h-full items-center justify-center px-6 text-center text-xs font-black uppercase tracking-[0.35em] text-white/85 dark:text-black/75 sm:text-sm sm:tracking-[0.4em]"
          >
            Loading
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-10 left-1/2 h-px w-32 origin-left -translate-x-1/2 bg-white/70 dark:bg-black/60 sm:w-40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}