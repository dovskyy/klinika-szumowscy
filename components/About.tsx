import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-3xl shadow-2xl relative z-10" 
                  alt="Modern Dental Clinic Interior" 
                />
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-medical-100 rounded-3xl z-0" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-medical-50 rounded-full blur-3xl opacity-60" />
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Nowoczesna stomatologia, <br/>
              <span className="text-medical-600">tradycyjne wartości.</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                W Klinice Szumowscy wierzymy, że wizyta u dentysty może być pozytywnym doświadczeniem. 
                Stworzyliśmy miejsce, gdzie sterylność medyczna łączy się z ciepłą, domową atmosferą.
              </p>
              <p>
                Nasz gabinet to nie tylko miejsce leczenia, ale centrum zdrowia jamy ustnej. 
                Inwestujemy w technologie, które skracają czas zabiegów i maksymalizują ich skuteczność.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Własna pracownia RTG i CBCT",
                "Mikroskopy zabiegowe Zeiss",
                "Skanery wewnątrzustne 3D",
                "System znieczuleń komputerowych"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-medical-500 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;