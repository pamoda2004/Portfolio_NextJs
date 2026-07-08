"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }

    return pathname === href;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-4 sm:py-4"
    >
      <div className="container-main flex items-center justify-between rounded-full border border-black/10 bg-[#f4f4f1]/85 px-3 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#111111]/85 dark:shadow-[0_14px_40px_rgba(0,0,0,0.45)] sm:px-4">
        {/* Profile tab */}
        <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/75 py-1.5 pl-1.5 pr-3 text-sm font-semibold shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.08] sm:gap-3 sm:pr-4">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm transition-colors dark:border-white/10 dark:bg-white/[0.12] sm:h-11 sm:w-11">
            <Image
              src="/images/logo.jpg"
              alt="Pamoda Jayathilaka"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover object-center"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="hidden max-w-[135px] truncate text-xs font-bold text-black transition-colors dark:text-[#f4f4f1] sm:inline lg:max-w-none">
              Pamoda Jayathilaka
            </span>

            <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 transition-colors dark:text-neutral-300">
              <span className="available-dot h-2 w-2 rounded-full bg-green-500" />
              Available
            </span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/55 p-1 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "rounded-full bg-black px-4 py-2 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition-colors dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_10px_28px_rgba(255,255,255,0.08)]"
                    : "rounded-full px-4 py-2 text-sm font-semibold text-neutral-600 transition duration-300 hover:bg-black hover:text-white dark:text-neutral-300 dark:hover:bg-[#f4f4f1] dark:hover:text-black"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition duration-300 hover:scale-105 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)]"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/75 text-xl font-bold leading-none text-black shadow-sm backdrop-blur-md transition active:scale-95 dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[3px] transition-colors dark:bg-black/50 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-24 z-50 overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f4f4f1]/95 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-[0_30px_90px_rgba(0,0,0,0.55)] md:hidden"
            >
              <div className="rounded-[1.35rem] border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.08]">
                <div className="mb-3 flex items-center justify-between border-b border-black/10 px-2 pb-3 transition-colors dark:border-white/10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 transition-colors dark:text-neutral-500">
                      Menu
                    </p>
                    <p className="mt-1 text-sm font-semibold text-neutral-700 transition-colors dark:text-neutral-300">
                      Navigate portfolio
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <button
                      onClick={() => setOpen(false)}
                      className="grid h-10 w-10 place-items-center rounded-full bg-black text-xl leading-none text-white shadow-lg transition hover:scale-105 active:scale-95 dark:bg-[#f4f4f1] dark:text-black"
                      aria-label="Close menu"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const active = isActive(link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          onClick={() => setOpen(false)}
                          href={link.href}
                          className={
                            active
                              ? "group flex items-center justify-between rounded-2xl bg-black px-4 py-3.5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_16px_40px_rgba(255,255,255,0.08)]"
                              : "group flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3.5 text-black shadow-sm transition duration-300 hover:border-black/20 hover:bg-black hover:text-white active:scale-[0.99] dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f4f4f1] dark:hover:border-white/20 dark:hover:bg-[#f4f4f1] dark:hover:text-black"
                          }
                        >
                          <span className="text-xl font-black uppercase tracking-[-0.035em] sm:text-2xl">
                            {link.label}
                          </span>

                          <span
                            aria-hidden="true"
                            className={
                              active
                                ? "grid h-8 w-8 place-items-center rounded-full bg-white text-black transition dark:bg-black dark:text-white"
                                : "grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:bg-white group-hover:text-black dark:bg-[#f4f4f1] dark:text-black dark:group-hover:bg-black dark:group-hover:text-white"
                            }
                          >
                            <ArrowUpRight size={16} strokeWidth={2.6} />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <Link
                  onClick={() => setOpen(false)}
                  href="/contact"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition hover:scale-[1.01] active:scale-[0.99] dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_16px_40px_rgba(255,255,255,0.08)] sm:text-sm"
                >
                  Let&apos;s Talk
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.6} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}