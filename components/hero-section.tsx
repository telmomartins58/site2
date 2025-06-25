import Link from 'next/link';
import React from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {/* 4 estrelas completas */}
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {/* 1 estrela parcial (70% preenchida) */}
                  <div className="relative">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: "70%" }}>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-600">Confiança por todo o país</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Onde o Motor Sincroniza com o Coração
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra veículos de qualidade premium com preços imbatíveis. Desde familiares a SUVs fiáveis, temos
                o carro perfeito à sua espera.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/inventario" className="flex-1">            
                <Button size="lg" className="text-lg px-8 bg-[#1e3a5f] hover:bg-[#2c4f7a] flex items-center">
                  Ver Inventário
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="#contact" className="flex-1">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-gray-900">
                  Agendar Test Drive
                </Button>
              </Link>
            </div>


            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f]">Carros</div>
                <div className="text-sm text-gray-600">Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f]">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f]">93%</div>
                <div className="text-sm text-gray-600">Satisfação do Cliente</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/mercedes-amg-hero.png"
                alt="Mercedes-AMG GT - Veículo premium na Valvora Motors"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#1e3a5f]/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
