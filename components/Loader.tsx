"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("portfolio-loader-shown");

    if (alreadyShown) {
      const frame = requestAnimationFrame(() => {
        setShowLoader(false);
      });

      return () => cancelAnimationFrame(frame);
    }

    sessionStorage.setItem("portfolio-loader-shown", "true");

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed left-0 top-0 z-[9999] h-[280vh] w-full overflow-hidden bg-[#f4f4f1] text-black transition-colors dark:bg-[#0f0f0f] dark:text-[#f4f4f1] md:h-[200vh]"
        >
          {/* First screen content only */}
          <div className="relative flex h-screen items-center justify-center overflow-hidden px-4">
            {/* Soft glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.04] blur-3xl dark:bg-white/[0.055] sm:h-[420px] sm:w-[420px]" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none relative z-10 text-center text-[clamp(3rem,13vw,12rem)] font-black uppercase leading-none tracking-[-0.08em]"
            >
              <span className="outline-text block">{profile.firstName}</span>

              <span className="block text-black transition-colors dark:text-[#f4f4f1]">
                {profile.lastName}
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-10 left-1/2 h-px w-32 origin-left -translate-x-1/2 bg-black/75 transition-colors dark:bg-white/70 sm:w-40"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}