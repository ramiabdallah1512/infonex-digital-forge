import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }
      });

      if (error) throw error;

      toast({
        title: "Message envoyé avec succès!",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
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
                  <label htmlFor="subject" className="text-sm font-medium">
                    Objet *
                  </label>
                  <Select value={formData.subject} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un objet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Infrastructure IT & Réseaux">Infrastructure IT & Réseaux</SelectItem>
                      <SelectItem value="Cybersécurité">Cybersécurité</SelectItem>
                      <SelectItem value="Cloud & Virtualisation">Cloud & Virtualisation</SelectItem>
                      <SelectItem value="Développement Web">Développement Web</SelectItem>
                      <SelectItem value="Infogérance">Infogérance</SelectItem>
                      <SelectItem value="Consulting IT">Consulting IT</SelectItem>
                      <SelectItem value="Autre demande">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
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
