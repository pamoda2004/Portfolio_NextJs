"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="container-main">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500"
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
              className="leading-[0.85] tracking-[-0.08em]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8 }}
                className="outline-text block text-[clamp(4.5rem,14vw,11rem)] font-black uppercase"
              >
                {profile.firstName}
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8 }}
                className="block text-[clamp(4.5rem,14vw,11rem)] font-black uppercase text-black"
              >
                {profile.lastName}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 max-w-xl text-lg leading-8 text-neutral-600"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton href="/work">View My Work</MagneticButton>
              <MagneticButton href="/#contact" variant="light">
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-black/10 bg-white/50 p-3 shadow-2xl"
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={520}
              height={650}
              priority
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
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
          className="mt-12 flex flex-wrap gap-4 border-t border-black/10 pt-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-neutral-500 transition hover:text-black"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}