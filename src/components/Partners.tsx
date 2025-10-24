import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "HP", description: "Serveurs & Infrastructure" },
    { name: "Dell", description: "Solutions Entreprise" },
    { name: "Lenovo", description: "Matériel Professionnel" },
    { name: "Microsoft", description: "Cloud & Licences" },
    { name: "Red Hat", description: "Solutions Linux" },
    { name: "VMware", description: "Virtualisation" },
    { name: "Proxmox", description: "Virtualisation Open Source" },
    { name: "TrueNAS", description: "Stockage & NAS" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nos Partenaires Technologiques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous collaborons avec les leaders mondiaux de la technologie pour vous garantir 
            des solutions de pointe et un support technique optimal
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground">
            <strong className="text-primary">Certifications & Expertises</strong> sur l'ensemble de ces technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
