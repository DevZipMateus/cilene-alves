
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/012961a5-f5dd-4025-bb07-fc0306c2e8cb.png" 
                alt="Logo Cilene Alves Contabilidade"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-heading text-xl font-bold">Cilene Alves</h3>
                <p className="text-primary font-medium">Contabilidade</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              "O meu propósito é fazer sua empresa crescer do jeito certo."
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/soucilene.contadora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors p-3 rounded-lg"
                aria-label="Seguir no Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 flex-shrink-0 text-primary" size={18} />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a 
                    href="tel:+5586981361989" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    (86) 98136-1989
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0 text-primary" size={18} />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a 
                    href="mailto:cilenealves1@hotmail.com" 
                    className="text-gray-300 hover:text-primary transition-colors break-all"
                  >
                    cilenealves1@hotmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-primary" size={18} />
                <div>
                  <p className="font-medium">Endereço</p>
                  <address className="text-gray-300 not-italic">
                    Rua Samaria, nº 01<br />
                    Cerâmica Cil, Teresina - PI
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Contabilidade Completa
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Certificado Digital
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Consultoria Individual
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Consultoria Financeira
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Planejamento Estratégico
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors cursor-pointer">
                  Organize-se MEI
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cilene Alves Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => {
                  const element = document.getElementById('sobre');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('servicos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
