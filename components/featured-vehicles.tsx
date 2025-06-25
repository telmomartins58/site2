import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fuel, Gauge, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const vehicles = [
  {
    id: 1,
    name: "BMW X5 xDrive30d",
    price: "€58,900",
    originalPrice: "€62,500",
    image: "/images/bmw-x5.png",
    year: "2023",
    mileage: "12,000",
    fuel: "Diesel",
    seats: "7",
    badge: "Destaque",
  },
  {
    id: 2,
    name: "Mercedes C220d AMG Line",
    price: "€42,500",
    image: "/images/mercedes-c-class.png",
    year: "2022",
    mileage: "18,500",
    fuel: "Diesel",
    seats: "5",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Tesla Model Y Performance",
    price: "€67,300",
    image: "/images/tesla-model-y.png",
    year: "2023",
    mileage: "8,200",
    fuel: "Elétrico",
    seats: "5",
    badge: "Novo",
  },
]

export function FeaturedVehicles() {
  return (
    <section id="inventory" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Veículos em Destaque</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veículos premium cuidadosamente selecionados do nosso extenso inventário
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#1e3a5f]">{vehicle.badge}</Badge>
                {vehicle.originalPrice && <Badge className="absolute top-4 right-4 bg-red-500">Oferta</Badge>}
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#1e3a5f]">{vehicle.price}</span>
                      {vehicle.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{vehicle.originalPrice}</div>
                      )}
                    </div>
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
                      Test Drive
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/inventario">
            <Button size="lg" variant="outline" className="bg-white text-gray-900">
              Ver Todo o Inventário
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
