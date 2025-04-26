'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"
import MobileNav from "./mobile-nav";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

export const headerLinks = [
    {
        text: 'Accueil',
        url: '/'
    },
    {
        text: 'A Propos',
        url: '/a-propos'
    },
    {
        text: 'Services',
        url: '/services'
    },
    {
      text: 'Projets',
      url: '/projets'
  },
    {
        text: 'Contact',
        url: '/contact'
    }
]

export default function Header() {
    const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useMobileMenu()
    const pathname = usePathname()
    

    return (
    <header>
        <nav className="flex items-center justify-between px-4 py-4 bg-white md:px-8 lg:px-16 relative z-20">
          <Link href="/" className="text-2xl font-bold text-[#1a5276]">
            <Image
                src={"/serg-logo.png"}
                alt={"SERG logo"}
                height={100}
                width={200}
            />
          </Link>
  
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {
                headerLinks.map((link)=>(
                    <Link href={link.url} key={link.url} className={pathname == link.url ? 'text-main-green' : 'text-gray-800 hover:text-gray-600'}>
                        {link.text}
                    </Link>
                ))
            }
          </div>
  
          <div className="flex items-center space-x-4">
            {/* <Link
              href="/contact"
              className="hidden lg:block px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Demander un devis
            </Link>
            <div className="hidden lg:block text-gray-600">
              <Link href="#" className="font-medium">
                FR
              </Link>{" "}
              |{" "}
              <Link href="#" className="text-gray-400">
                EN
              </Link>
            </div> */}
  
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
  
        <MobileNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
    )
}
