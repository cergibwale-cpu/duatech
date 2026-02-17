import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ 
    name: '', phone: '', address: '', inquiryType: 'Residential' 
  });
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar color change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // यह तेरा लाइव रेंडर लिंक है
      await axios.post('https://duatech.onrender.com/api/leads', formData);
      alert("✅ Inquiry Submitted Successfully!");
      setFormData({ name: '', phone: '', address: '', inquiryType: 'Residential' });
    } catch (err) {
      alert("❌ Submission Failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. STICKY MODERN NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-5 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-extrabold tracking-tighter italic">
            <span className="text-orange-500">DUA</span>TECH SOLAR
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-sm uppercase">
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#services" className="hover:text-orange-500 transition">Our Services</a>
            <a href="#about" className="hover:text-orange-500 transition">Why Us</a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 shadow-md">Get Started</a>
          </div>
        </div>
      </nav>

      {/* 2. MEGA HERO SECTION (High Profile) */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow" 
          alt="Solar Panels"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase tracking-tight">
            Indore's No.1 <span className="text-orange-500">Solar Dealer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light max-w-3xl mx-auto">
            Authorized Vendor for TATA Power, Adani Solar & Waaree. Save up to 90% on electricity bills with government subsidy.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#contact" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-black px-12 py-5 rounded-md text-xl transition-all transform hover:scale-105 shadow-2xl">GET FREE QUOTE</a>
            <a href="#services" className="bg-transparent border-2 border-white px-12 py-5 rounded-md text-xl font-bold hover:bg-white hover:text-black transition-all">EXPLORE SERVICES</a>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BRANDS SECTION (Moving Bar) */}
      <div className="bg-blue-900 py-10 overflow-hidden">
        <div className="flex justify-around items-center gap-10 text-white/50 font-black text-2xl uppercase tracking-widest whitespace-nowrap">
          <span>TATA POWER</span> <span>ADANI SOLAR</span> <span>WAAREE</span> <span>LUMINOUS</span> <span>VIKRAM SOLAR</span>
        </div>
      </div>

      {/* 4. WHY CHOOSE US (Long Content) */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 uppercase">Why Choose Dua Tech?</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-10 bg-white rounded-3xl shadow-xl border-b-8 border-orange-500">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold mb-4">500+ Projects</h3>
              <p className="text-gray-600">Successfully installed residential and commercial solar setups across Indore.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-xl border-b-8 border-blue-900">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4">Govt. Subsidy</h3>
              <p className="text-gray-600">Full assistance in PM-Surya Ghar Yojana paperwork and subsidy claims.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-xl border-b-8 border-orange-500">
              <div className="text-5xl mb-6">🛠️</div>
              <h3 className="text-2xl font-bold mb-4">25Y Warranty</h3>
              <p className="text-gray-600">Long-term reliability with authorized brand service and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DETAILED SERVICES (Grid Layout) */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-blue-900 mb-8 leading-tight">Professional Solar <br/> Solutions for Every Need</h2>
            <ul className="space-y-6">
              {['Residential Solar Setup', 'Commercial Power Plants', 'Annual Maintenance Service', 'Solar Panel Cleaning'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-xl font-semibold border-b pb-4">
                  <span className="text-orange-500 text-2xl">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
              <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43759?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 1"/>
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 2"/>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER LEAD CAPTURING FORM */}
      <section id="contact" className="py-24 bg-blue-900 relative text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-8 leading-tight">Switch to Clean Energy Today!</h2>
            <p className="text-xl text-blue-200 mb-12 italic">Join hundreds of families in Indore saving on electricity.</p>
            <div className="space-y-6 text-lg font-bold">
              <p>📍 Office: Vijay Nagar, Indore, MP</p>
              <p>📞 Phone: +91 99999 88888</p>
              <p>✉ Email: info@duatechsolar.com</p>
            </div>
          </div>
          
          <div className="bg-white p-12 rounded-[40px] shadow-3xl text-gray-900 border-t-8 border-orange-500">
            <h3 className="text-3xl font-black mb-8 text-blue-900">Request A Free Site Survey</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Full Name" required className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" required className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <input type="text" placeholder="Installation Address" required className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" onChange={(e) => setFormData({...formData, address: e.target.value})} />
              <select className="w-full p-4 bg-gray-100 rounded-xl outline-none border-none font-bold text-gray-500" onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}>
                <option>Residential Inquiry</option>
                <option>Commercial Inquiry</option>
                <option>Industrial Inquiry</option>
              </select>
              <button type="submit" className="w-full bg-orange-600 text-white font-black py-5 rounded-xl text-xl hover:bg-black transition-all shadow-xl uppercase tracking-widest">Submit & Contact on WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        © 2026 DUATECH SOLAR SOLUTIONS | INDORE | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;
