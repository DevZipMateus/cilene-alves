
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Pulse animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 3000);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleWhatsAppClick = () => {
    const message = `Olá Cilene! Vi seu site e gostaria de saber mais sobre seus serviços contábeis.`;
    const whatsappUrl = `https://wa.me/5586981361989?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-50`}>
      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`
          ${isMobile ? 'p-4' : 'p-5'} 
          bg-green-500 hover:bg-green-600 
          text-white rounded-full 
          shadow-2xl hover:shadow-3xl 
          transition-all duration-300 
          transform hover:scale-110 active:scale-95
          ${isPulsing ? 'animate-pulse' : ''}
          group
        `}
        style={{
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.4)'
        }}
        aria-label="Conversar no WhatsApp com Cilene Alves"
      >
        <MessageCircle size={isMobile ? 24 : 28} />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Conversar no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>
      
      {/* Floating message bubble */}
      {isPulsing && (
        <div className="absolute bottom-full right-0 mb-4 animate-fadeInUp">
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-white" size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Cilene Alves
                </p>
                <p className="text-xs text-gray-600">
                  Olá! Como posso ajudar com suas necessidades contábeis?
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;
