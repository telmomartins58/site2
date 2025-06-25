"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus, Check, Minus, ArrowRight, Download, FileText, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock vehicle data - expandir para incluir todos os veículos
const vehicles = {
  "1": {
    id: "1",
    name: "BMW X5 xDrive30d",
    price: "€58,900",
    originalPrice: "€62,500",
    year: "2023",
    mileage: "12,000",
    fuel: "Diesel",
    transmission: "Automática",
    seats: "7",
    bodyType: "SUV",
    color: "Preto Metálico",
    doors: "5",
    engine: "3.0L Turbo Diesel",
    power: "265 CV",
    consumption: "6.8L/100km",
    emissions: "179 g/km CO2",
    warranty: "24 meses",
    badge: "Destaque",
    image: "/images/bmw-x5.png",
    features: [
      "Sistema de navegação GPS Professional",
      "Bancos em pele Dakota",
      "Teto panorâmico elétrico",
      "Sistema de som Harman Kardon",
      "Câmara de marcha-atrás",
      "Sensores de estacionamento",
      "Controlo de cruzeiro adaptativo",
      "Faróis LED adaptativos",
      "Ar condicionado automático tri-zona",
      "Volante aquecido",
      "Bancos aquecidos dianteiros",
      "Sistema keyless go",
    ],
  },
  "2": {
    id: "2",
    name: "Mercedes C220d AMG Line",
    price: "€42,500",
    year: "2022",
    mileage: "18,500",
    fuel: "Diesel",
    transmission: "Automática",
    seats: "5",
    bodyType: "Sedan",
    color: "Branco Polar",
    doors: "4",
    engine: "2.0L Turbo Diesel",
    power: "194 CV",
    consumption: "5.2L/100km",
    emissions: "138 g/km CO2",
    warranty: "24 meses",
    badge: "Popular",
    image: "/images/mercedes-c-class.png",
    features: [
      "AMG Line Package",
      "Sistema MBUX",
      "Faróis LED High Performance",
      "Bancos desportivos AMG",
      "Volante desportivo AMG",
      "Cruise Control DISTRONIC",
      "Câmara 360°",
      "Ar condicionado THERMOTRONIC",
      "Sistema de som Burmester",
      "Keyless Start",
      "Sensores de estacionamento",
      "Assistente de mudança de faixa",
    ],
  },
  "3": {
    id: "3",
    name: "Tesla Model Y Performance",
    price: "€67,300",
    year: "2023",
    mileage: "8,200",
    fuel: "Elétrico",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    color: "Azul Midnight",
    doors: "5",
    engine: "Dual Motor Elétrico",
    power: "534 CV",
    consumption: "17.1 kWh/100km",
    emissions: "0 g/km CO2",
    warranty: "48 meses",
    badge: "Novo",
    image: "/images/tesla-model-y.png",
    features: [
      "Autopilot Avançado",
      "Supercharger Network",
      "Sistema de som Premium",
      "Ecrã táctil 15 polegadas",
      "Atualizações over-the-air",
      "Modo Sentinela",
      "Câmaras 360°",
      "Ar condicionado automático",
      "Bancos aquecidos",
      "Volante aquecido",
      "Carregamento sem fios",
      "Vidros laminados",
    ],
  },
  "4": {
    id: "4",
    name: "Audi A4 Avant 2.0 TDI",
    price: "€35,900",
    year: "2021",
    mileage: "25,000",
    fuel: "Diesel",
    transmission: "Automática",
    seats: "5",
    bodyType: "Station Wagon",
    color: "Cinza Quantum",
    doors: "5",
    engine: "2.0L TDI",
    power: "150 CV",
    consumption: "4.8L/100km",
    emissions: "126 g/km CO2",
    warranty: "24 meses",
    image: "/images/audi-a4.png",
    features: [
      "Virtual Cockpit Plus",
      "Matrix LED",
      "S-Line Package",
      "Quattro AWD",
      "MMI Navigation",
      "Audi Connect",
      "Bancos desportivos",
      "Cruise Control",
      "Sensores de estacionamento",
      "Câmara traseira",
    ],
  },
  "5": {
    id: "5",
    name: "Volkswagen Golf GTI",
    price: "€32,500",
    year: "2022",
    mileage: "15,000",
    fuel: "Gasolina",
    transmission: "Manual",
    seats: "5",
    bodyType: "Hatchback",
    color: "Vermelho Tornado",
    doors: "5",
    engine: "2.0L TSI",
    power: "245 CV",
    consumption: "7.1L/100km",
    emissions: "162 g/km CO2",
    warranty: "24 meses",
    badge: "Desportivo",
    image: "/images/volkswagen-golf.png",
    features: [
      "GTI Performance Package",
      "DCC Adaptive Suspension",
      "Keyless Access",
      "Digital Cockpit Pro",
      "Discover Pro Navigation",
      "Beats Audio",
      "LED Plus",
      "Park Assist",
      "ACC Cruise Control",
      "Lane Assist",
    ],
  },
  "6": {
    id: "6",
    name: "Toyota RAV4 Hybrid",
    price: "€38,900",
    year: "2023",
    mileage: "5,500",
    fuel: "Híbrido",
    transmission: "Automática",
    seats: "5",
    bodyType: "SUV",
    color: "Branco Pérola",
    doors: "5",
    engine: "2.5L Hybrid",
    power: "218 CV",
    consumption: "5.0L/100km",
    emissions: "116 g/km CO2",
    warranty: "60 meses",
    badge: "Eco",
    image: "/images/toyota-rav4.png",
    features: [
      "Toyota Safety Sense 2.0",
      "AWD-i System",
      "Hybrid Synergy Drive",
      "JBL Premium Audio",
      "Wireless Charging",
      "Head-Up Display",
      "Panoramic Roof",
      "Smart Entry",
      "Dual Zone Climate",
      "Rear Cross Traffic Alert",
    ],
  },
}

