const SideCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="flex">
        {/* Imagem */}
        <div className="w-20 h-16 flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-3 flex flex-col justify-between">
          {/* Categoria */}
          <div className="mb-2">
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {post.category}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          {/* Descrição */}
          <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          {/* Metadados */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{post.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
