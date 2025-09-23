const PopularPosts = () => {
  const popularPosts = [
    {
      id: 1,
      title: "Teorema de Pitágoras na Prática",
      category: "Matemática",
      categoryColor: "bg-blue-100 text-blue-800",
      views: "2.340",
      image: "https://placehold.co/80x60"
    },
    {
      id: 2,
      title: "Segunda Guerra Mundial: Principais Eventos",
      category: "História",
      categoryColor: "bg-yellow-100 text-yellow-800",
      views: "1.890",
      image: "https://placehold.co/80x60"
    },
    {
      id: 3,
      title: "DNA e Genética: Conceitos Básicos",
      category: "Ciências",
      categoryColor: "bg-green-100 text-green-800",
      views: "1.650",
      image: "https://placehold.co/80x60"
    },
    {
      id: 4,
      title: "Romantismo no Brasil",
      category: "Literatura",
      categoryColor: "bg-purple-100 text-purple-800",
      views: "1.420",
      image: "https://placehold.co/80x60"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Posts Populares</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="flex space-x-3 hover:bg-gray-50 rounded-lg p-2 cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                  {post.category}
                </span>
              </div>
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">{post.views} visualizações</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
