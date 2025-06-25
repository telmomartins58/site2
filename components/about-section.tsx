import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Mais de 5 anos de experiência automóvel",
  "Inspeção rigorosa de 150 pontos do veículo",
  "Preços transparentes sem taxas ocultas",
  "Opções de garantia abrangentes",
  "Equipa de atendimento ao cliente profissional",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Porquê Escolher a Valvora Motors?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Com mais de 5 anos na indústria automóvel, construímos a nossa reputação na confiança, qualidade e
                atendimento ao cliente excecional. Cada veículo no nosso inventário cumpre os nossos rigorosos padrões
                de qualidade.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1e3a5f] hover:bg-[#2c4f7a]">
                Saiba Mais Sobre Nós
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-gray-900">
                Ler Avaliações de Clientes
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/valvora-logo.png"
              alt="Valvora Motors - Logótipo"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1e3a5f]">93%</div>
                <div className="text-sm text-gray-600">Satisfação do Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
