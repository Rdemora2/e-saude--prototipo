import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ y }}
      />
      <div className="container relative mx-auto px-4 py-24 md:py-32 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Cuide da sua <span className="text-secondary">saúde</span> com os<br />
          melhores profissionais, onde<br />
          você estiver.
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-10 text-gray-200">
          Oferecemos consultas médicas online rápidas e seguras com
          profissionais qualificados, tudo ao alcance de um clique. Não
          perca tempo, tenha um atendimento de qualidade na palma da
          sua mão.
        </p>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-btn text-lg font-medium">
          Assine agora e comece a cuidar da sua saúde hoje mesmo!
        </button>
      </div>
    </section>
  );
};

export default Hero;