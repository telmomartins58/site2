"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Honda", "Ford", "Peugeot", "Renault", "Opel"]

const fuelTypes = ["Gasolina", "Diesel", "Híbrido", "Elétrico", "GPL"]

const bodyTypes = ["Sedan", "SUV", "Hatchback", "Station Wagon", "Coupé", "Cabriolet", "Monovolume"]

export function VehicleFilters() {
  const [priceRange, setPriceRange] = useState([15000, 80000])
  const [yearRange, setYearRange] = useState([2015, 2024])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<string[]>([])

  const clearAllFilters = () => {
    setPriceRange([15000, 80000])
    setYearRange([2015, 2024])
    setSelectedBrands([])
    setSelectedFuelTypes([])
    setSelectedBodyTypes([])
  }

  const activeFiltersCount = selectedBrands.length + selectedFuelTypes.length + selectedBodyTypes.length

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
              {activeFiltersCount > 0 && <Badge variant="secondary">{activeFiltersCount}</Badge>}
            </CardTitle>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                <X className="h-4 w-4 mr-1" />
                Limpar
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Preço</label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100000}
              min={10000}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>€{priceRange[0].toLocaleString()}</span>
              <span>€{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Year Range */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Ano</label>
            <Slider value={yearRange} onValueChange={setYearRange} max={2024} min={2010} step={1} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{yearRange[0]}</span>
              <span>{yearRange[1]}</span>
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Marca</label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedBrands([...selectedBrands, brand])
                      } else {
                        setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                      }
                    }}
                  />
                  <label htmlFor={brand} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Combustível</label>
            <div className="space-y-2">
              {fuelTypes.map((fuel) => (
                <div key={fuel} className="flex items-center space-x-2">
                  <Checkbox
                    id={fuel}
                    checked={selectedFuelTypes.includes(fuel)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedFuelTypes([...selectedFuelTypes, fuel])
                      } else {
                        setSelectedFuelTypes(selectedFuelTypes.filter((f) => f !== fuel))
                      }
                    }}
                  />
                  <label htmlFor={fuel} className="text-sm cursor-pointer">
                    {fuel}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Body Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Tipo de Carroçaria</label>
            <div className="space-y-2">
              {bodyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedBodyTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedBodyTypes([...selectedBodyTypes, type])
                      } else {
                        setSelectedBodyTypes(selectedBodyTypes.filter((t) => t !== type))
                      }
                    }}
                  />
                  <label htmlFor={type} className="text-sm cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Transmissão</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar transmissão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatic">Automática</SelectItem>
                <SelectItem value="both">Ambas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
