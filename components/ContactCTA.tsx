import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <Reveal>
          <div className="rounded-[2.5rem] border border-black/10 bg-white/60 px-6 py-16 text-center shadow-xl md:px-12">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Available for New Project
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
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