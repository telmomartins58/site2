import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Serviço</h1>
            <p className="text-xl text-gray-600">Condições gerais de utilização dos nossos serviços e website.</p>
            <p className="text-sm text-gray-500 mt-2">Última atualização: 20 de Junho de 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#1e3a5f]" />
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Ao utilizar o website da Valvora Motors ou os nossos serviços, concorda com estes termos de serviço.
                  Se não concordar com qualquer parte destes termos, não deve utilizar os nossos serviços.
                </p>
                <p className="text-gray-700">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                  imediatamente após a sua publicação no website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#1e3a5f]" />
                  2. Serviços Oferecidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">A Valvora Motors oferece os seguintes serviços:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Venda de veículos automóveis usados e novos</li>
                  <li>Serviços de financiamento automóvel</li>
                  <li>Programa de retoma de veículos</li>
                  <li>Apoio no pós-venda</li>
                  <li>Agendamento de test drives</li>
                  <li>Consultoria na escolha de veículos</li>
                  <li>Garantias estendidas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Utilização do Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Ao utilizar o nosso website, compromete-se a:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Não utilizar o website para fins ilegais ou não autorizados</li>
                  <li>Não interferir com o funcionamento do website</li>
                  <li>Não tentar aceder a áreas restritas do sistema</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                  <li>Não enviar conteúdo ofensivo ou inadequado</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Preços e Disponibilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Os preços apresentados no website são indicativos e podem estar sujeitos a alterações sem aviso
                  prévio. Todos os preços incluem IVA à taxa legal em vigor.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Os preços finais serão confirmados no momento da compra</li>
                  <li>A disponibilidade dos veículos pode variar</li>
                  <li>Reservamo-nos o direito de retirar veículos da venda</li>
                  <li>Ofertas especiais têm validade limitada</li>
                  <li>Custos adicionais podem aplicar-se (transferência, inspeção, etc.)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Financiamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Os serviços de financiamento estão sujeitos a aprovação de crédito e às condições dos nossos parceiros
                  financeiros:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Análise de crédito obrigatória</li>
                  <li>Documentação completa necessária</li>
                  <li>Taxas de juro variáveis conforme perfil</li>
                  <li>Seguros obrigatórios podem ser exigidos</li>
                  <li>Condições específicas aplicam-se a cada caso</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Garantias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Todos os veículos vendidos incluem garantia legal. Garantias adicionais podem estar disponíveis:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Garantia legal de 2 anos para veículos novos</li>
                  <li>Garantia de 1 ano para veículos usados</li>
                  <li>Garantias estendidas opcionais disponíveis</li>
                  <li>Condições específicas aplicam-se a cada garantia</li>
                  <li>Manutenção adequada é obrigatória</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#1e3a5f]" />
                  7. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">A Valvora Motors não se responsabiliza por:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Danos indiretos ou consequenciais</li>
                  <li>Perda de dados ou interrupção de serviço</li>
                  <li>Informações fornecidas por terceiros</li>
                  <li>Decisões tomadas com base nas informações do website</li>
                  <li>Problemas técnicos fora do nosso controlo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Propriedade Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Todo o conteúdo do website (textos, imagens, logótipos, design) é propriedade da Valvora Motors ou dos
                  seus licenciadores e está protegido por direitos de autor.
                </p>
                <p className="text-gray-700">
                  É proibida a reprodução, distribuição ou utilização comercial sem autorização prévia por escrito.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Lei Aplicável</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Estes termos são regidos pela lei portuguesa. Qualquer litígio será resolvido pelos tribunais
                  competentes em Portugal.
                </p>
                <p className="text-gray-700">
                  Para questões ou reclamações, contacte-nos através dos meios disponibilizados no nosso website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Para esclarecimentos sobre estes termos de serviço:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> info@valvoramotors.pt
                  </p>
                  <p>
                    <strong>Morada:</strong> Rua Aura Abranches nº3, Minde
                  </p>
                  <p>
                    <strong>Horário:</strong> Todos os dias das 9h às 19h
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
