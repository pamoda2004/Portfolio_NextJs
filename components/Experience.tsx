import { experiences } from "@/lib/data";
import Reveal from "./Reveal";
import SectionParallaxWord from "./SectionParallaxWord";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#1c1c1a] py-24 text-white">
      <SectionParallaxWord text="Experience" dark className="text-[16vw]" />

      <div className="container-main relative">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
                /Experience
              </p>
              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">
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
              <div className="group relative grid gap-3 py-7 transition hover:text-white active:text-white md:grid-cols-3">
                <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full group-active:w-full" />

                <p className="text-white/50 transition group-hover:text-white group-active:text-white">
                  {item.date}
                </p>

                <h3 className="text-2xl font-bold transition group-hover:translate-x-1 group-active:translate-x-1">
                  {item.company}
                </h3>

                <p className="text-white/60 transition group-hover:text-white group-active:text-white">
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