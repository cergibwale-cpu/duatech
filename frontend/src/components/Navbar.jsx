import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'; // <-- तेरी इम्पोर्ट की हुई लाइन वैसी ही है

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0A1F44]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* Logo Section - जैसा तूने दिया था */}
      <Link to="/">
        <Logo />
      </Link>
      
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-[#00FF88] transition-colors">Home</Link>
        
        {/* भाई, यहाँ ध्यान दे: सिर्फ़ /products को /services किया है, बाकी सब तेरा ही है */}
        <Link to="/services" className="hover:text-[#00FF88] transition-colors">Services</Link>
        
        <Link to="/projects" className="hover:text-[#00FF88] transition-colors">Projects</Link>
        
        {/* Admin Button - जैसा तूने दिया था */}
        <Link to="/admin" className="text-[#00FF88] border border-[#00FF88] px-4 py-1 rounded-full hover:bg-[#00FF88] hover:text-[#0A1F44] transition-all">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
