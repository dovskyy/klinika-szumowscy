import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onBookingOpen: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onBookingOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    onBookingOpen();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-medical-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight leading-none ${isScrolled ? 'text-slate-800' : 'text-slate-900'} uppercase text-lg`}>
                Szumowscy
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">Stomatologia</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="tel:+48618000000"
              className="flex items-center gap-2 text-slate-800 font-semibold mr-4 hover:text-medical-600 transition-colors"
            >
              <Phone size={18} className="text-medical-500" />
              <span>61 800 00 00</span>
            </a>

            <button 
              onClick={onBookingOpen}
              className="px-6 py-2.5 bg-medical-500 hover:bg-medical-600 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-medical-500/20 transform hover:-translate-y-0.5"
            >
              Umów Wizytę
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white flex flex-col pt-32 px-8 space-y-6 md:hidden shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-slate-800 border-b border-slate-100 pb-4"
              >
                {item.label}
              </a>
            ))}
             <button 
              onClick={handleBookingClick}
              className="mt-8 w-full py-4 bg-medical-500 text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-medical-500/30"
            >
              Zarezerwuj Termin
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;