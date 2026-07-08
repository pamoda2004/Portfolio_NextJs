import Image from "next/image";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services | Pamoda Jayathilaka",
  description:
    "Frontend development, AI/ML solutions, full-stack applications, and data-driven web services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 text-[var(--foreground)] transition-colors">
      <section className="relative overflow-hidden py-10 md:py-16">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-black/[0.035] blur-3xl dark:bg-white/[0.045]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-black/[0.025] blur-3xl dark:bg-white/[0.035]" />
        </div>

        <div className="container-main">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors dark:text-neutral-400 sm:text-sm sm:tracking-[0.3em]">
              /Services
            </p>

            <h1 className="max-w-4xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] text-black transition-colors dark:text-[#f4f4f1] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
              Design and development services
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 transition-colors dark:text-neutral-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
              I build clean, responsive, and intelligent digital experiences by
              combining modern frontend development with AI, machine learning,
              and data-driven solutions.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group h-full overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/70 p-2.5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] dark:hover:border-white/20 dark:hover:bg-white/[0.09] dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                  <div className="relative overflow-hidden rounded-[1.25rem] bg-neutral-200 transition-colors dark:bg-neutral-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={500}
                      className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 dark:from-black/45" />
                  </div>

                  <div className="p-4">
                    <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-black transition-colors dark:text-[#f4f4f1] md:text-3xl md:tracking-[-0.04em]">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-neutral-600 transition-colors dark:text-neutral-300 md:text-base md:leading-7">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesAccordion />
      <ContactCTA />
    </main>
  );
}