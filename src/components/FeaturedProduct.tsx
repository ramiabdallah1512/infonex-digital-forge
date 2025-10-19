import { Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge and Title */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Produit Phare InfoNex</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SecureGate Pro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La solution d'authentification à deux facteurs qui révolutionne la sécurité de vos accès
            </p>
          </div>

          {/* Main Card */}
          <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-card/50 backdrop-blur-sm animate-scale-in">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Visual Impact */}
              <div className="bg-gradient-to-br from-primary via-primary/90 to-accent p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-50" />
                
                <div className="relative z-10 text-center">
                  <div className="mb-8 relative">
                    <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 animate-pulse">
                      <Shield className="w-16 h-16" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">99.9%</h3>
                  <p className="text-xl mb-2 opacity-90">De protection garantie</p>
                  <p className="text-sm opacity-75">contre les cyberattaques</p>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="opacity-90">Support</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">3€</div>
                      <div className="opacity-90">Dès 3€/mois</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Features & CTA */}
              <div className="p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6">Protégez tous vos accès critiques</h3>
                  <div className="space-y-4">
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

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                  <p className="text-sm font-semibold text-primary mb-2">✨ Offre de lancement</p>
                  <p className="text-2xl font-bold mb-1">À partir de 3€/utilisateur/mois</p>
                  <p className="text-sm text-muted-foreground">Installation, configuration et support inclus</p>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                    onClick={() => {
                      navigate('/products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Découvrir SecureGate Pro
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Démo gratuite • Sans engagement • Installation rapide
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in">
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="text-3xl font-bold text-destructive mb-2">+300%</div>
              <p className="text-sm text-muted-foreground">Augmentation des cyberattaques en 2024</p>
            </Card>
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">81%</div>
              <p className="text-sm text-muted-foreground">Des violations dues à des mots de passe faibles</p>
            </Card>
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="text-3xl font-bold text-accent mb-2">2FA</div>
              <p className="text-sm text-muted-foreground">La meilleure protection contre le piratage</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
