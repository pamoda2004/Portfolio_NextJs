"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionParallaxWord from "./SectionParallaxWord";

export default function ServicesAccordion() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 768;
      setActive(isMobile ? 0 : null);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 text-[var(--foreground)] transition-colors md:py-24"
    >
      <SectionParallaxWord text="Service" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-[260px] w-[260px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
        <div className="absolute bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
      </div>

      <div className="container-main relative">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 transition-colors dark:text-neutral-400">
            /Service
          </p>

          <h2 className="mb-8 text-[clamp(2.5rem,9vw,4.5rem)] font-black uppercase leading-none tracking-[-0.03em] text-black transition-colors dark:text-[#f4f4f1] md:mb-10 md:text-6xl">
            What I Do
          </h2>
        </Reveal>

        <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/80 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:rounded-[2rem] md:p-5">
          {services.map((service, index) => {
            const isOpen = active === index;

            return (
              <div
                key={service.title}
                onMouseEnter={() => {
                  if (window.innerWidth >= 768) {
                    setActive(index);
                  }
                }}
                className="group border-b border-black/10 transition-colors last:border-b-0 dark:border-white/10"
              >
                {/* Always visible row */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  onFocus={() => setActive(index)}
                  className={
                    isOpen
                      ? "flex w-full items-center justify-between gap-5 px-3 py-6 text-left transition-colors md:px-5 md:py-7"
                      : "flex w-full items-center justify-between gap-5 px-3 py-6 text-left transition hover:bg-black/[0.035] dark:hover:bg-white/[0.06] md:px-5 md:py-7"
                  }
                >
                  <span
                    className={
                      isOpen
                        ? "text-[clamp(1.05rem,3.2vw,2.15rem)] font-medium uppercase leading-none tracking-[-0.03em] text-black transition-colors dark:text-[#f4f4f1]"
                        : "text-[clamp(1.15rem,3.6vw,2.25rem)] font-normal uppercase leading-none tracking-[-0.03em] text-black transition duration-300 group-hover:translate-x-2 dark:text-[#f4f4f1]"
                    }
                  >
                    {service.title}
                  </span>

                  <span
                    className={
                      isOpen
                        ? "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
                        : "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white/60 text-black shadow-sm transition group-hover:bg-black group-hover:text-white dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:group-hover:bg-[#f4f4f1] dark:group-hover:text-black"
                    }
                  >
                    {isOpen ? (
                      <X size={26} strokeWidth={1.9} />
                    ) : (
                      <ArrowUpRight size={26} strokeWidth={1.9} />
                    )}
                  </span>
                </button>

                {/* Smooth loading content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="service-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 28, scale: 0.985, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 18, scale: 0.985, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mb-4 overflow-hidden rounded-[0.95rem] border border-black/10 bg-[#252523] px-5 py-8 text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-colors dark:border-white/10 dark:bg-[#151515] dark:shadow-[0_18px_45px_rgba(0,0,0,0.4)] md:px-7 md:py-10"
                      >
                        {/* Tilted image card */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -30,
                            rotate: 10,
                            scale: 0.92,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            rotate: 7,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: -20,
                            rotate: 10,
                            scale: 0.92,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.16,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="pointer-events-none absolute right-7 top-[-18px] hidden w-[230px] overflow-hidden rounded-sm border border-black/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-[#f4f4f1] md:block lg:w-[280px]"
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={520}
                            height={360}
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </motion.div>

                        <div className="pointer-events-none absolute right-0 top-0 h-40 w-64 rounded-full bg-white/10 blur-3xl dark:bg-white/[0.08]" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-64 rounded-full bg-white/[0.06] blur-3xl dark:bg-white/[0.04]" />

                        <div className="relative z-10 max-w-2xl pr-0 md:pr-52 lg:pr-64">
                          <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.18 }}
                            className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/45 dark:text-white/40"
                          >
                            Featured Service
                          </motion.p>

                          <motion.h3
                            initial={{
                              opacity: 0,
                              y: 18,
                              filter: "blur(8px)",
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{ duration: 0.45, delay: 0.22 }}
                            className="text-[clamp(1.25rem,4vw,2.45rem)] font-medium uppercase leading-none tracking-[-0.01em] text-white"
                          >
                            {service.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.3 }}
                            className="mt-5 max-w-xl text-sm leading-7 text-white/72 md:text-base md:leading-7"
                          >
                            {service.description}
                          </motion.p>
                        </div>

                        {/* Mobile image */}
                        <motion.div
                          initial={{ opacity: 0, y: 18, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.34, duration: 0.45 }}
                          className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={520}
                            height={360}
                            className="aspect-[16/9] w-full object-cover"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}