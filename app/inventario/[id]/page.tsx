import { Header } from "@/components/header"
import { VehicleDetails } from "@/components/vehicle-details"
import { VehicleGallery } from "@/components/vehicle-gallery"
import { VehicleSpecs } from "@/components/vehicle-specs"
import { VehicleFeatures } from "@/components/vehicle-features"
import { ContactDealer } from "@/components/contact-dealer"
import { SimilarVehicles } from "@/components/similar-vehicles"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
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
    description:
      "Este magnífico BMW X5 xDrive30d combina luxo, performance e versatilidade num só veículo. Com apenas 12.000 km, este SUV premium oferece uma experiência de condução excecional com tecnologia de ponta e acabamentos de alta qualidade.",
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
    images: [
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
      "/images/bmw-x5.png",
    ],
  },
}

interface VehiclePageProps {
  params: {
    id: string
  }
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = vehicles[params.id as keyof typeof vehicles]

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <VehicleGallery images={vehicle.images} vehicleName={vehicle.name} />
            <VehicleDetails vehicle={vehicle} />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <VehicleSpecs vehicle={vehicle} />
              <VehicleFeatures features={vehicle.features} />
            </div>
            <div>
              <ContactDealer vehicle={vehicle} />
            </div>
          </div>

          <SimilarVehicles currentVehicleId={vehicle.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
