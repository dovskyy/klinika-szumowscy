import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-medical-50 border-y border-medical-100">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <span className="text-medical-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Opinie Pacjentów
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Co mówią o nas pacjenci?
            </h2>
          </div>

          <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-500 uppercase">Google Rating</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-slate-900">4.9</span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 text-medical-100" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.imageUrl} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.date}</p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-medical-600 font-semibold text-sm hover:underline">
            Zobacz wszystkie opinie na Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;