import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/matematica" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Matemática</h1></div>} />
          <Route path="/ciencias" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Ciências</h1></div>} />
          <Route path="/historia" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">História</h1></div>} />
          <Route path="/literatura" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Literatura</h1></div>} />
          <Route path="/sobre" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Sobre</h1></div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
