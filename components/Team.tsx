import React from 'react';
import { DOCTORS } from '../constants';
import { Award } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="group">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;