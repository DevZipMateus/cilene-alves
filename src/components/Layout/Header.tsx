
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white py-4'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            aria-label="Cilene Alves Contabilidade - Página inicial"
          >
            <img 
              src="/lovable-uploads/012961a5-f5dd-4025-bb07-fc0306c2e8cb.png" 
              alt="Logo Cilene Alves Contabilidade"
              className="h-10 w-auto"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-gray-900">
                Cilene Alves
              </span>
              <span className="text-sm text-primary font-medium">
                Contabilidade
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Menu principal">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="nav-link">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="nav-link">
              Serviços
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="nav-link">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="nav-link">
              Contato
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 ease-in-out bg-white border-t`}
      >
        <nav className="container-custom py-4 flex flex-col space-y-2" role="navigation" aria-label="Menu mobile">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')} 
            className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('localizacao')} 
            className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          >
            Localização
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
