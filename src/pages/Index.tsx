import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const location = useLocation();
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("");

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main>
        <div id="hero">
          <Hero onQuoteClick={() => setQuoteDialogOpen(true)} />
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
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
      <ContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
        defaultSubject={contactSubject}
      />
      
      <Dialog open={showPromoPopup} onOpenChange={setShowPromoPopup}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-primary via-accent to-secondary border-2 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2 animate-fade-in">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              Créez Votre Site Web Pro !
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </DialogTitle>
            <DialogDescription className="text-white/90 text-center space-y-4 pt-4">
              <div className="animate-scale-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold">OFFRE EXCEPTIONNELLE</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-white/60 line-through text-xl">799 €</span>
                  <span className="text-3xl font-bold text-yellow-300">249 €</span>
                </div>
                <p className="text-sm text-white/90">
                  Site Web + E-mail Pro
                </p>
              </div>

              <div className="space-y-2 text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <p className="text-sm">✨ Design moderne et responsive</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <p className="text-sm">📧 E-mail professionnel inclus</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <p className="text-sm">🚀 Hébergement + nom de domaine</p>
                </div>
              </div>

              <div className="pt-2 space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button 
                  onClick={() => {
                    setShowPromoPopup(false);
                    setContactSubject("Offre Site Web - 249€");
                    setContactDialogOpen(true);
                  }}
                  className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Je veux mon site web !
                </Button>
                <Button 
                  onClick={() => setShowPromoPopup(false)}
                  variant="outline"
                  className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Plus tard
                </Button>
              </div>

              <p className="text-xs text-white/70 animate-pulse">
                ⏰ Offre limitée - Expire le 31 décembre 2025
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
