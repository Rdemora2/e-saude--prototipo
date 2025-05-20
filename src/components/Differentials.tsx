import React from 'react';
import { motion } from 'framer-motion';
import { Clock, UserCheck, Shield, Heart } from 'lucide-react';

const DifferentialItem: React.FC<{
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-primary font-bold text-xl mb-2">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 max-w-sm">{description}</p>
    </motion.div>
  );
};

const Differentials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gray-800">Nossos</span>{' '}
            <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-secondary">Por que escolher o nosso atendimento?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DifferentialItem
            icon={<Clock className="w-8 h-8 text-primary" />}
            number="01"
            title="Pronto Atendimento 24h"
            description="Estamos preparados e disponíveis 24h por dia, 7 dias por semana para seu atendimento."
            delay={0.1}
          />
          <DifferentialItem
            icon={<UserCheck className="w-8 h-8 text-primary" />}
            number="02"
            title="Médicos Especializados"
            description="Atendimento com médicos de diversas especialidades altamente qualificados."
            delay={0.2}
          />
          <DifferentialItem
            icon={<Shield className="w-8 h-8 text-primary" />}
            number="03"
            title="Segurança e Confidencialidade"
            description="Tecnologia moderna para proteger seus dados médicos e pessoais."
            delay={0.3}
          />
          <DifferentialItem
            icon={<Heart className="w-8 h-8 text-primary" />}
            number="04"
            title="Atendimento Humanizado"
            description="Cuidados que vão além da consulta, com profissionais comprometidos."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Differentials;