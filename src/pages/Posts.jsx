import { useEffect, useState } from "react";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import PostCard from "../components/Card/PostCard";

const Posts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const dados = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const data = await res.json();
      setData(data);
    }
    dados()
  }, []);
  return (
     <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts Recentes</h1>
         <div className="relative">
            <input
              type="text"
              placeholder="Buscar artigos..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { data.length > 0 ? data.slice(0, 6).map((item) => (
            <PostCard key={item.id} post={item} />
          )) : <SkeletonCard /> }
        </div>
     </div>
  )
}

export default Posts