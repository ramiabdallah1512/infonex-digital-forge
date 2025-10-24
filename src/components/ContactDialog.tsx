import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
}

const ContactDialog = ({ open, onOpenChange, defaultSubject }: ContactDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: defaultSubject || "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
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

      setFormData({ name: "", email: "", phone: "", subject: defaultSubject || "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Demande de Contact</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </DialogDescription>
        </DialogHeader>
        
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
                <SelectItem value="Demande de Rappel - Offre Promotionnelle">Demande de Rappel - Offre Promotionnelle</SelectItem>
                <SelectItem value="SecureGate Pro - Demande de démo">SecureGate Pro - Demande de démo</SelectItem>
                <SelectItem value="SecureGate Pro - Devis personnalisé">SecureGate Pro - Devis personnalisé</SelectItem>
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
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer le message
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
