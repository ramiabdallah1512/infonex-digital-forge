import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Expertise technique reconnue et certifiée",
  "Support réactif disponible 24/7",
  "Solutions sur-mesure adaptées à vos besoins",
  "Sécurité et conformité garanties",
  "Accompagnement dans votre transformation digitale",
  "Tarifs transparents et compétitifs"
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pourquoi choisir
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Infonex ?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Nous combinons expertise technique, innovation et proximité pour vous offrir 
              des solutions IT qui propulsent votre entreprise vers l'excellence.
            </p>
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xl font-medium">Satisfaction Client</div>
                </div>
                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">+5</div>
                    <div className="text-sm text-muted-foreground">Ans d'expérience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
