import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Server, 
  Cloud, 
  Shield, 
  Network, 
  Laptop, 
  Lock,
  Globe,
  MessageSquare,
  ArrowRight
} from "lucide-react";
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
    icon: Server,
    image: infogeranceImg,
    title: "Infogérance",
    description: "Gestion complète de votre infrastructure IT avec monitoring 24/7 et maintenance proactive.",
    color: "text-primary"
  },
  {
    icon: Network,
    image: infrastructureImg,
    title: "Infrastructure",
    description: "Conception et déploiement d'architectures réseau robustes et évolutives.",
    color: "text-secondary"
  },
  {
    icon: Laptop,
    image: virtualisationImg,
    title: "Virtualisation",
    description: "Optimisez vos ressources avec des solutions de virtualisation VMware, Hyper-V et KVM.",
    color: "text-primary"
  },
  {
    icon: Cloud,
    image: cloudImg,
    title: "Cloud",
    description: "Migration et gestion cloud (AWS, Azure, GCP) pour une infrastructure flexible et scalable.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    image: cybersecuriteImg,
    title: "Cybersécurité",
    description: "Protection avancée contre les cybermenaces avec audit, monitoring et solutions SOC.",
    color: "text-primary"
  },
  {
    icon: MessageSquare,
    image: consultingImg,
    title: "Consulting IT",
    description: "Conseil stratégique pour optimiser votre système d'information et votre transformation digitale.",
    color: "text-secondary"
  },
  {
    icon: Globe,
    image: websiteImg,
    title: "Création Site Web",
    description: "Développement de sites web modernes, performants et optimisés SEO.",
    color: "text-primary"
  },
  {
    icon: Lock,
    image: securitySolutionsImg,
    title: "Solutions Sécurité",
    description: "VPN d'entreprise, double authentification et solutions de contrôle d'accès avancées.",
    color: "text-secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Des solutions IT complètes et sur-mesure pour accompagner votre croissance
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              TPE & Startups
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              PME & ETI
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Grandes Entreprises
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 border-border/50 backdrop-blur-sm bg-card/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <Button asChild variant="ghost" className="w-full group/btn">
                  <Link to="/services" className="flex items-center justify-center gap-2">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
