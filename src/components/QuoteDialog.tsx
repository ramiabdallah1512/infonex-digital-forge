import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    postsCount: "",
    licensesCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Infrastructure IT & Réseaux",
    "Infogérance",
    "Cybersécurité",
    "Cloud Computing",
    "Virtualisation",
    "Solutions de Sécurité",
    "Développement Web",
    "Consulting IT",
    "Autre demande"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: `Demande de devis - ${formData.service}`,
          message: `Nombre de postes: ${formData.postsCount}\nNombre de licenses: ${formData.licensesCount}\n\nDétails:\n${formData.message}`,
        },
      });

      if (error) throw error;

      toast.success("Votre demande de devis a été envoyée avec succès !");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        postsCount: "",
        licensesCount: "",
        message: "",
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Demander un devis</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jean Dupont"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Entreprise *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jean.dupont@entreprise.fr"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+33 6 12 34 56 78"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="service">Service concerné *</Label>
              <Select value={formData.service} onValueChange={handleSelectChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postsCount">Nombre de postes *</Label>
              <Input
                id="postsCount"
                name="postsCount"
                type="number"
                min="1"
                value={formData.postsCount}
                onChange={handleChange}
                required
                placeholder="10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="licensesCount">Nombre de licences *</Label>
              <Input
                id="licensesCount"
                name="licensesCount"
                type="number"
                min="1"
                value={formData.licensesCount}
                onChange={handleChange}
                required
                placeholder="10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Détails complémentaires</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet et vos besoins spécifiques..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
