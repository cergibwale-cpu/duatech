import './index.css';
import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [leads, setLeads] = useState([]); // लीड्स स्टोर करने के लिए

  // एडमिन चेक और डेटा फेचिंग
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
      fetchLeads(); // एडमिन पेज पर लीड्स लोड करें
    }
  }, []);

  const fetchLeads = async () => {
    try {
      // अपनी Render वाली URL यहाँ डालें
      const response = await fetch('https://your-backend-render-url.onrender.com/api/leads');
      const data = await response.json();
      setLeads(data);
    } catch (err) {
      console.log("अभी बैकएंड कनेक्ट नहीं है, इसलिए सैंपल डेटा दिख रहा है।");
      setLeads([
        { name: "Sample User", mobile: "9876543210", address: "Bhopal", type: "New Connection", capacity: "N/A" }
      ]);
    }
  };

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
      const response = await fetch('https://your-backend-render-url.onrender.com/api/enquiry', {
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
      setMsg(true); // डेमो के लिए सक्सेस दिखा रहा हूँ
      setTimeout(() => setMsg(false), 5000);
      e.target.reset();
    }
  };

  // --- ADMIN VIEW (डेटाबेस लीड्स देखने के लिए) ---
  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-gray-800">Admin <span className="text-orange-500">Dashboard</span></h1>
          <button onClick={() => window.location.href='/'} className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Go to Site</button>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Type</th>
                <th className="p-4">Capacity</th>
                <th className="p-4">Address</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-orange-50">
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4">{lead.mobile}</td>
                  <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{lead.type}</span></td>
                  <td className="p-4">{lead.capacity}</td>
                  <td className="p-4 text-gray-500 text-sm">{lead.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Navbar: Sticky, White Background */}
      <nav className="sticky top-0 z-[100] bg-white border-b-4 border-green-500 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-black italic">
          <span className="text-orange-600">DUVA</span>
          <span className="text-green-600 ml-1 underline decoration-orange-500">Tech</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-black uppercase tracking-widest text-gray-700">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#solutions" className="hover:text-green-600 transition">Solutions</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section: White theme with Image */}
      <header className="relative w-full h-[45vh] bg-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" className="w-full h-full object-cover opacity-90" alt="Solar" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">Switch to <span className="text-orange-500">Solar</span>,<br/>Save the <span className="text-green-600">Earth</span>.</h1>
          <p className="mt-4 text-gray-600 font-medium">Clean. Affordable. Reliable.</p>
        </div>
      </header>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {['Residential', 'Commercial', 'Industrial'].map((item) => (
            <div key={item} className="p-10 border-2 border-gray-100 rounded-3xl hover:border-green-500 transition-all shadow-sm hover:shadow-2xl bg-white text-center">
              <h3 className="text-2xl font-black mb-4 text-orange-500 uppercase italic">{item}</h3>
              <p className="text-gray-500">Top-tier solar installations for your {item.toLowerCase()} property.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dual Forms Section: Orange & Green Style */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* Form 1: New Enquiry (Orange Style) */}
          <div className="bg-white p-8 rounded-[2rem] border-l-[12px] border-orange-500 shadow-xl">
            <h2 className="text-3xl font-black mb-6 text-gray-800 uppercase italic underline decoration-green-500">New Connection</h2>
            <form onSubmit={(e) => handleFormSubmit(e, 'New Enquiry')} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-orange-500 bg-gray-50" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-orange-500 bg-gray-50" required />
              <textarea name="address" placeholder="Installation Address" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-orange-500 bg-gray-50 h-28" required></textarea>
              <button className="w-full bg-orange-600 text-white font-black py-5 rounded-xl text-xl shadow-lg hover:bg-orange-700 transition">GET QUOTE</button>
            </form>
          </div>

          {/* Form 2: Maintenance (Green Style) */}
          <div className="bg-white p-8 rounded-[2rem] border-l-[12px] border-green-500 shadow-xl">
            <h2 className="text-3xl font-black mb-6 text-gray-800 uppercase italic underline decoration-orange-500">Maintenance</h2>
            <form onSubmit={(e) => handleFormSubmit(e, 'Maintenance')} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-green-500 bg-gray-50" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-green-500 bg-gray-50" required />
              <input name="capacity" type="text" placeholder="Plant Capacity (kW)" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-green-500 bg-gray-50" required />
              <textarea name="address" placeholder="Address" className="w-full border-2 border-gray-100 p-4 rounded-xl outline-none focus:border-green-500 bg-gray-50 h-28" required></textarea>
              <button className="w-full
