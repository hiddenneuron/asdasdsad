// FILE: src/components/FinalCTA.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';

function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-7xl font-black mb-8 animate-fade-in-up">
          Stop Wondering.
          <br />
          <span className="text-white/60">Start Building.</span>
        </h2>
        <p className="text-2xl text-white/70 mb-12 animate-fade-in-up delay-200">
          Your future in tech is one click away. Get your free, personalized roadmap now.
        </p>
        <div className="animate-fade-in-up delay-400">
          <button className="group relative overflow-hidden bg-white text-black px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center space-x-4">
              <span>Create My Roadmap</span>
              <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-3" />
            </div>
            <div className="absolute inset-0 bg-white rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;