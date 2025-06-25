import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Gauge, Fuel, Users, Cog, Palette, Car, Zap } from "lucide-react"

interface Vehicle {
  id: string
  name: string
  price: string
  originalPrice?: string
  year: string
  mileage: string
  fuel: string
  transmission: string
  seats: string
  bodyType: string
  color: string
  doors: string
  engine: string
  power: string
  consumption: string
  emissions: string
  warranty: string
  badge?: string
  description: string
}

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const quickSpecs = [
    { icon: Calendar, label: "Ano", value: vehicle.year },
    { icon: Gauge, label: "Quilometragem", value: `${vehicle.mileage} km` },
    { icon: Fuel, label: "Combustível", value: vehicle.fuel },
    { icon: Users, label: "Lugares", value: vehicle.seats },
    { icon: Cog, label: "Transmissão", value: vehicle.transmission },
    { icon: Palette, label: "Cor", value: vehicle.color },
    { icon: Car, label: "Carroçaria", value: vehicle.bodyType },
    { icon: Zap, label: "Potência", value: vehicle.power },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">{vehicle.name}</h1>
          {vehicle.badge && <Badge className="bg-red-500 text-white">{vehicle.badge}</Badge>}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-blue-600">{vehicle.price}</div>
          {vehicle.originalPrice && <div className="text-xl text-gray-500 line-through">{vehicle.originalPrice}</div>}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Descrição</h3>
        <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
      </div>

      <Separator />

      {/* Quick Specs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Especificações Principais</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickSpecs.map((spec, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <spec.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">{spec.label}</div>
                <div className="font-medium text-gray-900">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button size="lg" className="w-full">
          Agendar Test Drive
        </Button>
        <Button variant="outline" size="lg" className="w-full bg-white text-gray-900">
          Solicitar Mais Informações
        </Button>
        <Button variant="outline" size="lg" className="w-full bg-white text-gray-900">
          Calcular Financiamento
        </Button>
      </div>

      {/* Warranty Info */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Car className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <div className="font-medium text-green-900">Garantia Incluída</div>
              <div className="text-sm text-green-700">{vehicle.warranty} de garantia completa</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
