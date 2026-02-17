import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', type: 'Residential', bill: '' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', formData);
      alert("🚀 Success! Your solar journey starts now.");
      setFormData({ name: '', phone: '', address: '', type: 'Residential', bill: '' });
    } catch (err) { alert("❌ System Busy. Try again."); }
  };

  return (
    <div className="antialiased text-slate-900 bg-white selection:bg-orange-100">
      
      {/* 1. PREMIUM NAVIGATION */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-white shadow-lg">D</div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">Dua<span className="text-orange-500">Tech</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-black uppercase tracking-[2px]">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Solutions</a>
            <a href="#process" className="hover:text-orange-500 transition-colors">Process</a>
            <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-sm hover:bg-black transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)]">Get A Quote</a>
          </div>
        </div>
      </nav>

      {/* 2. TOP-NOTCH HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Solar Farm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-orange-500 font-black tracking-[4px] uppercase text-sm mb-4">Indore's Premier Solar Company</h2>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              FREE YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">ENERGY.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-lg mb-10 leading-relaxed font-light">
              Authorized Partner for TATA Solar. We design high-efficiency power systems that eliminate electricity bills for 25+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-10 py-5 bg-orange-500 text-white font-black rounded-sm hover:bg-white hover:text-orange-600 transition-all text-center">GET STARTED</a>
              <a href="#services" className="px-10 py-5 border border-white/30 text-white font-black rounded-sm hover:bg-white/10 transition-all text-center uppercase text-sm flex items-center justify-center gap-2">View Projects ➔</a>
            </div>
          </div>
          
          {/* Quick Stats on Hero */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {n: '500+', t: 'Installs'}, {n: '12MW', t: 'Power'},
              {n: '90%', t: 'Savings'}, {n: '25Y', t: 'Warranty'}
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <div className="text-4xl font-black text-orange-500 mb-1">{s.n}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND STRIP */}
      <div className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-10 grayscale opacity-50">
          <span className="text-2xl font-black">TATA POWER</span>
          <span className="text-2xl font-black">ADANI SOLAR</span>
          <span className="text-2xl font-black">WAAREE</span>
          <span className="text-2xl font-black">VIKRAM SOLAR</span>
        </div>
      </div>

      {/* 4. PROFESSIONAL SERVICES */}
      <section id="services" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">SOLUTIONS FOR EVERY SPACE</h2>
              <p className="text-slate-500 text-lg leading-relaxed">From residential rooftops to massive industrial plants, we deliver engineering excellence in every solar panel we install.</p>
            </div>
            <a href="#contact" className="text-orange-600 font-black border-b-2 border-orange-600 pb-1">All Solutions</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {t: 'Residential', d: 'Custom home systems designed to save maximum space and energy.', i: '01'},
              {t: 'Commercial', d: 'Scalable solutions for offices, schools, and hospitals to cut ROI.', i: '02'},
              {t: 'Industrial', d: 'Heavy-duty MW installations for factories and warehouses.', i: '03'}
            ].map((s, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col justify-between min-h-[400px]">
                <div className="text-6xl font-black text-slate-100 group-hover:text-orange-100 transition-colors">{s.i}</div>
                <div>
                  <h3 className="text-2xl font-black mb-4 uppercase">{s.t}</h3>
                  <p className="text-slate-500 mb-8">{s.d}</p>
                  <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">➔</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PROCESS (Why We are Top Notch) */}
      <section id="process" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43759?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-3xl order-2 lg:order-1" alt="Process" />
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Our 4-Step Process</h2>
            <div className="space-y-12">
              {[
                {t: 'Site Survey', d: 'Expert engineers visit to analyze shadow-free area and load.'},
                {t: 'Design & Approval', d: 'Custom 3D design and government subsidy paperwork.'},
                {t: 'Flash Installation', d: 'Certified installation within 48 hours of delivery.'},
                {t: 'Lifetime Support', d: 'Annual maintenance and real-time generation monitoring.'}
              ].map((step, i) => (
                <div key={i} className="flex gap-8">
                  <span className="text-orange-500 font-black text-xl italic">{i+1}.</span>
                  <div>
                    <h4 className="font-black text-xl mb-2 uppercase tracking-wide">{step.t}</h4>
                    <p className="text-slate-500">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEGA CONTACT & FOOTER */}
      <section id="contact" className="py-32 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-black mb-10 leading-[0.9]">READY TO GO <br/> <span className="text-orange-500">OFF-GRID?</span></h2>
              <p className="text-slate-400 text-xl mb-12">Fill the form and get a detailed solar feasibility report for your property today.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl">📍</div>
                  <div><p className="text-xs text-slate-500 uppercase tracking-widest">Head Office</p><p className="font-bold">Vijay Nagar, Indore, MP</p></div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl">📞</div>
                  <div><p className="text-xs text-slate-500 uppercase tracking-widest">Phone</p><p className="font-bold">+91 99999 00000</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2rem] text-slate-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="border-b-2 border-slate-100 py-3 outline-none focus:border-orange-500 transition-colors" onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" required placeholder="+91 00000 00000" className="border-b-2 border-slate-100 py-3 outline-none focus:border-orange-500 transition-colors" onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-black uppercase tracking-widest mb-2">Address</label>
                  <input type="text" required placeholder="Indore Area" className="border-b-2 border-slate-100 py-3 outline-none focus:border-orange-500 transition-colors" onChange={e => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase tracking-widest mb-2">Solar For</label>
                    <select className="border-b-2 border-slate-100 py-3 outline-none focus:border-orange-500 font-bold" onChange={e => setFormData({...formData, type: e.target.value})}>
                      <option>Residential</option><option>Commercial</option><option>Industrial</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase tracking-widest mb-2">Current Bill</label>
                    <input type="text" placeholder="e.g. 5000" className="border-b-2 border-slate-100 py-3 outline-none focus:border-orange-500 transition-colors" onChange={e => setFormData({...formData, bill: e.target.value})} />
                  </div>
                </div>
                <button type="submit" className="w-full bg-slate-950 text-white font-black py-6 rounded-xl hover:bg-orange-500 transition-all shadow-2xl uppercase tracking-[2px] text-sm mt-4">Send Inquiry Now</button>
              </form>
            </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/10 text-center text-slate-500 text-xs tracking-widest">
            © 2026 DUATECH SOLAR SOLUTIONS | DESIGNED FOR EXCELLENCE
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
