import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Plans />
      <Testimonials />
      <Portfolio />
      <WhyChoose />
      <CTA />
    </>
  );
}
