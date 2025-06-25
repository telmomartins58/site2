import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    rating: 5,
    text: "Serviço excecional do início ao fim. A equipa ajudou-me a encontrar o SUV perfeito para a minha família, e o processo de financiamento foi impecável.",
  },
  {
    name: "João Santos",
    rating: 5,
    text: "Experiência fantástica na Valvora Motors. Atendimento personalizado e encontrei exatamente o que procurava. Recomendo vivamente!",
  },
  {
    name: "Maria Oliveira",
    rating: 5,
    text: "Como comprador de carro pela primeira vez, estava nervosa com o processo. A equipa tornou tudo fácil e transparente. Recomendo vivamente!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">O Que Dizem os Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra - ouça os nossos clientes satisfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
