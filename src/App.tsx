// FILE: src/App.tsx

import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeatureShowcase from './components/FeatureShowcase';
import UseCases from './components/UseCases';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-black/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-black/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Header />
      <main>
        <Hero />
        {/* <HowItWorks /> */}
        <FeatureShowcase />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;