import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'; // <-- Ye line add ki hai Logo import karne ke liye

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0A1F44]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* Purane DUVA TECH text ki jagah ab naya Logo component */}
      <Link to="/">
        <Logo />
      </Link>
      
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-[#00FF88] transition-colors">Home</Link>
        <Link to="/products" className="hover:text-[#00FF88] transition-colors">Services</Link>
        <Link to="/projects" className="hover:text-[#00FF88] transition-colors">Projects</Link>
        <Link to="/admin" className="text-[#00FF88] border border-[#00FF88] px-4 py-1 rounded-full hover:bg-[#00FF88] hover:text-[#0A1F44] transition-all">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
