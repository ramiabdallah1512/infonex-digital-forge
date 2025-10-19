import { useState } from "react";
import { Shield, Lock, Server, Smartphone, CheckCircle2, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import secureGateHero from "@/assets/securegate-hero-new.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import QuoteDialog from "@/components/QuoteDialog";
import ContactDialog from "@/components/ContactDialog";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [userCount, setUserCount] = useState([5]);

  const calculatePrice = (users: number) => {
    if (users < 50) return { price: users * 3, period: "/mois", isQuote: false };
    if (users <= 100) return { price: users * 2, period: "/mois", isQuote: false };
    return { price: 0, period: "", isQuote: true };
  };

  const pricing = calculatePrice(userCount[0]);

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main className="pt-20">
        {/* Hero Section - Security Alert */}
        <section className="relative bg-gradient-to-br from-destructive/20 via-background to-primary/10 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="text-center md:text-left space-y-6">
                  <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-2 animate-pulse backdrop-blur-sm">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="text-sm font-semibold text-destructive">Alerte Sécurité</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in leading-tight">
                    SecureGate Pro
                  </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
                  La double authentification professionnelle qui protège vraiment vos accès
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Face à l'augmentation massive des cyberattaques en 2025, la simple protection par mot de passe ne suffit plus. 
                  Chaque jour, des entreprises sont victimes de piratages qui auraient pu être évités avec une authentification à deux facteurs.
                </p>
              </div>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-50" />
                <img 
                  src={secureGateHero} 
                  alt="SecureGate Pro - Authentification à deux facteurs" 
                  className="w-full max-w-lg rounded-2xl shadow-2xl animate-fade-in hover-scale transition-all duration-500 relative z-10 border-2 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-destructive mb-2">+300%</div>
                <p className="text-sm text-muted-foreground">Augmentation des cyberattaques en 2024</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-primary mb-2">81%</div>
                <p className="text-sm text-muted-foreground">Des violations dues à des mots de passe faibles</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">De protection avec la 2FA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Product Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* Left: Product Features */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Une protection universelle pour tous vos accès
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      InfoSecure 2FA est la solution d'authentification à deux facteurs qui sécurise l'ensemble de vos points d'accès critiques avec des codes OTP (One-Time Password) impossibles à pirater.
                    </p>
                  </div>

                  <div className="space-y-6">
                  <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20 group backdrop-blur-sm bg-card/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all group-hover:scale-110">
                          <Server className="w-5 h-5 text-primary" />
                        </div>
                        Serveurs & Infrastructure
                      </CardTitle>
                    </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Protection SSH, serveurs Linux/Windows, bases de données et systèmes critiques
                        </p>
                      </CardContent>
                    </Card>

                  <Card className="border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20 group backdrop-blur-sm bg-card/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all group-hover:scale-110">
                          <Smartphone className="w-5 h-5 text-accent" />
                        </div>
                        Postes Utilisateurs
                      </CardTitle>
                    </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Sécurisation des sessions Windows, Mac, Linux pour tous vos collaborateurs
                        </p>
                      </CardContent>
                    </Card>

                  <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/20 group backdrop-blur-sm bg-card/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-all group-hover:scale-110">
                          <Lock className="w-5 h-5 text-secondary" />
                        </div>
                        Accès à Distance
                      </CardTitle>
                    </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          VPN, RDP, accès SSH et tous vos tunnels sécurisés
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Right: Pricing Calculator */}
                <div className="sticky top-24">
                  <Card className="border-2 border-primary/30 shadow-xl backdrop-blur-sm bg-card/80 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                    <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                      <CardTitle className="text-2xl text-center">
                        <Shield className="w-8 h-8 mx-auto mb-3 text-primary animate-pulse" />
                        Configurez votre protection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium mb-4 block">
                            Nombre d'utilisateurs à protéger
                          </label>
                          <Slider
                            value={userCount}
                            onValueChange={setUserCount}
                            min={1}
                            max={100}
                            step={1}
                            className="mb-4"
                          />
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>1 utilisateur</span>
                            <span className="font-bold text-2xl text-primary">{userCount[0]}</span>
                            <span>100+ utilisateurs</span>
                          </div>
                        </div>

                        <div className="bg-primary/5 rounded-lg p-6 text-center border border-primary/20">
                          {pricing.isQuote ? (
                            <div>
                              <div className="text-3xl font-bold text-primary mb-2">Sur Devis</div>
                              <p className="text-sm text-muted-foreground">
                                Pour plus de 100 utilisateurs, contactez-nous pour une offre personnalisée
                              </p>
                            </div>
                          ) : (
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">À partir de</div>
                              <div className="text-5xl font-bold text-primary mb-1">
                                {pricing.price}€
                              </div>
                              <div className="text-muted-foreground">{pricing.period}</div>
                              <div className="text-xs text-muted-foreground mt-2">
                                {userCount[0] < 50 ? "3€/utilisateur/mois" : "2€/utilisateur/mois"}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Codes OTP sécurisés (TOTP/HOTP)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Installation et configuration incluses</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Accompagnement personnalisé</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-primary">Support prioritaire 24/7</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button 
                            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group" 
                            onClick={() => setQuoteDialogOpen(true)}
                          >
                            {pricing.isQuote ? "Demander un devis" : "Commander maintenant"}
                            <Shield className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                          </Button>
                          <Button 
                            variant="outline"
                            className="w-full h-12 text-lg font-semibold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all" 
                            onClick={() => setContactDialogOpen(true)}
                          >
                            Demander une démo
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why 2FA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Pourquoi la double authentification est indispensable ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-6 h-6" />
                      Sans 2FA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>❌ Mots de passe facilement piratés</p>
                    <p>❌ Accès non autorisés aux données</p>
                    <p>❌ Risque de ransomware élevé</p>
                    <p>❌ Conformité RGPD non garantie</p>
                    <p>❌ Réputation de l'entreprise menacée</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Shield className="w-6 h-6" />
                      Avec SecureGate Pro
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>✅ Protection renforcée contre le piratage</p>
                    <p>✅ Accès sécurisés en temps réel</p>
                    <p>✅ Blocage automatique des intrusions</p>
                    <p>✅ Conformité réglementaire assurée</p>
                    <p>✅ Confiance clients renforcée</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary via-accent to-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ne laissez plus vos accès vulnérables
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez les centaines d'entreprises qui protègent leurs systèmes avec SecureGate Pro. 
              Notre équipe vous accompagne de A à Z dans la mise en place.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="h-14 px-8 text-lg font-semibold"
              onClick={() => setQuoteDialogOpen(true)}
            >
              Démarrer maintenant
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
      <ContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
        defaultSubject="SecureGate Pro - Demande de démo"
      />
    </div>
  );
};

export default ProductsPage;
