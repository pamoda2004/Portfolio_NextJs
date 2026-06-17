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
      <section className="container-main py-16">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            /Experience
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-8xl">
            Learning by building real projects
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            My journey is focused on web development, UI design, academic
            projects, and continuous practice with modern frontend tools.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#1c1c1a] py-20 text-white">
        <div className="container-main">
          <div className="divide-y divide-white/10">
            {experiences.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <div className="grid gap-4 py-8 md:grid-cols-3 md:items-center">
                  <p className="text-white/50">{item.date}</p>

                  <h2 className="text-3xl font-black tracking-[-0.04em]">
                    {item.company}
                  </h2>

                  <p className="text-white/60">{item.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <h3 className="text-3xl font-black">Frontend</h3>
              <p className="mt-3 leading-7 text-neutral-600">
                React, Next.js, TypeScript, Tailwind CSS, responsive layouts,
                and component-based development.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <h3 className="text-3xl font-black">Design</h3>
              <p className="mt-3 leading-7 text-neutral-600">
                Minimal layouts, typography systems, clean spacing, and modern
                portfolio interfaces.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6">
              <h3 className="text-3xl font-black">Projects</h3>
              <p className="mt-3 leading-7 text-neutral-600">
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