const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // यह आपकी .env फाइल से पासवर्ड पढ़ेगा

const app = express();

// --- 1. MIDDLEWARE ---
// यह लाइन सबसे ज़रूरी है, इसके बिना वेबसाइट पर डेटा "Block" हो जाता है
app.use(cors()); 
app.use(express.json());

// --- 2. MONGOOSE CONNECTION ---
// यहाँ हम MongoDB Cluster से जुड़ रहे हैं
mongoose.connect(process.env.MONGODB_URI || 'आपका_MONGO_URL_यहाँ_डालें')
  .then(() => console.log('✅ Connected to MongoDB Cluster'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- 3. LEAD MODEL ---
// यह बताता है कि डेटाबेस में क्या-क्या स्टोर है
const leadSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  type: String, // Residential, Commercial, etc.
  createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);

// --- 4. API ROUTES ---

// यह रूट वेबसाइट (Frontend) को डेटा भेजेगा
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }); // नया डेटा पहले दिखेगा
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads", error });
  }
});

// यह रूट नया डेटा सेव करने के लिए है (जब कोई फॉर्म भरेगा)
app.post('/api/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: "Lead saved successfully!" });
  } catch (error) {
    res.status(400).json({ message: "Error saving lead", error });
  }
});

// --- 5. SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
