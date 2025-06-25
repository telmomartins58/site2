import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <Car className="h-16 w-16 text-blue-600 mx-auto" />
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Página Não Encontrada</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            A página que procura não existe ou foi movida. Volte à página inicial para encontrar o que precisa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Voltar ao Início
            </Button>
          </Link>
          <Link href="/inventario">
            <Button variant="outline" className="bg-white text-gray-900">
              Ver Inventário
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
