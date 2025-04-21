import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Lightbulb, Settings, ShoppingBag } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Services SERG"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white md:px-8 lg:px-16">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-center md:text-5xl lg:text-6xl">Nos Services</h1>
          <p className="mb-8 text-xl text-center md:text-2xl max-w-3xl">
            Des solutions énergétiques complètes pour répondre à tous vos besoins
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">Une expertise complète en énergie solaire</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Chez SERG, nous offrons une gamme complète de services pour accompagner votre transition vers l&apos;énergie
            solaire. De l&apos;étude initiale à la maintenance de vos installations, notre équipe d&apos;experts vous
            guide à chaque étape pour garantir une solution parfaitement adaptée à vos besoins spécifiques.
          </p>
        </div>
      </section>

      {/* Domaines d'Activité */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Nos Domaines d&apos;Activité</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre expertise dans trois domaines complémentaires pour répondre à tous vos besoins
              énergétiques
            </p>
          </div>

          {/* Génie Conseil */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a5276]">1. Génie Conseil</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Notre équipe d&apos;ingénieurs spécialisés vous accompagne dans l&apos;analyse et l&apos;optimisation
                  de vos besoins énergétiques pour concevoir la solution la plus adaptée et rentable.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Analyse des besoins énergétiques spécifiques.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Réalisation d&apos;études de faisabilité technique et financière.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Développement de solutions adaptées aux contextes résidentiel, commercial et industriel.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Optimisation des coûts énergétiques pour maximiser la rentabilité.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Accompagnement dans la mise en place des solutions et suivi des résultats.</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=300&width=500" alt="Génie Conseil" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Installation de Panneaux Solaires */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Installation de Panneaux Solaires"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a5276]">2. Installation de Panneaux Solaires</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Nous assurons l&apos;installation complète de systèmes photovoltaïques sur mesure, de la conception à
                  la mise en service, avec un suivi rigoureux pour garantir des performances optimales.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Conception et installation de systèmes photovoltaïques sur mesure.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Intégration de solutions de stockage (batteries) pour une autonomie énergétique.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Maintenance régulière et interventions rapides en cas de panne.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Formation des clients à la gestion des installations solaires.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Veille technologique pour proposer des solutions innovantes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vente d'Équipements Électriques */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mr-4">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a5276]">3. Vente d&apos;Équipements Électriques</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Nous proposons une large gamme d&apos;équipements solaires et électriques de haute qualité, avec un
                  service après-vente complet pour assurer la longévité de vos installations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Fourniture de panneaux solaires, onduleurs et batteries.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vente de matériel électrique (câbles, disjoncteurs, tableaux électriques…).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Solutions de gestion intelligente de l&apos;énergie.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Assistance après-vente : maintenance, support technique et conseils.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Matériel certifié conforme aux normes internationales.</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Vente d'Équipements Électriques"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Nos Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque besoin, que vous soyez un particulier ou une entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Installation résidentielle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a5276]">Installation résidentielle</h3>
                <p className="text-gray-600 mb-4">
                  Solutions solaires personnalisées pour les maisons et appartements. Autonomie énergétique et économies
                  garanties pour les particuliers.
                </p>
                <Link href="/contact" className="text-[#1a5276] font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Solutions pour entreprises"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a5276]">Solutions pour entreprises</h3>
                <p className="text-gray-600 mb-4">
                  Installations de grande envergure pour entreprises et industries. Rentabilité et performance pour vos
                  activités professionnelles.
                </p>
                <Link href="/contact" className="text-[#1a5276] font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Maintenance et entretien"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a5276]">Maintenance et entretien</h3>
                <p className="text-gray-600 mb-4">
                  Services complets d&apos;entretien et de maintenance pour garantir la longévité et les performances de
                  vos installations solaires.
                </p>
                <Link href="/contact" className="text-[#1a5276] font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une approche structurée en 4 étapes pour garantir des résultats optimaux
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                Analyse approfondie de vos besoins énergétiques et de votre situation actuelle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Conception</h3>
              <p className="text-gray-600">
                Élaboration d&apos;une solution sur mesure adaptée à vos besoins spécifiques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600">
                Mise en place professionnelle de votre système par nos techniciens qualifiés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#1a5276] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Suivi</h3>
              <p className="text-gray-600">Maintenance régulière et support continu pour optimiser les performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1a5276] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre approvisionnement énergétique?</h2>
          <p className="text-xl mb-8">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg font-medium"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-[#1a5276] rounded-md hover:bg-gray-100 text-lg font-medium"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
