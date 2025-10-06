import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Infonex
            </h3>
            <p className="text-muted-foreground">
              Votre partenaire de confiance pour toutes vos solutions IT et cybersécurité.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Infogérance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Infrastructure & Virtualisation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Cloud & Cybersécurité
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Consulting IT
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Création de sites web
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1 Pass. Amélie de Pitteurs<br />91360 Épinay-sur-Orge</span>
              </div>
              <a 
                href="mailto:contact@infonex.fr" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@infonex.fr
              </a>
              <a 
                href="tel:0961085166" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                09 61 08 51 66
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p>&copy; {currentYear} Infonex. Tous droits réservés.</p>
            <span className="hidden md:inline">•</span>
            <Link to="/rgpd" className="hover:text-primary transition-colors">
              Politique de confidentialité (RGPD)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
