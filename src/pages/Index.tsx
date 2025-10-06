import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
