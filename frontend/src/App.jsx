import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ध्यान दे: यहाँ './components/' लगाना जरूरी है क्योंकि तेरी फाइलें उस फोल्डर में हैं
import Navbar from './components/Navbar'; 
import Home from './/Home';     
import Admin from './Admin';   

function App() {
  return (
    <div className="App">
      {/* नेविगेशन बार हर पेज पर दिखेगा */}
      <Navbar /> 

      {/* यहाँ से पेज बदलेंगे */}
      <Routes>
        {/* जब कोई वेबसाइट खोलेगा तो Home दिखेगा */}
        <Route path="/" element={<Home />} />
        
        {/* जब कोई /admin पर जाएगा तो Admin Panel दिखेगा */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1', marginTop: '50px' }}>
        <p>© 2026 Duvatech Solar - Authorized Tata Power Dealer</p>
      </footer>
    </div>
  );
}

export default App;
