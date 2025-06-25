import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Valvora Motors - Onde o motor sincroniza com o coração",
  description:
    "Na Valvora Motors, onde o motor sincroniza com o coração. Encontre o seu carro de sonho com veículos de qualidade, preços competitivos e serviço excecional.",
  keywords: "carros, automóveis, concessionário, veículos usados, BMW, Mercedes, Tesla, financiamento, Valvora Motors",
  authors: [{ name: "Valvora Motors" }],
  openGraph: {
    title: "Valvora Motors - Onde o motor sincroniza com o coração",
    description: "Encontre o seu carro de sonho na Valvora Motors, onde o motor sincroniza com o coração",
    type: "website",
    locale: "pt_PT",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
