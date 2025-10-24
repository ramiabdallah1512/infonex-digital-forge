import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: "Accueil", path: "/", type: "link" },
    { label: "Services", path: "/services", type: "link" },
    { label: "Produits", path: "/products", type: "link" },
    { label: "Promotions", path: "/promotions", type: "link" },
    { label: "À Propos", path: "/about", type: "link" },
    { label: "Contact", id: "contact", type: "scroll" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Infonex Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-foreground">
              Info<span className="text-primary">nex</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              if (item.type === "link") {
                const isActive = location.pathname === item.path;
                if (item.path === "/") {
                  return (
                    <a
                      key={item.label}
                      href="/"
                      onClick={handleHomeClick}
                      className={`font-medium transition-colors relative group ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.path!}
                    className={`font-medium transition-colors relative group ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                );
              }
            })}
            <Button 
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {menuItems.map((item) => {
              if (item.type === "link") {
                const isActive = location.pathname === item.path;
                if (item.path === "/") {
                  return (
                    <a
                      key={item.label}
                      href="/"
                      onClick={handleHomeClick}
                      className={`block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium ${
                        isActive ? 'text-primary' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.path!}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium ${
                      isActive ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id!)}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                );
              }
            })}
            <div className="px-4">
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="w-full bg-gradient-to-r from-primary to-secondary"
              >
                Demander un devis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
