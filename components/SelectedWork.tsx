"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionParallaxWord from "./SectionParallaxWord";

const filters = ["All", "Dashboard", "Computer Vision", "UI/UX", "Portfolio"];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <section id="work" className="relative overflow-hidden py-10 md:py-24">
      <SectionParallaxWord text="Portfolio" />

      <div className="container-main relative">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
                /Selected Work
              </p>

              <h2 className="text-[clamp(2.5rem,9vw,4.5rem)] font-black leading-none tracking-[-0.05em] md:text-6xl">
                Recent Projects
              </h2>
            </div>

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
                      ? "shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white shadow-lg"
                      : "shrink-0 rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-bold text-neutral-600 transition hover:bg-black hover:text-white"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {filteredProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-black/10 bg-white/60 p-10 text-center">
            <p className="text-lg font-semibold text-neutral-600">
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
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition hover:scale-105 active:scale-95"
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