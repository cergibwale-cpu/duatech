import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Professional Icons
const SunIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>;
const MenuIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" width="35" height="35" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

export default function App() {
  const [activeTab, setActiveTab] = useState('Residential');
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const API_URL = "https://duatech.onrender.com/api/leads";

  useEffect(() => {
    const handleHashChange = () => setIsAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(API_URL);
      setLeads(res.data);
    } catch (err) { console.error("Error fetching data:", err); }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") { setIsLoggedIn(true); fetchLeads(); }
    else { alert("Wrong Password!"); }
  };

  const clearHash = () => { window.location.hash = ""; setIsAdmin(false); setIsLoggedIn(false); };

  // --- ADMIN VIEW ---
  if (isAdmin) {
    if (!isLoggedIn) {
      return (
        <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#f0f2f5', fontFamily:'sans-serif'}}>
          <form onSubmit={handleLogin} style={{background:'white', padding:'40px', borderRadius:'20px', boxShadow:'0 10px 25px rgba(0,0,0,0.1)', textAlign:'center', width:'320px'}}>
            <h2 style={{color:'#1e3a8a'}}>Admin Login</h2>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:'100%', padding:'12px', margin:'20px 0', borderRadius:'10px', border:'1px solid #ddd'}} />
            <button type="submit" style={{width:'100%', padding:'12px', background:'#1e3a8a', color:'white', border:'none', borderRadius:'10px', cursor:'pointer'}}>Login</button>
            <p onClick={clearHash} style={{marginTop:'20px', color:'#666', cursor:'pointer'}}>Back to Website</p>
          </form>
        </div>
      );
    }
    return (
      <div style={{padding: '40px', fontFamily: 'sans-serif', minHeight: '100vh', background:'#f4f7f6'}}>
        <div style={{display:'flex', justifyContent:'space-between', background:'white', padding:'20px', borderRadius:'15px', boxShadow:'0 4px 10px rgba(0,0,0,0.05)'}}>
          <h2 style={{margin:0, color:'#1e3a8a'}}>MongoDB Real-time Leads</h2>
          <button onClick={clearHash} style={{padding:'10px 20px', background:'#dc2626', color:'white', border:'none', borderRadius:'8px', cursor:'pointer'}}>Logout & Clear URL</button>
        </div>
        <table style={{width:'100%', marginTop:'30px', background:'white', borderRadius:'10px', overflow:'hidden', borderCollapse:'collapse'}}>
          <thead style={{background:'#1e3a8a', color:'white'}}>
            <tr><th style={tdS}>Name</th><th style={tdS}>Phone</th><th style={tdS}>Address</th></tr>
          </thead>
          <tbody>
            {leads.map((l, i) => (<tr key={i} style={{borderBottom:'1px solid #eee'}}><td style={tdS}>{l.name}</td><td style={tdS}>{l.mobile || l.phone}</td><td style={tdS}>{l.address}</td></tr>))}
          </tbody>
        </table>
      </div>
    );
  }

  // --- MAIN WEBSITE VIEW ---
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* WHATSAPP */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" style={waBtnS}><WhatsAppIcon /></a>

      {/* NAVBAR */}
      <nav style={navS}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.8rem', fontWeight: '900' }}>
          <SunIcon /> <span style={{color: '#1e3a8a'}}>DUVA</span><span style={{color: '#22c55e'}}>TECH</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a href="#home" style={linkS}>Home</a>
          <a href="#projects" style={linkS}>Services</a>
          <a href="#about" style={linkS}>About Us</a>
          <a href="#contact" style={quoteBtnS}>GET QUOTE</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setShowMenu(!showMenu)} style={{cursor:'pointer', display:'none'}} className="mobile-toggle">
          <MenuIcon />
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {showMenu && (
        <div style={{background:'white', padding:'20px', display:'flex', flexDirection:'column', gap:'15px', borderBottom:'2px solid #eee'}}>
          <a href="#home" onClick={()=>setShowMenu(false)} style={linkS}>Home</a>
          <a href="#projects" onClick={()=>setShowMenu(false)} style={linkS}>Services</a>
          <a href="#about" onClick={()=>setShowMenu(false)} style={linkS}>About Us</a>
        </div>
      )}

      {/* HERO */}
      <header id="home" style={heroS}>
        <div style={overlayS}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900' }}>Clean Energy for a <br/><span style={{color: '#fbbf24'}}>Sustainable Future</span></h1>
          <p style={{fontSize:'1.2rem', maxWidth:'600px'}}>Expert Solar EPC Services in Indore with 5+ Years of Trust.</p>
          <a href="#contact" style={mainBtnS}>BOOK FREE SURVEY</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 10%', textAlign:'center' }}>
        <h2 style={{fontSize:'2.5rem', color:'#1e3a8a'}}>Why Duva Tech?</h2>
        <p style={{maxWidth:'800px', margin:'20px auto', fontSize:'1.1rem', lineHeight:'1.8'}}>
          With over <b>5 years of experience</b> and <b>500+ successful installations</b> in Indore, we are your premium partner for solar transitions. We handle everything from site analysis to government subsidy management.
        </p>
        <div style={{display:'flex', justifyContent:'center', gap:'50px', marginTop:'30px', flexWrap:'wrap'}}>
           <div style={statS}><h2>5+</h2><p>Years</p></div>
           <div style={statS}><h2>500+</h2><p>Projects</p></div>
           <div style={statS}><h2>5MW+</h2><p>Installed</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="projects" style={{ padding: '80px 10%', background: '#f8fafc' }}>
        <h2 style={{textAlign:'center', marginBottom:'40px', fontSize:'2.5rem', color:'#1e3a8a'}}>Our Services</h2>
        <div style={{display:'flex', justifyContent:'center', gap:'10px', marginBottom:'40px'}}>
          {['Residential', 'Commercial', 'Industrial'].map(t => (
            <button key={t} onClick={()=>setActiveTab(t)} style={{...tabBtnS, background: activeTab===t ? '#1e3a8a':'white', color: activeTab===t ? 'white':'#666'}}>{t}</button>
          ))}
        </div>
        <div style={{display:'flex', gap:'40px', background:'white', padding:'40px', borderRadius:'20px', flexWrap:'wrap', alignItems:'center', boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}>
           <img src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=500" style={{width:'100%', maxWidth:'400px', borderRadius:'15px'}} />
           <div style={{flex:1}}>
              <h3>{activeTab} Solar Installation</h3>
              <p>Top-tier components with 25-year performance warranty. Optimized for maximum ROI.</p>
           </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 5%', background: '#0f172a' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={formCardS}>
            <h3 style={{color:'#1e3a8a'}}>New Installation Inquiry</h3>
            <input style={inS} placeholder="Your Name" />
            <input style={inS} placeholder="Mobile No." />
            <textarea style={{...inS, height:'80px'}} placeholder="Site Address"></textarea>
            <button style={{...actionBtnS, background:'#1e3a8a'}}>SUBMIT</button>
          </div>
          <div style={{...formCardS, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'white'}}>
            <h3 style={{color:'#22c55e'}}>Maintenance & Service</h3>
            <input style={darkInS} placeholder="Name" />
            <input style={darkInS} placeholder="Phone" />
            <textarea style={{...darkInS, height:'80px'}} placeholder="Plant Location"></textarea>
            <button style={{...actionBtnS, background:'#22c55e'}}>BOOK SERVICE</button>
          </div>
        </div>
      </section>

      <footer style={{padding:'40px', textAlign:'center', background:'#020617', color:'#94a3b8'}}>
        <p>© 2026 DUVA TECH SOLAR PVT LTD. Indore, India.</p>
        <a href="#admin" style={{fontSize:'10px', color:'#1e3a8a', textDecoration:'none'}}>Staff Login</a>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
}

// --- STYLES ---
const navS = { display: 'flex', justifyContent: 'space-between', padding: '15px 8%', background: 'white', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', alignItems: 'center' };
const linkS = { textDecoration: 'none', color: '#475569', fontWeight: 'bold' };
const quoteBtnS = { textDecoration: 'none', background: '#1e3a8a', color: 'white', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' };
const heroS = { height: '80vh', background: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200") center/cover no-repeat' };
const overlayS = { height: '100%', width: '100%', background: 'rgba(15,23,42,0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' };
const mainBtnS = { textDecoration: 'none', background: '#22c55e', color: 'white
