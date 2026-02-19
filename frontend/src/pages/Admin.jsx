import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

const Admin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // यहाँ आप अपना फिक्स्ड पासवर्ड डाल सकते हैं
    if (password === 'Admin@Duva2024') { 
      localStorage.setItem('adminToken', 'secure_token_123');
      navigate('/admin/dashboard');
    } else {
      alert("Unauthorized Access!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0A1F44]">
      <div className="bg-white/5 p-10 rounded-2xl border border-[#00FF88]/30 backdrop-blur-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-[#00FF88]/10 rounded-full mb-4">
            <Lock className="text-[#00FF88]" size={32} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase">Control Center</h2>
          <p className="text-gray-400 text-sm mt-2">Restricted Area - Personnel Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-500" size={20} />
            <input 
              type="text" placeholder="Admin ID" disabled 
              className="w-full bg-black/20 border border-white/10 p-3 pl-12 rounded-lg text-white"
              value="DUVA_ADMIN"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
            <input 
              type="password" placeholder="Access Key" required
              className="w-full bg-black/20 border border-white/10 p-3 pl-12 rounded-lg text-white focus:border-[#00FF88] outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-[#00FF88] text-[#0A1F44] py-3 rounded-lg font-black uppercase hover:bg-white transition-all">
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
