"use client"

import { MapPin, Sun, Users, Leaf, ChartBar } from "lucide-react";
import FinancialTable from "@/components/FinancialTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const objectives = [
    {
      icon: Sun,
      text: "Électrifier durablement les zones urbaines et rurales",
      description: "Apporter une solution énergétique fiable et pérenne aux populations"
    },
    {
      icon: Leaf,
      text: "Promouvoir les énergies renouvelables",
      description: "Réduire la dépendance aux énergies fossiles et l'empreinte carbone"
    },
    {
      icon: Users,
      text: "Créer des emplois pour la jeunesse",
      description: "Générer des opportunités d'emploi durables dans le secteur des énergies renouvelables"
    }
  ];

  const impacts = [
    {
      title: "Accès à l'Énergie",
      description: "Plus de 70% des Guinéens bénéficieront d'un meilleur accès à l'électricité, transformant leur quotidien",
      icon: Sun
    },
    {
      title: "Création d'Emplois",
      description: "Plus de 10 000 emplois directs et indirects seront créés, favorisant l'économie locale",
      icon: Users
    },
    {
      title: "Développement Social",
      description: "Amélioration significative des secteurs de l'éducation, la santé et la sécurité",
      icon: ChartBar
    }
  ];

  const sites = [
    { name: "Kankan", power: "150 MW", population: "Dessert plus de 500,000 habitants" },
    { name: "Siguiri", power: "150 MW", population: "Zone minière stratégique" },
    { name: "Kouroussa", power: "70 MW", population: "Centre agricole important" },
    { name: "Linsan", power: "100 MW", population: "Carrefour énergétique majeur" },
    { name: "Sangaredji", power: "80 MW", population: "Zone industrielle en développement" },
    { name: "Tougue", power: "30 MW", population: "Région rurale en expansion" },
    { name: "Pita", power: "10 MW", population: "Zone touristique prometteuse" }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-solar-blue to-solar-green text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Le Projet Solaire 590 MW
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-solar-blue mb-6">
                Vision et Contexte
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                La Guinée dispose d'un potentiel solaire exceptionnel avec plus de 2000 heures 
                d'ensoleillement par an. Ce projet ambitieux vise à exploiter cette ressource 
                naturelle abondante pour répondre aux besoins énergétiques croissants du pays.
                Nous envisageons de transformer le paysage énergétique de la Guinée 
               grâce à l'installation de centrales solaires photovoltaïques sur 7 sites stratégiques,
                pour une capacité totale de 590 MW.
              </p>
              <p className="text-lg text-gray-700">
                En diversifiant les sources d'énergie et en privilégiant le solaire, nous 
                contribuons à l'indépendance énergétique de la Guinée tout en respectant nos 
                engagements environnementaux.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-solar-blue">
              Nos Objectifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((obj, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <obj.icon className="w-12 h-12 text-solar-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{obj.text}</h3>
                  <p className="text-gray-600">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-solar-blue">
              Localisation des Sites
            </h2>
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/guinea-gisement.png"
                  alt="Carte de la Guinée"
                  className="w-full h-auto rounded"
                />
                <div className="mt-4 text-center text-gray-700">
                  <p>Les sites ont été sélectionnés stratégiquement pour maximiser la couverture 
                  énergétique sur l'ensemble du territoire guinéen.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sites.map((site, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                      <MapPin className="text-solar-green" />
                      <CardTitle className="text-xl">{site.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-solar-blue">{site.power}</p>
                      <p className="text-gray-600">{site.population}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-solar-blue/5 to-solar-green/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-solar-blue">
              Retombées Économiques et Sociales
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700">
                Le Projet Solaire 590 MW va bien au-delà de la simple production d'électricité. 
                Il s'agit d'un véritable catalyseur de développement social et économique pour la Guinée, 
                avec des impacts positifs qui se répercuteront sur plusieurs générations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {impacts.map((impact, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <impact.icon className="w-12 h-12 text-solar-green" />
                    </div>
                    <CardTitle className="text-xl text-center">{impact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{impact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-solar-blue">
              Étude Financière du Projet
            </h2>
            <div className="mb-8 max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                Une analyse financière détaillée démontre la viabilité et la rentabilité du projet, 
                avec des retours sur investissement attractifs variant entre 4,7 et 5,3 ans selon les sites.
              </p>
            </div>
            <FinancialTable />
          </div>
        </section>


        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-solar-blue">
              Images de Conception
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(`/concept-${index + 1}.png`)}
                  className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative"
                >
                  <img
                    src={`/concept-${index + 1}.png`}
                    alt={`Conception ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogTitle></DialogTitle>
          <DialogContent className="max-w-7xl w-full p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Image en plein écran"
                  className="w-full h-auto"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        <section className="py-16 bg-gradient-to-b from-solar-blue to-solar-green text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Partenariat et Soutien</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              SERG appelle à une mobilisation collective autour de cette initiative nationale.
              Le projet est ouvert aux partenariats public-privé et aux investisseurs 
              nationaux et internationaux.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex-1">
                <h3 className="text-xl font-semibold mb-4">Appui Institutionnel</h3>
                <p>Support des institutions gouvernementales et organismes internationaux</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex-1">
                <h3 className="text-xl font-semibold mb-4">Partenariats PPP</h3>
                <p>Collaboration étroite entre secteurs public et privé pour un développement durable</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg flex-1">
                <h3 className="text-xl font-semibold mb-4">Investissements</h3>
                <p>Opportunités d'investissement pour les acteurs locaux et internationaux</p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-lg">
              <p className="mb-4">
                Le projet solaire 590 MW est une opportunité pour la Guinée de bâtir une souveraineté 
                énergétique durable.
              </p>
              <p className="mb-4">
                Avec l'engagement de tous, nous pouvons offrir à notre pays une lumière stable, 
                propre et accessible.
              </p>
              <p className="font-bold">
                Ensemble faisons rayonner la Guinée grâce à son soleil.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-solar-blue/5 to-solar-green/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-solar-blue mb-6">
              Participez à cette Revolution Énergétique
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Vous souhaitez contribuer à ce projet visionnaire ? Que vous soyez un investisseur, 
              un partenaire potentiel ou simplement intéressé par notre initiative, nous sommes là 
              pour répondre à toutes vos questions.
            </p>
            <Button 
              onClick={() => window.location.href = '/contact'} 
              className="bg-solar-green hover:bg-solar-blue text-white px-8 py-6 text-lg"
            >
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;