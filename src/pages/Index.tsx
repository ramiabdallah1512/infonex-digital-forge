import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <WhyUs />
        <Partners />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
