import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CareerJourney } from "@/components/CareerJourney";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CareerJourney />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
