
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossa Localização
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Venha nos conhecer
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos localizados em Teresina-PI, prontos para atender você presencialmente 
            ou através dos nossos canais digitais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Samaria, nº 01<br />
                      Cerâmica Cil, Teresina - PI
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a 
                      href="tel:+5586981361989" 
                      className="text-primary hover:text-accent transition-colors"
                    >
                      (86) 98136-1989
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <a 
                      href="mailto:cilenealves1@hotmail.com" 
                      className="text-primary hover:text-accent transition-colors"
                    >
                      cilenealves1@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                    <Clock className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/5586981361989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <span>Agendar Visita via WhatsApp</span>
              </a>
              <a 
                href="mailto:cilenealves1@hotmail.com"
                className="btn-secondary w-full inline-flex items-center justify-center gap-2"
              >
                <span>Enviar E-mail</span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-muted rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8906!2d-42.8024!3d-5.0899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDUnMjQuMCJTIDQywrA0OCcwOC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1635443298765!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Cilene Alves Contabilidade - Rua Samaria, Cerâmica Cil, Teresina-PI"
              ></iframe>
            </div>
            
            <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">Facilidade de acesso:</strong> Localização central em Teresina, 
                próximo aos principais pontos comerciais da cidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
