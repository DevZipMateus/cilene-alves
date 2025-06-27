
import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fadeInUp">
              <Award size={16} />
              <span>Contadora desde 2014</span>
            </div>
            
            <h1 className={`font-heading font-bold text-foreground leading-tight mb-6 animate-fadeInUp animate-delay-200 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
              Faça sua empresa
              <span className="text-primary block">crescer do jeito certo</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fadeInUp animate-delay-400">
              Sou Cilene Alves, contadora especializada em oferecer serviços contábeis de excelência 
              com foco na organização, economia legal de impostos e crescimento sustentável dos negócios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fadeInUp animate-delay-600">
              <a href="https://wa.me/5586981361989" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2" aria-label="Entrar em contato via WhatsApp">
                <span>Solicitar Atendimento</span>
                <ArrowRight size={18} />
              </a>
              <button onClick={scrollToContact} className="btn-secondary">
                Conhecer Serviços
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-fadeInUp animate-delay-800">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Clock className="text-primary" size={20} />
                  <span className="text-2xl font-bold text-foreground">10+</span>
                </div>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="text-primary" size={20} />
                  <span className="text-2xl font-bold text-foreground">200+</span>
                </div>
                <p className="text-sm text-muted-foreground">Empresas atendidas</p>
              </div>
              
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Award className="text-primary" size={20} />
                  <span className="text-2xl font-bold text-foreground">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Satisfação dos clientes</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative animate-fadeInRight animate-delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-card p-8 rounded-2xl shadow-2xl border border-border">
                <img alt="Cilene Alves - Contadora especializada em Teresina" className="w-full h-auto max-w-md mx-auto" loading="eager" src="/lovable-uploads/2dc8928d-7116-400a-872e-656842506376.png" />
                <div className="text-center mt-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Cilene Alves
                  </h3>
                  <p className="text-primary font-medium">
                    Contadora CRC-PI
                  </p>
                  <div className="flex justify-center mt-4">
                    <a href="https://instagram.com/soucilene.contadora" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Seguir no Instagram">
                      @soucilene.contadora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto" role="img" aria-hidden="true">
          <path fill="hsl(var(--background))" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
