"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4"
    >
      <div className="container-main flex items-center justify-between rounded-full border border-black/10 bg-[#f4f4f1]/80 px-4 py-3 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          Available for New Project
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-black/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-4 top-20 z-50 rounded-[2rem] border border-black/10 bg-[#f4f4f1] p-6 shadow-2xl md:hidden"
        >
          <div className="flex min-h-[55vh] flex-col justify-between">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href={link.href}
                    className="block rounded-2xl px-4 py-4 text-4xl font-black uppercase tracking-[-0.05em] transition hover:bg-black hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}