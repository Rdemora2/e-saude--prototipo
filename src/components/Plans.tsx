import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';

interface PlanProps {
  title: string;
  price: string;
  description: string;
  isAnnual: boolean;
  isPrimary?: boolean;
}

const PlanCard: React.FC<PlanProps> = ({ title, price, description, isAnnual, isPrimary }) => {
  const annualPrice = (parseFloat(price) * 0.9).toFixed(2);
  
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isAnnual ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full max-w-sm rounded-lg overflow-hidden ${
        isPrimary ? 'bg-secondary' : 'bg-white border border-gray-200'
      }`}
    >
      <div className="p-8">
        <div className="flex items-center justify-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isPrimary ? 'bg-white/10' : 'bg-primary/10'
          }`}>
            <Users className={isPrimary ? 'text-white' : 'text-primary'} size={32} />
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-4 text-center ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        
        <div className={`text-center mb-6 ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
          <span className="text-sm">R$</span>
          <span className="text-4xl font-bold">{isAnnual ? annualPrice : price}</span>
          <span className="text-sm">/mês</span>
        </div>
        
        <p className={`text-center mb-8 ${isPrimary ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
          {isAnnual && ' (10% de desconto no plano anual)'}
        </p>
        
        <button className={`w-full py-4 rounded-lg transition-all ${
          isPrimary 
            ? 'bg-white text-secondary hover:bg-gray-100' 
            : 'bg-primary text-white hover:bg-primary/90'
        }`}>
          Assinar
        </button>
      </div>
    </motion.div>
  );
};

const Plans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex items-center">
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-white shadow-md text-primary' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual ? 'bg-white shadow-md text-primary' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Anual
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence mode="wait">
            <PlanCard
              key="individual"
              title="Individual"
              price="29.90"
              description="O plano Individual oferece consultas online de saúde como serviço particular."
              isAnnual={isAnnual}
              isPrimary
            />
            <PlanCard
              key="familiar"
              title="Familiar"
              price="54.90"
              description="O plano Familiar também cobre esposa (ou marido) e dependentes. Este plano permite até 4 dependentes, sendo que os filhos precisam ter até 21 anos."
              isAnnual={isAnnual}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Plans;