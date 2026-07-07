import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <Reveal>
          <div className="rounded-[2.5rem] border border-black/10 bg-white/60 px-6 py-16 text-center shadow-xl md:px-12">
            <div className="group relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border border-black/10 shadow-[0_22px_65px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:h-32 sm:w-32">
              <Image
                src="/images/My.png"
                alt="Pamoda Jayathilaka"
                width={150}
                height={150}
                priority
                className="h-full w-full scale-105 object-cover object-top transition duration-700 group-hover:scale-115"
              />

              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40 transition duration-500 group-hover:ring-white/70" />

              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/20 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Available for New Project
            </div>

            <h2 className="text-6xl font-black uppercase tracking-[-0.05em] md:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-neutral-500">
              Let&apos;s build a clean, fast, and modern website together.
            </p>

            <div className="mt-8 flex justify-center">
              <MagneticButton href="/contact">
                Let&apos;s Talk
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}