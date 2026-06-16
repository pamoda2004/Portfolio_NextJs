import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ContactCTA from "@/components/ContactCTA";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32">
      <section className="container-main py-12">
        <Reveal>
          <Link
            href="/work"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              {project.category}
            </p>

            <h1 className="text-6xl font-black leading-none tracking-[-0.06em] md:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <div className="border-b border-black/10 py-4">
                <p className="text-sm text-neutral-500">Role</p>
                <p className="font-bold">{project.role}</p>
              </div>

              <div className="border-b border-black/10 py-4">
                <p className="text-sm text-neutral-500">Timeline</p>
                <p className="font-bold">{project.timeline}</p>
              </div>

              <div className="py-4">
                <p className="text-sm text-neutral-500">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-3">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <Reveal>
            <h2 className="text-3xl font-black">Overview</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              This project focuses on creating a clean, responsive, and user-friendly
              digital experience.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-black">Problem</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              The main challenge was to present content clearly while keeping the
              interface modern and easy to use.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl font-black">Solution</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              The final design uses strong typography, structured spacing, responsive
              layouts, and smooth interactions.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}