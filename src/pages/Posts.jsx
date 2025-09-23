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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { data.length > 0 ? data.slice(0, 6).map((item) => (
            <PostCard key={item.id} post={item} />
          )) : <SkeletonCard /> }
        </div>
     </div>
  )
}

export default Posts