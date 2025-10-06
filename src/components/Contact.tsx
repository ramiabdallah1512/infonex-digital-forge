import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le mailto avec les informations du formulaire
    const subject = encodeURIComponent(`Demande de contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:contact@infonex.fr?subject=${subject}&body=${body}`;
    
    toast({
      title: "Message en cours d'envoi",
      description: "Votre client email va s'ouvrir avec votre message pré-rempli.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground">
            Discutons de votre projet et trouvons ensemble les solutions adaptées à vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:contact@infonex.fr" 
                  className="text-lg text-primary hover:underline"
                >
                  contact@infonex.fr
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:0961085166" 
                  className="text-lg text-primary hover:underline"
                >
                  09 61 08 51 66
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  Disponibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Lundi - Vendredi : 9h - 18h</p>
                <p className="text-sm text-muted-foreground mt-2">Support 24/7 pour nos clients</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20 shadow-lg shadow-primary/5 animate-scale-in">
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire et nous vous répondrons dans les plus brefs délais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez-nous votre projet..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  size="lg"
                >
                  Envoyer le message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
