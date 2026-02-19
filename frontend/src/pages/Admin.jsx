import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // यहाँ आपका पासवर्ड है
    if (password === 'Admin@Duva2024') { 
      localStorage.setItem('adminToken', 'true'); // टोकन सेव करना ज़रूरी है
      navigate('/admin/dashboard');
    } else {
      alert("Unauthorized Access! कृपया सही पासवर्ड डालें।");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0A1F44]">
      <div className="bg-white/5 p-10 rounded-2xl border border-[#00FF88]/30 backdrop-blur-xl w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <Lock className="text-[#00FF88] mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Admin Login</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="password" 
            placeholder="Enter Access Key" 
            className="w-full bg-black/20 border border-white/10 p-4 rounded-lg text-white focus:border-[#00FF88] outline-none transition-all"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-[#00FF88] text-[#0A1F44] py-4 rounded-lg font-black uppercase hover:bg-white transition-all">
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
