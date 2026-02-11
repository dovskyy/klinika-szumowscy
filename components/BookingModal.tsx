import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

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

  const goToStep = (targetStep: number) => {
    // Only allow going back or to next step if conditions met
    if (targetStep < step) {
      setStep(targetStep);
    } else if (targetStep === 2 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '14:00', available: false },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
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
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
          >
            <X size={24} className="text-slate-400" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Sidebar info */}
            <div className="bg-medical-600 p-8 md:w-1/3 text-white">
              <div className="mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <CalendarIcon size={24} />
                </div>
                <h2 className="text-2xl font-bold leading-tight">Zarezerwuj wizytę</h2>
                <p className="text-medical-100 text-sm mt-2">To zajmie tylko chwilę.</p>
              </div>

              <div className="space-y-6">
                <button 
                  onClick={() => goToStep(1)}
                  className={`flex items-center gap-3 transition-all text-left w-full group ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step === 1 ? 'bg-white text-medical-600' : 'bg-white/20'}`}>1</div>
                  <span className={`text-sm font-medium ${step === 1 ? 'translate-x-1' : ''} transition-transform`}>Termin</span>
                </button>
                <button 
                  onClick={() => goToStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className={`flex items-center gap-3 transition-all text-left w-full group ${step >= 2 ? 'opacity-100' : 'opacity-40'} disabled:cursor-not-allowed`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step === 2 ? 'bg-white text-medical-600' : 'bg-white/20'}`}>2</div>
                  <span className={`text-sm font-medium ${step === 2 ? 'translate-x-1' : ''} transition-transform`}>Dane</span>
                </button>
                <div className={`flex items-center gap-3 transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step === 3 ? 'bg-white text-medical-600' : 'bg-white/20'}`}>3</div>
                  <span className="text-sm font-medium">Potwierdzenie</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8 md:w-2/3 max-h-[80vh] overflow-y-auto">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Wybierz datę i godzinę</h3>
                  
                  <div className="grid grid-cols-7 gap-2 mb-8 text-center">
                    {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'].map(d => (
                      <div key={d} className="text-[10px] font-bold text-slate-400 uppercase">{d}</div>
                    ))}
                    {Array.from({ length: 14 }).map((_, i) => {
                      const day = i + 12;
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(day)}
                          className={`h-10 rounded-xl text-sm font-medium transition-all ${
                            isSelected 
                            ? 'bg-medical-500 text-white shadow-lg shadow-medical-200' 
                            : 'hover:bg-medical-50 text-slate-600'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {timeSlots.map(slot => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                          !slot.available 
                          ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed' 
                          : selectedTime === slot.time
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-medical-300'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-medical-600 hover:bg-medical-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
                  >
                    Dalej <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Twoje dane</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Imię i Nazwisko</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-300' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 transition-all`}
                        placeholder="Jan Kowalski"
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-300' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 transition-all`}
                          placeholder="jan@przyklad.pl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Telefon</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-300' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 transition-all`}
                          placeholder="123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Rodzaj wizyty</label>
                      <select
                        value={formData.visitType}
                        onChange={e => setFormData({...formData, visitType: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 appearance-none transition-all"
                      >
                        <option>Konsultacja ogólna</option>
                        <option>Stomatologia Zachowawcza</option>
                        <option>Endodoncja Mikroskopowa</option>
                        <option>Implantologia</option>
                        <option>Chirurgia</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-200"
                      >
                        Potwierdzam Rezerwację
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full mt-2 py-2 text-slate-400 text-xs font-medium hover:text-slate-600 transition-colors"
                      >
                        Wróć do wyboru terminu
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Wniosek wysłany!</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    Dziękujemy za wybranie Kliniki Szumowscy. Twoja rezerwacja na <span className="font-bold text-slate-900">{selectedDate} lutego</span> o godzinie <span className="font-bold text-slate-900">{selectedTime}</span> została przekazana do systemu.
                  </p>
                  <div className="bg-medical-50 p-6 rounded-2xl border border-medical-100 text-left mb-8">
                    <p className="text-medical-800 text-sm flex gap-3 italic">
                      <AlertCircle size={20} className="shrink-0" />
                      Ważna informacja: Twoja wizyta oczekuje na ostateczne potwierdzenie przez nasz personel. Skontaktujemy się z Tobą telefonicznie lub mailowo w ciągu 2 godzin.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all"
                  >
                    Zamknij okno
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;