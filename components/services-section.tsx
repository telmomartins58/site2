import { Card, CardContent } from "@/components/ui/card"
import { Car, CreditCard, Wrench, Shield, Users, Award } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Venda de Veículos",
    description: "Explore o nosso extenso inventário de veículos usados e novos de qualidade de marcas de confiança.",
  },
  {
    icon: CreditCard,
    title: "Financiamento Automóvel",
    description:
      "Opções de financiamento competitivas com condições flexíveis para se adequar ao seu orçamento e situação de crédito.",
  },
  {
    icon: Wrench,
    title: "Apoio no Pós-Venda",
    description:
      "Acompanhamento personalizado após a compra para garantir a sua total satisfação com o veículo adquirido.",
  },
  {
    icon: Shield,
    title: "Garantias Estendidas",
    description: "Opções de garantia abrangentes para proteger o seu investimento e dar-lhe tranquilidade.",
  },
  {
    icon: Users,
    title: "Programa de Retoma",
    description: "Obtenha o melhor valor pelo seu veículo atual com a nossa avaliação de retoma sem complicações.",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Cada veículo passa por uma inspeção rigorosa para garantir qualidade e fiabilidade.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Os Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções automóveis abrangentes para satisfazer todas as suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
