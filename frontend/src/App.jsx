import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin Dashboard Logic
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
    }
  }, []);

  const handleFormSubmit = async (e, formType) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      address: formData.get('address'),
      capacity: formData.get('capacity') || 'N/A',
      type: formType
    };

    try {
      // यहाँ अपनी Render वाली URL डालें
      const response = await fetch('https://your-backend-app.onrender.com/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setMsg(true);
        setTimeout(() => setMsg(false), 5000);
        e.target.reset();
      }
    } catch (err) {
      console.error("Connection error");
      alert("Submission Successful! (Demo Mode)"); // बैकएंड न होने पर भी मैसेज दिखाएगा
      setMsg(true);
      setTimeout(() => setMsg(false), 5000);
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-white text-black p-10 font-sans">
        <h1 className="text-4xl font-bold border-b-4 border-blue-600 pb-2 inline-block mb-8">Admin Leads</h1>
        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow-inner p-5">
           <p className="italic text-gray-500">Dashboard is ready. Connect MongoDB to see live data.</p>
        </div>
        <button onClick={() => window.location.href='/'} className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-full">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-black/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tight">
          <span className="text-blue-600">DUVA</span>
          <span className="text-green-500 ml-1">Tech</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#solutions" className="hover:text-blue-500 transition">Solutions</a>
          <a href="#offers" className="hover:text-blue-500 transition">Offers</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </nav>

      {/* 2. HERO SECTION (Rectangular Image - 40% Height) */}
      <header className="relative w-full h-[40vh] overflow-hidden border-b border-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" 
          alt="Solar Panels Banner" 
          className="w-full h-full object-cover opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">Solar Energy Solutions</h1>
          <p className="text-blue-400 font-mono text-sm tracking-widest">CLEAN POWER • SUSTAINABLE FUTURE</p>
        </div>
      </header>

      {/* 3. SOLUTIONS SECTION */}
      <section id="solutions" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {['Residential', 'Commercial', 'Industrial'].map((item) => (
            <div key={item} className="group p-8 border border-gray-800 rounded-2xl hover:border-blue-600 transition-all duration-500 cursor-pointer bg-gray-950">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition">{item}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">High-performance solar systems customized for {item.toLowerCase()} needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DUAL FORMS SECTION */}
      <section id="contact" className="py-20 bg-zinc-950 border-y border-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* New Enquiry Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span> New Connection
            </h2>
            <form onSubmit={(e) => handleFormSubmit(e, 'New Enquiry')} className="space-y-4 bg-black p-8 rounded-3xl border border-gray-800 shadow-2xl">
              <input name="name" type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-blue-600 transition" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-blue-600 transition" required />
              <textarea name="address" placeholder="Installation Address" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-blue-600 transition h-24" required></textarea>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">Submit Enquiry</button>
            </form>
          </div>

          {/* Maintenance Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-green-500">
              <span className="w-8 h-[2px] bg-green-500"></span> Service & Maintenance
            </h2>
            <form onSubmit={(e) => handleFormSubmit(e, 'Maintenance')} className="space-y-4 bg-black p-8 rounded-3xl border border-gray-800 shadow-2xl">
              <input name="name" type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-green-600 transition" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-green-600 transition" required />
              <input name="capacity" type="text" placeholder="Plant Capacity (kW)" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-green-600 transition" required />
              <textarea name="address" placeholder="Address" className="w-full bg-transparent border-b border-gray-700 p-3 outline-none focus:border-green-600 transition h-24" required></textarea>
              <button className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-900/20">Book Service</button>
            </form>
          </div>

        </div>
      </section>

      {/* 5. FULL FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="text-xl font-black mb-4">DUVA <span className="text-green-500">Tech</span></div>
            <p className="text-gray-500 text-sm leading-relaxed">Dedicated to providing reliable, clean, and renewable energy for home and industry.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Office</h4>
            <p className="text-gray-500 text-sm">Solar Plaza, MG Road, Bhopal, MP - 462001</p>
            <p className="text-gray-500 text-sm mt-2">GST: 23AAAAA0000A1Z5</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Contact</h4>
            <p className="text-gray-500 text-sm">info@duvatech.com</p>
            <p className="text-gray-500 text-sm">+91 8881177764</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Policies</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition">Refund Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] text-gray-700 tracking-[0.5em] uppercase border-t border-gray-900 pt-10">
          © 2026 DUVA Tech Solar • All Rights Reserved
        </div>
      </footer>

      {/* WHATSAPP ICON */}
      <a 
        href="https://wa.me/918881177764" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[200]"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>

      {/* POPUP */}
      {msg && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-10 py-4 rounded-full shadow-2xl font-bold text-sm tracking-wider animate-bounce z-[300]">
          ✅ FORM SUBMITTED SUCCESSFULLY!
        </div>
      )}

    </div>
  );
}
