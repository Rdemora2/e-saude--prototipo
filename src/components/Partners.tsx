import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const partnerLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sirio-Libanes_logo.svg/1200px-Sirio-Libanes_logo.svg.png';
  const partners = Array(8).fill(partnerLogoUrl);

  return (
    <section className="bg-darkBlue py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Nossos Parceiros</h2>
            <p className="mb-8 text-gray-300">
              Contamos com uma rede de parceiros renomados para oferecer o melhor em cuidados médicos, segurança e conforto para nossos usuários.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-btn text-lg font-medium">
                Assine agora e comece a cuidar da sua saúde hoje
              </button>
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-btn text-lg font-medium">
                Assine agora e comece a cuidar da sua saúde hoje mesmo!
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
              >
                <img 
                  src={logo}
                  alt="Hospital Sírio-Libanês"
                  className="max-h-12 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;