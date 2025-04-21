import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SERG - L'énergie solaire pour tous en Guinée",
  description: "Des solutions énergétiques durables, économiques et fiables",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
