import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact SERG"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white md:px-8 lg:px-16">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-center md:text-5xl lg:text-6xl">Contactez-nous</h1>
          <p className="mb-8 text-xl text-center md:text-2xl max-w-3xl">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-main-darkblue mb-6" id="#contact-form">Envoyez-nous un message</h2>
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
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Objet de votre message"
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
                  className="w-full py-3 text-white bg-main-green rounded-md hover:bg-main-darkblue transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-main-darkblue mb-6">Nos coordonnées</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-main-darkblue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600">123 Route de Dixinn, Conakry, Guinée</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-main-darkblue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-600">+224 XX XX XX XX</p>
                      <p className="text-gray-600">+224 XX XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-main-darkblue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">contact@solarguinee.com</p>
                      <p className="text-gray-600">info@solarguinee.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-main-darkblue mb-4">Heures d&apos;ouverture</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi:</span>
                    <span>8h00 - 17h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Samedi:</span>
                    <span>9h00 - 13h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Dimanche:</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://www.mangalis.com/wp-content/uploads/sites/166/2024/11/noom_-171-e1742389625803-1914x960.jpg"
                  alt="Carte de localisation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-main-darkblue mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600">Trouvez rapidement des réponses aux questions les plus courantes</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-main-darkblue">
                Combien coûte l&apos;installation d&apos;un système solaire?
              </h3>
              <p className="text-gray-700">
                Le coût varie en fonction de vos besoins spécifiques, de la taille de votre propriété et de votre
                consommation énergétique. Nous proposons une consultation gratuite pour évaluer votre situation et vous
                fournir un devis personnalisé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-main-darkblue">Combien de temps dure l&apos;installation?</h3>
              <p className="text-gray-700">
                La durée d&apos;installation dépend de la complexité du projet. Une installation résidentielle standard
                peut prendre de 1 à 3 jours, tandis que les projets commerciaux plus importants peuvent nécessiter
                plusieurs semaines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-main-darkblue">
                Quelle est la durée de vie des panneaux solaires?
              </h3>
              <p className="text-gray-700">
                Les panneaux solaires que nous installons ont une durée de vie moyenne de 25 à 30 ans. Ils sont garantis
                pour maintenir au moins 80% de leur efficacité pendant 25 ans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-main-darkblue">Proposez-vous des options de financement?</h3>
              <p className="text-gray-700">
                Oui, nous collaborons avec plusieurs institutions financières pour offrir des solutions de financement
                adaptées à différents budgets. Contactez-nous pour en savoir plus sur les options disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-main-darkblue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à passer à l&apos;énergie solaire?</h2>
          <p className="text-xl mb-8">Demandez un devis gratuit et sans engagement dès aujourd&apos;hui</p>
          <Link
            href="#contact-form"
            className="px-8 py-3 bg-main-green text-white rounded-md hover: text-lg font-medium inline-block"
          >
            Contactez nous
          </Link>
        </div>
      </section>
    </main>
  )
}
