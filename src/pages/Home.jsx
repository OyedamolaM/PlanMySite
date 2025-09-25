import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <Plans />
      <FAQ />
      
      <CTA />
    </>
  );
}
