import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ 
    name: '', phone: '', address: '', inquiryType: 'Residential', bill: '' 
  });
  const [scrolled, setScrolled] = useState(false);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', formData);
      alert("✅ Inquiry Sent! Our Team will contact you within 24 hours.");
      setFormData({ name: '', phone: '', address: '', inquiryType: 'Residential', bill: '' });
    } catch (err) {
      alert("❌ Error sending data. Check your connection.");
    }
  };

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      
      {/* 1. STICKY NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            <span className={scrolled ? 'text-blue-900' : 'text-orange-400'}>Dua</span>Tech
          </div>
          <div className="hidden md:flex space-x-8 font-bold uppercase text-sm tracking-widest">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#about" className="hover:text-orange-500">Why Us</a>
            <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Contact Now</a>
          </div>
        </div>
      </nav>

      {/* 2. MEGA HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Solar Panel Background"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight uppercase">
            Power Your <span className="text-orange-400">Future</span> Today
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto text-gray-200">
            Indore's most trusted solar solutions provider. Reduce your electricity bills by up to 90% with Govt. Subsidy.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="#contact" className="bg-orange-500 hover:bg-white hover:text-orange-600 text-white font-black px-10 py-5 rounded-md text-xl transition-all transform hover:scale-105 shadow-2xl">GET FREE QUOTE</a>
            <a href="#services" className="bg-transparent border-2 border-white text-white font-black px-10 py-5 rounded-md text-xl hover:bg-white hover:text-black transition-all">OUR SERVICES</a>
          </div>
        </div>
      </section>

      {/* 3. FEATURE STATS (Differentiator) */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white">
          <div className="group p-4">
            <h3 className="text-5xl font-black text-orange-400 mb-2">500+</h3>
            <p className="uppercase tracking-widest font-bold opacity-70">Happy Clients</p>
          </div>
          <div className="group p-4">
            <h3 className="text-5xl font-black text-orange-400 mb-2">12+</h3>
            <p className="uppercase tracking-widest font-bold opacity-70">Years of Trust</p>
          </div>
          <div className="group p-4">
            <h3 className="text-5xl font-black text-orange-400 mb-2">25Y</h3>
            <p className="uppercase tracking-widest font-bold opacity-70">Warranty</p>
          </div>
          <div className="group p-4">
            <h3 className="text-5xl font-black text-orange-400 mb-2">90%</h3>
            <p className="uppercase tracking-widest font-bold opacity-70">Cost Saving</p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Long Content) */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-2xl shadow-2xl" 
              alt="Installation"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-orange-600 font-black uppercase tracking-widest">About Dua Tech</span>
            <h2 className="text-5xl font-black text-blue-900 mt-4 mb-8">Why Indore Trusts Us?</h2>
            <div className="space-y-6">
              {[
                {t: "Expert Installation", d: "Certified engineers with over a decade of experience."},
                {t: "Govt. Subsidy Support", d: "We handle all the paperwork for your PM-Surya Ghar subsidy."},
                {t: "Best Brands", d: "Authorized partners for Tata Power, Adani, and Waaree."}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-black text-xl">{item.t}</h4>
                    <p className="text-gray-600">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID (Professional Layout) */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black text-blue-900">What We Offer</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {n: "Residential Solar", i: "🏠", c: "Save up to ₹50,000 annually on home bills."},
            {n: "Commercial Solar", i: "🏢", c: "Perfect for factories, schools, and hospitals."},
            {n: "Solar Maintenance", i: "🔧", c: "Professional cleaning and health checkups."}
          ].map((s) => (
            <div key={s.n} className="p-10 border-2 border-gray-100 rounded-3xl hover:border-orange-500 transition-all group">
              <div className="text-6xl mb-6">{s.i}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-orange-600 transition">{s.n}</h3>
              <p className="text-gray-600 mb-6">{s.c}</p>
              <a href="#contact" className="text-blue-900 font-bold hover:underline">Request Details →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LOGO SECTION (Brands We Handle) */}
      <section className="py-16 border-y-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all gap-8">
          <span className="text-3xl font-black">TATA SOLAR</span>
          <span className="text-3xl font-black">ADANI SOLAR</span>
          <span className="text-3xl font-black">WAAREE</span>
          <span className="text-3xl font-black">LOOM SOLAR</span>
          <span className="text-3xl font-black">VIKRAM</span>
        </div>
      </section>

      {/* 7. CONTACT & LEAD FORM (Footer-Bottom) */}
      <section id="contact" className="py-24 bg-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-6">Let's Go Solar!</h2>
            <p className="text-xl text-blue-200 mb-10 leading-relaxed">
              Drop your details, and our solar expert will visit your site for a FREE site survey and saving estimation.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4"><span>📍</span> 405, Dua Tech Tower, Vijay Nagar, Indore</div>
              <div className="flex items-center gap-4"><span>📞</span> +91 99999 88888</div>
              <div className="flex items-center gap-4"><span>✉️</span> support@duatechsolar.com</div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-3xl text-gray-900">
            <h3 className="text-3xl font-black mb-8 text-center text-blue-900 italic">Get A Call Back</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-500 outline-none" required onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="tel" placeholder="Mobile Number" className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-500 outline-none" required onChange={e => setFormData({...formData, phone: e.target.value})} />
              <input type="text" placeholder="Location (e.g. Vijay Nagar, Indore)" className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-500 outline-none" required onChange={e => setFormData({...formData, address: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <select className="px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-500 outline-none" onChange={e => setFormData({...formData, inquiryType: e.target.value})}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
                <input type="text" placeholder="Avg Monthly Bill" className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-500 outline-none" onChange={e => setFormData({...formData, bill: e.target.value})} />
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-black py-5 rounded-xl text-xl hover:bg-black transition-all shadow-xl uppercase">Submit Inquiry Now</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2026 DUATECH SOLAR SOLUTIONS | INDORE | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;
