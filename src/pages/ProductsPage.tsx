import { Shield, Key, Cloud, HardDrive, Lock, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Produits & Licences
              </h1>
              <p className="text-xl text-muted-foreground">
                Solutions professionnelles pour sécuriser et optimiser votre infrastructure IT
              </p>
            </div>
          </div>
        </section>

        {/* Products Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="auth" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
                <TabsTrigger value="auth" className="py-3">
                  <Shield className="w-4 h-4 mr-2" />
                  Authentification Double Facteur
                </TabsTrigger>
                <TabsTrigger value="licenses" className="py-3">
                  <Key className="w-4 h-4 mr-2" />
                  Licences Microsoft
                </TabsTrigger>
                <TabsTrigger value="cloud" className="py-3">
                  <Cloud className="w-4 h-4 mr-2" />
                  Solutions Cloud
                </TabsTrigger>
              </TabsList>

              {/* Double Authentication Tab */}
              <TabsContent value="auth" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" />
                        Authentification VPN
                      </CardTitle>
                      <CardDescription>
                        Sécurisez vos accès VPN avec une authentification à deux facteurs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Protection contre les accès non autorisés</li>
                        <li>✓ Compatible avec tous les clients VPN</li>
                        <li>✓ Authentification via SMS, email ou application mobile</li>
                        <li>✓ Gestion centralisée des utilisateurs</li>
                        <li>✓ Logs d'audit détaillés</li>
                      </ul>
                      <Button className="mt-4 w-full" onClick={handleContactClick}>Demander un devis</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Authentification Active Directory
                      </CardTitle>
                      <CardDescription>
                        Renforcez la sécurité de votre Active Directory
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Intégration transparente avec AD</li>
                        <li>✓ Support multi-domaines</li>
                        <li>✓ Authentification adaptative basée sur les risques</li>
                        <li>✓ Compatible avec Azure AD</li>
                        <li>✓ Reporting et conformité RGPD</li>
                      </ul>
                      <Button className="mt-4 w-full" onClick={handleContactClick}>Demander un devis</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        Authentification RDP
                      </CardTitle>
                      <CardDescription>
                        Protégez vos connexions Bureau à distance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Sécurisation des accès RDP/RDS</li>
                        <li>✓ Support des sessions multi-utilisateurs</li>
                        <li>✓ Authentification biométrique disponible</li>
                        <li>✓ Détection des tentatives d'intrusion</li>
                        <li>✓ Notifications en temps réel</li>
                      </ul>
                      <Button className="mt-4 w-full" onClick={handleContactClick}>Demander un devis</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Key className="w-5 h-5 text-primary" />
                        Solution Universelle MFA
                      </CardTitle>
                      <CardDescription>
                        Authentification multi-facteurs pour tous vos services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Compatible avec 200+ applications</li>
                        <li>✓ SSO (Single Sign-On) intégré</li>
                        <li>✓ Support SAML, OAuth, RADIUS</li>
                        <li>✓ Authentification sans mot de passe</li>
                        <li>✓ Tableau de bord administrateur complet</li>
                      </ul>
                      <Button className="mt-4 w-full" onClick={handleContactClick}>Demander un devis</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Microsoft Licenses Tab */}
              <TabsContent value="licenses" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Windows Server</CardTitle>
                      <CardDescription>
                        Licences serveur pour votre infrastructure
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Windows Server 2022 / 2019 / 2016</li>
                        <li>✓ Licences CAL utilisateurs et périphériques</li>
                        <li>✓ Remote Desktop Services (RDS)</li>
                        <li>✓ Licences Core-based</li>
                        <li>✓ Support et mises à jour inclus</li>
                      </ul>
                      <Button className="mt-4 w-full" variant="secondary">Voir les tarifs</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Microsoft 365</CardTitle>
                      <CardDescription>
                        Suite bureautique complète dans le cloud
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Office 365 (Word, Excel, PowerPoint, Outlook)</li>
                        <li>✓ Teams, SharePoint, OneDrive</li>
                        <li>✓ Exchange Online</li>
                        <li>✓ Sécurité avancée et conformité</li>
                        <li>✓ Licences Business, Entreprise, Education</li>
                      </ul>
                      <Button className="mt-4 w-full" variant="secondary">Voir les tarifs</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Windows Client</CardTitle>
                      <CardDescription>
                        Systèmes d'exploitation pour postes de travail
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Windows 11 Pro / Entreprise</li>
                        <li>✓ Windows 10 Pro / Entreprise</li>
                        <li>✓ Licences OEM et Volume</li>
                        <li>✓ Mises à niveau disponibles</li>
                        <li>✓ Déploiement et activation assistés</li>
                      </ul>
                      <Button className="mt-4 w-full" variant="secondary">Voir les tarifs</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>SQL Server</CardTitle>
                      <CardDescription>
                        Bases de données professionnelles
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ SQL Server 2022 / 2019</li>
                        <li>✓ Éditions Standard et Enterprise</li>
                        <li>✓ Licences Core ou Server+CAL</li>
                        <li>✓ Haute disponibilité et réplication</li>
                        <li>✓ Support technique Microsoft</li>
                      </ul>
                      <Button className="mt-4 w-full" variant="secondary">Voir les tarifs</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Cloud Solutions Tab */}
              <TabsContent value="cloud" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-primary" />
                        Cloud Public Microsoft Azure
                      </CardTitle>
                      <CardDescription>
                        Infrastructure cloud évolutive et sécurisée
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Machines virtuelles Windows et Linux</li>
                        <li>✓ Stockage cloud redondant</li>
                        <li>✓ Bases de données managées (SQL, MySQL, PostgreSQL)</li>
                        <li>✓ Services d'IA et machine learning</li>
                        <li>✓ Facturation à l'usage, scalabilité automatique</li>
                        <li>✓ Datacenters en Europe pour conformité RGPD</li>
                      </ul>
                      <Button className="mt-4 w-full">Consulter nos offres</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HardDrive className="w-5 h-5 text-primary" />
                        Cloud Privé sur Site
                      </CardTitle>
                      <CardDescription>
                        Infrastructure cloud dans vos locaux
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Plateforme Hyper-V ou VMware</li>
                        <li>✓ Contrôle total de vos données</li>
                        <li>✓ Haute disponibilité et sauvegarde</li>
                        <li>✓ Infrastructure personnalisée</li>
                        <li>✓ Conformité réglementaire garantie</li>
                        <li>✓ Support et maintenance inclus</li>
                      </ul>
                      <Button className="mt-4 w-full">Consulter nos offres</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-primary" />
                        Cloud Hybride
                      </CardTitle>
                      <CardDescription>
                        Le meilleur des deux mondes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Données sensibles sur cloud privé</li>
                        <li>✓ Services publics pour la scalabilité</li>
                        <li>✓ Azure Stack pour l'hybride Microsoft</li>
                        <li>✓ Connexion sécurisée site-to-site</li>
                        <li>✓ Gestion unifiée des ressources</li>
                        <li>✓ Optimisation des coûts</li>
                      </ul>
                      <Button className="mt-4 w-full">Consulter nos offres</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Sauvegarde Cloud
                      </CardTitle>
                      <CardDescription>
                        Protection de vos données critiques
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Sauvegarde automatique et chiffrée</li>
                        <li>✓ Stockage géo-redondant</li>
                        <li>✓ Restauration rapide et granulaire</li>
                        <li>✓ Rétention personnalisable</li>
                        <li>✓ Compatible serveurs, VMs, postes de travail</li>
                        <li>✓ Reporting et alertes</li>
                      </ul>
                      <Button className="mt-4 w-full">Consulter nos offres</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous proposer la solution adaptée à vos besoins
            </p>
            <Button size="lg" onClick={handleContactClick}>
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
