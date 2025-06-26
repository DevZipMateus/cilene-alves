
import React from 'react';
import { CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individualizada com linguagem acessível e descomplicada.'
    },
    {
      icon: TrendingUp,
      title: 'Foco no Crescimento',
      description: 'Estratégias contábeis voltadas para o crescimento sustentável do seu negócio.'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiança',
      description: 'Organização impecável e economia legal de impostos com total transparência.'
    },
    {
      icon: Star,
      title: 'Excelência Comprovada',
      description: 'Mais de 10 anos de experiência atendendo empresas de diversos segmentos.'
    }
  ];

  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
              Sobre Mim
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uma parceira estratégica para o seu negócio
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Sou <strong>Cilene Alves</strong>, contadora formada desde 2014 e, desde então, 
                atuo com dedicação ao atendimento de empresas e empresários em Teresina-PI.
              </p>
              
              <p className="mb-4">
                Ofereço um <strong>serviço contábil de excelência</strong>, com foco na organização, 
                economia legal de impostos e crescimento sustentável dos negócios.
              </p>
              
              <p>
                Trabalho de forma personalizada, com uma <strong>linguagem acessível</strong>, 
                sempre buscando descomplicar a contabilidade e ser uma parceira estratégica 
                para meus clientes.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-8">
              <blockquote className="text-lg font-medium text-gray-900 italic">
                "O meu propósito é fazer sua empresa crescer do jeito certo."
              </blockquote>
              <cite className="text-primary font-semibold mt-2 block">- Cilene Alves</cite>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5586981361989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Conversar Comigo</span>
              </a>
              <a 
                href="https://instagram.com/soucilene.contadora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <span>Seguir no Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <p className="text-gray-600">Empresas Atendidas</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Satisfação</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <p className="text-gray-600">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
