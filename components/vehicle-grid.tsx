"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Fuel, Gauge, Users, Calendar, Heart, Eye, Grid, List, GitCompare } from "lucide-react"
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
    transmission: "Automática",
    seats: "7",
    bodyType: "SUV",
    badge: "Destaque",
    badgeColor: "bg-red-500",
    features: ["GPS", "Pele", "Teto Panorâmico"],
  },
  {
    id: 2,
    name: "Mercedes C220d AMG Line",
    price: "€42,500",
    image: "/images/mercedes-c-class.png",
    year: "2022",
    mileage: "18,500",
    fuel: "Diesel",
    transmission: "Automática",
    seats: "5",
    bodyType: "Sedan",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    features: ["AMG Line", "LED", "Cruise Control"],
  },
  {
    id: 3,
    name: "Tesla Model Y Performance",
    price: "€67,300",
    image: "/images/tesla-model-y.png",
    year: "2023",
    mileage: "8,200",
    fuel: "Elétrico",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    badge: "Novo",
    badgeColor: "bg-green-500",
    features: ["Autopilot", "Supercharger", "Premium Audio"],
  },
  {
    id: 4,
    name: "Audi A4 Avant 2.0 TDI",
    price: "€35,900",
    image: "/images/audi-a4.png",
    year: "2021",
    mileage: "25,000",
    fuel: "Diesel",
    transmission: "Automática",
    seats: "5",
    bodyType: "Station Wagon",
    features: ["Virtual Cockpit", "Matrix LED", "S-Line"],
  },
  {
    id: 5,
    name: "Volkswagen Golf GTI",
    price: "€32,500",
    image: "/images/volkswagen-golf.png",
    year: "2022",
    mileage: "15,000",
    fuel: "Gasolina",
    transmission: "Manual",
    seats: "5",
    bodyType: "Hatchback",
    badge: "Desportivo",
    badgeColor: "bg-orange-500",
    features: ["GTI Package", "DCC", "Keyless"],
  },
  {
    id: 6,
    name: "Toyota RAV4 Hybrid",
    price: "€38,900",
    image: "/images/toyota-rav4.png",
    year: "2023",
    mileage: "5,500",
    fuel: "Híbrido",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    badge: "Eco",
    badgeColor: "bg-green-600",
    features: ["Toyota Safety", "AWD", "Hybrid"],
  },
  {
    id: 7,
    name: "Peugeot 3008 GT Line",
    price: "€29,900",
    image: "/images/peugeot-3008.png",
    year: "2021",
    mileage: "22,000",
    fuel: "Gasolina",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    features: ["i-Cockpit", "Grip Control", "Panorâmico"],
  },
  {
    id: 8,
    name: "Ford Mustang Mach-E",
    price: "€52,900",
    image: "/images/ford-mustang.png",
    year: "2023",
    mileage: "3,000",
    fuel: "Elétrico",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    badge: "Elétrico",
    badgeColor: "bg-blue-600",
    features: ["SYNC 4A", "Co-Pilot360", "Premium Audio"],
  },
  {
    id: 9,
    name: "Renault Clio RS Line",
    price: "€22,500",
    image: "/images/renault-clio.png",
    year: "2022",
    mileage: "12,500",
    fuel: "Gasolina",
    transmission: "Manual",
    seats: "5",
    bodyType: "Hatchback",
    features: ["RS Line", "Easy Link", "Clima Auto"],
  },
]

export function VehicleGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("price-low")

  const sortedVehicles = [...vehicles].sort((a, b) => {
    const priceA = Number.parseInt(a.price.replace(/[€,]/g, ""))
    const priceB = Number.parseInt(b.price.replace(/[€,]/g, ""))

    switch (sortBy) {
      case "price-low":
        return priceA - priceB
      case "price-high":
        return priceB - priceA
      case "year-new":
        return Number.parseInt(b.year) - Number.parseInt(a.year)
      case "year-old":
        return Number.parseInt(a.year) - Number.parseInt(b.year)
      case "mileage-low":
        return Number.parseInt(a.mileage.replace(/,/g, "")) - Number.parseInt(b.mileage.replace(/,/g, ""))
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Header with results count and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Veículos Disponíveis</h2>
          <p className="text-gray-600">{vehicles.length} veículos encontrados</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Ordenar por:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Preço: Menor para Maior</SelectItem>
                <SelectItem value="price-high">Preço: Maior para Menor</SelectItem>
                <SelectItem value="year-new">Ano: Mais Recente</SelectItem>
                <SelectItem value="year-old">Ano: Mais Antigo</SelectItem>
                <SelectItem value="mileage-low">Quilometragem: Menor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex border rounded-lg">
            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {sortedVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                width={400}
                height={300}
                className={`w-full object-cover ${viewMode === "grid" ? "h-48" : "h-32"}`}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {vehicle.badge && (
                  <Badge className={`${vehicle.badgeColor || "bg-blue-600"} text-white`}>{vehicle.badge}</Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <div className={`space-y-4 ${viewMode === "list" ? "flex justify-between items-center" : ""}`}>
                <div className={viewMode === "list" ? "flex-1" : ""}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{vehicle.name}</h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#1e3a5f]">{vehicle.price}</div>
                      {vehicle.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{vehicle.originalPrice}</div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`grid gap-2 text-sm text-gray-600 mb-4 ${viewMode === "list" ? "grid-cols-6" : "grid-cols-2"}`}
                  >
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Gauge className="h-4 w-4" />
                      <span>{vehicle.mileage} km</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{vehicle.seats} lugares</span>
                    </div>
                    {viewMode === "list" && (
                      <>
                        <div className="text-sm">{vehicle.transmission}</div>
                        <div className="text-sm">{vehicle.bodyType}</div>
                      </>
                    )}
                  </div>

                  {vehicle.features && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`flex gap-2 ${viewMode === "list" ? "flex-col w-40" : ""}`}>
                  <Link href={`/inventario/${vehicle.id}`} className="flex-1">
                    <Button className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7a]">Ver Detalhes</Button>
                  </Link>
                  <Link href={`/comparar?vehicles=${vehicle.id}`} className="flex-1">
                    <Button variant="outline" className="w-full bg-white text-gray-900">
                      <GitCompare className="h-4 w-4 mr-1" />
                      Comparar
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="bg-white text-gray-900">
          Carregar Mais Veículos
        </Button>
      </div>
    </div>
  )
}
