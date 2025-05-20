import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: `url('https://esaude.nexxt.work/wp-content/uploads/2025/05/fundohome-esaude4.jpg')`,
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #f9f9f9 0%, rgba(255,255,255,0.001) 100%)",
          opacity: 0.95,
        }}
      />
      <div className="container relative mx-auto px-4 md:px-8 py-24 md:py-32 text-left z-20">
        <div className="max-w-2xl">
          <h1
            className="font-semibold mb-6"
            style={{
              fontSize: "35px",
              color: "#054d6e",
              fontFamily: "Poppins",
            }}
          >
            Cuide da sua{" "}
            <span style={{ color: "#054d6e", fontFamily: "Poppins" }}>
              saúde
            </span>{" "}
            com os melhores profissionais, onde você estiver.
          </h1>
          <p
            className="mb-10"
            style={{
              fontSize: "16.2px",
              color: "rgb(30, 152, 185)",
              fontFamily: "Poppins",
            }}
          >
            Oferecemos consultas médicas online rápidas e seguras com
            profissionais qualificados, tudo ao alcance de um clique. Não perca
            tempo, tenha um atendimento de qualidade na palma da sua mão.
          </p>
          <button
            className="rounded-lg transform transition-all duration-300 shadow-btn font-medium"
            style={{
              backgroundColor: "rgb(243, 167, 41)",
              color: "rgb(5, 77, 110)",
              fontSize: "18px",
              fontFamily: "Poppins",
              padding: "23px 50px",
              transform: "translateY(0)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            
          >
            Assine agora por R$29,90
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
