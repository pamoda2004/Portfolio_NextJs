import { experiences } from "@/lib/data";
import Reveal from "./Reveal";
import SectionParallaxWord from "./SectionParallaxWord";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#1c1c1a] py-16 text-white transition-colors dark:bg-[#050505] md:py-24"
    >
      <SectionParallaxWord text="Experience" dark className="text-[16vw]" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-0 top-24 h-[260px] w-[260px] rounded-full bg-white/[0.055] blur-3xl dark:bg-white/[0.04]" />
        <div className="absolute bottom-10 right-0 h-[320px] w-[320px] rounded-full bg-white/[0.045] blur-3xl dark:bg-white/[0.035]" />
      </div>

      <div className="container-main relative z-10">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-white/45 transition-colors dark:text-white/40 sm:text-sm sm:tracking-[0.3em]">
                /Experience
              </p>

              <h2 className="text-[clamp(2.35rem,9vw,4.5rem)] font-black uppercase leading-none tracking-[-0.035em] text-[#f4f4f1] md:text-5xl">
                Work Journey
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/55 transition-colors dark:text-white/50 md:text-base md:leading-8">
              Learning, building, and improving through academic and real-world
              projects.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4 md:space-y-0 md:divide-y md:divide-white/10">
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.07] active:bg-white/[0.07] md:grid md:grid-cols-3 md:items-center md:gap-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:py-7 md:shadow-none md:hover:bg-transparent">
                <span className="absolute bottom-0 left-0 hidden h-px w-0 bg-white/80 transition-all duration-500 group-hover:w-full group-active:w-full md:block" />

                <p className="mb-3 text-sm font-semibold text-white/45 transition-colors group-hover:text-white/80 group-active:text-white/80 md:mb-0 md:text-base">
                  {item.date}
                </p>

                <h3 className="text-[clamp(1.35rem,6vw,2rem)] font-black leading-tight tracking-[-0.035em] text-[#f4f4f1] transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 md:text-2xl">
                  {item.company}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-white/55 transition-colors group-hover:text-white/85 group-active:text-white/85 md:mt-0 md:text-base">
                  {item.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}