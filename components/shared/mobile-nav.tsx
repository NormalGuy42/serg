"use client"

import Link from "next/link"
import { headerLinks } from "./Header"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen }: MobileNavProps) {
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-20 bg-white transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
        style={{ top: "92px" }}
      >
        <div className="flex flex-col p-4 space-y-4">
          {headerLinks.map((link)=>(
            <Link
            href={link.url}
            key={link.url}
            className={pathname == link.url ? 'text-green-500' : "text-gray-800 hover:text-green-500 py-2 border-b border-gray-100"}
            onClick={closeMobileMenu}
            >
            {link.text}
          </Link>
          ))}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Langue:</span>
            <div className="text-gray-600">
              <Link href="#" className="font-medium">
                FR
              </Link>{" "}
              |{" "}
              <Link href="#" className="text-gray-400">
                EN
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 mt-4 text-center"
            onClick={closeMobileMenu}
          >
            Demander un devis
          </Link>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}
