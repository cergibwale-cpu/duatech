import React, { useState } from 'react';
import { Sun, Shield, Tool, Zap, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Residential');

  const projectData = {
    Residential: { range: "3KW - 10KW", desc: "Small to Medium homes, Villas, and Row houses.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" },
    Commercial: { range: "10KW - 100KW", desc: "Schools, Hospitals, Private Offices, and Showrooms.", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" },
    Industrial: { range: "100KW - 1MW+", desc: "Factories, Cold Storages, and Large Scale Warehouses.", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=800" }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8fafc', margin: 0 }}>
      
      {/* 1. Header & Hero */}
      <nav style={{ backgroundColor: 'white', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ color: '#1e3a8a', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sun style={{ color: '#f97316' }} /> DUVATECH SOLAR
        </h2>
        <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
          <a href="#projects" style={{ textDecoration: 'none', color: '#64748b' }}>Projects</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#f97316' }}>Get Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ height: '60vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0' }}>Power Your Future</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px' }}>Indore's Most Trusted Solar Company. Save up to 90% on electricity.</p>
        <a href="#new-connection" style={{ marginTop: '20px', backgroundColor: '#f97316', color: 'white', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>FREE SITE SURVEY</a>
      </div>

      {/* 2. Interactive Projects (KW Tabs) */}
      <section id="projects" style={{ padding: '80px 10%' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '2.5rem' }}>Our Specialized Solutions</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '40px 0' }}>
          {Object.keys(projectData).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '12px 30px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: '0.3s', backgroundColor: activeTab === tab ? '#1e3a8a' : 'white', color: activeTab === tab ? 'white' : '#64748b', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', flexWrap: 'wrap' }}>
          <img src={projectData[activeTab].img} style={{ flex: '1', minWidth: '300px', height: '300px', objectCover: 'cover', borderRadius: '20px' }} />
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '2rem', color: '#1e3a8a', margin: '0 0 10px 0' }}>{activeTab} Range</h3>
            <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '5px 15px', borderRadius: '8px', fontWeight: 'bold' }}>{projectData[activeTab].range}</span>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '20px', lineHeight: '1.6' }}>{projectData[activeTab].desc}</p>
          </div>
        </div>
      </section>

      {/* 3. Forms (Two Columns) */}
      <section id="contact" style={{ padding: '80px 5%', backgroundColor: '#1e3a8a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Form 1: New Connection */}
          <div id="new-connection" style={{ flex: '1', minWidth: '350px', backgroundColor: 'white', padding: '40px', borderRadius: '30px', borderTop: '10px solid #f97316' }}>
            <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>New Solar Connection</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input style={inputStyle} placeholder="Full Name" />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input style={inputStyle} placeholder="Mobile No" />
                <input style={inputStyle} placeholder="Avg. Monthly Bill" />
              </div>
              <input style={inputStyle} placeholder="Consumer Number" />
              <textarea style={{ ...inputStyle, height: '80px' }} placeholder="Full Installation Address"></textarea>
              <button style={btnStyle}>REQUEST QUOTE</button>
            </form>
          </div>

          {/* Form 2: Service */}
          <div id="service-form" style={{ flex: '1', minWidth: '350px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
            <h2>Service & Repair</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input style={darkInput} placeholder="Contact Name" />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input style={darkInput} placeholder="Phone No" />
                <input style={darkInput} placeholder="Plant Size (KW)" />
              </div>
              <textarea style={{ ...darkInput, height: '80px' }} placeholder="Address of Site"></textarea>
              <button style={{ ...btnStyle, backgroundColor: 'white', color: '#1e3a8a' }}>BOOK SERVICE VISIT</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
        © 2026 DUVATECH SOLAR PVT LTD. INDORE.
      </footer>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/91XXXXXXXXXX" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: 'white', padding: '15px', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, textDecoration: 'none' }}>
        <MessageCircle size={30} />
      </a>

    </div>
  );
}

const inputStyle = { padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' };
const darkInput = { padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', fontSize: '1rem', outline: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' };
const btnStyle = { backgroundColor: '#f97316', color: 'white', padding: '15px', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.3s' };
