"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUp,
  CheckCircle,
  DollarSign,
  Facebook,
  Instagram,
  ArrowRight,
  Leaf,
  MapPin,
  Mail,
  Phone,
  Power,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button";

const ProjectHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-solar-blue/5 to-solar-green/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-solar-blue mb-6">
              Le Projet Solaire 590 MW
            </h2>
            <p className="text-lg mb-6">
              Un projet visionnaire pour transformer le paysage énergétique de la Guinée avec la construction 
              de centrales solaires photovoltaïques réparties sur 7 sites stratégiques, offrant une capacité 
              totale de 590 MW.
            </p>
            <div className="space-y-4 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-solar-green mt-1 mr-2" />
                  <span>
                    <strong>Couverture nationale :</strong> 7 sites soigneusement sélectionnés 
                    pour maximiser l'impact à travers le pays
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-solar-green mt-1 mr-2" />
                  <span>
                    <strong>Impact social majeur :</strong> Plus de 70% de la population bénéficiaire et
                    création de plus de 10 000 emplois
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-solar-green mt-1 mr-2" />
                  <span>
                    <strong>Développement durable :</strong> Réduction significative de la dépendance 
                    aux énergies fossiles
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-solar-green mt-1 mr-2" />
                  <span>
                    <strong>Rentabilité prouvée :</strong> Retour sur investissement moyen de 5 ans
                  </span>
                </li>
              </ul>
            </div>
            <Link href="/projets">
              <Button className="bg-solar-green hover:bg-solar-blue text-white px-8 py-6 text-lg group">
                En Savoir Plus
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <Link href='/projets'>
            <div className="relative">
              <img
                src="/concept-1.png"
                alt="Projet Solaire"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xl font-semibold">Une vision pour l'avenir</p>
                  <p className="text-sm opacity-90">Énergie propre et accessible pour tous</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const OurServices = () => {
  return(
    <section className="py-16 px-4 md:px-8 lg:px-16">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-main-darkblue mb-4">Nos services</h2>
        <p className="text-lg text-gray-600">
          Profitez de notre expertise complète en énergie solaire, de la conception à la maintenance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 relative">
            <Image
              src="/solar-panel-installation.jpg"
              alt="Installation résidentielle"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-main-darkblue">Installation résidentielle</h3>
            <p className="text-gray-600 mb-4">
              Solutions solaires personnalisées pour les maisons et appartements. Autonomie énergétique et économies
              garanties pour les particuliers.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 relative">
            <Image
              src="/entreprise-handshake.jpg"
              alt="Solutions pour entreprises"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-main-darkblue">Solutions pour entreprises</h3>
            <p className="text-gray-600 mb-4">
              Installations de grande envergure pour entreprises et industries. Rentabilité et performance pour vos
              activités professionnelles.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 relative">
            <Image
              src="/solar-panel-maintenance.jpg"
              alt="Maintenance et entretien"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-main-darkblue">Maintenance et entretien</h3>
            <p className="text-gray-600 mb-4">
              Services complets d&apos;entretien et de maintenance pour garantir la longévité et les performances de
              vos installations solaires.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 text-white bg-main-darkblue rounded-md hover:bg-[#154360]">
          Découvrir nos services
        </button>
      </div>
    </div>
  </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80"
            alt="Solar panels field"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-white md:px-8 lg:px-16">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-3xl">
            L&apos;énergie solaire pour tous en Guinée
          </h1>
          <p className="mb-8 text-xl md:text-2xl max-w-2xl">
            Des solutions énergétiques durables, économiques et fiables
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <button className="px-6 py-3 text-white bg-main-green rounded-md hover:bg-main-darkblue">
              En Savoir Plus
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/sunny-conakry.jpg"
              alt="Developer working on code"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-main-darkblue">Qui sommes-nous</h2>
            <p className="text-lg text-gray-600">
            La Société des Energies Renouvelables de Guinée (SERG) est une entreprise guinéene fondée par des jeunes visionaires, motivés par la volonté d'apporter des solutions durables aux défis énergétiques de la Guinée. <br/><br/>
            
            SERG est née de l'ambition de construire une Guinée indépendante sur le plan énergétique, résiliente et tournée vers les énergies propres
            </p>
            <button className="px-6 py-2 text-white bg-main-darkblue rounded-md hover:bg-[#154360]">En savoir plus</button>
          </div>
        </div>
      </section>

      {/* Why Choose Solar Energy */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-main-darkblue mb-4">Pourquoi choisir l&apos;énergie solaire en Guinée</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment l&apos;énergie solaire peut transformer votre quotidien avec des avantages concrets et
              durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-main-darkblue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Économisez sur vos factures d&apos;électricité</h3>
              <p className="text-gray-600">
                Réduisez drastiquement vos dépenses énergétiques grâce à l&apos;énergie solaire gratuite et abondante en
                Guinée.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Power className="w-8 h-8 text-main-darkblue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Indépendance face aux coupures de courant</h3>
              <p className="text-gray-600">
                Ne dépendez plus du réseau électrique instable et profitez d&apos;une autonomie énergétique complète.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-main-darkblue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solution écologique et durable</h3>
              <p className="text-gray-600">
                Contribuez à la réduction des émissions de CO2 tout en valorisant votre patrimoine immobilier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-main-darkblue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation rapide et professionnelle</h3>
              <p className="text-gray-600">
                Notre équipe qualifiée assure une installation soignée, rapide et conforme aux standards internationaux.
              </p>
            </div>
          </div>
        </div>
      </section> 

      <OurServices/>     

      {/* Key Figures */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1a5276] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chiffres clés</h2>
            <p className="text-lg">Découvrez l&apos;impact de notre expertise à travers la Guinée</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-yellow-300 mb-2">1500+</p>
              <p className="text-lg">Installations réalisées</p>
            </div>

            <div>
              <p className="text-5xl font-bold text-yellow-300 mb-2">5000 kW</p>
              <p className="text-lg">Puissance totale installée</p>
            </div>

            <div>
              <p className="text-5xl font-bold text-yellow-300 mb-2">60%</p>
              <p className="text-lg">Économies moyennes réalisées</p>
            </div>

            <div>
              <p className="text-5xl font-bold text-yellow-300 mb-2">8 ans</p>
              <p className="text-lg">Années d&apos;expérience</p>
            </div>
          </div>
        </div>
      </section> */}

      

      {/* Testimonials */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Témoignages clients</h2>
            <p className="text-lg text-gray-600">Découvrez ce que nos clients disent de nos services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Mamadou Diallo"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mamadou Diallo</h3>
                  <p className="text-gray-600">Conakry</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 italic">
                "Depuis l&apos;installation de notre système solaire, nous ne connaissons plus les coupures de courant.
                L&apos;équipe de SolarGuinée a été professionnelle et efficace du début à la fin."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Fatou Camara"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fatou Camara</h3>
                  <p className="text-gray-600">Kankan</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 italic">
                "Excellente entreprise avec un service client exceptionnel. Notre facture d&apos;électricité a été
                réduite de 70%. Je recommande vivement leurs services."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Ibrahim Bah"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Ibrahim Bah</h3>
                  <p className="text-gray-600">Kindia</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-300">★</span>
              </div>
              <p className="text-gray-600 italic">
                "Une installation propre et rapide. Les panneaux solaires fonctionnent parfaitement depuis 2 ans sans
                aucun problème. Un investissement qui en vaut vraiment la peine."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <ProjectHighlight/>

      {/* Recent Projects */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Projets récents</h2>
            <p className="text-lg text-gray-600">Explorez nos dernières réalisations à travers toute la Guinée</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 h-64 rounded-lg relative overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Projet ${item}`}
                  alt={`Projet ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-main-darkblue mb-4">Intéressé? Contactez-nous</h2>
            <p className="text-lg text-gray-600">
              Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5276]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="votre.email@exemple.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5276]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+224 XX XX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5276]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5276]"
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 font-medium">Type de demande</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="residential" className="w-4 h-4 mr-2" />
                    <label htmlFor="residential">Résidentiel</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="professional" className="w-4 h-4 mr-2" />
                    <label htmlFor="professional">Professionnel</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="other" className="w-4 h-4 mr-2" />
                    <label htmlFor="other">Autre</label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-main-green rounded-md hover:bg-green-600 transition-colors"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button onClick={()=>window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })} 
        className="fixed bottom-6 right-6 p-3 bg-main-green text-white rounded-full shadow-lg hover:bg-main-darkblue transition-colors">
        <ArrowUp className="w-6 h-6" />
      </button>
    </main>
  )
}
