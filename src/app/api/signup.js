// pages/api/signup.js

import connectToDatabase from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();

      const { name, email, password, gender } = req.body;

      // Validate input fields here if needed

      const existingUser = await db.collection('users').findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      await db.collection('users').insertOne({ name, email, password, gender });

      return res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
