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
    <section className="container-main py-20">
      <Reveal>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              /More Work
            </p>

            <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Related Projects
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {relatedProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}