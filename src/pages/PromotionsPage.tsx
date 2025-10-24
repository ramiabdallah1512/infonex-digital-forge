import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";
import ContactDialog from "@/components/ContactDialog";
import PromoAnnouncement from "@/components/PromoAnnouncement";
import PromoSecureGate from "@/components/PromoSecureGate";
import { Sparkles, Zap, Gift, TrendingUp } from "lucide-react";

const PromotionsPage = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      
      {/* Hero Section with Animations */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-glow"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-primary opacity-60" />
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-6 h-6 text-secondary opacity-60" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Sparkles className="w-10 h-10 text-accent opacity-60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 animate-pulse">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Offres Exclusives</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Nos <span className="text-primary animate-pulse">Promotions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profitez de nos offres exceptionnelles pour développer votre présence digitale
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid with Animations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Offres Flash",
                description: "Des réductions exceptionnelles pour booster votre business",
                delay: "0s"
              },
              {
                icon: TrendingUp,
                title: "Tarifs Avantageux",
                description: "Les meilleurs prix pour des services de qualité",
                delay: "0.2s"
              },
              {
                icon: Gift,
                title: "Bonus Inclus",
                description: "Hébergement et nom de domaine offerts",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Promo Section - Site Web */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Offre Création Site Web
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lancez votre présence en ligne avec notre offre exclusive
            </p>
          </div>
          
          <PromoAnnouncement 
            onContactClick={() => {
              setContactSubject("Demande de Rappel - Offre Promotionnelle");
              setContactDialogOpen(true);
            }} 
          />
        </div>
      </section>

      {/* SecureGate Pro Promo Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Offre SecureGate Pro
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sécurisez tous vos accès avec notre solution d'authentification professionnelle
            </p>
          </div>
          
          <PromoSecureGate 
            onContactClick={() => {
              setContactSubject("Demande de Rappel - SecureGate Pro");
              setContactDialogOpen(true);
            }} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant et profitez de nos offres exceptionnelles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0759909999"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              📞 07 59 90 99 99
            </a>
            <button 
              onClick={() => {
                setContactSubject("Demande de Rappel - Offre Promotionnelle");
                setContactDialogOpen(true);
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              📞 Demander un rappel
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
      <ContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
        defaultSubject={contactSubject}
      />
    </div>
  );
};

export default PromotionsPage;
