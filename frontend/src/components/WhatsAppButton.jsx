import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "91XXXXXXXXXX"; // यहाँ अपना 10 अंकों का व्हाट्सएप नंबर डालें
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
    >
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
