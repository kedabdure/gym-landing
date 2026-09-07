import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BrandStatement from "@/components/landing/BrandStatement";
import ProgramShowcase from "@/components/landing/ProgramShowcase";
import Experience from "@/components/landing/Experience";
import WhyUs from "@/components/landing/WhyUs";
import Community from "@/components/landing/Community";
import Facility from "@/components/landing/Facility";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <ProgramShowcase />
      <Experience />
      <WhyUs />
      <Community />
      <Facility />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
