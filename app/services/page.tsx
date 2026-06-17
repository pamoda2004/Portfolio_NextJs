import Image from "next/image";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services | Pamoda Jayathilaka",
  description: "Web design, UI/UX, branding, and animation services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="container-main py-16">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            /Services
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-8xl">
            Design and development services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            I create clean, responsive, and modern digital experiences with a
            focus on strong layout, smooth interaction, and user-friendly design.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-3">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={500}
                  className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                />

                <div className="p-5">
                  <h2 className="text-3xl font-black tracking-[-0.04em]">
                    {service.title}
                  </h2>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ServicesAccordion />
      <ContactCTA />
    </main>
  );
}