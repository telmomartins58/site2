import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Calculator, Calendar, MessageCircle } from "lucide-react"

interface Vehicle {
  name: string
  price: string
}

interface ContactDealerProps {
  vehicle: Vehicle
}

export function ContactDealer({ vehicle }: ContactDealerProps) {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" size="lg">
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Test Drive
          </Button>
          <Button variant="outline" className="w-full justify-start bg-white text-gray-900" size="lg">
            <Calculator className="mr-2 h-4 w-4" />
            Calcular Financiamento
          </Button>
          <Button variant="outline" className="w-full justify-start bg-white text-gray-900" size="lg">
            <MessageCircle className="mr-2 h-4 w-4" />
            Fazer Pergunta
          </Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contactar Vendedor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Telefone</div>
              <div className="text-sm text-gray-600">(555) 123-4567</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-gray-600">vendas@valvoramotors.com</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Localização</div>
              <div className="text-sm text-gray-600">123 Auto Drive, Springfield</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium">Horário</div>
              <div className="text-sm text-gray-600">Seg-Sex: 9h-19h | Sáb: 9h-18h</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Enviar Mensagem</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nome" />
              <Input placeholder="Telefone" />
            </div>
            <Input type="email" placeholder="Email" />
            <Textarea
              placeholder={`Olá, tenho interesse no ${vehicle.name} por ${vehicle.price}. Gostaria de mais informações.`}
              rows={4}
            />
            <Button className="w-full">Enviar Mensagem</Button>
          </form>
        </CardContent>
      </Card>

      {/* Financing Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <div className="font-semibold text-blue-900">Financiamento Disponível</div>
            <div className="text-sm text-blue-700">A partir de €299/mês*</div>
            <div className="text-xs text-blue-600">*Sujeito a aprovação de crédito</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
