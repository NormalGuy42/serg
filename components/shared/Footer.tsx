import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-[#1a2a3a] text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
                <Image
                    src={"/serg-logo.png"}
                    alt={"SERG logo"}
                    height={100}
                    width={200}
                />
              {/* <p className="text-gray-300 mb-4">Solutions énergétiques durables et accessibles pour toute la Guinée.</p> */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-gray-300 hover:text-white">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/projets" className="text-gray-300 hover:text-white">
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Nos services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Installation résidentielle
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Solutions pour entreprises
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Maintenance et entretien
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Conseil et étude
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-300" />
                  <span className="text-gray-300">123 Route de Dixinn, Conakry, Guinée</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-300" />
                  <span className="text-gray-300">+224 XX XX XX XX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-300" />
                  <span className="text-gray-300">contact@serg</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SERG - Tous droits réservés</p>
          </div>
        </div>
      </footer>

    )
}