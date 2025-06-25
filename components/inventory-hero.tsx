import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function InventoryHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Inventário Completo</h1>
            <p className="text-xl text-blue-100">
              Explore a nossa seleção completa de veículos premium. Mais de 500 carros disponíveis.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Pesquisar por marca, modelo ou ano..."
                className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Pesquisar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Veículos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-200">Marcas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">€15K+</div>
              <div className="text-blue-200">A partir de</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-200">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
