import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: '', email: '', mobile: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', data);
      alert('Inquiry Sent! Hamari team aapse jald sampark karegi. ☀️');
      setData({ name: '', email: '', mobile: '' });
    } catch (err) {
      alert('Error! Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* Navbar */}
      <nav style={{ position: 'fixed', width: '100%', top: 0, backgroundColor: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 1000, boxSizing: 'border-box' }}>
        <h1 style={{ margin: 0, color: '#1e3a8a', fontWeight: '900' }}>DUVA<span style={{ color: '#f97316' }}>TECH</span> SOLAR</h1>
        <a href="#contact" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '10px 20px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>GET QUOTE</a>
      </nav>

      {/* Hero Section */}
      <header style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#1e3a8a', color: 'white', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', margin: '0 0 20px 0', fontWeight: '800' }}>Save Your Money</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>India's Premium Solar Solutions Provider.</p>
        <a href="#contact" style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: '900', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)' }}>START SAVING NOW</a>
      </header>

      {/* Solutions */}
      <section id="services" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', color: '#1e3a8a', marginBottom: '50px' }}>OUR EXPERTISE</h3>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Residential', 'Commercial', 'Industrial'].map((item) => (
            <div key={item} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '25px', width: '280px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderBottom: '5px solid #f97316' }}>
              <h4 style={{ fontSize: '1.5rem', margin: '0 0 15px 0' }}>{item} Solar</h4>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>Efficient solar solutions to reduce electricity bills to zero.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" style={{ backgroundColor: '#1e3a8a', padding: '80px 20px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Switch?</h2>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1' }}>✓ 25 Years Panel Warranty<br/>✓ Easy EMI Options Available<br/>✓ Fast Installation within 15 Days</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', width: '100%', maxWidth: '400px', boxSizing: 'border-box' }}>
            <h3 style={{ color: '#1e3a8a', textAlign: 'center', marginTop: 0, marginBottom: '30px' }}>Fill Your Details</h3>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '16px' }} placeholder="Your Full Name" required value={data.name} onChange={e => setData({...data, name: e.target.value})} />
              <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '16px' }} placeholder="Email Address" type="email" required value={data.email} onChange={e => setData({...data, email: e.target.value})} />
              <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '16px' }} placeholder="Mobile Number" required value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})} />
              <button style={{ backgroundColor: '#f97316', color: 'white', padding: '18px', borderRadius: '12px', border: 'none', fontWeight: '900', fontSize: '1rem', cursor: 'pointer', marginTop: '10px' }}>SEND MY INQUIRY</button>
            </form>
          </div>
        </div>
      </section>

      {/* Chota WhatsApp Icon */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', padding: '15px', borderRadius: '50%', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" style={{ width: '30px', height: '30px', filter: 'invert(1)' }} alt="WhatsApp" />
      </a>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '14px', borderTop: '1px solid #e2e8f0' }}>
        © 2026 DUVA TECH SOLAR PVT LTD
      </footer>
    </div>
  );
}

export default App;
