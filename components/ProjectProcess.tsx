import Reveal from "./Reveal";

type ProjectProcessProps = {
  process: string[];
  results: string[];
};

export default function ProjectProcess({
  process,
  results,
}: ProjectProcessProps) {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1a] py-16 text-white transition-colors dark:bg-[#050505] md:py-20">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-[260px] w-[260px] rounded-full bg-white/[0.055] blur-3xl dark:bg-white/[0.035]" />
        <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-white/[0.045] blur-3xl dark:bg-white/[0.025]" />
      </div>

      <div className="container-main relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-white/45 transition-colors dark:text-white/40 sm:text-sm sm:tracking-[0.3em]">
              /Process
            </p>

            <h2 className="text-[clamp(2.2rem,8vw,3.6rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f4f4f1] md:text-5xl">
              Design Process
            </h2>

            <div className="mt-8 space-y-4 md:mt-10">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.07] dark:bg-white/[0.04] dark:hover:bg-white/[0.065]"
                >
                  <p className="mb-2 text-sm font-black text-white/35 transition-colors group-hover:text-white/60">
                    0{index + 1}
                  </p>

                  <p className="text-sm leading-7 text-white/72 transition-colors group-hover:text-white/88 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-white/45 transition-colors dark:text-white/40 sm:text-sm sm:tracking-[0.3em]">
              /Result
            </p>

            <h2 className="text-[clamp(2.2rem,8vw,3.6rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f4f4f1] md:text-5xl">
              Final Result
            </h2>

            <div className="mt-8 space-y-4 md:mt-10">
              {results.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.07] dark:bg-white/[0.04] dark:hover:bg-white/[0.065]"
                >
                  <p className="mb-2 text-sm font-black text-white/35 transition-colors group-hover:text-white/60">
                    0{index + 1}
                  </p>

                  <p className="text-sm leading-7 text-white/72 transition-colors group-hover:text-white/88 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}