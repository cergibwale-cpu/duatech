import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Components (ये फाइल्स आपके components फोल्डर में हैं)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Logo from './components/Logo';

// 2. Pages (ये फाइल्स आपके pages फोल्डर में हैं - सबका पहला अक्षर Capital है)
import Home from './pages/Home';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0A1F44] text-white">
        {/* Navbar हमेशा ऊपर रहेगा */}
        <Navbar />
        
        {/* यहाँ आपके सारे पेजेस बदलेंगे */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* Footer और WhatsApp Button */}
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
