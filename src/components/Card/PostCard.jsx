import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  if (!post) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="flex space-x-4">
          <div className="w-32 h-24 bg-gray-300 rounded"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  // Função para extrair resumo do conteúdo
  const getExcerpt = (content, maxLength = 150) => {
    if (!content) return '';
    const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <Link to={`/post/${post._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="flex">
          {/* Conteúdo à direita */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            {/* Título */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {post.title}
            </h3>

            {/* Descrição */}
            <p className="text-gray-700 text-sm mb-3 line-clamp-2">
              {getExcerpt(post.content)}
            </p>

            {/* Informações do autor */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{post.author || 'Autor não informado'}</span>
              </div>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
