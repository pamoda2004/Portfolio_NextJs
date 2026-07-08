import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work | Pamoda Jayathilaka",
  description:
    "Selected portfolio projects including web development, AI/ML, computer vision, dashboards, and portfolio design work.",
};

export default function WorkPage() {
  return (
    <main className="pt-32 text-[var(--foreground)] transition-colors">
      <section className="relative overflow-hidden py-10 md:py-16">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
          <div className="absolute bottom-10 right-0 h-[320px] w-[320px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
                /All Work
              </p>

              <h1 className="max-w-4xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
                Selected Work
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
                A collection of frontend, AI/ML, computer vision, dashboard,
                and portfolio projects built with modern technologies and
                practical problem-solving.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}