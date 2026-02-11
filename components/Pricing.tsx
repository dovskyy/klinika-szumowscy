import React from 'react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Przejrzystość
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Cennik Usług
          </h2>
          <p className="text-slate-600">
            Poniżej przedstawiamy orientacyjne ceny popularnych zabiegów. 
            Szczegółowy kosztorys przedstawiamy zawsze po konsultacji i diagnostyce.
          </p>
        </div>

        <div className="space-y-8">
          {PRICING.map((category, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-800">{category.category}</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {category.items.map((item, i) => (
                  <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-slate-50/50 transition-colors">
                    <span className="text-slate-600 text-sm md:text-base font-medium">{item.service}</span>
                    <span className="text-slate-900 font-bold text-sm md:text-base whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-8">
          * Podany cennik ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu Art.66 par.1 Kodeksu Cywilnego.
        </p>
      </div>
    </section>
  );
};

export default Pricing;