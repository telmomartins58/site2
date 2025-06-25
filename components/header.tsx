"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/valvora-logo.png" alt="Valvora Motors" width={200} height={65} className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/inventario" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Inventário
          </Link>
          <Link href="/comparar" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Comparar
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Serviços
          </Link>
          <Link href="#financing" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Financiamento
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Sobre Nós
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="bg-[#1e3a5f] hover:bg-[#2c4f7a]">Obter Orçamento</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="mb-6">
                <Image
                  src="/images/valvora-logo.png"
                  alt="Valvora Motors"
                  width={170}
                  height={55}
                  className="h-14 w-auto"
                />
              </div>
              <Link href="/inventario" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Inventário
              </Link>
              <Link href="/comparar" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Comparar
              </Link>
              <Link href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Serviços
              </Link>
              <Link href="#financing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Financiamento
              </Link>
              <Link href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Sobre Nós
              </Link>
              <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
              <div className="pt-4 border-t">
                <Button className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7a]">Obter Orçamento</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
