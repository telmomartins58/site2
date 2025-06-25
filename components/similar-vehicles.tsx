import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Gauge, Fuel, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const similarVehicles = [
  {
    id: "2",
    name: "BMW X3 xDrive20d",
    price: "€45,900",
    image: "/images/bmw-x5.png",
    year: "2022",
    mileage: "18,500",
    fuel: "Diesel",
    seats: "5",
    badge: "Popular",
  },
  {
    id: "3",
    name: "Mercedes GLC 220d",
    price: "€52,300",
    image: "/images/mercedes-c-class.png",
    year: "2023",
    mileage: "8,200",
    fuel: "Diesel",
    seats: "5",
    badge: "Novo",
  },
  {
    id: "4",
    name: "Audi Q5 40 TDI",
    price: "€48,900",
    image: "/images/audi-a4.png",
    year: "2022",
    mileage: "15,000",
    fuel: "Diesel",
    seats: "5",
  },
]

interface SimilarVehiclesProps {
  currentVehicleId: string
}

export function SimilarVehicles({ currentVehicleId }: SimilarVehiclesProps) {
  const filteredVehicles = similarVehicles.filter((v) => v.id !== currentVehicleId)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Veículos Similares</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {vehicle.badge && <Badge className="absolute top-4 left-4 bg-[#1e3a5f]">{vehicle.badge}</Badge>}
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                  <span className="text-xl font-bold text-[#1e3a5f]">{vehicle.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4" />
                    <span>{vehicle.mileage} km</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.seats} lugares</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Link href={`/inventario/${vehicle.id}`} className="flex-1">
                    <Button className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7a]">Ver Detalhes</Button>
                  </Link>
                  <Button variant="outline" className="flex-1 bg-white text-gray-900">
                    Comparar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
