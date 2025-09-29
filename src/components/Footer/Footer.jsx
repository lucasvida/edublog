const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Seção Principal do Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Seção 1: Branding EduBlog */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-400">EduBlog</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sua plataforma de conteúdos educacionais de qualidade. Aprenda com os melhores professores e especialistas em diversas áreas do conhecimento.
            </p>
          </div>
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="border-t border-gray-700"></div>

      {/* Seção Inferior - Copyright e Links Legais */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center">
          <div className="text-gray-400 text-sm">
            © 2025 EduBlog. Todos os direitos reservados.
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer
