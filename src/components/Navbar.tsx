import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageCircle, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkBlue/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="https://esaude.nexxt.work/wp-content/uploads/2025/05/ESAUDE-LOGO.png" 
            alt="eSaude" 
            className="h-12"
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            className="text-white hover:text-secondary transition-colors font-medium"
          >
            Página inicial
          </a>
          <a 
            href="#sobre" 
            className="text-white hover:text-secondary transition-colors font-medium"
          >
            Sobre Nós
          </a>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-white hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-secondary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <a 
            href="#login" 
            className="text-white hover:text-secondary transition-colors"
            aria-label="Login"
          >
            <User size={20} />
          </a>
        </div>
        
        <button 
          className="md:hidden text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;