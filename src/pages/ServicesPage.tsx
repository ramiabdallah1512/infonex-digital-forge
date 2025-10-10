import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import QuoteDialog from "@/components/QuoteDialog";
import infogeranceImg from "@/assets/services/infogerance.jpg";
import infrastructureImg from "@/assets/services/infrastructure.jpg";
import virtualisationImg from "@/assets/services/virtualisation.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import cybersecuriteImg from "@/assets/services/cybersecurite.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import websiteImg from "@/assets/services/website.jpg";
import securitySolutionsImg from "@/assets/services/security-solutions.jpg";

const services = [
  {
    id: "infogerance",
    image: infogeranceImg,
    title: "Infogérance Complète",
    subtitle: "Monitoring 24/7 et Maintenance Proactive",
    description: "Confiez-nous la gestion complète de votre infrastructure IT et concentrez-vous sur votre cœur de métier.",
    features: [
      "Surveillance réseau et systèmes 24h/24, 7j/7",
      "Maintenance préventive et corrective",
      "Gestion des incidents et résolution rapide",
      "Reporting mensuel détaillé",
      "Support technique multicanal",
      "Optimisation continue de vos performances"
    ],
    benefits: "Réduisez vos coûts IT jusqu'à 40% tout en améliorant la disponibilité de vos services"
  },
  {
    id: "infrastructure",
    image: infrastructureImg,
    title: "Infrastructure Réseau",
    subtitle: "Architectures Robustes et Évolutives",
    description: "Conception, déploiement et optimisation d'infrastructures réseau de nouvelle génération.",
    features: [
      "Audit et diagnostic réseau complet",
      "Conception d'architecture sur-mesure",
      "Déploiement d'équipements professionnels",
      "Sécurisation des flux de données",
      "Optimisation des performances",
      "Documentation technique complète"
    ],
    benefits: "Une infrastructure fiable qui grandit avec votre entreprise"
  },
  {
    id: "virtualisation",
    image: virtualisationImg,
    title: "Virtualisation Avancée",
    subtitle: "VMware, Hyper-V, KVM",
    description: "Optimisez vos ressources et réduisez vos coûts avec nos solutions de virtualisation professionnelles.",
    features: [
      "Migration vers environnements virtualisés",
      "Consolidation de serveurs physiques",
      "Haute disponibilité et tolérance aux pannes",
      "Sauvegarde et reprise d'activité",
      "Gestion centralisée des ressources",
      "Optimisation des licences logicielles"
    ],
    benefits: "Réduction de 60% des coûts d'infrastructure matérielle"
  },
  {
    id: "cloud",
    image: cloudImg,
    title: "Solutions Cloud",
    subtitle: "AWS, Azure, Google Cloud Platform",
    description: "Migration et gestion cloud pour une infrastructure flexible, scalable et sécurisée.",
    features: [
      "Audit et stratégie cloud personnalisée",
      "Migration sécurisée vers le cloud",
      "Architecture multi-cloud et hybrid",
      "Optimisation des coûts cloud",
      "Sécurité et conformité",
      "Monitoring et support continu"
    ],
    benefits: "Scalabilité illimitée et paiement à l'usage pour maîtriser vos dépenses"
  },
  {
    id: "cybersecurite",
    image: cybersecuriteImg,
    title: "Cybersécurité",
    subtitle: "Protection Multicouche Avancée",
    description: "Protégez votre entreprise contre les cybermenaces avec nos solutions de sécurité de pointe.",
    features: [
      "Audit de sécurité et tests d'intrusion",
      "Déploiement de solutions SOC/SIEM",
      "Protection contre les ransomwares",
      "Gestion des vulnérabilités",
      "Formation et sensibilisation",
      "Plan de reprise après incident"
    ],
    benefits: "Conformité RGPD et protection à 99.9% contre les menaces connues"
  },
  {
    id: "consulting",
    image: consultingImg,
    title: "Consulting IT",
    subtitle: "Stratégie et Transformation Digitale",
    description: "Accompagnement expert pour optimiser votre système d'information et réussir votre transformation digitale.",
    features: [
      "Audit SI et diagnostic stratégique",
      "Feuille de route technologique",
      "Gestion de projet IT",
      "Optimisation des processus",
      "Accompagnement au changement",
      "Veille technologique et innovation"
    ],
    benefits: "Alignez votre IT avec vos objectifs business pour un ROI maximisé"
  },
  {
    id: "creation-web",
    image: websiteImg,
    title: "Création de Sites Web",
    subtitle: "Modernes, Performants, Optimisés SEO",
    description: "Développement de sites web sur-mesure qui convertissent vos visiteurs en clients.",
    features: [
      "Design moderne et responsive",
      "Développement sur-mesure",
      "Optimisation SEO avancée",
      "Performance et rapidité",
      "Sécurité renforcée",
      "Maintenance et évolutions"
    ],
    benefits: "Augmentez votre visibilité en ligne et générez plus de leads qualifiés"
  },
  {
    id: "securite",
    image: securitySolutionsImg,
    title: "Solutions Sécurité",
    subtitle: "VPN, 2FA, Contrôle d'Accès",
    description: "Sécurisez les accès à votre système d'information avec nos solutions d'authentification et de chiffrement.",
    features: [
      "VPN d'entreprise sécurisé",
      "Double authentification (2FA/MFA)",
      "SSO (Single Sign-On)",
      "Gestion des identités et accès (IAM)",
      "Chiffrement des communications",
      "Contrôle d'accès granulaire"
    ],
    benefits: "Protégez vos données sensibles avec une sécurité de niveau bancaire"
  }
];

const ServicesPage = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Nos Services IT
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Des solutions complètes et sur-mesure pour propulser votre transformation digitale
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                      <p className="text-xl text-primary font-semibold">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">Nos Prestations :</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                      <CardContent className="p-6">
                        <p className="text-sm font-medium">
                          <span className="text-primary">💡 Avantage clé :</span> {service.benefits}
                        </p>
                      </CardContent>
                    </Card>

                    <Button 
                      size="lg" 
                      className="group"
                      onClick={() => setQuoteDialogOpen(true)}
                    >
                      Demander un Devis
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
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
                Prêt à Transformer Votre IT ?
              </h2>
              <p className="text-xl text-white/90">
                Contactez-nous pour un audit gratuit et découvrez comment nous pouvons optimiser votre infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link to="/#contact">Demander un Audit Gratuit</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg bg-white text-primary hover:bg-white/90">
                  <a href="tel:0961085166">Appeler : 09 61 08 51 66</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  );
};

export default ServicesPage;
