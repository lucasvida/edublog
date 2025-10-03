import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import PostCard from "../components/Card/PostCard";

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Buscar posts da API (não requer autenticação para visualizar)
        const posts = await api.getPosts();
        setData(posts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Erro ao carregar posts. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Função de busca
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      // Se busca vazia, recarregar todos os posts
      window.location.reload();
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const searchResults = await api.searchPosts({
        title: searchTerm
      });
      
      setData(searchResults);
    } catch (err) {
      console.error('Error searching posts:', err);
      setError('Erro ao buscar posts. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts Recentes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-red-600 mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts Recentes</h1>
      
      {/* Campo de busca */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">
              {searchTerm ? 'Nenhum post encontrado para sua busca.' : 'Nenhum post encontrado.'}
            </p>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  window.location.reload();
                }}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                Limpar busca
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Posts