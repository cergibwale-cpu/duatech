import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: '', email: '', mobile: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Backend call
      await axios.post('https://duatech.onrender.com/api/leads', data);
      
      // Popup alert - Browser ka alert OK dabane pe khud hat jata hai
      alert('Inquiry Sent! Our Team Will Get Back To You Soon. ☀️');
      
      // Form reset
      setData({ name: '', email: '', mobile: '' });
    } catch (err) {
      alert('Network Error! Please try again later.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, color: '#333', scrollBehavior: 'smooth' }}>
      
      {/* 1. Header & Navigation */}
      <nav style={{ backgroundColor: '#1e3a8a', padding: '15px 5%', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>DUVA<span style={{color:'#f97316'}}>TECH</span> SOLAR</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Services</a>
          <a href="#contact" style={{ backgroundColor: '#f97316', color: 'white', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Get Quote</a>
        </div>
      </nav>

      {/* 2. Hero Section (Puri Screen cover karega) */}
      <section style={{ backgroundColor: '#1e3a8a', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072")', backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 20px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Power Your Future With Sun</h1>
        <p style={{ fontSize: '1.4rem', maxWidth: '700px', opacity: 0.9 }}>India's leading Solar EPC provider for Home, Business, and Industries.</p>
        <a href="#contact" style={{ marginTop: '30px', backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(249,115,22,0.4)' }}>GO SOLAR NOW</a>
      </section>

      {/* 3. About Section */}
      <section id="about" style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: 'white' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>About DUVATECH</h2>
        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px', margin: '20px auto' }}>
          Hum Indore ki leading solar company hain. Hamara maqsad har ghar aur factory ko sasti aur saaf bijli dena hai. 
          25 saal ki warranty aur best-in-class service ke saath hum aapki energy costs ko zero karte hain.
        </p>
      </section>

      {/* 4. Services Section */}
      <section id="services" style={{ padding: '80px 5%', backgroundColor: '#f4f7f6' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '40px' }}>Our Services</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { title: 'Residential Solar', d: 'Ghar ke liye subsidy wala solar system.' },
            { title: 'Commercial Solar', d: 'Dukaan aur business ki bijli sasti karein.' },
            { title: 'Industrial Solar', d: 'Factory ke liye MW scale solar plants.' },
            { title: 'Maintenance', d: 'Solar panels ki cleaning aur repair services.' }
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', width: '250px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '5px solid #f97316' }}>
              <h3 style={{ color: '#1e3a8a' }}>{s.title}</h3>
              <p style={{ color: '#777' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Lead Form Section */}
      <section id="contact" style={{ padding: '100px 5%', backgroundColor: '#1e3a8a', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Get Free Site Survey</h2>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>Fill the form and get a customized quote for your rooftop in 24 hours.</p>
            <ul style={{ padding: 0, listStyle: 'none', marginTop: '20px' }}>
              <li style={{ marginBottom: '10px' }}>✔️ High Efficiency Panels</li>
              <li style={{ marginBottom: '10px' }}>✔️ Expert Installation</li>
              <li style={{ marginBottom: '10px' }}>✔️ Government Subsidy Support</li>
            </ul>
          </div>
          
          <div style={{ flex: '1', minWidth: '300px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', color: '#333' }}>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} 
                placeholder="Full Name" required value={data.name} 
                onChange={e => setData({...data, name: e.target.value})} 
              />
              <input 
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} 
                placeholder="Email Address" type="email" required value={data.email} 
                onChange={e => setData({...data, email: e.target.value})} 
              />
              <input 
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} 
                placeholder="Mobile Number" required value={data.mobile} 
                onChange={e => setData({...data, mobile: e.target.value})} 
              />
              <button style={{ backgroundColor: '#f97316', color: 'white', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.3s' }}>SEND INQUIRY</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '50px 5%', textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '10px' }}>DUVATECH SOLAR SOLUTIONS</h2>
        <p>Indore, Madhya Pradesh, India</p>
        <p style={{ marginTop: '20px', fontSize: '0.8rem' }}>© 2026 DUVATECH. All rights reserved.</p>
      </footer>

      {/* 7. WhatsApp Button (Chota aur Sahi) */}
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank" 
        style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', zIndex: 1000, textDecoration: 'none' }}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" style={{ width: '30px', height: '30px', filter: 'invert(1)' }} alt="WhatsApp" />
      </a>
      
    </div>
  );
}

export default App;
