import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-medical-50 to-white">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-100/30 skew-x-12 transform translate-x-20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Left */}
          <div className="w-full md:w-1/2 space-y-8">
            
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">G</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800 text-sm">4.9</span>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span className="text-slate-500 text-xs">(124 opinie)</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Twój uśmiech w <br/>
              <span className="text-medical-500">bezpiecznych rękach</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              Łączymy precyzyjną diagnostykę cyfrową z empatią. Oferujemy bezbolesne leczenie w nowoczesnych gabinetach w centrum Poznania.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-medical-500 text-white font-semibold rounded-xl hover:bg-medical-600 transition-colors shadow-lg shadow-medical-500/30">
                Umów wizytę online
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-medical-500 hover:text-medical-600 transition-colors">
                Sprawdź cennik
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 text-sm text-slate-500 pt-4"
            >
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-medical-500" />
                 <span>Bezpłatna konsultacja*</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-medical-500" />
                 <span>Płatność ratalna</span>
               </div>
            </motion.div>
          </div>

          {/* Image Right */}
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-medical-900/10 border-4 border-white"
            >
               <img 
                 src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=1200" 
                 alt="Dentist and Patient" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-[250px]">
                 <div className="bg-blue-100 p-2 rounded-lg text-medical-600">
                    <Star size={24} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Top Rated</p>
                   <p className="text-sm font-semibold text-slate-900">Najlepsza klinika 2024</p>
                 </div>
               </div>
            </motion.div>
            
            {/* Dots Pattern */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.slate.200)_1px,_transparent_0)] bg-[size:10px_10px] -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-medical-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;