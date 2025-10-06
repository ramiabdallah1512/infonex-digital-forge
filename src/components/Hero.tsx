import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud, Server, Lock, Database, Cpu, Network, Brain, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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


  const techIcons = [
    { Icon: Cloud, position: "top-[15%] left-[10%]", delay: "0s", size: 48 },
    { Icon: Server, position: "top-[25%] right-[15%]", delay: "1s", size: 56 },
    { Icon: Lock, position: "top-[45%] left-[8%]", delay: "2s", size: 40 },
    { Icon: Database, position: "bottom-[30%] right-[12%]", delay: "1.5s", size: 52 },
    { Icon: Cpu, position: "top-[60%] left-[15%]", delay: "0.5s", size: 44 },
    { Icon: Network, position: "bottom-[20%] left-[20%]", delay: "2.5s", size: 48 },
    { Icon: Brain, position: "top-[35%] right-[8%]", delay: "1.8s", size: 42 },
    { Icon: HardDrive, position: "bottom-[40%] right-[25%]", delay: "0.8s", size: 46 },
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${15 + Math.random() * 10}s`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1f3a] via-[#2a3a6e] to-[#4a5fba]">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#4a5fba]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2a3a6e]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {/* Floating tech icons */}
      {techIcons.map(({ Icon, position, delay, size }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float-slow opacity-10`}
          style={{ animationDelay: delay }}
        >
          <Icon size={size} className="text-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-scale-in hover:scale-105 transition-transform">
            <span className="text-sm font-medium text-white">15+ ans d'expertise</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            <span className="text-[#ff6b35]">INFONEX —</span>
            <br />
            <span className="text-white">Infogérance,</span>
            <br />
            <span className="text-[#60a5fa]">Cybersécurité &</span>
            <br />
            <span className="text-white">Cloud</span>
          </h1>

          {/* Description */}
          <div className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            <p>
              Accélérez, sécurisez et simplifiez votre IT avec un partenaire de confiance.
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
