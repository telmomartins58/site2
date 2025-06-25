import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
            <p className="text-xl text-gray-600">
              A sua privacidade é importante para nós. Saiba como protegemos os seus dados.
            </p>
            <p className="text-sm text-gray-500 mt-2">Última atualização: 20 de Junho de 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-[#1e3a5f]" />
                  1. Informações que Recolhemos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Na Valvora Motors, recolhemos informações que nos ajudam a fornecer-lhe o melhor serviço possível:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Informações Pessoais:</strong> Nome, email, telefone, morada quando nos contacta
                  </li>
                  <li>
                    <strong>Informações do Veículo:</strong> Preferências de carros, histórico de pesquisas
                  </li>
                  <li>
                    <strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, páginas visitadas
                  </li>
                  <li>
                    <strong>Cookies:</strong> Para melhorar a sua experiência no nosso website
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-[#1e3a5f]" />
                  2. Como Utilizamos as Suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Utilizamos as suas informações para:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Responder às suas consultas e pedidos de informação</li>
                  <li>Agendar test drives e visitas ao nosso stand</li>
                  <li>Enviar informações sobre veículos que possam interessar-lhe</li>
                  <li>Melhorar o nosso website e serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Processar transações e financiamentos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#1e3a5f]" />
                  3. Partilha de Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Com o seu consentimento explícito</li>
                  <li>Com parceiros de financiamento para processar pedidos de crédito</li>
                  <li>Com prestadores de serviços que nos ajudam a operar o nosso negócio</li>
                  <li>Quando exigido por lei ou autoridades competentes</li>
                  <li>Para proteger os nossos direitos legais</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger as suas informações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Encriptação SSL para transmissão de dados</li>
                  <li>Acesso restrito às informações pessoais</li>
                  <li>Formação regular da nossa equipa sobre proteção de dados</li>
                  <li>Backups seguros e regulares</li>
                  <li>Monitorização contínua dos nossos sistemas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Os Seus Direitos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  De acordo com o RGPD, tem os seguintes direitos sobre os seus dados pessoais:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Direito de Acesso:</strong> Solicitar uma cópia dos seus dados
                  </li>
                  <li>
                    <strong>Direito de Retificação:</strong> Corrigir dados incorretos ou incompletos
                  </li>
                  <li>
                    <strong>Direito de Apagamento:</strong> Solicitar a eliminação dos seus dados
                  </li>
                  <li>
                    <strong>Direito de Portabilidade:</strong> Receber os seus dados num formato estruturado
                  </li>
                  <li>
                    <strong>Direito de Oposição:</strong> Opor-se ao processamento dos seus dados
                  </li>
                  <li>
                    <strong>Direito de Limitação:</strong> Restringir o processamento dos seus dados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Retenção de Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Mantemos as suas informações apenas pelo tempo necessário para cumprir os fins para os quais foram
                  recolhidas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Dados de contacto: Até 3 anos após o último contacto</li>
                  <li>Informações de transações: 7 anos para fins fiscais</li>
                  <li>Dados de marketing: Até retirar o consentimento</li>
                  <li>Dados técnicos: 12 meses</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Para exercer os seus direitos ou esclarecer dúvidas sobre esta política, contacte-nos:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> privacidade@valvoramotors.pt
                  </p>
                  <p>
                    <strong>Telefone:</strong> Disponível no nosso website
                  </p>
                  <p>
                    <strong>Morada:</strong> Rua Aura Abranches nº3, Minde
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
