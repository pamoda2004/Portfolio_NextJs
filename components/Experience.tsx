import { experiences } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#1c1c1a] py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[16vw] font-black uppercase leading-none text-white/[0.04]">
        Experience
      </div>

      <div className="container-main relative">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
                /Experience
              </p>
              <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Work Journey
              </h2>
            </div>

            <p className="max-w-sm text-white/55">
              Learning, building, and improving through academic and real-world projects.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-white/10">
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="grid gap-3 py-7 transition hover:text-white md:grid-cols-3">
                <p className="text-white/50">{item.date}</p>
                <h3 className="text-2xl font-bold">{item.company}</h3>
                <p className="text-white/60">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}