import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import QuoteDialog from "@/components/QuoteDialog";

const RGPDPage = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setQuoteDialogOpen(true)} />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-muted-foreground">
              Votre vie privée est notre priorité
            </p>
          </div>

          <div className="space-y-8 text-foreground animate-fade-in-up">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Collecte des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Infonex collecte uniquement les données nécessaires à la fourniture de nos services IT. 
                Les informations recueillies via notre formulaire de contact (nom, email, téléphone, message) 
                sont utilisées exclusivement pour répondre à vos demandes et améliorer nos prestations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Utilisation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles sont traitées dans le respect du Règlement Général sur la Protection 
                des Données (RGPD). Nous les utilisons pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Assurer le suivi de nos prestations de services</li>
                <li>Améliorer la qualité de nos services IT</li>
                <li>Vous informer de nos nouveautés (avec votre consentement)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Protection des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                En tant qu'experts en cybersécurité, nous mettons en œuvre des mesures techniques et 
                organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, 
                modification, divulgation ou destruction. Nos systèmes sont sécurisés et régulièrement audités.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Conservation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont conservées uniquement pendant la durée nécessaire aux finalités pour 
                lesquelles elles ont été collectées, conformément aux obligations légales en vigueur. 
                Les données de contact sont conservées 3 ans maximum après votre dernier contact.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@infonex.fr" className="text-primary hover:underline">contact@infonex.fr</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies essentiels au fonctionnement du site. Aucun cookie de 
                tracking ou publicitaire n'est utilisé sans votre consentement explicite.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est hébergé par One.com, dont les serveurs sont situés dans l'Union Européenne, 
                garantissant ainsi le respect des normes européennes en matière de protection des données.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos 
                données personnelles, vous pouvez nous contacter :
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-2">
                <p className="font-semibold">Infonex</p>
                <p className="text-muted-foreground">1 Pass. Amélie de Pitteurs</p>
                <p className="text-muted-foreground">91360 Épinay-sur-Orge</p>
                <p className="text-muted-foreground">Email: <a href="mailto:contact@infonex.fr" className="text-primary hover:underline">contact@infonex.fr</a></p>
                <p className="text-muted-foreground">Téléphone: <a href="tel:0961085166" className="text-primary hover:underline">09 61 08 51 66</a></p>
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-sm text-muted-foreground italic">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  );
};

export default RGPDPage;
