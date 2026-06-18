import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work | Pamoda Jayathilaka",
  description: "Selected portfolio projects.",
};

export default function WorkPage() {
  return (
    <main className="pt-32">
      <section className="container-main py-10 md:py-16">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            /All Work
          </p>
          <h1 className="mb-12 text-6xl font-black tracking-[-0.06em] md:text-7xl">
            Selected Projects
          </h1>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}