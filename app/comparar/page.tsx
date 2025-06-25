import { Header } from "@/components/header"
import { ComparisonHero } from "@/components/comparison-hero"
import { VehicleComparison } from "@/components/vehicle-comparison"
import { Footer } from "@/components/footer"

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ComparisonHero />
        <VehicleComparison />
      </main>
      <Footer />
    </div>
  )
}
