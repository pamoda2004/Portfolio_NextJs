import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 pt-24 text-[var(--foreground)] transition-colors">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute bottom-10 right-0 h-[240px] w-[240px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
      </div>

      <div className="w-full max-w-3xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 px-5 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-16 md:rounded-[2.5rem]">
          {/* Inner gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/[0.035] dark:from-white/[0.08] dark:to-white/[0.025]" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-neutral-600 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.08] dark:text-neutral-300 sm:text-sm">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] text-white dark:bg-[#f4f4f1] dark:text-black">
                !
              </span>
              /404
            </div>

            <h1 className="mx-auto max-w-2xl text-[clamp(2.7rem,13vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black transition-colors dark:text-[#f4f4f1] md:text-8xl">
              Page Not Found
            </h1>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:text-lg md:leading-8">
              The page you are looking for does not exist or has been moved.
              Let&apos;s take you back to the homepage.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition hover:scale-105 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)]"
              >
                <Home size={17} />
                Back to Home
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur-md transition hover:border-black/20 hover:bg-black hover:text-white active:scale-95 dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] dark:hover:border-white/20 dark:hover:bg-[#f4f4f1] dark:hover:text-black"
              >
                <ArrowLeft size={17} />
                View Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}