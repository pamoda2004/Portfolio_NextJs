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
      <section className="container-main py-10 md:py-16">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
            /Services
          </p>

          <h1 className="max-w-5xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.04em] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-8xl md:leading-none md:tracking-[-0.06em]">
            Design and development services
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:mt-6 md:text-lg md:leading-8">
            I create clean, responsive, and modern digital experiences with a
            focus on strong layout, smooth interaction, and user-friendly design.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/60 p-2.5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={500}
                  className="aspect-[16/9] w-full rounded-[1.25rem] object-cover"
                />

                <div className="p-4">
                  <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl md:tracking-[-0.04em]">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
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