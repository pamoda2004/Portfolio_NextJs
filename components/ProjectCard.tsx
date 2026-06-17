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
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link
        href={`/work/${project.slug}`}
        data-cursor="hover"
        className="group block overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-3 transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] bg-neutral-200">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={650}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-black text-white opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div className="p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            {project.category}
          </p>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}