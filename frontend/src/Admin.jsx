import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.render.com/api/leads') // यहाँ अपना बैकएंड लिंक डालें
      .then(res => res.json())
      .then(data => setLeads(data));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Solar Inquiry Dashboard</h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Email</th>
              <th className="p-4">Type</th>
              <th className="p-4">Details (Bill/kW)</th>
              <th className="p-4">Site Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.length > 0 ? leads.map((lead) => (
              <tr key={lead._id} className="hover:bg-gray-50">
                <td className="p-4 font-bold">{lead.name}</td>
                <td className="p-4 text-blue-600">{lead.phone}</td>
                <td className="p-4 text-sm text-gray-500">{lead.email}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${lead.inquiryType === 'New Installation' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                    {lead.inquiryType}
                  </span>
                </td>
                <td className="p-4 text-sm font-medium">
                  {lead.inquiryType === 'New Installation' ? `Bill: ₹${lead.monthlyBill}` : `Existing: ${lead.currentKW}`}
                </td>
                <td className="p-4 text-gray-600 text-sm">{lead.address}</td>
              </tr>
            )) : (
              <tr><td colSpan="6" className="p-10 text-center text-gray-400">No leads found or Backend connecting...</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
