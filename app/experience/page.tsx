import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { experiences } from "@/lib/data";

export const metadata = {
  title: "Experience | Pamoda Jayathilaka",
  description: "Experience and learning journey.",
};

export default function ExperiencePage() {
  return (
    <main className="pt-32 text-[var(--foreground)] transition-colors">
      <section className="relative overflow-hidden py-10 md:py-16">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
              /Experience
            </p>

            <h1 className="max-w-4xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
              Learning by building real projects
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
              My journey combines modern web development, AI/ML solutions,
              full-stack applications, and real-world academic projects built
              with practical technologies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1c1c1a] py-12 text-white transition-colors dark:bg-[#050505] md:py-20">
        {/* Soft glow for dark section */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-[260px] w-[260px] rounded-full bg-white/[0.055] blur-3xl dark:bg-white/[0.035]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/[0.045] blur-3xl dark:bg-white/[0.025]" />
        </div>

        <div className="container-main relative">
          <div className="mb-8 md:mb-10">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-white/45 sm:text-sm sm:tracking-[0.3em]">
                /Work Journey
              </p>

              <h2 className="text-[clamp(2.2rem,9vw,4.2rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f4f4f1] md:text-5xl">
                Experience Timeline
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4 md:space-y-0 md:divide-y md:divide-white/10">
            {experiences.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.07] md:grid md:grid-cols-[170px_minmax(360px,520px)_minmax(220px,1fr)] md:items-center md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:py-8 md:shadow-none md:hover:bg-transparent lg:grid-cols-[190px_minmax(420px,560px)_minmax(260px,1fr)]">
                  <span className="absolute bottom-0 left-0 hidden h-px w-0 bg-white/80 transition-all duration-500 group-hover:w-full md:block" />

                  <p className="mb-3 text-sm font-semibold text-white/45 transition-colors group-hover:text-white/80 md:mb-0 md:text-base">
                    {item.date}
                  </p>

                  <h2 className="text-[clamp(1.25rem,5.5vw,1.8rem)] font-black leading-tight tracking-[-0.01em] text-[#f4f4f1] transition-transform duration-300 group-hover:translate-x-1 md:text-[1.85rem] md:tracking-[-0.01em] lg:text-[1.80rem] lg:tracking-[-0.01em]">
                    {item.company}
                  </h2>

                  <p className="mt-2 text-sm font-medium leading-6 tracking-[0.01em] text-white/50 transition-colors group-hover:text-white/80 md:mt-0 md:whitespace-nowrap md:text-[0.95rem] md:justify-self-start">
                    {item.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-16 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl dark:bg-white/[0.04]" />
        </div>

        <div className="container-main">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <Reveal>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl">
                  Frontend
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors dark:text-neutral-300 md:text-base md:leading-7">
                  Building responsive portfolio websites, dashboards, e-commerce
                  interfaces, and AI-powered web UIs using React, Next.js, TypeScript,
                  and Tailwind CSS.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl">
                  AI/ML
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors dark:text-neutral-300 md:text-base md:leading-7">
                  Building machine learning models, data preprocessing workflows,
                  prediction systems, recommendation features, and AI-powered web
                  applications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl">
                  Projects
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors dark:text-neutral-300 md:text-base md:leading-7">
                  Developing modern portfolio websites, e-commerce platforms,
                  AI/ML applications, recommendation systems, prediction tools, and
                  computer vision-based solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}