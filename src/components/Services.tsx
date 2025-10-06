import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, 
  Cloud, 
  Shield, 
  Network, 
  Laptop, 
  Lock,
  Globe,
  MessageSquare
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Infogérance",
    description: "Gestion complète de votre infrastructure IT avec monitoring 24/7 et maintenance proactive.",
    color: "text-primary"
  },
  {
    icon: Network,
    title: "Infrastructure",
    description: "Conception et déploiement d'architectures réseau robustes et évolutives.",
    color: "text-secondary"
  },
  {
    icon: Laptop,
    title: "Virtualisation",
    description: "Optimisez vos ressources avec des solutions de virtualisation VMware, Hyper-V et KVM.",
    color: "text-primary"
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Migration et gestion cloud (AWS, Azure, GCP) pour une infrastructure flexible et scalable.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection avancée contre les cybermenaces avec audit, monitoring et solutions SOC.",
    color: "text-primary"
  },
  {
    icon: MessageSquare,
    title: "Consulting IT",
    description: "Conseil stratégique pour optimiser votre système d'information et votre transformation digitale.",
    color: "text-secondary"
  },
  {
    icon: Globe,
    title: "Création Site Web",
    description: "Développement de sites web modernes, performants et optimisés SEO.",
    color: "text-primary"
  },
  {
    icon: Lock,
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
