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

  const galleryImages = project.gallery ?? [project.image];
  const processItems = project.process ?? [];
  const resultItems = project.results ?? [];

  return (
    <main className="pt-32 text-[var(--foreground)] transition-colors">
      <section className="relative overflow-hidden py-8 md:py-12">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <Link
                href="/work"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-black shadow-sm backdrop-blur-md transition hover:border-black/20 hover:bg-black hover:text-white dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] dark:hover:border-white/20 dark:hover:bg-[#f4f4f1] dark:hover:text-black"
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.08] dark:text-neutral-300">
                <span className="available-dot h-2.5 w-2.5 rounded-full bg-green-500" />
                Case Study
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,1fr)_360px]">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
                {project.category}
              </p>

              <h1 className="max-w-2xl text-[clamp(2.2rem,8.5vw,4.2rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-black transition-colors dark:text-[#f4f4f1] sm:text-[clamp(2.8rem,7vw,5rem)] md:tracking-[-0.055em]">
                {project.title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:text-lg md:leading-8">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-8 md:gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.16)] transition hover:scale-105 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)] sm:px-6"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur-md transition hover:border-black/20 hover:bg-black hover:text-white active:scale-95 dark:border-white/10 dark:bg-white/[0.08] dark:text-[#f4f4f1] dark:hover:border-white/20 dark:hover:bg-[#f4f4f1] dark:hover:text-black sm:px-6"
                >
                  Contact Me
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <div className="border-b border-black/10 py-3 transition-colors dark:border-white/10">
                  <p className="text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                    Role
                  </p>
                  <p className="mt-1 font-bold text-black transition-colors dark:text-[#f4f4f1]">
                    {project.role}
                  </p>
                </div>

                <div className="border-b border-black/10 py-3 transition-colors dark:border-white/10">
                  <p className="text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                    Timeline
                  </p>
                  <p className="mt-1 font-bold text-black transition-colors dark:text-[#f4f4f1]">
                    {project.timeline}
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-sm font-semibold text-neutral-500 transition-colors dark:text-neutral-400">
                    Tools
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-sm font-semibold text-neutral-700 transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-16 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl dark:bg-white/[0.04]" />
        </div>

        <div className="container-main">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <Reveal>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm">
                  /Overview
                </p>

                <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl md:tracking-[-0.04em]">
                  Project Overview
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base">
                  {project.overview}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm">
                  /Problem
                </p>

                <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl md:tracking-[-0.04em]">
                  The Challenge
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base">
                  {project.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-[1.6rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] md:rounded-[2rem] md:p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm">
                  /Solution
                </p>

                <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl md:tracking-[-0.04em]">
                  The Solution
                </h2>

                <p className="mt-4 text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base">
                  {project.solution}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
              /Screens
            </p>

            <h2 className="mb-8 text-[clamp(2.25rem,9vw,3.5rem)] font-black uppercase leading-[1] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] md:mb-10 md:text-5xl md:tracking-[-0.05em]">
              Project Screens
            </h2>
          </Reveal>

          <div className="space-y-8">
            {galleryImages.map((image, index) => (
              <Reveal key={image} delay={index * 0.08}>
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/70 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
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

      <ProjectProcess process={processItems} results={resultItems} />
      <RelatedProjects currentSlug={project.slug} />
      <ContactCTA />
    </main>
  );
}