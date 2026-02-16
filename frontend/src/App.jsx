import React, { useState } from 'react';
import { Sun, Zap, Cable, Factory, CheckCircle, Phone, Shield, Award, MessageCircle, Info, Hammer } from 'lucide-react';

const App = () => {
  const [inquiryType, setInquiryType] = useState('New Installation');
  const [activePage, setActivePage] = useState('home'); // Navigation control

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully! We will contact you soon.");
  };

  const WhatsAppButton = () => (
    <a 
      href="https://wa.me/919999999999?text=Hi, I am interested in Solar Installation." 
      target="_blank" 
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all flex items-center gap-2"
    >
      <MessageCircle size={28} />
      <span className="font-bold hidden md:inline">Chat with Us</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <WhatsAppButton />

      {/* NAVIGATION */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <Sun className="text-orange-600" size={32} />
            <h1 className="text-2xl font-black">DUVATECH <span className="text-orange-600">SOLAR</span></h1>
          </div>
          <div className="hidden md:flex gap-6 font-bold text-gray-600 uppercase text-sm">
            <button onClick={() => setActivePage('home')} className={`hover:text-orange-600 ${activePage === 'home' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>Home</button>
            <button onClick={() => setActivePage('about')} className={`hover:text-orange-600 ${activePage === 'about' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>About Us</button>
            <button onClick={() => setActivePage('services')} className={`hover:text-orange-600 ${activePage === 'services' ? 'text-orange-600 border-b-2 border-orange-600' : ''}`}>Services</button>
          </div>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-bold">Inquiry Now</button>
        </div>
      </nav>

      {/* CONTENT LOGIC */}
      {activePage === 'home' && (
        <>
          {/* HERO */}
          <header className="bg-slate-900 text-white py-24 px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6">Sustainable Energy for Life</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Authorized Dealer of Adani, Tata & Waaree. We provide complete solar solutions with branded accessories.</p>
            <button onClick={() => setActivePage('services')} className="mt-8 bg-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition">View Products</button>
          </header>

          {/* SMART FORM */}
          <section className="py-20 bg-gray-100 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold text-center mb-8">Get Your Solar Quote</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <select onChange={(e) => setInquiryType(e.target.value)} className="p-4 border rounded-xl bg-gray-50 font-bold">
                  <option value="New Installation">New Solar Installation</option>
                  <option value="Service/Repair">Solar Service/Repair</option>
                </select>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="p-4 border rounded-xl" required />
                  <input type="tel" placeholder="Mobile Number" className="p-4 border rounded-xl" required />
                </div>
                <input type="text" placeholder="Your Address" className="p-4 border rounded-xl" required />
                {inquiryType === 'New Installation' ? (
                  <input type="number" placeholder="Monthly Electricity Bill (₹)" className="p-4 border border-orange-300 rounded-xl" />
                ) : (
                  <input type="text" placeholder="Current Solar Capacity (e.g. 5kW)" className="p-4 border border-blue-300 rounded-xl" />
                )}
                <button className="bg-orange-600 text-white py-4 rounded-xl font-black text-lg shadow-lg">Submit Request</button>
              </form>
            </div>
          </section>
        </>
      )}

      {activePage === 'about' && (
        <section className="max-w-5xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-black mb-8 border-l-8 border-orange-600 pl-4">About Duvatech Solar</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">हम भारत के सौर ऊर्जा क्षेत्र में एक अग्रणी नाम हैं। हमारा लक्ष्य हर घर और उद्योग को सस्ती और स्वच्छ ऊर्जा से जोड़ना है। हम सिर्फ पैनल नहीं बेचते, हम विश्वास बेचते हैं।</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-orange-50 p-6 rounded-2xl">
              <Shield className="text-orange-600 mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-2">Quality Assurance</h4>
              <p>We use only top-tier brands like Adani, Polycab, and Havells.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl">
              <Award className="text-blue-600 mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
              <p>Highly trained engineers for safe and durable installation.</p>
            </div>
          </div>
        </section>
      )}

      {activePage === 'services' && (
        <section className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-black text-center mb-16">OUR SOLUTIONS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 p-8 rounded-3xl">
              <Sun className="text-orange-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Solar Panels</h3>
              <p className="text-gray-500 mb-4">Tata Power, Adani Solar, Waaree Mono-perc modules.</p>
            </div>
            <div className="border-2 p-8 rounded-3xl">
              <Hammer className="text-gray-700 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Mounting Structure</h3>
              <p className="text-gray-500 mb-4">Hot-dip Galvanized (GI) structures to withstand high winds.</p>
            </div>
            <div className="border-2 p-8 rounded-3xl">
              <Cable className="text-blue-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Branded Accessories</h3>
              <p className="text-gray-500 mb-4">Polycab Wires, Havells Inverters, and High-quality Earthing.</p>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-orange-600 mb-4">DUVATECH SOLAR</h4>
            <p className="text-gray-400 leading-relaxed">Authorized dealer of world-class solar brands. Quality is our priority.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-
