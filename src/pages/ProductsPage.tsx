import { useState } from "react";
import { Globe, Mail, Cloud, Shield, BarChart3, HeadphonesIcon, Server, Activity, Building2, Users, CheckCircle2, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteDialog from "@/components/QuoteDialog";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };
  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Produits
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Une gamme universelle, pensée pour tous.
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Chez InfoNex, nous avons conçu une série de produits numériques accessibles à tous les profils — particuliers, artisans, petites et moyennes entreprises, comme grandes organisations. Chaque solution allie simplicité, performance et sécurité, pour vous accompagner efficacement dans votre transformation digitale.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Numériques pour Tous */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions Numériques pour Tous</h2>
                <p className="text-muted-foreground">
                  Des outils simples, fiables et prêts à l'emploi pour démarrer votre présence digitale.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      InfoWeb Start
                    </CardTitle>
                    <CardDescription>
                      Créez votre site vitrine professionnel en quelques clics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hébergement, design moderne, nom de domaine et assistance inclus. Idéal pour artisans, indépendants et petites structures.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      InfoMail Pro
                    </CardTitle>
                    <CardDescription>
                      Votre adresse e-mail professionnelle
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Votre adresse e-mail professionnelle (ex. contact@votreentreprise.fr) avec protection anti-spam et stockage cloud sécurisé. Image sérieuse et communication fiable pour tous.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cloud className="w-5 h-5 text-primary" />
                      InfoCloud Backup
                    </CardTitle>
                    <CardDescription>
                      Sauvegardez automatiquement vos fichiers importants
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sauvegardez automatiquement vos fichiers importants dans un espace sécurisé. Accédez à vos données depuis n'importe où, en toute sécurité.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      InfoSecure Home
                    </CardTitle>
                    <CardDescription>
                      Protégez vos appareils et vos données
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Protégez vos appareils et vos données avec un pack de cybersécurité simple et efficace : VPN, antivirus, pare-feu léger et surveillance en ligne.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Professionnelles */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions Professionnelles</h2>
                <p className="text-muted-foreground">
                  Des produits conçus pour améliorer la gestion, la sécurité et la performance de votre entreprise.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      InfoWeb Business
                    </CardTitle>
                    <CardDescription>
                      Site web professionnel complet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Site web professionnel complet avec référencement (SEO), hébergement optimisé et support technique. Une vitrine performante pour votre activité.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      InfoERP Light
                    </CardTitle>
                    <CardDescription>
                      Simplifiez votre gestion quotidienne
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Simplifiez votre gestion quotidienne : clients, devis, factures, stocks et tableaux de bord. Une solution intuitive pour TPE et PME.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-primary" />
                      InfoSecure Pro
                    </CardTitle>
                    <CardDescription>
                      Sécurité avancée pour votre entreprise
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sécurité avancée avec authentification à deux facteurs, gestion des accès et sauvegardes automatiques. Protégez vos systèmes et vos équipes.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HeadphonesIcon className="w-5 h-5 text-primary" />
                      InfoDesk
                    </CardTitle>
                    <CardDescription>
                      Centralisez vos demandes clients et incidents IT
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Centralisez vos demandes clients et incidents IT dans une plateforme claire et collaborative. Améliorez votre service client et votre réactivité.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Avancées & Sur Mesure */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions Avancées & Sur Mesure</h2>
                <p className="text-muted-foreground">
                  Pour les entreprises à forte exigence technologique et infrastructurelle.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cloud className="w-5 h-5 text-primary" />
                      InfoCloud Entreprise
                    </CardTitle>
                    <CardDescription>
                      Migration, hébergement et gestion cloud
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Migration, hébergement et gestion cloud (AWS, Azure, GCP). Infrastructure scalable, fiable et hautement disponible.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      InfoMonitor 24/7
                    </CardTitle>
                    <CardDescription>
                      Supervision continue de vos systèmes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supervision continue de vos serveurs, réseaux et applications. Alertes en temps réel et maintenance proactive.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      InfoInfra
                    </CardTitle>
                    <CardDescription>
                      Conception et déploiement d'architectures IT
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Conception et déploiement d'architectures IT sur mesure, adaptées à vos besoins de performance et de sécurité.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      InfoConsult
                    </CardTitle>
                    <CardDescription>
                      Accompagnement stratégique et transformation digitale
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Accompagnement stratégique, audit et transformation digitale de votre organisation.
                    </p>
                    <Button className="w-full" onClick={() => setQuoteDialogOpen(true)}>Demander un devis</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir InfoNex */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Pourquoi choisir InfoNex ?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Solutions évolutives</h3>
                    <p className="text-sm text-muted-foreground">Adaptées à votre taille d'entreprise</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Sécurité garantie</h3>
                    <p className="text-sm text-muted-foreground">Protection et confidentialité de vos données</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Accompagnement humain</h3>
                    <p className="text-sm text-muted-foreground">Support technique disponible</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Technologie de pointe</h3>
                    <p className="text-sm text-muted-foreground">Accessible à tous</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous proposer la solution adaptée à vos besoins
            </p>
            <Button size="lg" onClick={handleContactClick}>
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  );
};

export default ProductsPage;
