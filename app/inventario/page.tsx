import { Header } from "@/components/header"
import { InventoryHero } from "@/components/inventory-hero"
import { VehicleFilters } from "@/components/vehicle-filters"
import { VehicleGrid } from "@/components/vehicle-grid"
import { Footer } from "@/components/footer"

export default function InventoryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <InventoryHero />
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <VehicleFilters />
              </div>
              <div className="lg:col-span-3">
                <VehicleGrid />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
