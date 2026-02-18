import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInput, setAdminInput] = useState({ user: '', pass: '' });
  const [serviceType, setServiceType] = useState('new');
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    if (window.location.pathname === '/admin') setIsAdmin(true);
    if (isLoggedIn) fetchLeads();
  }, [isLoggedIn]);

  const fetchLeads = async () => {
    try {
      const res = await fetch('https://duatech.onrender.com/api/leads');
      const data = await res.json();
      setLeads(data.reverse());
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      mobile: form.mobile.value,
      address: form.address.value,
      serviceType: serviceType,
      projectType: serviceType === 'new' ? form.projectType.value : 'N/A',
      monthlyBill: serviceType === 'new' ? form.monthlyBill.value : 'N/A',
      installedSize: serviceType === 'old' ? form.installedSize.value : 'N/A'
    };

    try {
      await fetch('https://duatech.onrender.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setMsg(true); setTimeout(() => setMsg(false), 5000);
      form.reset();
    } catch (err) { alert("Error!"); }
  };

  if (isAdmin && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-t-8 border-orange-500">
          <h2 className="text-2xl font-black mb-6 text-center uppercase">Admin Login</h2>
          <input type="text" placeholder="User ID" className="w-full border-2 p-4 rounded-xl mb-4" onChange={(e)=>setAdminInput({...adminInput, user:e.target.value})} />
          <input type="password" placeholder="Password" className="w-full border-2 p-4 rounded-xl mb-6" onChange={(e)=>setAdminInput({...adminInput, pass:e.target.value})} />
          <button onClick={() => adminInput.user === 'admin' && adminInput.pass === 'solar123' ? setIsLoggedIn(true) : alert("Wrong!")} className="w-full bg-black text-white py-4 rounded-xl font-black">LOGIN</button>
        </div>
      </div>
    );
  }

  if (isAdmin && isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-12">
        <div className="flex justify-between items-center mb-8 bg-gray-900 text-white p-6 rounded-3xl shadow-xl">
          <h1 className="text-xl font-black uppercase italic tracking-tighter">DUVA Dashboard ({leads.length})</h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-orange-500 text-white px-6 py-2 rounded-full font-black text-xs">LOGOUT</button>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border-2 border-gray-100 shadow-2xl">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-100 text-gray-500 uppercase text-[10px] font-black tracking-widest">
              <tr><th className="p-6">Client Info</th><th className="p-6">Type</th><th className="p-6">Project/Size</th><th className="p-6">Address</th></tr>
            </thead>
            <tbody className="text-sm font-bold text-gray-700">
              {leads.map((l, i) => (
                <tr key={i} className="border-b hover:bg-orange-50">
                  <td className="p-6"><div>{l.name}</div><div className="text-green-600 text-xs">{l.mobile}</div></td>
                  <td className="p-6 uppercase text-[10px]">{l.serviceType}</td>
                  <td className="p-6">{l.projectType || l.installedSize}</td>
                  <td className="p-6 uppercase text-[10px] text-gray-400">{l.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-[100] bg-white/90 border-b-4 border-green-600 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black italic uppercase"><span className="text-orange-600">DUVA</span><span className="text-green-600 ml-1">Tech</span></div>
      </nav>
      <header className="w-full h-[30vh] bg-black relative flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Solar" />
        <h1 className="relative text-3xl md:text-5xl font-black text-white italic uppercase">Our Partners & <span className="text-orange-500">Solutions</span></h1>
      </header>
      <section id="brands" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-black mb-16 uppercase italic">Our Quality Partners</h2>
        <div className="grid md:grid-cols-3 gap-10 px-10">
          <div className="space-y-4">
            <div className="bg-orange-500 text-white py-2 rounded-full font-black text-xs uppercase">Solar Panels</div>
            {['Adani Solar', 'TATA Power', 'Waaree Solar'].map(b => <div key={b} className="bg-white p-4 rounded-xl shadow-sm font-bold italic">☀️ {b}</div>)}
          </div>
          <div className="space-y-4 scale-110">
            <div className="bg-green-600 text-white py-2 rounded-full font-black text-xs uppercase">Inverters</div>
            {['Havells', 'Microtek', 'Luminous', 'Growatt'].map(b => <div key={b} className="bg-white p-4 rounded-xl shadow-md border-2 border-green-100 font-bold italic">⚡ {b}</div>)}
          </div>
          <div className="space-y-4">
            <div className="bg-gray-800 text-white py-2 rounded-full font-black text-xs uppercase">Wires & Cables</div>
            {['Polycab', 'KEI Wires', 'Finolex'].map(b => <div key={b} className="bg-white p-4 rounded-xl shadow-sm font-bold italic">🔌 {b}</div>)}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-2 border-gray-100">
          <div className="grid grid-cols-2">
            <button onClick={() => setServiceType('new')} className={`py-6 font-black uppercase tracking-widest ${serviceType === 'new' ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'}`}>New Connection</button>
            <button onClick={() => setServiceType('old')} className={`py-6 font-black uppercase tracking-widest ${serviceType === 'old' ? 'bg-green-600 text-white' : 'bg-white text-gray-400'}`}>Maintenance</button>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-14 space-y-6">
            <input name="name" type="text" placeholder="Full Name *" className="w-full border-2 p-4 rounded-2xl font-bold outline-none" required />
            <input name="mobile" type="text" maxLength="10" placeholder="Mobile Number *" className="w-full border-2 p-4 rounded-2xl font-bold outline-none" required />
            <input name="address" type="text" placeholder="Address *" className="w-full border-2 p-4 rounded-2xl font-bold outline-none" required />
            {serviceType === 'new' ? (
              <>
                <select name="projectType" className="w-full border-2 p-4 rounded-2xl font-bold" required>
                  <option value="">Project Type</option><option>Industrial</option><option>Residential</option>
                </select>
                <input name="monthlyBill" type="number" placeholder="Monthly Bill (₹) *" className="w-full border-2 p-4 rounded-2xl font-bold" required />
              </>
            ) : <input name="installedSize" type="text" placeholder="Installed Plant Size (kW) *" className="w-full border-2 p-4 rounded-2xl font-bold" required />}
            <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl text-xl hover:bg-orange-600 transition uppercase tracking-widest">Submit Enquiry</button>
          </form>
        </div>
      </section>
      {msg && <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-10 py-4 rounded-full shadow-2xl font-black z-[300] border-2 border-orange-500 animate-bounce">✅ REQUEST SUBMITTED!</div>}
    </div>
  );
}
