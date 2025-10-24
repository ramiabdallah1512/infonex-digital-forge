import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";
import ContactDialog from "@/components/ContactDialog";

const Index = () => {
  const location = useLocation();
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    } else if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main>
        <div id="hero">
          <Hero onQuoteClick={() => setQuoteDialogOpen(true)} />
        </div>
        <FeaturedProduct />
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
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  );
};

export default Index;
