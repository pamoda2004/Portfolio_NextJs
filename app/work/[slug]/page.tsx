import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import ContactCTA from "@/components/ContactCTA";
import ProjectProcess from "@/components/ProjectProcess";
import RelatedProjects from "@/components/RelatedProjects";

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
    title: `${project.title} | Pamoda Jayathilaka`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Pamoda Jayathilaka`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
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
      <section className="container-main py-8 md:py-12">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <Link
              href="/work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Work
            </Link>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-semibold">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Case Study
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              {project.category}
            </p>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
              >
                View Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/60 p-5 shadow-xl">
              <div className="border-b border-black/10 py-3">
                <p className="text-sm text-neutral-500">Role</p>
                <p className="font-bold">{project.role}</p>
              </div>

              <div className="border-b border-black/10 py-3">
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
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/60 p-2.5 shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={760}
              priority
              className="aspect-[16/9] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-main py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
                /Overview
              </p>

              <h2 className="text-3xl font-black tracking-[-0.04em]">
                Project Overview
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                {project.overview}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
                /Problem
              </p>

              <h2 className="text-3xl font-black tracking-[-0.04em]">
                The Challenge
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                {project.problem}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
                /Solution
              </p>

              <h2 className="text-3xl font-black tracking-[-0.04em]">
                The Solution
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-main">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              /Screens
            </p>

            <h2 className="mb-10 text-5xl font-black tracking-[-0.05em] md:text-5xl">
              Project Screens
            </h2>
          </Reveal>

          <div className="space-y-8">
            {project.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 0.08}>
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/60 p-2.5 shadow-xl">
                  <Image
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    width={1400}
                    height={900}
                    className="aspect-[16/9] w-full rounded-[1.25rem] object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectProcess process={project.process} results={project.results} />
      <RelatedProjects currentSlug={project.slug} />
      <ContactCTA />
    </main>
  );
}