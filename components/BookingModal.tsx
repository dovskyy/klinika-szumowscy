import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceName }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const initialState = {
    name: '',
    email: '',
    phone: '',
    visitType: serviceName || 'Konsultacja ogólna'
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleClose = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData(initialState);
    setErrors({});
    onClose();
  };

  const timeSlots = [
    { time: '08:30', available: true },
    { time: '09:15', available: true },
    { time: '10:00', available: false },
    { time: '11:30', available: true },
    { time: '13:00', available: true },
    { time: '14:45', available: false },
    { time: '15:30', available: true },
    { time: '16:15', available: true },
    { time: '17:00', available: true },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Imię i nazwisko jest wymagane';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Podaj poprawny adres email';
    if (!formData.phone || formData.phone.length < 9) newErrors.phone = 'Podaj poprawny numer telefonu';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep(3);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative bg-white w-full h-full sm:h-auto sm:max-w-4xl sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-slate-100 rounded-full transition-all z-20 group"
          >
            <X size={20} className="text-slate-400 group-hover:rotate-90 transition-transform" />
          </button>

          {/* Sidebar / Progress Header */}
          <div className="bg-medical-50/50 p-6 sm:p-8 md:w-[32%] border-b md:border-b-0 md:border-r border-medical-100/50 relative overflow-hidden shrink-0">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4 md:mb-8">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-medical-500/10 text-medical-600 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-medical-500" />
                  Rezerwacja Online
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-6 mt-4">
                {[
                  { s: 1, l: 'Wybór terminu', desc: 'Dzień i godzina' },
                  { s: 2, l: 'Dane pacjenta', desc: 'Kontakt i szczegóły' },
                  { s: 3, l: 'Potwierdzenie', desc: 'Status rezerwacji' }
                ].map((item) => (
                  <div key={item.s} className={`flex gap-3 transition-all duration-300 ${step >= item.s ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-colors ${step === item.s ? 'bg-medical-500 text-white' : 'bg-white border border-medical-200 text-medical-300'}`}>
                      {item.s}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{item.l}</p>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Progress Bar - Thinner & Clean */}
              <div className="md:hidden flex items-center gap-3">
                <div className="flex-1 h-1 bg-medical-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-medical-500"
                    initial={{ width: "33.3%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-medical-600 uppercase">Krok {step}/3</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 scrollbar-hide">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="max-w-md mx-auto"
                  >
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Kiedy chcesz nas odwiedzić?</h3>
                      <p className="text-slate-500 text-xs">Wybierz wolny termin w lutym 2026.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                      <div className="grid grid-cols-7 gap-1">
                        {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'].map(d => (
                          <div key={d} className="text-[9px] font-bold text-slate-400 uppercase text-center py-2">{d}</div>
                        ))}
                        {Array.from({ length: 14 }).map((_, i) => {
                          const day = i + 12;
                          const isSelected = selectedDate === day;
                          return (
                            <button
                              key={i}
                              onClick={() => setSelectedDate(day)}
                              className={`aspect-square rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                                isSelected 
                                ? 'bg-medical-500 text-white shadow-lg shadow-medical-500/30' 
                                : 'hover:bg-medical-100/50 text-slate-600'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Wolne godziny</p>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(slot => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`py-2.5 rounded-xl text-[12px] font-bold transition-all border ${
                              !slot.available 
                              ? 'bg-slate-50 border-slate-50 text-slate-200 cursor-not-allowed' 
                              : selectedTime === slot.time
                              ? 'bg-slate-900 border-slate-900 text-white'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-medical-500 hover:text-medical-600'
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setStep(2)}
                        className="w-full py-4 bg-medical-500 hover:bg-medical-600 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-medical-500/20"
                      >
                        Dalej <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="max-w-md mx-auto"
                  >
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Dane pacjenta</h3>
                      <p className="text-slate-500 text-xs">Uzupełnij informacje kontaktowe.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Imię i Nazwisko</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-medical-200 focus:bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-medical-500/5 transition-all text-sm"
                          placeholder="Jan Kowalski"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-medical-200 focus:bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-medical-500/5 transition-all text-sm"
                            placeholder="marcel@gmail.com"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Telefon</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-medical-200 focus:bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-medical-500/5 transition-all text-sm"
                            placeholder="600 000 000"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 pb-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Usługa</label>
                        <select
                          value={formData.visitType}
                          onChange={e => setFormData({...formData, visitType: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-medical-200 transition-all text-sm"
                        >
                          <option>Konsultacja ogólna</option>
                          <option>Stomatologia Zachowawcza</option>
                          <option>Endodoncja Mikroskopowa</option>
                          <option>Implantologia</option>
                          <option>Chirurgia</option>
                        </select>
                      </div>

                      <div className="pt-4 flex flex-col gap-3">
                        <button
                          type="submit"
                          className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-200"
                        >
                          Zatwierdź rezerwację
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-full py-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-medical-600 transition-colors"
                        >
                          Wróć do kalendarza
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 max-w-sm mx-auto"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-100">
                      <CheckCircle2 size={40} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Dziękujemy!</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      Rezerwacja na <span className="font-bold text-slate-900">{selectedDate} lutego</span> o <span className="font-bold text-slate-900">{selectedTime}</span> została wysłana.
                    </p>
                    
                    <div className="bg-medical-50 p-5 rounded-2xl text-left mb-8 border border-medical-100">
                      <p className="text-medical-800 text-[11px] leading-relaxed italic">
                        Nasz personel skontaktuje się z Tobą telefonicznie w ciągu godziny w celu ostatecznego potwierdzenia wizyty.
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all"
                    >
                      Zamknij
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;