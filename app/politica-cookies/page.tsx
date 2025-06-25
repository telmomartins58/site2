import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Settings, BarChart, Shield } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cookie className="h-8 w-8 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-xl text-gray-600">
              Saiba como utilizamos cookies para melhorar a sua experiência no nosso website.
            </p>
            <p className="text-sm text-gray-500 mt-2">Última atualização: 20 de Junho de 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-[#1e3a5f]" />
                  1. O que são Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um
                  website. Eles ajudam o website a lembrar-se das suas preferências e a fornecer uma experiência
                  personalizada.
                </p>
                <p className="text-gray-700">
                  Os cookies não contêm informações pessoais identificáveis e não podem danificar o seu dispositivo. São
                  amplamente utilizados para tornar os websites mais eficientes e fornecer informações aos proprietários
                  do site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-[#1e3a5f]" />
                  2. Tipos de Cookies que Utilizamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Cookies Essenciais</h4>
                  <p className="text-gray-700">
                    Estes cookies são necessários para o funcionamento básico do website e não podem ser desativados:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Cookies de sessão para manter a sua navegação</li>
                    <li>Cookies de segurança para proteger contra ataques</li>
                    <li>Cookies de funcionalidade para lembrar as suas preferências</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Cookies de Performance</h4>
                  <p className="text-gray-700">
                    Estes cookies recolhem informações sobre como utiliza o nosso website:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Páginas mais visitadas</li>
                    <li>Tempo gasto no website</li>
                    <li>Erros encontrados durante a navegação</li>
                    <li>Origem do tráfego</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Cookies de Funcionalidade</h4>
                  <p className="text-gray-700">Estes cookies permitem que o website se lembre das suas escolhas:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Preferências de idioma</li>
                    <li>Veículos favoritos</li>
                    <li>Filtros de pesquisa aplicados</li>
                    <li>Configurações de visualização</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Cookies de Marketing</h4>
                  <p className="text-gray-700">Estes cookies são utilizados para fornecer anúncios relevantes:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Rastreamento de interesses em veículos</li>
                    <li>Personalização de conteúdo</li>
                    <li>Medição da eficácia de campanhas</li>
                    <li>Remarketing em outras plataformas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-[#1e3a5f]" />
                  3. Cookies de Terceiros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Utilizamos alguns serviços de terceiros que podem colocar cookies no seu dispositivo:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                    <p className="text-gray-700 text-sm">
                      Para analisar o tráfego do website e compreender como os visitantes interagem com o nosso
                      conteúdo.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Ads</h4>
                    <p className="text-gray-700 text-sm">
                      Para mostrar anúncios relevantes e medir a eficácia das nossas campanhas publicitárias.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h4>
                    <p className="text-gray-700 text-sm">
                      Para rastrear conversões e criar audiências personalizadas para publicidade no Facebook.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#1e3a5f]" />
                  4. Gestão de Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Pode gerir as suas preferências de cookies de várias formas:</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Através do Navegador</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      A maioria dos navegadores permite controlar cookies através das configurações:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>Chrome: Configurações → Privacidade e segurança → Cookies</li>
                      <li>Firefox: Opções → Privacidade e Segurança → Cookies</li>
                      <li>Safari: Preferências → Privacidade → Cookies</li>
                      <li>Edge: Configurações → Cookies e permissões do site</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Banner de Cookies</h4>
                    <p className="text-gray-700 text-sm">
                      Quando visita o nosso website pela primeira vez, aparece um banner onde pode escolher quais tipos
                      de cookies aceitar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contacto Direto</h4>
                    <p className="text-gray-700 text-sm">
                      Pode contactar-nos diretamente para alterar as suas preferências de cookies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Duração dos Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Os cookies têm diferentes durações:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Cookies de Sessão:</strong> Eliminados quando fecha o navegador
                  </li>
                  <li>
                    <strong>Cookies Persistentes:</strong> Permanecem por um período específico (até 2 anos)
                  </li>
                  <li>
                    <strong>Cookies de Terceiros:</strong> Controlados pelas respetivas empresas
                  </li>
                </ul>
                <p className="text-gray-700">
                  Pode eliminar todos os cookies a qualquer momento através das configurações do seu navegador.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Impacto da Desativação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Se desativar os cookies, algumas funcionalidades do website podem ser afetadas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Perda de preferências e configurações personalizadas</li>
                  <li>Necessidade de reintroduzir informações repetidamente</li>
                  <li>Funcionalidades de comparação e favoritos podem não funcionar</li>
                  <li>Experiência menos personalizada</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Atualizações desta Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Esta política de cookies pode ser atualizada periodicamente para refletir mudanças nos nossos serviços
                  ou na legislação aplicável. Recomendamos que consulte esta página regularmente.
                </p>
                <p className="text-gray-700">
                  As alterações significativas serão comunicadas através de um aviso no nosso website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Para questões sobre a nossa política de cookies:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> cookies@valvoramotors.pt
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
