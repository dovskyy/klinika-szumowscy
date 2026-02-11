import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-900 bg-white selection:bg-medical-100 selection:text-medical-900 font-sans">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Pricing />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;