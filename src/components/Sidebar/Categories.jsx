const Categories = () => {
  const categories = [
    { name: "Matemática", count: 124, color: "bg-blue-100 text-blue-800", icon: "📐" },
    { name: "Ciências", count: 89, color: "bg-green-100 text-green-800", icon: "🔬" },
    { name: "História", count: 76, color: "bg-yellow-100 text-yellow-800", icon: "📚" },
    { name: "Literatura", count: 52, color: "bg-purple-100 text-purple-800", icon: "📖" },
    { name: "Geografia", count: 34, color: "bg-orange-100 text-orange-800", icon: "🌍" },
    { name: "Filosofia", count: 28, color: "bg-pink-100 text-pink-800", icon: "🤔" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorias</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 cursor-pointer">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{category.icon}</span>
              <span className="text-gray-700">{category.name}</span>
            </div>
            <span className="text-sm text-gray-500">{category.count}</span>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-600 text-sm hover:text-blue-800 mt-3 block">
        Ver todas as categorias
      </a>
    </div>
  );
};

export default Categories;
