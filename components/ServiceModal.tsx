import React from 'react';
import { Service } from '../types';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBookingOpen: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookingOpen }) => {
  if (!service) return null;

  const handleBooking = () => {
    onClose();
    onBookingOpen();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="w-full md:w-2/5 h-48 md:h-auto relative">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-medical-900/10 mix-blend-multiply" />
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-10 overflow-y-auto bg-white">
            <div className="mb-2 inline-block px-3 py-1 bg-medical-50 text-medical-700 text-xs font-bold uppercase tracking-wider rounded-full">
              Usługa
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {service.title}
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {service.fullDescription}
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
              <h5 className="font-semibold text-slate-900 mb-4">Co zyskujesz?</h5>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-600 text-sm">
                  <div className="mt-0.5 mr-3 p-0.5 bg-green-100 rounded-full text-green-600">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  Indywidualne podejście i szczegółowy plan leczenia
                </li>
                <li className="flex items-start text-slate-600 text-sm">
                  <div className="mt-0.5 mr-3 p-0.5 bg-green-100 rounded-full text-green-600">
                     <Check size={12} strokeWidth={3} />
                  </div>
                  Bezbolesny przebieg zabiegu (znieczulenie komputerowe)
                </li>
                 <li className="flex items-start text-slate-600 text-sm">
                  <div className="mt-0.5 mr-3 p-0.5 bg-green-100 rounded-full text-green-600">
                     <Check size={12} strokeWidth={3} />
                  </div>
                  Opieka gwarancyjna i pozabiegowa
                </li>
              </ul>
            </div>

            <button 
              onClick={handleBooking}
              className="w-full py-3.5 bg-slate-900 hover:bg-medical-600 text-white font-medium rounded-lg transition-colors text-center shadow-lg shadow-slate-900/10"
            >
              Umów Konsultację
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;