import { useEffect, useState } from "react";
import PostCard from "../components/Card/PostCard";

const Home = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const data = await res.json();
      setData(data);
    }
    fetchData()
  }, []);

  return (
    <>
    
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Conteúdo Principal */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Artigos Recentes</h1>
            
            <div className="space-y-6">
              {data.length > 0 ? data.slice(0, 3).map((item, index) => (
                <PostCard key={item.id} index={index} />
              )) : (
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
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
                  ))}
                </div>
              )}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Carregar Mais Artigos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
