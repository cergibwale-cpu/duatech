import React from 'react';
import { Sun, Zap, Shield, Cable, Factory, CheckCircle, Menu, Phone } from 'lucide-react';

const App = () => {
  const solarBrands = ["Adani Solar", "Tata Power Solar", "Waaree", "Vikram Solar"];
  const inverterBrands = ["Havells", "Polycab", "Luminous", "Microtek", "Sukam"];
  const wireBrands = ["Polycab", "Havells", "Finolex", "RR Kabel"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Sun className="text-orange-500" size={32} />
            <span className="text-2xl font-black tracking-tighter text-gray-800">DUVATECH <span className="text-orange-600">SOLAR</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-gray-600">
            <a href="#products" className="hover:text-orange-600">Products</a>
            <a href="#panels" className="hover:text-orange-600">Solar Panels</a>
            <a href="#inverters" className="hover:text-orange-600">Inverters</a>
            <a href="#wires" className="hover:text-orange-600">Wires & Structure</a>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-700 transition">
            <Phone size={18} /> Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gray-900 h-[500px] flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Authorized Solar Dealer</h1>
          <p className="text-xl md:text-2xl font-light text-gray-300">Premium Brands. Expert Installation. Lifetime Support.</p>
        </div>
      </header>

      {/* 1. Solar Panels Section (Tata, Adani, Waaree) */}
      <section id="panels" className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 w-20 bg-orange-600"></div>
          <h2 className="text-4xl font-black uppercase">High-Efficiency Solar Panels</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solarBrands.map((brand, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-orange-500 transition-all group">
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                <Sun size={60} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">Top Seller</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{brand}</h3>
                <p className="text-gray-600 mb-4">Mono-Perc, Bi-facial high efficiency modules for maximum power generation.</p>
                <ul className="text-sm space-y-2 text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> 25 Years Warranty</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Weather Resistant</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Inverters Section (Havells, Polycab) */}
      <section id="inverters" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10 justify-end">
            <h2 className="text-4xl font-black uppercase text-right">Smart Solar Inverters</h2>
            <div className="h-1 w-20 bg-orange-600"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {inverterBrands.map((brand, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center group hover:bg-orange-600 transition-colors">
                <Zap size={40} className="mx-auto mb-4 text-orange-600 group-hover:text-white" />
                <h4 className="text-xl font-bold group-hover:text-white">{brand}</h4>
                <p className="text-gray-500 text-sm mt-2 group-hover:text-orange-100">Hybrid & On-Grid</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Wires & Structure Section */}
      <section id="wires" className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Wires */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-orange-600">
            <Cable className="text-orange-600 mb-6" size={50} />
            <h3 className="text-3xl font-bold mb-6">Premium Wiring Solutions</h3>
            <div className="flex flex-wrap gap-4">
              {wireBrands.map((b, i) => (
                <span key={i} className="bg-gray-100 px-4 py-2 rounded-md font-bold text-gray-700">#{b}</span>
              ))}
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We exclusively use <strong>Havells</strong> and <strong>Polycab</strong> DC/AC cables to ensure zero power loss and maximum safety against short-circuits.
            </p>
          </div>
          {/* Structure */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-gray-800">
            <Factory className="text-gray-800 mb-6" size={50} />
            <h3 className="text-3xl font-bold mb-6">Heavy-Duty Mounting</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our structures are made of <strong>Hot-Dip Galvanized (GI)</strong> material, designed to withstand wind speeds up to 150km/hr.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold uppercase text-gray-500">
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-600"/> Rust Proof</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} className="text-orange-600"/> Long Life</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-orange-500">DUVATECH SOLAR</h4>
            <p className="text-gray-400 italic">"Empowering India with Branded Solar Solutions."</p>
          </div>
          <div>
            <h5 className="font-bold mb-4 uppercase">Our Partners</h5>
            <p className="text-gray-400 text-sm">Adani | Tata | Waaree | Havells | Polycab | Finolex | Vikram Solar</p>
          </div>
          <div>
            <h5 className="font-bold mb-4 uppercase">Contact Info</h5>
            <p className="text-gray-400 text-sm">Main Market, Your City, India</p>
            <p className="text-gray-400 text-sm">Email: info@duvatechsolar.com</p>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-600 text-sm">© 2026 Duvatech Solar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
