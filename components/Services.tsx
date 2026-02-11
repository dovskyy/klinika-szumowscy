import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceModal from './ServiceModal';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={28} strokeWidth={1.5} /> : null;
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-medical-500/10 border border-slate-100 hover:border-medical-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
                  {renderIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="flex items-center text-medical-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                Więcej informacji
                <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

export default Services;