import { Shield, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PromoSecureGateProps {
  onContactClick: () => void;
}

const PromoSecureGate = ({ onContactClick }: PromoSecureGateProps) => {
  return (
    <Card className="relative overflow-hidden border-2 border-primary/30 shadow-2xl bg-gradient-to-br from-card via-card/95 to-primary/5 backdrop-blur-sm max-w-4xl mx-auto">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLDAsMCkiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDIpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bounce">
          <Shield className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">OFFRE EXCLUSIVE</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Product Info */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SecureGate Pro
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Solution d'authentification à deux facteurs professionnelle
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold">Serveurs & Infrastructure</p>
                  <p className="text-sm text-muted-foreground">SSH, Linux, Windows, bases de données</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold">Postes Utilisateurs</p>
                  <p className="text-sm text-muted-foreground">Windows, Mac, Linux pour tous vos collaborateurs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold">Accès à Distance</p>
                  <p className="text-sm text-muted-foreground">VPN, RDP, SSH et tous vos tunnels sécurisés</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Pricing & CTA */}
          <div>
            <div className="bg-gradient-to-br from-primary via-primary/90 to-accent p-8 rounded-2xl text-white shadow-2xl mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 animate-pulse mb-4">
                  <Shield className="w-12 h-12" />
                </div>
                <div className="text-sm font-semibold opacity-90 mb-2">À partir de</div>
                <div className="text-5xl font-bold mb-2">3€</div>
                <div className="text-lg opacity-90">/utilisateur/mois</div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="opacity-90 text-xs">Protection</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="opacity-90 text-xs">Support</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={onContactClick}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Demander un rappel
              </Button>
              <a 
                href="tel:0493043526"
                className="flex items-center justify-center gap-2 w-full h-12 text-lg font-semibold border-2 border-primary rounded-md hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                04 93 04 35 26
              </a>
              <p className="text-center text-xs text-muted-foreground">
                Installation et configuration incluses • Sans engagement
              </p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive mb-1">+300%</div>
            <p className="text-xs text-muted-foreground">Cyberattaques en 2024</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">81%</div>
            <p className="text-xs text-muted-foreground">Violations de mots de passe</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">2FA</div>
            <p className="text-xs text-muted-foreground">Meilleure protection</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PromoSecureGate;
