import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Controla o efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Garante que o componente está montado antes de renderizar elementos condicionais
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fecha o menu ao clicar em um link (mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
      {/* Logo */}
      <NavLink to="/" className="text-blue-600 font-bold text-2xl flex items-center z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L0 9l4 2.18v6L12 22l8-4.82v-6L24 9L12 2zm0 2.76L18.61 9H5.39L12 4.76zM17 16l-5 3-5-3V9h10v7z" />
        </svg>
        EduBlog
      </NavLink>

      {/* Hamburger Menu Button (Mobile) */}
      <button 
        className="md:hidden z-20 relative w-10 h-10 text-gray-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Menu</span>
        <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 delay-200' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-gray-600 transform transition-all duration-200 ease-in-out ${
              isOpen ? 'w-0 opacity-50' : 'w-6 opacity-100'
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 delay-200' : 'translate-y-2'
            }`}
          ></span>
        </div>
      </button>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:flex space-x-6">
        <NavLink 
          to="/posts" 
          className={({ isActive }) => 
            isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
          }
        >
          Posts
        </NavLink>
        {isAuthenticated && (
          <NavLink 
            to="/admin" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
          >
            Admin
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu */}
      {mounted && (
        <div 
          className={`fixed inset-0 z-10 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <NavLink 
            to="/posts" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
            onClick={closeMenu}
          >
            Posts
          </NavLink>
          {isAuthenticated && (
            <NavLink 
              to="/admin" 
              className={({ isActive }) => 
                isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
              }
              onClick={closeMenu}
            >
              Admin
            </NavLink>
          )}
          
          {/* Login/Logout Button in Mobile Menu */}
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                closeMenu();
              }}
              className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center mt-6"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                />
              </svg>
              Logout
            </button>
          ) : (
            <NavLink 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center mt-6"
              onClick={closeMenu}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
                />
              </svg>
              Login
            </NavLink>
          )}
        </div>
      </div>
      )}

      {/* Login/Logout Button */}
      {mounted && (
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                />
              </svg>
              Logout
            </button>
          ) : (
            <NavLink 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
                />
              </svg>
              Login
            </NavLink>
          )}
        </div>
      )}
      </div>
    </header>
  );
};

export default Menu;
