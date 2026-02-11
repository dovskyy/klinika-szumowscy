import React from 'react';
import { DOCTORS } from '../constants';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nasz Zespół
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Poznaj swoich lekarzy
          </h2>
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
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              viewport={{ once: true }}
              className="group min-w-[75vw] sm:min-w-[320px] md:min-w-0 snap-center"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[3/4]">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-sm text-medical-300 mb-2">Specjalizacje:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map(s => (
                        <span key={s} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
              <p className="text-medical-600 font-medium text-sm mb-4">{doctor.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 border-t border-slate-100 pt-4">
                {doctor.bio}
              </p>
              
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                 <Award size={14} />
                 <span>Certyfikowany Specjalista</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;