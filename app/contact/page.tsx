import { Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { profile, socialLinks } from "@/lib/data";

export const metadata = {
  title: "Contact | Pamoda Jayathilaka",
  description: "Contact Pamoda Jayathilaka for web design and development projects.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="container-main py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm sm:tracking-[0.3em]">
              /Contact
            </p>

            <h1 className="max-w-5xl text-[clamp(2.55rem,11vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.03em] sm:text-[clamp(3.2rem,9vw,6rem)] md:text-7xl md:leading-none md:tracking-[-0.06em]">
              Let&apos;s build something great
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:mt-6 md:text-lg md:leading-8">
              Have a modern website, AI solution, or full-stack project in mind? Send me a message and let&apos;s discuss the idea.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 sm:px-6"
              >
                <Mail size={18} />
                Send Email
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:px-6"
              >
                View Work
                <Send size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.6rem] border border-black/10 bg-white/60 p-4 shadow-xl md:p-6">
              <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] md:text-3xl md:tracking-[-0.04em]">
                Contact Details
              </h2>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-black/10 p-3.5 sm:p-4">
                  <p className="mb-2 text-sm font-semibold text-neutral-500">
                    Email
                  </p>

                  <Link
                    href={`mailto:${profile.email}`}
                    className="break-all font-bold transition hover:text-neutral-600"
                  >
                    {profile.email}
                  </Link>
                </div>

                <div className="rounded-2xl border border-black/10 p-3.5 sm:p-4">
                  <p className="mb-2 text-sm font-semibold text-neutral-500">
                    Location
                  </p>

                  <p className="flex items-center gap-2 font-bold">
                    <MapPin size={18} />
                    Sri Lanka
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-3.5 sm:p-4">
                  <p className="mb-3 text-sm font-semibold text-neutral-500">
                    Social Links
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-full border border-black/10 px-3.5 py-2 text-xs font-semibold transition hover:bg-black hover:text-white sm:px-4 sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}