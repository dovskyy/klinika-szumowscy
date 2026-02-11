import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="antialiased text-slate-900 bg-white selection:bg-medical-100 selection:text-medical-900 font-sans">
      <Navigation onBookingOpen={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBookingOpen={() => setIsBookingOpen(true)} />
        <Services onBookingOpen={() => setIsBookingOpen(true)} />
        <About />
        <Team />
        <Pricing />
        <Testimonials />
      </main>
      
      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Global Booking Trigger - attached to window for easy access from other components if needed, 
          though standard prop passing is preferred. For this prototype, we can use a custom event or simpler prop drilling. */}
    </div>
  );
};

export default App;