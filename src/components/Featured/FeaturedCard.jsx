const FeaturedCard = ({ post }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-80 hover:shadow-xl transition-shadow duration-300">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Categoria */}
        <div className="flex justify-start">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white text-gray-800 shadow-md">
            {post.category}
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-3 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-lg mb-6 line-clamp-3 opacity-95 leading-relaxed">
            {post.description}
          </p>

          {/* Metadados */}
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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

export default FeaturedCard;
