import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new MongoClient(process.env.MONGODB_URI);
    try {
      await client.connect();
      const db = client.db('Duvatech_solar_leads');
      const collection = db.collection('inquiries');
      
      // डेटा को डेटाबेस में डालना
      await collection.insertOne({
        ...req.body,
        date: new Date() // तारीख भी सेव हो जाएगी
      });

      return res.status(200).json({ message: 'Lead saved successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Only POST allowed' });
  }
}
