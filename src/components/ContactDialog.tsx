import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, Shield } from "lucide-react";
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
    message: "",
    otpCode: ""
  });
  const [otpSent, setOtpSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const sendOTP = async () => {
    if (!formData.email) {
      toast({
        title: "Email requis",
        description: "Veuillez entrer votre email pour recevoir le code OTP.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Generate a 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store OTP in session storage (in production, this should be server-side)
      sessionStorage.setItem(`otp_${formData.email}`, otp);
      sessionStorage.setItem(`otp_time_${formData.email}`, Date.now().toString());

      // Send OTP via email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name || "Utilisateur",
          email: formData.email,
          phone: formData.phone,
          subject: "Code OTP - Vérification SecureGate Pro",
          message: `Votre code de vérification OTP est: ${otp}\n\nCe code est valide pendant 5 minutes.\n\nSi vous n'avez pas demandé ce code, veuillez ignorer ce message.`
        }
      });

      if (error) throw error;

      setOtpSent(true);
      toast({
        title: "Code OTP envoyé!",
        description: `Un code de vérification a été envoyé à ${formData.email}`,
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Impossible d'envoyer le code OTP. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const verifyOTP = () => {
    const storedOTP = sessionStorage.getItem(`otp_${formData.email}`);
    const otpTime = sessionStorage.getItem(`otp_time_${formData.email}`);
    
    if (!storedOTP || !otpTime) {
      toast({
        title: "Code invalide",
        description: "Aucun code OTP trouvé. Veuillez en demander un nouveau.",
        variant: "destructive",
      });
      return false;
    }

    // Check if OTP is expired (5 minutes)
    const timeElapsed = Date.now() - parseInt(otpTime);
    if (timeElapsed > 5 * 60 * 1000) {
      toast({
        title: "Code expiré",
        description: "Le code OTP a expiré. Veuillez en demander un nouveau.",
        variant: "destructive",
      });
      sessionStorage.removeItem(`otp_${formData.email}`);
      sessionStorage.removeItem(`otp_time_${formData.email}`);
      setOtpSent(false);
      return false;
    }

    if (formData.otpCode === storedOTP) {
      return true;
    } else {
      toast({
        title: "Code incorrect",
        description: "Le code OTP saisi est incorrect.",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otpSent) {
      await sendOTP();
      return;
    }

    setIsVerifying(true);
    
    if (!verifyOTP()) {
      setIsVerifying(false);
      return;
    }

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

      // Clean up
      sessionStorage.removeItem(`otp_${formData.email}`);
      sessionStorage.removeItem(`otp_time_${formData.email}`);
      setFormData({ name: "", email: "", phone: "", subject: defaultSubject || "", message: "", otpCode: "" });
      setOtpSent(false);
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
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
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Demande de Contact Sécurisée
          </DialogTitle>
          <DialogDescription>
            Pour votre sécurité, nous utilisons une authentification à deux facteurs (2FA) avec code OTP.
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
              disabled={otpSent}
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
              disabled={otpSent}
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
              disabled={otpSent}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Objet *
            </label>
            <Select value={formData.subject} onValueChange={handleSelectChange} required disabled={otpSent}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un objet" />
              </SelectTrigger>
              <SelectContent>
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
              disabled={otpSent}
            />
          </div>

          {otpSent && (
            <div className="space-y-2 p-4 bg-primary/5 border border-primary/20 rounded-lg animate-fade-in">
              <label htmlFor="otpCode" className="text-sm font-medium flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Code OTP (vérifié dans votre email) *
              </label>
              <Input
                id="otpCode"
                name="otpCode"
                type="text"
                placeholder="Entrez le code à 6 chiffres"
                required
                value={formData.otpCode}
                onChange={handleChange}
                maxLength={6}
                pattern="[0-9]{6}"
                className="text-center text-2xl tracking-widest font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Le code est valide pendant 5 minutes.{" "}
                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setFormData(prev => ({ ...prev, otpCode: "" }));
                  }}
                  className="text-primary hover:underline"
                >
                  Renvoyer un code
                </button>
              </p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent"
            disabled={isVerifying}
          >
            {isVerifying ? (
              "Vérification en cours..."
            ) : otpSent ? (
              <>
                Vérifier et Envoyer
                <Send className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Recevoir le code OTP
                <Shield className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
