import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// यहाँ पर अब कोई अलग से Router या Admin इंपोर्ट करने की ज़रूरत नहीं है
// क्योंकि वो सब आपकी App.jsx फाइल के अंदर पहले से सेट हैं।

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
