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
      <section className="container-main py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              /Contact
            </p>

            <h1 className="max-w-4xl text-6xl font-black uppercase leading-none tracking-[-0.06em] md:text-8xl">
              Let&apos;s build something great
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Have a portfolio, website, dashboard, or modern web project in
              mind? Send me a message and let&apos;s discuss the idea.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
              >
                <Mail size={18} />
                Send Email
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                View Work
                <Send size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl">
              <h2 className="text-3xl font-black tracking-[-0.04em]">
                Contact Details
              </h2>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-black/10 p-4">
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

                <div className="rounded-2xl border border-black/10 p-4">
                  <p className="mb-2 text-sm font-semibold text-neutral-500">
                    Location
                  </p>

                  <p className="flex items-center gap-2 font-bold">
                    <MapPin size={18} />
                    Sri Lanka
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4">
                  <p className="mb-3 text-sm font-semibold text-neutral-500">
                    Social Links
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
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