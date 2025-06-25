import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Vehicle {
  engine: string
  power: string
  consumption: string
  emissions: string
  fuel: string
  transmission: string
  doors: string
  seats: string
  color: string
  bodyType: string
  year: string
  mileage: string
}

interface VehicleSpecsProps {
  vehicle: Vehicle
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const engineSpecs = [
    { label: "Motor", value: vehicle.engine },
    { label: "Potência", value: vehicle.power },
    { label: "Consumo", value: vehicle.consumption },
    { label: "Emissões CO2", value: vehicle.emissions },
  ]

  const generalSpecs = [
    { label: "Combustível", value: vehicle.fuel },
    { label: "Transmissão", value: vehicle.transmission },
    { label: "Portas", value: vehicle.doors },
    { label: "Lugares", value: vehicle.seats },
    { label: "Cor", value: vehicle.color },
    { label: "Carroçaria", value: vehicle.bodyType },
    { label: "Ano", value: vehicle.year },
    { label: "Quilometragem", value: `${vehicle.mileage} km` },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Especificações Técnicas</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Engine Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Motor e Performance
              <Badge variant="secondary">Técnico</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {engineSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* General Specifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Especificações Gerais
              <Badge variant="secondary">Geral</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {generalSpecs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
