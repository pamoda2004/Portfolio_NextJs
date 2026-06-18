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
              className="max-w-full leading-[0.9] tracking-[-0.05em]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8 }}
                className="outline-text block text-[clamp(2.7rem,13vw,7rem)] font-black uppercase tracking-[-0.06em] sm:text-[clamp(3.2rem,12vw,8.5rem)]"
              >
                {profile.firstName}
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.8 }}
                className="block text-[clamp(2.7rem,13vw,7rem)] font-black uppercase tracking-[-0.07em] text-black sm:text-[clamp(3.2rem,12vw,8.5rem)]"
              >
                {profile.lastName}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton href="/work">View My Work</MagneticButton>

              <MagneticButton href="/contact" variant="light">
                Contact Me
              </MagneticButton>

              <a
                href="/cv/Pamoda-Jayathilaka-CV.pdf"
                download
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
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
              max-w-[280px]
              overflow-hidden
              rounded-[2rem]
              border
              border-black/10
              bg-white/70
              p-3
              shadow-[0_25px_80px_rgba(0,0,0,0.16)]
              sm:max-w-[320px]
              md:mt-0
              lg:ml-auto
              lg:mr-8
              lg:max-w-[330px]
              xl:mr-12
              xl:max-w-[350px]
            "
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={520}
              height={650}
              priority
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
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