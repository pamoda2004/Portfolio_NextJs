"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="hover"
        className="group block overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/70 p-2.5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] active:shadow-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
      >
        <div className="relative overflow-hidden rounded-[1.25rem] bg-neutral-200 transition-colors dark:bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={650}
            className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105 group-active:scale-105"
          />

          {/* Image overlay for better dark/light contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70 transition dark:from-black/45" />

          <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition duration-300 md:h-12 md:w-12 md:opacity-0 md:group-hover:opacity-100 dark:bg-[#f4f4f1] dark:text-black dark:shadow-[0_12px_30px_rgba(255,255,255,0.08)]">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400">
            {project.category}
          </p>

          <h3 className="text-xl font-bold tracking-[-0.03em] text-black transition-colors dark:text-[#f4f4f1] md:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-neutral-600 transition-colors dark:text-neutral-300">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}