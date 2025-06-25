import { Car } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="animate-spin">
          <Car className="h-12 w-12 text-blue-600 mx-auto" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Carregando...</h2>
          <p className="text-gray-600">A preparar o melhor para si</p>
        </div>
      </div>
    </div>
  )
}
