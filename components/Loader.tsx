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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f4f4f1]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none text-center text-[clamp(3rem,13vw,12rem)] font-black uppercase leading-none tracking-[-0.08em]"
          >
            <span className="outline-text block">{profile.firstName}</span>
            <span className="block text-black">{profile.lastName}</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-10 left-1/2 h-px w-40 origin-left -translate-x-1/2 bg-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}