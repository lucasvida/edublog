import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import PostForm from './pages/PostForm';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <div className="min-h-screen pt-20">
          <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/new-post" element={<PostForm />} />
            <Route path="/admin/edit-post/:id" element={<PostForm />} />
            <Route path="/matematica" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Matemática</h1></div>} />
            <Route path="/ciencias" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Ciências</h1></div>} />
            <Route path="/historia" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">História</h1></div>} />
            <Route path="/literatura" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Literatura</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
