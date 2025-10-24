import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Sparkles, Globe, X } from "lucide-react";
import { useState } from "react";

interface PromoAnnouncementProps {
  onContactClick: () => void;
}

const PromoAnnouncement = ({ onContactClick }: PromoAnnouncementProps) => {
  return (
    <div className="relative z-10 animate-scale-in max-w-[calc(100vw-2rem)] md:max-w-md w-full mx-auto">
      <Card className="relative bg-gradient-to-br from-primary via-accent to-secondary p-4 md:p-6 border-2 border-white/20 shadow-2xl animate-glow">
        
        {/* Sparkles animation - masqués sur mobile */}
        <div className="hidden md:block absolute top-2 left-2 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="hidden md:block absolute bottom-2 right-2 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </div>

        <div className="space-y-2.5 md:space-y-4">
          {/* Badge promo */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-bounce">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
            <span className="text-xs md:text-sm font-bold text-white">💥 OFFRE DE LANCEMENT</span>
          </div>

          {/* Titre */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight animate-fade-in">
            Site Vitrine + E-mail Pro
          </h3>

          {/* Texte au-dessus du prix */}
          <p className="text-center text-white font-semibold text-sm md:text-base animate-fade-in" style={{ animationDelay: "0.05s" }}>
            💼 Votre présence en ligne professionnelle dès aujourd'hui
          </p>

          {/* Prix */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                <span className="text-white/60 line-through text-base md:text-lg">799 €</span>
                <span className="text-2xl md:text-3xl font-bold text-yellow-300">249 €</span>
              </div>
              <p className="text-xs md:text-sm text-white/90">
                Hébergement + nom de domaine inclus
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5 md:space-y-2 text-white/90">
            <div className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Globe className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-yellow-300 flex-shrink-0" />
              <p className="text-xs md:text-sm">
                Site web professionnel + adresse email personnalisée au nom de votre marque
              </p>
            </div>
          </div>

          {/* Message d'accompagnement */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <p className="text-white font-semibold mb-1.5 md:mb-2 text-sm md:text-base">🚀 Lancez votre business numériquement avec nous !</p>
            <p className="text-white/90 text-xs md:text-sm">
              On vous accompagne pour booster votre carrière et votre marque.
            </p>
          </div>

          {/* Période promo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-white/20 animate-pulse">
            <p className="text-center text-white font-semibold text-xs md:text-sm">
              ⏰ Offre valable jusqu'au 31 décembre 2025
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-1.5 md:space-y-2 pt-1 md:pt-2">
            <Button 
              onClick={onContactClick}
              className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 group text-xs md:text-sm h-9 md:h-11"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 group-hover:rotate-12 transition-transform" />
              ✉️ Obtenir mon offre maintenant
            </Button>
            
            <a href="tel:0759909999">
              <Button 
                variant="outline"
                className="w-full border-yellow-300/80 bg-yellow-300/10 text-yellow-300 hover:bg-yellow-300/20 hover:border-yellow-300 hover:scale-105 transition-all duration-300 group font-bold text-xs md:text-sm h-9 md:h-11"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 group-hover:rotate-12 transition-transform" />
                07 59 90 99 99
              </Button>
            </a>
          </div>

          {/* Ligne de confiance */}
          <div className="bg-white/5 rounded-lg p-2 md:p-3 border border-white/10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-center text-white/90 text-[10px] md:text-xs">
              🔒 Paiement sécurisé • 🌐 Hébergement français • ⭐ Support Infonex
            </p>
          </div>

          <p className="text-center text-white/80 text-xs md:text-sm animate-fade-in" style={{ animationDelay: "0.35s" }}>
            Contactez-nous dès maintenant ! 🚀
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PromoAnnouncement;
