import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceModal from './ServiceModal';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onBookingOpen: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookingOpen }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nasze Specjalizacje
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Kompleksowa opieka stomatologiczna
          </h2>
          <p className="text-slate-600 text-lg">
            W jednym miejscu zadbamy o zdrowie i estetykę Twojego uśmiechu. 
            Wykorzystujemy najnowsze technologie, aby leczenie było skuteczne i komfortowe.
          </p>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex md:hidden justify-center items-center gap-3 mb-6">
          <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-medical-500"
              animate={{
                x: [-64, 64],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Przesuń w bok</span>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group relative h-[420px] md:h-[450px] min-w-[85vw] sm:min-w-[400px] md:min-w-0 rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-slate-900/10 snap-center"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 transform transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-slate-900/60 shadow-2xl">
                  <div className="mb-4 w-12 h-1 bg-medical-500 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                  
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:text-medical-300 transition-colors duration-300">
                    Dowiedz się więcej
                    <div className="ml-3 p-1 bg-white/10 rounded-full group-hover:bg-medical-500/20 transition-colors duration-300">
                      <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Border on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[1px] border-white/20 rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onBookingOpen={onBookingOpen}
        />
      )}
    </section>
  );
};

export default Services;