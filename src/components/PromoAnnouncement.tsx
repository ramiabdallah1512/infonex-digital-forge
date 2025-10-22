import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Sparkles, Globe, X } from "lucide-react";
import { useState } from "react";

interface PromoAnnouncementProps {
  onContactClick: () => void;
}

const PromoAnnouncement = ({ onContactClick }: PromoAnnouncementProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Card className="relative max-w-md bg-gradient-to-br from-primary via-accent to-secondary p-6 border-2 border-white/20 shadow-2xl animate-glow">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Sparkles animation */}
        <div className="absolute top-2 left-2 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-2 right-2 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </div>

        <div className="space-y-4">
          {/* Badge promo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-bounce">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold text-white">💥 OFFRE DE LANCEMENT</span>
          </div>

          {/* Titre */}
          <h3 className="text-2xl font-bold text-white leading-tight animate-fade-in">
            Site Vitrine + E-mail Pro
          </h3>

          {/* Prix */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-white/60 line-through text-lg">799 €</span>
                <span className="text-3xl font-bold text-yellow-300">249 €</span>
              </div>
              <p className="text-sm text-white/90">
                Hébergement + nom de domaine inclus
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 text-white/90">
            <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Globe className="w-5 h-5 mt-0.5 text-yellow-300 flex-shrink-0" />
              <p className="text-sm">
                Site web professionnel + adresse email personnalisée au nom de votre marque
              </p>
            </div>
          </div>

          {/* Période promo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-pulse">
            <p className="text-center text-white font-semibold">
              ⏰ Promotion valable jusqu'à fin d'année !
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2 pt-2">
            <Button 
              onClick={onContactClick}
              className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Contactez-nous par Email
            </Button>
            
            <a href="tel:0759909999">
              <Button 
                variant="outline"
                className="w-full border-yellow-300/80 bg-yellow-300/10 text-yellow-300 hover:bg-yellow-300/20 hover:border-yellow-300 hover:scale-105 transition-all duration-300 group font-bold"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                07 59 90 99 99
              </Button>
            </a>
          </div>

          <p className="text-center text-white/80 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Contactez-nous dès maintenant ! 🚀
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PromoAnnouncement;
