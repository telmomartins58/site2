import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface VehicleFeaturesProps {
  features: string[]
}

export function VehicleFeatures({ features }: VehicleFeaturesProps) {
  // Categorize features
  const categorizedFeatures = {
    "Conforto e Conveniência": features.filter(
      (f) =>
        f.includes("aquecido") ||
        f.includes("ar condicionado") ||
        f.includes("bancos") ||
        f.includes("volante") ||
        f.includes("keyless"),
    ),
    "Tecnologia e Multimédia": features.filter(
      (f) => f.includes("GPS") || f.includes("som") || f.includes("navegação") || f.includes("sistema"),
    ),
    "Segurança e Assistência": features.filter(
      (f) => f.includes("câmara") || f.includes("sensores") || f.includes("controlo") || f.includes("faróis"),
    ),
    "Exterior e Design": features.filter((f) => f.includes("teto") || f.includes("pele") || f.includes("LED")),
  }

  // Remove categorized features from the main list and add remaining as "Outros"
  const categorizedFeaturesList = Object.values(categorizedFeatures).flat()
  const otherFeatures = features.filter((f) => !categorizedFeaturesList.includes(f))
  if (otherFeatures.length > 0) {
    categorizedFeatures["Outros"] = otherFeatures
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Equipamentos e Características</h2>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          {features.length} características
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(categorizedFeatures).map(
          ([category, categoryFeatures]) =>
            categoryFeatures.length > 0 && (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ),
        )}
      </div>
    </div>
  )
}
