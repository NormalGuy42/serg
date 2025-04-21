"use client"

import { useState, useEffect } from "react"

export function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    toggleMobileMenu: () => setMobileMenuOpen(!mobileMenuOpen),
  }
}

