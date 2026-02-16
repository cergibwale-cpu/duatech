import React from 'react';
import { Sun, Zap, Shield, Award, MessageCircle, Hammer, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-black text-orange-600">DUVATECH SOLAR</h1>
        <div className="flex gap-4 font-bold text-sm">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 text-center">
        <Sun className="mx-auto mb-4 text-orange-500" size={48} />
        <h2 className="text-4xl font-black">AUTHORIZED SOLAR DEALER</h2>
        <p className="text-gray-400 mt-2">TATA POWER | ADANI SOLAR | WAAREE</p>
        <button className="mt-8 bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full font-bold transition">
          Get Quote
        </button>
      </header>

      {/* Services */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-orange-500">
          <Zap className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg">Solar Panels</h3>
          <p className="text-gray-600 text-sm mt-2">High efficiency monocrystalline panels for maximum power.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-orange-500">
          <Shield className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg">Warranty</h3>
          <p className="text-gray-600 text-sm mt-2">25 years of performance warranty on all solar modules.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-orange-500">
          <Hammer className="text-orange-500 mb-4" />
          <h3 className="font-bold text-lg">Installation</h3>
          <p className="text-gray-600 text-sm mt-2">Professional team for secure and optimized setup.</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/yournumber" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={30} />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-white p-10 mt-10 text-center">
        <p>© 2026 DUVATECH SOLAR | INDORE, MP</p>
      </footer>
    </div>
  );
}

export default App;
