"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionParallaxWord from "./SectionParallaxWord";

const filters = ["All", "Dashboard", "Computer Vision", "Web Design", "Portfolio"];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-10 text-[var(--foreground)] transition-colors md:py-24"
    >
      <SectionParallaxWord text="Portfolio" />

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-[260px] w-[260px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
        <div className="absolute bottom-20 right-0 h-[280px] w-[280px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
      </div>

      <div className="container-main relative">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
                /Selected Work
              </p>

              <h2 className="text-[clamp(2.5rem,9vw,4.5rem)] font-black uppercase leading-none tracking-[-0.03em] text-black transition-colors dark:text-[#f4f4f1] md:text-6xl">
                Featured Work
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 md:text-right md:text-base">
              A collection of web, AI, and academic projects built with modern
              technologies and practical problem-solving.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? "shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition hover:scale-105 active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_14px_35px_rgba(255,255,255,0.08)]"
                      : "shrink-0 rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-bold text-neutral-600 shadow-sm backdrop-blur-md transition hover:border-black hover:bg-black hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {filteredProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-10 text-center shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
            <p className="text-lg font-semibold text-neutral-600 transition-colors dark:text-neutral-300">
              No projects found for this category.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 28 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {filteredProjects.length > 4 && (
          <Reveal delay={0.12}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition hover:scale-105 active:scale-95 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_16px_40px_rgba(255,255,255,0.08)]"
              >
                View All Projects
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}