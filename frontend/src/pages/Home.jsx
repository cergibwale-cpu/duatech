import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';

// DHAYAN DEIN: Agar Testimonials 'pages' folder mein hi hai jahan Home hai, 
// toh path './Testimonials' hoga, na ki '../components/Testimonials'
import Testimonials from './Testimonials'; 

const Home = () => {
  return (
    <div className="bg-[#0A1F44]">
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center text-white">
          INDUSTRIAL <span className="text-[#00FF88]">SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 bg-[#16294a] rounded-xl">
            <div className="w-full h-48 bg-gray-800 mb-4 rounded-xl flex items-center justify-center text-gray-500">
               INDUSTRIAL IMAGE 1
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">Residential Solar</h3>
            <p className="text-gray-400 text-sm">High-efficiency panels for modern homes.</p>
          </div>

          <div className="glass-card p-6 bg-[#16294a] rounded-xl">
            <div className="w-full h-48 bg-gray-800 mb-4 rounded-xl flex items-center justify-center text-gray-500">
               INDUSTRIAL IMAGE 2
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">Commercial Solar</h3>
            <p className="text-gray-400 text-sm">Scalable energy solutions for businesses.</p>
          </div>

          <div className="glass-card p-6 bg-[#16294a] rounded-xl">
            <div className="w-full h-48 bg-gray-800 mb-4 rounded-xl flex items-center justify-center text-gray-500">
               INDUSTRIAL IMAGE 3
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">MW Scale Plants</h3>
            <p className="text-gray-400 text-sm">Utility-scale solar farms for factories.</p>
          </div>
        </div>
      </section>

      {/* Testimonials yahan dikhega */}
      <Testimonials />

      <LeadForm />
    </div>
  );
};

export default Home;
