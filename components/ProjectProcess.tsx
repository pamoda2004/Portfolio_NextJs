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
    <section className="bg-[#1c1c1a] py-20 text-white">
      <div className="container-main grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
            /Process
          </p>

          <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Design Process
          </h2>

          <div className="mt-10 space-y-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="mb-2 text-sm font-bold text-white/40">
                  0{index + 1}
                </p>
                <p className="leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
            /Result
          </p>

          <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
            Final Result
          </h2>

          <div className="mt-10 space-y-4">
            {results.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="mb-2 text-sm font-bold text-white/40">
                  0{index + 1}
                </p>
                <p className="leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}