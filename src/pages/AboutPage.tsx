import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp, Shield, Target, Zap } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                À Propos d'Infonex
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Votre partenaire de confiance pour l'excellence IT
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">Notre Mission</h2>
                <p className="text-xl text-muted-foreground">
                  Transformer la complexité IT en opportunités de croissance
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Infonex est née de la conviction qu'une infrastructure IT performante est la clé du succès des entreprises modernes. 
                  En tant qu'auto-entrepreneur passionné par les technologies, je me suis donné pour mission d'accompagner 
                  les entreprises dans leur transformation digitale avec des solutions sur-mesure, performantes et sécurisées.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Chaque projet est unique et mérite une approche personnalisée. C'est pourquoi je m'engage à comprendre 
                  vos enjeux métier pour proposer des solutions IT qui s'alignent parfaitement avec vos objectifs stratégiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Nos Valeurs</h2>
              <p className="text-xl text-muted-foreground">
                Les principes qui guident notre action au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Sécurité",
                  description: "La protection de vos données et systèmes est notre priorité absolue. Nous appliquons les standards les plus élevés de cybersécurité."
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies du marché."
                },
                {
                  icon: Users,
                  title: "Proximité",
                  description: "Une relation de confiance basée sur l'écoute, la transparence et un accompagnement personnalisé à chaque étape."
                },
                {
                  icon: Zap,
                  title: "Réactivité",
                  description: "Des interventions rapides et un support technique disponible pour garantir la continuité de vos activités."
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Veille technologique constante pour vous proposer les solutions les plus innovantes et performantes."
                },
                {
                  icon: Target,
                  title: "Résultats",
                  description: "Orientation résultats avec des KPIs mesurables et un ROI démontré sur chaque projet."
                }
              ].map((value, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Nous Choisir */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Pourquoi Choisir Infonex ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  title: "Expertise Technique Pointue",
                  description: "Des compétences avancées sur l'ensemble des technologies IT modernes : cloud, virtualisation, cybersécurité, infrastructure réseau.",
                  highlight: "10+ ans d'expérience"
                },
                {
                  title: "Approche Sur-Mesure",
                  description: "Pas de solution toute faite. Chaque projet est analysé en profondeur pour proposer l'architecture la plus adaptée à vos besoins.",
                  highlight: "100% personnalisé"
                },
                {
                  title: "Support Réactif",
                  description: "Une disponibilité maximale pour résoudre vos problématiques rapidement et minimiser l'impact sur votre activité.",
                  highlight: "Réponse < 2h"
                },
                {
                  title: "Optimisation des Coûts",
                  description: "Des solutions rentables qui maximisent votre retour sur investissement tout en garantissant qualité et performance.",
                  highlight: "ROI optimisé"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Travaillons Ensemble
              </h2>
              <p className="text-xl text-white/90">
                Discutons de votre projet et découvrez comment Infonex peut propulser votre transformation digitale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/#contact">Prendre Contact</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/services">Découvrir Nos Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
