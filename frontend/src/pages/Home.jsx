import React, { useEffect } from 'react';
import LeadForm from '../components/LeadForm';

const Home = () => {
  // Simple Animation Effect on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-orange-200">
      
      {/* 1. NAVBAR (No Admin Link Here) */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-black text-blue-900 tracking-tighter">
          DUVA<span className="text-orange-500">TECH</span> SOLAR
        </h1>
        <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-widest">
          <a href="#services" className="hover:text-orange-500 transition">Solutions</a>
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-orange-500 transition shadow-lg">Free Quote</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/40 z-10"></div>
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://cdn.pixabay.com/video/2019/02/14/21379-317424900_tiny.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white px-4 reveal opacity-0 translate-y-10 transition duration-1000">
          <span className="bg-orange-500 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block uppercase">ISO 9001:2015 Certified</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Power Your Future <br/>With Sun</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-200">Professional solar installations for homes, businesses, and industries with 25 years performance warranty.</p>
          <a href="#contact" className="bg-orange-500 text-white px-12 py-5 rounded-full text-lg font-black hover:bg-white hover:text-orange-500 transition-all shadow-2xl">BOOK SITE SURVEY</a>
        </div>
      </section>

      {/* 3. THE 3 SECTIONS (Residential, Commercial, Industrial) */}
      <section id="services" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal opacity-0 translate-y-10 transition duration-700">
            <h2 className="text-4xl font-bold text-blue-900">Expert Solar Solutions</h2>
            <p className="text-gray-500 mt-4">Tailored solar power systems for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f", icon: "🏠" },
              { title: "Commercial", img: "https://images.unsplash.com/photo-1613665813446-82a78c44b853", icon: "🏢" },
              { title: "Industrial", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2", icon: "🏭" }
            ].map((s, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl reveal opacity-0 translate-y-10 transition duration-700 delay-100 shadow-xl bg-white">
                <img src={s.img} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" alt={s.title} />
                <div className="p-8">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{s.title} Solar</h3>
                  <p className="text-gray-600 mb-6">Complete end-to-end installation with government subsidy assistance.</p>
                  <button className="font-bold text-orange-500 group-hover:translate-x-2 transition">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEAD FORM SECTION WITH TESTIMONIALS */}
      <section id="contact" className="py-24 bg-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal opacity-0 translate-y-10 transition duration-700">
            <h2 className="text-4xl font-bold mb-8 italic text-orange-400">"Reduce your bills to ZERO."</h2>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border-l-4 border-orange-500">
                <p className="italic text-gray-200">"Best decision for my factory. We saved ₹40,000 in the first month!"</p>
                <p className="mt-4 font-bold">- Rajesh Kumar, Industrial Client</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border-l-4 border-orange-500">
                <p className="italic text-gray-200">"Excellent service and subsidy support was very helpful."</p>
                <p className="mt-4 font-bold">- Amit Sharma, Residential Client</p>
              </div>
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition duration-700 delay-200">
             <LeadForm />
          </div>
        </div>
      </section>

      {/* 5. FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/91XXXXXXXXXX?text=Hi DUVATech, I want a free quote for Solar installation." 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all border-4 border-white"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.81.99-1.18.004-.1-.027-.2-.11-.273l-1.427-1.396c-.11-.11-.205-.157-.33-.157-.174 0-.47.05-.69.215-.275.203-1.166 1.156-1.166 2.373 0 .733.687 2.14 1.156 2.766 1.05 1.4 3.033 2.924 4.14 3.336 1.04.388 1.956.45 2.51.45.925 0 1.833-.664 2.108-1.07.247-.367.33-.843.33-1.11 0-.174-.132-.234-.332-.234zM16 0c-8.837 0-16 7.163-16 16 0 2.824.733 5.48 2.01 7.788L0 32l8.47-2.162A15.89 15.89 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.2c-2.4 0-4.66-.593-6.666-1.644l-.478-.25-4.964 1.27 1.292-4.73-.274-.47C3.847 21.378 3.2 18.775 3.2 16c0-7.058 5.742-12.8 12.8-12.8 7.058 0 12.8 5.742 12.8 12.8 0 7.058-5.742 12.8-12.8 12.8z"></path></svg>
      </a>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-tighter">DUVATECH</h4>
            <p className="text-gray-500 leading-relaxed">India's emerging solar technology provider. Committed to high-efficiency PV modules and seamless execution.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Our Projects</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">Reach Us</h4>
            <p className="text-gray-500 mb-2">📍 [Shibani Ashiya Appartment,
Plot No. 2536, Line Number 3,
New Kalimati Road, Kasidih,
Jamshedpur, Jharkhand – 831001]</p>
            <p className="text-gray-500 mb-2">📞 +91 9905697738</p>
            <p className="text-gray-500">✉️ contact@duvatechsolar.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2026 DUVA TECH SOLAR PVT LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
