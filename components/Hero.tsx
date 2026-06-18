"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-32 md:min-h-screen md:pb-10">
      <div className="container-main">
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-full leading-[0.95] tracking-[-0.035em] sm:leading-[0.9] md:tracking-[-0.05em]"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8 }}
              className="outline-text block text-[clamp(2.45rem,12vw,6.4rem)] font-black uppercase tracking-[-0.03em] sm:text-[clamp(3.4rem,11vw,8.8rem)] md:tracking-[-0.06em]"
            >
              {profile.firstName}
            </motion.span>

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8 }}
              className="block text-[clamp(2.45rem,12vw,6.4rem)] font-black uppercase tracking-[-0.035em] text-black sm:text-[clamp(3.4rem,11vw,8.8rem)] md:tracking-[-0.065em]"
            >
              {profile.lastName}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-2xl text-[0.95rem] leading-7 text-neutral-600 sm:text-base md:mt-8 md:text-lg md:leading-8"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-7 flex flex-wrap gap-3 md:mt-8"
          >
            <a
              href="/cv/Pamoda-Jayathilaka-CV.pdf"
              download
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-xl active:scale-95 sm:px-6"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>

            <MagneticButton href="/contact" variant="light">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.8,
              },
            },
          }}
          className="mt-8 flex flex-nowrap items-center gap-5 overflow-x-auto border-t border-black/10 pt-4 scrollbar-hide sm:gap-4 md:mt-12 md:pt-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              href={link.href}
              className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-black sm:text-sm sm:tracking-widest"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}