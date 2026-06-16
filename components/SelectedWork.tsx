import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[18vw] font-black uppercase leading-none text-black/[0.035]">
        Portfolio
      </div>

      <div className="container-main relative">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
                /Selected Work
              </p>
              <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Recent Projects
              </h2>
            </div>

            <Link
              href="/work"
              className="w-fit rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              View All Work
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}