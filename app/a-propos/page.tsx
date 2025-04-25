import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Équipe SERG"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white md:px-8 lg:px-16">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-center md:text-5xl lg:text-6xl">
            À propos de SERG
          </h1>
          <p className="mb-8 text-xl text-center md:text-2xl max-w-3xl">
            Votre partenaire de confiance pour l&apos;énergie solaire en Guinée depuis 2015
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a5276] mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-700 mb-4">
                Fondée en 2025, SERG (Société des Energies Renouvelables de Guinée) est née d&apos;une
                vision simple mais ambitieuse : rendre l&apos;énergie solaire accessible à tous les Guinéens.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Fondée par des jeunes visionaires, motivés par la volonté d'apporter des solutions durables aux défis énergétiques de la Guinée.
            
                SERG est engagée à construire une Guinée indépendante sur le plan énergétique, résiliente et tournée vers les énergies propres
              </p>
              
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Histoire de SERG" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission et Vision */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Notre Mission et Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sommes guidés par des principes forts qui définissent notre approche et notre engagement envers nos
              clients et l&apos;environnement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a5276] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Notre Mission</h3>
              <p className="text-lg text-gray-700">
                Notre mission est de transformer le paysage énergétique de la Guinée en fournissant des solutions
                solaires fiables, durables et économiques qui améliorent la qualité de vie des particuliers et la
                productivité des entreprises.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Nous nous engageons à réduire la dépendance aux sources d&apos;énergie non renouvelables et à contribuer
                activement à la transition énergétique du pays vers un avenir plus propre et plus durable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a5276] rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Notre Vision</h3>
              <p className="text-lg text-gray-700">
                Nous aspirons à être le catalyseur d&apos;une révolution énergétique en Guinée, où chaque foyer et
                chaque entreprise pourra bénéficier d&apos;une énergie propre, fiable et abordable.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Notre vision est celle d&apos;une Guinée énergétiquement autonome, où l&apos;accès à l&apos;électricité
                n&apos;est plus un privilège mais un droit, et où le développement économique va de pair avec la
                préservation de notre environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chez SERG, nos valeurs fondamentales guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#1a5276]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des services et des produits de la plus haute qualité, en respectant les
                normes internationales et en dépassant les attentes de nos clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1a5276]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intégrité</h3>
              <p className="text-gray-600">
                Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations professionnelles, en
                tenant toujours nos promesses et en assumant la responsabilité de nos actions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#1a5276]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous recherchons constamment de nouvelles technologies et méthodes pour améliorer nos solutions et
                rester à la pointe de l&apos;industrie solaire.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#1a5276]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Durabilité</h3>
              <p className="text-gray-600">
                Nous sommes déterminés à avoir un impact positif sur l&apos;environnement et à contribuer au
                développement durable de la Guinée pour les générations futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les experts passionnés qui font de SERG le leader de l&apos;énergie solaire en Guinée
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Nom et Prenom", role: "Fondateur & PDG" },
              { name: "Nom et Prenom", role: "Directrice Technique" },
              { name: "Nom et Prenom", role: "Responsable Commercial" },
              { name: "Nom et Prenom", role: "Ingenieur" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications et Partenaires */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">Certifications et Partenaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous travaillons avec les meilleurs et respectons les normes les plus strictes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Partenaire ${item}`}
                  alt={`Partenaire ${item}`}
                  width={160}
                  height={80}
                  className="max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1a5276] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à passer à l&apos;énergie solaire?</h2>
          <p className="text-xl mb-8">
            Rejoignez les milliers de clients satisfaits qui ont transformé leur approvisionnement énergétique avec SERG
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg font-medium"
            >
              Nous contacter
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-[#1a5276] rounded-md hover:bg-gray-100 text-lg font-medium"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}