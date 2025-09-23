import { useState } from "react";

const PostCard = ({ index = 0 }) => {
  const [imageError, setImageError] = useState(false);
  
  // Dados específicos baseados na imagem
  const mockData = [
    {
      category: "Matemática",
      categoryColor: "bg-blue-100 text-blue-800",
      author: "Prof. João Mendes",
      duration: "10 min",
      views: "1240",
      comments: "23",
      timeAgo: "2 dias atrás",
      title: "Como Resolver Equações Quadráticas: Guia Completo",
      description: "Aprenda diferentes métodos para resolver equações do segundo grau com exemplos práticos e dicas importantes.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      category: "História",
      categoryColor: "bg-yellow-100 text-yellow-800",
      author: "Dra. Lucia Ferreira",
      duration: "15 min",
      views: "892",
      comments: "18",
      timeAgo: "3 dias atrás",
      title: "A Revolução Industrial e Seus Impactos na Sociedade",
      description: "Explore as transformações sociais, econômicas e tecnológicas durante a Revolução Industrial.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      category: "Ciências",
      categoryColor: "bg-green-100 text-green-800",
      author: "Prof. Ricardo Lima",
      duration: "8 min",
      views: "1580",
      comments: "31",
      timeAgo: "4 dias atrás",
      title: "Fotossíntese: O Processo que Sustenta a Vida",
      description: "Entenda como as plantas convertem luz solar em energia e a importância desse processo para todos os seres vivos.",
      imageUrl: "https://placehold.co/600x400"
    }
  ];

  const currentData = mockData[index] || mockData[0];

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex">
        {/* Imagem à esquerda */}
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={imageError ? "https://placehold.co/600x400" : currentData.imageUrl}
            alt={currentData.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>

        {/* Conteúdo à direita */}
        <div className="flex-1 p-3 flex flex-col justify-between">
          {/* Cabeçalho com timestamp */}
          <div className="flex justify-end mb-2">
            <span className="text-xs text-gray-500">
              {currentData.timeAgo}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {currentData.title}
          </h3>

          {/* Descrição */}
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
            {currentData.description}
          </p>

          {/* Informações do autor */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>{currentData.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{currentData.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
