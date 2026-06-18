"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-16 pt-32">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div>
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
                className="outline-text block text-[clamp(2.35rem,11vw,5.8rem)] font-black uppercase tracking-[-0.03em] sm:text-[clamp(3.1rem,10vw,7.8rem)] md:tracking-[-0.06em]"
              >
                {profile.firstName}
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8 }}
                className="block text-[clamp(2.35rem,11vw,5.8rem)] font-black uppercase tracking-[-0.035em] text-black sm:text-[clamp(3.1rem,10vw,7.8rem)] md:tracking-[-0.065em]"
              >
                {profile.lastName}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 max-w-xl text-[0.95rem] leading-7 text-neutral-600 sm:text-base md:mt-8 md:text-lg md:leading-8"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-7 flex flex-wrap gap-3 md:mt-8"
            >
              <MagneticButton href="/work">View My Work</MagneticButton>

              <MagneticButton href="/contact" variant="light">
                Contact Me
              </MagneticButton>

              <a
                href="/cv/Pamoda-Jayathilaka-CV.pdf"
                download
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white hover:shadow-xl active:scale-95 sm:px-6"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              mt-10
              w-full
              max-w-[260px]
              overflow-hidden
              rounded-[1.6rem]
              border
              border-black/10
              bg-white/70
              p-2.5
              shadow-[0_25px_80px_rgba(0,0,0,0.16)]
              sm:max-w-[300px]
              sm:rounded-[2rem]
              sm:p-3
              md:mt-0
              lg:ml-auto
              lg:mr-8
              lg:max-w-[320px]
              xl:mr-12
              xl:max-w-[340px]
            "
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={520}
              height={650}
              priority
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center sm:rounded-[1.5rem]"
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
          className="mt-10 flex flex-wrap gap-3 border-t border-black/10 pt-5 sm:gap-4 md:mt-12 md:pt-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black sm:text-sm sm:tracking-widest"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}