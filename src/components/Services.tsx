
import React from 'react';
import { Calculator, FileCheck, Users, TrendingUp, Award, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Contabilidade Completa',
    description: 'Escrituração contábil, balancetes, demonstrações financeiras e cumprimento de todas as obrigações contábeis.',
    icon: Calculator,
    features: ['Escrituração contábil', 'Balancetes mensais', 'Demonstrações financeiras', 'Análise patrimonial']
  },
  {
    id: 2,
    title: 'Certificado Digital',
    description: 'Emissão e renovação de certificados digitais A1 e A3 para pessoa física e jurídica.',
    icon: Shield,
    features: ['Certificado A1 e A3', 'Pessoa física e jurídica', 'Instalação e suporte', 'Renovação automática']
  },
  {
    id: 3,
    title: 'Consultoria Individual',
    description: 'Atendimento personalizado para esclarecer dúvidas e orientar decisões empresariais estratégicas.',
    icon: Users,
    features: ['Atendimento personalizado', 'Orientação estratégica', 'Análise de cenários', 'Suporte contínuo']
  },
  {
    id: 4,
    title: 'Consultoria Financeira',
    description: 'Análise financeira, fluxo de caixa, controle de custos e estratégias para otimização de recursos.',
    icon: TrendingUp,
    features: ['Análise financeira', 'Fluxo de caixa', 'Controle de custos', 'Otimização de recursos']
  },
  {
    id: 5,
    title: 'Planejamento Estratégico',
    description: 'Desenvolvimento de estratégias contábeis e fiscais para crescimento sustentável do negócio.',
    icon: Award,
    features: ['Estratégias fiscais', 'Planejamento tributário', 'Crescimento sustentável', 'Metas e indicadores']
  },
  {
    id: 6,
    title: 'Organize-se MEI',
    description: 'Organização completa para microempreendedores individuais, desde abertura até gestão contínua.',
    icon: FileCheck,
    features: ['Abertura de MEI', 'Organização fiscal', 'Declarações obrigatórias', 'Gestão simplificada']
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Soluções completas para sua empresa
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos serviços especializados com atendimento personalizado, 
            linguagem acessível e foco no crescimento sustentável do seu negócio.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de um serviço específico?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato comigo e vamos conversar sobre as necessidades específicas 
            da sua empresa. Atendimento personalizado é nosso diferencial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5586981361989" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <span>Conversar no WhatsApp</span>
            </a>
            <a 
              href="mailto:cilenealves1@hotmail.com"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <span>Enviar E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
