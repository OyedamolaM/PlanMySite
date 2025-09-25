import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Plans />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
