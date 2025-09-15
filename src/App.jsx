import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
