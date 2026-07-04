"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      className="fixed left-0 top-0 z-50 w-full px-4 py-4"
    >
      <div className="container-main flex items-center justify-between rounded-full border border-black/10 bg-[#f4f4f1]/90 px-3 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-4">
        {/* Profile tab - no navigation */}
        <div className="flex items-center gap-2 rounded-full bg-white/80 py-1.5 pl-1.5 pr-3 text-sm font-semibold shadow-sm ring-1 ring-black/5 sm:gap-3 sm:pr-4">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm sm:h-11 sm:w-11">
            <Image
              src="/images/My.png"
              alt="Pamoda Jayathilaka"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover object-center"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="hidden max-w-[135px] truncate text-xs font-bold text-black sm:inline lg:max-w-none">
              Pamoda Jayathilaka
            </span>

            <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available
            </span>
          </span>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-sm font-bold text-black transition"
                    : "text-sm text-neutral-600 transition hover:text-black"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-xl font-bold leading-none shadow-sm transition active:scale-95 md:hidden"
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
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-24 z-50 overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f4f4f1]/95 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl md:hidden"
            >
              <div className="rounded-[1.35rem] border border-black/10 bg-white/75 p-3">
                <div className="mb-3 flex items-center justify-between border-b border-black/10 px-2 pb-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/Pro.jpeg"
                      alt="Pamoda Jayathilaka"
                      width={46}
                      height={46}
                      className="h-11 w-11 rounded-full border border-black/10 object-cover object-center shadow-sm"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                        Menu
                      </p>
                      <p className="mt-1 text-sm font-semibold text-neutral-700">
                        Navigate portfolio
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-black text-xl leading-none text-white shadow-lg"
                    aria-label="Close menu"
                  >
                    ×
                  </button>
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
                              ? "group flex items-center justify-between rounded-2xl bg-black px-4 py-3.5 text-white shadow-lg transition"
                              : "group flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-black transition hover:bg-black hover:text-white"
                          }
                        >
                          <span className="text-xl font-black uppercase tracking-[-0.035em] sm:text-2xl">
                            {link.label}
                          </span>

                          <span
                            aria-hidden="true"
                            className={
                              active
                                ? "grid h-8 w-8 place-items-center rounded-full bg-white text-black transition"
                                : "grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:bg-white group-hover:text-black"
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
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:text-sm"
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