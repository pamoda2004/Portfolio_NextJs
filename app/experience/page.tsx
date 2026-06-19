import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { experiences } from "@/lib/data";

export const metadata = {
  title: "Experience | Pamoda Jayathilaka",
  description: "Experience and learning journey.",
};

export default function ExperiencePage() {
  return (
    <main className="pt-32">
      <section className="container-main py-10 md:py-16">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
            /Experience
          </p>

          <h1 className="max-w-4xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
            Learning by building real projects
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:mt-6 md:text-lg md:leading-8">
            My journey is focused on web development, UI design, academic
            projects, and continuous practice with modern frontend tools.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#1c1c1a] py-12 text-white md:py-20">
        <div className="container-main">
          <div className="divide-y divide-white/10">
            {experiences.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <div className="grid gap-3 py-6 md:grid-cols-3 md:items-center md:gap-4 md:py-8">
                  <p className="text-white/50">{item.date}</p>

                  <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl md:tracking-[-0.04em]">
                    {item.company}
                  </h2>

                  <p className="text-white/60">{item.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-12 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/60 p-5 md:rounded-[2rem] md:p-6">
              <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl">
                Frontend
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                React, Next.js, TypeScript, Tailwind CSS, responsive layouts,
                and component-based development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/60 p-5 md:rounded-[2rem] md:p-6">
              <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl">
                Design
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                Minimal layouts, typography systems, clean spacing, and modern
                portfolio interfaces.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/60 p-5 md:rounded-[2rem] md:p-6">
              <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl">
                Projects
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                Portfolio websites, e-commerce systems, dashboards, and
                AI-assisted web applications.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}