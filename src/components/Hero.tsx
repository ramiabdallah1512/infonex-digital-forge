import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero = ({ onQuoteClick }: HeroProps) => {
  const words = ["Infogérance", "Infrastructure", "Virtualisation", "Cloud", "Cybersécurité", "Consulting", "Web", "Sécurité"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-scale-in hover:scale-105 transition-transform">
            <Shield className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-foreground">🚀 Plus de 15 ans d'expertise IT à votre service</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            L'Excellence{" "}
            <span 
              className={`inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow transition-all duration-500 ${
                isAnimating ? 'opacity-0 -translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              {words[currentWord]}
            </span>
            <span className="block mt-2">
              pour Toutes les Entreprises
            </span>
          </h1>

          {/* Description */}
          <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto space-y-3">
            <p className="font-semibold text-foreground">
              TPE • PME • Grandes Entreprises
            </p>
            <p className="text-lg">
              Un accompagnement personnalisé avec notre équipe d'experts pour transformer vos défis IT en succès stratégiques
            </p>
            <p className="text-base">
              Infrastructure • Cloud • Cybersécurité • Infogérance • Consulting
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 animate-glow"
              onClick={onQuoteClick}
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/5 hover:scale-110 transition-all duration-300 hover:border-primary/50"
              asChild
            >
              <Link to="/services">
                Découvrir nos services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilité</div>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2 hover:scale-110 transition-transform duration-300" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Sécurisé</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
