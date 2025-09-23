const PopularTags = () => {
  const tags = [
    "#álgebra", "#história do brasil", "#biologia", "#literatura",
    "#geometria", "#química", "#física", "#gramática",
    "#filosofia", "#sociologia", "#geografia", "#matemática"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags Populares</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
