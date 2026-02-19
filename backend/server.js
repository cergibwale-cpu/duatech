const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Config load karna
dotenv.config();

const app = express();

// 1. Middleware
// 'cors' lagana sabse zaruri hai taaki frontend se data aa sake
app.use(cors());
app.use(express.json());

// 2. MongoDB Connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch((err) => console.error("❌ Database Connection Failed:", err));

// 3. Lead Schema (Aapki requirements ke hisaab se updated)
const leadSchema = new mongoose.Schema({
    name: String,
    mobile: { type: String, required: true }, // 10-digit validation frontend sambhaal lega
    email: String,
    address: String,
    consumerNumber: String, // Naya field jo aapne maanga tha
    monthlyBill: String,
    category: { type: String, default: 'Residential' }, // Residential/Industrial
    serviceType: { type: String, default: 'New' }, // New or Service
    capacity: String,
    status: { type: String, default: 'Pending' }, // Pending, In-Progress, Completed
    createdAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);

// 4. API Routes

// A. Leads jama karne ke liye (Frontend se aayega)
app.post('/api/leads', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        await newLead.save();
        res.status(201).json({ success: true, message: "Lead saved successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// B. Saari leads dikhane ke liye (Admin Dashboard ke liye)
app.get('/api/admin/leads', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ success: false, error: "Fetching failed" });
    }
});

// C. STATUS UPDATE KARNE KE LIYE (Yeh naya route maine add kar diya hai ✅)
app.put('/api/admin/leads/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedLead = await Lead.findByIdAndUpdate(
            req.params.id, 
            { status: status }, 
            { new: true }
        );
        if (!updatedLead) return res.status(404).json({ message: "Lead not found" });
        res.json({ success: true, message: "Status Updated Successfully", data: updatedLead });
    } catch (err) {
        res.status(500).json({ success: false, error: "Failed to update status" });
    }
});

// 5. Server Port Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend Server is running on port ${PORT}`);
});
