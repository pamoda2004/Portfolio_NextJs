"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { useState } from "react";
import Reveal from "./Reveal";

export default function ServicesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[18vw] font-black uppercase leading-none text-black/[0.035]">
        Service
      </div>

      <div className="container-main relative">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            /Service
          </p>
          <h2 className="mb-12 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            What I Do
          </h2>
        </Reveal>

        <div className="overflow-hidden rounded-[2rem] border border-black/10">
          {services.map((service, index) => {
            const isOpen = active === index;

            return (
              <div key={service.title} className="border-b border-black/10 last:border-b-0">
                <button
                  onClick={() => setActive(index)}
                  className="flex w-full items-center justify-between px-5 py-6 text-left md:px-8"
                >
                  <span className="text-2xl font-bold md:text-4xl">
                    {service.title}
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-full border border-black/10">
                    {isOpen ? <X size={18} /> : <ArrowUpRight size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 bg-[#1c1c1a] p-5 text-white md:grid-cols-[1fr_320px] md:p-8">
                        <p className="max-w-2xl text-lg leading-8 text-white/70">
                          {service.description}
                        </p>

                        <Image
                          src={service.image}
                          alt={service.title}
                          width={500}
                          height={350}
                          className="aspect-[4/3] w-full rounded-2xl object-cover"
                        />
                      </div>
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