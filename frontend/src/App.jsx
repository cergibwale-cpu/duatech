import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: '', email: '', mobile: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Yahan apna sahi backend URL check kar lena
      await axios.post('https://duatech.onrender.com/api/leads', data);
      alert('Inquiry Sent! Hamari team aapse jald sampark karegi. ☀️');
      setData({ name: '', email: '', mobile: '' });
    } catch (err) {
      alert('Kuch galti hui, kripya dubara koshish karein.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-black text-blue-900 tracking-tighter">
          DUVA<span className="text-orange-500">TECH</span> <span className="hidden sm:inline italic text-slate-400 font-light text-lg">SOLAR</span>
        </h1>
        <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition-all duration-300 shadow-md text-sm">
          GET QUOTE
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072')"}}></div>
        <div className="relative z-20 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            Go Solar, <br/> <span className="text-orange-400">Save Your Money</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 font-medium">
            India's Leading Solar Solutions Provider. Quality Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-500 hover:bg-white hover:text-orange-500 px-10 py-4 rounded-full text-lg font-black transition-all shadow-xl">
              START SAVING NOW
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 uppercase">Our Expertise</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Residential', desc: 'Sarkar ki subsidy ke saath ghar ki bijli zero karein.' },
            { title: 'Commercial', desc: 'Apne business ke operational costs ko solar se kam karein.' },
            { title: 'Industrial', desc: 'Heavy duty MW scale plants for factories and industries.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-slate-100 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 mb-6">{item.desc}</p>
              <span className="text-orange-500 font-bold">Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="bg-blue-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-white">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready to Switch? <br/> <span className="text-orange-400 italic font-serif text-3xl">Get a Free Site Survey</span></h2>
            <ul className="space-y-4 text-slate-300 text-lg">
              <li>✓ 25 Years Panel Warranty</li>
              <li>✓ Easy EMI Options Available</li>
              <li>✓ Fast Installation within 15 Days</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl text-slate-900 border-t-[10px] border-orange-500">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-900 tracking-tight underline decoration-orange-300 underline-offset-8">Fill Your Details</h3>
            <form onSubmit={submit} className="space-y-4">
              <input className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 border-none font-medium" placeholder="Your Full Name" required value={data.name} onChange={e => setData({...data, name: e.target.value})} />
              <input className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 border-none font-medium" placeholder="Email Address" type="email" required value={data.email} onChange={e => setData({...data, email: e.target.value})} />
              <input className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 border-none font-medium" placeholder="Mobile Number" required value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})} />
              <button className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition shadow-lg uppercase tracking-widest active:scale-95">
                Send My Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating (Chota Icon) */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-[100] border-4 border-white active:scale-90">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-7 h-7 invert" alt="WhatsApp" />
      </a>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <p className="font-black text-blue-900 mb-2">DUVA TECH SOLAR PVT LTD</p>
        <p className="text-slate-400 text-sm">© 2026 Indore, MP, India. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
