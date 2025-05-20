import React from "react";
import { Facebook, Instagram, MessageCircle, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgba(5, 77, 110, 0.85)",
        margin: "25px 50px 0 50px",
        top: 0,
        left: 0,
        right: 0,
        borderRadius: "6px",
        padding: "6px 25px",
      }}
    >
      <div
        className="container mx-auto flex items-center justify-between"
        style={{ padding: "12px 0" }}
      >
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

        <button className="md:hidden text-white" aria-label="Menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
