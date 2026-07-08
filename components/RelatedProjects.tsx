import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

type RelatedProjectsProps = {
  currentSlug: string;
};

export default function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 2);

  return (
    <section className="relative overflow-hidden py-16 text-[var(--foreground)] transition-colors md:py-20">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-[260px] w-[260px] rounded-full bg-black/[0.03] blur-3xl dark:bg-white/[0.04]" />
        <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
      </div>

      <div className="container-main">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
                /More Work
              </p>

              <h2 className="text-[clamp(2.3rem,9vw,3.8rem)] font-black uppercase leading-none tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] md:text-5xl md:tracking-[-0.05em]">
                Related Work
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 md:text-right md:text-base">
              Explore more selected projects built with modern web technologies,
              AI/ML concepts, and practical development workflows.
            </p>
          </div>
        </Reveal>

        {relatedProjects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {relatedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/70 p-8 text-center shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
              <p className="text-sm font-semibold text-neutral-600 transition-colors dark:text-neutral-300">
                No related projects available.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}