export function ComparisonHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">Comparar Veículos</h1>
          <p className="text-xl text-blue-100">
            Compare especificações, preços e características dos nossos veículos lado a lado para tomar a melhor
            decisão.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Veículos para Comparar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-200">Especificações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200">Transparente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
