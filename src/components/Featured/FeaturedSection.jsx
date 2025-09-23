import FeaturedCard from "./FeaturedCard";
import SideCard from "./SideCard";

const FeaturedSection = () => {
  const featuredData = {
    main: {
      id: 1,
      title: "Fundamentos da Matemática: Álgebra Linear Explicada",
      description: "Descubra os conceitos essenciais da álgebra linear de forma simples e prática, com exemplos do mundo real.",
      category: "Matemática",
      categoryColor: "bg-blue-100 text-blue-800",
      author: "Prof. Ana Silva",
      duration: "8 min",
      image: "https://placehold.co/600x400",
      isMain: true
    },
    side: [
      {
        id: 2,
        title: "História do Brasil: Era Vargas em Detalhes",
        description: "Análise completa do período Vargas e suas transformações na sociedade brasileira.",
        category: "História",
        categoryColor: "bg-gray-100 text-gray-800",
        author: "Dr. Carlos Santos",
        duration: "12 min",
        image: "https://placehold.co/300x200"
      },
      {
        id: 3,
        title: "Ciências: Explorando o Sistema Solar",
        description: "Uma jornada fascinante pelos planetas e suas características únicas.",
        category: "Ciências",
        categoryColor: "bg-gray-100 text-gray-800",
        author: "Profa. Maria Costa",
        duration: "6 min",
        image: "https://placehold.co/300x200"
      }
    ]
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">Posts em Destaque</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Conteúdos Mais Populares</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os artigos mais lidos e comentados da nossa comunidade educacional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card Principal */}
          <div className="lg:col-span-2">
            <FeaturedCard post={featuredData.main} />
          </div>

          {/* Cards Laterais */}
          <div className="space-y-3">
            {featuredData.side.map((post) => (
              <SideCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
