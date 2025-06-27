
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, User, Building } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppContact = () => {
    const message = `Olá Cilene! Gostaria de saber mais sobre seus serviços contábeis.

*Nome:* ${formData.name || 'Não informado'}
*Empresa:* ${formData.company || 'Não informado'}
*Telefone:* ${formData.phone || 'Não informado'}
*E-mail:* ${formData.email || 'Não informado'}

*Mensagem:*
${formData.message || 'Gostaria de mais informações sobre os serviços.'}`;

    const whatsappUrl = `https://wa.me/5586981361989?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = `Contato do site - ${formData.name || 'Interessado'}`;
    const body = `Nome: ${formData.name}
Empresa: ${formData.company}
Telefone: ${formData.phone}
E-mail: ${formData.email}

Mensagem:
${formData.message}`;

    const mailtoUrl = `mailto:cilenealves1@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contato" className="section bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Entre em Contato
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Vamos conversar sobre seu negócio
          </h2>
          <p className="text-lg text-gray-300">
            Preencha o formulário abaixo e escolha como prefere ser contatado. 
            Atendimento personalizado é nosso diferencial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="font-heading text-2xl font-semibold text-white mb-6">
              Solicite seu atendimento
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                      placeholder="(86) 9 9999-9999"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-white placeholder-gray-400"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical text-white placeholder-gray-400"
                  placeholder="Conte-me sobre suas necessidades contábeis..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <img 
                    src="/lovable-uploads/4254d38c-ab81-4efd-b39e-6cd733c44c1a.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain"
                  />
                  <span>Enviar via WhatsApp</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleEmailContact}
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Enviar por E-mail</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Column - Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-500 p-4 rounded-xl">
                  <img 
                    src="/lovable-uploads/4254d38c-ab81-4efd-b39e-6cd733c44c1a.png" 
                    alt="WhatsApp" 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    WhatsApp
                  </h3>
                  <p className="text-gray-300">Resposta rápida e prática</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Conversa direta comigo no WhatsApp. Ideal para dúvidas rápidas 
                e agendamento de consultorias.
              </p>
              <a 
                href="https://wa.me/5586981361989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <img 
                  src="/lovable-uploads/4254d38c-ab81-4efd-b39e-6cd733c44c1a.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain"
                />
                <span>Abrir WhatsApp</span>
              </a>
            </div>
            
            {/* Phone Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary p-4 rounded-xl">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    Telefone
                  </h3>
                  <p className="text-gray-300">Atendimento direto</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Ligue diretamente para esclarecer dúvidas ou agendar uma reunião.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                (86) 98136-1989
              </p>
              <a 
                href="tel:+5586981361989"
                className="btn-secondary w-full inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Ligar Agora</span>
              </a>
            </div>
            
            {/* Email Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent p-4 rounded-xl">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    E-mail
                  </h3>
                  <p className="text-gray-300">Documentação detalhada</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Ideal para envio de documentos e consultas mais detalhadas.
              </p>
              <p className="text-lg font-medium text-accent mb-6 break-all">
                cilenealves1@hotmail.com
              </p>
              <a 
                href="mailto:cilenealves1@hotmail.com"
                className="btn-secondary w-full inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                <span>Enviar E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