const availableVehicles = [
  { id: "1", name: "BMW X5 xDrive30d", price: "€58,900" },
  { id: "2", name: "Mercedes C220d AMG Line", price: "€42,500" },
  { id: "3", name: "Tesla Model Y Performance", price: "€67,300" },
  { id: "4", name: "Audi A4 Avant 2.0 TDI", price: "€35,900" },
  { id: "5", name: "Volkswagen Golf GTI", price: "€32,500" },
  { id: "6", name: "Toyota RAV4 Hybrid", price: "€38,900" },
]

export function VehicleComparison() {
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(["1", "2"])
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const addVehicle = (vehicleId: string) => {
    if (
      selectedVehicles.length < 3 &&
      !selectedVehicles.includes(vehicleId) &&
      vehicles[vehicleId as keyof typeof vehicles]
    ) {
      setSelectedVehicles([...selectedVehicles, vehicleId])
    }
  }

  const removeVehicle = (vehicleId: string) => {
    setSelectedVehicles(selectedVehicles.filter((id) => id !== vehicleId))
  }

  const generatePDF = async () => {
    setIsGeneratingPDF(true)

    try {
      const response = await fetch("/api/generate-comparison-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicles: selectedVehicles.map((id) => vehicles[id as keyof typeof vehicles]),
          showDifferencesOnly,
          generatedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao gerar PDF")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = `comparacao-veiculos-${new Date().toISOString().split("T")[0]}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      alert("Erro ao gerar relatório PDF. Tente novamente.")
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const comparisonSpecs = [
    { key: "price", label: "Preço", category: "Geral" },
    { key: "year", label: "Ano", category: "Geral" },
    { key: "mileage", label: "Quilometragem", category: "Geral" },
    { key: "bodyType", label: "Carroçaria", category: "Geral" },
    { key: "color", label: "Cor", category: "Geral" },
    { key: "doors", label: "Portas", category: "Geral" },
    { key: "seats", label: "Lugares", category: "Geral" },
    { key: "warranty", label: "Garantia", category: "Geral" },
    { key: "engine", label: "Motor", category: "Performance" },
    { key: "power", label: "Potência", category: "Performance" },
    { key: "fuel", label: "Combustível", category: "Performance" },
    { key: "transmission", label: "Transmissão", category: "Performance" },
    { key: "consumption", label: "Consumo", category: "Performance" },
    { key: "emissions", label: "Emissões CO2", category: "Performance" },
  ]

  const categories = ["Geral", "Performance"]

  const getSpecValue = (vehicle: any, key: string) => {
    if (key === "mileage") return `${vehicle[key]} km`
    if (key === "originalPrice" && vehicle.originalPrice) return vehicle.originalPrice
    return vehicle[key] || "N/A"
  }

  const shouldShowSpec = (specKey: string) => {
    if (!showDifferencesOnly) return true

    const values = selectedVehicles.map((id) => {
      const vehicle = vehicles[id as keyof typeof vehicles]
      return getSpecValue(vehicle, specKey)
    })

    return new Set(values).size > 1
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="space-y-8">
          {/* Vehicle Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Selecionar Veículos para Comparar</span>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{selectedVehicles.length}/3 selecionados</Badge>
                  {selectedVehicles.length >= 2 && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={generatePDF}
                        disabled={isGeneratingPDF}
                        className="bg-white text-gray-900"
                      >
                        {isGeneratingPDF ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                            Gerando...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Exportar PDF
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm" className="bg-white text-gray-900">
                        <Share2 className="h-4 w-4 mr-2" />
                        Partilhar
                      </Button>
                    </div>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedVehicles.map((vehicleId, index) => {
                  const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                  if (!vehicle) return null // Evitar erro se veículo não existir

                  return (
                    <div key={vehicleId} className="relative">
                      <Card className="border-2 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-blue-600">Posição {index + 1}</Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVehicle(vehicleId)}
                              className="h-6 w-6 p-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            width={300}
                            height={200}
                            className="w-full h-32 object-cover rounded mb-2"
                          />
                          <h3 className="font-semibold text-sm">{vehicle.name}</h3>
                          <p className="text-blue-600 font-bold">{vehicle.price}</p>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}

                {/* Add Vehicle Slot */}
                {selectedVehicles.length < 3 && (
                  <Card className="border-2 border-dashed border-gray-300">
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full min-h-[200px]">
                      <Plus className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-500 text-sm mb-4 text-center">Adicionar veículo para comparar</p>
                      <Select onValueChange={addVehicle}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecionar veículo" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableVehicles
                            .filter((v) => !selectedVehicles.includes(v.id))
                            .map((vehicle) => (
                              <SelectItem key={vehicle.id} value={vehicle.id}>
                                {vehicle.name} - {vehicle.price}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Comparison Options */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Comparação Detalhada</h2>
            <div className="flex items-center gap-4">
              <Button
                variant={showDifferencesOnly ? "default" : "outline"}
                onClick={() => setShowDifferencesOnly(!showDifferencesOnly)}
                className={!showDifferencesOnly ? "bg-white text-gray-900" : ""}
              >
                Mostrar Apenas Diferenças
              </Button>
            </div>
          </div>

          {/* Comparison Table */}
          {selectedVehicles.length >= 2 && (
            <div className="space-y-8">
              {categories.map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900 w-1/4">Especificação</th>
                            {selectedVehicles.map((vehicleId) => {
                              const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                              return (
                                <th key={vehicleId} className="text-center py-3 px-4 font-medium text-gray-900">
                                  <div className="space-y-1">
                                    <div className="text-sm">{vehicle.name}</div>
                                    <div className="text-blue-600 font-bold">{vehicle.price}</div>
                                  </div>
                                </th>
                              )
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonSpecs
                            .filter((spec) => spec.category === category && shouldShowSpec(spec.key))
                            .map((spec) => {
                              const values = selectedVehicles.map((id) => {
                                const vehicle = vehicles[id as keyof typeof vehicles]
                                return getSpecValue(vehicle, spec.key)
                              })
                              const isUnique = new Set(values).size > 1

                              return (
                                <tr key={spec.key} className="border-b hover:bg-gray-50">
                                  <td className="py-3 px-4 font-medium text-gray-700">{spec.label}</td>
                                  {selectedVehicles.map((vehicleId, index) => {
                                    const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                                    const value = getSpecValue(vehicle, spec.key)
                                    const isBest =
                                      spec.key === "price"
                                        ? value ===
                                          Math.min(...values.map((v) => Number.parseFloat(v.replace(/[€,]/g, ""))))
                                        : false

                                    return (
                                      <td key={vehicleId} className="py-3 px-4 text-center">
                                        <div className={`${isUnique && isBest ? "text-green-600 font-semibold" : ""}`}>
                                          {value}
                                          {spec.key === "price" && vehicle.originalPrice && (
                                            <div className="text-xs text-gray-500 line-through">
                                              {vehicle.originalPrice}
                                            </div>
                                          )}
                                        </div>
                                      </td>
                                    )
                                  })}
                                </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Features Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipamentos e Características</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900 w-1/4">Característica</th>
                          {selectedVehicles.map((vehicleId) => {
                            const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                            return (
                              <th key={vehicleId} className="text-center py-3 px-4 font-medium text-gray-900">
                                {vehicle.name}
                              </th>
                            )
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Get all unique features */}
                        {Array.from(
                          new Set(
                            selectedVehicles.flatMap((id) => {
                              const vehicle = vehicles[id as keyof typeof vehicles]
                              return vehicle.features || []
                            }),
                          ),
                        ).map((feature) => (
                          <tr key={feature} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-700">{feature}</td>
                            {selectedVehicles.map((vehicleId) => {
                              const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                              const hasFeature = vehicle.features?.includes(feature)
                              return (
                                <td key={vehicleId} className="py-3 px-4 text-center">
                                  {hasFeature ? (
                                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                                  ) : (
                                    <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                                  )}
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* PDF Preview Info */}
              {selectedVehicles.length >= 2 && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-900 mb-2">Relatório de Comparação PDF</h3>
                        <p className="text-blue-700 text-sm mb-4">
                          Gere um relatório profissional em PDF com toda a comparação detalhada dos veículos
                          selecionados. Inclui especificações técnicas, equipamentos e informações de contacto.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs text-blue-600">
                          <span className="bg-blue-100 px-2 py-1 rounded">✓ Especificações completas</span>
                          <span className="bg-blue-100 px-2 py-1 rounded">✓ Comparação visual</span>
                          <span className="bg-blue-100 px-2 py-1 rounded">✓ Informações de contacto</span>
                          <span className="bg-blue-100 px-2 py-1 rounded">✓ Logótipo da empresa</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="grid md:grid-cols-3 gap-4">
                {selectedVehicles.map((vehicleId) => {
                  const vehicle = vehicles[vehicleId as keyof typeof vehicles]
                  return (
                    <Card key={vehicleId} className="text-center">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{vehicle.name}</h3>
                        <div className="text-2xl font-bold text-blue-600 mb-4">{vehicle.price}</div>
                        <div className="space-y-2">
                          <Link href={`/inventario/${vehicleId}`}>
                            <Button className="w-full">
                              Ver Detalhes
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="outline" className="w-full bg-white text-gray-900">
                            Agendar Test Drive
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {selectedVehicles.length < 2 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Plus className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Selecione pelo menos 2 veículos</h3>
                <p className="text-gray-600">
                  Escolha os veículos que deseja comparar para ver as especificações lado a lado.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
