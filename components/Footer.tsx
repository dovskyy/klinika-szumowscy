import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-medical-500 rounded flex items-center justify-center font-bold text-lg">S</div>
               <span className="font-bold text-xl tracking-tight">SZUMOWSCY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Twoja klinika stomatologiczna w sercu Poznania. 
              Łączymy precyzyjną medycynę z najwyższą estetyką wykonania.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-medical-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-medical-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-medical-500 shrink-0" size={18} />
                <span>ul. Święty Marcin 12/4<br/>61-803 Poznań</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-medical-500 shrink-0" size={18} />
                <a href="tel:+48618000000" className="hover:text-white transition-colors">+48 61 800 00 00</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-medical-500 shrink-0" size={18} />
                <a href="mailto:rejestracja@szumowscy.pl" className="hover:text-white transition-colors">rejestracja@szumowscy.pl</a>
              </li>
            </ul>
          </div>

          {/* Godziny */}
          <div>
            <h4 className="font-bold text-lg mb-6">Godziny Przyjęć</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14}/> Pn - Pt</span>
                <span className="text-white font-medium">09:00 - 20:00</span>
              </li>
               <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14}/> Sobota</span>
                <span className="text-white font-medium">09:00 - 14:00</span>
              </li>
               <li className="flex justify-between items-center pt-1 opacity-50">
                <span className="flex items-center gap-2"><Clock size={14}/> Niedziela</span>
                <span>Zamknięte</span>
              </li>
            </ul>
          </div>

           {/* CTA */}
           <div>
             <h4 className="font-bold text-lg mb-6">Umów wizytę</h4>
             <p className="text-sm text-slate-400 mb-4">
               Skorzystaj z wygodnej rejestracji online. Oddzwonimy w ciągu godziny.
             </p>
             <button className="w-full bg-medical-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-medical-600 transition-colors shadow-lg shadow-medical-900/50">
               Zarezerwuj Termin
             </button>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Klinika Szumowscy Poznań.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;