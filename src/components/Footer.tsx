import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Assine e nunca mais perca nossos boletins.
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-grow px-6 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-secondary px-8 py-3 rounded-r-lg hover:bg-secondary/90 transition-colors font-medium">
              Assine
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-0">
            <a href="/" className="hover:text-secondary transition-colors">
              Página Inicial
            </a>
            <a href="#sobre" className="hover:text-secondary transition-colors">
              Sobre Nós
            </a>
            <a href="#atendimento" className="hover:text-secondary transition-colors">
              Atendimento
            </a>
          </div>
          
          <div className="flex items-center">
            <img src="/logo.svg" alt="eSaude" className="h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;