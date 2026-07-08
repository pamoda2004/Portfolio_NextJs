import { Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { profile, socialLinks } from "@/lib/data";

export const metadata = {
  title: "Contact | Pamoda Jayathilaka",
  description:
    "Contact Pamoda Jayathilaka for web design, AI/ML, and full-stack development projects.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 text-[var(--foreground)] transition-colors">
      <section className="relative overflow-hidden py-10 md:py-16">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
          <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <Reveal>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
                  /Contact
                </p>

                <h1 className="max-w-5xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
                  Let&apos;s build something great
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
                  Have a modern website, AI-powered solution, or full-stack
                  project in mind? Send me a message and let&apos;s discuss how
                  we can build it.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
                  <Link
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition hover:scale-105 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)] sm:px-6"
                  >
                    <Mail size={18} />
                    Send Email
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur-md transition hover:border-black/20 hover:bg-black hover:text-white active:scale-95 dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] dark:hover:border-white/20 dark:hover:bg-[#f4f4f1] dark:hover:text-black sm:px-6"
                  >
                    View Work
                    <Send size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.6rem] border border-black/10 bg-white/70 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-6">
                <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl md:tracking-[-0.04em]">
                  Contact Details
                </h2>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-black/10 bg-white/55 p-3.5 transition-colors dark:border-white/10 dark:bg-white/[0.045] sm:p-4">
                    <p className="mb-2 text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                      Email
                    </p>

                    <Link
                      href={`mailto:${profile.email}`}
                      className="break-all font-bold text-black transition hover:text-neutral-600 dark:text-[#f4f4f1] dark:hover:text-neutral-300"
                    >
                      {profile.email}
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white/55 p-3.5 transition-colors dark:border-white/10 dark:bg-white/[0.045] sm:p-4">
                    <p className="mb-2 text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                      Location
                    </p>

                    <p className="flex items-center gap-2 font-bold text-black transition-colors dark:text-[#f4f4f1]">
                      <MapPin size={18} />
                      Sri Lanka
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white/55 p-3.5 transition-colors dark:border-white/10 dark:bg-white/[0.045] sm:p-4">
                    <p className="mb-3 text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                      Social Links
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-semibold text-neutral-700 transition hover:border-black hover:bg-black hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-300 dark:hover:border-white dark:hover:bg-[#f4f4f1] dark:hover:text-black sm:px-4 sm:text-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}