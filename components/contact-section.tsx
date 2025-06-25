'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await res.json()
      alert(data.message)
    } catch (err) {
      console.error(err)
      alert("Ocorreu um erro. Tenta novamente.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Entre em Contacto</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pronto para encontrar o seu carro perfeito? Contacte-nos hoje para assistência personalizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visite-nos</h3>
                    <p className="text-gray-600 text-sm">Minde</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contacte-nos</h3>
                    <p className="text-gray-600 text-sm">Nós ligamos para si</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Envie-nos Email</h3>
                    <p className="text-gray-600 text-sm">info@valvoramotors.pt</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-6 w-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horários</h3>
                    <p className="text-gray-600 text-sm">Todos os dias das 9h às 19h</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Primeiro Nome</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="João" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Último Nome</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Silva" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="joao@exemplo.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="912 345 678" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensagem</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Conte-nos sobre o seu carro ideal ou quaisquer questões que tenha..." rows={4} />
                </div>

                <Button className="w-full bg-[#1e3a5f] hover:bg-[#2c4f7a]" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
