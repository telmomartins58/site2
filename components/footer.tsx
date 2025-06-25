import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/valvora-logo.png"
                alt="Valvora Motors"
                width={180}
                height={60}
                className="h-14 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              O seu parceiro de confiança para encontrar o veículo perfeito. Carros de qualidade, serviço excecional e
              preços competitivos desde 2019.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/inventario" className="block text-gray-400 hover:text-white transition-colors">
                Ver Inventário
              </Link>
              <Link href="/comparar" className="block text-gray-400 hover:text-white transition-colors">
                Comparar Veículos
              </Link>
              <Link href="#services" className="block text-gray-400 hover:text-white transition-colors">
                Nossos Serviços
              </Link>
              <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                Sobre Nós
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Venda de Veículos
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Financiamento Automóvel
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Programa de Retoma
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Garantias Estendidas
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações de Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                Rua Aura Abranches nº3
                <br />
                Minde
              </p>
              <p>Email: info@valvoramotors.pt</p>
              <p>Horário: Todos os dias das 9h às 19h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Valvora Motors. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-servico" className="text-gray-400 hover:text-white transition-colors">
                Termos de Serviço
              </Link>
              <Link href="/politica-cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
