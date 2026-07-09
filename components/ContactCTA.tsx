import Image from "next/image";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 text-[var(--foreground)] transition-colors md:py-24"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.035] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute bottom-10 right-0 h-[240px] w-[240px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.025]" />
      </div>

      <div className="container-main">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 px-5 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#070707] dark:shadow-[0_30px_110px_rgba(0,0,0,0.7)] sm:px-6 sm:py-14 md:rounded-[2.5rem] md:px-12 md:py-16">
            {/* Inner gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/[0.035] dark:from-white/[0.055] dark:via-transparent dark:to-black/50" />

            {/* Premium black highlight */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl dark:block" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-56 w-[520px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl dark:block" />

            <div className="relative z-10">
              <div className="group relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border border-black/10 bg-white shadow-[0_22px_65px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_30px_90px_rgba(0,0,0,0.22)] dark:border-white/12 dark:bg-white/[0.08] dark:shadow-[0_22px_65px_rgba(0,0,0,0.55)] sm:h-32 sm:w-32">
                <Image
                  src="/images/My.png"
                  alt="Pamoda Jayathilaka"
                  width={150}
                  height={150}
                  priority
                  className="h-full w-full scale-105 object-cover object-top transition duration-700 group-hover:scale-115"
                />

                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/45 transition duration-500 group-hover:ring-white/70 dark:ring-white/25 dark:group-hover:ring-white/45" />

                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/25 opacity-0 transition duration-500 group-hover:opacity-100 dark:from-black/40 dark:to-white/15" />
              </div>

              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-600 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.075] dark:text-neutral-200 sm:text-sm sm:normal-case sm:tracking-normal">
                <span className="available-dot h-2.5 w-2.5 rounded-full bg-green-500" />
                Available for New Project
              </div>

              <h2 className="mx-auto max-w-4xl text-[clamp(2.3rem,10vw,4.8rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] md:leading-none">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-600 transition-colors dark:text-white/68 sm:text-base md:text-lg md:leading-8">
                Let&apos;s turn your idea into a clean, modern, and intelligent
                digital solution.
              </p>

              <div className="mt-8 flex justify-center">
                <MagneticButton href="/contact">Let&apos;s Talk</MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}