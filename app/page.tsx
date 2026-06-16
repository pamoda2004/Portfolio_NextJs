import ContactCTA from "@/components/ContactCTA";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ServicesAccordion />
      <Experience />
      <ContactCTA />
    </main>
  );
}